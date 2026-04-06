/* ═══════════════════════════════════════════════════════════════
   SOFTFINGERS — MULTIPLAYER ENGINE  (multi.js)
   Real-time global typing races via Firebase Firestore.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ── Firebase references ──────────────────────────────────────────
const mpDB   = firebase.firestore();
const mpAuth = firebase.auth();

// ── Constants ────────────────────────────────────────────────────
const MAX_PLAYERS = 100;

// ── Word pools ───────────────────────────────────────────────────
const MP_WORDS = [
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
  'class','clean','clear','climb','close','color','could','count','cover','craft',
  'dance','enjoy','enter','every','exact','field','fight','final','first','focus',
  'force','found','front','fully','given','going','grand','great','group','guard',
  'happy','heart','heavy','honor','house','human','image','issue','large','later',
  'learn','level','light','local','lucky','major','match','maybe','money','month',
  'music','night','noble','north','offer','often','order','other','owner','paint',
  'paper','place','plane','point','power','press','price','pride','prove','quiet',
  'quite','raise','rapid','reach','ready','refer','reply','right','rough','round',
  'route','scale','scene','score','sense','serve','sharp','shift','short','sight',
  'skill','sleep','small','smart','smile','solid','solve','space','speak','speed',
  'spend','stand','start','state','still','stone','store','story','study','style',
  'sweet','swift','table','teach','think','throw','title','today','total','touch',
  'tough','track','trade','train','trend','trial','truly','trust','truth','twist',
  'under','upper','usual','value','visit','vital','voice','waste','watch','water',
  'while','white','whole','world','worry','worth','would','write','young',
];

const MP_QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It is not the mountain we conquer but ourselves.", author: "Edmund Hillary" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "You miss one hundred percent of the shots you never take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you cannot, you are right.", author: "Henry Ford" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Life is what happens when you are busy making other plans.", author: "John Lennon" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
];

const PLAYER_COLORS = [
  '#00e5c8','#ff9f43','#6c63ff','#ff5f7e',
  '#00d68f','#00cfff','#ffd166','#c77dff',
  '#ff6b35','#39d96a','#e91e63','#2196f3',
  '#4caf50','#ff5722','#9c27b0','#00bcd4',
  '#cddc39','#f44336','#3f51b5','#009688',
];

// ── State ────────────────────────────────────────────────────────
const mp = {
  roomId:        null,
  playerId:      null,
  playerName:    '',
  playerColor:   PLAYER_COLORS[0],
  isHost:        false,

  roomData:      null,
  players:       {},
  playerOrder:   [],

  // Race text split into words for enforcement
  raceText:      '',
  raceWords:     [],         // text.split(' ')
  raceWordIdx:   0,          // which word we're currently on
  raceCommitted: 0,          // number of chars committed (correct words + spaces)
  racePos:       0,          // total chars typed (committed + current input)
  raceErrors:    0,
  raceStartTime: null,
  raceTimer:     null,

  finished:      false,
  myFinishPlace: 0,

  unsubRoom:     null,
  unsubPlayers:  null,

  currentScreen: 'lobby',
};

// ── DOM helpers ──────────────────────────────────────────────────
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function showScreen(name) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const el = $('screen-' + name);
  if(el) el.classList.add('active');
  mp.currentScreen = name;
}

// ── Toast ────────────────────────────────────────────────────────
function mpToast(msg, type = '', dur = 3000) {
  const wrap = $('multi-toast-wrap');
  if(!wrap) return;
  const t = document.createElement('div');
  t.className = 'multi-toast' + (type ? ' ' + type : '');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 350); }, dur);
}

// ── Room code ────────────────────────────────────────────────────
function genRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for(let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

// ── Race text builder ────────────────────────────────────────────
function buildRaceText(mode) {
  if(mode === 'quote') {
    return MP_QUOTES[Math.floor(Math.random() * MP_QUOTES.length)].text;
  }
  const shuffled = [...MP_WORDS].sort(() => Math.random() - .5);
  return shuffled.slice(0, 80).join(' ');  // 80 words for a good race
}

// ── Name / color helpers ─────────────────────────────────────────
function getMyName() {
  const val = $('lobby-name-input')?.value.trim();
  if(val) return val;
  const u = mpAuth.currentUser;
  if(u?.displayName) return u.displayName;
  return 'Guest' + Math.floor(Math.random() * 9000 + 1000);
}
function colorForIndex(idx) { return PLAYER_COLORS[idx % PLAYER_COLORS.length]; }

// ═══════════════════════════════════════════════════════════════
// CREATE ROOM
// ═══════════════════════════════════════════════════════════════
async function createRoom() {
  const name   = getMyName();
  const mode   = $('room-mode-select')?.value || 'words';
  const code   = genRoomCode();
  const text   = buildRaceText(mode);
  const fbUser = mpAuth.currentUser;
  const uid    = fbUser ? fbUser.uid : 'guest-' + Date.now();

  mp.playerName  = name;
  mp.playerColor = colorForIndex(0);
  mp.isHost      = true;
  setCreateBtnLoading(true);

  try {
    const roomRef = mpDB.collection('rooms').doc(code);
    await roomRef.set({
      code, text, mode,
      state:       'waiting',
      hostId:      uid,
      hostName:    name,
      createdAt:   firebase.firestore.FieldValue.serverTimestamp(),
      playerCount: 0,
      countdownAt: null,
      startedAt:   null,
      finishedAt:  null,
    });

    const playerRef = await roomRef.collection('players').add({
      name, uid,
      color:      mp.playerColor,
      progress:   0,
      wpm:        0,
      acc:        100,
      errors:     0,
      finished:   false,
      finishedAt: null,
      joinedAt:   firebase.firestore.FieldValue.serverTimestamp(),
    });

    mp.roomId   = code;
    mp.playerId = playerRef.id;
    mp.raceText = text;
    enterWaitingRoom();
  } catch(err) {
    mpToast('Could not create room: ' + err.message, 'error');
  } finally {
    setCreateBtnLoading(false);
  }
}

// ═══════════════════════════════════════════════════════════════
// JOIN ROOM
// ═══════════════════════════════════════════════════════════════
async function joinRoom() {
  const codeRaw = $('join-code-input')?.value.trim().toUpperCase();
  if(!codeRaw || codeRaw.length < 4) { mpToast('Enter a valid room code', 'warn'); return; }

  const name   = getMyName();
  const fbUser = mpAuth.currentUser;
  const uid    = fbUser ? fbUser.uid : 'guest-' + Date.now();

  setJoinBtnLoading(true);

  try {
    const roomRef  = mpDB.collection('rooms').doc(codeRaw);
    const roomSnap = await roomRef.get();

    if(!roomSnap.exists) {
      mpToast('Room not found. Check the code and try again.', 'error');
      return;
    }

    const roomData = roomSnap.data();

    if(roomData.state === 'finished') { mpToast('This race has already ended.', 'warn'); return; }
    if(roomData.state === 'racing')   { mpToast('Race in progress — wait for next round.', 'warn'); return; }

    const playersSnap = await roomRef.collection('players').get();
    const joinIndex   = playersSnap.size;

    if(joinIndex >= MAX_PLAYERS) {
      mpToast(`Room is full (max ${MAX_PLAYERS} players).`, 'warn');
      return;
    }

    mp.playerName  = name;
    mp.playerColor = colorForIndex(joinIndex);
    mp.isHost      = false;
    mp.roomId      = codeRaw;
    mp.raceText    = roomData.text;

    const playerRef = await roomRef.collection('players').add({
      name, uid,
      color:      mp.playerColor,
      progress:   0,
      wpm:        0,
      acc:        100,
      errors:     0,
      finished:   false,
      finishedAt: null,
      joinedAt:   firebase.firestore.FieldValue.serverTimestamp(),
    });

    mp.playerId = playerRef.id;
    enterWaitingRoom();
  } catch(err) {
    mpToast('Could not join: ' + err.message, 'error');
  } finally {
    setJoinBtnLoading(false);
  }
}

// ═══════════════════════════════════════════════════════════════
// WAITING ROOM
// ═══════════════════════════════════════════════════════════════
function enterWaitingRoom() {
  showScreen('waiting');
  const roomRef = mpDB.collection('rooms').doc(mp.roomId);
  const codeEl  = $('waiting-room-code-val');
  if(codeEl) codeEl.textContent = mp.roomId;
  updateWaitingActions();

  mp.unsubRoom = roomRef.onSnapshot(snap => {
    if(!snap.exists) {
      // Room document was deleted — only dismiss if not racing
      if(mp.currentScreen !== 'race') {
        mpToast('Room was closed.', 'warn');
        teardown();
        showScreen('lobby');
      }
      return;
    }
    mp.roomData = snap.data();

    // If we are now the host (role was transferred to us), update isHost
    const fbUser = mpAuth.currentUser;
    const myUid  = fbUser ? fbUser.uid : null;
    if(myUid && mp.roomData.hostId === myUid && !mp.isHost) {
      mp.isHost = true;
      mpToast('You are now the host 👑', 'success');
      updateWaitingActions();
    }

    handleRoomStateChange(mp.roomData.state);
  });

  mp.unsubPlayers = roomRef.collection('players')
    .orderBy('joinedAt', 'asc')
    .onSnapshot(snap => {
      mp.players     = {};
      mp.playerOrder = [];
      snap.forEach(doc => {
        mp.players[doc.id] = { id: doc.id, ...doc.data() };
        mp.playerOrder.push(doc.id);
      });
      if(mp.currentScreen === 'waiting') renderWaitingPlayers();
      if(mp.currentScreen === 'race')    renderLivePlayers();
    });
}

function handleRoomStateChange(state) {
  if(state === 'countdown' && mp.currentScreen === 'waiting') startCountdown();
  if(state === 'racing'    && mp.currentScreen !== 'race')    beginRace();
  if(state === 'finished'  && mp.currentScreen === 'race' && !mp.finished) {
    setTimeout(showResults, 1200);
  }
}

// ═══════════════════════════════════════════════════════════════
// START RACE (host)
// ═══════════════════════════════════════════════════════════════
async function hostStartRace() {
  if(!mp.isHost) return;
  if(mp.playerOrder.length < 1) { mpToast('Need at least 1 player', 'warn'); return; }
  const btn = $('host-start-btn');
  if(btn) { btn.disabled = true; btn.textContent = 'Starting…'; }
  try {
    await mpDB.collection('rooms').doc(mp.roomId).update({
      state:       'countdown',
      countdownAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch(err) {
    mpToast('Could not start: ' + err.message, 'error');
    if(btn) { btn.disabled = false; btn.textContent = '▶ Start Race'; }
  }
}

// ═══════════════════════════════════════════════════════════════
// COUNTDOWN
// ═══════════════════════════════════════════════════════════════
function startCountdown() {
  const overlay = $('countdown-overlay');
  const numEl   = $('countdown-num');
  const lblEl   = $('countdown-label');
  if(!overlay || !numEl) return;
  overlay.classList.add('show');
  let count = 3;

  function tick() {
    numEl.textContent = count;
    numEl.style.animation = 'none';
    requestAnimationFrame(() => { numEl.style.animation = 'cdPop .5s cubic-bezier(.34,1.56,.64,1)'; });
    if(count <= 0) {
      if(lblEl) lblEl.textContent = 'Type!';
      numEl.textContent = 'GO!';
      numEl.style.color = 'var(--success)';
      setTimeout(() => overlay.classList.remove('show'), 700);
      if(mp.isHost) {
        mpDB.collection('rooms').doc(mp.roomId).update({
          state: 'racing', startedAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).catch(() => {});
      }
      return;
    }
    count--;
    setTimeout(tick, 1000);
  }
  tick();
}

// ═══════════════════════════════════════════════════════════════
// BEGIN RACE
// ═══════════════════════════════════════════════════════════════
function beginRace() {
  showScreen('race');

  // Initialise word-based state
  mp.raceWords     = mp.raceText.split(' ');
  mp.raceWordIdx   = 0;
  mp.raceCommitted = 0;   // chars committed (correct words + their trailing spaces)
  mp.racePos       = 0;
  mp.raceErrors    = 0;
  mp.raceStartTime = null;
  mp.finished      = false;
  mp.myFinishPlace = 0;

  renderRaceText(0, '');
  renderLivePlayers();

  setRacePill('race-wpm-val',    '0');
  setRacePill('race-acc-val',    '100%');
  setRacePill('race-errors-val', '0');

  const inp = $('race-typing-input');
  if(inp) {
    inp.value       = '';
    inp.disabled    = false;
    inp.placeholder = 'Type the first word…';
    inp.focus();
  }
  $('race-text-box')?.classList.add('active');
  $('race-input-wrap')?.classList.add('active');

  clearInterval(mp.raceTimer);
  mp.raceTimer = setInterval(updateRaceStats, 800);
}

// ═══════════════════════════════════════════════════════════════
// RENDER RACE TEXT  —  Word-wrapped, char-by-char highlighting
//
// We render word by word. Each word is a <span class="word">
// whose characters get .correct / .wrong / .cursor classes.
// Spaces between words are plain " " (real space) so CSS wraps
// them naturally. The current input is compared letter-by-letter
// against the expected word.
// ═══════════════════════════════════════════════════════════════
function renderRaceText(wordIdx, currentInput) {
  const el = $('race-text-display');
  if(!el) return;

  const words = mp.raceWords;
  let html = '';

  words.forEach((word, wi) => {
    let wordHtml = '';

    if(wi < wordIdx) {
      // Fully committed word — all correct
      wordHtml = word.split('').map(ch =>
        `<span class="rc correct">${esc(ch)}</span>`
      ).join('');

    } else if(wi === wordIdx) {
      // Current word — compare char-by-char with currentInput
      for(let ci = 0; ci < word.length; ci++) {
        if(ci < currentInput.length) {
          const match = currentInput[ci] === word[ci];
          wordHtml += `<span class="rc ${match ? 'correct' : 'wrong'}">${esc(word[ci])}</span>`;
        } else if(ci === currentInput.length) {
          wordHtml += `<span class="rc cursor">${esc(word[ci])}</span>`;
        } else {
          wordHtml += `<span class="rc">${esc(word[ci])}</span>`;
        }
      }
      // If input is longer than word, show extras as wrong (no-op for now)

    } else {
      // Upcoming word
      wordHtml = word.split('').map(ch => `<span class="rc">${esc(ch)}</span>`).join('');
    }

    // Words are wrapped in a <span class="word"> — space between words is a
    // plain " " so the browser can wrap the line naturally
    html += `<span class="word">${wordHtml}</span>`;
    if(wi < words.length - 1) html += '<span class="rc word-space"> </span>';
  });

  el.innerHTML = html;

  // Scroll cursor into view
  const cur = el.querySelector('.rc.cursor');
  if(cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function esc(ch) {
  return ch === '<' ? '&lt;' : ch === '&' ? '&amp;' : ch === '>' ? '&gt;' : ch;
}

// ═══════════════════════════════════════════════════════════════
// LIVE PLAYERS
// ═══════════════════════════════════════════════════════════════
function renderLivePlayers() {
  const container = $('live-players-list');
  if(!container) return;

  const sorted = mp.playerOrder
    .map(id => mp.players[id])
    .filter(Boolean)
    .sort((a, b) => b.progress - a.progress || b.wpm - a.wpm);

  // For 100 players we keep rows compact
  container.innerHTML = sorted.map((p, i) => {
    const isMe  = p.id === mp.playerId;
    const place = i + 1;
    const pct   = Math.round(p.progress * 100);
    const medal = place <= 3 ? ['🥇','🥈','🥉'][place-1] : '';
    const finTag = p.finished
      ? `<span class="live-finish-badge ${place<=3?'finish-'+['1st','2nd','3rd'][place-1]:'finish-nth'}">${medal || '#'+place}</span>`
      : '';
    return `
      <div class="live-player-row${isMe ? ' me' : ''}">
        <div class="live-player-pos">${place}</div>
        <div class="live-player-avatar" style="background:${p.color};color:var(--bg)">${p.name[0].toUpperCase()}</div>
        <div class="live-player-name">${p.name}${isMe ? '<span class="you-tag">you</span>' : ''}</div>
        <div class="live-progress-wrap">
          <div class="live-progress-fill" style="width:${pct}%;background:${p.color}"></div>
        </div>
        <div class="live-player-wpm${p.finished?' finished':''}">${p.finished ? p.wpm+' ✓' : p.wpm}</div>
        ${finTag}
      </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
// TYPING INPUT  —  Word-by-word with mandatory completion
// ═══════════════════════════════════════════════════════════════
function initRaceInput() {
  const inp = $('race-typing-input');
  if(!inp) return;

  // ── keydown: intercept Space to enforce correct word ──────────
  inp.addEventListener('keydown', e => {
    if(e.key !== ' ' && e.key !== 'Spacebar') return;
    if(mp.finished || mp.currentScreen !== 'race') return;

    const currentTyped    = inp.value;
    const expectedWord    = mp.raceWords[mp.raceWordIdx] || '';
    const isLastWord      = mp.raceWordIdx === mp.raceWords.length - 1;

    // Don't allow space on the last word (it finishes without one)
    if(isLastWord) {
      e.preventDefault();
      return;
    }

    if(currentTyped !== expectedWord) {
      // Word not complete or wrong — block the space
      e.preventDefault();
      shakeInput(inp);
      return;
    }

    // Word is correct — allow the space naturally, we'll commit in the input event
  });

  // ── input: update display and commit completed words ──────────
  inp.addEventListener('input', e => {
    if(mp.finished || mp.currentScreen !== 'race') return;
    const val = e.target.value;

    if(!mp.raceStartTime && val.length > 0) mp.raceStartTime = Date.now();

    const expectedWord = mp.raceWords[mp.raceWordIdx] || '';
    const isLastWord   = mp.raceWordIdx === mp.raceWords.length - 1;

    // Strip any trailing space the user might have typed on the last word
    const typedClean = isLastWord ? val.replace(/ /g, '') : val;

    // If the input ends with a space and the word is correct → commit it
    if(!isLastWord && val.endsWith(' ') && val.trimEnd() === expectedWord) {
      // Commit: advance word index, record committed char count
      mp.raceWordIdx++;
      // committed chars = all confirmed words + their spaces
      mp.raceCommitted = mp.raceWords.slice(0, mp.raceWordIdx).join(' ').length + 1;
      // (+ 1 for the space after last confirmed word)
      inp.value = '';
      renderRaceText(mp.raceWordIdx, '');
      updateProgress();
      return;
    }

    // Count errors in the current word being typed
    let errorsInWord = 0;
    for(let i = 0; i < typedClean.length; i++) {
      if(typedClean[i] !== (expectedWord[i] || '')) errorsInWord++;
    }
    mp.raceErrors = countCommittedErrors() + errorsInWord;
    mp.racePos    = mp.raceCommitted + typedClean.length;

    // Render with current partial word
    renderRaceText(mp.raceWordIdx, typedClean);
    updateProgress();

    // Last word: auto-finish when fully and correctly typed
    if(isLastWord && typedClean === expectedWord) {
      inp.value = '';
      mp.raceCommitted = mp.raceText.length;
      mp.racePos       = mp.raceText.length;
      finishRace();
    }
  });

  inp.addEventListener('focus', () => {
    $('race-text-box')?.classList.add('active');
    $('race-input-wrap')?.classList.add('active');
  });
  inp.addEventListener('blur', () => {
    $('race-text-box')?.classList.remove('active');
    $('race-input-wrap')?.classList.remove('active');
  });
}

// Count errors in fully committed words by comparing committed text with expected
function countCommittedErrors() {
  // All committed words were correct (we only allow commit when word matches)
  return 0;
}

// Shake the input to signal a blocked space
function shakeInput(inp) {
  inp.classList.remove('input-shake');
  // Force reflow so re-adding the class triggers the animation
  void inp.offsetWidth;
  inp.classList.add('input-shake');
  setTimeout(() => inp.classList.remove('input-shake'), 400);
}

// Update progress stat (called after each keystroke)
function updateProgress() {
  const prog = mp.raceText.length > 0 ? mp.racePos / mp.raceText.length : 0;

  // Throttle Firestore push to every 600ms
  const now = Date.now();
  if(now - _lastFirestorePush > 600 && mp.playerId && mp.roomId) {
    _lastFirestorePush = now;
    const elapsed = mp.raceStartTime ? (Date.now() - mp.raceStartTime) / 1000 / 60 : 0.01;
    const correct = Math.max(0, mp.racePos - mp.raceErrors);
    const wpm     = elapsed > 0.001 ? Math.max(0, Math.round((correct / 5) / elapsed)) : 0;
    const acc     = mp.racePos > 0  ? Math.round((correct / mp.racePos) * 100) : 100;

    setRacePill('race-wpm-val',    wpm);
    setRacePill('race-acc-val',    acc + '%');
    setRacePill('race-errors-val', mp.raceErrors);

    mpDB.collection('rooms').doc(mp.roomId)
      .collection('players').doc(mp.playerId)
      .update({ progress: prog, wpm, acc, errors: mp.raceErrors })
      .catch(() => {});
  }
}

let _lastFirestorePush = 0;

// ── Update stats tick ─────────────────────────────────────────────
function updateRaceStats() {
  if(!mp.raceStartTime || mp.finished) return;
  const elapsed = (Date.now() - mp.raceStartTime) / 1000 / 60;
  const correct = Math.max(0, mp.racePos - mp.raceErrors);
  const wpm     = elapsed > 0.001 ? Math.max(0, Math.round((correct / 5) / elapsed)) : 0;
  const acc     = mp.racePos > 0  ? Math.round((correct / mp.racePos) * 100) : 100;
  const prog    = mp.raceText.length > 0 ? mp.racePos / mp.raceText.length : 0;

  setRacePill('race-wpm-val',    wpm);
  setRacePill('race-acc-val',    acc + '%');
  setRacePill('race-errors-val', mp.raceErrors);

  const now = Date.now();
  if(now - _lastFirestorePush > 600 && mp.playerId && mp.roomId) {
    _lastFirestorePush = now;
    mpDB.collection('rooms').doc(mp.roomId)
      .collection('players').doc(mp.playerId)
      .update({ progress: prog, wpm, acc, errors: mp.raceErrors })
      .catch(() => {});
  }
}

function setRacePill(id, val) {
  const el = $(id);
  if(el) el.textContent = val;
}

// ═══════════════════════════════════════════════════════════════
// FINISH RACE
// ═══════════════════════════════════════════════════════════════
async function finishRace() {
  if(mp.finished) return;
  mp.finished = true;
  clearInterval(mp.raceTimer);

  const elapsed = mp.raceStartTime ? (Date.now() - mp.raceStartTime) / 1000 / 60 : 0.01;
  const correct = Math.max(0, mp.racePos - mp.raceErrors);
  const wpm     = elapsed > 0.001 ? Math.max(0, Math.round((correct / 5) / elapsed)) : 0;
  const acc     = mp.racePos > 0  ? Math.round((correct / mp.racePos) * 100) : 100;

  $('race-text-box')?.classList.add('finished');
  $('race-text-box')?.classList.remove('active');
  const inp = $('race-typing-input');
  if(inp) { inp.disabled = true; inp.placeholder = '✓ Finished!'; }

  const finishedBefore = Object.values(mp.players).filter(p => p.finished && p.id !== mp.playerId).length;
  mp.myFinishPlace     = finishedBefore + 1;
  const emoji          = ['🥇','🥈','🥉'][mp.myFinishPlace - 1] || `#${mp.myFinishPlace}`;
  mpToast(`${emoji} Finished! ${wpm} WPM · ${acc}% accuracy`, 'success', 5000);

  if(mp.playerId && mp.roomId) {
    await mpDB.collection('rooms').doc(mp.roomId)
      .collection('players').doc(mp.playerId)
      .update({
        progress: 1, wpm, acc, finished: true,
        finishedAt: firebase.firestore.FieldValue.serverTimestamp(),
      }).catch(() => {});
  }

  // Any player (not just host) checks if all done and marks room finished
  checkAllFinished();

  setTimeout(showResults, 2500);
}

async function checkAllFinished() {
  const allDone = Object.values(mp.players).every(p =>
    p.finished || (p.id === mp.playerId && mp.finished)
  );
  if(allDone && mp.roomId) {
    mpDB.collection('rooms').doc(mp.roomId).update({
      state: 'finished',
      finishedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(() => {});
  }
}

// ═══════════════════════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════════════════════
function showResults() {
  showScreen('results');

  const players = mp.playerOrder
    .map(id => mp.players[id])
    .filter(Boolean)
    .sort((a, b) => {
      if(a.finished && b.finished) {
        const ta = a.finishedAt?.toMillis?.() || 0;
        const tb = b.finishedAt?.toMillis?.() || 0;
        return ta - tb || b.wpm - a.wpm;
      }
      if(a.finished) return -1;
      if(b.finished) return 1;
      return b.progress - a.progress || b.wpm - a.wpm;
    });

  // Podium
  const podiumEl = $('results-podium');
  if(podiumEl) {
    const top3        = players.slice(0, 3);
    const visualOrder = [1, 0, 2]; // 2nd left, 1st centre, 3rd right
    podiumEl.innerHTML = visualOrder
      .filter(i => top3[i])
      .map(i => {
        const p       = top3[i];
        const place   = i + 1;
        const medals  = ['🥇','🥈','🥉'];
        const heights = [90, 65, 48];
        return `
          <div class="podium-place podium-${place}">
            <div class="podium-avatar" style="background:${p.color};color:var(--bg)">${p.name[0].toUpperCase()}</div>
            <div class="podium-name" title="${p.name}">${p.name}</div>
            <div class="podium-wpm">${p.wpm} WPM</div>
            <div class="podium-block" style="height:${heights[place-1]}px">${medals[place-1]}</div>
          </div>`;
      }).join('');
  }

  // Full table
  const tbody = $('results-table-body');
  if(tbody) {
    tbody.innerHTML = players.map((p, i) => {
      const place  = i + 1;
      const isMe   = p.id === mp.playerId;
      const medal  = ['🥇','🥈','🥉'][place-1] || place;
      return `
        <tr${isMe ? ' class="me-row"' : ''}>
          <td class="rank-cell">${medal}</td>
          <td>
            <div style="display:flex;align-items:center;gap:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:${p.color};color:var(--bg);display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800">${p.name[0].toUpperCase()}</div>
              ${p.name}${isMe ? ' <span style="font-size:.65rem;color:var(--accent);font-weight:700">(you)</span>' : ''}
            </div>
          </td>
          <td class="wpm-cell">${p.finished ? p.wpm : '<span style="color:var(--text3)">—</span>'}</td>
          <td class="acc-cell">${p.finished ? p.acc + '%' : 'DNF'}</td>
          <td style="font-family:var(--font-mono);font-size:.78rem;color:var(--text3)">${p.errors || 0}</td>
        </tr>`;
    }).join('');
  }

  // Show play-again button only if host (or if they became host)
  const againBtn = $('results-play-again-btn');
  if(againBtn) againBtn.style.display = mp.isHost ? '' : 'none';
  const againNote = $('results-host-note');
  if(againNote) againNote.style.display = mp.isHost ? 'none' : '';
}

// ═══════════════════════════════════════════════════════════════
// PLAY AGAIN  —  any current host can restart
// ═══════════════════════════════════════════════════════════════
async function playAgain() {
  if(!mp.isHost) { mpToast('Only the host can start a new race', 'warn'); return; }
  const mode = mp.roomData?.mode || 'words';
  const text = buildRaceText(mode);

  const batch = mpDB.batch();
  mp.playerOrder.forEach(pid => {
    const ref = mpDB.collection('rooms').doc(mp.roomId).collection('players').doc(pid);
    batch.update(ref, { progress:0, wpm:0, acc:100, errors:0, finished:false, finishedAt:null });
  });
  batch.update(mpDB.collection('rooms').doc(mp.roomId), {
    state:'waiting', text, startedAt:null, finishedAt:null, countdownAt:null,
  });

  await batch.commit().catch(err => mpToast(err.message, 'error'));

  mp.raceText      = text;
  mp.raceWords     = text.split(' ');
  mp.raceWordIdx   = 0;
  mp.raceCommitted = 0;
  mp.racePos       = 0;
  mp.raceErrors    = 0;
  mp.raceStartTime = null;
  mp.finished      = false;

  const inp = $('race-typing-input');
  if(inp) { inp.disabled = false; inp.placeholder = 'Type the first word…'; inp.value = ''; }

  showScreen('waiting');
  renderWaitingPlayers();
  updateWaitingActions();
}

// ═══════════════════════════════════════════════════════════════
// LEAVE ROOM  —  host leaving transfers role, race continues
// ═══════════════════════════════════════════════════════════════
async function leaveRoom() {
  if(!mp.roomId || !mp.playerId) { teardown(); showScreen('lobby'); return; }

  try {
    const roomRef = mpDB.collection('rooms').doc(mp.roomId);

    // If host is leaving, transfer role to the next player before removing self
    if(mp.isHost) {
      const remaining = mp.playerOrder.filter(id => id !== mp.playerId);
      if(remaining.length > 0) {
        const nextPlayer = mp.players[remaining[0]];
        if(nextPlayer) {
          // Transfer host: update room document with new hostId
          await roomRef.update({
            hostId:   nextPlayer.uid || remaining[0],
            hostName: nextPlayer.name,
          }).catch(() => {});
          mpToast(`Host transferred to ${nextPlayer.name}`, '');
        }
      } else {
        // No one left — delete the room
        await roomRef.delete().catch(() => {});
      }
    }

    // Remove own player doc
    await roomRef.collection('players').doc(mp.playerId).delete().catch(() => {});

  } catch(e) { /* best-effort */ }

  teardown();
  showScreen('lobby');
  mpToast('Left the room');
}

