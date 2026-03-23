/* ====================================================
   SoftFingers - Full Application Logic
   ==================================================== */

// ====== STATE ======
const state = {
  user: null,  // null = guest
  currentPage: 'dashboard',
  // Test
  testActive: false,
  testStarted: false,
  testText: '',
  testChars: [],
  testPos: 0,
  testErrors: 0,
  testTimer: null,
  testTimeLeft: 30,
  testTotalTime: 30,
  testStartTime: null,
  // Settings
  difficulty: 'beginner',
  mode: 'words',
  duration: 60,
  opts: { punctuation: false, numbers: false, symbols: false },
  // Lesson
  currentLesson: null,
  lessonLevel: 'beginner',
  lessonPos: 0,
  lessonErrors: 0,
  lessonStartTime: null,
  lessonActive: false,
  // Practice
  practiceCategory: 'bible',
  practicePos: 0,
  practiceErrors: 0,
  practiceStartTime: null,
  practiceActive: false,
  currentPracticeText: '',
  // Import
  importText: '',
  importPos: 0,
  importErrors: 0,
  importStartTime: null,
  importActive: false,
  // Audio
  audioText: '',
  audioUtterance: null,
  // F5
  lastF5: 0,
  // Competition
  competitions: [],
  currentShareLink: ''
};

// ====== STORAGE ======
const DB = {
  get: (k, d=null) => { try { const v = localStorage.getItem('tc_'+k); return v ? JSON.parse(v) : d; } catch { return d; }},
  set: (k, v) => { try { localStorage.setItem('tc_'+k, JSON.stringify(v)); } catch {} },
  del: (k) => localStorage.removeItem('tc_'+k)
};


// ====== LEADERBOARD SEED DATA ======
const SEED_LEADERBOARD = [
  {rank:1,user:"TypeMaster_GH",wpm:187,acc:99.2,date:"2026-03-18",mode:"quotes",diff:"advanced"},
  {rank:2,user:"SpeedDemon99",wpm:172,acc:98.7,date:"2026-03-19",mode:"words",diff:"advanced"},
  {rank:3,user:"KeyWizard",wpm:165,acc:99.5,date:"2026-03-17",mode:"stories",diff:"advanced"},
  {rank:4,user:"AccuracyKing",wpm:158,acc:99.9,date:"2026-03-20",mode:"quotes",diff:"intermediate"},
  {rank:5,user:"FastFingers_Accra",wpm:142,acc:97.8,date:"2026-03-18",mode:"words",diff:"intermediate"},
  {rank:6,user:"TypingPro_Tema",wpm:135,acc:98.1,date:"2026-03-19",mode:"quotes",diff:"advanced"},
  {rank:7,user:"WordWarrior",wpm:128,acc:96.5,date:"2026-03-16",mode:"stories",diff:"intermediate"},
  {rank:8,user:"KeyboardQueen",wpm:119,acc:97.2,date:"2026-03-20",mode:"words",diff:"beginner"},
  {rank:9,user:"NightTyper",wpm:112,acc:95.8,date:"2026-03-15",mode:"quotes",diff:"intermediate"},
  {rank:10,user:"SwiftKeys",wpm:105,acc:94.3,date:"2026-03-19",mode:"words",diff:"beginner"}
];

// ====== LESSONS DATA ======
const LESSONS = {

  // ================================================================
  // BEGINNER — 12 lessons, 8 exercises each
  // ================================================================
  beginner: [
    {
      id:'b1', name:"Home Row — Left Hand", type:"drill", tag:"beginner",
      desc:"Your left hand lives on A S D F. Build muscle memory before anything else.",
      targetWpm:15, targetAcc:95,
      exercises:[
        "aaa sss ddd fff",
        "as sad dad fad add",
        "saff daff adds sass",
        "fads dads adds sass fads",
        "a sad fall a fast fad",
        "dad adds a safe fad",
        "all falls flash fast",
        "alaska falls dallas salsa"
      ]
    },
    {
      id:'b2', name:"Home Row — Right Hand", type:"drill", tag:"beginner",
      desc:"Your right hand rests on J K L ; — drill these until they are effortless.",
      targetWpm:15, targetAcc:95,
      exercises:[
        "jjj kkk lll ;;;",
        "jk kl lj jl kj",
        "jell kill fill will",
        "kill lull jokk jell lull",
        "jill likes kale a lot",
        "kill all jelly and kale",
        "skill still spill fill kill",
        "jellies fill little jars"
      ]
    },
    {
      id:'b3', name:"Home Row — Both Hands", type:"drill", tag:"beginner",
      desc:"Combine left and right home row. This is the foundation of all touch typing.",
      targetWpm:18, targetAcc:95,
      exercises:[
        "asd jkl asd jkl",
        "ask lad fall silk",
        "sad flask skill hall",
        "fall silk ask lad add",
        "all kidsalk fast dads",
        "a flask falls at dusk",
        "dad fills a silk flask",
        "alaska falls dallas skilful"
      ]
    },
    {
      id:'b4', name:"Top Row — Left Side", type:"drill", tag:"beginner",
      desc:"Q W E R T — the left side of the top row. Reach up with the right fingers.",
      targetWpm:15, targetAcc:90,
      exercises:[
        "qqq www eee rrr ttt",
        "we ew qwer trew",
        "tree free three",
        "write tweet fewer",
        "were we free to try",
        "tweet after tweet after",
        "we queue there first",
        "tree wetter three queues"
      ]
    },
    {
      id:'b5', name:"Top Row — Right Side", type:"drill", tag:"beginner",
      desc:"Y U I O P — the right side of the top row. Stretch up without moving your wrist.",
      targetWpm:15, targetAcc:90,
      exercises:[
        "yyy uuu iii ooo ppp",
        "you oil poi yup",
        "pool loop upou opui",
        "upon your oil pool",
        "you pour oil into it",
        "puppy poodle polo pup",
        "your priority is you",
        "pull up your pool loop"
      ]
    },
    {
      id:'b6', name:"Full Top Row Words", type:"drill", tag:"beginner",
      desc:"Combine the full QWERTY row with real words. Focus on reach, not speed.",
      targetWpm:20, targetAcc:90,
      exercises:[
        "type quite power query",
        "your water power tower",
        "write poetry every week",
        "quit your prior worry",
        "the quiet poet wrote",
        "poetry requires true effort",
        "power outage put out fire",
        "you write quite pretty poetry"
      ]
    },
    {
      id:'b7', name:"Bottom Row — Z X C V B", type:"drill", tag:"beginner",
      desc:"The bottom row is trickiest. Start slow and build accuracy before speed.",
      targetWpm:12, targetAcc:90,
      exercises:[
        "zzz xxx ccc vvv bbb",
        "zap cab van box",
        "zinc cave vibe zone",
        "cab vex zinc buzz box",
        "black cave zebra buzz",
        "vivid zinc above cube",
        "vibrant cave zone black",
        "brave zinc voices cave above"
      ]
    },
    {
      id:'b8', name:"Bottom Row — N M", type:"drill", tag:"beginner",
      desc:"N and M are the most common bottom-row letters. Train them with full words.",
      targetWpm:15, targetAcc:90,
      exercises:[
        "nnn mmm nm mn",
        "man men nun nun",
        "name mine moon mean",
        "many men mean no harm",
        "moon shines on the name",
        "minimum number of names",
        "manage money and remain calm",
        "maintain minimum momentum now"
      ]
    },
    {
      id:'b9', name:"Number Row 1–5", type:"drill", tag:"beginner",
      desc:"Left-side numbers. Use the correct finger: 1=pinky, 2=ring, 3=middle, 4=index, 5=index.",
      targetWpm:12, targetAcc:88,
      exercises:[
        "1 2 3 4 5",
        "11 22 33 44 55",
        "123 234 345 451",
        "12 34 51 23 45",
        "call 1-234-5555",
        "item 3 costs 45 units",
        "45 students in 2 classes",
        "order 123 items by 5 pm"
      ]
    },
    {
      id:'b10', name:"Number Row 6–0", type:"drill", tag:"beginner",
      desc:"Right-side numbers. Keep your hand position stable while reaching up.",
      targetWpm:12, targetAcc:88,
      exercises:[
        "6 7 8 9 0",
        "66 77 88 99 00",
        "678 789 890 906",
        "60 70 80 90 100",
        "dial 876-9000 now",
        "order 7890 units by 6 pm",
        "room 607 on floor 9",
        "price is 98 or 76 dollars"
      ]
    },
    {
      id:'b11', name:"Common Short Words", type:"drill", tag:"beginner",
      desc:"The 50 most common English words. Build fluid typing patterns with real language.",
      targetWpm:25, targetAcc:92,
      exercises:[
        "the and for are but",
        "not you all can her",
        "was one our out day",
        "get has him his how",
        "man new now old see",
        "two way who boy did",
        "its let put say she",
        "the man and his way and the day and his old age"
      ]
    },
    {
      id:'b12', name:"Beginner Sentences", type:"drill", tag:"beginner",
      desc:"Full beginner sentences to tie everything together before moving on.",
      targetWpm:25, targetAcc:92,
      exercises:[
        "the cat sat on the mat",
        "a big black dog ran fast",
        "she sold six slim silk fans",
        "the old man sat by the lake",
        "my dog likes to run and jump",
        "the sun sets in the west sky",
        "jack and jill went up the hill",
        "she sells seashells by the seashore"
      ]
    }
  ],

  // ================================================================
  // INTERMEDIATE — 12 lessons, 8–10 exercises each
  // ================================================================
  intermediate: [
    {
      id:'i1', name:"Shift Key — Capitals", type:"drill", tag:"intermediate",
      desc:"Master the shift key for proper capitalization. Left shift for right-hand keys, right shift for left.",
      targetWpm:30, targetAcc:92,
      exercises:[
        "Hello World Good Morning",
        "The Quick Brown Fox",
        "Alice Bob Carol David Eve",
        "Monday Tuesday Wednesday Thursday",
        "January February March April May",
        "London Paris Berlin Tokyo Lagos",
        "NASA FBI CIA UEFA WHO",
        "The United States Of America",
        "She Said Hello And He Replied",
        "Africa Asia Europe America Australia"
      ]
    },
    {
      id:'i2', name:"Comma and Period", type:"drill", tag:"intermediate",
      desc:"Commas pause, periods stop. Get these right and your typing looks professional.",
      targetWpm:28, targetAcc:92,
      exercises:[
        "Hello, my name is Sam.",
        "We have milk, eggs, and bread.",
        "The sun rose. The birds sang.",
        "Come early, stay late, work hard.",
        "I like cats, dogs, and birds.",
        "He ran fast. She ran faster.",
        "Yes, I agree. No, I do not.",
        "Red, blue, and green are colors.",
        "She woke up, ate, and left.",
        "Rain fell. Wind blew. Trees bent."
      ]
    },
    {
      id:'i3', name:"Question and Exclamation", type:"drill", tag:"intermediate",
      desc:"Questions end with ? and excitement ends with !. Practice the shift reach.",
      targetWpm:28, targetAcc:90,
      exercises:[
        "Are you ready? Yes, I am!",
        "What time is it? It is noon!",
        "How are you? I am great!",
        "Is this right? Yes, it is!",
        "Can you run? Watch me go!",
        "Did you see that? Amazing!",
        "Where are we? We are here!",
        "Who did this? I did it!",
        "Really? Yes, really! Trust me!",
        "Why wait? Start now! Go!"
      ]
    },
    {
      id:'i4', name:"Apostrophes and Quotes", type:"drill", tag:"intermediate",
      desc:"Contractions and possessives use apostrophes. Quoted speech uses double quotes.",
      targetWpm:28, targetAcc:90,
      exercises:[
        "I can't stop. Don't worry.",
        "It's a great day, isn't it?",
        "He said, \"Hello, how are you?\"",
        "She replied, \"I'm fine, thanks!\"",
        "John's car won't start today.",
        "They're going to Tom's house.",
        "\"Are you sure?\" he asked.",
        "It's Bob's turn, not yours.",
        "I'd love to, but I can't.",
        "\"Let's go,\" she said firmly."
      ]
    },
    {
      id:'i5', name:"Colon and Semicolon", type:"drill", tag:"intermediate",
      desc:"Colon introduces. Semicolon joins two related ideas. Both elevate writing.",
      targetWpm:26, targetAcc:90,
      exercises:[
        "We need: milk, eggs, and butter.",
        "He was tired; he slept early.",
        "Three things matter: effort, focus, time.",
        "She loved books; he loved film.",
        "The rule is simple: never give up.",
        "They arrived late; the show had started.",
        "Skills needed: typing, writing, reading.",
        "It was hot; we stayed inside.",
        "The note read: meet me at noon.",
        "He smiled; she laughed aloud."
      ]
    },
    {
      id:'i6', name:"Brackets and Dashes", type:"drill", tag:"intermediate",
      desc:"Parentheses (add context), dashes — add emphasis — and hyphens join-words.",
      targetWpm:25, targetAcc:88,
      exercises:[
        "He left (without saying goodbye).",
        "The result — as expected — was zero.",
        "She won (by a wide margin) today.",
        "A well-known fact is often ignored.",
        "The team (five members) worked hard.",
        "Speed — not accuracy — was his goal.",
        "A self-taught programmer (age 22) won.",
        "The film (three hours long) was great.",
        "He waited — patiently — for the call.",
        "Long-term goals require short-term effort."
      ]
    },
    {
      id:'i7', name:"Common Business Phrases", type:"drill", tag:"intermediate",
      desc:"Professional emails and workplace communication use these phrases daily.",
      targetWpm:35, targetAcc:92,
      exercises:[
        "Please find attached the report.",
        "Thank you for your prompt response.",
        "I hope this email finds you well.",
        "We look forward to hearing from you.",
        "Please do not hesitate to contact us.",
        "Kindly note that the deadline is Friday.",
        "Best regards and warm wishes to you.",
        "The meeting has been rescheduled to Monday.",
        "Please review and approve the attached file.",
        "We apologize for any inconvenience caused."
      ]
    },
    {
      id:'i8', name:"Numbers in Context", type:"drill", tag:"intermediate",
      desc:"Numbers mixed with words — dates, prices, percentages, phone numbers.",
      targetWpm:30, targetAcc:90,
      exercises:[
        "Call us at 0244-123-456 today.",
        "The price is $49.99 per unit.",
        "She scored 87% on the test.",
        "The meeting is on March 15, 2025.",
        "We need 200 boxes by Friday.",
        "He ran 10km in 42 minutes.",
        "The class has 35 students in 3 groups.",
        "Order #10045 was shipped on July 4.",
        "The discount is 25% on orders over $100.",
        "There are 52 weeks in a year."
      ]
    },
    {
      id:'i9', name:"Speed Builder — Pangrams", type:"drill", tag:"intermediate",
      desc:"Pangrams use every letter of the alphabet. Perfect for warm-up and speed drills.",
      targetWpm:40, targetAcc:92,
      exercises:[
        "the quick brown fox jumps over the lazy dog",
        "pack my box with five dozen liquor jugs",
        "how vexingly quick daft zebras jump",
        "sphinx of black quartz judge my vow",
        "the five boxing wizards jump quickly",
        "jackdaws love my big sphinx of quartz",
        "we promptly judged antique ivory buckles",
        "blowzy night-frumps vex and jab quick wads",
        "quartz jock vends bmw fez glyph",
        "waltz nymph for quick jigs vex bud"
      ]
    },
    {
      id:'i10', name:"Code & Symbols", type:"drill", tag:"intermediate",
      desc:"Developers need symbols: brackets, operators, underscores. Train them here.",
      targetWpm:25, targetAcc:88,
      exercises:[
        "function add(a, b) { return a + b; }",
        "const name = 'Alice'; let age = 30;",
        "if (score > 90) { grade = 'A'; }",
        "let url = 'https://example.com/api';",
        "for (let i = 0; i < 10; i++) {}",
        "const arr = [1, 2, 3, 4, 5];",
        "email@domain.com | #hashtag @mention",
        "price * qty - discount + tax = total",
        "user_name = input('Enter name: ')",
        "<div class=\"container\" id=\"main\"></div>"
      ]
    },
    {
      id:'i11', name:"Intermediate Paragraphs", type:"drill", tag:"intermediate",
      desc:"Longer texts to build your typing endurance and consistent rhythm.",
      targetWpm:38, targetAcc:92,
      exercises:[
        "Good habits are built one small action at a time. Start with five minutes of practice each day.",
        "The most effective typists do not look at the keyboard. They train their fingers to know every key by touch.",
        "Speed is a byproduct of accuracy. Focus first on typing every character correctly, then let speed follow naturally.",
        "Consistency beats intensity. Thirty minutes of daily practice will improve your speed far more than one long session.",
        "Your fingers have memory. Repeat an exercise until it feels automatic, then move to the next challenge.",
        "The difference between a good typist and a great one is rhythm. Type in a steady flow, not in bursts.",
        "Errors slow you down more than caution does. When in doubt, slow down and get it right the first time.",
        "Every professional was once a beginner. Trust the process, practice with intention, and results will follow."
      ]
    },
    {
      id:'i12', name:"Mixed Symbols Mastery", type:"drill", tag:"intermediate",
      desc:"Final intermediate drill — all punctuation and symbols together in realistic text.",
      targetWpm:35, targetAcc:90,
      exercises:[
        "He asked, \"Are you ready?\" She said, \"Yes!\"",
        "The cost is $12.50 — that's 20% off!",
        "Call us (Monday–Friday) at 0302-555-000.",
        "She wrote: 'I'll be there by 3:30 p.m.'",
        "Key metrics: WPM > 60, accuracy > 95%.",
        "The file (version 2.1.0) was updated today.",
        "Items needed: pen, paper, ruler, and tape.",
        "\"Wait,\" he said, \"I haven't finished yet!\"",
        "Net profit = revenue - costs + other income.",
        "She smiled; he waved — they said nothing."
      ]
    }
  ],

  // ================================================================
  // ADVANCED — 12 lessons, 8 exercises each
  // ================================================================
  advanced: [
    {
      id:'a1', name:"Complex Vocabulary", type:"drill", tag:"advanced",
      desc:"High-frequency academic and professional vocabulary. Accuracy first.",
      targetWpm:50, targetAcc:95,
      exercises:[
        "The acknowledgment of ambiguity is a sign of intellectual maturity.",
        "Bureaucratic inefficiencies undermine organizational productivity significantly.",
        "The psychological ramifications of long-term isolation remain poorly understood.",
        "Technological acceleration disproportionately disadvantages vulnerable communities.",
        "The methodology employed necessitated rigorous empirical validation protocols.",
        "Unprecedented geopolitical circumstances require extraordinary diplomatic sensitivity.",
        "Comprehensive infrastructure rehabilitation demands coordinated governmental intervention.",
        "Entrepreneurial resilience distinguishes successful ventures from premature failures."
      ]
    },
    {
      id:'a2', name:"Scientific Writing", type:"drill", tag:"advanced",
      desc:"Scientific prose tests your ability to type precise technical language fluidly.",
      targetWpm:48, targetAcc:95,
      exercises:[
        "Mitochondria are membrane-bound organelles that generate adenosine triphosphate.",
        "The electromagnetic spectrum ranges from radio waves to gamma radiation.",
        "Photosynthesis converts solar energy into glucose via chlorophyll pigments.",
        "DNA replication occurs via a semi-conservative mechanism during cell division.",
        "The Heisenberg uncertainty principle limits simultaneous position-momentum measurement.",
        "Neural plasticity allows the brain to reorganize following traumatic injury.",
        "Tectonic plate movement drives volcanic activity and seismic events worldwide.",
        "The periodic table organizes elements by atomic number and electron configuration."
      ]
    },
    {
      id:'a3', name:"Legal and Formal Language", type:"drill", tag:"advanced",
      desc:"Legal and formal English demands precision. Every word must be exact.",
      targetWpm:45, targetAcc:95,
      exercises:[
        "Pursuant to the aforementioned agreement, all parties herein acknowledge liability.",
        "The defendant's counsel filed a motion to dismiss on procedural grounds.",
        "Notwithstanding the foregoing provisions, exceptions may apply in specific circumstances.",
        "The contractual obligations outlined herein supersede all prior verbal agreements.",
        "In accordance with section 14(b), the applicant must submit full documentation.",
        "The arbitration panel rendered its decision in favor of the respondent.",
        "All intellectual property rights remain vested exclusively with the original creator.",
        "The undersigned hereby confirms receipt of the aforementioned correspondence dated."
      ]
    },
    {
      id:'a4', name:"Financial and Business Prose", type:"drill", tag:"advanced",
      desc:"Finance and business writing appears in careers of every professional typist.",
      targetWpm:50, targetAcc:95,
      exercises:[
        "The quarterly earnings report demonstrated significant year-over-year revenue growth.",
        "Portfolio diversification mitigates systemic risk across multiple asset classes.",
        "The consolidated balance sheet reflects accumulated depreciation of fixed assets.",
        "Market capitalization is calculated by multiplying share price by outstanding shares.",
        "The board approved the acquisition subject to regulatory approval and due diligence.",
        "Return on equity measures profitability relative to shareholders' invested capital.",
        "Macroeconomic headwinds dampened consumer confidence and discretionary spending.",
        "The central bank's monetary tightening cycle aims to curb persistent inflation."
      ]
    },
    {
      id:'a5', name:"Medical and Health Writing", type:"drill", tag:"advanced",
      desc:"Medical terminology demands absolute accuracy — no room for typos here.",
      targetWpm:45, targetAcc:96,
      exercises:[
        "The patient presented with acute myocardial infarction requiring immediate intervention.",
        "Pharmacokinetic parameters influence drug dosage and therapeutic window calculations.",
        "The histopathological examination revealed malignant neoplastic transformation.",
        "Comorbid hypertension and diabetes mellitus increase cardiovascular event risk.",
        "Immunosuppressive therapy is indicated following solid organ transplantation procedures.",
        "The electroencephalogram demonstrated diffuse cortical abnormalities consistent with encephalopathy.",
        "Prophylactic antibiotic administration reduces postoperative surgical site infection rates.",
        "Radiological findings corroborated the clinical diagnosis of pneumothorax."
      ]
    },
    {
      id:'a6', name:"Literature and Prose Style", type:"drill", tag:"advanced",
      desc:"Literary prose is rhythmic and varied — great for developing typing flow.",
      targetWpm:55, targetAcc:94,
      exercises:[
        "It was the best of times, it was the worst of times, it was the age of wisdom.",
        "Call me Ishmael. Some years ago, never mind how long precisely, I found myself ashore.",
        "All happy families are alike; each unhappy family is unhappy in its own way.",
        "It is a truth universally acknowledged that a single man in possession of a fortune.",
        "The sky above the port was the color of television, tuned to a dead channel.",
        "Many years later, as he faced the firing squad, Colonel Aureliano Buendía remembered.",
        "In my beginning is my end. In succession houses rise and fall, crumble, are extended.",
        "We are all alone, born alone, die alone, and in spite of true romance novels, love alone."
      ]
    },
    {
      id:'a7', name:"Speed Paragraphs — 60+ WPM", type:"drill", tag:"advanced",
      desc:"Full paragraphs designed for typists targeting 60 WPM and above.",
      targetWpm:60, targetAcc:94,
      exercises:[
        "The art of typing quickly without sacrificing accuracy is achieved through deliberate practice and consistent repetition over many weeks and months of dedicated effort.",
        "Professional typists understand that speed is a natural consequence of perfecting the fundamentals: correct posture, proper finger placement, and relaxed wrist movement.",
        "Every keystroke in a long document compounds into thousands of decisions per hour. The typist who minimizes errors saves far more time than the one who merely types fast.",
        "The brain and fingers must work in complete harmony for peak typing performance. Anticipate the next word while finishing the current one to maintain unbroken momentum.",
        "Rhythm separates good typists from great ones. Type as if you are playing music: consistent tempo, smooth transitions, and no unnecessary pauses between words.",
        "The most important muscle for typing is not in your fingers but in your mind. Focus, patience, and the ability to relax under pressure define the elite typist.",
        "Touch typing frees the eyes to read ahead. This predictive advantage allows the fingers to stay in constant motion, dramatically increasing sustained typing speed.",
        "A typist who can sustain eighty words per minute with ninety-five percent accuracy produces more clean content per hour than one typing at one hundred with constant corrections."
      ]
    },
    {
      id:'a8', name:"Code — Functions and Logic", type:"drill", tag:"advanced",
      desc:"Real code patterns that developers type every day. Build programming fluency.",
      targetWpm:40, targetAcc:96,
      exercises:[
        "function calculateWPM(chars, time) { return Math.round((chars / 5) / time); }",
        "const users = await db.query('SELECT * FROM users WHERE active = true');",
        "class TypeCraft { constructor(config) { this.config = config || {}; } }",
        "export default function App({ title, onSubmit }) { return <div>{title}</div>; }",
        "const sorted = arr.filter(x => x > 0).sort((a, b) => a - b).slice(0, 10);",
        "try { const data = JSON.parse(input); } catch (err) { console.error(err); }",
        "SELECT u.name, COUNT(t.id) AS tests FROM users u JOIN tests t ON t.user_id = u.id;",
        "git commit -m 'feat: add keyboard shortcut support for F5 restart action'"
      ]
    },
    {
      id:'a9', name:"Academic Essay Sentences", type:"drill", tag:"advanced",
      desc:"University-level academic writing requires complex sentences with precise language.",
      targetWpm:50, targetAcc:95,
      exercises:[
        "This essay critically examines the theoretical frameworks underpinning modern pedagogy.",
        "The empirical evidence overwhelmingly supports the proposed causal relationship.",
        "Scholars have contested the prevailing interpretation of these historical events.",
        "The implications of this research extend well beyond the original disciplinary boundaries.",
        "Subsequent studies have largely corroborated these initial findings with minor caveats.",
        "This analysis necessarily simplifies a complex and multifaceted phenomenon.",
        "The contradiction between these two perspectives remains unresolved in the literature.",
        "Future research should address the methodological limitations identified in this study."
      ]
    },
    {
      id:'a10', name:"News and Journalism Style", type:"drill", tag:"advanced",
      desc:"Journalists type fast under deadline pressure. Practice crisp, factual sentences.",
      targetWpm:55, targetAcc:94,
      exercises:[
        "The president signed the landmark climate bill into law on Thursday afternoon.",
        "Scientists announced a breakthrough in battery technology that could revolutionize transport.",
        "Markets fell sharply after the central bank raised interest rates by fifty basis points.",
        "Officials confirmed three people were injured in the incident near the capital building.",
        "The committee voted seven to two in favor of the proposed constitutional amendment.",
        "Investigators are looking into alleged corruption involving senior municipal officials.",
        "The new policy takes effect in January and will affect an estimated two million workers.",
        "Eyewitnesses described a chaotic scene as emergency services arrived within minutes."
      ]
    },
    {
      id:'a11', name:"🎧 Audio — Clarity Level", type:"audio", tag:"advanced",
      desc:"Listen carefully and type every word exactly as heard. Ctrl+R to replay.",
      targetWpm:45, targetAcc:95,
      audioText:"The secret to becoming a great typist is simple: practice every single day with full concentration and purpose."
    },
    {
      id:'a12', name:"🎧 Audio — Expert Level", type:"audio", tag:"advanced",
      desc:"Advanced audio transcription with complex vocabulary. No pausing — type it live.",
      targetWpm:50, targetAcc:94,
      audioText:"Extraordinary achievement requires extraordinary discipline. Those who reach the highest levels of any skill do so through thousands of hours of intentional, focused practice over many years."
    }
  ]
};


