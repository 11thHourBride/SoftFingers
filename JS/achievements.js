// ====== ACHIEVEMENTS DATA ======
// Categories: speed | accuracy | dedication | content | competition | learning | special
const ACHIEVEMENTS_DEF = [

  // ── 🚀 SPEED ──────────────────────────────────────────
  { id:'wpm_20',   cat:'speed',  tier:'bronze',   name:"Warming Up",      desc:"Reach 20 WPM",                       icon:"🐢", points:10,  condition: s => s.bestWpm >= 20 },
  { id:'wpm_35',   cat:'speed',  tier:'bronze',   name:"Finding Rhythm",  desc:"Reach 35 WPM",                       icon:"🎵", points:15,  condition: s => s.bestWpm >= 35 },
  { id:'wpm_50',   cat:'speed',  tier:'bronze',   name:"Getting There",   desc:"Reach 50 WPM",                       icon:"🚀", points:20,  condition: s => s.bestWpm >= 50 },
  { id:'wpm_65',   cat:'speed',  tier:'silver',   name:"Fast Fingers",    desc:"Reach 65 WPM",                       icon:"✌️", points:30,  condition: s => s.bestWpm >= 65 },
  { id:'wpm_75',   cat:'speed',  tier:'silver',   name:"Speed Runner",    desc:"Reach 75 WPM",                       icon:"⚡", points:35,  condition: s => s.bestWpm >= 75 },
  { id:'wpm_90',   cat:'speed',  tier:'silver',   name:"Blazing Fast",    desc:"Reach 90 WPM",                       icon:"🏎️", points:50,  condition: s => s.bestWpm >= 90 },
  { id:'wpm_100',  cat:'speed',  tier:'gold',     name:"Century Club",    desc:"Reach 100 WPM",                      icon:"💯", points:60,  condition: s => s.bestWpm >= 100 },
  { id:'wpm_120',  cat:'speed',  tier:'gold',     name:"Supersonic",      desc:"Reach 120 WPM",                      icon:"✈️", points:80,  condition: s => s.bestWpm >= 120 },
  { id:'wpm_150',  cat:'speed',  tier:'gold',     name:"Speed Demon",     desc:"Reach 150 WPM",                      icon:"🔥", points:100, condition: s => s.bestWpm >= 150 },
  { id:'wpm_175',  cat:'speed',  tier:'platinum', name:"Lightning Hands", desc:"Reach 175 WPM",                      icon:"⚡💥",points:150, condition: s => s.bestWpm >= 175 },
  { id:'wpm_200',  cat:'speed',  tier:'platinum', name:"TypeGod",         desc:"Reach 200 WPM",                      icon:"👑", points:200, condition: s => s.bestWpm >= 200 },

  // ── 🎯 ACCURACY ───────────────────────────────────────
  { id:'acc_80',   cat:'accuracy',tier:'bronze',  name:"Getting Accurate","desc":"Finish a test with 80%+ accuracy", icon:"🎯", points:10,  condition: s => s.bestAccuracy >= 80 },
  { id:'acc_90',   cat:'accuracy',tier:'bronze',  name:"Sharp Typist",    desc:"Finish a test with 90%+ accuracy",  icon:"🔍", points:20,  condition: s => s.bestAccuracy >= 90 },
  { id:'acc_95',   cat:'accuracy',tier:'silver',  name:"Precision Coder", desc:"Finish a test with 95%+ accuracy",  icon:"💎", points:35,  condition: s => s.bestAccuracy >= 95 },
  { id:'acc_99',   cat:'accuracy',tier:'gold',    name:"Nearly Perfect",  desc:"Finish a test with 99%+ accuracy",  icon:"✨", points:50,  condition: s => s.bestAccuracy >= 99 },
  { id:'acc_100',  cat:'accuracy',tier:'platinum',name:"Perfect Typist",  desc:"Achieve 100% accuracy on any test", icon:"💫", points:75,  condition: s => s.bestAccuracy >= 100 },
  { id:'acc_streak',cat:'accuracy',tier:'gold',   name:"Consistent Hand", desc:"Score 95%+ accuracy 10 tests in a row",icon:"🎖️",points:60, condition: s => (s.accuracyStreak||0) >= 10 },

  // ── 🔥 DEDICATION ─────────────────────────────────────
  { id:'first_test',cat:'dedication',tier:'bronze',name:"First Steps",    desc:"Complete your very first typing test",icon:"👶",points:10,  condition: s => s.testsCompleted >= 1 },
  { id:'tests_5',  cat:'dedication',tier:'bronze', name:"Just Starting",  desc:"Complete 5 typing tests",            icon:"🌱", points:15,  condition: s => s.testsCompleted >= 5 },
  { id:'tests_10', cat:'dedication',tier:'bronze', name:"Dedicated",      desc:"Complete 10 typing tests",           icon:"💪", points:25,  condition: s => s.testsCompleted >= 10 },
  { id:'tests_25', cat:'dedication',tier:'silver', name:"Committed",      desc:"Complete 25 typing tests",           icon:"🛠️", points:40,  condition: s => s.testsCompleted >= 25 },
  { id:'tests_50', cat:'dedication',tier:'silver', name:"Veteran",        desc:"Complete 50 typing tests",           icon:"🎖️", points:60,  condition: s => s.testsCompleted >= 50 },
  { id:'tests_100',cat:'dedication',tier:'gold',   name:"TypeCraft Legend",desc:"Complete 100 typing tests",         icon:"🏆", points:100, condition: s => s.testsCompleted >= 100 },
  { id:'tests_200',cat:'dedication',tier:'gold',   name:"Centurion",      desc:"Complete 200 typing tests",          icon:"⚔️", points:150, condition: s => s.testsCompleted >= 200 },
  { id:'tests_500',cat:'dedication',tier:'platinum',name:"Eternal Typist","desc":"Complete 500 typing tests",        icon:"♾️", points:300, condition: s => s.testsCompleted >= 500 },
  { id:'streak_3', cat:'dedication',tier:'bronze', name:"On a Roll",       desc:"Type 3 days in a row",              icon:"🔗", points:15,  condition: s => s.streak >= 3 },
  { id:'streak_7', cat:'dedication',tier:'silver', name:"Week Warrior",    desc:"Type 7 days in a row",              icon:"📅", points:40,  condition: s => s.streak >= 7 },
  { id:'streak_14',cat:'dedication',tier:'gold',   name:"Fortnight Fire",  desc:"Type 14 days in a row",             icon:"🌟", points:80,  condition: s => s.streak >= 14 },
  { id:'streak_30',cat:'dedication',tier:'gold',   name:"Monthly Master",  desc:"Type 30 days in a row",             icon:"🗓️", points:150, condition: s => s.streak >= 30 },
  { id:'streak_60',cat:'dedication',tier:'platinum',name:"Unstoppable",    desc:"Type 60 days in a row",             icon:"🌊", points:250, condition: s => s.streak >= 60 },
  { id:'marathon', cat:'dedication',tier:'gold',   name:"Marathon",        desc:"Complete a 30-minute typing test",  icon:"🏃", points:80,  condition: s => s.longestTest >= 1800 },

  // ── 📚 CONTENT ────────────────────────────────────────
  { id:'import',   cat:'content', tier:'bronze',  name:"Text Importer",   desc:"Practice with imported text",        icon:"📥", points:15,  condition: s => s.importUsed >= 1 },
  { id:'import_5', cat:'content', tier:'silver',  name:"Import Addict",   desc:"Import and type 5 custom texts",     icon:"📂", points:35,  condition: s => s.importUsed >= 5 },
  { id:'quotes_10',cat:'content', tier:'bronze',  name:"Quote Collector", desc:"Complete 10 tests in Quotes mode",   icon:"💬", points:25,  condition: s => s.quotesCompleted >= 10 },
  { id:'quotes_50',cat:'content', tier:'silver',  name:"Quote Master",    desc:"Complete 50 tests in Quotes mode",   icon:"📖", points:60,  condition: s => s.quotesCompleted >= 50 },
  { id:'stories_5',cat:'content', tier:'bronze',  name:"Story Time",      desc:"Complete 5 tests in Stories mode",   icon:"📚", points:20,  condition: s => s.storiesCompleted >= 5 },
  { id:'bible',    cat:'content', tier:'silver',  name:"Scripture Typist",desc:"Complete 3 Bible practice sessions", icon:"✝️", points:30,  condition: s => s.bibleCompleted >= 3 },
  { id:'bible_all',cat:'content', tier:'gold',    name:"Bible Scholar",   desc:"Complete all Bible passages",        icon:"📿", points:80,  condition: s => s.bibleCompleted >= 9 },
  { id:'hymns',    cat:'content', tier:'silver',  name:"Hymn Singer",     desc:"Complete 2 Hymns practice sessions", icon:"🎵", points:30,  condition: s => s.hymnsCompleted >= 2 },
  { id:'hymns_all',cat:'content', tier:'gold',    name:"Choir Master",    desc:"Complete all Hymns sessions",        icon:"🎶", points:60,  condition: s => s.hymnsCompleted >= 6 },
  { id:'history',  cat:'content', tier:'gold',    name:"Historian",       desc:"Complete all history topics",        icon:"📜", points:60,  condition: s => s.historyCompleted >= Object.keys(HISTORY_TEXTS||{}).length },
  { id:'history_5',cat:'content', tier:'bronze',  name:"History Buff",    desc:"Complete 5 history topics",          icon:"🏛️", points:25,  condition: s => s.historyCompleted >= 5 },

  // ── ⚔️ COMPETITION ────────────────────────────────────
  { id:'competition',cat:'competition',tier:'bronze', name:"Competitor",  desc:"Join your first competition",        icon:"⚔️", points:25,  condition: s => s.competitionsJoined >= 1 },
  { id:'comp_3',   cat:'competition',tier:'bronze',   name:"Race Regular",desc:"Join 3 competitions",                icon:"🏁", points:40,  condition: s => s.competitionsJoined >= 3 },
  { id:'comp_10',  cat:'competition',tier:'silver',   name:"Speed Racer", desc:"Join 10 competitions",               icon:"🏎️", points:80,  condition: s => s.competitionsJoined >= 10 },
  { id:'comp_win', cat:'competition',tier:'gold',     name:"Race Winner",  desc:"Win a typing competition",          icon:"🥇", points:100, condition: s => (s.competitionsWon||0) >= 1 },
  { id:'comp_podium',cat:'competition',tier:'silver', name:"Podium Finish",desc:"Finish in the top 3 of any race",   icon:"🏅", points:60,  condition: s => (s.podiumFinishes||0) >= 1 },
  { id:'comp_5wins',cat:'competition',tier:'platinum',name:"Champion",    desc:"Win 5 competitions",                icon:"🏆", points:200, condition: s => (s.competitionsWon||0) >= 5 },

  // ── 🎓 LEARNING ───────────────────────────────────────
  { id:'lesson_1',  cat:'learning', tier:'bronze',  name:"First Lesson",  desc:"Complete your first lesson",         icon:"📝", points:10,  condition: s => (s.completedLessons||[]).length >= 1 },
  { id:'lesson_5',  cat:'learning', tier:'bronze',  name:"Quick Learner", desc:"Complete 5 lessons",                 icon:"⚡", points:25,  condition: s => (s.completedLessons||[]).length >= 5 },
  { id:'lesson_10', cat:'learning', tier:'silver',  name:"Lesson Veteran",desc:"Complete 10 lessons",               icon:"📗", points:50,  condition: s => (s.completedLessons||[]).length >= 10 },
  { id:'lesson_complete',cat:'learning',tier:'gold', name:"Graduate",      desc:"Complete all beginner lessons",     icon:"🎓", points:60,  condition: s => s.beginnerLessonsComplete },
  { id:'intermediate_grad',cat:'learning',tier:'gold',name:"Intermediate Graduate",desc:"Complete all intermediate lessons",icon:"🎓",points:100,condition: s => s.intermediateLessonsComplete },
  { id:'master_typist',cat:'learning',tier:'platinum',name:"Master Typist","desc":"Complete all advanced lessons",   icon:"🏛️", points:200, condition: s => s.advancedLessonsComplete },
  { id:'advanced',  cat:'learning', tier:'silver',  name:"Advanced Typist",desc:"Complete a test at Advanced level", icon:"📈", points:45,  condition: s => s.advancedTests >= 1 },
  { id:'audio',     cat:'learning', tier:'gold',    name:"Audio Ace",      desc:"Complete an audio transcription lesson",icon:"🎧",points:50,condition: s => s.audioCompleted >= 1 },

  // ── ⭐ SPECIAL ────────────────────────────────────────
  { id:'night_owl', cat:'special',  tier:'silver',  name:"Night Owl",      desc:"Type past midnight",                icon:"🦉", points:20,  condition: s => s.nightTyping },
  { id:'early_bird',cat:'special',  tier:'silver',  name:"Early Bird",     desc:"Type before 6 AM",                  icon:"🌅", points:20,  condition: s => s.earlyBird },
  { id:'speed_boost',cat:'special', tier:'silver',  name:"Speed Boost",    desc:"Improve WPM by 20+ in one session", icon:"⬆️", points:35,  condition: s => s.wpmImproved >= 20 },
  { id:'comeback',  cat:'special',  tier:'gold',    name:"Comeback Kid",   desc:"Bounce back after 3 poor tests",    icon:"🔄", points:50,  condition: s => (s.comebackCount||0) >= 1 },
  { id:'error_free',cat:'special',  tier:'gold',    name:"Ghost Typist",   desc:"Complete a full test with zero errors",icon:"👻",points:80, condition: s => s.zeroErrorTest },
  { id:'speed_accurate',cat:'special',tier:'platinum',name:"Diamond Hands","desc":"Score 100 WPM with 99%+ accuracy",icon:"💎",points:150, condition: s => s.bestWpm >= 100 && s.bestAccuracy >= 99 },
  { id:'all_rounder',cat:'special', tier:'platinum',name:"All-Rounder",   desc:"Use all 3 modes at least 5 times each",icon:"🌐",points:120,condition: s => s.quotesCompleted >= 5 && s.storiesCompleted >= 5 && (s.testsCompleted - (s.quotesCompleted||0) - (s.storiesCompleted||0)) >= 5 },
];
