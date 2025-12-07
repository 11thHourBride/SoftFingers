// ==== ENHANCED HYMNS PRACTICE SYSTEM ====

// Public domain hymns collection
const HYMNS_DATA = [
  {
    id: 1,
    title: "Amazing Grace",
    author: "John Newton",
    year: 1779,
    category: "Salvation",
    verses: [
      "Amazing grace how sweet the sound\nThat saved a wretch like me\nI once was lost but now am found\nWas blind but now I see",
      "Twas grace that taught my heart to fear\nAnd grace my fears relieved\nHow precious did that grace appear\nThe hour I first believed",
      "Through many dangers toils and snares\nI have already come\nTis grace hath brought me safe thus far\nAnd grace will lead me home"
    ]
  },
  {
    id: 2,
    title: "How Great Thou Art",
    author: "Carl Boberg",
    year: 1885,
    category: "Praise",
    verses: [
      "O Lord my God when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars I hear the rolling thunder\nThy power throughout the universe displayed",
      "Then sings my soul my Saviour God to Thee\nHow great Thou art how great Thou art\nThen sings my soul my Saviour God to Thee\nHow great Thou art how great Thou art"
    ]
  },
  {
    id: 3,
    title: "It Is Well With My Soul",
    author: "Horatio Spafford",
    year: 1873,
    category: "Peace",
    verses: [
      "When peace like a river attendeth my way\nWhen sorrows like sea billows roll\nWhatever my lot Thou hast taught me to say\nIt is well it is well with my soul",
      "My sin oh the bliss of this glorious thought\nMy sin not in part but the whole\nIs nailed to the cross and I bear it no more\nPraise the Lord praise the Lord O my soul"
    ]
  },
  {
    id: 4,
    title: "Holy Holy Holy",
    author: "Reginald Heber",
    year: 1826,
    category: "Worship",
    verses: [
      "Holy holy holy Lord God Almighty\nEarly in the morning our song shall rise to Thee\nHoly holy holy merciful and mighty\nGod in three Persons blessed Trinity",
      "Holy holy holy all the saints adore Thee\nCasting down their golden crowns around the glassy sea\nCherubim and seraphim falling down before Thee\nWhich wert and art and evermore shalt be"
    ]
  },
  {
    id: 5,
    title: "Be Thou My Vision",
    author: "Ancient Irish",
    year: 700,
    category: "Devotion",
    verses: [
      "Be Thou my vision O Lord of my heart\nNaught be all else to me save that Thou art\nThou my best thought by day or by night\nWaking or sleeping Thy presence my light",
      "Be Thou my wisdom and Thou my true word\nI ever with Thee and Thou with me Lord\nThou my great Father and I Thy true son\nThou in me dwelling and I with Thee one"
    ]
  }
];

let currentHymn = null;
let currentHymnVerseIndex = 0;
let currentHymnVerseText = '';
let hymnsTyped = '';
let hymnsStartTime = null;
let hymnsTimerDuration = 90;
let hymnsTimeLeft = 90;
let hymnsTimerInterval = null;
let hymnsMode = 'typing';
let hymnsAudioPlaying = false;

// Hymn tracking for stats
let hymnStats = {
  totalWords: 0,
  totalChars: 0,
  correctChars: 0,
  totalTime: 0,
  versesCompleted: 0
};

// Initialize Hymns page
function loadHymnsPage() {
  updateHymnsStats();
  loadHymnsList();
  setupHymnsEventListeners();
}