// ====== UTILITY FUNCTIONS ======
function toast(msg, type='info', duration=3000) {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  document.getElementById('toast-container').appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, duration);
}
function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

// ====== LOADER UTILITIES ======
function showTopBarLoader(msg = 'Loading...') {
  const el = document.getElementById('top-bar-loader');
  const txt = document.getElementById('top-bar-loader-text');
  if(el) { el.classList.add('show'); if(txt) txt.textContent = msg; }
}
function hideTopBarLoader() {
  const el = document.getElementById('top-bar-loader');
  if(el) el.classList.remove('show');
}
function showPageLoader(cb, delay = 320) {
  const pl    = document.getElementById('page-loader');
  const label = document.getElementById('pl-label');
  if(!pl) { cb(); return; }
  if(label) label.textContent = 'Loading...';
  pl.classList.add('show');
  setTimeout(() => {
    cb();
    pl.classList.remove('show');
  }, delay);
}
function showTextGenLoader() {
  const loader = document.getElementById('text-gen-loader');
  if(loader) loader.classList.add('show');
}
function hideTextGenLoader() {
  const loader = document.getElementById('text-gen-loader');
  if(loader) loader.classList.remove('show');
}
function showLeaderboardSkeleton() {
  const sk = document.getElementById('leaderboard-skeleton');
  const tb = document.getElementById('leaderboard-table');
  if(sk) sk.style.display = 'block';
  if(tb) tb.style.display = 'none';
}
function hideLeaderboardSkeleton() {
  const sk = document.getElementById('leaderboard-skeleton');
  const tb = document.getElementById('leaderboard-table');
  if(sk) sk.style.display = 'none';
  if(tb) tb.style.display = '';
}

function navigate(page) {
  const pageLabels = {
    dashboard:    'Practice',
    lessons:      'Lessons',
    achievements: 'Achievements',
    competition:  'Competition',
    import:       'Import Text',
    practice:     'Practice Texts',
    settings:     'Settings'
  };

  // Animate current page out
  const currentActive = document.querySelector('.page.active');
  if(currentActive) {
    currentActive.classList.add('page-exit');
    setTimeout(() => currentActive.classList.remove('page-exit'), 220);
  }

  // Show loader with destination label
  const pl    = document.getElementById('page-loader');
  const label = document.getElementById('pl-label');
  if(pl) {
    if(label) label.textContent = pageLabels[page] || 'Loading...';
    pl.classList.add('show');
  }

  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active', 'page-exit');
    });
    const target = document.getElementById('page-' + page);
    if(target) target.classList.add('active');
    state.currentPage = page;

    document.querySelectorAll('.nav-btn').forEach(b => {
      const onclick = b.getAttribute('onclick') || '';
      const match = onclick.match(/navigate\('(\w+)'\)/);
      if(match) b.classList.toggle('active', match[1] === page);
    });
    closeSidebar();

    const titles = {
      dashboard:    ['Practice', 'Typing'],
      lessons:      ['Typing', 'Lessons'],
      achievements: ['My', 'Achievements'],
      competition:  ['Typing', 'Competition'],
      import:       ['Import', 'Text'],
      practice:     ['Sacred & Historical', 'Practice'],
      settings:     ['App', 'Settings']
    };
    const t = titles[page] || [page, ''];
    updateTopBar(t[0], t[1]);

    if(page==='achievements') renderAchievements();
    if(page==='dashboard') {
      renderLeaderboard();
      stopCompLbRefresh();
      const mSel   = document.getElementById('mode-select');
      const dSel   = document.getElementById('diff-select');
      const durSel = document.getElementById('dur-select');
      if(mSel)   mSel.value   = state.mode;
      if(dSel)   dSel.value   = state.difficulty;
      if(durSel) durSel.value = state.duration;
      regenerateTest();
    }
    if(page==='competition') renderCompetitions();
    if(page!=='competition') stopCompLbRefresh();
    if(page==='practice') renderPracticeCards();
    if(page==='lessons')  renderLessons();
    if(page==='dashboard') setTimeout(()=>document.getElementById('typing-input').focus(), 50);

    if(pl) pl.classList.remove('show');
  }, 280);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const isOpen = sidebar.classList.contains('open');
  if(isOpen) { sidebar.classList.remove('open'); overlay.classList.remove('show'); }
  else { sidebar.classList.add('open'); overlay.classList.add('show'); }
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}

// ====== AUTH ======
function openLogin() { openModal('login-modal'); }
function switchAuthTab(tab) {
  document.getElementById('login-form-wrap').style.display = tab==='login' ? '' : 'none';
  document.getElementById('register-form-wrap').style.display = tab==='register' ? '' : 'none';
  document.querySelectorAll('#auth-tab-group .toggle-pill').forEach(b => b.classList.toggle('active', b.dataset.val===tab));
}
function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  if(!u||!p) { toast('Enter username and password','error'); return; }
  showTopBarLoader('Signing in...');
  setTimeout(() => {
    const users = DB.get('users', {});
    if(users[u] && users[u].pass === btoa(p)) {
      state.user = u;
      DB.set('currentUser', u);
      closeModal('login-modal');
      renderUserArea();
      toast(`Welcome back, ${u}! 👋`, 'success');
      updateGuestBanner();
      updatePBDisplay();
    } else { toast('Invalid credentials','error'); }
    hideTopBarLoader();
  }, 400);
}
function doRegister() {
  const u = document.getElementById('reg-user').value.trim();
  const e = document.getElementById('reg-email').value.trim();
  const p = document.getElementById('reg-pass').value;
  if(!u||!p||!e) { toast('All fields required','error'); return; }
  if(u.length < 3) { toast('Username too short','error'); return; }
  const users = DB.get('users', {});
  if(users[u]) { toast('Username taken','error'); return; }
  showTopBarLoader('Creating account...');
  setTimeout(() => {
    users[u] = { pass: btoa(p), email: e, created: Date.now(), stats: defaultStats() };
    DB.set('users', users);
    state.user = u;
    DB.set('currentUser', u);
    closeModal('login-modal');
    renderUserArea();
    toast(`Welcome to TypeCraft, ${u}! 🎉`, 'success');
    updateGuestBanner();
    hideTopBarLoader();
  }, 500);
}
function doLogout() {
  state.user = null;
  DB.del('currentUser');
  renderUserArea();
  updateGuestBanner();
  toast('Signed out successfully');
}
function renderUserArea() {
  const area = document.getElementById('nav-user-area');
  if(state.user) {
    area.innerHTML = `
      <div class="user-chip">
        <div class="avatar">${state.user[0].toUpperCase()}</div>
        <div class="user-info">
          <div class="user-name">${state.user}</div>
          <div class="user-role">Typist</div>
        </div>
      </div>
      <button class="btn-logout" onclick="doLogout()">↩ Sign Out</button>`;
  } else {
    area.innerHTML = `<button class="btn-login" onclick="openLogin()">🔑 Sign In</button>`;
  }
}
function updateGuestBanner() {
  const b = document.getElementById('guest-banner-dash');
  if(b) b.style.display = state.user ? 'none' : 'flex';
}
function defaultStats() {
  return { testsCompleted:0, bestWpm:0, bestAccuracy:0, totalTime:0, streak:0, lastTypingDate:null, longestTest:0, advancedTests:0, bibleCompleted:0, hymnsCompleted:0, historyCompleted:0, audioCompleted:0, competitionsJoined:0, nightTyping:false, importUsed:0, beginnerLessonsComplete:false, wpmImproved:0, earnedAchievements:[], completedLessons:[] };
}
function getUserStats() {
  if(!state.user) return DB.get('guestStats', defaultStats());
  const users = DB.get('users', {});
  return users[state.user]?.stats || defaultStats();
}
function saveUserStats(stats) {
  if(!state.user) { DB.set('guestStats', stats); return; }
  const users = DB.get('users', {});
  if(!users[state.user]) users[state.user] = {};
  users[state.user].stats = stats;
  DB.set('users', users);
}

// ====== TYPING TEST CORE ======
function buildText() {
  const diff = state.difficulty;
  const mode = state.mode;
  const minWords = {beginner:200, intermediate:500, advanced:1000};
  let words = [];

  if(mode === 'quotes') {
    // Pick a single random quote — show it alone with its author
    const idx = Math.floor(Math.random() * QUOTES.length);
    const q = QUOTES[idx];
    currentQuoteIdx = idx;
    state.currentQuoteAuthor = q.author;
    showQuoteAuthor(q.author, idx);
    return q.text;
  }
  if(mode === 'stories') {
    let s = STORIES[Math.floor(Math.random()*STORIES.length)];
    return s;
  }

  // Random words
  const pool = WORDS[diff];
  const target = minWords[diff];
  while(words.length < target) {
    words.push(pool[Math.floor(Math.random()*pool.length)]);
  }

  // Extras
  if(state.opts.numbers) {
    const nums = ['1','2','3','4','5','6','7','8','9','10','100','2024','42'];
    for(let i=0;i<Math.floor(target*0.05);i++){
      const pos = Math.floor(Math.random()*words.length);
      words.splice(pos,0,nums[Math.floor(Math.random()*nums.length)]);
    }
  }
  if(state.opts.symbols) {
    const syms = ['@','#','$','%','&','*'];
    for(let i=0;i<Math.floor(target*0.03);i++){
      const pos = Math.floor(Math.random()*words.length);
      words.splice(pos,0,syms[Math.floor(Math.random()*syms.length)]);
    }
  }
  let text = words.join(' ');
  if(state.opts.punctuation) {
    text = text.replace(/(\w{4,})/g,(m)=>Math.random()<.1?m+',':Math.random()<.05?m+'.':m);
  }
  return text;
}

// ====== 2-ROW SCROLLING TEXT RENDERER ======
const ROW_H = 48; // px per row — 2 visible rows = 96px total

function buildRows(text) {
  // For JetBrains Mono 1.1rem (~17.6px), each char ≈ 10.6px wide (monospace = exact)
  // Use container width if available, else fall back to 700px
  const wrapEl = document.getElementById('word-display-wrap');
  const containerW = wrapEl ? wrapEl.clientWidth : 700;
  const availW = Math.max(280, containerW - 40); // 20px padding each side
  const charW = (FONT_SIZE_MAP[currentFontKey] || FONT_SIZE_MAP.md).charW;
  const charsPerRow = Math.floor(availW / charW);

  // Split text into words (preserving spaces as separate entries)
  // Build flat char array: [{char, idx}]
  const words = [];
  let i = 0;
  while (i < text.length) {
    let start = i;
    while (i < text.length && text[i] !== ' ') i++;
    if (i > start) words.push({ word: text.slice(start, i), startIdx: start });
    if (i < text.length && text[i] === ' ') { words.push({ word: ' ', startIdx: i }); i++; }
  }

  // Pack words into rows by char count
  const rows = []; // each row: [{char, globalIdx}]
  let currentRow = [];
  let rowLen = 0;

  for (const tok of words) {
    const len = tok.word.length;
    // If adding this word exceeds the row AND the row already has non-space content
    // skip leading space on new row
    if (rowLen + len > charsPerRow && currentRow.length > 0) {
      // trim trailing space from current row
      while (currentRow.length && currentRow[currentRow.length-1].char === ' ') currentRow.pop();
      rows.push(currentRow);
      currentRow = [];
      rowLen = 0;
      // skip the space token that caused the break
      if (tok.word === ' ') continue;
    }
    for (let c = 0; c < tok.word.length; c++) {
      currentRow.push({ char: tok.word[c], globalIdx: tok.startIdx + c });
    }
    rowLen += len;
  }
  // push last row
  while (currentRow.length && currentRow[currentRow.length-1].char === ' ') currentRow.pop();
  if (currentRow.length) rows.push(currentRow);

  return rows;
}

function renderText(text, pos) {
  const track = document.getElementById('word-display-track');
  const wrap  = document.getElementById('word-display-wrap');
  if (!track || !wrap) return;

  const rowH = (FONT_SIZE_MAP[currentFontKey] || FONT_SIZE_MAP.md).rowH;
  const typed = state.testChars || [];
  const rows  = buildRows(text);
  if (!rows.length) return;
  const caretStyle = document.body.getAttribute('data-caret') || 'line';
  const highlightErrors = getSettingLive('highlightErrors', true);

  // Word-range for word-highlight caret
  let wordStart = pos, wordEnd = pos;
  if (caretStyle === 'word') {
    let i = pos;
    while (i > 0 && text[i - 1] !== ' ') i--;
    wordStart = i;
    let j = pos;
    while (j < text.length && text[j] !== ' ') j++;
    wordEnd = j - 1;
  }

  // Find cursor row
  let cursorRow = 0;
  for (let r = 0; r < rows.length; r++) {
    const first = rows[r][0].globalIdx;
    const last  = rows[r][rows[r].length - 1].globalIdx;
    if (pos >= first && pos <= last + 1) { cursorRow = r; break; }
    if (pos > last) cursorRow = r + 1;
  }
  cursorRow = Math.max(0, Math.min(cursorRow, rows.length - 1));

  track.innerHTML = rows.map((rowChars, ri) => {
    let html = '';
    for (let ci = 0; ci < rowChars.length; ci++) {
      const { char, globalIdx } = rowChars[ci];
      let classes = ['word-char'];

      if (globalIdx < pos) {
        const isCorrect = typed[globalIdx] === text[globalIdx];
        if (highlightErrors) {
          classes.push(isCorrect ? 'correct' : 'wrong');
        } else {
          classes.push('correct'); // show all as correct when highlights off
        }
      } else if (globalIdx === pos) {
        classes.push('current');
        if (caretStyle === 'word') {
          classes.push('word-start');          // cursor is always the start of the pill
          if (wordStart === wordEnd) classes.push('word-end'); // single char word
        }
      } else if (caretStyle === 'word' && globalIdx > pos && globalIdx <= wordEnd) {
        classes.push('in-current-word');
        const isLastInWord = globalIdx === wordEnd;
        const isLastOnRow  = ci === rowChars.length - 1;
        if (isLastInWord || isLastOnRow) classes.push('word-end');
      }

      const ch = char === ' ' ? '&nbsp;' : char === '<' ? '&lt;' : char === '&' ? '&amp;' : char;
      html += `<span class="${classes.join(' ')}">${ch}</span>`;
    }
    let rowCls = 'word-row';
    if      (ri < cursorRow)   rowCls += ' row-past';
    else if (ri === cursorRow) rowCls += ' row-active';
    else                       rowCls += ' row-next';
    return `<div class="${rowCls}">${html}</div>`;
  }).join('');

  track.style.transform = `translateY(${-cursorRow * rowH}px)`;
}

function startTest() { regenerateTest(); }

function focusTyping() {
  document.getElementById('typing-input').focus();
}

let typingHandler = null;
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById('typing-input');
  inp.addEventListener('input', handleTypingInput);
  inp.addEventListener('keydown', handleTypingKeydown);
  inp.addEventListener('focus', () => {
    document.getElementById('word-display-wrap').classList.add('active-typing');
    document.getElementById('typing-input-wrap').classList.add('active-typing');
  });
  inp.addEventListener('blur', () => {
    if(!state.testStarted) {
      document.getElementById('word-display-wrap').classList.remove('active-typing');
      document.getElementById('typing-input-wrap').classList.remove('active-typing');
    }
  });
});

function handleTypingKeydown(e) {
  if(e.key==='Escape'){
    clearInterval(state.testTimer);
    state.testActive=false;
    document.getElementById('word-display-wrap').classList.remove('active-typing');
    document.getElementById('typing-input-wrap').classList.remove('active-typing');
    toast('Test stopped');
    return;
  }
  if(e.key==='Tab'){ e.preventDefault(); focusTyping(); return; }
}

function handleTypingInput(e) {
  if(!state.testActive) return;
  const inp = e.target;
  const val = inp.value;

  if(!state.testStarted && val.length > 0) {
    state.testStarted = true;
    state.testStartTime = Date.now();
    // autoStart: if off, timer only starts when user presses Enter (default true)
    if(getSettingLive('autoStart', true)) startTimer();
  }

  const text = state.testText;

  // committedChars holds the ACTUAL characters the user typed for all committed words
  // (not the correct text — this is what preserves errors across word boundaries)
  if(!state.committedChars) state.committedChars = [];

  // Full typed string = what was actually committed + current input in box
  const fullTyped = state.committedChars.join('') + val;
  state.testChars = fullTyped.split('');
  state.testPos   = Math.min(fullTyped.length, text.length);

  // Count errors up to current position
  state.testErrors = 0;
  for(let i = 0; i < state.testPos; i++) {
    if(state.testChars[i] !== text[i]) state.testErrors++;
  }

  try { renderText(text, state.testPos); } catch(err) {}
  updateLiveStats();

  // Sound effects (use cache, not DB hit per keystroke)
  const s = getSettingsCache();
  if(s.sound) playClickSound();
  const lastTypedChar = val[val.length - 1];
  const expectedChar  = text[state.committedChars.length + val.length - 1];
  if(s.errorSound && val.length > 0 && lastTypedChar !== expectedChar) playErrorSound();

  // Space pressed → commit what user actually typed (with any errors) and clear box
  if(val.endsWith(' ')) {
    // Push each character of the current word (including errors) into committedChars
    for(const ch of val) state.committedChars.push(ch);
    inp.value = '';
  }

  // Check completion — all committed + current chars cover the text
  if(fullTyped.length >= text.length) {
    inp.value = '';
    clearInterval(state.testTimer);
    showResults();
  }
}

