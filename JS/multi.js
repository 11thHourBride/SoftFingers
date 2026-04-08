/* ═══════════════════════════════════════════════════════════════
   SOFTFINGERS — LIVE RACE  (multi.js)
   Auto-matchmaking multiplayer — no invites, no room codes.

   Flow (identical to 10fastfingers):
   1. User enters name → clicks "Find a Race"
   2. System finds the first open lobby (state='open') or creates one
   3. Lobby countdown starts the moment 2+ players are present
      (10-second timer, more players can join while it counts down)
   4. When countdown hits 0 → room state → 'countdown' → 3-2-1 → 'racing'
   5. All players type the same text, live progress synced via Firestore
   6. Words are mandatory (Space blocked until current word is correct)
   7. Results screen → "Race Again" puts the player back in matchmaking

   Firestore structure:
     mp_lobbies/{lobbyId}
       state: 'open' | 'countdown' | 'racing' | 'finished'
       text, mode, createdAt, countdownStartAt, startedAt, finishedAt
       playerCount
     mp_lobbies/{lobbyId}/players/{playerId}
       name, color, uid, progress, wpm, acc, errors, finished,
       finishedAt, joinedAt
   ═══════════════════════════════════════════════════════════════ */

'use strict';

const mpDB   = firebase.firestore();
const mpAuth = firebase.auth();

// ── Config ────────────────────────────────────────────────────────
const LOBBY_MAX_PLAYERS   = 100;
const LOBBY_OPEN_MAX      = 10;    // max players per auto-matchmade lobby
const COUNTDOWN_SECONDS   = 10;    // lobby wait before race
const COLLECTION          = 'mp_lobbies';

// ── Colours (20 distinct) ────────────────────────────────────────
const COLORS = [
  '#00e5c8','#ff9f43','#6c63ff','#ff5f7e','#00d68f',
  '#00cfff','#ffd166','#c77dff','#ff6b35','#39d96a',
  '#e91e63','#2196f3','#4caf50','#ff5722','#9c27b0',
  '#00bcd4','#cddc39','#f44336','#3f51b5','#009688',
];

// ── Word / Quote pools ────────────────────────────────────────────
const WORDS = [
  'the','and','for','are','but','you','all','can','was','one','our','out',
  'day','get','new','now','old','see','two','who','did','its','let','say',
  'she','use','came','down','each','face','fact','find','form','free','from',
  'give','good','grow','hand','hard','have','head','help','here','high','hold',
  'home','just','keep','know','land','last','left','life','like','line','live',
  'long','look','made','make','many','mean','mind','more','most','move','much',
  'name','near','need','next','open','over','part','past','plan','play','read',
  'real','rest','road','rule','same','send','show','side','some','soon','star',
  'stay','step','stop','such','sure','take','talk','tell','than','that','them',
  'then','they','this','time','tree','true','turn','type','very','wait','walk',
  'want','week','well','were','what','when','will','with','word','work','year',
  'about','after','again','along','apply','bring','build','catch','cause','check',
  'class','clean','clear','close','color','could','count','cover','craft','dance',
  'enjoy','enter','every','exact','field','fight','final','first','focus','force',
  'found','front','fully','given','going','grand','great','group','guard','happy',
  'heart','heavy','honor','house','human','image','issue','large','later','learn',
  'level','light','local','lucky','major','match','maybe','money','month','music',
  'night','north','offer','often','order','other','owner','paint','paper','place',
  'point','power','press','price','pride','prove','quiet','raise','rapid','reach',
  'ready','refer','reply','right','rough','round','route','scale','scene','score',
  'sense','serve','sharp','shift','short','skill','sleep','small','smart','smile',
  'solid','solve','space','speak','speed','spend','stand','start','state','still',
  'stone','store','story','study','style','sweet','swift','table','teach','think',
  'throw','title','today','total','touch','tough','track','trade','train','trend',
  'truly','trust','truth','twist','under','upper','usual','value','visit','vital',
  'voice','waste','watch','water','while','white','whole','world','worry','write',
];

const QUOTES = [
  "The only way to do great work is to love what you do.",
  "In the middle of every difficulty lies opportunity.",
  "It is not the mountain we conquer but ourselves.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "You miss one hundred percent of the shots you never take.",
  "Whether you think you can or you think you cannot, you are right.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It always seems impossible until it is done.",
  "Strive not to be a success, but rather to be of value.",
  "Life is what happens when you are busy making other plans.",
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "Do not go where the path may lead; go instead where there is no path and leave a trail.",
  "You will face many defeats in life, but never let yourself be defeated.",
  "The best time to plant a tree was twenty years ago. The second best time is now.",
];