function setupHymnsEventListeners() {
  // Mode tabs
  document.querySelectorAll('.hymns-mode-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.hymns-mode-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      hymnsMode = this.dataset.mode;
      
      if (hymnsMode === 'audio') {
        document.getElementById('hymns-audio-controls').style.display = 'block';
        document.getElementById('hymns-verse-display').style.display = 'none';
      } else {
        document.getElementById('hymns-audio-controls').style.display = 'none';
        document.getElementById('hymns-verse-display').style.display = 'block';
      }
    });
  });
  
  // Back button
  const backBtn = document.getElementById('back-to-hymns');
  if (backBtn && !backBtn.dataset.listenerAdded) {
    backBtn.dataset.listenerAdded = 'true';
    backBtn.addEventListener('click', () => {
      stopHymnsTimer();
      stopHymnsAudio();
      document.getElementById('hymns-list-grid').style.display = 'grid';
      document.getElementById('hymns-practice-card').style.display = 'none';
      hymnsTyped = '';
      document.getElementById('hymns-input').value = '';
      resetHymnStats();
    });
  }
  
  // Timer select
  const timerSelect = document.getElementById('hymns-timer-select');
  if (timerSelect && !timerSelect.dataset.listenerAdded) {
    timerSelect.dataset.listenerAdded = 'true';
    timerSelect.addEventListener('change', (e) => {
      hymnsTimerDuration = parseInt(e.target.value);
      hymnsTimeLeft = hymnsTimerDuration;
      
      const countdownEl = document.getElementById('hymns-countdown');
      if (hymnsTimerDuration === 0) {
        countdownEl.textContent = '∞';
        countdownEl.className = '';
      } else {
        countdownEl.textContent = hymnsTimerDuration + 's';
        countdownEl.className = '';
      }
    });
  }
  
  // Audio controls
  const playBtn = document.getElementById('play-hymn-audio');
  const stopBtn = document.getElementById('stop-hymn-audio');
  
  if (playBtn && !playBtn.dataset.listenerAdded) {
    playBtn.dataset.listenerAdded = 'true';
    playBtn.addEventListener('click', playHymnAudio);
  }
  
  if (stopBtn && !stopBtn.dataset.listenerAdded) {
    stopBtn.dataset.listenerAdded = 'true';
    stopBtn.addEventListener('click', stopHymnsAudio);
  }
  
  // Hymns input
  const hymnsInput = document.getElementById('hymns-input');
  if (hymnsInput && !hymnsInput.dataset.listenerAdded) {
    hymnsInput.dataset.listenerAdded = 'true';
    hymnsInput.addEventListener('input', handleHymnsInput);
    hymnsInput.addEventListener('paste', e => e.preventDefault());
  }
}

// Reset hymn stats
function resetHymnStats() {
  hymnStats = {
    totalWords: 0,
    totalChars: 0,
    correctChars: 0,
    totalTime: 0,
    versesCompleted: 0
  };
}

// Update stats
function updateHymnsStats() {
  const statsKey = 'hymns_stats_global';
  const stats = JSON.parse(localStorage.getItem(statsKey) || '{"totalVerses": 0, "totalHymns": 0}');
  
  document.getElementById('total-hymns-practiced').textContent = stats.totalHymns || 0;
  document.getElementById('total-hymn-verses').textContent = stats.totalVerses || 0;
}

// Load hymns list
function loadHymnsList() {
  const hymnsGrid = document.getElementById('hymns-list-grid');
  
  let html = '';
  HYMNS_DATA.forEach(hymn => {
    const progress = getHymnProgress(hymn.id);
    
    html += `
      <div class="hymn-card" onclick="openHymn(${hymn.id})">
        <div class="hymn-card-header">
          <h4 class="hymn-card-title">${hymn.title}</h4>
          <span class="hymn-category-badge">${hymn.category}</span>
        </div>
        <div class="hymn-card-meta">
          <span>📝 ${hymn.author}</span>
          <span>📅 ${hymn.year}</span>
        </div>
        <div class="hymn-card-meta">
          <span>${hymn.verses.length} verses</span>
          <span>${progress.completed ? '✅ Completed' : progress.versesCompleted + ' typed'}</span>
        </div>
        <div class="hymn-progress-bar">
          <div class="hymn-progress-fill" style="width: ${progress.percentage}%"></div>
        </div>
      </div>
    `;
  });
  
  hymnsGrid.innerHTML = html;
}

// Get hymn progress
function getHymnProgress(hymnId) {
  const key = `hymn_progress_${hymnId}`;
  const progress = JSON.parse(localStorage.getItem(key) || '{"versesCompleted": 0, "completed": false}');
  const hymn = HYMNS_DATA.find(h => h.id === hymnId);
  const percentage = hymn ? Math.round((progress.versesCompleted / hymn.verses.length) * 100) : 0;
  
  return {
    versesCompleted: progress.versesCompleted || 0,
    completed: progress.completed || false,
    percentage: percentage
  };
}

// Open hymn
window.openHymn = function(hymnId) {
  currentHymn = HYMNS_DATA.find(h => h.id === hymnId);
  if (!currentHymn) return;
  
  currentHymnVerseIndex = 0;
  resetHymnStats();
  
  // Hide list, show practice
  document.getElementById('hymns-list-grid').style.display = 'none';
  document.getElementById('hymns-practice-card').style.display = 'block';
  
  // Update header
  document.getElementById('current-hymn-title').textContent = currentHymn.title;
  document.getElementById('current-hymn-author').textContent = `${currentHymn.author} (${currentHymn.year})`;
  
  // Load first verse
  loadCurrentHymnVerse();
};