function startTimer() {
  state.testTimer = setInterval(() => {
    state.testTimeLeft--;
    document.getElementById('live-timer').textContent = formatTime(state.testTimeLeft);
    updateLiveStats();
    if(state.testTimeLeft <= 0) {
      clearInterval(state.testTimer);
      showResults();
    }
  }, 1000);
}

function updateLiveStats() {
  const elapsed = state.testStartTime ? (Date.now()-state.testStartTime)/1000/60 : 0;
  const correctChars = state.testPos - state.testErrors;
  const wpm = elapsed > 0 ? Math.round((correctChars/5)/elapsed) : 0;
  const acc = state.testPos > 0 ? Math.round((1-state.testErrors/state.testPos)*100) : 100;

  // liveWpm setting controls whether WPM is shown during typing
  const showWpm = getSettingLive('liveWpm', true);
  applyWpmVisibility(showWpm);
  if(showWpm) {
    const wpmEl = document.getElementById('live-wpm');
    if(wpmEl) wpmEl.textContent = Math.max(0, wpm);
  }

  document.getElementById('live-acc').textContent = Math.max(0,acc)+'%';
  document.getElementById('live-chars').textContent = state.testPos;
  document.getElementById('live-errors').textContent = state.testErrors;

  // Progress bar
  const prog = state.testText ? Math.min(100, Math.round((state.testPos / state.testText.length)*100)) : 0;
  const fill = document.getElementById('test-progress-fill');
  if(fill) fill.style.width = prog + '%';

  // Timer urgency glow when ≤ 10 s
  const timerEl = document.getElementById('live-timer');
  if(timerEl && state.testStarted) {
    timerEl.classList.toggle('urgent', state.testTimeLeft <= 10);
  }
}

function calcWPM() {
  const elapsed = state.testStartTime ? (Date.now()-state.testStartTime)/1000/60 : 0;
  const correctChars = state.testPos - state.testErrors;
  return elapsed > 0 ? Math.max(0,Math.round((correctChars/5)/elapsed)) : 0;
}
function calcAcc() {
  return state.testPos > 0 ? Math.round((1-state.testErrors/state.testPos)*1000)/10 : 100;
}

function showResults() {
  state.testActive = false;
  document.getElementById('word-display-wrap').classList.remove('active-typing');
  document.getElementById('typing-input-wrap').classList.remove('active-typing');
  document.getElementById('typing-input').blur();

  const wpm     = calcWPM();
  const acc     = calcAcc();
  const elapsed = state.testStartTime ? Math.round((Date.now()-state.testStartTime)/1000) : 0;
  const chars   = state.testPos;
  const words   = Math.round(chars / 5);

  // Show skeleton loader in last-test card while saving
  document.getElementById('last-test-empty').style.display    = 'none';
  document.getElementById('last-test-results').style.display  = 'none';
  document.getElementById('last-test-skeleton').style.display = 'block';

  // Save stats then reveal after brief delay
  const stats    = getUserStats();
  const prevBest = stats.bestWpm || 0;
  stats.testsCompleted = (stats.testsCompleted||0) + 1;
  stats.bestWpm        = Math.max(prevBest, wpm);
  stats.bestAccuracy   = Math.max(stats.bestAccuracy||0, acc);
  stats.totalTime      = (stats.totalTime||0) + elapsed;
  stats.longestTest    = Math.max(stats.longestTest||0, state.duration);
  if(state.difficulty==='advanced') stats.advancedTests = (stats.advancedTests||0)+1;
  stats.wpmImproved    = Math.max(stats.wpmImproved||0, wpm - prevBest);

  // Mode-specific counters
  if(state.mode === 'quotes')  stats.quotesCompleted  = (stats.quotesCompleted||0) + 1;
  if(state.mode === 'stories') stats.storiesCompleted = (stats.storiesCompleted||0) + 1;

  // Accuracy streak — consecutive tests with 95%+
  if(acc >= 95) {
    stats.accuracyStreak = (stats.accuracyStreak||0) + 1;
  } else {
    stats.accuracyStreak = 0;
  }

  // Zero-error test
  if(state.testErrors === 0 && wpm > 0) stats.zeroErrorTest = true;

  const today = new Date().toDateString();
  if(stats.lastTypingDate !== today) {
    stats.streak = stats.lastTypingDate === new Date(Date.now()-86400000).toDateString()
      ? (stats.streak||0)+1 : 1;
  }
  stats.lastTypingDate = today;
  const hour = new Date().getHours();
  if(hour >= 22 || hour < 4) stats.nightTyping = true;
  if(hour < 6) stats.earlyBird = true;
  stats.lastWpm  = wpm;
  stats.lastAcc  = acc;
  stats.lastElapsed = elapsed;
  stats.lastChars   = chars;
  stats.lastErrors  = state.testErrors;
  stats.lastWords   = words;
  saveUserStats(stats);
  checkAchievements(stats);
  if(state.user) addToLeaderboard({user:state.user,wpm,acc,date:new Date().toISOString().split('T')[0],mode:state.mode,diff:state.difficulty});

  // Reveal results after skeleton has shown briefly
  setTimeout(() => {
    document.getElementById('last-test-skeleton').style.display = 'none';
    // Write results into the Last Test card (no modal)
    const isNewPB = wpm > prevBest && wpm > 0;
    document.getElementById('new-pb-badge').style.display = isNewPB ? 'inline-flex' : 'none';
    document.getElementById('last-test-results').style.display  = 'block';
    document.getElementById('last-wpm').textContent    = wpm;
    document.getElementById('last-acc').textContent    = acc + '%';
    document.getElementById('last-errors').textContent = state.testErrors;
    document.getElementById('last-chars').textContent  = chars;
    document.getElementById('last-time').textContent   = formatTime(elapsed);
    document.getElementById('last-words').textContent  = words;

    updatePBDisplay(stats);
    renderLeaderboard();

    // Subtle flash on the pb-card to draw attention
    const card = document.getElementById('pb-card');
    card.style.transition = 'box-shadow .1s';
    card.style.boxShadow  = '0 0 0 2px var(--accent)';
    setTimeout(()=>{ card.style.boxShadow=''; }, 800);
  }, 600);

  toast(`Done! ${wpm} WPM · ${acc}% accuracy`, 'success', 3500);
}

function updatePBDisplay(stats) {
  const s   = stats || getUserStats();
  const key = `${state.difficulty}_${state.duration}`;
  const pbs = DB.get('pbs', {});
  if(!pbs[key]) pbs[key] = { wpm:0, acc:0 };

  const prevWpm = pbs[key].wpm;
  const prevAcc = pbs[key].acc;

  if((s.lastWpm||0) > pbs[key].wpm) pbs[key].wpm = s.lastWpm;
  if((s.lastAcc||0) > pbs[key].acc) pbs[key].acc = s.lastAcc;
  DB.set('pbs', pbs);

  const wpmEl  = document.getElementById('pb-wpm');
  const accEl  = document.getElementById('pb-acc');
  const ctxEl  = document.getElementById('pb-context');

  // Animate only if value actually changed
  if(wpmEl) {
    const newWpm = pbs[key].wpm || '—';
    if(String(newWpm) !== wpmEl.textContent) {
      wpmEl.classList.remove('pb-updated');
      void wpmEl.offsetWidth; // force reflow
      wpmEl.textContent = newWpm;
      wpmEl.classList.add('pb-updated');
      setTimeout(() => wpmEl.classList.remove('pb-updated'), 500);
    } else {
      wpmEl.textContent = newWpm;
    }
  }
  if(accEl) {
    const newAcc = pbs[key].acc ? pbs[key].acc + '%' : '—';
    if(newAcc !== accEl.textContent) {
      accEl.classList.remove('pb-updated');
      void accEl.offsetWidth;
      accEl.textContent = newAcc;
      accEl.classList.add('pb-updated');
      setTimeout(() => accEl.classList.remove('pb-updated'), 500);
    } else {
      accEl.textContent = newAcc;
    }
  }
  if(ctxEl) ctxEl.textContent = `(${state.difficulty} · ${formatTime(state.duration)})`;
}

// ====== LEADERBOARD ======
function addToLeaderboard(entry) {
  let lb = DB.get('leaderboard', []);
  lb.push({...entry,ts:Date.now()});
  lb.sort((a,b)=>b.wpm-a.wpm);
  DB.set('leaderboard', lb.slice(0,100));
}

function renderLeaderboard() {
  showLeaderboardSkeleton();
  setTimeout(() => {
    let lb = DB.get('leaderboard', []);
    const combined = [...SEED_LEADERBOARD];
    lb.forEach(e => {
      if(!combined.find(c=>c.user===e.user&&c.wpm===e.wpm))
        combined.push({rank:0,user:e.user,wpm:e.wpm,acc:e.acc,date:e.date,mode:e.mode,diff:e.diff});
    });
    combined.sort((a,b)=>b.wpm-a.wpm);
    const tbody = document.getElementById('leaderboard-body');
    if(!tbody) { hideLeaderboardSkeleton(); return; }
    tbody.innerHTML = combined.slice(0,7).map((e,i)=>{
      const rank = i+1;
      let badge = `<span class="rank-badge${rank===1?' gold':rank===2?' silver':rank===3?' bronze':''}">${rank}</span>`;
      return `<tr>
        <td>${badge}</td>
        <td><strong>${e.user}</strong>${e.user===state.user?'<span style="margin-left:6px;font-size:.65rem;color:var(--accent)">(you)</span>':''}</td>
        <td><span class="font-mono" style="color:var(--accent);font-weight:700">${e.wpm}</span></td>
        <td>${e.acc}%</td>
        <td class="text-muted text-xs">${e.date}</td>
        <td><span class="tag" style="background:var(--bg4);color:var(--text3)">${e.mode}</span></td>
        <td><span class="tag" style="background:var(--bg4);color:var(--text3)">${e.diff}</span></td>
      </tr>`;
    }).join('');
    hideLeaderboardSkeleton();
  }, 300);
}

// ====== DROPDOWN CONFIG HANDLERS ======
function setDiff(val) {
  state.difficulty = val;
  updatePBDisplay();
  regenerateTest();
}
function setMode(val) {
  state.mode = val;
  regenerateTest();
}
function setDuration(val) {
  state.duration = parseInt(val);
  state.testTimeLeft = state.duration;
  document.getElementById('live-timer').textContent = formatTime(state.duration);
  updatePBDisplay();
  regenerateTest();
}
function onOptChange() {
  state.opts.punctuation = document.getElementById('opt-punctuation').checked;
  state.opts.numbers     = document.getElementById('opt-numbers').checked;
  state.opts.symbols     = document.getElementById('opt-symbols').checked;
  regenerateTest();
}

// Track current quote index for prev/next navigation
let currentQuoteIdx = -1;

function showQuoteAuthor(author, idx) {
  const bar    = document.getElementById('quote-author-bar');
  const nameEl = document.getElementById('quote-author-name');
  const badge  = document.getElementById('quote-num-badge');
  const dotsEl = document.getElementById('quote-dots');
  if (!bar) return;

  if (author) {
    nameEl.textContent = author;
    // idx may be passed directly or looked up
    const quoteIdx = (idx !== undefined) ? idx : QUOTES.findIndex(q => q.text === state.testText);
    badge.textContent = `${quoteIdx + 1} / ${QUOTES.length}`;
    bar.style.display = 'block';

    // Build progress dots (show 7 around current position)
    if (dotsEl) {
      const total = QUOTES.length;
      const ci = quoteIdx;
      let dotHtml = '';
      const radius = 3;
      const start = Math.max(0, ci - radius);
      const end   = Math.min(total - 1, ci + radius);
      if (start > 0) dotHtml += `<span style="font-size:.55rem;color:var(--text3)">…</span>`;
      for (let i = start; i <= end; i++) {
        const active = i === ci;
        dotHtml += `<div onclick="jumpToQuote(${i})" style="
          width:${active?'20px':'6px'};height:6px;border-radius:3px;
          background:${active?'var(--accent)':'var(--text3)'};
          transition:all .2s;cursor:pointer;flex-shrink:0"
          title="Quote ${i+1}: ${QUOTES[i].author}"></div>`;
      }
      if (end < total - 1) dotHtml += `<span style="font-size:.55rem;color:var(--text3)">…</span>`;
      dotsEl.innerHTML = dotHtml;
      dotsEl.style.display = 'flex';
      dotsEl.style.gap = '4px';
      dotsEl.style.alignItems = 'center';
    }
  } else {
    bar.style.display = 'none';
    if (dotsEl) dotsEl.innerHTML = '';
  }
}

function navigateQuote(direction) {
  // Move to next or previous quote without full regeneration
  const newIdx = ((currentQuoteIdx + direction) + QUOTES.length) % QUOTES.length;
  loadQuoteByIndex(newIdx);
}

function jumpToQuote(idx) {
  loadQuoteByIndex(idx);
}

function loadQuoteByIndex(idx) {
  const q = QUOTES[idx];
  if (!q) return;
  currentQuoteIdx = idx;

  // Stop any running test cleanly
  clearInterval(state.testTimer);
  state.testActive  = false;
  state.testStarted = false;

  state.testText          = q.text;
  state.testChars         = [];
  state.testPos           = 0;
  state.testErrors        = 0;
  state.testOffset        = 0;
  state.committedChars    = [];
  state.testActive        = true;
  state.testTimeLeft      = state.duration;
  state.testTotalTime     = state.duration;
  state.testStartTime     = null;
  state.currentQuoteAuthor = q.author;

  document.getElementById('live-timer').textContent  = formatTime(state.duration);
  document.getElementById('live-wpm').textContent    = '0';
  document.getElementById('live-acc').textContent    = '100%';
  document.getElementById('live-chars').textContent  = '0';
  document.getElementById('live-errors').textContent = '0';
  applyWpmVisibility(getSettingLive('liveWpm', true));
  document.getElementById('typing-input').value      = '';
  document.getElementById('restart-hint').style.display = 'block';
  document.getElementById('word-display-wrap').classList.remove('active-typing');
  document.getElementById('typing-input-wrap').classList.remove('active-typing');

  showQuoteAuthor(q.author, idx);
  try { renderText(q.text, 0); } catch(e) {}
}

function hideQuoteAuthor() {
  const bar = document.getElementById('quote-author-bar');
  if (bar) bar.style.display = 'none';
}

function regenerateTest() {
  clearInterval(state.testTimer);
  hideQuoteAuthor();

  // Show spinner in text box with contextual message
  const lbl = document.getElementById('tgl-label');
  if(lbl) {
    const msgs = ['Loading text...', 'Shuffling words...', 'Picking a quote...', 'Building exercise...'];
    lbl.textContent = state.mode === 'quotes' ? 'Picking a quote...'
                    : state.mode === 'stories' ? 'Loading story...'
                    : msgs[Math.floor(Math.random() * 2)]; // random for words
  }
  showTextGenLoader();

  // Fade out existing track immediately
  const track = document.getElementById('word-display-track');
  if(track) { track.style.transition = 'opacity .15s'; track.style.opacity = '0'; }

  setTimeout(() => {
    state.currentQuoteAuthor = null;
    const text = buildText();
    state.testText       = text;
    state.testChars      = [];
    state.testPos        = 0;
    state.testErrors     = 0;
    state.testOffset     = 0;
    state.committedChars = [];
    state.testActive     = true;
    state.testStarted    = false;
    state.testTimeLeft   = state.duration;
    state.testTotalTime  = state.duration;
    state.testStartTime  = null;

    document.getElementById('live-timer').textContent  = formatTime(state.duration);
    document.getElementById('live-wpm').textContent    = '0';
    document.getElementById('live-acc').textContent    = '100%';
    document.getElementById('live-chars').textContent  = '0';
    document.getElementById('live-errors').textContent = '0';
    applyWpmVisibility(getSettingLive('liveWpm', true));
    document.getElementById('restart-hint').style.display = 'block';
    document.getElementById('typing-input').value = '';

    if(state.mode === 'quotes' && state.currentQuoteAuthor) {
      const idx   = QUOTES.findIndex(q => q.text === text);
      const badge = document.getElementById('quote-num-badge');
      if(badge) badge.textContent = `${idx + 1} / ${QUOTES.length}`;
    }

    try { renderText(text, 0); } catch(e) { console.warn('renderText error:', e); }

    hideTextGenLoader();
    // Fade new text in smoothly
    if(track) { track.style.opacity = '0'; requestAnimationFrame(() => { track.style.transition = 'opacity .3s ease'; track.style.opacity = '1'; }); }
    document.getElementById('word-display-wrap').classList.remove('active-typing');
    document.getElementById('typing-input-wrap').classList.remove('active-typing');
  }, 220);
}

function startTest() { regenerateTest(); }

function focusTyping() {
  document.getElementById('typing-input').focus();
}

// ====== TOGGLE GROUPS (legacy — kept for non-dashboard uses) ======
function initToggleGroups() {
  // Dropdowns handle dashboard; no toggle-pill groups on dashboard anymore
}

// ====== SHARED COUNTDOWN + ELAPSED TIMER ENGINE ======

let _elapsedTimers = {}; // keyed by surface id