function teardown() {
  if(mp.unsubRoom)    { mp.unsubRoom();    mp.unsubRoom    = null; }
  if(mp.unsubPlayers) { mp.unsubPlayers(); mp.unsubPlayers = null; }
  clearInterval(mp.raceTimer);
  mp.roomId        = null;
  mp.playerId      = null;
  mp.isHost        = false;
  mp.players       = {};
  mp.playerOrder   = [];
  mp.raceWordIdx   = 0;
  mp.raceCommitted = 0;
}

// ═══════════════════════════════════════════════════════════════
// WAITING ROOM RENDER  — compact slots for up to 100 players
// ═══════════════════════════════════════════════════════════════
function renderWaitingPlayers() {
  const grid = $('waiting-players-grid');
  if(!grid) return;

  const slots = mp.playerOrder.map(id => {
    const p      = mp.players[id];
    const isMe   = id === mp.playerId;
    const isHost = mp.roomData && p.uid && mp.roomData.hostId === p.uid;
    return `
      <div class="player-slot${isHost ? ' host' : ' ready'}">
        <div class="player-slot-avatar" style="background:${p.color};color:var(--bg)">${p.name[0].toUpperCase()}</div>
        <div class="player-slot-name">${p.name}${isMe ? ' (you)' : ''}</div>
        <span class="player-slot-badge ${isHost ? 'badge-host' : 'badge-ready'}">${isHost ? '👑 Host' : '✓ Ready'}</span>
      </div>`;
  });

  // Show 4 empty slots as placeholders only if fewer than 4 players
  const emptyCount = Math.max(0, 4 - slots.length);
  for(let i = 0; i < emptyCount; i++) {
    slots.push(`<div class="player-slot empty">
      <div class="player-slot-avatar" style="background:var(--bg4)">?</div>
      <div class="player-slot-name text-muted">Waiting…</div>
    </div>`);
  }

  grid.innerHTML = slots.join('');
  const countEl = $('waiting-player-count');
  if(countEl) countEl.textContent = `${mp.playerOrder.length} / ${MAX_PLAYERS}`;
}