function buildText(mode) {
  if(mode === 'quote') {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }
  const shuffled = [...WORDS].sort(() => Math.random() - .5);
  return shuffled.slice(0, 80).join(' ');
}

// ── State ────────────────────────────────────────────────────────
const mp = {
  lobbyId:     null,
  playerId:    null,
  playerName:  '',
  playerColor: COLORS[0],
  mode:        'words',

  lobbyData:   null,
  players:     {},
  playerOrder: [],

  raceText:    '',
  raceWords:   [],
  raceWordIdx: 0,
  raceCommitted: 0,
  racePos:     0,
  raceErrors:  0,
  raceStartTime: null,
  raceTimer:   null,
  finished:    false,

  unsubLobby:   null,
  unsubPlayers: null,

  lobbyTimerInterval: null,   // client-side countdown tick
  screen: 'entry',
};

// ── DOM ──────────────────────────────────────────────────────────
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
function show(name) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const el = $('screen-' + name);
  if(el) el.classList.add('active');
  mp.screen = name;
}

// ── Toast ─────────────────────────────────────────────────────────
function toast(msg, type='', dur=3200) {
  const wrap = $('multi-toast-wrap');
  if(!wrap) return;
  const t = document.createElement('div');
  t.className = 'multi-toast' + (type ? ' '+type : '');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 360); }, dur);
}