function formatElapsed(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2,'0')}`;
}

function startElapsedTimer(surfaceId, elId, chipId) {
  stopElapsedTimer(surfaceId);
  const start = Date.now();
  const chip = document.getElementById(chipId);
  if(chip) chip.className = 'typing-timer-chip running';
  _elapsedTimers[surfaceId] = setInterval(() => {
    const el = document.getElementById(elId);
    if(el) el.textContent = formatElapsed(Date.now() - start);
  }, 500);
  return start;
}

function stopElapsedTimer(surfaceId) {
  clearInterval(_elapsedTimers[surfaceId]);
  delete _elapsedTimers[surfaceId];
}

function resetElapsedTimer(elId, chipId) {
  const el = document.getElementById(elId);
  const chip = document.getElementById(chipId);
  if(el) el.textContent = '0:00';
  if(chip) chip.className = 'typing-timer-chip';
}

/**
 * showTypingCountdown(count, label, onComplete)
 * Shows the global fullscreen countdown overlay, then calls onComplete.
 * count — number to count down from (default 3)
 */
function showTypingCountdown(onComplete, count = 3) {
  const overlay = document.getElementById('typing-countdown-overlay');
  const numEl   = document.getElementById('tco-num');
  const lblEl   = document.getElementById('tco-label');
  if(!overlay) { onComplete(); return; }

  overlay.classList.add('show');
  numEl.className = 'tco-num';
  numEl.textContent = count;
  lblEl.textContent = 'Get ready...';

  let current = count;

  const tick = setInterval(() => {
    current--;
    if(current <= 0) {
      clearInterval(tick);
      numEl.textContent = 'GO!';
      numEl.className = 'tco-num go';
      lblEl.textContent = 'Type now!';
      setTimeout(() => {
        overlay.classList.remove('show');
        numEl.className = 'tco-num';
        onComplete();
      }, 600);
    } else {
      numEl.textContent = current;
      // Restart pop animation
      numEl.style.animation = 'none';
      requestAnimationFrame(() => { numEl.style.animation = ''; });
    }
  }, 1000);
}

// ====== F5 HANDLING — all typing pages ======
document.addEventListener('keydown', e => {
  if(e.key==='F5') {
    const now = Date.now();
    const timeSinceLast = now - state.lastF5;

    // Double-tap F5 within 1000ms → let browser reload naturally
    if(timeSinceLast < 1000 && timeSinceLast > 0) {
      state.lastF5 = 0; 
      return;
    }

    // Single tap — prevent reload and refresh text/exercise only
    e.preventDefault();
    state.lastF5 = now;

    const page = state.currentPage;

    // Race room overlay takes priority
    const raceRoom = document.getElementById('race-room');
    if(raceRoom && raceRoom.classList.contains('show')) {
      if(raceState.active || raceState.finished) {
        startRaceCountdown();
        toast('New race started ↺');
      }
      return;
    }

    if(page === 'dashboard') {
      regenerateTest();
      document.getElementById('typing-input').focus();
      toast('New text ↺; Double-tap F5 to reload page', 'info');
      return;
    }

    if(page === 'import') {
      if(state.importActive || state.importText) {
        restartImport();
      } else {
        toast('Load a text first, then press F5 to restart','warn');
      }
      return;
    }

    if(page === 'practice') {
      if(state.practiceActive) {
        restartPractice();
        toast('Practice restarted ↺');
      }
      return;
    }

    if(page === 'lessons') {
      if(lmState.active) {
        restartLessonExercise();
        toast('Exercise restarted ↺');
      }
      return;
    }
  }

  if(e.key==='Tab' && state.currentPage==='dashboard') {
    e.preventDefault();
    focusTyping();
  }

  if(e.key==='Escape') {
    const page = state.currentPage;
    if(page === 'import' && state.importActive) {
      state.importActive = false;
      showImportIdle();
      toast('Import stopped');
    }
    if(page === 'practice' && state.practiceActive) {
      state.practiceActive = false;
      stopElapsedTimer('practice');
      toast('Practice stopped');
    }
  }

  // Ctrl+R for audio replay in lesson modal
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='r' && lmState.lesson?.type==='audio') {
    e.preventDefault();
    playLessonAudio();
  }
});
// ====== FORMAT TIME ======
function formatTime(seconds) {
  if(seconds < 60) return seconds + 's';
  const m = Math.floor(seconds/60);
  const s = seconds%60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

// ====== LESSONS — CATEGORY CARD SYSTEM ======
const LESSON_CATEGORIES = [
  {
    id: 'beginner', label: 'Beginner', icon: '🌱',
    desc: 'Start from scratch — home row keys, basic words, number row',
    color: 'cat-beginner', locked: false,
    lessons: LESSONS.beginner
  },
  {
    id: 'intermediate', label: 'Intermediate', icon: '🌿',
    desc: 'Build speed and accuracy — punctuation, capitals, code syntax',
    color: 'cat-intermediate', locked: true,
    lessons: LESSONS.intermediate
  },
  {
    id: 'advanced', label: 'Advanced', icon: '🌳',
    desc: 'Master complex patterns — advanced paragraphs & audio transcription',
    color: 'cat-advanced', locked: true,
    lessons: LESSONS.advanced
  },
  {
    id: 'games', label: 'Games', icon: '🎮',
    desc: 'Fun typing games — falling words, letter hunt, word race & more',
    color: 'cat-games', locked: true,
    lessons: [...LESSONS.beginner, ...LESSONS.intermediate, ...LESSONS.advanced].filter(l => l.type === 'game')
  },
  {
    id: 'challenges', label: 'Challenges', icon: '⚡',
    desc: 'Speed and accuracy challenges for advanced typists',
    color: 'cat-challenges', locked: true,
    lessons: LESSONS.advanced.filter(l => l.type === 'drill' || l.type === 'audio')
  }
];

// Active lesson modal state
let lmState = {
  cat: null,        // current category
  lesson: null,     // current lesson
  exIdx: 0,         // current exercise index
  text: '',
  typedChars: [],
  committed: [],
  pos: 0,
  errors: 0,
  startTime: null,
  active: false,
  totalWpm: [],     // wpm per exercise for avg tracking
};

function renderLessons() {
  const stats   = getUserStats();
  const done    = stats.completedLessons || [];
  const allLess = [...LESSONS.beginner, ...LESSONS.intermediate, ...LESSONS.advanced];
  const totalAll = allLess.length;
  const completedCount = done.filter(id => allLess.find(l => l.id === id)).length;
  const pct = totalAll ? Math.round(completedCount / totalAll * 100) : 0;
  const avgWpm = stats.lessonAvgWpm || 0;

  // Stats bar
  const lcc = document.getElementById('lessons-completed-count');
  const lpp = document.getElementById('lessons-progress-pct');
  const law = document.getElementById('lessons-avg-wpm');
  if(lcc) lcc.textContent = completedCount;
  if(lpp) lpp.textContent = pct + '%';
  if(law) law.textContent = avgWpm;

  // Unlock logic
  const beginnerDone = LESSONS.beginner.every(l => done.includes(l.id));
  const intermediateDone = LESSONS.intermediate.every(l => done.includes(l.id));

  const grid = document.getElementById('lesson-cats-grid');
  if(!grid) return;

  grid.innerHTML = LESSON_CATEGORIES.map(cat => {
    const catLessons = cat.lessons;
    const catDone    = catLessons.filter(l => done.includes(l.id)).length;
    const catPct     = catLessons.length ? Math.round(catDone / catLessons.length * 100) : 0;

    let isLocked = cat.locked;
    if(cat.id === 'intermediate') isLocked = !beginnerDone;
    if(cat.id === 'advanced')     isLocked = !intermediateDone;
    if(cat.id === 'games')        isLocked = !beginnerDone;
    if(cat.id === 'challenges')   isLocked = !intermediateDone;

    const lockIcon = isLocked ? '<span style="font-size:1rem;margin-left:6px">🔒</span>' : '';

    return `<div class="lesson-cat-card ${cat.color}${isLocked?' cat-locked':''}"
        onclick="${isLocked ? "toast('Complete previous levels to unlock this! 🔒','warn')" : `openLessonCategory('${cat.id}')`}">
      <span class="lesson-cat-icon">${cat.icon}</span>
      <div class="lesson-cat-name">${cat.label}${lockIcon}</div>
      <div class="lesson-cat-desc">${cat.desc}</div>
      <div class="lesson-cat-meta">
        <span>${catDone}/${catLessons.length} lessons</span>
        <span>${catPct}%</span>
      </div>
      <div class="lesson-cat-progress">
        <div class="lesson-cat-progress-fill" style="width:${catPct}%"></div>
      </div>
    </div>`;
  }).join('');
}

function openLessonCategory(catId) {
  const cat = LESSON_CATEGORIES.find(c => c.id === catId);
  if(!cat) return;
  lmState.cat = cat;

  // Show modal on list screen (NOT jumping straight to exercise)
  document.getElementById('lesson-modal').classList.add('show');
  document.body.style.overflow = 'hidden';
  document.getElementById('lm-header-stats').style.display = 'none';
  document.getElementById('lm-back-btn').textContent = '← Exit';
  document.getElementById('lm-back-btn').onclick = closeLessonModal;

  showLessonList(cat);
}

function showLessonList(cat) {
  // Switch screens
  document.getElementById('lm-list-screen').classList.add('show');
  document.getElementById('lm-exercise-screen').classList.remove('show');
  document.getElementById('lm-header-stats').style.display = 'none';
  document.getElementById('lesson-modal-title').textContent = cat.label + ' Lessons';

  // Header
  document.getElementById('lm-list-title').textContent = cat.label + ' Lessons';
  document.getElementById('lm-list-desc').textContent = cat.desc;

  const stats    = getUserStats();
  const done     = stats.completedLessons || [];
  const lessons  = cat.lessons.filter(l => l.type !== 'game');
  const gameLessons = cat.lessons.filter(l => l.type === 'game');

  const list = document.getElementById('lm-lesson-list');
  list.innerHTML = lessons.map((lesson, i) => {
    const isDone = done.includes(lesson.id);
    const isAudio = lesson.type === 'audio';
    const exCount = lesson.exercises ? lesson.exercises.length : 1;
    return `<div class="lesson-list-item${isDone ? ' lli-done' : ''}"
        onclick="openLessonFromList('${lesson.id}')">
      <div class="lli-num">${isDone ? '✓' : (i + 1)}</div>
      <div class="lli-info">
        <div class="lli-name">${lesson.name}</div>
        <div class="lli-desc">${lesson.desc}</div>
      </div>
      <div class="lli-meta">
        <span class="lli-wpm-target">${lesson.targetWpm}+ WPM</span>
        <span class="lli-badge">${isAudio ? '🎧 Audio' : exCount + ' exercises'}</span>
        ${isDone ? '<span style="color:var(--success);font-size:1rem">✅</span>' : ''}
      </div>
    </div>`;
  }).join('');

  // Append game lessons at bottom if any
  if(gameLessons.length) {
    list.innerHTML += `<div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">
      <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:1.2px;color:var(--text3);margin-bottom:10px">🎮 Mini Games</div>
      ${gameLessons.map(g => `
        <div class="lesson-list-item" onclick="openGameLesson('${g.id}')">
          <div class="lli-num">🎮</div>
          <div class="lli-info">
            <div class="lli-name">${g.name}</div>
            <div class="lli-desc">${g.desc}</div>
          </div>
          <div class="lli-meta">
            <span class="lli-badge">Game</span>
          </div>
        </div>`).join('')}
    </div>`;
  }

  // Scroll to top
  document.getElementById('lesson-modal').scrollTop = 0;
}

function openLessonFromList(lessonId) {
  const cat = lmState.cat;
  const lesson = cat.lessons.find(l => l.id === lessonId);
  if(!lesson) return;
  openLessonInModal(cat, lesson);
}

function openGameLesson(lessonId) {
  const cat = lmState.cat;
  const lesson = cat.lessons.find(l => l.id === lessonId);
  if(!lesson) return;
  openLessonInModal(cat, lesson);
}

function lessonModalBack() {
  // If we're in exercise screen, go back to lesson list
  const exScreen = document.getElementById('lm-exercise-screen');
  if(exScreen.classList.contains('show') && lmState.cat) {
    lmState.active = false;
    document.getElementById('lm-back-btn').textContent = '← Exit';
    document.getElementById('lm-back-btn').onclick = closeLessonModal;
    showLessonList(lmState.cat);
  } else {
    closeLessonModal();
  }
}

function openLessonInModal(cat, lesson) {
  lmState.lesson  = lesson;
  lmState.exIdx   = 0;
  lmState.typedChars = [];
  lmState.committed  = [];
  lmState.pos     = 0;
  lmState.errors  = 0;
  lmState.startTime = null;
  lmState.active  = false;
  lmState.totalWpm = lmState.totalWpm || [];

  // Switch to exercise screen
  document.getElementById('lm-list-screen').classList.remove('show');
  document.getElementById('lm-exercise-screen').classList.add('show');
  document.getElementById('lm-header-stats').style.display = 'flex';
  document.getElementById('lm-back-btn').textContent = '← Lessons';
  document.getElementById('lm-back-btn').onclick = lessonModalBack;

  // Header
  document.getElementById('lesson-modal-title').textContent = lesson.name;
  document.getElementById('lm-cat-label').textContent    = cat.label;
  document.getElementById('lm-lesson-label').textContent  = lesson.name;

  // Build exercise pills
  const exercises = lesson.type === 'audio'
    ? [lesson.audioText]
    : (lesson.exercises || []);
  const stats  = getUserStats();
  const done   = stats.completedLessons || [];
  const pillsEl = document.getElementById('lm-ex-pills');
  pillsEl.innerHTML = exercises.map((ex, i) =>
    `<button class="lesson-ex-pill${i===0?' active':''}" id="ex-pill-${i}" onclick="jumpToExercise(${i})">Ex ${i+1}</button>`
  ).join('');

  // Progress & target
  document.getElementById('lm-progress-pct').textContent = `0/${exercises.length}`;
  document.getElementById('lm-target-wpm').textContent = lesson.targetWpm ? lesson.targetWpm + '+' : '—';

  // Audio panel
  const audioPanel = document.getElementById('lm-audio-panel');
  if(lesson.type === 'audio') {
    audioPanel.style.display = 'flex';
    state.audioText = lesson.audioText || '';
    document.getElementById('lm-exercise-text').innerHTML =
      '<span style="color:var(--text3);font-style:italic">Press ▶ Play to hear the text, then type what you hear...</span>';
    document.getElementById('lesson-exercise-input').disabled = true;
    document.getElementById('lm-audio-play-btn').textContent = '▶ Play';
  } else {
    audioPanel.style.display = 'none';
    document.getElementById('lesson-exercise-input').disabled = false;
    loadModalExercise(0);
  }

  // Handle games
  if(lesson.type === 'game') {
    document.getElementById('lm-exercise-zone').style.display = 'none';
    document.getElementById('lm-input-wrap').style.display = 'none';
    const zone = document.getElementById('lm-exercise-text');
    zone.innerHTML = '';
    if(lesson.game === 'falling') startFallingGame(zone);
    else if(lesson.game === 'hunt') startHuntGame(zone);
    else if(lesson.game === 'race') startRaceGame(zone);
    else if(lesson.game === 'rapid') startRapidGame(zone);
    else zone.innerHTML = '<p style="color:var(--text2)">Game coming soon!</p>';
  } else {
    document.getElementById('lm-exercise-zone').style.display = '';
    document.getElementById('lm-input-wrap').style.display = '';
  }

  // Reset complete panel + next btn
  document.getElementById('lm-ex-complete').classList.remove('show');
  document.getElementById('lm-next-btn').textContent = 'Next Exercise →';
  document.getElementById('lm-next-btn').disabled = false;

  // Scroll to top
  document.getElementById('lesson-modal').scrollTop = 0;
  setTimeout(() => document.getElementById('lesson-exercise-input').focus(), 100);
}

function loadModalExercise(idx) {
  const lesson    = lmState.lesson;
  const exercises = lesson.type === 'audio'
    ? [lesson.audioText]
    : (lesson.exercises || []);
  if(!exercises.length) return;

  lmState.exIdx     = idx;
  lmState.text      = exercises[idx % exercises.length];
  lmState.typedChars = [];
  lmState.committed  = [];
  lmState.pos       = 0;
  lmState.errors    = 0;
  lmState.startTime = null;
  lmState.active    = false; // activated after countdown

  document.getElementById('lm-ex-label').textContent = `Exercise ${idx + 1} of ${exercises.length}`;
  document.getElementById('lm-progress-pct').textContent = `${idx}/${exercises.length}`;
  document.getElementById('lm-live-wpm').textContent  = '0';
  document.getElementById('lm-live-acc').textContent  = '100%';
  document.getElementById('lm-target-wpm').textContent = lesson.targetWpm ? lesson.targetWpm + '+' : '—';
  document.getElementById('lm-ex-complete').classList.remove('show');

  resetElapsedTimer('lesson-elapsed', 'lesson-timer-chip');
  stopElapsedTimer('lesson');

  // Update pills
  document.querySelectorAll('.lesson-ex-pill').forEach((p, i) => {
    p.classList.toggle('active', i === idx);
  });

  renderModalText(lmState.text, 0);
  const inp = document.getElementById('lesson-exercise-input');
  inp.value = '';
  inp.disabled = true;
  document.getElementById('lm-exercise-zone').classList.remove('active');
  document.getElementById('lm-input-wrap').classList.remove('active');

  showTypingCountdown(() => {
    lmState.active = true;
    inp.disabled = false;
    inp.focus();
  });
}

function renderModalText(text, pos) {
  const el  = document.getElementById('lm-exercise-text');
  const typed = lmState.typedChars;
  let html = '';
  for(let i = 0; i < text.length; i++) {
    let cls = 'word-char';
    if(i < pos) cls += typed[i] === text[i] ? ' correct' : ' wrong';
    else if(i === pos) cls += ' current';
    // Regular space so words break naturally across lines
    const ch = text[i] === ' ' ? ' ' : text[i].replace(/</g,'&lt;');
    html += `<span class="${cls}">${ch}</span>`;
  }
  el.innerHTML = html;
}

function jumpToExercise(idx) {
  loadModalExercise(idx);
}

function restartLessonExercise() {
  stopElapsedTimer('lesson');
  loadModalExercise(lmState.exIdx);
}

function nextExercise() {
  const lesson    = lmState.lesson;
  const exercises = lesson.type === 'audio'
    ? [lesson.audioText]
    : (lesson.exercises || []);
  const next = lmState.exIdx + 1;
  if(next >= exercises.length) {
    // All done — mark lesson complete
    markLessonDone(lesson.id);
    document.getElementById('lm-next-btn').textContent = '✓ Lesson Complete!';
    document.getElementById('lm-next-btn').disabled = true;
    setTimeout(() => {
      document.getElementById('lm-next-btn').textContent = 'Next Exercise →';
      document.getElementById('lm-next-btn').disabled = false;
      // Return to lesson list so user can pick the next one
      if(lmState.cat) showLessonList(lmState.cat);
    }, 1800);
    return;
  }
  loadModalExercise(next);
}

function markLessonDone(id) {
  const stats = getUserStats();
  if(!stats.completedLessons) stats.completedLessons = [];
  if(!stats.completedLessons.includes(id)) stats.completedLessons.push(id);
  const beginnerDone = LESSONS.beginner.every(l => stats.completedLessons.includes(l.id));
  stats.beginnerLessonsComplete = beginnerDone;
  if(lmState.lesson?.type === 'audio') stats.audioCompleted = (stats.audioCompleted||0)+1;
  // Track avg wpm
  const wpms = lmState.totalWpm;
  if(wpms.length) {
    const avg = Math.round(wpms.reduce((a,b)=>a+b,0)/wpms.length);
    stats.lessonAvgWpm = Math.max(stats.lessonAvgWpm||0, avg);
  }
  saveUserStats(stats);
  checkAchievements(stats);
  toast(`🎓 Lesson complete: ${lmState.lesson?.name}!`, 'success', 3000);
}

function closeLessonModal() {
  lmState.active = false;
  document.getElementById('lesson-modal').classList.remove('show');
  document.body.style.overflow = '';
  // Reset screens for next open
  document.getElementById('lm-list-screen').classList.add('show');
  document.getElementById('lm-exercise-screen').classList.remove('show');
  document.getElementById('lm-header-stats').style.display = 'none';
  renderLessons();
}

// Lesson modal input handler
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById('lesson-exercise-input');
  if(!inp) return;
  inp.addEventListener('focus', () => {
    document.getElementById('lm-exercise-zone').classList.add('active');
    document.getElementById('lm-input-wrap').classList.add('active');
  });
  inp.addEventListener('blur', () => {
    document.getElementById('lm-exercise-zone').classList.remove('active');
    document.getElementById('lm-input-wrap').classList.remove('active');
  });
  inp.addEventListener('keydown', e => {
    if(e.key === 'Escape') closeLessonModal();
  });
  inp.addEventListener('input', e => {
    if(!lmState.active) return;
    const val  = e.target.value;
    const text = lmState.text;
    if(!lmState.startTime && val.length > 0) {
      lmState.startTime = Date.now();
      startElapsedTimer('lesson', 'lesson-elapsed', 'lesson-timer-chip');
    }

    // Word-by-word committed buffer
    const fullTyped = lmState.committed.join('') + val;
    lmState.typedChars = fullTyped.split('');
    lmState.pos    = Math.min(fullTyped.length, text.length);
    lmState.errors = lmState.typedChars.filter((c,i)=>i<text.length&&c!==text[i]).length;

    renderModalText(text, lmState.pos);

    const elapsed = lmState.startTime ? (Date.now()-lmState.startTime)/1000/60 : 0;
    const wpm = elapsed > 0 ? Math.max(0, Math.round(((lmState.pos-lmState.errors)/5)/elapsed)) : 0;
    const acc = lmState.pos > 0 ? Math.round((1-lmState.errors/lmState.pos)*100) : 100;

    document.getElementById('lm-live-wpm').textContent = wpm;
    document.getElementById('lm-live-acc').textContent = acc + '%';
    document.getElementById('lm-wpm').textContent = wpm;
    document.getElementById('lm-acc').textContent  = acc + '%';

    // Space → commit
    if(val.endsWith(' ')) {
      for(const ch of val) lmState.committed.push(ch);
      e.target.value = '';
    }

    // Completed
    if(fullTyped.length >= text.length) {
      e.target.value = '';
      lmState.active = false;
      lmState.totalWpm.push(wpm);
      stopElapsedTimer('lesson');
      const chip = document.getElementById('lesson-timer-chip');
      if(chip) chip.className = 'typing-timer-chip';

      // Mark pill done
      const pill = document.getElementById(`ex-pill-${lmState.exIdx}`);
      if(pill) { pill.classList.remove('active'); pill.classList.add('done'); }

      // Update progress
      const exercises = lmState.lesson.exercises || [];
      document.getElementById('lm-progress-pct').textContent = `${lmState.exIdx+1}/${exercises.length}`;

      // Show complete panel
      const comp = document.getElementById('lm-ex-complete');
      comp.classList.add('show');
      document.getElementById('lm-ex-score').textContent = wpm + ' WPM';
      document.getElementById('lm-ex-acc-result').textContent = acc + '% accuracy · ' + lmState.errors + ' errors';

      // Auto-advance after 1.5s
      setTimeout(() => { comp.classList.remove('show'); nextExercise(); }, 1800);
    }
  });
});

// ====== AUDIO (lesson modal) ======
function playLessonAudio() {
  if(!state.audioText) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(state.audioText);
  utt.rate = 0.85;
  const waves = document.querySelectorAll('#lm-audio-wave .audio-bar');
  waves.forEach(w => w.style.animationPlayState = 'running');
  const btn = document.getElementById('lm-audio-play-btn');
  if(btn) btn.textContent = '🔊 Playing...';
  utt.onend = () => {
    waves.forEach(w => w.style.animationPlayState = 'paused');
    if(btn) btn.textContent = '▶ Replay';
    // Set text and enable input
    lmState.text      = state.audioText;
    lmState.pos       = 0;
    lmState.typedChars = [];
    lmState.committed  = [];
    lmState.startTime  = null;
    lmState.active     = true;
    renderModalText(state.audioText, 0);
    const inp = document.getElementById('lesson-exercise-input');
    if(inp) { inp.disabled = false; inp.value = ''; inp.focus(); }
  };
  window.speechSynthesis.speak(utt);
}

// Keep old playAudio for compatibility
function playAudio() { playLessonAudio(); }

// ====== MINI GAMES (inside lesson modal) ======
function startMiniGame(lesson) {
  openLessonInModal(lmState.cat || LESSON_CATEGORIES[0], lesson);
}

function markLessonComplete() {
  if(lmState.lesson) markLessonDone(lmState.lesson.id);
}

function startFallingGame(container) {
  const words = WORDS.beginner.sort(()=>Math.random()-.5).slice(0,20);
  let score=0, lives=3, idx=0, interval;
  container.style.position='relative'; container.style.minHeight='200px';
  const wrap = document.createElement('div');
  wrap.innerHTML=`<div style="display:flex;justify-content:space-between;margin-bottom:12px"><span>Score: <strong id="fg-score">0</strong></span><span>Lives: <strong id="fg-lives">❤️❤️❤️</strong></span></div><div id="fg-arena" style="position:relative;height:150px;border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--bg3)"></div><div class="mt-3"><input id="fg-input" class="form-input" placeholder="Type the falling word!" autocomplete="off" autocorrect="off"></div>`;
  container.appendChild(wrap);
  const arena=wrap.querySelector('#fg-arena');
  const input=wrap.querySelector('#fg-input');
  input.focus();
  function spawn(){
    if(idx>=words.length||lives<=0){clearInterval(interval);input.disabled=true;container.innerHTML+=`<div style="text-align:center;margin-top:12px;color:var(--accent);font-weight:700">Game Over! Score: ${score}</div>`;markLessonComplete();return;}
    const w=words[idx++];const el=document.createElement('div');
    el.textContent=w;el.dataset.word=w;
    el.style.cssText=`position:absolute;top:-24px;left:${Math.random()*70}%;font-family:var(--font-mono);font-size:1rem;color:var(--text2);font-weight:600;transition:top 3s linear`;
    arena.appendChild(el);setTimeout(()=>{el.style.top='130px';},10);
    setTimeout(()=>{if(el.parentNode&&el.dataset.word!=='done'){el.remove();lives=Math.max(0,lives-1);wrap.querySelector('#fg-lives').textContent=['','❤️','❤️❤️','❤️❤️❤️'][lives]||'';}},3100);
  }
  input.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const typed=input.value.trim();const match=arena.querySelector(`[data-word="${typed}"]`);if(match){match.dataset.word='done';match.style.color='var(--correct)';setTimeout(()=>match.remove(),300);score++;wrap.querySelector('#fg-score').textContent=score;toast('+1 ⚡');}else if(typed){lives=Math.max(0,lives-1);wrap.querySelector('#fg-lives').textContent=['','❤️','❤️❤️','❤️❤️❤️'][lives]||'';}input.value='';}});
  interval=setInterval(spawn,1800);
}

function startHuntGame(container) {
  const letters='ASDFJKL;QWERTY'.split('');
  let score=0,timer=20;
  container.innerHTML=`<div style="text-align:center"><div style="font-size:3rem;margin:16px 0;color:var(--accent)" id="hg-letter">?</div><div>Score: <strong id="hg-score">0</strong> | Time: <strong id="hg-timer">20</strong>s</div><div class="mt-3 text-muted text-sm">Press the shown key as fast as you can!</div></div>`;
  const lEl=container.querySelector('#hg-letter');
  let cur='';
  function next(){cur=letters[Math.floor(Math.random()*letters.length)];lEl.textContent=cur;}
  next();
  const cd=setInterval(()=>{timer--;container.querySelector('#hg-timer').textContent=timer;if(timer<=0){clearInterval(cd);container.innerHTML+=`<div style="text-align:center;color:var(--accent);font-weight:700;margin-top:12px">Final: ${score}! ${score>15?'🔥 Excellent!':score>8?'👍 Good!':'💪 Keep going!'}</div>`;markLessonComplete();}},1000);
  document.addEventListener('keydown',function hg(e){if(timer<=0){document.removeEventListener('keydown',hg);return;}if(e.key.toUpperCase()===cur){score++;container.querySelector('#hg-score').textContent=score;lEl.style.color='var(--correct)';setTimeout(()=>lEl.style.color='var(--accent)',200);next();}});
}

function startRaceGame(container) {
  const words=WORDS.intermediate.sort(()=>Math.random()-.5).slice(0,30);
  let idx=0,score=0,timer=60;
  container.innerHTML=`<div style="display:flex;justify-content:space-between;margin-bottom:12px"><span>Words: <strong id="rg-score">0</strong></span><span>Time: <strong id="rg-timer">60</strong>s</span></div><div id="rg-word" style="font-size:2rem;font-family:var(--font-mono);text-align:center;margin:16px 0;color:var(--accent)">—</div><input id="rg-input" class="form-input" placeholder="Type the word!" autocomplete="off" autocorrect="off">`;
  const wEl=container.querySelector('#rg-word');const inp=container.querySelector('#rg-input');
  function showWord(){wEl.textContent=words[idx]||'Done!';}
  showWord();inp.focus();
  const cd=setInterval(()=>{timer--;container.querySelector('#rg-timer').textContent=timer;if(timer<=0){clearInterval(cd);inp.disabled=true;container.innerHTML+=`<div style="text-align:center;color:var(--accent);font-weight:700;margin-top:12px">Race over! ${score} words!</div>`;markLessonComplete();}},1000);
  inp.addEventListener('input',e=>{const v=e.target.value.trim();if(v===words[idx]){score++;container.querySelector('#rg-score').textContent=score;idx++;showWord();inp.value='';wEl.style.color='var(--correct)';setTimeout(()=>wEl.style.color='var(--accent)',300);}});
}

function startRapidGame(container) {
  const words=WORDS.advanced.sort(()=>Math.random()-.5);
  let idx=0,score=0,errors=0,timer=30;
  container.innerHTML=`<div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>Correct: <strong id="rapid-score" style="color:var(--accent)">0</strong></span><span>Errors: <strong id="rapid-err" style="color:var(--danger)">0</strong></span><span>Time: <strong id="rapid-timer">30</strong>s</span></div><div id="rapid-word" style="font-size:1.8rem;font-family:var(--font-mono);text-align:center;margin:12px 0;color:var(--text)">—</div><input id="rapid-inp" class="form-input" placeholder="Type fast!" autocomplete="off" autocorrect="off">`;
  const wEl=container.querySelector('#rapid-word');const inp=container.querySelector('#rapid-inp');
  function show(){wEl.textContent=words[idx%words.length];}
  show();inp.focus();
  const cd=setInterval(()=>{timer--;container.querySelector('#rapid-timer').textContent=timer;if(timer<=0){clearInterval(cd);inp.disabled=true;container.innerHTML+=`<div style="text-align:center;color:var(--accent);font-weight:800;margin-top:16px">⚡ ${score} words! Accuracy: ${Math.round(score/(score+errors)*100)||0}%</div>`;markLessonComplete();}},1000);
  inp.addEventListener('input',e=>{const v=e.target.value.trimEnd();if(v.endsWith(' ')||e.data===null){const typed=v.trim();if(typed===words[idx%words.length]){score++;container.querySelector('#rapid-score').textContent=score;wEl.style.color='var(--correct)';}else{errors++;container.querySelector('#rapid-err').textContent=errors;wEl.style.color='var(--danger)';}setTimeout(()=>wEl.style.color='var(--text)',200);idx++;show();inp.value='';}});
}

// ====== ACHIEVEMENTS ======
const ACH_CATEGORIES = [
  { id:'speed',       icon:'🚀', name:'Speed',       desc:'WPM milestones' },
  { id:'accuracy',    icon:'🎯', name:'Accuracy',     desc:'Precision milestones' },
  { id:'dedication',  icon:'🔥', name:'Dedication',   desc:'Tests & streaks' },
  { id:'content',     icon:'📚', name:'Content',      desc:'Practice modes' },
  { id:'competition', icon:'⚔️', name:'Competition',  desc:'Race achievements' },
  { id:'learning',    icon:'🎓', name:'Learning',     desc:'Lessons & courses' },
  { id:'special',     icon:'⭐', name:'Special',      desc:'Unique feats' },
];

const TIER_LABELS = { bronze:'Bronze', silver:'Silver', gold:'Gold', platinum:'Platinum' };

function checkAchievements(stats) {
  const s = stats || getUserStats();
  if(!s.earnedAchievements) s.earnedAchievements = [];
  let updated = false;
  ACHIEVEMENTS_DEF.forEach(a => {
    try {
      if(!s.earnedAchievements.includes(a.id) && a.condition(s)) {
        s.earnedAchievements.push(a.id);
        updated = true;
        setTimeout(() => toast(`🏆 ${a.icon} ${a.name} unlocked! (+${a.points} pts)`, 'success', 4000), 500);
      }
    } catch(e) {}
  });
  if(updated) saveUserStats(s);
}

function renderAchievements() {
  showTopBarLoader('Loading achievements...');
  setTimeout(() => {
    const stats  = getUserStats();
    const earned = stats.earnedAchievements || [];
    const grid   = document.getElementById('achieve-grid');

    // ── Per-category summary pills ──
    const catSummary = document.getElementById('achieve-cat-summary');
    if(catSummary) {
      catSummary.innerHTML = ACH_CATEGORIES.map(cat => {
        const catAchs   = ACHIEVEMENTS_DEF.filter(a => a.cat === cat.id);
        const catEarned = catAchs.filter(a => earned.includes(a.id)).length;
        const pct = catAchs.length ? Math.round((catEarned / catAchs.length) * 100) : 0;
        return `<div class="achieve-cat-pill">
          <span style="font-size:1.1rem">${cat.icon}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:.75rem;font-weight:700;color:var(--text)">${cat.name}</div>
            <div class="achieve-cat-pill-bar"><div class="achieve-cat-pill-fill" style="width:${pct}%"></div></div>
          </div>
          <span style="font-size:.7rem;font-family:var(--font-mono);color:var(--text3)">${catEarned}/${catAchs.length}</span>
        </div>`;
      }).join('');
    }

    // ── Render cards grouped by category ──
    grid.innerHTML = ACH_CATEGORIES.map(cat => {
      const catAchs   = ACHIEVEMENTS_DEF.filter(a => a.cat === cat.id);
      const catEarned = catAchs.filter(a => earned.includes(a.id));
      const catPts    = catEarned.reduce((s,a) => s + a.points, 0);

      const cards = catAchs.map(a => {
        const isEarned = earned.includes(a.id);
        const tier     = a.tier || 'bronze';
        return `<div class="achieve-card ${isEarned?'earned':'locked-ach'} tier-${tier}">
          ${isEarned ? '<div class="achieve-badge">✓ Earned</div>' : ''}
          <span class="achieve-icon">${a.icon}</span>
          <div class="achieve-name">${a.name}</div>
          <div class="achieve-desc">${a.desc}</div>
          <span class="achieve-tier-badge">${TIER_LABELS[tier]}</span>
          <div class="achieve-points-row">${isEarned ? `+${a.points} pts` : `${a.points} pts`}</div>
        </div>`;
      }).join('');

      return `<div class="achieve-category">
        <div class="achieve-category-header">
          <span class="achieve-cat-icon">${cat.icon}</span>
          <span class="achieve-cat-name">${cat.name}</span>
          <span class="achieve-cat-count${catEarned.length?'  has-earned':''}">${catEarned.length}/${catAchs.length}</span>
          ${catPts > 0 ? `<span class="achieve-cat-pts">${catPts} pts earned</span>` : ''}
        </div>
        <div class="achieve-grid">${cards}</div>
      </div>`;
    }).join('');

    // ── Update header counters ──
    document.getElementById('earned-count').textContent = earned.length;
    document.getElementById('total-count').textContent  = ACHIEVEMENTS_DEF.length;
    const totalPts = ACHIEVEMENTS_DEF.filter(a => earned.includes(a.id)).reduce((s,a) => s + a.points, 0);
    document.getElementById('achieve-points').textContent = totalPts;

    hideTopBarLoader();
  }, 250);
}

// ====== COMPETITION ======
// Competition modal option state
const compOpts = { mode: 'words', participants: 'bots' };

function setCompOption(key, val, btn) {
  compOpts[key] = val;
  const groupId = key === 'mode' ? 'comp-mode-group' : 'comp-participants-group';
  document.querySelectorAll(`#${groupId} .toggle-pill`).forEach(b => b.classList.toggle('active', b === btn));

  // Update participant hints and show/hide bot count
  if(key === 'participants') {
    const hint  = document.getElementById('comp-participants-hint');
    const botWrap = document.getElementById('comp-bot-count-wrap');
    if(val === 'bots') {
      hint.textContent = 'Race against AI bots at varying speed levels.';
      botWrap.style.display = '';
    } else if(val === 'users') {
      hint.textContent = 'Invite real users via the share link — no bots will join.';
      botWrap.style.display = 'none';
    } else {
      hint.textContent = 'Bots fill empty slots; real users can still join with the invite link.';
      botWrap.style.display = '';
    }
  }
}