// Load current verse
function loadCurrentHymnVerse() {
  if (currentHymnVerseIndex >= currentHymn.verses.length) {
    completeHymn();
    return;
  }
  
  currentHymnVerseText = currentHymn.verses[currentHymnVerseIndex];
  hymnsTyped = '';
  hymnsStartTime = null;
  
  updateHymnVerseDisplay();
  renderHymnVerse();
  
  const input = document.getElementById('hymns-input');
  input.value = '';
  input.disabled = false;
  input.focus();
  
  // Reset stats
  document.getElementById('hymns-time').textContent = '0s';
  document.getElementById('hymns-wpm').textContent = '0';
  document.getElementById('hymns-accuracy').textContent = '100%';
  document.getElementById('hymns-progress').textContent = '0%';
  
  // Reset timer
  stopHymnsTimer();
  hymnsTimeLeft = hymnsTimerDuration;
  const countdownEl = document.getElementById('hymns-countdown');
  
  if (hymnsTimerDuration === 0) {
    countdownEl.textContent = '∞';
    countdownEl.className = '';
  } else {
    countdownEl.textContent = hymnsTimerDuration + 's';
    countdownEl.className = '';
  }
}

// Update verse display
function updateHymnVerseDisplay() {
  const verseInfo = `Verse ${currentHymnVerseIndex + 1} of ${currentHymn.verses.length}`;
  document.getElementById('hymns-verse-info').textContent = verseInfo;
}

// FIX #1: Render hymn verse with proper word wrapping (no word breaks)
function renderHymnVerse() {
  if (hymnsMode === 'audio' && !hymnsAudioPlaying) {
    document.getElementById('hymns-verse-text').innerHTML = 
      '<span style="color: var(--muted); font-style: italic;">🎧 Click "Play Audio" to hear the verse, then type what you hear...</span>';
    return;
  }
  
  const display = document.getElementById('hymns-verse-text');
  
  // Split text by newlines to handle line-by-line display
  const lines = currentHymnVerseText.split('\n');
  let html = '';
  let charIndex = 0;
  
  lines.forEach((line, lineIdx) => {
    let lineHtml = '';
    
    // Split line into words to prevent mid-word breaks
    const words = line.split(' ');
    
    words.forEach((word, wordIdx) => {
      // Add word wrapper to keep words together
      lineHtml += '<span class="word-wrapper">';
      
      // Render each character in the word
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const typedChar = hymnsTyped[charIndex];
        
        let charClass = 'char';
        
        if (charIndex === hymnsTyped.length) {
          charClass += ' current';
        } else if (typedChar !== undefined) {
          if (typedChar === char) {
            charClass += ' correct';
          } else {
            charClass += ' incorrect';
          }
        }
        
        lineHtml += `<span class="${charClass}">${escapeHtml(char)}</span>`;
        charIndex++;
      }
      
      lineHtml += '</span>';
      
      // Add space between words (except last word in line)
      if (wordIdx < words.length - 1) {
        const spaceTypedChar = hymnsTyped[charIndex];
        let spaceClass = 'char';
        
        if (charIndex === hymnsTyped.length) {
          spaceClass += ' current';
        } else if (spaceTypedChar !== undefined) {
          if (spaceTypedChar === ' ') {
            spaceClass += ' correct';
          } else {
            spaceClass += ' incorrect';
          }
        }
        
        lineHtml += `<span class="${spaceClass}">&nbsp;</span>`;
        charIndex++;
      }
    });
    
    html += `<div class="hymn-line">${lineHtml}</div>`;
    
    // Account for newline character in typed text
    if (lineIdx < lines.length - 1) {
      const newlineChar = hymnsTyped[charIndex];
      if (newlineChar === '\n' || newlineChar === undefined) {
        charIndex++;
      }
    }
  });
  
  display.innerHTML = html;
}

// Play audio
function playHymnAudio() {
  if (!currentHymnVerseText) return;
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(currentHymnVerseText);
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    utterance.onstart = () => {
      hymnsAudioPlaying = true;
      document.getElementById('hymns-verse-text').innerHTML = 
        '<span style="color: var(--accent-solid); font-style: italic;">🎧 Playing audio... Listen carefully!</span>';
    };
    
    utterance.onend = () => {
      hymnsAudioPlaying = false;
      renderHymnVerse();
      document.getElementById('hymns-input').disabled = false;
      document.getElementById('hymns-input').focus();
      
      const toast = document.createElement('div');
      toast.className = 'hymns-completion-toast';
      toast.textContent = '✅ Audio complete! Now type what you heard.';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 2700);
    };
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Audio playback is not supported in your browser.');
  }
}