// ═══════════════════════════════════════════════════════════════
//  FIND RACE  — auto-matchmaking
// ═══════════════════════════════════════════════════════════════
async function findRace() {
  const name = $('entry-name-input')?.value.trim() || getGuestName();
  if(!name) { toast('Enter your display name first', 'warn'); return; }

  mp.playerName = name;
  mp.mode       = document.querySelector('.mode-pill.active')?.dataset.mode || 'words';

  setFindBtnLoading(true);
  show('lobby');
  $('lobby-status-text').textContent = 'Finding a race…';
  $('lobby-countdown-wrap').style.display = 'none';

  try {
    // Look for an open lobby with the same mode that isn't full
    const openSnap = await mpDB.collection(COLLECTION)
      .where('state', '==', 'open')
      .where('mode',  '==', mp.mode)
      .orderBy('createdAt', 'asc')
      .limit(1)
      .get();

    let lobbyId, isNew;

    if(!openSnap.empty) {
      const doc = openSnap.docs[0];
      const data = doc.data();
      // Double-check it's not over capacity (Firestore query may lag)
      if((data.playerCount || 0) < LOBBY_OPEN_MAX) {
        lobbyId = doc.id;
        isNew   = false;
        mp.raceText = data.text;
      }
    }

    if(!lobbyId) {
      // No open lobby found — create one
      const text    = buildText(mp.mode);
      const ref     = await mpDB.collection(COLLECTION).add({
        state:       'open',
        mode:        mp.mode,
        text,
        createdAt:   firebase.firestore.FieldValue.serverTimestamp(),
        playerCount: 0,
        countdownStartAt: null,
        startedAt:   null,
        finishedAt:  null,
      });
      lobbyId     = ref.id;
      isNew       = true;
      mp.raceText = text;
    }

    // Add ourselves to the lobby's players subcollection
    const fbUser = mpAuth.currentUser;
    const uid    = fbUser ? fbUser.uid : 'guest-' + Date.now();

    // Determine color from current player count
    const playersSnap = await mpDB.collection(COLLECTION).doc(lobbyId).collection('players').get();
    const idx         = playersSnap.size;
    mp.playerColor    = COLORS[idx % COLORS.length];

    const playerRef = await mpDB.collection(COLLECTION).doc(lobbyId).collection('players').add({
      name:       mp.playerName,
      uid,
      color:      mp.playerColor,
      progress:   0,
      wpm:        0,
      acc:        100,
      errors:     0,
      finished:   false,
      finishedAt: null,
      joinedAt:   firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Increment playerCount on the lobby
    await mpDB.collection(COLLECTION).doc(lobbyId).update({
      playerCount: firebase.firestore.FieldValue.increment(1),
    });

    mp.lobbyId  = lobbyId;
    mp.playerId = playerRef.id;

    subscribeToLobby();
    renderLobbyPlayers();
    showTextPreview();

  } catch(err) {
    toast('Could not find a race: ' + err.message, 'error');
    show('entry');
  } finally {
    setFindBtnLoading(false);
  }
}

// ═══════════════════════════════════════════════════════════════
//  SUBSCRIBE  — real-time lobby + player listeners
// ═══════════════════════════════════════════════════════════════
function subscribeToLobby() {
  const lobbyRef = mpDB.collection(COLLECTION).doc(mp.lobbyId);

  mp.unsubLobby = lobbyRef.onSnapshot(snap => {
    if(!snap.exists) {
      // Lobby was deleted — only bail if not racing
      if(mp.screen !== 'race') { toast('Lobby closed.', 'warn'); leaveRace(); }
      return;
    }
    mp.lobbyData = snap.data();
    handleLobbyState(mp.lobbyData);
  });

  mp.unsubPlayers = lobbyRef.collection('players')
    .orderBy('joinedAt', 'asc')
    .onSnapshot(snap => {
      mp.players     = {};
      mp.playerOrder = [];
      snap.forEach(doc => {
        mp.players[doc.id] = { id: doc.id, ...doc.data() };
        mp.playerOrder.push(doc.id);
      });
      if(mp.screen === 'lobby') {
        renderLobbyPlayers();
        checkStartCountdown();
      }
      if(mp.screen === 'race') renderRacePlayers();
    });
}

// ── Handle lobby state transitions ──────────────────────────────
function handleLobbyState(data) {
  const state = data.state;

  if(state === 'open' && mp.screen === 'lobby') {
    $('lobby-status-text').textContent = `${mp.playerOrder.length} player${mp.playerOrder.length !== 1 ? 's' : ''} found…`;
  }

  if(state === 'countdown' && mp.screen === 'lobby') {
    startLobbyCountdown(data.countdownStartAt);
  }

  if(state === 'racing' && mp.screen !== 'race') {
    clearLobbyTimer();
    beginRace();
  }

  if(state === 'finished' && mp.screen === 'race' && !mp.finished) {
    setTimeout(showResults, 1500);
  }
}

// ── Client-side countdown tick (lobby waiting room) ──────────────
function startLobbyCountdown(countdownStartAt) {
  const wrap   = $('lobby-countdown-wrap');
  const secsEl = $('lobby-secs');
  const fill   = $('lobby-countdown-fill');
  if(wrap) wrap.style.display = '';

  clearLobbyTimer();

  const startMs = countdownStartAt?.toMillis?.() || Date.now();

  function tick() {
    const elapsed  = (Date.now() - startMs) / 1000;
    const remaining = Math.max(0, COUNTDOWN_SECONDS - elapsed);
    const pct       = ((COUNTDOWN_SECONDS - remaining) / COUNTDOWN_SECONDS) * 100;

    if(secsEl) secsEl.textContent = Math.ceil(remaining);
    if(fill)   fill.style.width = pct + '%';
    $('lobby-status-text').textContent = 'Race is about to start!';

    if(remaining <= 0) {
      clearLobbyTimer();
      // First player to notice triggers the racing transition
      triggerRaceStart();
    }
  }
  tick();
  mp.lobbyTimerInterval = setInterval(tick, 250);
}

function clearLobbyTimer() {
  if(mp.lobbyTimerInterval) { clearInterval(mp.lobbyTimerInterval); mp.lobbyTimerInterval = null; }
}

// ── Check if lobby should start countdown ───────────────────────
function checkStartCountdown() {
  if(!mp.lobbyData || mp.lobbyData.state !== 'open') return;
  if(mp.playerOrder.length >= 2 && !mp.lobbyData.countdownStartAt) {
    // Start the countdown — any client can trigger this; Firestore is idempotent
    mpDB.collection(COLLECTION).doc(mp.lobbyId).update({
      state:            'countdown',
      countdownStartAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(() => {});
  }
}

// ── Trigger race start (any client when countdown hits 0) ───────
async function triggerRaceStart() {
  if(!mp.lobbyId) return;
  const snap = await mpDB.collection(COLLECTION).doc(mp.lobbyId).get().catch(() => null);
  if(!snap || snap.data()?.state === 'racing') return; // already started

  // Begin 3-2-1 overlay, then update Firestore once at 0
  showCountdownOverlay(() => {
    mpDB.collection(COLLECTION).doc(mp.lobbyId).update({
      state:     'racing',
      startedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(() => {});
  });
}

// ═══════════════════════════════════════════════════════════════
//  COUNTDOWN OVERLAY  3-2-1-GO
// ═══════════════════════════════════════════════════════════════
function showCountdownOverlay(onDone) {
  const overlay = $('countdown-overlay');
  const numEl   = $('countdown-num');
  const lblEl   = $('countdown-label');
  if(!overlay || !numEl) { onDone?.(); return; }

  overlay.classList.add('show');
  let count = 3;

  function tick() {
    numEl.textContent = count;
    numEl.style.color = '';
    numEl.style.animation = 'none';
    requestAnimationFrame(() => { numEl.style.animation = 'cdPop .5s cubic-bezier(.34,1.56,.64,1)'; });

    if(count <= 0) {
      numEl.textContent = 'GO!';
      numEl.style.color = 'var(--success)';
      if(lblEl) lblEl.textContent = 'Type!';
      setTimeout(() => { overlay.classList.remove('show'); onDone?.(); }, 700);
      return;
    }
    count--;
    setTimeout(tick, 1000);
  }
  tick();
}

// ═══════════════════════════════════════════════════════════════
//  BEGIN RACE
// ═══════════════════════════════════════════════════════════════
function beginRace() {
  show('race');

  // Re-read text from lobby data (may have changed if this player joined mid-countdown)
  if(mp.lobbyData?.text) mp.raceText = mp.lobbyData.text;

  mp.raceWords     = mp.raceText.split(' ');
  mp.raceWordIdx   = 0;
  mp.raceCommitted = 0;
  mp.racePos       = 0;
  mp.raceErrors    = 0;
  mp.raceStartTime = null;
  mp.finished      = false;

  renderRaceText(0, '');
  renderRacePlayers();

  setRaceStat('race-wpm-val',    '0');
  setRaceStat('race-acc-val',    '100%');
  setRaceStat('race-errors-val', '0');
  $('word-error-hint').textContent = '';

  const inp = $('race-input');
  if(inp) { inp.value = ''; inp.disabled = false; inp.focus(); }
  $('race-text-box')?.classList.add('active');
  $('race-input-wrap')?.classList.add('active');

  clearInterval(mp.raceTimer);
  mp.raceTimer = setInterval(pushStats, 700);
}

// ═══════════════════════════════════════════════════════════════
//  RENDER RACE TEXT  — word-wrapped, caret-aware
// ═══════════════════════════════════════════════════════════════
function renderRaceText(wordIdx, currentInput) {
  const el = $('race-text-display');
  if(!el) return;

  const words = mp.raceWords;
  let html = '';

  words.forEach((word, wi) => {
    let wHtml = '';

    if(wi < wordIdx) {
      wHtml = word.split('').map(ch => `<span class="rc correct">${esc(ch)}</span>`).join('');
    } else if(wi === wordIdx) {
      for(let ci = 0; ci < word.length; ci++) {
        if(ci < currentInput.length) {
          wHtml += `<span class="rc ${currentInput[ci]===word[ci]?'correct':'wrong'}">${esc(word[ci])}</span>`;
        } else if(ci === currentInput.length) {
          wHtml += `<span class="rc cursor">${esc(word[ci])}</span>`;
        } else {
          const isLast = ci === word.length - 1;
          wHtml += `<span class="rc word-ahead${isLast?' word-last':''}">${esc(word[ci])}</span>`;
        }
      }
    } else {
      wHtml = word.split('').map(ch => `<span class="rc">${esc(ch)}</span>`).join('');
    }

    html += `<span class="word">${wHtml}</span>`;
    if(wi < words.length - 1) html += '<span class="rc word-space"> </span>';
  });

  el.innerHTML = html;
  const cur = el.querySelector('.rc.cursor');
  if(cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function esc(ch) {
  return ch==='<'?'&lt;':ch==='>'?'&gt;':ch==='&'?'&amp;':ch;
}

// ═══════════════════════════════════════════════════════════════
//  LIVE PLAYERS PROGRESS
// ═══════════════════════════════════════════════════════════════
function renderRacePlayers() {
  const el = $('race-players-list');
  if(!el) return;

  const sorted = mp.playerOrder
    .map(id => mp.players[id])
    .filter(Boolean)
    .sort((a,b) => b.progress - a.progress || b.wpm - a.wpm);

  el.innerHTML = sorted.map((p, i) => {
    const isMe  = p.id === mp.playerId;
    const place = i + 1;
    const pct   = Math.round(p.progress * 100);
    const medal = ['🥇','🥈','🥉'][place-1] || '';
    const fnCls = place<=3 ? `fn-${place}` : 'fn-n';
    const finTag = p.finished
      ? `<span class="rpr-finish ${fnCls}">${medal||'#'+place}</span>` : '';
    return `
      <div class="rpr-row${isMe?' me':''}">
        <div class="rpr-pos">${place}</div>
        <div class="rpr-avatar" style="background:${p.color};color:var(--bg)">${p.name[0].toUpperCase()}</div>
        <div class="rpr-name">${p.name}${isMe?'<span class="you-tag">you</span>':''}</div>
        <div class="rpr-bar-wrap">
          <div class="rpr-bar-fill" style="width:${pct}%;background:${p.color}"></div>
        </div>
        <div class="rpr-wpm${p.finished?' done':''}">${p.finished?p.wpm+' ✓':p.wpm}</div>
        ${finTag}
      </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
//  TYPING INPUT — mandatory word completion
// ═══════════════════════════════════════════════════════════════
function initRaceInput() {
  const inp  = $('race-input');
  const wrap = $('race-input-wrap');
  if(!inp) return;

  // Space key: block unless current word is typed correctly
  inp.addEventListener('keydown', e => {
    if(e.key !== ' ' && e.key !== 'Spacebar') return;
    if(mp.finished || mp.screen !== 'race') return;

    const typed    = inp.value;
    const expected = mp.raceWords[mp.raceWordIdx] || '';
    const isLast   = mp.raceWordIdx === mp.raceWords.length - 1;

    if(isLast) { e.preventDefault(); return; } // last word: no space needed
    if(typed !== expected) {
      e.preventDefault();
      // Shake feedback
      if(wrap) { wrap.classList.remove('shake'); void wrap.offsetWidth; wrap.classList.add('shake'); }
      const hint = $('word-error-hint');
      if(hint) {
        const missing = expected.slice(typed.length);
        hint.textContent = missing.length
          ? `Still need: "${missing}"`
          : `Fix the typo first`;
        setTimeout(() => { hint.textContent = ''; }, 1800);
      }
    }
    // If typed === expected, allow the space naturally
  });

  // Input handler
  inp.addEventListener('input', e => {
    if(mp.finished || mp.screen !== 'race') return;
    const val      = e.target.value;
    const expected = mp.raceWords[mp.raceWordIdx] || '';
    const isLast   = mp.raceWordIdx === mp.raceWords.length - 1;

    if(!mp.raceStartTime && val.length > 0) mp.raceStartTime = Date.now();

    const typed = isLast ? val.replace(/ /g,'') : val;

    // Commit word when space typed after correct word
    if(!isLast && val.endsWith(' ') && val.trimEnd() === expected) {
      mp.raceWordIdx++;
      mp.raceCommitted = mp.raceWords.slice(0, mp.raceWordIdx).join(' ').length + 1;
      inp.value = '';
      $('word-error-hint').textContent = '';
      if(wrap) wrap.classList.remove('shake');
      renderRaceText(mp.raceWordIdx, '');
      pushStats();
      return;
    }

    // Count errors in current word
    let errs = 0;
    for(let i = 0; i < typed.length; i++) {
      if(typed[i] !== (expected[i] || '')) errs++;
    }
    mp.raceErrors = errs; // only current word errors (committed words were all correct)
    mp.racePos    = mp.raceCommitted + typed.length;

    renderRaceText(mp.raceWordIdx, typed);

    // Last word: finish when fully and correctly typed
    if(isLast && typed === expected) {
      inp.value = '';
      mp.raceCommitted = mp.raceText.length;
      mp.racePos       = mp.raceText.length;
      finishRace();
    }
  });

  inp.addEventListener('focus', () => {
    $('race-text-box')?.classList.add('active');
    if(wrap) wrap.classList.add('active');
  });
  inp.addEventListener('blur', () => {
    $('race-text-box')?.classList.remove('active');
    if(wrap) { wrap.classList.remove('active'); wrap.classList.remove('shake'); }
  });
}

// ── Push stats to Firestore (throttled by interval) ─────────────
let _lastPush = 0;
function pushStats() {
  if(!mp.raceStartTime || mp.finished || !mp.playerId) return;
  const now = Date.now();
  if(now - _lastPush < 500) return;
  _lastPush = now;

  const elapsed = (now - mp.raceStartTime) / 1000 / 60;
  const correct = Math.max(0, mp.racePos - mp.raceErrors);
  const wpm     = elapsed > 0.001 ? Math.max(0, Math.round((correct/5)/elapsed)) : 0;
  const acc     = mp.racePos > 0  ? Math.round((correct/mp.racePos)*100) : 100;
  const prog    = mp.raceText.length > 0 ? mp.racePos/mp.raceText.length : 0;

  setRaceStat('race-wpm-val',    wpm);
  setRaceStat('race-acc-val',    acc+'%');
  setRaceStat('race-errors-val', mp.raceErrors);

  mpDB.collection(COLLECTION).doc(mp.lobbyId)
    .collection('players').doc(mp.playerId)
    .update({ progress:prog, wpm, acc, errors:mp.raceErrors })
    .catch(() => {});
}

function setRaceStat(id, val) { const e=$(id); if(e) e.textContent=val; }

// ═══════════════════════════════════════════════════════════════
//  FINISH RACE
// ═══════════════════════════════════════════════════════════════
async function finishRace() {
  if(mp.finished) return;
  mp.finished = true;
  clearInterval(mp.raceTimer);

  const elapsed = mp.raceStartTime ? (Date.now()-mp.raceStartTime)/1000/60 : 0.01;
  const correct = Math.max(0, mp.racePos - mp.raceErrors);
  const wpm     = elapsed>0.001 ? Math.max(0,Math.round((correct/5)/elapsed)) : 0;
  const acc     = mp.racePos>0  ? Math.round((correct/mp.racePos)*100) : 100;

  $('race-text-box')?.classList.add('finished');
  $('race-text-box')?.classList.remove('active');
  const inp = $('race-input');
  if(inp) { inp.disabled=true; inp.placeholder='✓ Finished!'; }

  const finishedBefore = Object.values(mp.players).filter(p=>p.finished&&p.id!==mp.playerId).length;
  const place = finishedBefore + 1;
  const emoji = ['🥇','🥈','🥉'][place-1] || `#${place}`;
  toast(`${emoji} Finished! ${wpm} WPM · ${acc}% accuracy`, 'success', 5000);

  if(mp.playerId && mp.lobbyId) {
    await mpDB.collection(COLLECTION).doc(mp.lobbyId)
      .collection('players').doc(mp.playerId)
      .update({ progress:1, wpm, acc, finished:true, finishedAt:firebase.firestore.FieldValue.serverTimestamp() })
      .catch(()=>{});
  }

  // Any player can mark the lobby finished when all are done
  const allDone = Object.values(mp.players).every(p=>p.finished||(p.id===mp.playerId));
  if(allDone && mp.lobbyId) {
    mpDB.collection(COLLECTION).doc(mp.lobbyId).update({
      state:'finished', finishedAt:firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(()=>{});
  }

  setTimeout(showResults, 2500);
}

// ═══════════════════════════════════════════════════════════════
//  RESULTS
// ═══════════════════════════════════════════════════════════════
function showResults() {
  show('results');

  const players = mp.playerOrder
    .map(id => mp.players[id])
    .filter(Boolean)
    .sort((a,b) => {
      if(a.finished&&b.finished) {
        const ta = a.finishedAt?.toMillis?.() || 0;
        const tb = b.finishedAt?.toMillis?.() || 0;
        return ta-tb || b.wpm-a.wpm;
      }
      if(a.finished) return -1; if(b.finished) return 1;
      return b.progress-a.progress||b.wpm-a.wpm;
    });

  // My result
  const myIdx = players.findIndex(p=>p.id===mp.playerId);
  const myPlace = myIdx+1;
  const me = players[myIdx];
  const myEmoji = ['🥇','🥈','🥉'][myPlace-1] || `#${myPlace}`;
  const resEl = $('results-my-result');
  if(resEl && me) resEl.textContent = `${myEmoji} You finished ${myPlace}${['st','nd','rd'][myPlace-1]||'th'} — ${me.wpm} WPM · ${me.acc}% accuracy`;

  // Podium (top 3)
  const podiumEl = $('results-podium');
  if(podiumEl) {
    const top3    = players.slice(0,3);
    const vOrder  = [1,0,2]; // 2nd left, 1st centre, 3rd right
    podiumEl.innerHTML = vOrder.filter(i=>top3[i]).map(i => {
      const p=top3[i], pl=i+1;
      const medals=['🥇','🥈','🥉'], h=[88,62,46];
      return `<div class="podium-place podium-${pl}">
        <div class="podium-avatar" style="background:${p.color};color:var(--bg)">${p.name[0].toUpperCase()}</div>
        <div class="podium-name" title="${p.name}">${p.name}</div>
        <div class="podium-wpm">${p.wpm} WPM</div>
        <div class="podium-block" style="height:${h[pl-1]}px">${medals[pl-1]}</div>
      </div>`;
    }).join('');
  }

  // Table
  const tbody = $('results-tbody');
  if(tbody) {
    tbody.innerHTML = players.map((p,i) => {
      const pl   = i+1;
      const isMe = p.id===mp.playerId;
      const med  = ['🥇','🥈','🥉'][pl-1]||pl;
      return `<tr${isMe?' class="me-row"':''}>
        <td class="rt-rank">${med}</td>
        <td><div style="display:flex;align-items:center;gap:8px">
          <div style="width:20px;height:20px;border-radius:50%;background:${p.color};color:var(--bg);display:flex;align-items:center;justify-content:center;font-size:.62rem;font-weight:800">${p.name[0].toUpperCase()}</div>
          ${p.name}${isMe?' <span style="font-size:.62rem;color:var(--accent);font-weight:700">(you)</span>':''}
        </div></td>
        <td class="rt-wpm">${p.finished?p.wpm:'—'}</td>
        <td class="rt-acc">${p.finished?p.acc+'%':'DNF'}</td>
        <td style="font-family:var(--font-mono);font-size:.75rem;color:var(--text3)">${p.errors||0}</td>
      </tr>`;
    }).join('');
  }
}

// ═══════════════════════════════════════════════════════════════
//  RACE AGAIN — puts player back into matchmaking
// ═══════════════════════════════════════════════════════════════
async function raceAgain() {
  await cleanupLobby();
  // Re-populate name from last session
  const nameInp = $('entry-name-input');
  if(nameInp && !nameInp.value) nameInp.value = mp.playerName;
  show('entry');
  // Automatically kick off matchmaking without making user click again
  setTimeout(findRace, 100);
}

// ═══════════════════════════════════════════════════════════════
//  LEAVE / CLEANUP
// ═══════════════════════════════════════════════════════════════
async function leaveRace() {
  await cleanupLobby();
  show('entry');
}

async function cleanupLobby() {
  clearLobbyTimer();
  clearInterval(mp.raceTimer);

  if(mp.unsubLobby)   { mp.unsubLobby();   mp.unsubLobby   = null; }
  if(mp.unsubPlayers) { mp.unsubPlayers(); mp.unsubPlayers = null; }

  if(mp.lobbyId && mp.playerId) {
    try {
      await mpDB.collection(COLLECTION).doc(mp.lobbyId)
        .collection('players').doc(mp.playerId).delete();
      // Decrement playerCount
      await mpDB.collection(COLLECTION).doc(mp.lobbyId).update({
        playerCount: firebase.firestore.FieldValue.increment(-1),
      });
    } catch(e) { /* best-effort */ }
  }

  mp.lobbyId   = null;
  mp.playerId  = null;
  mp.players   = {};
  mp.playerOrder = [];
  mp.raceWordIdx = 0;
  mp.raceCommitted = 0;
  mp.racePos     = 0;
  mp.raceErrors  = 0;
  mp.raceStartTime = null;
  mp.finished    = false;
  _lastPush      = 0;
}

// ═══════════════════════════════════════════════════════════════
//  LOBBY RENDER
// ═══════════════════════════════════════════════════════════════
function renderLobbyPlayers() {
  const grid = $('lobby-players');
  if(!grid) return;

  const slots = mp.playerOrder.map(id => {
    const p    = mp.players[id];
    const isMe = id === mp.playerId;
    return `<div class="lobby-slot filled${isMe?' is-me':''}">
      <div class="lobby-slot-avatar" style="background:${p.color};color:var(--bg)">${p.name[0].toUpperCase()}</div>
      <div class="lobby-slot-name">${p.name}</div>
      <span class="lobby-slot-badge ${isMe?'badge-you':'badge-ready'}">${isMe?'You':'Ready'}</span>
    </div>`;
  });

  // Show a few empty placeholder slots
  const empties = Math.max(0, 4 - slots.length);
  for(let i=0; i<empties; i++) {
    slots.push(`<div class="lobby-slot empty">
      <div class="lobby-slot-avatar" style="background:var(--bg4)">?</div>
      <div class="lobby-slot-name" style="color:var(--text3)">Waiting…</div>
    </div>`);
  }

  grid.innerHTML = slots.join('');
  $('lobby-status-text').textContent = `${mp.playerOrder.length} player${mp.playerOrder.length!==1?'s':''} in lobby`;
}

function showTextPreview() {
  const wrap = $('lobby-text-preview');
  const txt  = $('ltp-text');
  if(wrap && txt && mp.raceText) {
    txt.textContent = mp.raceText;
    wrap.style.display = '';
  }
}

// ═══════════════════════════════════════════════════════════════
//  LIVE STATS BANNER (entry screen)
// ═══════════════════════════════════════════════════════════════
function loadLiveStats() {
  // Count open lobbies as "online"
  mpDB.collection(COLLECTION)
    .where('state', 'in', ['open','countdown','racing'])
    .get()
    .then(snap => {
      let online = 0;
      snap.forEach(doc => online += (doc.data().playerCount || 0));
      const el = $('els-online');
      if(el) el.textContent = online > 0 ? online : '—';
    }).catch(()=>{});

  // Count finished races today
  const todayStart = new Date();
  todayStart.setHours(0,0,0,0);
  mpDB.collection(COLLECTION)
    .where('state','==','finished')
    .where('finishedAt','>=', firebase.firestore.Timestamp.fromDate(todayStart))
    .get()
    .then(snap => {
      const el = $('els-races');
      if(el) el.textContent = snap.size || '—';
    }).catch(()=>{});
}

// ═══════════════════════════════════════════════════════════════
//  THEME & CARET
// ═══════════════════════════════════════════════════════════════
const THEME_ICONS = {light:'☀️',dark:'🌙',ocean:'🌊',ember:'🔥',forest:'🌿'};

function initTheme() {
  let theme = 'light';
  try { theme = localStorage.getItem('tc_theme') || 'light'; } catch(e){}
  applyTheme(theme);

  // Caret style from main app
  let caret = 'block';
  try { const raw=localStorage.getItem('tc_caretStyle'); if(raw) caret=JSON.parse(raw); } catch(e){}
  document.body.setAttribute('data-caret', caret);

  $$('.multi-theme-opt').forEach(opt => opt.addEventListener('click', () => applyTheme(opt.dataset.theme)));
  const btn=$('multi-theme-btn'), dd=$('multi-theme-dd');
  if(btn&&dd) {
    btn.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
    document.addEventListener('click', e => {
      const sw=document.querySelector('.multi-theme-sw');
      if(sw&&!sw.contains(e.target)) dd.classList.remove('open');
    });
  }
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('tc_theme', t); } catch(e){}
  const ico=$('multi-theme-icon'); if(ico) ico.textContent=THEME_ICONS[t]||'☀️';
  $$('.multi-theme-opt').forEach(o=>o.classList.toggle('active',o.dataset.theme===t));
  $('multi-theme-dd')?.classList.remove('open');
}

// ── Auth pre-fill ─────────────────────────────────────────────────
function initAuth() {
  mpAuth.onAuthStateChanged(user => {
    const inp  = $('entry-name-input');
    const pill = $('topbar-user-pill');
    if(user) {
      const name = user.displayName || user.email?.split('@')[0] || 'Typist';
      if(inp && !inp.value) inp.value = name;
      updateAvatar(name);
      if(pill) {
        pill.innerHTML = `<div class="topbar-avatar">${name[0].toUpperCase()}</div>${name}`;
        pill.style.display = '';
      }
    } else {
      if(pill) pill.style.display = 'none';
    }
  });
}

function getGuestName() {
  return 'Guest' + Math.floor(Math.random()*9000+1000);
}

function updateAvatar(name) {
  const av = $('entry-avatar');
  if(av) av.textContent = (name||'G')[0].toUpperCase();
}

function setFindBtnLoading(loading) {
  const btn=$('find-race-btn');
  if(btn) { btn.disabled=loading; btn.textContent=loading?'Searching…':'Find a Race'; }
}

// ═══════════════════════════════════════════════════════════════
//  EVENT WIRING
// ═══════════════════════════════════════════════════════════════
function initEvents() {
  // Entry
  $('find-race-btn')?.addEventListener('click', findRace);
  $('entry-name-input')?.addEventListener('input', e => updateAvatar(e.target.value.trim()));
  $('entry-name-input')?.addEventListener('keydown', e => { if(e.key==='Enter') findRace(); });

  // Mode pills
  $$('.mode-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.mode-pill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Lobby
  $('lobby-cancel-btn')?.addEventListener('click', () => { cleanupLobby(); show('entry'); });

  // Race
  initRaceInput();
  $('race-leave-btn')?.addEventListener('click', leaveRace);

  // Results
  $('race-again-btn')?.addEventListener('click', raceAgain);
  $('results-home-btn')?.addEventListener('click', () => { cleanupLobby(); window.location='softfingers-main.html'; });

  // Keyboard
  document.addEventListener('keydown', e => {
    if(e.key==='Escape' && mp.screen!=='entry') leaveRace();
  });
}

// ═══════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAuth();
  initEvents();
  loadLiveStats();
  show('entry');
});