function openCreateComp() {
  if(!state.user) { openLogin(); toast('Sign in to create competitions','warn'); return; }
  // Reset modal state
  compOpts.mode = 'words';
  compOpts.participants = 'bots';
  document.querySelectorAll('#comp-mode-group .toggle-pill').forEach((b,i) => b.classList.toggle('active', i===0));
  document.querySelectorAll('#comp-participants-group .toggle-pill').forEach((b,i) => b.classList.toggle('active', i===0));
  document.getElementById('comp-participants-hint').textContent = 'Race against AI bots at varying speed levels.';
  document.getElementById('comp-bot-count-wrap').style.display = '';
  document.getElementById('comp-name').value = '';
  openModal('create-comp-modal');
}

function createCompetition() {
  const name      = document.getElementById('comp-name').value.trim();
  const max       = parseInt(document.getElementById('comp-max').value);
  const diff      = document.getElementById('comp-diff').value;
  const dur       = parseInt(document.getElementById('comp-dur').value);
  const lifespan  = parseInt(document.getElementById('comp-lifespan').value) || 3;
  const mode      = compOpts.mode;
  const participants = compOpts.participants;
  const botCount  = parseInt(document.getElementById('comp-bot-count')?.value || 3);

  if(!name) { toast('Enter a competition name','error'); return; }

  const id       = 'comp_' + Date.now();
  const now      = Date.now();
  const expiresAt = now + lifespan * 24 * 60 * 60 * 1000; // lifespan in ms

  const comp = {
    id, name, max, diff, dur, mode, participants, botCount,
    lifespan, expiresAt,
    creator: state.user,
    participantList: [{ user: state.user, wpm: 0, status: 'waiting' }],
    joinedUsers: [state.user],
    status: 'waiting',
    created: now
  };
  let comps = DB.get('competitions', []);
  comps.push(comp);
  DB.set('competitions', comps);
  state.currentShareLink = `https://typecraft.app/join/${id}`;
  closeModal('create-comp-modal');
  renderCompetitions();
  openRaceRoom(comp);
  setTimeout(() => {
    document.getElementById('share-link').textContent = state.currentShareLink;
  }, 100);
}

// ── Per-competition result storage ──
function saveCompRaceResults(compId, racers) {
  const key   = 'comp_results_' + compId;
  const existing = DB.get(key, {});
  // Merge: keep the best WPM per racer across multiple races in this competition
  racers.forEach(r => {
    const name = r.isUser ? (state.user || 'You') : r.name;
    if(!existing[name] || r.wpm > existing[name].wpm) {
      existing[name] = {
        wpm:      r.wpm,
        acc:      r.acc || 100,
        progress: r.progress || 100,
        isBot:    !r.isUser,
        ts:       Date.now()
      };
    }
  });
  DB.set(key, existing);
}

function getCompRaceResults(compId) {
  return DB.get('comp_results_' + compId, {});
}

// Auto-refresh competition leaderboards every 5s while comp page is open
let compLbRefreshInterval = null;
function startCompLbRefresh() {
  stopCompLbRefresh();
  compLbRefreshInterval = setInterval(() => {
    if(state.currentPage === 'competition') {
      renderCompLeaderboard();
      renderLiveLeaders();
      // Only re-render cards if race room is not open (avoid layout churn mid-race)
      const raceOpen = document.getElementById('race-room')?.classList.contains('show');
      if(!raceOpen) refreshCompCardLeaderboards();
    } else {
      stopCompLbRefresh();
    }
  }, 5000);
}
function stopCompLbRefresh() {
  clearInterval(compLbRefreshInterval);
  compLbRefreshInterval = null;
}

// Lightweight refresh: update ONLY the participant leaderboard rows inside existing cards
// without re-rendering the full cards (no flash/layout shift)
function refreshCompCardLeaderboards() {
  document.querySelectorAll('.comp-card[data-comp-id]').forEach(card => {
    const cid      = card.getAttribute('data-comp-id');
    const lbEl     = card.querySelector('.comp-part-lb');
    const compData = card._compData;
    if(lbEl && compData) {
      lbEl.innerHTML = buildParticipantRows(compData);
    }
  });
}

// ====== COMPETITION LEADERBOARD ======
const RACE_BOT_NAMES = ['SwiftKeys','TypeMaster_GH','KeyWizard','SpeedDemon99','NightTyper','AccuracyKing','WordWarrior','FastFingers'];
const BOT_COLORS = ['#00e5c8','#ff9f43','#6c63ff','#ff5f7e','#00d68f','#00cfff','#f9c74f','#c77dff'];

function renderCompLeaderboard() {
  const filter = document.getElementById('comp-lb-filter')?.value || 'all';
  const tbody  = document.getElementById('comp-lb-body');
  if(!tbody) return;

  // Combine seed + user lb entries
  let lb = [...SEED_LEADERBOARD];
  DB.get('leaderboard', []).forEach(e => {
    if(!lb.find(c => c.user === e.user && c.wpm === e.wpm))
      lb.push({ user: e.user, wpm: e.wpm, acc: e.acc, date: e.date, mode: e.mode, diff: e.diff });
  });

  // Filter by difficulty
  if(filter !== 'all') lb = lb.filter(e => e.diff === filter);
  lb.sort((a, b) => b.wpm - a.wpm);

  const top = lb.slice(0, 8);
  if(!top.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text3)">No entries yet</td></tr>`;
    return;
  }

  const maxWpm = top[0].wpm;
  tbody.innerHTML = top.map((e, i) => {
    const rank  = i + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
    const isMe  = e.user === state.user;
    const modeIcon = { words:'📝', quotes:'💬', stories:'📖' }[e.mode] || '📝';
    return `<tr style="${isMe ? 'background:rgba(0,229,200,.04)' : ''}">
      <td><span class="rank-badge${rank===1?' gold':rank===2?' silver':rank===3?' bronze':''}">${medal}</span></td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:24px;height:24px;border-radius:50%;background:${BOT_COLORS[(rank-1)%BOT_COLORS.length]};display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;color:var(--bg);flex-shrink:0">${e.user[0].toUpperCase()}</div>
          <div>
            <div style="font-weight:700;font-size:.83rem;color:${isMe?'var(--accent)':'var(--text)'}">${e.user}${isMe?' <span style="font-size:.65rem;color:var(--accent)">(you)</span>':''}</div>
            <div style="width:${Math.round((e.wpm/maxWpm)*80)}px;height:3px;background:${isMe?'var(--accent)':BOT_COLORS[(rank-1)%BOT_COLORS.length]};border-radius:2px;margin-top:3px;transition:width 1s"></div>
          </div>
        </div>
      </td>
      <td><span class="font-mono" style="color:var(--accent);font-weight:700">${e.wpm}</span></td>
      <td style="font-size:.8rem;color:var(--text2)">${e.acc}%</td>
      <td>${modeIcon}</td>
    </tr>`;
  }).join('');
}

function renderLiveLeaders() {
  const el = document.getElementById('comp-live-leaders');
  if(!el) return;

  const now = Date.now();
  // Build a synthetic live standings list from seed + user leaderboard
  // These represent who is currently winning across active competitions
  const LIVE_COMP_LEADERS = [
    { user:"TypeMaster_GH",  wpm:187, comp:"Friday Speed Sprint",   color:"#00e5c8", progress:94 },
    { user:"SpeedDemon99",   wpm:172, comp:"Friday Speed Sprint",   color:"#ff9f43", progress:88 },
    { user:"FastFingers_Accra",wpm:95,comp:"Beginner Friendly Cup", color:"#6c63ff", progress:72 },
    { user:"NightTyper",     wpm:128, comp:"Quote Masters League",  color:"#ff5f7e", progress:61 },
    { user:"SwiftKeys",      wpm:105, comp:"Quote Masters League",  color:"#00d68f", progress:55 },
  ];

  // Inject current user at their last best WPM if they have one
  const userLb = DB.get('leaderboard', []);
  if(state.user && userLb.length) {
    const myBest = userLb.sort((a,b)=>b.wpm-a.wpm)[0];
    const alreadyThere = LIVE_COMP_LEADERS.find(l => l.user === state.user);
    if(!alreadyThere) {
      LIVE_COMP_LEADERS.push({ user: state.user, wpm: myBest.wpm, comp: 'Your last race', color: '#00e5c8', progress: 80, isMe: true });
      LIVE_COMP_LEADERS.sort((a,b) => b.wpm - a.wpm);
    }
  }

  const top = LIVE_COMP_LEADERS.slice(0, 6);
  if(!top.length) {
    el.innerHTML = `<div style="color:var(--text3);font-size:.82rem;text-align:center;padding:20px">No active races right now</div>`;
    return;
  }

  el.innerHTML = top.map((r, i) => {
    const pos    = i + 1;
    const medal  = pos===1?'🥇':pos===2?'🥈':pos===3?'🥉':pos;
    const isMe   = r.isMe || r.user === state.user;
    return `<div class="live-leader-row">
      <div class="live-leader-pos">${medal}</div>
      <div class="live-leader-avatar" style="background:${r.color}">${r.user[0].toUpperCase()}</div>
      <div style="flex:1;min-width:0">
        <div class="live-leader-name" style="color:${isMe?'var(--accent)':''}">${r.user}${isMe?' ⭐':''}</div>
        <div class="live-leader-comp">${r.comp}</div>
      </div>
      <div class="live-leader-bar-wrap">
        <div class="live-leader-bar" style="width:${r.progress}%;background:${r.color}"></div>
      </div>
      <div class="live-leader-wpm">${r.wpm} <span style="font-size:.65rem;color:var(--text3)">wpm</span></div>
    </div>`;
  }).join('');
}

// Active competition tab
let activeCompTab = 'ongoing';

function switchCompTab(tab) {
  activeCompTab = tab;
  ['ongoing','mine','past'].forEach(t => {
    document.getElementById(`ctab-${t}`)?.classList.toggle('active', t === tab);
    const panel = document.getElementById(`comp-panel-${t}`);
    if(panel) panel.style.display = t === tab ? '' : 'none';
  });
}