// Stop audio
function stopHymnsAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    hymnsAudioPlaying = false;
  }
}

// Handle input
function handleHymnsInput(e) {
  if (!hymnsStartTime) {
    hymnsStartTime = Date.now();
    startHymnsTimer();
  }
  
  hymnsTyped = e.target.value;
  renderHymnVerse();
  
  // Calculate stats
  const elapsed = (Date.now() - hymnsStartTime) / 1000;
  const wordsTyped = hymnsTyped.length / 5;
  const wpm = elapsed > 0 ? Math.round((wordsTyped / elapsed) * 60) : 0;
  
  let correct = 0;
  for (let i = 0; i < hymnsTyped.length; i++) {
    if (hymnsTyped[i] === currentHymnVerseText[i]) correct++;
  }
  const accuracy = hymnsTyped.length > 0 ? Math.round((correct / hymnsTyped.length) * 100) : 100;
  const progress = Math.round((hymnsTyped.length / currentHymnVerseText.length) * 100);
  
  document.getElementById('hymns-time').textContent = Math.floor(elapsed) + 's';
  document.getElementById('hymns-wpm').textContent = wpm;
  document.getElementById('hymns-accuracy').textContent = accuracy + '%';
  document.getElementById('hymns-progress').textContent = progress + '%';
  
  // Check completion
  if (hymnsTyped.length >= currentHymnVerseText.length) {
    const finalAccuracy = Math.round((correct / currentHymnVerseText.length) * 100);
    completeHymnVerse(wpm, finalAccuracy, elapsed);
  }
}

// Start timer
function startHymnsTimer() {
  if (hymnsTimerInterval) clearInterval(hymnsTimerInterval);
  
  if (hymnsTimerDuration === 0) {
    document.getElementById('hymns-countdown').textContent = '∞';
    document.getElementById('hymns-countdown').className = '';
    return;
  }
  
  hymnsTimeLeft = hymnsTimerDuration;
  const countdownEl = document.getElementById('hymns-countdown');
  countdownEl.textContent = hymnsTimeLeft + 's';
  countdownEl.className = '';
  
  hymnsTimerInterval = setInterval(() => {
    hymnsTimeLeft--;
    
    if (hymnsTimeLeft <= 0) {
      clearInterval(hymnsTimerInterval);
      hymnsTimerInterval = null;
      countdownEl.textContent = '0s';
      countdownEl.className = 'danger';
      document.getElementById('hymns-input').disabled = true;
      showHymnsTimesUpModal();
    } else {
      countdownEl.textContent = hymnsTimeLeft + 's';
      
      if (hymnsTimeLeft <= 10) {
        countdownEl.className = 'danger';
      } else if (hymnsTimeLeft <= 30) {
        countdownEl.className = 'warning';
      } else {
        countdownEl.className = '';
      }
    }
  }, 1000);
}

