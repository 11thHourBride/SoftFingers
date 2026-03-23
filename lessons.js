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