function renderCompetitions() {
  showTopBarLoader('Loading competitions...');
  setTimeout(() => {
    try {
      const now = Date.now();

    // Seed competitions with expiresAt
    const seed = [
      { id:'s1', name:"Friday Speed Sprint",   max:8,  diff:"intermediate", dur:120, mode:"quotes",  participants:"both",  botCount:3, creator:"KeyWizard",        participantList:[{user:"KeyWizard"},{user:"SpeedDemon99"},{user:"TypeMaster_GH"}], joinedUsers:["KeyWizard","SpeedDemon99","TypeMaster_GH"], status:"waiting", created: now - 3600000,   expiresAt: now + 2*24*3600000, lifespan:3 },
      { id:'s2', name:"Beginner Friendly Cup",  max:10, diff:"beginner",     dur:60,  mode:"words",   participants:"bots",  botCount:3, creator:"FastFingers_Accra",participantList:[{user:"FastFingers_Accra"}],                                         joinedUsers:["FastFingers_Accra"],                                                   status:"waiting", created: now - 600000,    expiresAt: now + 5*24*3600000, lifespan:5 },
      { id:'s3', name:"Advanced Masters",       max:4,  diff:"advanced",     dur:300, mode:"stories", participants:"both",  botCount:2, creator:"AccuracyKing",     participantList:[{user:"AccuracyKing"},{user:"NightTyper"},{user:"WordWarrior"},{user:"SwiftKeys"}], joinedUsers:["AccuracyKing","NightTyper","WordWarrior","SwiftKeys"], status:"ended", created: now - 86400000*3, expiresAt: now - 86400000,     lifespan:2 },
      { id:'s4', name:"Quote Masters League",   max:6,  diff:"intermediate", dur:120, mode:"quotes",  participants:"both",  botCount:3, creator:"NightTyper",       participantList:[{user:"NightTyper"},{user:"SwiftKeys"}],                                joinedUsers:["NightTyper","SwiftKeys"],                                               status:"waiting", created: now - 7200000,   expiresAt: now + 1*24*3600000, lifespan:1 }
    ];

    let userComps = DB.get('competitions', []);

    // Auto-expire user competitions whose expiresAt has passed
    let changed = false;
    userComps = userComps.map(c => {
      if(c.expiresAt && now > c.expiresAt && c.status !== 'ended') {
        changed = true;
        return { ...c, status: 'ended' };
      }
      return c;
    });
    if(changed) DB.set('competitions', userComps);

    const all = [...seed, ...userComps].sort((a,b) => b.created - a.created);

    const modeIcon  = { words:'📝', quotes:'💬', stories:'📖' };
    const partLabel = { bots:'🤖 Bots', users:'👥 Users', both:'🤖👥 Mixed' };

    const currentUser = state.user;

    // Categorise
    const now2 = Date.now();
    const isExpired = c => c.expiresAt ? now2 > c.expiresAt : c.status === 'ended';
    const isMine    = c => currentUser && (c.creator === currentUser || (c.joinedUsers||[]).includes(currentUser));

    const ongoing = all.filter(c => !isExpired(c));
    const mine    = all.filter(c => isMine(c));
    const past    = all.filter(c => isExpired(c));

    // Update tab counts
    document.getElementById('ctab-count-ongoing').textContent = ongoing.length;
    document.getElementById('ctab-count-mine').textContent    = mine.length;
    document.getElementById('ctab-count-past').textContent    = past.length;

    // Render leaderboard panels
    renderCompLeaderboard();
    renderLiveLeaders();

    // ── Participant leaderboard builder ──
    // Builds the rows HTML from live per-competition results + bot defaults
    function buildParticipantRows(c) {
      const liveResults = getCompRaceResults(c.id);
      const botType     = c.participants || 'bots';
      const wpmRanges   = { beginner:[15,50], intermediate:[35,90], advanced:[60,140] };
      const [wMin, wMax] = wpmRanges[c.diff] || [30,90];

      // Collect unique participants: real joined users + bots
      const joined = (c.joinedUsers || (c.participantList||[]).map(p=>p.user)).filter(Boolean);

      let participants = [];

      // Real users
      joined.forEach(user => {
        const live   = liveResults[user];
        const isMe   = user === currentUser;
        // Fallback: check global lb for this user
        const globalLb  = DB.get('leaderboard', []);
        const globalBest = globalLb.filter(e => e.user === user).sort((a,b)=>b.wpm-a.wpm)[0]?.wpm || 0;
        const wpm    = live ? live.wpm : (isMe ? globalBest : 0);
        const acc    = live ? live.acc  : (isMe ? (globalLb.find(e=>e.user===user)?.acc || 0) : 0);
        participants.push({ name: user, wpm, acc, isBot: false, isMe, hasRaced: !!live });
      });

      // Bots
      if(botType === 'bots' || botType === 'both') {
        const numBots = Math.min(c.botCount || 3, 7);
        RACE_BOT_NAMES.slice(0, numBots).forEach((bname, bi) => {
          if(participants.find(p => p.name === bname)) return;
          const live = liveResults[bname];
          const defaultWpm = Math.round(wMin + (wMax - wMin) * (bi / Math.max(numBots-1, 1)));
          participants.push({
            name: bname,
            wpm:  live ? live.wpm : defaultWpm,
            acc:  live ? live.acc : (95 - bi * 2),
            isBot: true,
            isMe: false,
            hasRaced: !!live
          });
        });
      }

      // Sort: most WPM first; unraced real users go to bottom
      participants.sort((a, b) => {
        if(b.wpm !== a.wpm) return b.wpm - a.wpm;
        // Equal WPM: bots after users, unraced after raced
        if(a.hasRaced !== b.hasRaced) return a.hasRaced ? -1 : 1;
        return 0;
      });

      if(!participants.length) return '<div style="color:var(--text3);font-size:.78rem;text-align:center;padding:10px">No participants yet</div>';

      const maxWpm = Math.max(...participants.map(p => p.wpm), 1);

      return participants.map((p, i) => {
        const pos   = i + 1;
        const medal = pos===1?'🥇':pos===2?'🥈':pos===3?'🥉':pos;
        const color = p.isBot
          ? BOT_COLORS[(RACE_BOT_NAMES.indexOf(p.name) + 1) % BOT_COLORS.length]
          : p.isMe ? 'var(--accent)' : BOT_COLORS[0];
        const barPct = p.wpm ? Math.round((p.wpm / maxWpm) * 100) : 0;
        // Check if this person was displaced — animate highlight if they just moved
        return `<div class="comp-part-row" data-racer="${p.name}" style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)${i===participants.length-1?';border-bottom:none':''}">
          <span style="width:22px;text-align:center;font-size:.78rem;font-weight:700;color:${pos<=3?'var(--accent2)':'var(--text3)'};flex-shrink:0">${medal}</span>
          <div style="width:24px;height:24px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:.62rem;font-weight:800;color:var(--bg);flex-shrink:0">${p.name[0].toUpperCase()}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:.78rem;font-weight:700;color:${p.isMe?'var(--accent)':'var(--text)'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
              ${p.name}${p.isBot?' <span style="font-size:.6rem;color:var(--text3)">(bot)</span>':''}${p.isMe?' <span style="font-size:.6rem;color:var(--accent)">★ you</span>':''}
            </div>
            <div style="height:3px;background:var(--bg4);border-radius:2px;margin-top:3px;overflow:hidden">
              <div style="height:100%;width:${barPct}%;background:${color};border-radius:2px;transition:width .6s ease"></div>
            </div>
          </div>
          <div style="text-align:right;flex-shrink:0;min-width:54px">
            <span style="font-family:var(--font-mono);font-size:.78rem;font-weight:700;color:${p.isMe?'var(--accent)':'var(--text2)'}">
              ${p.wpm ? p.wpm + ' wpm' : '<span style="color:var(--text3)">—</span>'}
            </span>
            ${p.acc && p.wpm ? `<div style="font-size:.62rem;color:var(--text3)">${p.acc}%</div>` : ''}
          </div>
        </div>`;
      }).join('');
    }

    function buildParticipantLeaderboard(c) {
      const joined   = (c.joinedUsers || (c.participantList||[]).map(p=>p.user)).filter(Boolean);
      const botType  = c.participants || 'bots';
      const numBots  = (botType === 'bots' || botType === 'both') ? Math.min(c.botCount||3, 7) : 0;
      const totalCount = joined.length + numBots;

      return `<div class="comp-part-lb-wrap" style="margin:12px 0 0;border-top:1px solid var(--border);padding-top:12px">
        <div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">
          <span>👥 Participants · ${totalCount} racer${totalCount!==1?'s':''}</span>
          <span style="font-size:.65rem;color:var(--text3);font-weight:400">Updates after each race</span>
        </div>
        <div class="comp-part-lb">${buildParticipantRows(c)}</div>
      </div>`;
    }

    function buildCards(list, isPast) {
      if(!list.length) {
        return `<div class="comp-empty">
          <span class="comp-empty-icon">${isPast ? '📁' : '🏁'}</span>
          ${isPast ? 'No past competitions yet.' : 'No competitions here yet — create one!'}
        </div>`;
      }
      return list.map(c => {
        const isCreator = c.creator === currentUser;
        const hasJoined = (c.joinedUsers||[]).includes(currentUser);
        const expired   = isExpired(c);

        // Status badge
        const statusHtml = expired
          ? `<span class="comp-status ended">✅ Ended</span>`
          : `<span class="comp-status ${c.status}">${c.status==='live'?'🔴 Live':'⏳ Waiting'}</span>`;

        // Expiry display
        let expiryHtml = '';
        if(c.expiresAt) {
          const msLeft = c.expiresAt - now2;
          if(!expired && msLeft > 0) {
            const daysLeft = Math.floor(msLeft / 86400000);
            const hrsLeft  = Math.floor((msLeft % 86400000) / 3600000);
            const urgent   = daysLeft === 0;
            const label    = daysLeft > 0 ? `${daysLeft}d ${hrsLeft}h left` : `${hrsLeft}h left`;
            expiryHtml = `<span class="comp-expiry${urgent?' urgent':''}">⏱ ${label}</span>`;
          } else if(expired) {
            expiryHtml = `<span class="comp-expiry">Expired ${new Date(c.expiresAt).toLocaleDateString()}</span>`;
          }
        }

        const pList  = c.participantList || [];
        const pCount = pList.length;

        const roleBadge = isCreator
          ? `<span style="font-size:.65rem;color:var(--accent2);font-weight:700;background:rgba(255,159,67,.1);border:1px solid rgba(255,159,67,.2);border-radius:4px;padding:1px 7px">👑 Creator</span>`
          : hasJoined
            ? `<span style="font-size:.65rem;color:var(--success);font-weight:700;background:rgba(0,214,143,.1);border:1px solid rgba(0,214,143,.2);border-radius:4px;padding:1px 7px">✅ Joined</span>`
            : '';

        return `<div class="comp-card${isPast?' comp-past':''}" data-comp-id="${c.id}">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:8px;flex-wrap:wrap">
            ${statusHtml}
            <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
              ${roleBadge}
              ${expiryHtml}
            </div>
          </div>
          <div style="font-size:1rem;font-weight:800;color:var(--text);margin-bottom:5px">${c.name}</div>
          <div class="text-sm text-muted mb-2">by ${c.creator} · ${c.diff} · ${formatTime(c.dur)}</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px">
            <span class="tag" style="background:var(--bg4);color:var(--text3);font-size:.68rem">${modeIcon[c.mode]||'📝'} ${c.mode||'words'}</span>
            <span class="tag" style="background:var(--bg4);color:var(--text3);font-size:.68rem">${partLabel[c.participants]||'🤖 Bots'}</span>
            <span class="tag" style="background:var(--bg4);color:var(--text3);font-size:.68rem">👥 ${pCount}/${c.max}</span>
            ${c.lifespan ? `<span class="tag" style="background:var(--bg4);color:var(--text3);font-size:.68rem">📅 ${c.lifespan}d</span>` : ''}
          </div>

          ${buildParticipantLeaderboard(c)}

          <div class="flex gap-2 mt-3" style="flex-wrap:wrap">
            ${!expired ? `<button class="btn btn-primary btn-sm" onclick="joinComp('${c.id}')">▶ Race</button>` : ''}
            <button class="btn btn-secondary btn-sm" onclick="shareComp('${c.id}')">📤 Invite</button>
            ${isCreator && !expired ? `<button class="btn btn-secondary btn-sm" onclick="endCompNow('${c.id}')">⏹ End</button>` : ''}
            ${isCreator ? `<button class="btn btn-danger btn-sm" onclick="deleteComp('${c.id}')">✕</button>` : ''}
          </div>
        </div>`;
      }).join('');
    }

    document.getElementById('comp-panel-ongoing').innerHTML = buildCards(ongoing, false);
    document.getElementById('comp-panel-mine').innerHTML    = buildCards(mine, false);
    document.getElementById('comp-panel-past').innerHTML    = buildCards(past, true);

    // Keep active tab visible
    ['ongoing','mine','past'].forEach(t => {
      const panel = document.getElementById(`comp-panel-${t}`);
      if(panel) panel.style.display = t === activeCompTab ? '' : 'none';
    });

    // Start 5-second live leaderboard refresh
    startCompLbRefresh();

    } catch(err) {
      console.error('renderCompetitions error:', err);
    }
    hideTopBarLoader();
  }, 250);
}

function joinComp(id) {
  if(!state.user) { openLogin(); toast('Sign in to join competitions', 'warn'); return; }

  // Track competition join stats
  const stats = getUserStats();
  stats.competitionsJoined = (stats.competitionsJoined||0)+1;
  saveUserStats(stats);
  checkAchievements(stats);

  // Find comp from seed + stored list
  const now = Date.now();
  const seed = [
    { id:'s1', name:"Friday Speed Sprint",   max:8,  diff:"intermediate", dur:120, mode:"quotes",  participants:"both",  botCount:3, creator:"KeyWizard",        joinedUsers:["KeyWizard","SpeedDemon99","TypeMaster_GH"], expiresAt: now+2*86400000, lifespan:3 },
    { id:'s2', name:"Beginner Friendly Cup",  max:10, diff:"beginner",     dur:60,  mode:"words",   participants:"bots",  botCount:3, creator:"FastFingers_Accra",joinedUsers:["FastFingers_Accra"],                        expiresAt: now+5*86400000, lifespan:5 },
    { id:'s3', name:"Advanced Masters",       max:4,  diff:"advanced",     dur:300, mode:"stories", participants:"both",  botCount:2, creator:"AccuracyKing",     joinedUsers:["AccuracyKing","NightTyper","WordWarrior","SwiftKeys"], expiresAt: now-86400000, lifespan:2 },
    { id:'s4', name:"Quote Masters League",   max:6,  diff:"intermediate", dur:120, mode:"quotes",  participants:"both",  botCount:3, creator:"NightTyper",       joinedUsers:["NightTyper","SwiftKeys"],                  expiresAt: now+86400000,   lifespan:1 }
  ];
  let userComps = DB.get('competitions', []);
  let comp = [...seed, ...userComps].find(c => c.id === id);
  if(!comp) comp = { id, name:'Speed Race', diff:'intermediate', dur:120, mode:'quotes', participants:'bots', botCount:3, joinedUsers:[], expiresAt: now+86400000 };

  // Record this user as joined in stored comps
  const storedIdx = userComps.findIndex(c => c.id === id);
  if(storedIdx !== -1) {
    if(!userComps[storedIdx].joinedUsers) userComps[storedIdx].joinedUsers = [];
    if(!userComps[storedIdx].joinedUsers.includes(state.user)) {
      userComps[storedIdx].joinedUsers.push(state.user);
      DB.set('competitions', userComps);
    }
    comp = userComps[storedIdx];
  }

  openRaceRoom(comp);
}

function endCompNow(id) {
  if(!confirm('End this competition early? It will move to Past competitions.')) return;
  let comps = DB.get('competitions', []);
  comps = comps.map(c => c.id === id ? { ...c, status:'ended', expiresAt: Date.now() - 1 } : c);
  DB.set('competitions', comps);
  renderCompetitions();
  toast('Competition ended','success');
}

// ====== RACE ROOM ======

let raceState = {
  active: false, text: '', pos: 0, offset: 0, chars: [], errors: 0,
  startTime: null, timer: null, botTimers: [], bots: [], comp: null, finished: false
};

function openRaceRoom(comp) {
  raceState.comp = comp;
  raceState.finished = false;
  document.getElementById('race-room-title').textContent = comp.name || 'Speed Race';
  document.getElementById('race-results').style.display = 'none';
  document.getElementById('race-input').value = '';
  document.getElementById('race-input').disabled = true;

  // Show mode + participant type badge in header
  const modeLabels  = { words:'📝 Words', quotes:'💬 Quotes', stories:'📖 Stories' };
  const partLabels  = { bots:'🤖 Bots', users:'👥 Users Only', both:'🤖👥 Mixed' };
  const raceSubEl = document.getElementById('race-room-sub');
  if(raceSubEl) raceSubEl.textContent = `${modeLabels[comp.mode]||'📝 Words'} · ${partLabels[comp.participants]||'🤖 Bots'} · ${comp.diff||'intermediate'}`;

  // Determine participant setup from competition settings
  const participantType = comp.participants || 'bots'; // 'bots' | 'users' | 'both'
  const botCount = comp.botCount !== undefined ? parseInt(comp.botCount) : Math.min(Math.max(1, (comp.max||6)-1), 5);

  // Build bot list based on participant type
  if(participantType === 'users') {
    // No bots — user races alone (or with real users who join via link)
    raceState.bots = [];
  } else {
    // bots or both — add bots
    const numBots = Math.min(Math.max(1, botCount), 7);
    // Scale bot WPM to difficulty
    const wpmRanges = {
      beginner:     [15,  50],
      intermediate: [35,  90],
      advanced:     [60, 140],
    };
    const [wpmMin, wpmMax] = wpmRanges[comp.diff] || [30, 90];
    raceState.bots = RACE_BOT_NAMES.slice(0, numBots).map((name, i) => ({
      name,
      color: BOT_COLORS[i + 1],
      // Spread bots evenly across the WPM range so there's variety
      wpm: Math.round(wpmMin + (wpmMax - wpmMin) * (i / Math.max(numBots - 1, 1))),
      pos: 0, progress: 0, finished: false, finishTime: null
    }));
  }

  renderRacerList(0);
  document.getElementById('race-word-display').textContent = 'Starting in 3...';
  document.getElementById('race-room').classList.add('show');
  document.body.style.overflow = 'hidden';

  startRaceCountdown();
}

function renderRacerList(userProgress) {
  const list = document.getElementById('racer-list');
  const userWpm = raceState.startTime ? calcRaceWPM() : 0;

  // Build racer objects with stable WPM values (no random jitter in progress view)
  const racers = [
    {
      name: state.user || 'You',
      color: BOT_COLORS[0],
      progress: userProgress,
      wpm: userWpm,
      isUser: true
    },
    ...raceState.bots.map(b => ({
      name: b.name,
      color: b.color,
      progress: b.progress,
      // Bot WPM is their target rate scaled by how far they've gone — stable, no random noise
      wpm: b.progress > 0 ? Math.round(b.wpm * (b.progress / 100 * 0.8 + 0.2)) : 0,
      isUser: false
    }))
  ];

  // Sort: primarily by progress %, secondarily by WPM as a tiebreaker
  // This gives accurate position ordering without flickering
  racers.sort((a, b) => {
    if (b.progress !== a.progress) return b.progress - a.progress;
    return b.wpm - a.wpm;
  });

  list.innerHTML = racers.map((r, i) => {
    const pos = i + 1;
    const medal = pos===1?'🥇':pos===2?'🥈':pos===3?'🥉':pos;
    const isUser = r.isUser;
    return `<div class="racer-row${isUser ? ' racer-row-user' : ''}">
      <div class="racer-pos">${medal}</div>
      <div class="racer-avatar" style="background:${r.color}">${r.name[0].toUpperCase()}</div>
      <div class="racer-name" style="color:${isUser?'var(--accent)':''}">${isUser?'You ⭐':r.name}</div>
      <div class="racer-bar-wrap">
        <div class="racer-bar" style="width:${r.progress}%;background:${r.color}"></div>
      </div>
      <div class="racer-wpm">${r.wpm > 0 ? r.wpm + ' wpm' : ''}</div>
    </div>`;
  }).join('');
}

function startRaceCountdown() {
  // Clear any previous race
  clearInterval(raceState.timer);
  raceState.botTimers.forEach(clearInterval);
  raceState.botTimers = [];
  raceState.bots.forEach(b => { b.progress = 0; b.finished = false; });
  document.getElementById('race-results').style.display = 'none';

  // Immediately disable and clear the input so no one can type before GO
  const raceInp = document.getElementById('race-input');
  raceInp.disabled = true;
  raceInp.value = '';
  raceInp.placeholder = 'Wait for GO!...';
  document.getElementById('race-input-wrap').classList.remove('active');

  // Reset race state
  raceState.pos = 0; raceState.offset = 0; raceState.chars = [];
  raceState.errors = 0; raceState.startTime = null; raceState.committed = [];
  raceState.finished = false;
  raceState.active = false;

  // Generate race text based on competition mode — never touches state.mode
  const raceMode = raceState.comp?.mode || 'quotes';
  let text;
  if(raceMode === 'quotes') {
    const raceQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    text = raceQuote.text.slice(0, 300);
  } else if(raceMode === 'stories') {
    const story = STORIES[Math.floor(Math.random() * STORIES.length)];
    text = story.slice(0, 350);
  } else {
    // Random words — use competition difficulty
    const diff = raceState.comp?.diff || 'intermediate';
    const pool = WORDS[diff] || WORDS.intermediate;
    let words = [];
    while(words.length < 60) words.push(pool[Math.floor(Math.random()*pool.length)]);
    text = words.join(' ').slice(0, 300);
  }
  raceState.text = text;

  // Render text
  renderRaceText(text, 0);
  renderRacerList(0);

  // Show countdown
  const cntEl = document.getElementById('race-countdown');
  const numEl = document.getElementById('countdown-num');
  cntEl.classList.add('show');
  let count = 3;
  numEl.textContent = count;
  numEl.style.color = '';

  const cntInterval = setInterval(() => {
    count--;
    if(count <= 0) {
      clearInterval(cntInterval);
      numEl.textContent = 'GO!';
      numEl.style.color = 'var(--success)';
      setTimeout(() => {
        cntEl.classList.remove('show');
        numEl.style.color = '';
        startRace();
      }, 700);
    } else {
      numEl.textContent = count;
      numEl.style.animation = 'none';
      requestAnimationFrame(() => { numEl.style.animation = ''; });
    }
  }, 1000);
}

function startRace() {
  raceState.active = true;
  raceState.startTime = Date.now();
  raceState.finished = false;
  const raceInp = document.getElementById('race-input');
  raceInp.disabled = false;
  raceInp.placeholder = 'Type here...';
  raceInp.focus();
  document.getElementById('race-input-wrap').classList.add('active');

  const dur = raceState.comp?.dur || 120;

  // Race timer
  raceState.timer = setInterval(() => {
    const elapsed = (Date.now() - raceState.startTime) / 1000;
    const remaining = Math.max(0, dur - elapsed);
    document.getElementById('race-live-timer').textContent = formatTime(Math.round(remaining));
    const wpm = calcRaceWPM();
    document.getElementById('race-live-wpm').textContent = wpm;
    const userProg = raceState.text.length ? Math.round((raceState.pos / raceState.text.length)*100) : 0;
    renderRacerList(userProg);
    if(remaining <= 0 && !raceState.finished) { clearInterval(raceState.timer); endRace(); }
  }, 400);

  // Animate bots
  raceState.bots.forEach((bot, idx) => {
    const charsPerSec = (bot.wpm * 5) / 60;
    const totalChars = raceState.text.length;
    let botChars = 0;
    const t = setInterval(() => {
      if(!raceState.active || raceState.finished) { clearInterval(t); return; }
      const jitter = (Math.random() - 0.5) * charsPerSec * 0.3;
      botChars = Math.min(totalChars, botChars + charsPerSec * 0.4 + jitter);
      bot.progress = Math.round((botChars / totalChars) * 100);
      bot.wpm = Math.round(charsPerSec * 12 * (0.92 + Math.random()*.16));
      if(botChars >= totalChars && !bot.finished) {
        bot.finished = true; bot.progress = 100;
        bot.finishTime = Date.now() - raceState.startTime;
        clearInterval(t);
        if(!raceState.finished) toast(`${bot.name} finished! 🏁`,'warn',2000);
      }
    }, 400);
    raceState.botTimers.push(t);
  });
}

function calcRaceWPM() {
  if(!raceState.startTime) return 0;
  const elapsed = (Date.now() - raceState.startTime) / 1000 / 60;
  const correct = raceState.pos - raceState.errors;
  return elapsed > 0 ? Math.max(0, Math.round((correct/5)/elapsed)) : 0;
}

function renderRaceText(text, pos) {
  const display = document.getElementById('race-word-display');
  const typed = raceState.chars || [];
  let html = '';
  for(let i=0;i<Math.min(text.length,300);i++) {
    let cls = '';
    if(i<pos) cls = typed[i]===text[i]?'correct':'wrong';
    else if(i===pos) cls='current';
    // Use a regular space so words wrap naturally (not &nbsp; which prevents wrapping)
    const ch = text[i]===' '?' ':text[i].replace(/</g,'&lt;');
    html += `<span class="word-char${cls?' '+cls:''}">${ch}</span>`;
  }
  display.innerHTML = html;
  const cur = display.querySelector('.current');
  if(cur) cur.scrollIntoView({block:'nearest',behavior:'smooth'});
}