function updateWaitingActions() {
  const startBtn = $('host-start-btn');
  const hintEl   = $('waiting-hint-text');
  if(startBtn) startBtn.style.display = mp.isHost ? '' : 'none';
  if(hintEl)   hintEl.textContent = mp.isHost
    ? 'You are the host. Click Start Race when everyone is ready.'
    : 'Waiting for the host to start…';
}

// ── Lobby helpers ─────────────────────────────────────────────────
function updateLobbyNameDisplay() {
  const inp  = $('lobby-name-input');
  const av   = $('lobby-name-avatar');
  const name = inp?.value.trim() || 'G';
  if(av) av.textContent = name[0].toUpperCase();
}
function setCreateBtnLoading(loading) {
  const btn = $('create-room-btn');
  if(btn) { btn.disabled = loading; btn.textContent = loading ? 'Creating…' : '+ Create Room'; }
}
function setJoinBtnLoading(loading) {
  const btn = $('join-room-btn');
  if(btn) { btn.disabled = loading; btn.textContent = loading ? 'Joining…' : 'Join →'; }
}
function copyRoomCode() {
  if(!mp.roomId) return;
  navigator.clipboard.writeText(mp.roomId).then(() => mpToast('Room code copied!', 'success'));
}
function copyShareLink() {
  const url = window.location.href.split('?')[0] + '?room=' + mp.roomId;
  navigator.clipboard.writeText(url).then(() => mpToast('Share link copied!', 'success'));
}