// Show times up modal
function showHymnsTimesUpModal() {
  const overlay = document.createElement('div');
  overlay.className = 'hymns-modal-overlay';
  overlay.innerHTML = `
    <div class="hymn-summary-modal">
      <h3>⏰ Time's Up!</h3>
      <p class="hymn-summary-subtitle">Move to the next verse or try again.</p>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn btn-secondary" onclick="this.closest('.hymns-modal-overlay').remove()">
          Review Verse
        </button>
        <button class="btn" onclick="this.closest('.hymns-modal-overlay').remove(); nextHymnVerse();">
          Next Verse →
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}

// Next verse function
window.nextHymnVerse = function() {
  currentHymnVerseIndex++;
  loadCurrentHymnVerse();
};

// Stop timer
function stopHymnsTimer() {
  if (hymnsTimerInterval) {
    clearInterval(hymnsTimerInterval);
    hymnsTimerInterval = null;
  }
}

// FIX #3: Complete verse with hymn stats tracking
function completeHymnVerse(wpm, accuracy, elapsed) {
  document.getElementById('hymns-input').disabled = true;
  stopHymnsTimer();
  stopHymnsAudio();
  
  // Update hymn stats
  const wordCount = currentHymnVerseText.split(/\s+/).length;
  hymnStats.totalWords += wordCount;
  hymnStats.totalChars += currentHymnVerseText.length;
  hymnStats.correctChars += Math.round((accuracy / 100) * currentHymnVerseText.length);
  hymnStats.totalTime += elapsed;
  hymnStats.versesCompleted++;
  
  // Save progress
  const key = `hymn_progress_${currentHymn.id}`;
  const progress = JSON.parse(localStorage.getItem(key) || '{"versesCompleted": 0}');
  progress.versesCompleted = Math.max(progress.versesCompleted, currentHymnVerseIndex + 1);
  progress.completed = progress.versesCompleted >= currentHymn.verses.length;
  localStorage.setItem(key, JSON.stringify(progress));
  
  // Update global stats
  const statsKey = 'hymns_stats_global';
  const stats = JSON.parse(localStorage.getItem(statsKey) || '{"totalVerses": 0, "totalHymns": 0}');
  stats.totalVerses = (stats.totalVerses || 0) + 1;
  
  if (progress.completed && !stats.completedHymns?.includes(currentHymn.id)) {
    stats.completedHymns = stats.completedHymns || [];
    stats.completedHymns.push(currentHymn.id);
    stats.totalHymns = stats.completedHymns.length;
  }
  
  localStorage.setItem(statsKey, JSON.stringify(stats));
  updateHymnsStats();
  
  // Show completion
  const toast = document.createElement('div');
  toast.className = 'hymns-completion-toast';
  toast.textContent = `🎵 Verse completed! ${wpm} WPM • ${accuracy}%`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2700);
  
  // Check if hymn is complete
  if (currentHymnVerseIndex < currentHymn.verses.length - 1) {
    // Auto next verse
    setTimeout(() => {
      currentHymnVerseIndex++;
      loadCurrentHymnVerse();
    }, 2000);
  } else {
    // FIX #2: Hymn completed - show summary
    setTimeout(() => {
      completeHymn();
    }, 2000);
  }
}

// FIX #2 & #3: Complete hymn with summary
function completeHymn() {
  showHymnSummary(() => {
    document.getElementById('hymns-list-grid').style.display = 'grid';
    document.getElementById('hymns-practice-card').style.display = 'none';
    loadHymnsList();
  });
}

// FIX #3: Show hymn summary modal
function showHymnSummary(onClose) {
  // Calculate overall hymn stats
  const overallWPM = hymnStats.totalTime > 0 
    ? Math.round((hymnStats.totalWords / hymnStats.totalTime) * 60) 
    : 0;
  const overallAccuracy = hymnStats.totalChars > 0 
    ? Math.round((hymnStats.correctChars / hymnStats.totalChars) * 100) 
    : 100;
  
  const overlay = document.createElement('div');
  overlay.className = 'hymns-modal-overlay';
  overlay.innerHTML = `
    <div class="hymn-summary-modal">
      <div class="hymn-summary-icon">🎉</div>
      <h3>${currentHymn.title} Completed!</h3>
      <p class="hymn-summary-subtitle">${currentHymn.author} (${currentHymn.year})</p>
      
      <div class="hymn-summary-stats">
        <div class="hymn-summary-stat">
          <div class="stat-icon">⚡</div>
          <div class="stat-content">
            <div class="stat-value">${overallWPM}</div>
            <div class="stat-label">Overall WPM</div>
          </div>
        </div>
        <div class="hymn-summary-stat">
          <div class="stat-icon">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${overallAccuracy}%</div>
            <div class="stat-label">Overall Accuracy</div>
          </div>
        </div>
        <div class="hymn-summary-stat">
          <div class="stat-icon">📝</div>
          <div class="stat-content">
            <div class="stat-value">${hymnStats.versesCompleted}</div>
            <div class="stat-label">Verses Completed</div>
          </div>
        </div>
      </div>
      
      <p class="hymn-summary-message">
        You typed ${hymnStats.totalWords} words with ${overallAccuracy}% accuracy! Beautiful work!
      </p>
      
      <button class="btn" onclick="this.closest('.hymns-modal-overlay').remove();" style="width: 200px; margin: 0 auto;">
        Continue →
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Handle close
  overlay.querySelector('.btn').addEventListener('click', () => {
    overlay.remove();
    if (onClose) onClose();
  });
  
  // Remove overlay when clicking outside modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
      if (onClose) onClose();
    }
  });
}

// Helper
function escapeHtml(text) {
  const map = {'&': '&amp;','<': '&lt;','>': '&gt;','"': '&quot;',"'": '&#039;'};
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Export
window.loadHymnsPage = loadHymnsPage;