// Race input handler
document.addEventListener('DOMContentLoaded', () => {
  const ri = document.getElementById('race-input');
  if(!ri) return;
  ri.addEventListener('input', e => {
    if(!raceState.active || raceState.finished) return;
    const val = e.target.value;
    const text = raceState.text;
    if(!raceState.committed) raceState.committed = [];
    // Use committed buffer so errors persist across word boundaries
    const fullTyped = raceState.committed.join('') + val;
    raceState.chars = fullTyped.split('');
    raceState.pos = Math.min(fullTyped.length, text.length);
    raceState.errors = raceState.chars.filter((c,i)=>i<text.length&&c!==text[i]).length;
    renderRaceText(text, raceState.pos);
    if(val.endsWith(' ')) {
      for(const ch of val) raceState.committed.push(ch);
      ri.value = '';
    }
    if(fullTyped.length >= text.length) {
      ri.value = ''; raceState.finished = true;
      clearInterval(raceState.timer);
      raceState.botTimers.forEach(clearInterval);
      endRace();
    }
  });
});

function endRace() {
  raceState.active = false;
  document.getElementById('race-input').disabled = true;
  document.getElementById('race-input-wrap').classList.remove('active');

  const userWpm  = calcRaceWPM();
  const userProg = raceState.text.length ? Math.round((raceState.pos / raceState.text.length) * 100) : 0;
  const userAcc  = raceState.chars.length
    ? Math.round((raceState.chars.filter((c,i) => i < raceState.text.length && c === raceState.text[i]).length / raceState.chars.length) * 100)
    : 100;

  // Build final standings — bots use their actual target WPM, scaled by progress
  const allRacers = [
    { name: state.user || 'You', wpm: userWpm, progress: userProg, acc: userAcc, isUser: true,  color: BOT_COLORS[0] },
    ...raceState.bots.map(b => ({
      name: b.name,
      wpm:  b.progress >= 100 ? b.wpm : Math.round(b.wpm * (b.progress / 100)),
      progress: b.progress,
      acc:  97 - Math.floor(Math.random() * 8),
      isUser: false,
      color: b.color
    }))
  ].sort((a,b) => b.wpm - a.wpm || b.progress - a.progress);

  // ── Persist results to per-competition store ──
  const compId = raceState.comp?.id;
  if(compId) {
    saveCompRaceResults(compId, allRacers);
  }
  // Also add user to global leaderboard
  if(state.user && userWpm > 0) {
    const comp = raceState.comp || {};
    addToLeaderboard({ user: state.user, wpm: userWpm, acc: userAcc,
      date: new Date().toISOString().split('T')[0],
      mode: comp.mode || 'quotes', diff: comp.diff || 'intermediate' });

    // Track competition placement achievements
    const userPos = allRacers.findIndex(r => r.isUser);
    const raceStats = getUserStats();
    if(userPos === 0) raceStats.competitionsWon = (raceStats.competitionsWon||0) + 1;
    if(userPos <= 2)  raceStats.podiumFinishes   = (raceStats.podiumFinishes||0) + 1;
    saveUserStats(raceStats);
    checkAchievements(raceStats);
  }

  // Podium
  const medals = ['🥇','🥈','🥉'];
  const podiumClasses = ['first','second','third'];
  document.getElementById('race-podium').innerHTML = allRacers.slice(0,3).map((r,i) => `
    <div class="podium-card ${podiumClasses[i]||''}">
      <span class="podium-trophy">${medals[i]||'🏅'}</span>
      <div class="podium-name" style="color:${r.isUser?'var(--accent)':''}">${r.isUser?'You ⭐':r.name}</div>
      <div class="podium-wpm">${r.wpm}</div>
      <div class="result-label">WPM</div>
    </div>`).join('');

  // Full table
  document.getElementById('race-full-results').innerHTML = `
    <table class="leaderboard-table" style="width:100%">
      <thead><tr><th>#</th><th>Racer</th><th>WPM</th><th>Acc</th><th>Progress</th></tr></thead>
      <tbody>${allRacers.map((r,i) => `<tr>
        <td><span class="rank-badge${i===0?' gold':i===1?' silver':i===2?' bronze':''}">${i+1}</span></td>
        <td><strong style="color:${r.isUser?'var(--accent)':''}">${r.isUser?'You':r.name}</strong></td>
        <td><span class="font-mono" style="color:var(--accent);font-weight:700">${r.wpm}</span></td>
        <td>${r.acc}%</td>
        <td>${r.progress}%</td>
      </tr>`).join('')}</tbody>
    </table>`;

  renderRacerList(userProg);
  document.getElementById('race-results').style.display = 'block';
  toast(`Race over! You scored ${userWpm} WPM 🏁`, 'success', 4000);

  // Refresh all leaderboard panels
  setTimeout(() => {
    renderCompLeaderboard();
    renderLiveLeaders();
    // Also refresh competition cards if competition page is open
    if(state.currentPage === 'competition') renderCompetitions();
  }, 500);
}

function closeRaceRoom() {
  clearInterval(raceState.timer);
  raceState.botTimers.forEach(clearInterval);
  raceState.active = false;
  document.getElementById('race-room').classList.remove('show');
  document.getElementById('race-countdown').classList.remove('show');
  document.body.style.overflow = '';
}


function deleteComp(id) {
  let comps = DB.get('competitions', []);
  comps = comps.filter(c=>c.id!==id);
  DB.set('competitions', comps);
  renderCompetitions();
  toast('Competition deleted','success');
}

function shareComp(id) {
  state.currentShareLink = `https://typecraft.app/join/${id}`;
  document.getElementById('share-link').textContent = state.currentShareLink;
  openModal('share-comp-modal');
}

function copyShareLink() {
  navigator.clipboard.writeText(state.currentShareLink).then(()=>toast('Link copied! 📋','success')).catch(()=>toast('Copy failed — select and copy manually'));
}

function shareToSocial(platform) {
  const link = encodeURIComponent(state.currentShareLink);
  const text = encodeURIComponent('Join my TypeCraft typing competition! 🏆⌨️');
  const urls = {
    whatsapp: `https://wa.me/?text=${text}%20${link}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${link}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    telegram: `https://t.me/share/url?url=${link}&text=${text}`
  };
  window.open(urls[platform], '_blank');
}

// ====== IMPORT TEXT ======
document.addEventListener('DOMContentLoaded', ()=>{
  const ta = document.getElementById('import-textarea');
  if(ta) {
    ta.addEventListener('input', e => {
      const text = e.target.value;
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      document.getElementById('import-word-count').textContent = `${words} words · ${text.length} characters`;
      const hint = document.getElementById('import-paste-hint');
      if(hint) hint.textContent = text.length >= 50
        ? `${words} words ready — click Start Typing`
        : `${50 - text.length} more characters needed`;
    });
  }
  const importInp = document.getElementById('import-typing-input');
  if(importInp) {
    importInp.addEventListener('input', handleImportInput);
    importInp.addEventListener('keydown', e => {
      if(e.key==='Escape') { state.importActive=false; showImportIdle(); toast('Import stopped'); }
    });
  }
});

function showImportIdle() {
  document.getElementById('import-paste-area').style.display = '';
  document.getElementById('import-typing-area').style.display = 'none';
  document.getElementById('import-stats-bar').style.display = 'none';
  document.getElementById('import-restart-btn').style.display = 'none';
}

function showImportActive() {
  document.getElementById('import-paste-area').style.display = 'none';
  document.getElementById('import-typing-area').style.display = '';
  document.getElementById('import-stats-bar').style.display = '';
  document.getElementById('import-restart-btn').style.display = '';
}

function loadImportFile(e) {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('import-textarea').value = ev.target.result;
    document.getElementById('import-textarea').dispatchEvent(new Event('input'));
    toast('File loaded! ✅','success');
  };
  reader.readAsText(file);
  // Reset file input so same file can be reloaded
  e.target.value = '';
}

function clearImport() {
  document.getElementById('import-textarea').value = '';
  document.getElementById('import-word-count').textContent = '0 words · 0 characters';
  document.getElementById('import-paste-hint').textContent = 'Paste text above, then click Start';
  document.getElementById('import-typing-input').value = '';
  document.getElementById('import-wpm').textContent = '0';
  document.getElementById('import-acc').textContent = '100%';
  document.getElementById('import-progress').textContent = '0%';
  document.getElementById('import-errors').textContent = '0';
  state.importActive = false;
  state.importOffset = 0;
  state.importCommitted = [];
  state.importText = '';
  showImportIdle();
}

function restartImport() {
  if(!state.importText) return;
  stopElapsedTimer('import');
  state.importPos = 0;
  state.importErrors = 0;
  state.importOffset = 0;
  state.importCommitted = [];
  state.importActive = false;
  state.importStartTime = null;
  state.importTypedChars = [];
  document.getElementById('import-wpm').textContent = '0';
  document.getElementById('import-acc').textContent = '100%';
  document.getElementById('import-progress').textContent = '0%';
  document.getElementById('import-errors').textContent = '0';
  resetElapsedTimer('import-elapsed', 'import-timer-chip');
  renderImportText(state.importText, 0);
  const inp = document.getElementById('import-typing-input');
  inp.value = '';
  inp.disabled = true;

  showTypingCountdown(() => {
    state.importActive = true;
    inp.disabled = false;
    inp.focus();
  });
}
  toast('Restarted ↺');


function startImportTest() {
  const text = document.getElementById('import-textarea').value.trim();
  if(text.length < 50) { toast('Text must be at least 50 characters','error'); return; }
  state.importText = text;
  state.importPos = 0;
  state.importErrors = 0;
  state.importOffset = 0;
  state.importCommitted = [];
  state.importActive = false; // will activate after countdown
  state.importStartTime = null;
  state.importTypedChars = [];
  const stats = getUserStats();
  stats.importUsed = (stats.importUsed||0)+1;
  saveUserStats(stats);
  checkAchievements(stats);
  // Show typing view but disable input until countdown ends
  showImportActive();
  renderImportText(text, 0);
  document.getElementById('import-wpm').textContent = '0';
  document.getElementById('import-acc').textContent = '100%';
  document.getElementById('import-progress').textContent = '0%';
  document.getElementById('import-errors').textContent = '0';
  resetElapsedTimer('import-elapsed', 'import-timer-chip');
  document.getElementById('import-typing-input').value = '';
  document.getElementById('import-typing-input').disabled = true;

  showTypingCountdown(() => {
    state.importActive = true;
    document.getElementById('import-typing-input').disabled = false;
    document.getElementById('import-typing-input').focus();
  });
}

function focusImportTyping() {
  if(!state.importActive) return;
  document.getElementById('import-typing-input').focus();
}

function renderImportText(text, pos) {
  const zone = document.getElementById('import-typing-zone');
  const chars = state.importTypedChars || [];
  let html = '';
  for(let i=0;i<text.length;i++){
    let cls='word-char';
    if(i<pos){ cls+=chars[i]===text[i]?' correct':' wrong'; }
    else if(i===pos){ cls+=' current'; }
    // Regular space so words break naturally across lines
    const ch = text[i]===' '?' ':text[i].replace(/</g,'&lt;');
    html+=`<span class="${cls}">${ch}</span>`;
  }
  zone.innerHTML = html;
  const cur = zone.querySelector('.current');
  if(cur) cur.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function handleImportInput(e) {
  if(!state.importActive) return;
  if(!state.importCommitted) state.importCommitted = [];
  const val = e.target.value;
  const text = state.importText;
  if(!state.importStartTime && val.length>0) {
    state.importStartTime = Date.now();
    startElapsedTimer('import', 'import-elapsed', 'import-timer-chip');
  }

  const fullTyped = state.importCommitted.join('') + val;
  state.importTypedChars = fullTyped.split('');
  state.importPos = Math.min(fullTyped.length, text.length);
  state.importErrors = state.importTypedChars.filter((c,i)=>i<text.length&&c!==text[i]).length;

  renderImportText(text, state.importPos);

  const elapsed = (Date.now()-state.importStartTime)/1000/60;
  const wpm = elapsed>0 ? Math.max(0,Math.round(((state.importPos-state.importErrors)/5)/elapsed)) : 0;
  const acc = state.importPos>0 ? Math.round((1-state.importErrors/state.importPos)*100) : 100;
  const pct = Math.round((state.importPos/text.length)*100);

  document.getElementById('import-wpm').textContent = wpm;
  document.getElementById('import-acc').textContent = acc+'%';
  document.getElementById('import-progress').textContent = pct+'%';
  document.getElementById('import-errors').textContent = state.importErrors;

  if(val.endsWith(' ')) {
    for(const ch of val) state.importCommitted.push(ch);
    e.target.value = '';
  }

  if(fullTyped.length >= text.length) {
    e.target.value = '';
    state.importActive = false;
    stopElapsedTimer('import');
    const chip = document.getElementById('import-timer-chip');
    if(chip) chip.className = 'typing-timer-chip';
    toast(`Import complete! ${wpm} WPM · ${acc}% accuracy ✅`, 'success', 3500);
  }
}

// ====== PRACTICE TEXTS ======
function switchPracticeCategory(cat) {
  state.practiceCategory = cat;
  document.querySelectorAll('#practice-category-group .toggle-pill').forEach(b=>b.classList.toggle('active',b.dataset.val===cat));
  renderPracticeCards();
}

function renderPracticeCards() {
  const cat = state.practiceCategory;
  const grid = document.getElementById('practice-cards-grid');
  let texts = {};
  if(cat==='bible') texts = BIBLE_TEXTS;
  else if(cat==='hymns') texts = HYMNS_TEXTS;
  else texts = HISTORY_TEXTS;

  const icons = {
    bible: '📖', hymns: '🎵',
    "Christian Martyrs":"⛪","Scientific Discoveries":"🔬","Age of Exploration":"⛵","Revolutionary Inventions":"⚙️","Independence Movements":"🗽","Renaissance Era":"🎨","Ancient Civilizations":"🏛️","World Wars":"🌍","Civil Rights Movements":"✊","Industrial Revolution":"🏭","Space Exploration":"🚀","Medical Breakthroughs":"💊","African Kingdoms":"👑","Asian Empires":"🐉","Cold War Era":"❄️","Plagues":"🦠","AI":"🤖"
  };

  grid.innerHTML = Object.keys(texts).map(title => {
    const words = texts[title].split(' ').length;
    const icon = icons[title] || (cat==='bible'?'📖':'🎵');
    return `<div class="practice-card" onclick="openPractice('${cat}','${title.replace(/'/g,"\\'")}')">
      <div class="practice-card-icon">${icon}</div>
      <div class="practice-card-name">${title}</div>
      <div class="practice-card-count">${words} words</div>
    </div>`;
  }).join('');
}

function openPractice(cat, title) {
  const texts = cat==='bible'?BIBLE_TEXTS:cat==='hymns'?HYMNS_TEXTS:HISTORY_TEXTS;
  const text = texts[title];
  if(!text) return;
  state.practiceCategory = cat;
  state.currentPracticeText = text;
  state.practicePos = 0;
  state.practiceErrors = 0;
  state.practiceTypedChars = [];
  state.practiceStartTime = null;
  state.practiceActive = false; // activated after countdown
  state.practiceOffset = 0;
  state.practiceCommitted = [];
  document.getElementById('practice-selection-view').style.display='none';
  document.getElementById('practice-typing-panel').style.display='block';
  document.getElementById('practice-active-title').textContent = title;
  document.getElementById('practice-active-sub').textContent = cat.charAt(0).toUpperCase()+cat.slice(1)+' · '+text.split(' ').length+' words';
  renderPracticeText(text, 0);
  const fill = document.getElementById('practice-progress-fill');
  if(fill) fill.style.width='0%';
  document.getElementById('practice-wpm').textContent='0';
  document.getElementById('practice-acc').textContent='100%';
  document.getElementById('practice-progress').textContent='0%';
  resetElapsedTimer('practice-elapsed','practice-timer-chip');
  const v = document.getElementById('practice-input-visible');
  if(v) { v.value=''; v.disabled = true; }

  showTypingCountdown(() => {
    state.practiceActive = true;
    const inp = document.getElementById('practice-input-visible');
    if(inp) { inp.disabled = false; inp.focus(); }
  });
}

function renderPracticeText(text, pos) {
  const disp = document.getElementById('practice-word-display');
  const chars = state.practiceTypedChars||[];
  let html='';
  for(let i=0;i<text.length;i++){
    let cls='word-char';
    if(i<pos){cls+=chars[i]===text[i]?' correct':' wrong';}
    else if(i===pos){cls+=' current';}
    html+=`<span class="${cls}">${text[i]===' '?'&nbsp;':text[i].replace(/</g,'&lt;')}</span>`;
  }
  disp.innerHTML=html;
}

document.addEventListener('DOMContentLoaded',()=>{
  // Practice — use the visible input as the driver
  const pVisible = document.getElementById('practice-input-visible');
  if(pVisible) {
    pVisible.addEventListener('input', e => {
      if(!state.practiceActive) return;
      const val = e.target.value;
      const text = state.currentPracticeText;
      if(!state.practiceCommitted) state.practiceCommitted = [];
      if(!state.practiceStartTime && val.length>0) {
        state.practiceStartTime = Date.now();
        startElapsedTimer('practice', 'practice-elapsed', 'practice-timer-chip');
      }

      const fullTyped = state.practiceCommitted.join('') + val;
      state.practiceTypedChars = fullTyped.split('');
      state.practicePos = Math.min(fullTyped.length, text.length);
      state.practiceErrors = state.practiceTypedChars.filter((c,i)=>i<text.length&&c!==text[i]).length;

      renderPracticeText(text, state.practicePos);

      const elapsed = (Date.now()-state.practiceStartTime)/1000/60;
      const wpm = elapsed>0 ? Math.max(0,Math.round(((state.practicePos-state.practiceErrors)/5)/elapsed)) : 0;
      const acc = state.practicePos>0 ? Math.round((1-state.practiceErrors/state.practicePos)*100) : 100;
      const pct = Math.round((state.practicePos/text.length)*100);

      document.getElementById('practice-wpm').textContent = wpm;
      document.getElementById('practice-acc').textContent = acc+'%';
      document.getElementById('practice-progress').textContent = pct+'%';
      const fill = document.getElementById('practice-progress-fill');
      if(fill) fill.style.width = pct+'%';

      if(val.endsWith(' ')) {
        for(const ch of val) state.practiceCommitted.push(ch);
        e.target.value = '';
      }

      if(fullTyped.length >= text.length) {
        e.target.value = '';
        state.practiceActive = false;
        stopElapsedTimer('practice');
        const chip = document.getElementById('practice-timer-chip');
        if(chip) chip.className = 'typing-timer-chip';
        const stats = getUserStats();
        if(state.practiceCategory==='bible') stats.bibleCompleted=(stats.bibleCompleted||0)+1;
        else if(state.practiceCategory==='hymns') stats.hymnsCompleted=(stats.hymnsCompleted||0)+1;
        else stats.historyCompleted=(stats.historyCompleted||0)+1;
        saveUserStats(stats); checkAchievements(stats);
        toast('Practice complete! 🎉','success');
      }
    });
    pVisible.addEventListener('keydown', e => {
      if(e.key==='Escape'){
        state.practiceActive=false;
        stopElapsedTimer('practice');
        resetElapsedTimer('practice-elapsed','practice-timer-chip');
        toast('Practice stopped');
      }
    });
  }
});

function focusPracticeTyping() {
  const v = document.getElementById('practice-input-visible');
  if(v && state.practiceActive) v.focus();
}
function closePracticePanel() {
  document.getElementById('practice-selection-view').style.display = '';
  document.getElementById('practice-typing-panel').style.display = 'none';
  state.practiceActive = false;
  state.practiceOffset = 0;
}
function restartPractice() {
  stopElapsedTimer('practice');
  state.practicePos=0; state.practiceErrors=0; state.practiceTypedChars=[];
  state.practiceStartTime=null; state.practiceActive=false;
  state.practiceOffset=0; state.practiceCommitted=[];
  renderPracticeText(state.currentPracticeText, 0);
  const v = document.getElementById('practice-input-visible');
  if(v) { v.value=''; v.disabled=true; }
  const fill = document.getElementById('practice-progress-fill');
  if(fill) fill.style.width='0%';
  document.getElementById('practice-wpm').textContent='0';
  document.getElementById('practice-acc').textContent='100%';
  document.getElementById('practice-progress').textContent='0%';
  resetElapsedTimer('practice-elapsed','practice-timer-chip');

  showTypingCountdown(() => {
    state.practiceActive = true;
    const inp = document.getElementById('practice-input-visible');
    if(inp) { inp.disabled=false; inp.focus(); }
  });
}


// ====== SETTINGS ======
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  DB.set('theme', theme);
  document.querySelectorAll('.theme-swatch').forEach(s=>s.classList.toggle('active',s.dataset.theme===theme));
  toast('Theme changed!');
}
// Font size → charW / ROW_H map for accurate row wrapping
const FONT_SIZE_MAP = {
  sm: { fontSize: '1.1rem',  charW: 10.6, rowH: 40 },
  md: { fontSize: '1.35rem', charW: 13.0, rowH: 48 },
  lg: { fontSize: '1.6rem',  charW: 15.4, rowH: 56 },
};
let currentFontKey = 'md'; // default

function setFontSize(key, btn) {
  currentFontKey = key;
  // Set attribute on body — CSS selectors handle all visual changes instantly
  document.body.setAttribute('data-fontsize', key);
  // Active button highlight
  document.querySelectorAll('#font-size-group .toggle-pill').forEach(b => b.classList.toggle('active', b === btn));
  DB.set('fontSize', key);
  // Re-render text with new charW so row-wrapping is correct
  if(state.testText) {
    try { renderText(state.testText, state.testPos || 0); } catch(e) {}
  }
  toast('Font size updated');
}

function setCaretStyle(style, btn) {
  document.body.setAttribute('data-caret', style);
  document.querySelectorAll('#caret-style-group .toggle-pill').forEach(b => b.classList.toggle('active', b === btn));
  DB.set('caretStyle', style);
  // Re-render so word-highlight class is applied/removed
  if(state.testText) {
    try { renderText(state.testText, state.testPos || 0); } catch(e) {}
  }
}