// ── Theme ─────────────────────────────────────────────────────────
const THEME_ICONS = { light:'☀️', dark:'🌙', ocean:'🌊', ember:'🔥', forest:'🌿' };

function initTheme() {
  let saved = 'light';
  try { saved = localStorage.getItem('tc_theme') || 'light'; } catch(e) {}
  applyTheme(saved);
  $$('.multi-theme-opt').forEach(opt => opt.addEventListener('click', () => applyTheme(opt.dataset.theme)));
  const btn = $('multi-theme-btn');
  const dd  = $('multi-theme-dd');
  if(btn && dd) {
    btn.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
    document.addEventListener('click', e => {
      const sw = document.querySelector('.multi-theme-sw');
      if(sw && !sw.contains(e.target)) dd.classList.remove('open');
    });
  }
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('tc_theme', t); } catch(e) {}
  const iconEl = $('multi-theme-icon');
  if(iconEl) iconEl.textContent = THEME_ICONS[t] || '☀️';
  $$('.multi-theme-opt').forEach(o => o.classList.toggle('active', o.dataset.theme === t));
  $('multi-theme-dd')?.classList.remove('open');
}

// ── Auth pre-fill ─────────────────────────────────────────────────
function initAuthState() {
  mpAuth.onAuthStateChanged(user => {
    const inp  = $('lobby-name-input');
    const av   = $('lobby-name-avatar');
    const pill = $('topbar-user-pill');
    if(user) {
      const name = user.displayName || user.email?.split('@')[0] || 'Typist';
      if(inp && !inp.value) inp.value = name;
      if(av)   av.textContent = name[0].toUpperCase();
      if(pill) { pill.innerHTML = `<div class="topbar-avatar">${name[0].toUpperCase()}</div>${name}`; pill.style.display = ''; }
    } else {
      if(pill) pill.style.display = 'none';
    }
  });
}