// ====== LANGUAGE / i18n ======
const I18N = {
  en: { nav_practice:'Practice', nav_lessons:'Lessons', nav_achievements:'Achievements', nav_compete:'Compete', nav_import:'Import Text', nav_practice_texts:'Practice Texts', nav_settings:'Settings', settings_title:'Settings', settings_sub:'Control tower — customize everything', appearance:'Appearance', theme_label:'Theme', theme_sub:'Choose your visual style', caret_label:'Caret Style', caret_sub:'How the typing cursor appears', typing_behaviour:'Typing Behaviour', sound_label:'Sound Effects', sound_sub:'Keyboard click sounds', error_sound_label:'Error Sound', error_sound_sub:'Beep on incorrect keystroke', live_wpm_label:'Live WPM', live_wpm_sub:'Show WPM as you type', smooth_caret_label:'Smooth Caret', smooth_caret_sub:'Animate cursor movement', highlight_errors_label:'Highlight Errors', highlight_errors_sub:'Mark incorrect characters', auto_start_label:'Auto Start Timer', auto_start_sub:'Timer starts on first keystroke', content_options:'Test Content Options', punctuation_label:'Include Punctuation', punctuation_sub:'Add commas, periods, apostrophes', numbers_label:'Include Numbers', numbers_sub:'Sprinkle numbers into the word pool', symbols_label:'Include Symbols', symbols_sub:'Add @, #, $, % and other symbols', data_title:'Data', reset_label:'Reset Statistics', reset_sub:'Clear all personal records', reset_btn:'Reset', export_label:'Export Data', export_sub:'Download your stats as JSON', export_btn:'Export', language_label:'Interface Language', language_sub:'Changes all UI labels and navigation text', start_typing:'Start typing here...', new_text:'↺ New Text', sign_in:'🔑 Sign In', sign_out:'↩ Sign Out' },
  fr: { nav_practice:'Pratique', nav_lessons:'Leçons', nav_achievements:'Succès', nav_compete:'Compétition', nav_import:'Importer', nav_practice_texts:'Textes', nav_settings:'Paramètres', settings_title:'Paramètres', settings_sub:'Tour de contrôle — tout personnaliser', appearance:'Apparence', theme_label:'Thème', theme_sub:'Choisissez votre style visuel', caret_label:'Style de curseur', caret_sub:'Apparence du curseur de saisie', typing_behaviour:'Comportement de frappe', sound_label:'Effets sonores', sound_sub:'Sons de clavier', error_sound_label:'Son d\'erreur', error_sound_sub:'Bip sur frappe incorrecte', live_wpm_label:'MPM en direct', live_wpm_sub:'Afficher les MPM pendant la frappe', smooth_caret_label:'Curseur fluide', smooth_caret_sub:'Animer le mouvement du curseur', highlight_errors_label:'Surligner les erreurs', highlight_errors_sub:'Marquer les caractères incorrects', auto_start_label:'Démarrage auto', auto_start_sub:'Le minuteur démarre à la première touche', content_options:'Options de contenu', punctuation_label:'Ponctuation', punctuation_sub:'Ajouter virgules, points, apostrophes', numbers_label:'Chiffres', numbers_sub:'Ajouter des chiffres', symbols_label:'Symboles', symbols_sub:'Ajouter @, #, $, % etc.', data_title:'Données', reset_label:'Réinitialiser', reset_sub:'Effacer tous les records', reset_btn:'Réinitialiser', export_label:'Exporter', export_sub:'Télécharger les stats en JSON', export_btn:'Exporter', language_label:'Langue', language_sub:'Modifie toutes les étiquettes de l\'interface', start_typing:'Commencez à taper...', new_text:'↺ Nouveau', sign_in:'🔑 Se connecter', sign_out:'↩ Déconnexion' },
  es: { nav_practice:'Práctica', nav_lessons:'Lecciones', nav_achievements:'Logros', nav_compete:'Competir', nav_import:'Importar', nav_practice_texts:'Textos', nav_settings:'Ajustes', settings_title:'Ajustes', settings_sub:'Centro de control — personaliza todo', appearance:'Apariencia', theme_label:'Tema', theme_sub:'Elige tu estilo visual', caret_label:'Estilo de cursor', caret_sub:'Apariencia del cursor de escritura', typing_behaviour:'Comportamiento de escritura', sound_label:'Efectos de sonido', sound_sub:'Sonidos de teclado', error_sound_label:'Sonido de error', error_sound_sub:'Pitido en pulsación incorrecta', live_wpm_label:'PPM en vivo', live_wpm_sub:'Mostrar PPM al escribir', smooth_caret_label:'Cursor suave', smooth_caret_sub:'Animar movimiento del cursor', highlight_errors_label:'Resaltar errores', highlight_errors_sub:'Marcar caracteres incorrectos', auto_start_label:'Inicio automático', auto_start_sub:'El temporizador inicia con la primera tecla', content_options:'Opciones de contenido', punctuation_label:'Puntuación', punctuation_sub:'Agregar comas, puntos, apóstrofes', numbers_label:'Números', numbers_sub:'Agregar números al grupo de palabras', symbols_label:'Símbolos', symbols_sub:'Agregar @, #, $, % y otros', data_title:'Datos', reset_label:'Restablecer', reset_sub:'Borrar todos los récords', reset_btn:'Restablecer', export_label:'Exportar', export_sub:'Descargar estadísticas como JSON', export_btn:'Exportar', language_label:'Idioma', language_sub:'Cambia todas las etiquetas de la interfaz', start_typing:'Empieza a escribir...', new_text:'↺ Nuevo', sign_in:'🔑 Iniciar sesión', sign_out:'↩ Cerrar sesión' },
  de: { nav_practice:'Übung', nav_lessons:'Lektionen', nav_achievements:'Erfolge', nav_compete:'Wettbewerb', nav_import:'Importieren', nav_practice_texts:'Texte', nav_settings:'Einstellungen', settings_title:'Einstellungen', settings_sub:'Kontrollzentrum — alles anpassen', appearance:'Erscheinungsbild', theme_label:'Design', theme_sub:'Wähle deinen visuellen Stil', caret_label:'Cursor-Stil', caret_sub:'Erscheinungsbild des Tipp-Cursors', typing_behaviour:'Tippverhalten', sound_label:'Soundeffekte', sound_sub:'Tastaturgeräusche', error_sound_label:'Fehlerton', error_sound_sub:'Piepton bei falscher Taste', live_wpm_label:'Live WPM', live_wpm_sub:'WPM beim Tippen anzeigen', smooth_caret_label:'Weicher Cursor', smooth_caret_sub:'Cursorbewegung animieren', highlight_errors_label:'Fehler hervorheben', highlight_errors_sub:'Falsche Zeichen markieren', auto_start_label:'Auto-Start', auto_start_sub:'Timer startet beim ersten Tastendruck', content_options:'Inhaltsoptionen', punctuation_label:'Satzzeichen', punctuation_sub:'Kommas, Punkte, Apostrophe hinzufügen', numbers_label:'Zahlen', numbers_sub:'Zahlen einstreuen', symbols_label:'Symbole', symbols_sub:'@, #, $, % hinzufügen', data_title:'Daten', reset_label:'Statistiken zurücksetzen', reset_sub:'Alle Rekorde löschen', reset_btn:'Zurücksetzen', export_label:'Exportieren', export_sub:'Stats als JSON herunterladen', export_btn:'Exportieren', language_label:'Sprache', language_sub:'Ändert alle UI-Beschriftungen', start_typing:'Hier tippen...', new_text:'↺ Neu', sign_in:'🔑 Anmelden', sign_out:'↩ Abmelden' },
  pt: { nav_practice:'Prática', nav_lessons:'Lições', nav_achievements:'Conquistas', nav_compete:'Competir', nav_import:'Importar', nav_practice_texts:'Textos', nav_settings:'Configurações', settings_title:'Configurações', settings_sub:'Central de controle — personalize tudo', appearance:'Aparência', theme_label:'Tema', theme_sub:'Escolha seu estilo visual', caret_label:'Estilo do cursor', caret_sub:'Aparência do cursor de digitação', typing_behaviour:'Comportamento de digitação', sound_label:'Efeitos sonoros', sound_sub:'Sons de teclado', error_sound_label:'Som de erro', error_sound_sub:'Bipe em tecla incorreta', live_wpm_label:'PPM ao vivo', live_wpm_sub:'Mostrar PPM ao digitar', smooth_caret_label:'Cursor suave', smooth_caret_sub:'Animar movimento do cursor', highlight_errors_label:'Destacar erros', highlight_errors_sub:'Marcar caracteres incorretos', auto_start_label:'Início automático', auto_start_sub:'Temporizador inicia no primeiro toque', content_options:'Opções de conteúdo', punctuation_label:'Pontuação', punctuation_sub:'Adicionar vírgulas, pontos, apóstrofos', numbers_label:'Números', numbers_sub:'Incluir números', symbols_label:'Símbolos', symbols_sub:'Adicionar @, #, $, %', data_title:'Dados', reset_label:'Redefinir', reset_sub:'Limpar todos os recordes', reset_btn:'Redefinir', export_label:'Exportar', export_sub:'Baixar estatísticas como JSON', export_btn:'Exportar', language_label:'Idioma', language_sub:'Altera todos os rótulos da interface', start_typing:'Comece a digitar...', new_text:'↺ Novo', sign_in:'🔑 Entrar', sign_out:'↩ Sair' },
  sw: { nav_practice:'Mazoezi', nav_lessons:'Masomo', nav_achievements:'Mafanikio', nav_compete:'Shindano', nav_import:'Ingiza', nav_practice_texts:'Maandishi', nav_settings:'Mipangilio', settings_title:'Mipangilio', settings_sub:'Jaza kila kitu unavyotaka', appearance:'Mwonekano', theme_label:'Mandhari', theme_sub:'Chagua mtindo wako wa kuona', caret_label:'Mtindo wa mshale', caret_sub:'Jinsi mshale wa kuandika unavyoonekana', typing_behaviour:'Tabia ya kuandika', sound_label:'Sauti za kitufe', sound_sub:'Sauti za kibodi', error_sound_label:'Sauti ya kosa', error_sound_sub:'Mlio kwa kitufe kibaya', live_wpm_label:'Maneno kwa dakika', live_wpm_sub:'Onyesha maneno kwa dakika ukiandika', smooth_caret_label:'Mshale laini', smooth_caret_sub:'Animeshwa mshale', highlight_errors_label:'Angazia makosa', highlight_errors_sub:'Weka alama herufi mbaya', auto_start_label:'Anza kiotomatiki', auto_start_sub:'Saa inaanza kwa kitufe cha kwanza', content_options:'Chaguzi za maudhui', punctuation_label:'Alama za uakifishaji', punctuation_sub:'Ongeza alama za kuakifisha', numbers_label:'Nambari', numbers_sub:'Ongeza nambari', symbols_label:'Alama', symbols_sub:'Ongeza @, #, $, %', data_title:'Data', reset_label:'Rejesha', reset_sub:'Futa rekodi zote', reset_btn:'Rejesha', export_label:'Hamisha', export_sub:'Pakua takwimu kama JSON', export_btn:'Hamisha', language_label:'Lugha', language_sub:'Hubadilisha lebo zote za kiolesura', start_typing:'Anza kuandika hapa...', new_text:'↺ Mpya', sign_in:'🔑 Ingia', sign_out:'↩ Toka' },
};
// Fallback to English for untranslated languages
['zh','ar','hi','yo','ha','ig','am','zu','ja','ko','ru','it','pl'].forEach(l => { I18N[l] = I18N[l] || {...I18N.en}; });

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  DB.set('language', lang);
  applyLanguage(lang);
  // Show preview
  const preview = document.getElementById('lang-preview');
  if(preview) {
    const t = I18N[lang] || I18N.en;
    preview.style.display = 'block';
    preview.innerHTML = `<strong>Preview:</strong> ${t.nav_practice} · ${t.nav_lessons} · ${t.nav_achievements} · ${t.start_typing}`;
  }
}

function applyLanguage(lang) {
  const t = I18N[lang] || I18N.en;

  // Sidebar nav buttons
  const navMap = {
    dashboard: t.nav_practice,
    lessons:   t.nav_lessons,
    achievements: t.nav_achievements,
    competition:  t.nav_compete,
    import:    t.nav_import,
    practice:  t.nav_practice_texts,
    settings:  t.nav_settings
  };
  document.querySelectorAll('.nav-btn').forEach(b => {
    const match = (b.getAttribute('onclick') || '').match(/navigate\('(\w+)'\)/);
    if(match && navMap[match[1]]) {
      const icon = b.querySelector('.nav-icon');
      b.textContent = ' ' + navMap[match[1]];
      if(icon) b.prepend(icon);
    }
  });

  // All data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(t[key]) {
      if(el.tagName === 'INPUT' && el.placeholder !== undefined) {
        el.placeholder = t[key];
      } else {
        // preserve child elements (spans etc)
        const spans = el.querySelectorAll('span');
        if(spans.length && key === 'settings_title') {
          el.childNodes[0].textContent = '⚙️ ';
          spans[0].textContent = t[key].replace('⚙️ ', '');
        } else {
          el.textContent = t[key];
        }
      }
    }
  });

  // Typing input placeholder
  const inp = document.getElementById('typing-input');
  if(inp) inp.placeholder = t.start_typing || 'Start typing here...';

  // New Text button
  document.querySelectorAll('[onclick="regenerateTest()"]').forEach(b => { b.textContent = t.new_text || '↺ New Text'; });

  // Auth buttons
  const loginBtn = document.querySelector('.btn-login');
  if(loginBtn) loginBtn.textContent = t.sign_in || '🔑 Sign In';
  const logoutBtn = document.querySelector('.btn-logout');
  if(logoutBtn) logoutBtn.textContent = t.sign_out || '↩ Sign Out';

  // html lang attribute
  document.documentElement.lang = lang;
  // RTL for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// ====== DISPLAY OPTIONS ======
function setUIScale(key, btn) {
  document.body.setAttribute('data-ui-scale', key);
  document.querySelectorAll('#ui-scale-group .toggle-pill').forEach(b => b.classList.toggle('active', b === btn));
  DB.set('uiScale', key);
  toast('UI scale updated');
}
function setDensity(key, btn) {
  document.body.setAttribute('data-density', key);
  document.querySelectorAll('#density-group .toggle-pill').forEach(b => b.classList.toggle('active', b === btn));
  DB.set('density', key);
  toast('Page density updated');
}
function setUIFont(key, btn) {
  document.body.setAttribute('data-ui-font', key);
  document.querySelectorAll('#ui-font-group .toggle-pill').forEach(b => b.classList.toggle('active', b === btn));
  DB.set('uiFont', key);
  toast('Interface font updated');
}
// Live settings cache — avoids DB hit on every keystroke
let _settingsCache = null;
function getSettingsCache() {
  if (!_settingsCache) _settingsCache = DB.get('settings', {});
  return _settingsCache;
}
function getSettingLive(key, defaultVal = true) {
  const s = getSettingsCache();
  return s[key] !== undefined ? s[key] : defaultVal;
}

function saveSetting(key, val) {
  const s = DB.get('settings', {});
  s[key] = val;
  DB.set('settings', s);
  _settingsCache = s; // refresh cache
  applySettingLive(key, val);
}

function applyWpmVisibility(show) {
  const wpmEl   = document.getElementById('live-wpm');
  const wpmItem = wpmEl?.closest('.stat-item');
  if (!wpmItem) return;
  wpmItem.style.display = show ? '' : 'none';
  // When hidden, zero out so no stale value shows if re-enabled later
  if (!show && wpmEl) wpmEl.textContent = '0';
}

function applySettingLive(key, val) {
  switch(key) {
    case 'liveWpm': {
      applyWpmVisibility(val);
      break;
    }
    case 'highlightErrors': {
      // Re-render text so correct/wrong coloring toggles
      if(state.testText) { try { renderText(state.testText, state.testPos || 0); } catch(e){} }
      break;
    }
    case 'smoothCaret': {
      // Smooth caret: toggle CSS transition on the caret position
      document.documentElement.style.setProperty(
        '--caret-transition',
        val ? 'left .06s ease, top .06s ease' : 'none'
      );
      break;
    }
    case 'autoStart': {
      // Handled at timer start — no visual change needed immediately
      break;
    }
    case 'sound':
    case 'errorSound': {
      // No immediate visual change; checked during typing
      break;
    }
  }
  toast(`${key.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase())} ${val ? 'enabled' : 'disabled'}`);
}
function loadSettings() {
  _settingsCache = null; // force fresh read
  const s = DB.get('settings', {});
  ['sound','errorSound','liveWpm','smoothCaret','highlightErrors','autoStart'].forEach(k=>{
    const el = document.getElementById('setting-'+k.replace(/([A-Z])/g,'-$1').toLowerCase());
    if(el) el.checked = s[k] !== undefined ? s[k] : true;
  });
  // Apply liveWpm visibility right away so it doesn't flicker on first load
  applyWpmVisibility(s.liveWpm !== undefined ? s.liveWpm : true);
  const theme = DB.get('theme', 'dark');
  setTheme(theme);

  // Font size
  const savedKey = DB.get('fontSize', 'md');
  currentFontKey = savedKey;
  document.body.setAttribute('data-fontsize', savedKey);
  const btn = document.querySelector(`#font-size-group [data-val="${savedKey}"]`);
  if(btn) document.querySelectorAll('#font-size-group .toggle-pill').forEach(b => b.classList.toggle('active', b === btn));

  // Caret style
  const savedCaret = DB.get('caretStyle', 'line');
  document.body.setAttribute('data-caret', savedCaret);
  const caretBtn = document.querySelector(`#caret-style-group [data-val="${savedCaret}"]`);
  if(caretBtn) document.querySelectorAll('#caret-style-group .toggle-pill').forEach(b => b.classList.toggle('active', b === caretBtn));

  // UI Scale
  const savedScale = DB.get('uiScale', 'normal');
  document.body.setAttribute('data-ui-scale', savedScale);
  const scaleBtn = document.querySelector(`#ui-scale-group [data-val="${savedScale}"]`);
  if(scaleBtn) document.querySelectorAll('#ui-scale-group .toggle-pill').forEach(b => b.classList.toggle('active', b === scaleBtn));

  // Density
  const savedDensity = DB.get('density', 'comfortable');
  document.body.setAttribute('data-density', savedDensity);
  const densBtn = document.querySelector(`#density-group [data-val="${savedDensity}"]`);
  if(densBtn) document.querySelectorAll('#density-group .toggle-pill').forEach(b => b.classList.toggle('active', b === densBtn));

  // UI Font
  const savedUIFont = DB.get('uiFont', 'sora');
  document.body.setAttribute('data-ui-font', savedUIFont);
  const fontBtn = document.querySelector(`#ui-font-group [data-val="${savedUIFont}"]`);
  if(fontBtn) document.querySelectorAll('#ui-font-group .toggle-pill').forEach(b => b.classList.toggle('active', b === fontBtn));

  // Language
  const savedLang = DB.get('language', 'en');
  currentLang = savedLang;
  const langSel = document.getElementById('lang-select');
  if(langSel) langSel.value = savedLang;
  if(savedLang !== 'en') applyLanguage(savedLang);
}
function resetStats() {
  if(!confirm('Reset all statistics? This cannot be undone.'))return;
  saveUserStats(defaultStats());
  DB.del('pbs');
  updatePBDisplay();
  toast('Statistics reset','success');
}
function exportData() {
  const data={stats:getUserStats(),leaderboard:DB.get('leaderboard',[]),settings:DB.get('settings',{})};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='typecraft_data.json';a.click();
  toast('Data exported! ✅','success');
}

// ====== SOUND ======
let audioCtx;
function getAudioCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}
function playClickSound(){try{const ctx=getAudioCtx();const o=ctx.createOscillator();const g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.value=600;g.gain.setValueAtTime(.05,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.05);o.start();o.stop(ctx.currentTime+.05);}catch(e){}}
function playErrorSound(){try{const ctx=getAudioCtx();const o=ctx.createOscillator();const g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sawtooth';o.frequency.value=200;g.gain.setValueAtTime(.08,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.08);o.start();o.stop(ctx.currentTime+.08);}catch(e){}}

// ====== INIT ======
window.addEventListener('DOMContentLoaded', () => {
  try {
    // Restore user
    const savedUser = DB.get('currentUser');
    if(savedUser) { const users=DB.get('users',{}); if(users[savedUser]){ state.user=savedUser; }}
    renderUserArea();
    updateGuestBanner();
    loadSettings();
    initToggleGroups();
    renderLeaderboard();
    renderPracticeCards();
    updateTopBar('Practice', 'Typing');

    // Seed demo competition result data (only if not already seeded)
    if(!DB.get('comp_results_seeded')) {
      const seedResults = {
        s1: { TypeMaster_GH:{wpm:187,acc:99,progress:100,isBot:false,ts:Date.now()-7200000}, SpeedDemon99:{wpm:172,acc:98,progress:100,isBot:false,ts:Date.now()-7100000}, KeyWizard:{wpm:148,acc:97,progress:100,isBot:false,ts:Date.now()-7000000} },
        s2: { FastFingers_Accra:{wpm:95,acc:97,progress:100,isBot:false,ts:Date.now()-3600000} },
        s3: { AccuracyKing:{wpm:158,acc:99,progress:100,isBot:false,ts:Date.now()-90000000}, NightTyper:{wpm:128,acc:96,progress:100,isBot:false,ts:Date.now()-89000000}, WordWarrior:{wpm:113,acc:95,progress:100,isBot:false,ts:Date.now()-88000000}, SwiftKeys:{wpm:105,acc:94,progress:100,isBot:false,ts:Date.now()-87000000} },
        s4: { NightTyper:{wpm:128,acc:96,progress:100,isBot:false,ts:Date.now()-3600000}, SwiftKeys:{wpm:105,acc:94,progress:100,isBot:false,ts:Date.now()-3500000} }
      };
      Object.entries(seedResults).forEach(([cid, results]) => {
        if(!DB.get('comp_results_' + cid)) DB.set('comp_results_' + cid, results);
      });
      DB.set('comp_results_seeded', true);
    }
  } catch(e) { console.warn('Init error:', e); }

  // Dismiss loading screen first so layout is computed, THEN render text
  const loading = document.getElementById('loading');
  if(loading) {
    loading.classList.add('fade-out');
    setTimeout(() => {
      loading.remove();
      try {
        regenerateTest();
        document.getElementById('typing-input').focus();
      } catch(e) { console.warn('regenerateTest error:', e); }
    }, 500);
  }
});

function updateTopBar(title, sub) {
  const el = document.getElementById('top-bar-title');
  if(el) el.innerHTML = `${title} <span>${sub || ''}</span>`;
  // Update browser tab title
  const pageTitles = {
    'Practice':          'Practice Typing',
    'Typing':            sub === 'Lessons' ? 'Lessons' : sub === 'Competition' ? 'Competition' : 'TypeCraft',
    'My':                'Achievements',
    'Import':            'Import Text',
    'Sacred & Historical': 'Practice Texts',
    'App':               'Settings'
  };
  const friendly = pageTitles[title] || (sub ? `${title} ${sub}` : title);
  document.title = `${friendly} — SoftFingers`;
}