// ── URL room param ────────────────────────────────────────────────
function handleURLRoom() {
  const code = new URLSearchParams(window.location.search).get('room');
  if(code) {
    const inp = $('join-code-input');
    if(inp) inp.value = code.toUpperCase();
    mpToast(`Room code ${code} loaded — enter your name and join!`);
  }
}

// ── Event listeners ───────────────────────────────────────────────
function initEventListeners() {
  $('create-room-btn')?.addEventListener('click', createRoom);
  $('join-room-btn')?.addEventListener('click', joinRoom);
  $('lobby-name-input')?.addEventListener('input', updateLobbyNameDisplay);
  $('join-code-input')?.addEventListener('keydown', e => {
    if(e.key === 'Enter') joinRoom();
    setTimeout(() => { if(e.target.value) e.target.value = e.target.value.toUpperCase(); }, 0);
  });

  $('host-start-btn')?.addEventListener('click', hostStartRace);
  $('waiting-leave-btn')?.addEventListener('click', leaveRoom);
  $('waiting-copy-code-btn')?.addEventListener('click', copyRoomCode);
  $('waiting-copy-link-btn')?.addEventListener('click', copyShareLink);

  initRaceInput();
  $('race-leave-btn')?.addEventListener('click', leaveRoom);

  $('results-play-again-btn')?.addEventListener('click', playAgain);
  $('results-leave-btn')?.addEventListener('click', leaveRoom);

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && mp.currentScreen !== 'lobby') leaveRoom();
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAuthState();
  initEventListeners();
  handleURLRoom();
  showScreen('lobby');
  updateLobbyNameDisplay();
});
