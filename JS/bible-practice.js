// Enhanced Bible Practice with Chapter Selection and Audio Mode
// This file should replace or be merged with JS/bible-practice.js

const BIBLE_BOOKS = {
  old: [
    { name: "Genesis", chapters: 50, testament: "old" },
    { name: "Exodus", chapters: 40, testament: "old" },
    { name: "Leviticus", chapters: 27, testament: "old" },
    { name: "Numbers", chapters: 36, testament: "old" },
    { name: "Deuteronomy", chapters: 34, testament: "old" },
    { name: "Joshua", chapters: 24, testament: "old" },
    { name: "Judges", chapters: 21, testament: "old" },
    { name: "Ruth", chapters: 4, testament: "old" },
    { name: "1 Samuel", chapters: 31, testament: "old" },
    { name: "2 Samuel", chapters: 24, testament: "old" },
    { name: "1 Kings", chapters: 22, testament: "old" },
    { name: "2 Kings", chapters: 25, testament: "old" },
    { name: "1 Chronicles", chapters: 29, testament: "old" },
    { name: "2 Chronicles", chapters: 36, testament: "old" },
    { name: "Ezra", chapters: 10, testament: "old" },
    { name: "Nehemiah", chapters: 13, testament: "old" },
    { name: "Esther", chapters: 10, testament: "old" },
    { name: "Job", chapters: 42, testament: "old" },
    { name: "Psalms", chapters: 150, testament: "old" },
    { name: "Proverbs", chapters: 31, testament: "old" }
  ],
  new: [
    { name: "Matthew", chapters: 28, testament: "new" },
    { name: "Mark", chapters: 16, testament: "new" },
    { name: "Luke", chapters: 24, testament: "new" },
    { name: "John", chapters: 21, testament: "new" },
    { name: "Acts", chapters: 28, testament: "new" },
    { name: "Romans", chapters: 16, testament: "new" },
    { name: "1 Corinthians", chapters: 16, testament: "new" },
    { name: "2 Corinthians", chapters: 13, testament: "new" },
    { name: "Galatians", chapters: 6, testament: "new" },
    { name: "Ephesians", chapters: 6, testament: "new" },
    { name: "Philippians", chapters: 4, testament: "new" },
    { name: "Colossians", chapters: 4, testament: "new" },
    { name: "1 Thessalonians", chapters: 5, testament: "new" },
    { name: "2 Thessalonians", chapters: 3, testament: "new" },
    { name: "1 Timothy", chapters: 6, testament: "new" },
    { name: "2 Timothy", chapters: 4, testament: "new" },
    { name: "Titus", chapters: 3, testament: "new" },
    { name: "Philemon", chapters: 1, testament: "new" },
    { name: "Hebrews", chapters: 13, testament: "new" },
    { name: "James", chapters: 5, testament: "new" },
    { name: "1 Peter", chapters: 5, testament: "new" },
    { name: "2 Peter", chapters: 3, testament: "new" },
    { name: "1 John", chapters: 5, testament: "new" },
    { name: "2 John", chapters: 1, testament: "new" },
    { name: "3 John", chapters: 1, testament: "new" },
    { name: "Jude", chapters: 1, testament: "new" },
    { name: "Revelation", chapters: 22, testament: "new" }
  ]
};

// Sample verses for demonstration (In production, you'd fetch from Bible API)
// Each chapter has multiple verses
const SAMPLE_VERSES = {
   "Genesis:1": [
          "In the beginning God created the heaven and the earth.",
          "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
          "And God said, Let there be light: and there was light.",
          "And God saw the light, that it was good: and God divided the light from the darkness.",
          "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
          "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.",
          "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.",
          "And God called the firmament Heaven. And the evening and the morning were the second day.",
        "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
        "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.",
        "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
        "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
        "And the evening and the morning were the third day.",
        "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:",
        "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.",
        "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.",
        "And God set them in the firmament of the heaven to give light upon the earth,",
        "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.",
        "And the evening and the morning were the fourth day.",
        "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.",
        "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
        "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.",
        "And the evening and the morning were the fifth day.",
        "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
        "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.",
        "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
        "So God created man in his own image, in the image of God created he him; male and female created he them.",
        "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.",
        "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.",
        "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day."
],
        "Genesis:2": [
  "Thus the heavens and the earth were finished, and all the host of them.",
  "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.",
  "And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.",
  "These are the generations of the heavens and of the earth when they were created, in the day that the Lord God made the earth and the heavens,",
  "And every plant of the field before it was in the earth, and every herb of the field before it grew: for the Lord God had not caused it to rain upon the earth, and there was not a man to till the ground.",
  "But there went up a mist from the earth, and watered the whole face of the ground.",
  "And the Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  "And the Lord God planted a garden eastward in Eden; and there he put the man whom he had formed.",
  "And out of the ground made the Lord God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil.",
  "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.",
  "The name of the first is Pison: that is it which compasseth the whole land of Havilah, where there is gold;",
  "And the gold of that land is good: there is bdellium and the onyx stone.",
  "And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia.",
  "And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates.",
  "And the Lord God took the man, and put him into the garden of Eden to dress it and to keep it.",
  "And the Lord God commanded the man, saying, Of every tree of the garden thou mayest freely eat:",
  "But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.",
  "And the Lord God said, It is not good that the man should be alone; I will make him an help meet for him.",
  "And out of the ground the Lord God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.",
  "And Adam gave names to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him.",
  "And the Lord God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof;",
  "And the rib, which the Lord God had taken from man, made he a woman, and brought her unto the man.",
  "And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man.",
  "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
  "And they were both naked, the man and his wife, and were not ashamed."
]
,
       "Genesis:3":[
  "Now the serpent was more subtil than any beast of the field which the Lord God had made. And he said unto the woman, Yea, hath God said, Ye shall not eat of every tree of the garden?",
  "And the woman said unto the serpent, We may eat of the fruit of the trees of the garden:",
  "But of the fruit of the tree which is in the midst of the garden, God hath said, Ye shall not eat of it, neither shall ye touch it, lest ye die.",
  "And the serpent said unto the woman, Ye shall not surely die:",
  "For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.",
  "And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.",
  "And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons.",
  "And they heard the voice of the Lord God walking in the garden in the cool of the day: and Adam and his wife hid themselves from the presence of the Lord God amongst the trees of the garden.",
  "And the Lord God called unto Adam, and said unto him, Where art thou?",
  "And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.",
  "And he said, Who told thee that thou wast naked? Hast thou eaten of the tree, whereof I commanded thee that thou shouldest not eat?",
  "And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat.",
  "And the Lord God said unto the woman, What is this that thou hast done? And the woman said, The serpent beguiled me, and I did eat.",
  "And the Lord God said unto the serpent, Because thou hast done this, thou art cursed above all cattle, and above every beast of the field; upon thy belly shalt thou go, and dust shalt thou eat all the days of thy life:",
  "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.",
  "Unto the woman he said, I will greatly multiply thy sorrow and thy conception; in sorrow thou shalt bring forth children; and thy desire shall be to thy husband, and he shall rule over thee.",
  "And unto Adam he said, Because thou hast hearkened unto the voice of thy wife, and hast eaten of the tree, of which I commanded thee, saying, Thou shalt not eat of it: cursed is the ground for thy sake; in sorrow shalt thou eat of it all the days of thy life;",
  "Thorns also and thistles shall it bring forth to thee; and thou shalt eat the herb of the field;",
  "In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return.",
  "And Adam called his wife's name Eve; because she was the mother of all living.",
  "Unto Adam also and to his wife did the Lord God make coats of skins, and clothed them.",
  "And the Lord God said, Behold, the man is become as one of us, to know good and evil: and now, lest he put forth his hand, and take also of the tree of life, and eat, and live for ever:",
  "Therefore the Lord God sent him forth from the garden of Eden, to till the ground from whence he was taken.",
  "So he drove out the man; and he placed at the east of the garden of Eden Cherubims, and a flaming sword which turned every way, to keep the way of the tree of life."
],
    "Genesis:4":[
  "And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the Lord.",
  "And she again bare his brother Abel. And Abel was a keeper of sheep, but Cain was a tiller of the ground.",
  "And in process of time it came to pass, that Cain brought of the fruit of the ground an offering unto the Lord.",
  "And Abel, he also brought of the firstlings of his flock and of the fat thereof. And the Lord had respect unto Abel and to his offering:",
  "But unto Cain and to his offering he had not respect. And Cain was very wroth, and his countenance fell.",
  "And the Lord said unto Cain, Why art thou wroth? and why is thy countenance fallen?",
  "If thou doest well, shalt thou not be accepted? and if thou doest not well, sin lieth at the door. And unto thee shall be his desire, and thou shalt rule over him.",
  "And Cain talked with Abel his brother: and it came to pass, when they were in the field, that Cain rose up against Abel his brother, and slew him.",
  "And the Lord said unto Cain, Where is Abel thy brother? And he said, I know not: Am I my brother's keeper?",
  "And he said, What hast thou done? the voice of thy brother's blood crieth unto me from the ground.",
  "And now art thou cursed from the earth, which hath opened her mouth to receive thy brother's blood from thy hand;",
  "When thou tillest the ground, it shall not henceforth yield unto thee her strength; a fugitive and a vagabond shalt thou be in the earth.",
  "And Cain said unto the Lord, My punishment is greater than I can bear.",
  "Behold, thou hast driven me out this day from the face of the earth; and from thy face shall I be hid; and I shall be a fugitive and a vagabond in the earth; and it shall come to pass, that every one that findeth me shall slay me.",
  "And the Lord said unto him, Therefore whosoever slayeth Cain, vengeance shall be taken on him sevenfold. And the Lord set a mark upon Cain, lest any finding him should kill him.",
  "And Cain went out from the presence of the Lord, and dwelt in the land of Nod, on the east of Eden.",
  "And Cain knew his wife; and she conceived, and bare Enoch: and he builded a city, and called the name of the city, after the name of his son, Enoch.",
  "And unto Enoch was born Irad: and Irad begat Mehujael: and Mehujael begat Methusael: and Methusael begat Lamech.",
  "And Lamech took unto him two wives: the name of the one was Adah, and the name of the other Zillah.",
  "And Adah bare Jabal: he was the father of such as dwell in tents, and of such as have cattle.",
  "And his brother's name was Jubal: he was the father of all such as handle the harp and organ.",
  "And Zillah, she also bare Tubalcain, an instructer of every artificer in brass and iron: and the sister of Tubalcain was Naamah.",
  "And Lamech said unto his wives, Adah and Zillah, Hear my voice; ye wives of Lamech, hearken unto my speech: for I have slain a man to my wounding, and a young man to my hurt.",
  "If Cain shall be avenged sevenfold, truly Lamech seventy and sevenfold.",
  "And Adam knew his wife again; and she bare a son, and called his name Seth: For God, said she, hath appointed me another seed instead of Abel, whom Cain slew.",
  "And to Seth, to him also there was born a son; and he called his name Enos: then began men to call upon the name of the Lord."
],
    "Genesis:5":[
  "This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him;",
  "Male and female created he them; and blessed them, and called their name Adam, in the day when they were created.",
  "And Adam lived an hundred and thirty years, and begat a son in his own likeness, after his image; and called his name Seth:",
  "And the days of Adam after he had begotten Seth were eight hundred years: and he begat sons and daughters:",
  "And all the days that Adam lived were nine hundred and thirty years: and he died.",
  "And Seth lived an hundred and five years, and begat Enos:",
  "And Seth lived after he begat Enos eight hundred and seven years, and begat sons and daughters:",
  "And all the days of Seth were nine hundred and twelve years: and he died.",
  "And Enos lived ninety years, and begat Cainan:",
  "And Enos lived after he begat Cainan eight hundred and fifteen years, and begat sons and daughters:",
  "And all the days of Enos were nine hundred and five years: and he died.",
  "And Cainan lived seventy years, and begat Mahalaleel:",
  "And Cainan lived after he begat Mahalaleel eight hundred and forty years, and begat sons and daughters:",
  "And all the days of Cainan were nine hundred and ten years: and he died.",
  "And Mahalaleel lived sixty and five years, and begat Jared:",
  "And Mahalaleel lived after he begat Jared eight hundred and thirty years, and begat sons and daughters:",
  "And all the days of Mahalaleel were eight hundred ninety and five years: and he died.",
  "And Jared lived an hundred sixty and two years, and he begat Enoch:",
  "And Jared lived after he begat Enoch eight hundred years, and begat sons and daughters:",
  "And all the days of Jared were nine hundred sixty and two years: and he died.",
  "And Enoch lived sixty and five years, and begat Methuselah:",
  "And Enoch walked with God after he begat Methuselah three hundred years, and begat sons and daughters:",
  "And all the days of Enoch were three hundred sixty and five years:",
  "And Enoch walked with God: and he was not; for God took him.",
  "And Methuselah lived an hundred eighty and seven years, and begat Lamech:",
  "And Methuselah lived after he begat Lamech seven hundred eighty and two years, and begat sons and daughters:",
  "And all the days of Methuselah were nine hundred sixty and nine years: and he died.",
  "And Lamech lived an hundred eighty and two years, and begat a son:",
  "And he called his name Noah, saying, This same shall comfort us concerning our work and toil of our hands, because of the ground which the Lord hath cursed.",
  "And Lamech lived after he begat Noah five hundred ninety and five years, and begat sons and daughters:",
  "And all the days of Lamech were seven hundred seventy and seven years: and he died.",
  "And Noah was five hundred years old: and Noah begat Shem, Ham, and Japheth."
],
    "Genesis:6":[
  "And it came to pass, when men began to multiply on the face of the earth, and daughters were born unto them,",
  "That the sons of God saw the daughters of men that they were fair; and they took them wives of all which they chose.",
  "And the Lord said, My spirit shall not always strive with man, for that he also is flesh: yet his days shall be an hundred and twenty years.",
  "There were giants in the earth in those days; and also after that, when the sons of God came in unto the daughters of men, and they bare children to them, the same became mighty men which were of old, men of renown.",
  "And God saw that the wickedness of man was great in the earth, and that every imagination of the thoughts of his heart was only evil continually.",
  "And it repented the Lord that he had made man on the earth, and it grieved him at his heart.",
  "And the Lord said, I will destroy man whom I have created from the face of the earth; both man, and beast, and the creeping thing, and the fowls of the air; for it repenteth me that I have made them.",
  "But Noah found grace in the eyes of the Lord.",
  "These are the generations of Noah: Noah was a just man and perfect in his generations, and Noah walked with God.",
  "And Noah begat three sons, Shem, Ham, and Japheth.",
  "The earth also was corrupt before God, and the earth was filled with violence.",
  "And God looked upon the earth, and, behold, it was corrupt; for all flesh had corrupted his way upon the earth.",
  "And God said unto Noah, The end of all flesh is come before me; for the earth is filled with violence through them; and, behold, I will destroy them with the earth.",
  "Make thee an ark of gopher wood; rooms shalt thou make in the ark, and shalt pitch it within and without with pitch.",
  "And this is the fashion which thou shalt make it of: The length of the ark shall be three hundred cubits, the breadth of it fifty cubits, and the height of it thirty cubits.",
  "A window shalt thou make to the ark, and in a cubit shalt thou finish it above; and the door of the ark shalt thou set in the side thereof; with lower, second, and third stories shalt thou make it.",
  "And, behold, I, even I, do bring a flood of waters upon the earth, to destroy all flesh, wherein is the breath of life, from under heaven; and every thing that is in the earth shall die.",
  "But with thee will I establish my covenant; and thou shalt come into the ark, thou, and thy sons, and thy wife, and thy sons' wives with thee.",
  "And of every living thing of all flesh, two of every sort shalt thou bring into the ark, to keep them alive with thee; they shall be male and female.",
  "Of fowls after their kind, and of cattle after their kind, of every creeping thing of the earth after his kind, two of every sort shall come unto thee, to keep them alive.",
  "And take thou unto thee of all food that is eaten, and thou shalt gather it to thee; and it shall be for food for thee, and for them.",
  "Thus did Noah; according to all that God commanded him, so did he."
],
        "Genesis:7":[
  "And the Lord said unto Noah, Come thou and all thy house into the ark; for thee have I seen righteous before me in this generation.",
  "Of every clean beast thou shalt take to thee by sevens, the male and his female: and of beasts that are not clean by two, the male and his female.",
  "Of fowls also of the air by sevens, the male and the female; to keep seed alive upon the face of all the earth.",
  "For yet seven days, and I will cause it to rain upon the earth forty days and forty nights; and every living substance that I have made will I destroy from off the face of the earth.",
  "And Noah did according unto all that the Lord commanded him.",
  "And Noah was six hundred years old when the flood of waters was upon the earth.",
  "And Noah went in, and his sons, and his wife, and his sons' wives with him, into the ark, because of the waters of the flood.",
  "Of clean beasts, and of beasts that are not clean, and of fowls, and of every thing that creepeth upon the earth,",
  "There went in two and two unto Noah into the ark, the male and the female, as God had commanded Noah.",
  "And it came to pass after seven days, that the waters of the flood were upon the earth.",
  "In the six hundredth year of Noah's life, in the second month, the seventeenth day of the month, the same day were all the fountains of the great deep broken up, and the windows of heaven were opened.",
  "And the rain was upon the earth forty days and forty nights.",
  "In the selfsame day entered Noah, and Shem, and Ham, and Japheth, the sons of Noah, and Noah's wife, and the three wives of his sons with them, into the ark;",
  "They, and every beast after his kind, and all the cattle after their kind, and every creeping thing that creepeth upon the earth after his kind, and every fowl after his kind, every bird of every sort.",
  "And they went in unto Noah into the ark, two and two of all flesh, wherein is the breath of life.",
  "And they that went in, went in male and female of all flesh, as God had commanded him: and the Lord shut him in.",
  "And the flood was forty days upon the earth; and the waters increased, and bare up the ark, and it was lift up above the earth.",
  "And the waters prevailed, and were increased greatly upon the earth; and the ark went upon the face of the waters.",
  "And the waters prevailed exceedingly upon the earth; and all the high hills, that were under the whole heaven, were covered.",
  "Fifteen cubits upward did the waters prevail; and the mountains were covered.",
  "And all flesh died that moved upon the earth, both of fowl, and of cattle, and of beast, and of every creeping thing that creepeth upon the earth, and every man:",
  "All in whose nostrils was the breath of life, of all that was in the dry land, died.",
  "And every living substance was destroyed which was upon the face of the ground, both man, and cattle, and the creeping things, and the fowl of the heaven; and they were destroyed from the earth: and Noah only remained alive, and they that were with him in the ark.",
  "And the waters prevailed upon the earth an hundred and fifty days."
],
    "Genesis:8": [
  "And God remembered Noah, and every living thing, and all the cattle that was with him in the ark: and God made a wind to pass over the earth, and the waters assuaged;",
  "The fountains also of the deep and the windows of heaven were stopped, and the rain from heaven was restrained;",
  "And the waters returned from off the earth continually: and after the end of the hundred and fifty days the waters were abated.",
  "And the ark rested in the seventh month, on the seventeenth day of the month, upon the mountains of Ararat.",
  "And the waters decreased continually until the tenth month: in the tenth month, on the first day of the month, were the tops of the mountains seen.",
  "And it came to pass at the end of forty days, that Noah opened the window of the ark which he had made:",
  "And he sent forth a raven, which went forth to and fro, until the waters were dried up from off the earth.",
  "Also he sent forth a dove from him, to see if the waters were abated from off the face of the ground;",
  "But the dove found no rest for the sole of her foot, and she returned unto him into the ark, for the waters were on the face of the whole earth: then he put forth his hand, and took her, and pulled her in unto him into the ark.",
  "And he stayed yet other seven days; and again he sent forth the dove out of the ark;",
  "And the dove came in to him in the evening; and, lo, in her mouth was an olive leaf pluckt off: so Noah knew that the waters were abated from off the earth.",
  "And he stayed yet other seven days; and sent forth the dove; which returned not again unto him any more.",
  "And it came to pass in the six hundredth and first year, in the first month, the first day of the month, the waters were dried up from off the earth: and Noah removed the covering of the ark, and looked, and, behold, the face of the ground was dry.",
  "And in the second month, on the seven and twentieth day of the month, was the earth dried.",
  "And God spake unto Noah, saying,",
  "Go forth of the ark, thou, and thy sons, and thy wife, and thy sons' wives with thee.",
  "Bring forth with thee every living thing that is with thee, of all flesh, both of fowl, and of cattle, and of every creeping thing that creepeth upon the earth; that they may breed abundantly in the earth, and be fruitful, and multiply upon the earth.",
  "And Noah went forth, and his sons, and his wife, and his sons' wives with him:",
  "Every beast, every creeping thing, and every fowl, and whatsoever creepeth upon the earth, after their kinds, went forth out of the ark.",
  "And Noah builded an altar unto the Lord; and took of every clean beast, and of every clean fowl, and offered burnt offerings on the altar.",
  "And the Lord smelled a sweet savour; and the Lord said in his heart, I will not again curse the ground any more for man's sake; for the imagination of man's heart is evil from his youth; neither will I again smite any more every thing living, as I have done.",
  "While the earth remaineth, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease."
],
  "Genesis:9": [
  "And God blessed Noah and his sons, and said unto them, Be fruitful, and multiply, and replenish the earth.",
  "And the fear of you and the dread of you shall be upon every beast of the earth, and upon every fowl of the air, upon all that moveth upon the earth, and upon all the fishes of the sea; into your hand are they delivered.",
  "Every moving thing that liveth shall be meat for you; even as the green herb have I given you all things.",
  "But flesh with the life thereof, which is the blood thereof, shall ye not eat.",
  "And surely your blood of your lives will I require; at the hand of every beast will I require it, and at the hand of man; at the hand of every man's brother will I require the life of man.",
  "Whoso sheddeth man's blood, by man shall his blood be shed: for in the image of God made he man.",
  "And you, be ye fruitful, and multiply; bring forth abundantly in the earth, and multiply therein.",
  "And God spake unto Noah, and to his sons with him, saying,",
  "And I, behold, I establish my covenant with you, and with your seed after you;",
  "And with every living creature that is with you, of the fowl, of the cattle, and of every beast of the earth with you; from all that go out of the ark, to every beast of the earth.",
  "And I will establish my covenant with you; neither shall all flesh be cut off any more by the waters of a flood; neither shall there any more be a flood to destroy the earth.",
  "And God said, This is the token of the covenant which I make between me and you and every living creature that is with you, for perpetual generations:",
  "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.",
  "And it shall come to pass, when I bring a cloud over the earth, that the bow shall be seen in the cloud:",
  "And I will remember my covenant, which is between me and you and every living creature of all flesh; and the waters shall no more become a flood to destroy all flesh.",
  "And the bow shall be in the cloud; and I will look upon it, that I may remember the everlasting covenant between God and every living creature of all flesh that is upon the earth.",
  "And God said unto Noah, This is the token of the covenant, which I have established between me and all flesh that is upon the earth.",
  "And the sons of Noah, that went forth of the ark, were Shem, and Ham, and Japheth: and Ham is the father of Canaan.",
  "These are the three sons of Noah: and of them was the whole earth overspread.",
  "And Noah began to be an husbandman, and he planted a vineyard:",
  "And he drank of the wine, and was drunken; and he was uncovered within his tent.",
  "And Ham, the father of Canaan, saw the nakedness of his father, and told his two brethren without.",
  "And Shem and Japheth took a garment, and laid it upon both their shoulders, and went backward, and covered the nakedness of their father; and their faces were backward, and they saw not their father's nakedness.",
  "And Noah awoke from his wine, and knew what his younger son had done unto him.",
  "And he said, Cursed be Canaan; a servant of servants shall he be unto his brethren.",
  "And he said, Blessed be the Lord God of Shem; and Canaan shall be his servant.",
  "God shall enlarge Japheth, and he shall dwell in the tents of Shem; and Canaan shall be his servant.",
  "And Noah lived after the flood three hundred and fifty years.",
  "And all the days of Noah were nine hundred and fifty years: and he died."
   ],
    "Genesis:10": [
      "Now these are the generations of the sons of Noah, Shem, Ham, and Japheth: and unto them were sons born after the flood.",
      "The sons of Japheth; Gomer, and Magog, and Madai, and Javan, and Tubal, and Meshech, and Tiras.",
      "And the sons of Gomer; Ashkenaz, and Riphath, and Togarmah.",
      "And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim.",
      "By these were the isles of the Gentiles divided in their lands; every one after his tongue, after their families, in their nations.",
      "And the sons of Ham; Cush, and Mizraim, and Phut, and Canaan.",
      "And the sons of Cush; Seba, and Havilah, and Sabtah, and Raamah, and Sabtecha: and the sons of Raamah; Sheba, and Dedan.",
      "And Cush begat Nimrod: he began to be a mighty man upon the earth.",
      "And Mizraim begat Ludim, and Anamim, and Lehabim, and Naphtuhim,",
      "And Pathrusim, and Casluhim, (out of whom came Philistim,) and Caphtorim.",
      "And Canaan begat Sidon his firstborn, and Heth,",
      "And the Jebusite, and the Amorite, and the Girgasite,",
      "And the Hivite, and the Arkite, and the Sinite,",
      "And the Arvadite, and the Zemarite, and the Hamathite: and afterward were the families of the Canaanites spread abroad.",
      "And the border of the Canaanites was from Sidon, as thou comest to Gerar, unto Gaza; as thou goest, unto Sodom, and Gomorrah, and Admah, and Zeboim, even unto Lasha.",
      "These are the sons of Ham, after their families, after their tongues, in their countries, and in their nations.",
      "And the sons of Shem; Elam, and Asshur, and Arphaxad, and Lud, and Aram.",
      "And the sons of Aram; Uz, and Hul, and Gether, and Mash.",
      "And Arphaxad begat Salah; and Salah begat Eber.",
      "And unto Eber were born two sons: the name of one was Peleg; for in his days was the earth divided; and his brother's name was Joktan.",
      "And Joktan begat Almodad, and Sheleph, and Hazarmaveth, and Jerah,",
      "And Hadoram, and Uzal, and Diklah,",
      "And Obal, and Abimael, and Sheba,",
      "And Ophir, and Havilah, and Jobab: all these were the sons of Joktan.",
      "And their dwelling was from Mesha, as thou goest unto Sephar a mount of the east.",
      "These are the sons of Shem, after their families, after their tongues, in their lands, after their nations.",
      "These are the families of the sons of Noah, after their generations, in their nations: and by these were the nations divided in the earth after the flood."
    ],
      "Genesis:11": [
      "And the whole earth was of one language, and of one speech.",
      "And it came to pass, as they journeyed from the east, that they found a plain in the land of Shinar; and they dwelt there.",
      "And they said one to another, Go to, let us make brick, and burn them thoroughly. And they had brick for stone, and slime had they for morter.",
      "And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven; and let us make us a name, lest we be scattered abroad upon the face of the whole earth.",
      "And the Lord came down to see the city and the tower, which the children of men builded.",
      "And the Lord said, Behold, the people is one, and they have all one language; and this they begin to do: and now nothing will be restrained from them, which they have imagined to do.",
      "Go to, let us go down, and there confound their language, that they may not understand one another's speech.",
      "So the Lord scattered them abroad from thence upon the face of all the earth: and they left off to build the city.",
      "Therefore is the name of it called Babel; because the Lord did there confound the language of all the earth: and from thence did the Lord scatter them abroad upon the face of all the earth.",
      "These are the generations of Shem: Shem was an hundred years old, and begat Arphaxad two years after the flood:",
      "And Shem lived after he begat Arphaxad five hundred years, and begat sons and daughters.",
      "And Arphaxad lived five and thirty years, and begat Salah:",
      "And Arphaxad lived after he begat Salah four hundred and three years, and begat sons and daughters.",
      "And Salah lived thirty years, and begat Eber:",
      "And Salah lived after he begat Eber four hundred and three years, and begat sons and daughters.",
      "And Eber lived four and thirty years, and begat Peleg:",
      "And Eber lived after he begat Peleg four hundred and thirty years, and begat sons and daughters.",
      "And Peleg lived thirty years, and begat Reu:",
      "And Peleg lived after he begat Reu two hundred and nine years, and begat sons and daughters.",
      "And Reu lived two and thirty years, and begat Serug:",
      "And Reu lived after he begat Serug two hundred and seven years, and begat sons and daughters.",
      "And Serug lived thirty years, and begat Nahor:",
      "And Serug lived after he begat Nahor two hundred years, and begat sons and daughters.",
      "And Nahor lived nine and twenty years, and begat Terah:",
      "And Nahor lived after he begat Terah an hundred and nineteen years, and begat sons and daughters.",
      "And Terah lived seventy years, and begat Abram, Nahor, and Haran.",
      "Now these are the generations of Terah: Terah begat Abram, Nahor, and Haran; and Haran begat Lot.",
      "And Haran died before his father Terah in the land of his nativity, in Ur of the Chaldees.",
      "And Abram and Nahor took them wives: the name of Abram's wife was Sarai; and the name of Nahor's wife, Milcah, the daughter of Haran, the father of Milcah, and the father of Iscah.",
      "But Sarai was barren; she had no child.",
      "And Terah took Abram his son, and Lot the son of Haran his son's son, and Sarai his daughter in law, his son Abram's wife; and they went forth with them from Ur of the Chaldees, to go into the land of Canaan; and they came unto Haran, and dwelt there.",
      "And the days of Terah were two hundred and five years: and Terah died in Haran."
      ],
      "Genesis:12": [
      "Now the Lord had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father's house, unto a land that I will shew thee.",
      "And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing.",
      "And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.",
      "So Abram departed, as the Lord had spoken unto him; and Lot went with him: and Abram was seventy and five years old when he departed out of Haran.",
      "And Abram took Sarai his wife, and Lot his brother's son, and all their substance that they had gathered, and the souls that they had gotten in Haran; and they went forth to go into the land of Canaan; and into the land of Canaan they came.",
      "And Abram passed through the land unto the place of Sichem, unto the plain of Moreh. And the Canaanite was then in the land.",
      "And the Lord appeared unto Abram, and said, Unto thy seed will I give this land: and there builded he an altar unto the Lord, who appeared unto him.",
      "And he removed from thence unto a mountain on the east of Bethel, and pitched his tent, having Bethel on the west, and Hai on the east: and there he built an altar unto the Lord, and called upon the name of the Lord.",
      "And Abram journeyed, going on still toward the south.",
      "And there was a ffamine in the land: and Abram went down into Egypt to sojourn there; for the famine was grievous in the land.",
      "And it came to pass, when he was come near to enter into Egypt, that he said unto Sarai his wife, Behold now, I know that thou art a fair woman to look upon:",
      "Therefore it shall come to pass, when the Egyptians shall see thee, that they shall say, This is his wife: and they will kill me, but they will save thee alive.",
      "Say, I pray thee, thou art my sister: that it may be well with me for thy sake; and my soul shall live because of thee.",
      "And it came to pass, that, when Abram was come into Egypt, the Egyptians beheld the woman that she was very fair.",
      "The princes also of Pharaoh saw her, and commended her before Pharaoh: and the woman was taken into Pharaoh's house.",
      "And he entreated Abram well for her sake: and he had sheep, and oxen, and he asses, and menservants, and maidservants, and she asses, and camels.",
      "And the Lord plagued Pharaoh and his house with great plagues because of Sarai Abram's wife.",
      "And Pharaoh called Abram, and said, What is this that thou hast done unto me? why didst thou not tell me that she was thy wife?",
      "Why saidst thou, She is my sister? so I might have taken her to me to wife: now therefore behold thy wife, take her, and go thy way.",
      "And Pharaoh commanded his men concerning him: and they sent him away, and his wife, and all that he had."
      ],
     "Genesis:13": [
      "And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south.",
      "And Abram was very rich in cattle, in silver, and in gold.",
      "And he went on his journeys from the south even to Bethel, unto the place where his tent had been at the beginning, between Bethel and Hai;",
      "Unto the place of the altar, which he had made there at the first: and there Abram called on the name of the Lord.",
      "And Lot also, which went with Abram, had flocks, and herds, and tents.",
      "And the land was not able to bear them, that they might dwell together: for their substance was great, so that they could not dwell together.",
      "And there was a strife between the herdmen of Abram's cattle and the herdmen of Lot's cattle: and the Canaanite and the Perizzite dwelled then in the land.",
      "And Abram said unto Lot, Let there be no strife, I pray thee, between me and thee, and between my herdmen and thy herdmen; for we be brethren.",
      "Is not the whole land before thee? separate thyself, I pray thee, from me: if thou wilt take the left hand, then I will go to the right; or if thou depart to the right hand, then I will go to the left.",
      "And Lot lifted up his eyes, and beheld all the plain of Jordan, that it was well watered every where, before the Lord destroyed Sodom and Gomorrah, even as the garden of the Lord, like the land of Egypt, as thou comest unto Zoar.",
      "Then Lot chose him all the plain of Jordan; and Lot journeyed east: and they separated themselves the one from the other.",
      "Abram dwelled in the land of Canaan, and Lot dwelled in the cities of the plain, and pitched his tent toward Sodom.",
      "But the men of Sodom were wicked and sinners before the Lord exceedingly.",
      "And the Lord said unto Abram, after that Lot was separated from him, Lift up now thine eyes, and look from the place where thou art northward, and southward, and eastward, and westward:",
      "For all the land which thou seest, to thee will I give it, and to thy seed for ever.",
      "And I will make thy seed as the dust of the earth: so that if a man can number the dust of the earth, then shall thy seed also be numbered.",
      "Arise, walk through the land in the length of it and in the breadth of it; for I will give it unto thee.",
      "Then Abram moved his tent, and came and dwelt in the plain of Mamre, which is in Hebron, and built there an altar unto the Lord."
      ],
      "Genesis:14": [
      "And it came to pass in the days of Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations;",
      "That these made war with Bera king of Sodom, and with Birsha king of Gomorrah, Shinab king of Admah, and Shemeber king of Zeboiim, and the king of Bela, which is Zoar.",
      "All these were joined together in the vale of Siddim, which is the salt sea.",
      "Twelve years they served Chedorlaomer, and in the thirteenth year they rebelled.",
      "And in the fourteenth year came Chedorlaomer, and the kings that were with him, and smote the Rephaims in Ashteroth Karnaim, and the Zuzims in Ham, and the Emims in Shaveh Kiriathaim,",
      "And the Horites in their mount Seir, unto Elparan, which is by the wilderness.",
      "And they returned, and came to Enmishpat, which is Kadesh, and smote all the country of the Amalekites, and also the Amorites, that dwelt in Hazezontamar.",
      "Then went the king of Sodom and the king of Gomorrah, and the king of Admah, and the king of Zeboiim, and the king of Bela, which is Zoar, and they joined battle with them in the vale of Siddim;",
      "With Chedorlaomer the king of Elam, and with Tidal king of nations, and Amraphel king of Shinar, and Arioch king of Ellasar; four kings against five.",
      "And the vale of Siddim was full of slimepits; and the kings of Sodom and Gomorrah fled, and fell there; and they that remained fled to the mountain.",
      "And they took all the goods of Sodom and Gomorrah, and all their victuals, and went their way.",
      "And they took Lot, Abram's brother's son, who dwelt in Sodom, and his goods, and departed.",
      "And there came one that had escaped, and told Abram the Hebrew; for he dwelt in the plain of Mamre the Amorite, brother of Eshcol, and brother of Aner: and these were confederate with Abram.",
      "And when Abram heard that his brother was taken captive, he armed his trained servants, born in his own house, three hundred and eighteen, and pursued them unto Dan.",
      "And he divided himself against them, he and his servants, by night, and smote them, and pursued them unto Hobah, which is on the left hand of Damascus.",
      "And he brought back all the goods, and also brought again his brother Lot, and his goods, and the people.",
      "And the king of Sodom went out to meet him after his return from the slaughter of Chedorlaomer, and of the kings that were with him, at the valley of Shaveh, which is the king's dale.",
      "And Melchizedek king of Salem brought forth bread and wine: and he was the priest of the most high God.",
      "And he blessed him, and said, Blessed be Abram of the most high God, possessor of heaven and earth:",
      "And blessed be the most high God, which hath delivered thine enemies into thy hand. And he gave him tithes of all.",
      "And the king of Sodom said unto Abram, Give me the persons, and take the goods to thyself.",
      "And Abram said to the king of Sodom, I have lift up mine hand unto the Lord, the most high God, the possessor of heaven and earth,",
      "That I will not take from a thread even to a shoelatchet, and that I will not take any thing that is thine, lest thou shouldest say, I have made Abram rich:",
      "Save only that which the weapons of my enemies have taken away; unto me be the portion of the men which went with me: let them take their portion."
      ],
    
        "Exodus:20": [
          "And God spake all these words, saying,",
          "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.",
          "Thou shalt have no other gods before me.",
          "Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth.",
          "Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;",
          "And shewing mercy unto thousands of them that love me, and keep my commandments.",
          "Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.",
          "Remember the sabbath day, to keep it holy."
        ],
  "Psalm:1": [
          "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
          "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
          "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
          "The ungodly are not so: but are like the chaff which the wind driveth away.",
          "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.",
          "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish."
        ],
       "Psalm:23": [
          "The LORD is my shepherd; I shall not want.",
          "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
          "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
          "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
          "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
          "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever."
        ],
       "Psalm:91": [
          "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
          "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
          "Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.",
          "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler."
        ],
        "Psalm:119": [
          "Blessed are the undefiled in the way, who walk in the law of the LORD.",
          "Blessed are they that keep his testimonies, and that seek him with the whole heart.",
          "They also do no iniquity: they walk in his ways.",
          "Thou hast commanded us to keep thy precepts diligently."
        ],
        "Proverbs:1": [
          "The proverbs of Solomon the son of David, king of Israel;",
          "To know wisdom and instruction; to perceive the words of understanding;",
          "To receive the instruction of wisdom, justice, and judgment, and equity;",
          "To give subtilty to the simple, to the young man knowledge and discretion.",
          "A wise man will hear, and will increase learning; and a man of understanding shall attain unto wise counsels:"
        ],
        "Proverbs:3": [
          "My son, forget not my law; but let thine heart keep my commandments:",
          "For length of days, and long life, and peace, shall they add to thee.",
          "Let not mercy and truth forsake thee: bind them about thy neck; write them upon the table of thine heart:",
          "So shalt thou find favour and good understanding in the sight of God and man.",
          "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
          "In all thy ways acknowledge him, and he shall direct thy paths.",
          "Be not wise in thine own eyes: fear the LORD, and depart from evil."
        ],
        "Proverbs:4": [
          "Hear, ye children, the instruction of a father, and attend to know understanding.",
          "For I give you good doctrine, forsake ye not my law.",
          "For I was my father's son, tender and only beloved in the sight of my mother.",
          "He taught me also, and said unto me, Let thine heart retain my words: keep my commandments, and live."
        ],
      "Isaiah:40": [
          "Comfort ye, comfort ye my people, saith your God.",
          "Speak ye comfortably to Jerusalem, and cry unto her, that her warfare is accomplished, that her iniquity is pardoned: for she hath received of the LORD'S hand double for all her sins.",
          "The voice of him that crieth in the wilderness, Prepare ye the way of the LORD, make straight in the desert a highway for our God."
        ],
        "Isaiah:53": [
          "Who hath believed our report? and to whom is the arm of the LORD revealed?",
          "For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him.",
          "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not."
        ],
     
        "Matthew:5": [
          "And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:",
          "And he opened his mouth, and taught them, saying,",
          "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
          "Blessed are they that mourn: for they shall be comforted.",
          "Blessed are the meek: for they shall inherit the earth.",
          "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
          "Blessed are the merciful: for they shall obtain mercy.",
          "Blessed are the pure in heart: for they shall see God."
        ],
       "Matthew:6": [
          "Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.",
          "Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward.",
          "But when thou doest alms, let not thy left hand know what thy right hand doeth:",
          "That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly."
        ],
       "Matthew:28": [
          "In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.",
          "And, behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it.",
          "His countenance was like lightning, and his raiment white as snow:"
        ],
      
       "Mark:1": [
          "The beginning of the gospel of Jesus Christ, the Son of God;",
          "As it is written in the prophets, Behold, I send my messenger before thy face, which shall prepare thy way before thee.",
          "The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight."
        ],
        "Mark:16": [
          "And when the sabbath was past, Mary Magdalene, and Mary the mother of James, and Salome, had bought sweet spices, that they might come and anoint him.",
          "And very early in the morning the first day of the week, they came unto the sepulchre at the rising of the sun.",
          "And they said among themselves, Who shall roll us away the stone from the door of the sepulchre?"
        ],
     
       "Luke:2": [
          "And it came to pass in those days, that there went out a decree from Caesar Augustus that all the world should be taxed.",
          "And all went to be taxed, every one into his own city.",
          "And Joseph also went up from Galilee, out of the city of Nazareth, into Judaea, unto the city of David, which is called Bethlehem;",
          "To be taxed with Mary his espoused wife, being great with child.",
          "And so it was, that, while they were there, the days were accomplished that she should be delivered.",
          "And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn."
        ],
        "John:1": [
          "In the beginning was the Word, and the Word was with God, and the Word was God.",
          "The same was in the beginning with God.",
          "All things were made by him; and without him was not any thing made that was made.",
          "In him was life; and the life was the light of men.",
          "And the light shineth in darkness; and the darkness comprehended it not."
        ],
        "John:3": [
          "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:",
          "The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him.",
          "Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.",
          "Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother's womb, and be born?",
          "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.",
          "That which is born of the flesh is flesh; and that which is born of the Spirit is spirit."
        ],
        "John:14": [
          "Let not your heart be troubled: ye believe in God, believe also in me.",
          "In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
          "And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.",
          "And whither I go ye know, and the way ye know."
        ],
     "Acts:2": [
          "And when the day of Pentecost was fully come, they were all with one accord in one place.",
          "And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting.",
          "And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.",
          "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance."
        ], 
       "Romans:3": [
          "What advantage then hath the Jew? or what profit is there of circumcision?",
          "Much every way: chiefly, because that unto them were committed the oracles of God.",
          "For what if some did not believe? shall their unbelief make the faith of God without effect?",
          "God forbid: yea, let God be true, but every man a liar; as it is written, That thou mightest be justified in thy sayings, and mightest overcome when thou art judged."
        ],
       "Romans:8": [
          "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
          "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.",
          "For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh:",
          "That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit."
        ],
       "Romans:12": [
          "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
          "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."
        ],
        "1Corinthians:13": [
          "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.",
          "And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.",
          "And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing.",
          "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up."
        ],
        "Ephesians:6": [
          "Children, obey your parents in the Lord: for this is right.",
          "Honour thy father and mother; which is the first commandment with promise;",
          "That it may be well with thee, and thou mayest live long on the earth.",
          "And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord."
        ],
       "Philippians:4": [
          "Rejoice in the Lord always: and again I say, Rejoice.",
          "Let your moderation be known unto all men. The Lord is at hand.",
          "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
          "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."
        ],
        "James:1": [
          "My brethren, count it all joy when ye fall into divers temptations;",
          "Knowing this, that the trying of your faith worketh patience.",
          "But let patience have her perfect work, that ye may be perfect and entire, wanting nothing.",
          "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
          "But let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed.",
          "For let not that man think that he shall receive any thing of the Lord.",
          "A double minded man is unstable in all his ways.",
          "Let the brother of low degree rejoice in that he is exalted:",
          "But the rich, in that he is made low: because as the flower of the grass he shall pass away.",
          "For the sun is no sooner risen with a burning heat, but it withereth the grass, and the flower thereof falleth, and the grace of the fashion of it perisheth: so also shall the the rich man fade away in his ways.",
          "Blessed is the man that endureth temtation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him.",
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:",
          "But every man is tempted, when he is drawn away of his own lust, and enticed.",
          "Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death.",
          "Do not err, my beloved brethren.",
          "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
          "Of his own will begat he us with the word of truth, that we should be a kind of firstfruits of his creatures.",
          "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:",
          "For the wrath of man worketh not the righteousness of God.",
          "Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness the engrafted word, which is able to save your souls.",
          "But be ye doers of the word, and not hearers only, deceiving your own selves.",
          "For if any be a hearer of the word, and not a doer, he is like unto a man beholding his natural face in a glass:",
          "For he beholdeth himself, and goeth his way, and straightway forgetteth what manner of man he was.",
          "But whoso looketh into the perfect law of liberty, and continueth therein, he being not a forgetful hearer, but a doer of the work, this man shall be blessed in his deed.",
          "If any man among you seem to be religious, and bridleth not his tongue, but deceiveth his own heart, this man's religion is vain.",
          "Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction, and to keep himself unspotted from the world."
        ],
        "James:2": [
          "My brethren, have not the faith of our Lord Jesus Christ, the Lord of glory, with respect of persons.",
          "For if there come unto your assembly a man with a gold ring, in goodly apparel, and there come in also a poor man in vile raiment,",
          "And ye look on him that is clothed with gold, and say, 'Sit thou here in a good place; and say to him that is poor, 'Stand thou there, or sit below my footstool,'",
          "Then do ye show partiality in your own hearts, and are not judges of the truth.",
          "Hearken, my beloved brethren: Hath not God chosen the poor of this world rich in faith, and heirs of the kingdom which he hath promised to them that love him?",
          "But ye have despised the poor man. Do not rich men oppress you, and draw you before the judgment seats?",
          "Do not they blaspheme that worthy name by the which ye are called?",
          "If ye fulfil the royal law according to the scripture, Thou shalt love thy neighbour as thyself, ye do well:",
          "But if ye have respect to persons, ye commit sin, and are convinced of the law as transgressors.",
          "For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.",
          "For he that said, Do not commit adultery, said also, Do not kill. Now if thou commit no adultery, yet if thou kill, thou art become a transgressor of the law.",
          "So speak ye, and so do, as they that shall be judged by the law of liberty.",
          "For he shall have judgment without mercy, that hath shewed no mercy; and mercy rejoiceth against judgment.",
          "What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him?",
          "If a brother or sister be naked, and destitute of daily food,",
          "And one of you say unto them, Depart in peace, be ye warmed and filled; notwithstanding ye give them not those things which are needful to the body; what doth it profit?",
          "Even so faith, if it hath not works, is dead, being alone.",
          "Yea, a man may say, 'Thou hast faith, and I have works:' shew me thy faith without thy works, and I will shew thee my faith by my works.",
          "Thou believest that there is one God; thou doest well: the devils also believe, and tremble.",
          "But wilt thou know, O vain man, that faith without works is dead?",
          "Was not Abraham our father justified by works, when he had offered Isaac his son upon the altar?",
          "Seest thou how faith wrought with his works, and by works was faith made perfect?",
          "Ye see then how that by works a man is justified, and not by faith only.",
          "Likewise also was not Rahab the harlot justified by works, when she had received the messengers, and had sent them out another way?",
          "For as the body without the spirit is dead, so faith without works is dead also."
        ],
        "James:3": [
          "My brethren, be not many masters, knowing that we shall receive the greater condemnation.",
          "For in many things we offend all. If any man offend not in word, the same is a perfect man, and able also to bridle the whole body.",
          "Behold, we put bits in the horses' mouths, that they may obey us; and we turn about their whole body.",
          "Behold also the ships, which though they be so great, and are driven of fierce winds, yet are they turned about with a very small helm, whithersoever the governor listeth.",
          "Even so the tongue is a little member, and boasteth great things. Behold, how great a matter a little fire kindleth!",
          "And the tongue is a fire, a world of iniquity: so is the tongue among our members, that it defileth the whole body, and setteth on fire the course of nature; and it is set on fire of hell.",
          "For every kind of beasts, and of birds, and of serpents, and of things in the sea, is tamed, and hath been tamed of mankind:",
          "But the tongue can no man tame; it is an unruly evil, full of deadly poison.",
          "Therewith bless we God, even the Father; and therewith curse we men, which are made after the similitude of God.",
          "Out of the same mouth proceedeth blessing and cursing. My brethren, these things ought not so to be.",
          "Doth a fountain send forth at the same place sweet water and bitter?",
          "Can the fig tree, my brethren, bear olive berries? either a vine, figs? so can no fountain both yield salt water and fresh.",
          "Who is a wise man and endued with knowledge among you? let him shew out of a good conversation his works with meekness of wisdom.",
          "But if ye have bitter envying and strife in your hearts, glory not, and lie not against the truth.",
          "This wisdom descendeth not from above, but is earthly, sensual, devilish.",
          "For where envying and strife is, there is confusion and every evil work.",
          "But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy.",
          "And the fruit of righteousness is sown in peace of them that make peace."
        ],
        "James:4": [
          "From whence come wars and fightings among you? come they not hence, even of your lusts that war in your members?",
          "Ye lust, and have not: ye kill, and desire to have, and cannot obtain: ye fight and war, yet ye have not, because ye ask not.",
          "Ye ask, and receive not, because ye ask amiss, that ye may consume it upon your lusts.",
          "Ye adulterers and adulteresses, know ye not that the friendship of the world is enmity with God? whosoever therefore will be a friend of the world is the enemy of God.",
          "Do ye think that the scripture saith in vain, The spirit that dwelleth in us lusteth to envy?",
          "But he giveth more grace. Wherefore he saith, God resisteth the proud, but giveth grace unto the humble.",
          "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
          "Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.",
          "Be afflicted, and mourn, and weep: let your laughter be turned to mourning, and your joy to heaviness.",
          "Humble yourselves in the sight of the Lord, and he shall lift you up.",
          "Speak not evil one of another, brethren. He that speaketh evil of his brother, and judgeth his brother, speaketh evil of the law, and judgeth the law: but if thou judge the law, thou art not a doer of the law, but a judge.",
          "There is one lawgiver, who is able to save and to destroy: who art thou that judgest another?",
          "Go to now, ye that say, To day or to morrow we will go into such a city, and continue there a year, and buy and sell, and get gain:",
          "Whereas ye know not what shall be on the morrow. For what is your life? It is even a vapour, that appeareth for a little time, and then vanisheth away.",
          "For that ye ought to say, If the Lord will, we shall live, and do this, or that.",
          "But now ye rejoice in your boastings: all such rejoicing is evil.",
          "Therefore to him that knoweth to do good, and doeth it not, to him it is sin."
        ],
        "James:5": [
          "Go to now, ye rich men, weep and howl for your miseries that shall come upon you.",
          "Your riches are corrupted, and your garments are motheaten.",
          "Your gold and silver is cankered; and the rust of them shall be a witness against you, and shall eat your flesh as it were fire. Ye have heaped treasure together for the last days.",
          "Behold, the hire of the labourers who have reaped down your fields, which is of you kept back by fraud, crieth: and the cries of them which have reaped are entered into the ears of the Lord of sabaoth.",
          "Ye have lived in pleasure on the earth, and been wanton; ye have nourished your hearts, as in a day of slaughter.",
          "Ye have condemned and killed the just; and he doth not resist you.",
          "Be patient therefore, brethren, unto the coming of the Lord. Behold, the husbandman waiteth for the precious fruit of the earth, and hath long patience for it, until he receive the early and latter rain.",
          "Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh.",
          "Grudge not one against another, brethren, lest ye be condemned: behold, the judge standeth before the door.",
          "Take, my brethren, the prophets, who have spoken in the name of the Lord, for an example of suffering affliction, and of patience.",
          "Behold, we count them happy which endure. Ye have heard of the patience of Job, and have seen the end of the Lord; that the Lord is very pitiful, and of tender mercy.",
          "But above all things, my brethren, swear not, neither by heaven, neither by the earth, neither by any other oath: but let your yea be yea; and your nay, nay; lest ye fall into condemnation.",
          "Is any among you afflicted? let him pray. Is any merry? let him sing psalms.",
          "Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord:",
          "And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him.",
          "Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.",
          "Elias was a man subject to like passions as we are, and he prayed earnestly that it might not rain: and it rained not on the earth by the space of three years and six months.",
          "And he prayed again, and the heaven gave rain, and the earth brought forth her fruit.",
          "Brethren, if any of you do err from the truth, and one convert him;",
          "Let him know, that he which converteth the sinner from the error of his way shall save a soul from death, and shall hide a multitude of sins."
        ],
         "1 Peter:1": [
          "Peter, an apostle of Jesus Christ, to the strangers scattered throughout Pontus, Galatia, Cappadocia, Asia, and Bithynia,",
          "Elect according to the foreknowledge of God the Father, through sanctification of the Spirit, unto obedience and sprinkling of the blood of Jesus Christ: Grace unto you, and peace, be multiplied.",
          "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,",
          "To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,",
          "Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.",
          "Wherein ye greatly rejoice, though now for a season, if need be, ye are in heaviness through manifold temptations:",
          "That the trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire, might be found unto praise and honour and glory at the appearing of Jesus Christ:",
          "Whom having not seen, ye love; in whom, though now ye see him not, yet believing, ye rejoice with joy unspeakable and full of glory:",
          "Receiving the end of your faith, even the salvation of your souls.",
          "Of which salvation the prophets have enquired and searched diligently, who prophesied of the grace that should come unto you:",
          "Searching what, or what manner of time the Spirit of Christ which was in them did signify, when it testified beforehand the sufferings of Christ, and the glory that should follow.",
          "Unto whom it was revealed, that not unto themselves, but unto us they did minister the things, which are now reported unto you by them that have preached the gospel unto you with the Holy Ghost sent down from heaven; which things the angels desire to look into.",
          "Wherefore gird up the loins of your mind, be sober, and hope to the end for the grace that is to be brought unto you at the revelation of Jesus Christ;",
          "As obedient children, not fashioning yourselves according to the former lusts in your ignorance:",
          "But as he which hath called you is holy, so be ye holy in all manner of conversation;",
          "Because it is written, Be ye holy; for I am holy.",
          "And if ye call on the Father, who without respect of persons judgeth according to every  man's work, pass the time of your sojourning here in fear:",
          "Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold, from your vain conversation received by tradition from your fathers;",
          "But with the precious blood of Christ, as of a lamb without blemish and without spot:",
          "Who verily was foreordained before the foundation of the world, but was manifest in these last times for you,",
          "Who by him do believe in God, that raised him up from the dead, and gave him glory; that your faith and hope might be in God.",
          "Seeing ye have purified your souls in obeying the truth through the Spirit unto unfeigned love of the brethren, see that ye love one another with a pure heart fervently:",
          "Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever.",
          "For all flesh is as grass, and all the glory of man is as the flower of grass. The grass withereth, and the flower thereof falleth away:",
          "But the word of the Lord endureth for ever. And this is the word which by the gospel is preached unto you."
        ],
        "1 Peter:2": [
          "Wherefore laying aside all malice, and all guile, and hypocrisies, and envies, and all evil speakings,",
          "As newborn babes, desire the sincere milk of the word, that ye may grow thereby:",
          "If so be ye have tasted that the Lord is gracious.",
          "To whom coming, as unto a living stone, disallowed indeed of men, but chosen of God, and precious,",
          "Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ.",
          "Wherefore also it is contained in the scripture, Behold, I lay in Sion a chief corner stone, elect, precious: and he that believeth on him shall not be confounded.",
          "Unto you therefore which believe he is precious: but unto them which be disobedient, the stone which the builders disallowed, the same is made the head of the corner,",
          "And a stone of stumbling, and a rock of offence, even to them which stumble at the word, being disobedient: whereunto also they were appointed.",
          "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:",
          "Which in time past were not a people, but are now the people of God: which had not obtained mercy, but now have obtained mercy.",
          "Dearly beloved, I beseech you as strangers and pilgrims, abstain from fleshly lusts, which war against the soul;",
          "Having your conversation honest among the Gentiles: that, whereas they speak against you as evildoers, they may by your good works, which they shall behold, glorify God in the day of visitation.",
          "Submit yourselves to every ordinance of man for the Lord's sake: whether it be to the king, as supreme;",
          "Or unto governors, as unto them that are sent by him for the punishment of evildoers, and for the praise of them that do well.",
          "For so is the will of God, that with well doing ye may put to silence the ignorance of foolish men:",
          "As free, and not using your liberty for a cloak of maliciousness, but as the servants of God.",
          "Honour all men. Love the brotherhood. Fear God. Honour the king.",
          "Servants, be subject to your masters with all fear; not only to the good and gentle, but also to the froward.",
          "For this is thankworthy, if a man for conscience toward God endure grief, suffering wrongfully.",
          "For what glory is it, if, when ye be buffeted for your faults, ye shall take it patiently? but if, when ye do well, and suffer for it, ye take it patiently, this is acceptable with God.",
          "For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps:",
          "Who did no sin, neither was guile found in his mouth:",
          "Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously:",
          "Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.",
          "For ye were as sheep going astray; but are now returned unto the Shepherd and Bishop of your souls."  
        ],
        "1 Peter:3": [
          "Likewise, ye wives, be in subjection to your own husbands; that, if any obey not the word, they also may without the word be won by the conversation of the wives;",
          "While they behold your chaste conversation coupled with fear.",
          "Whose adorning let it not be that outward adorning of plaiting the hair, and of wearing of gold, or of putting on of apparel;",
          "But let it be the hidden man of the heart, in that which is not corruptible, even the ornament of a meek and quiet spirit, which is in the sight of God of great price.",
          "For after this manner in the old time the holy women also, who trusted in God, adorned themselves in the same manner, being subject to their own husbands;",
          "As Sarah obeyed Abraham, calling him lord: whose daughters ye are, as long as ye do well, and are not afraid with any amazement.",
          "Likewise, ye husbands, dwell with them according to knowledge, giving honour unto the wife, as unto the weaker vessel, and as being heirs together of the grace of life; that your prayers be not hindered.",
          "Finally, be ye all of one mind, having compassion one of another, love as brethren, be pitiful, be courteous:",
          "Not rendering evil for evil, or railing for railing: but contrariwise blessing; knowing that ye are thereunto called, that ye should inherit a blessing.",
          "For he that will love life, and see good days, let him refrain his tongue from evil, and his lips that they speak no guile:",
          "Let him eschew evil, and do good; let him seek peace, and ensue it.",
          "For the eyes of the Lord are over the righteous, and his ears are open unto their prayers: but the face of the Lord is against them that do evil.",
          "And who is he that will harm you, if ye be followers of that which is good?",
          "But and if ye suffer for righteousness' sake, happy are ye: and be not afraid of their terror, neither be troubled;",
          "But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear:",
          "Having a good conscience; that, whereas they speak evil of you, as of evildoers, they may be ashamed that falsely accuse your good conversation in Christ.",
          "For it is better, if the will of God be so, that ye suffer for well doing, than for evil doing.",
          "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God, being put to death in the flesh, but quickened by the Spirit:",
          "By which also he went and preached unto the spirits in prison;",
          "Which sometime were disobedient, when once the longsuffering of God waited in the days of Noah, while the ark was a preparing, wherein few, that is, eight souls were saved by water.",
          "The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ:",
          "Who is gone into heaven, and is on the right hand of God; angels and authorities and powers being made subject unto him."
        ],
        "1 Peter:4": [
          "Forasmuch then as Christ hath suffered for us in the flesh, arm yourselves likewise with the same mind: for he that hath suffered in the flesh hath ceased from sin;",
          "That he no longer should live the rest of his time in the flesh to the lusts of men, but to the will of God.",
          "For the time past of our life may suffice us to have wrought the will of the Gentiles, when we walked in lasciviousness, lusts, excess of wine, revellings, banquetings, and abominable idolatries:",
          "Wherein they think it strange that ye run not with them to the same excess of riot, speaking evil of you:",
          "Who shall give account to him that is ready to judge the quick and the dead.",
          "For for this cause was the gospel preached also to them that are dead, that they might be judged according to men in the flesh, but live according to God in the spirit.",
          "But the end of all things is at hand: be ye therefore sober, and watch unto prayer.",
          "And above all things have fervent charity among yourselves: for charity shall cover the multitude of sins.",
          "Use hospitality one to another without grudging.",
          "As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.",
          "If any man speak, let him speak as the oracles of God; if any man minister, let him do it as of the ability which God giveth: that God in all things may be glorified through Jesus Christ, to whom be praise and dominion for ever and ever. Amen.",
          "Beloved, think it not strange concerning the fiery trial which is to try you, as though some strange thing happened unto you:",
          "But rejoice, inasmuch as ye are partakers of Christ's sufferings; that, when his glory shall be revealed, ye may be glad also with exceeding joy.",
          "If ye be reproached for the name of Christ, happy are ye; for the spirit of glory and of God resteth upon you: on their part he is evil spoken of, but on your part he is glorified.",
          "But let none of you suffer as a murderer, or as a thief, or as an evildoer, or as a busybody in other men's matters.",
          "Yet if any man suffer as a Christian, let him not be ashamed, but let him glorify God on this behalf.",
          "For the time is come that judgment must begin at the house of God: and if it begin at us, what shall be the end of them that obey not the gospel of God?",
          "And if the righteous scarcely be saved, where shall the ungodly and the sinner appear?",
          "Wherefore let them that suffer according to the will of God commit the keeping of their souls to him in well doing, as unto a faithful Creator",
        ],
        "1 Peter:5": [
          "The elders which are among you I exhort, which I am a witness of the sufferings of Christ, and also a partaker of the glory that shall be revealed: I beseech you, as the elders of the Lord, to shepherd the flock of God among you, not by constraint but willingly; not for filthy lucre but for the good of all.",
          "Neither as being lords over God's heritage, but being ensamples to the flock.",
          "And when the chief Shepherd shall appear, ye shall receive a crown of glory that fadeth not away.",
          "Likewise, ye younger, submit yourselves unto the elder. Yea, all of you be subject one to another, and be clothed with humility: for God resisteth the proud, and giveth grace to the humble.",
          "Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:",
          "Casting all your care upon him; for he careth for you.",
          "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:",
          "Whom resist stedfast in the faith, knowing that the same afflictions are accomplished in your brethren that are in the world.",
          "But the God of all grace, who hath called us unto his eternal glory by Christ Jesus, after that ye have suffered a while, make you perfect, stablish, strengthen, settle you.",
          "To him be glory and dominion for ever and ever. Amen.",
          "By Silvanus, a faithful brother unto you, as I suppose, I have written briefly, exhorting and testifying that this is the true grace of God wherein ye stand.",
          "The church that is at Babylon, elected together with you, saluteth you; and so doth Marcus my son.",
          "Greet ye one another with a kiss of charity. Peace be with you all that are in Christ Jesus. Amen."
        ],
        "2 Peter:1": [
          "Simon Peter, a servant and an apostle of Jesus Christ, to them that have obtained like precious faith with us through the righteousness of God and our Saviour Jesus Christ:",
          "Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord,",
          "According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue:",
          "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.",
          "And beside this, giving all diligence, add to your faith virtue; and to virtue knowledge;",
          "And to knowledge temperance; and to temperance patience; and to patience godliness;",
          "And to godliness brotherly kindness; and to brotherly kindness charity.",
          "For if these things be in you, and abound, they make you that ye shall neither be barren nor unfruitful in the knowledge of our Lord Jesus Christ.",
          "But he that lacketh these things is blind, and cannot see afar off, and hath forgotten that he was purged from his old sins.",
          "Wherefore the rather, brethren, give diligence to make your calling and election sure: for if ye do these things, ye shall never fall:",
          "For so an entrance shall be ministered unto you abundantly into the everlasting kingdom of our Lord and Saviour Jesus Christ.",
          "Wherefore the rather, brethren, give diligence to make your calling and election sure: for if ye do these things, ye shall never fall:",
          "For so an entrance shall be ministered unto you abundantly into the everlasting kingdom of our Lord and Saviour Jesus Christ.",
          "Wherefore I will not be negligent to put you always in remembrance of these things, though ye know them, and are established in the present truth.",
          "Yea, I think it meet, as long as I am in this tabernacle, to stir you up by putting you in remembrance;",
          "Knowing that shortly I must put off this my tabernacle, even as our Lord Jesus Christ hath shewed me.",
          "Moreover I will endeavour that ye may be able after my decease to have these things always in remembrance.",
          "For we have not followed cunningly devised fables, when we made known unto you the power and coming of our Lord Jesus Christ, but were eyewitnesses of his majesty.",
          "For he received from God the Father honour and glory, when there came such a voice to him from the excellent glory, This is my beloved Son, in whom I am well pleased.",
          "And this voice which came from heaven we heard, when we were with him in the holy mount.",
          "We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place, until the day dawn, and the day star arise in your hearts:",
          "Knowing this first, that no prophecy of the scripture is of any private interpretation.",
          "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."
        ],
        "2 Peter:2": [
          "But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction.",
          "And many shall follow their pernicious ways; by reason of whom the way of truth shall be evil spoken of.",
          "And through covetousness shall they with feigned words make merchandise of you: whose judgment now of a long time lingereth not, and their damnation slumbereth not.",
          "For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment;",
          "And spared not the old world, but saved Noah the eighth person, a preacher of righteousness, bringing in the flood upon the world of the ungodly;",
          "And turning the cities of Sodom and Gomorrah into ashes condemned them with an overthrow, making them an example unto those that after should live ungodly;",
          "And delivered just Lot, vexed with the filthy conversation of the wicked:",
          "(For that righteous man dwelling among them, in seeing and hearing, vexed his righteous soul from day to day with their unlawful deeds;)",
          "The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust unto the day of judgment to be punished:",
          "But chiefly them that walk after the flesh in the lust of uncleanness, and despise government. Presumptuous are they, selfwilled, they are not afraid to speak evil of dignities.",
          "Whereas angels, which are greater in power and might, bring not railing accusation against them before the Lord.",
          "But these, as natural brute beasts, made to be taken and destroyed, speak evil of the things that they understand not; and shall utterly perish in their own corruption;",
          "And shall receive the reward of unrighteousness, as they that count it pleasure to riot in the day time. Spots they are and blemishes, sporting themselves with their own deceivings while they feast with you;",
          "Having eyes full of adultery, and that cannot cease from sin; beguiling unstable souls: an heart they have exercised with covetous practices; cursed children:",
          "Which have forsaken the right way, and are gone astray, following the way of Balaam the son of Bosor, who loved the wages of unrighteousness;",
          "But was rebuked for his iniquity: the dumb ass speaking with man's voice forbad the madness of the prophet.",
          "These are wells without water, clouds that are carried with a tempest; to whom the mist of darkness is reserved for ever.",
          "For when they speak great swelling words of vanity, they allure through the lusts of the flesh, through much wantonness, those that were clean escaped from them who live in error.",
          "While they promise them liberty, they themselves are the servants of corruption: for of whom a man is overcome, of the same is he brought in bondage.",
          "For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein, and overcome, the latter end is worse with them than the beginning.",
          "For it had been better for them never to have known the way of righteousness, than after they have known it, to turn from the holy commandment given unto them.",
          "But it is happened unto them according to the true proverb, The dog is turned to his own vomit again; and the sow that was washed to her wallowing in the mire."
        ],
       
        "2 Peter:3": [
          "This second epistle, beloved, I now write unto you; in both which I stir up your pure minds by way of remembrance:",
          "That ye may be mindful of the words which were spoken before by the holy prophets, and of the commandment of us the apostles of the Lord and Saviour:",
          "Knowing this first, that there shall come in the last days scoffers, walking after their own lusts,",
          "And saying, Where is the promise of his coming? for since the fathers fell asleep, all things continue as they were from the beginning of the creation.",
          "For this they willingly are ignorant of, that by the word of God the heavens were of old, and the earth standing out of the water and in the water:",
          "Whereby the world that then was, being overflowed with water, perished:",
          "But the heavens and the earth, which are now, by the same word are kept in store, reserved unto fire against the day of judgment and perdition of ungodly men.",
          "But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.",
          "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
          "But the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat, the earth also and the works that are therein shall be burned up.",
          "Seeing then that all these things shall be dissolved, what manner of persons ought ye to be in all holy conversation and godliness,",
          "Looking for and hasting unto the coming of the day of God, wherein the heavens being on fire shall be dissolved, and the elements shall melt with fervent heat?",
          "Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.",
          "Wherefore, beloved, seeing that ye look for such things, be diligent that ye may be found of him in peace, without spot, and blameless.",
          "And account that the longsuffering of our Lord is salvation; even as our beloved brother Paul also according to the wisdom given unto him hath written unto you;",
          "As also in all his epistles, speaking in them of these things; in which are some things hard to be understood, which they that are unlearned and unstable wrest, as they do also the other scriptures, unto their own destruction.",
          "Ye therefore, beloved, seeing ye know these things before, beware lest ye also, being led away with the error of the wicked, fall from your own steadfastness.",
          "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen."
        ],
         "1 John:1": [
          "That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked upon, and our hands have handled, of the Word of life;",
          "For the life was manifested, and we have seen it, and bear witness, and shew unto you that eternal life, which was with the Father, and was manifested unto us;",
          "That which we have seen and heard declare we unto you, that ye also may have fellowship with us: and truly our fellowship is with the Father, and with his Son Jesus Christ.",
          "And these things write we unto you, that your joy may be full.",
          "This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all.",
          "If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth:",
          "But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.",
          "If we say that we have no sin, we deceive ourselves, and the truth is not in us.",
          "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
          "If we say that we have not sinned, we make him a liar, and his word is not in us.",
        ],
        "1 John:2": [
          "My little children, these things write I unto you, that ye sin not. And if any man sin, we have an advocate with the Father, Jesus Christ the righteous:",
          "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world.",
          "And hereby we do know that we know him, if we keep his commandments.",
          "He that saith, I know him, and keepeth not his commandments, is a liar, and the truth is not in him.",
          "But whoso keepeth his word, in him verily is the love of God perfected: hereby know we that we are in him.",
          "He that saith he abideth in him ought himself also so to walk, even as he walked.",
          "Brethren, I write no new commandment unto you, but an old commandment which ye had from the beginning. The old commandment is the word which ye have heard.",
          "Again, a new commandment I write unto you, which thing is true in him and in you: because the darkness is past, and the true light now shineth.",
          "He that saith he is in the light, and hateth his brother, is in darkness even until now.",
          "He that loveth his brother abideth in the light, and there is none occasion of stumbling in him.",
          "But he that hateth his brother is in darkness, and walketh in darkness, and knoweth not whither he goeth, because that darkness hath blinded his eyes.",
          "I write unto you, little children, because your sins are forgiven you for his name's sake.",
          "I write unto you, fathers, because ye have known him that is from the beginning. I write unto you, young men, because ye have overcome the wicked one.",
          "I write unto you, little children, because ye have known the Father.",
          "I have written unto you, fathers, because ye have known him that is from the beginning. I have written unto you, young men because ye are strong, and the word of God abideth in you, and ye have overcome the wicked one.",
          "Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him.",
          "For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world.",
          "And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever.",
          "Little children, it is the last time: and as ye have heard that antichrist shall come, even now are there many antichrists; whereby we know that it is the last time.",
          "They went out from us, but they were not of us; for if they had been of us, they would no doubt have continued with us: but they went out, that they might be made manifest that they were not all of us.",
          "But ye have an unction from the Holy One, and ye know all things.",
          "I have not written unto you because ye know not the truth, but because ye know it, and that no lie is of the truth.",
          "Who is a liar but he that denieth that Jesus is the Christ? He is antichrist, that denieth the Father and the Son.",
          "Whosoever denieth the Son, the same hath not the Father: (but) he that acknowledgeth the Son hath the Father also.",
          "Let that therefore abide in you, which ye have heard from the beginning. If that which ye have heard from the beginning shall remain in you, ye also shall continue in the Son, and in the Father.",
          "And this is the promise that he hath promised us, even eternal life.",
          "These things have I written unto you concerning them that seduce you.",
          "But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him.",
          "And now, little children, abide in him; that, when he shall appear, we may have confidence, and not be ashamed before him at his coming.",
          "If ye know that he is righteous, ye know that every one that doeth righteousness is born of him."
        ],
       "1 John:3": [
          "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.",
          "Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.",
          "And every man that hath this hope in him purifieth himself, even as he is pure.",
          "Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.",
          "And ye know that he was manifested to take away our sins; and in him is no sin.",
          "Whosoever abideth in him sinneth not: whosoever sinneth hath not seen him, neither known him.",
          "Little children, let no man deceive you: he that doeth righteousness is righteous, even as he is righteous.",
          "He that committeth sin is of the devil; for the devil sinneth from the beginning. For this purpose the Son of God was manifested, that he might destroy the works of the devil.",
          "Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.", 
          "In this the children of God are manifest, and the children of the devil: whosoever doeth not righteousness is not of God, neither he that loveth not his brother.",
          "For this is the message that ye heard from the beginning, that we should love one another.",
          "Not as Cain, who was of that wicked one, and slew his brother. And wherefore slew he him? because his own works were evil, and his brother's righteous.",
          "Marvel not, my brethren, if the world hate you.",
          "We know that we have passed from death unto life, because we love the brethren. He that loveth not his brother abideth in death.",
          "Whosoever hateth his brother is a murderer: and ye know that no murderer hath eternal life abiding in him.",
          "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren.",
          "But whosoever hath this world's good, and seeth his brother have need, and shutteth up his bowels of compassion from him, how dwelleth the love of God in him?",
          "My little children, let us not love in word, neither in tongue; but in deed and in truth.",
          "And hereby we know that we are of the truth, and shall assure our hearts before him.",
          "For if our heart condemn us, God is greater than our heart, and knoweth all things.",
          "Beloved, if our heart condemn us not then have we confidence toward God.",
          "And whatsoever we ask, we receive of him, because we keep his commandments, and do those things that are pleasing in his sight.",
          "And this is his commandment, That we should believe on the name of his Son Jesus Christ, and love one another, as he gave us commandment.",
          "And he that keepeth his commandments dwelleth in him, and he in him. And hereby we know that he abideth in us, by the Spirit which he hath given us."
        ],
        "1 John:4": [
          "Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world.",
          "Hereby know ye the Spirit of God: Every spirit that confesseth that Jesus Christ is come in the flesh is of God:",
          "And every spirit that confesseth not that Jesus Christ is come in the flesh is not of God: and this is that spirit of antichrist, whereof ye have heard that it should come; and even now already is it in the world.",
          "Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world.",
          "They are of the world: therefore speak they of the world, and the world heareth them.",
          "We are of God: he that knoweth God heareth us; he that is not of God heareth not us. Hereby know we the spirit of truth, and the spirit of error.",
          "Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.",
          "He that loveth not knoweth not God; for God is love.",
          "In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.",
          "Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.",
          "Beloved, if God so loved us, we ought also to love one another.",
          "No man hath seen God at any time. If we love one another, God dwelleth in us, and his love is perfected in us.",
          "Hereby know we that we dwell in him, and he in us, because he hath given us of his Spirit.",
          "And we have seen and do testify that the Father sent the Son to be the Saviour of the world.",
          "Whosoever shall confess that Jesus is the Son of God, God dwelleth in him, and he in God.",
          "And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him.",
          "Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world.",
          "There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.",
          "We love him, because he first loved us.",
          "If a man say, I love God, and hateth his brother, he is a liar: for he that loveth not his brother whom he hath seen, how can he love God whom he hath not seen?",
          "And this commandment have we from him, That he who loveth God love his brother also."
        ],
        "1 John:5": [
          "Whosoever believeth that Jesus is the Christ is born of God: and every one that loveth him that begat loveth him also that is begotten of him.",
          "By this we know that we love the children of God, when we love God, and keep his commandments.",
          "For this is the love of God, that we keep his commandments: and his commandments are not grievous.",
          "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.",
          "Who is he that overcometh the world, but he that believeth that Jesus is the Son of God?",
          "This is he that came by water and blood, even Jesus Christ; not by water only, but by water and blood. And it is the Spirit that beareth witness, because the Spirit is truth.",
          "For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one.",
          "And there are three that bear witness in earth, the Spirit, and the water, and the blood: and these three agree in one.",
          "If we receive the witness of men, the witness of God is greater: for this is the witness of God which he hath testified of his Son.",
          "He that believeth on the Son of God hath the witness in himself: he that believeth not God hath made him a liar; because he believeth not the record that God gave of his Son.",
          "And this is the record, that God hath given to us eternal life, and this life is in his Son.",
          "He that hath the Son hath life; and he that hath not the Son of God hath not life.",
          "These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.",
          "And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us:",
          "And if we know that he hear us, whatsoever we ask, we know that we have the petitions that we desired of him.",
          "If any man see his brother sin a sin which is not unto death, he shall ask, and he shall give him life for them that sin not unto death. There is a sin unto death: I do not say that he shall pray for it.",
          "All unrighteousness is sin: and there is a sin not unto death.",
          "We know that whosoever is born of God sinneth not; but he that is begotten of God keepeth himself, and that wicked one toucheth him not.",
          "We know that we are of God, and the whole world lieth in wickedness.",
          "And we know that the Son of God is come, and hath given us an understanding, that we may know him that is true, and we are in him that is true, even in his Son Jesus Christ. This is the true God, and eternal life.",
          "Little children, keep yourselves from idols. Amen."
        ],
        
        "2 John:1": [
          "The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth;",
          "For the truth's sake, which dwelleth in us, and shall be with us for ever.",
          "Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and love.",
          "I rejoiced greatly that I found of thy children walking in truth, as we have received a commandment from the Father.",
          "And now I beseech thee, lady, not as though I wrote a new commandment unto thee, but that which we had from the beginning, that we love one another.",
          "And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.",
          "For many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh. This is a deceiver and an antichrist.",
          "Look to yourselves, that we lose not those things which we have wrought, but that we receive a full reward.",
          "Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son.",
          "If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed:",
          "For he that biddeth him God speed is partaker of his evil deeds.",
          "Having many things to write unto you, I would not write with paper and ink: but I trust to come unto you, and speak face to face, that our joy may be full.",
          "The children of thy elect sister greet thee. Amen."
        ],
        "3 John:1": [
          "The elder unto the wellbeloved Gaius, whom I love in the truth.",
          "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
          "For I rejoiced greatly, when the brethren came and testified of the truth that is in thee, even as thou walkest in the truth.",
          "I have no greater joy than to hear that my children walk in truth.",
          "Beloved, thou doest faithfully whatsoever thou doest to the brethren, and to strangers;",
          "Which have borne witness of thy charity before the church: whom if thou bring forward on their journey after a godly sort, thou shalt do well:",
          "Because that for his name's sake they went forth, taking nothing of the Gentiles.",
          "We therefore ought to receive such, that we might be fellowhelpers to the truth.",
          "I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not.",
          "Wherefore, if I come, I will remember his deeds which he doeth, prating against us with malicious words: and not content therewith, neither doth he himself receive the brethren, and forbiddeth them that would, and casteth them out of the church.",
          "Beloved, follow not that which is evil, but that which is good. He that doeth good is of God: but he that doeth evil hath not seen God.",
          "Demetrius hath good  report of all men, and of the truth itself: yea, and we also bear record; and ye know that our record is true.",
          "I had many things to write, but I will not with ink and pen write unto thee:",
          "But I trust I shall shortly see thee, and we shall speak face to face. Peace be to thee. Our friends salute thee. Greet the friends by name."
        ],
        "Jude:1": [
          "Jude, the servant of Jesus Christ, and brother of James, to them that are sanctified by God the Father, and preserved in Jesus Christ, and called:",
          "Mercy unto you, and peace, and love, be multiplied.",
          "Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints.",
          "For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ.",
          "I will therefore put you in remembrance, though ye once knew this, how that the Lord, having saved the people out of the land of Egypt, afterward destroyed them that believed not.",
          "And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day.",
          "Even as Sodom and Gomorrah, and the cities about them in like manner, giving themselves over to fornication, and going after strange flesh, are set forth for an example, suffering the vengeance of eternal fire.",
          "Likewise also these filthy dreamers defile the flesh, despise dominion, and speak evil of dignities.",
          "Yet Michael the archangel, when contending with the devil he disputed about the body of Moses, durst not bring against him a railing accusation, but said, The Lord rebuke thee.",
          "But these speak evil of those things which they know not: but what they know naturally, as brute beasts, in those things they corrupt themselves.",
          "Woe unto them! for they have gone in the way of Cain, and ran greedily after the error of Balaam for reward, and perished in the gainsaying of Core.",
          "These are spots in your feasts of charity, when they feast with you, feeding themselves without fear: clouds they are without water, carried about of winds; trees whose fruit withereth, without fruit, twice dead, plucked up by the roots;",
          "Raging waves of the sea, foaming out their own shame; wandering stars, to whom is reserved the blackness of darkness for ever.",
          "And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints,",
          "To execute judgment upon all, and to convince all that are ungodly among them of all their ungodly deeds which they have ungodly committed, and of all their hard speeches which ungodly sinners have spoken against him.",
          "These are murmurers, complainers, walking after their own lusts; and their mouth speaketh great swelling words, having men's persons in admiration because of advantage.",
          "But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost,",
          "Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.",
          "And of some have compassion, making a difference:",
          "And others save with fear, pulling them out of the fire; hating even the garment spotted by the flesh.",
          "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,",
          "To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen."
        ],
       "Revelation:1": [
          "The Revelation of Jesus Christ, which God gave unto him, to shew unto his servants things which must shortly come to pass; and he sent and signified it by his angel unto his servant John:",
          "Who bare record of the word of God, and of the testimony of Jesus Christ, and of all things that he saw.",
          "Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand.",
          "John to the seven churches which are in Asia: Grace be unto you, and peace, from him which is, and which was, and which is to come; and from the seven Spirits which are before his throne;",
          "And from Jesus Christ, who is the faithful witness, and the first begotten of the dead, and the prince of the kings of the earth. Unto him that loved us, and washed us from our sins in his own blood,",
          "And hath made us kings and priests unto God and his Father; to him be glory and dominion for ever and ever. Amen.",
          "Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen.",
          "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
          "I John, who also am your brother, and companion in tribulation, and in the kingdom and patience of Jesus Christ, was in the isle that is called Patmos, for the word of God, and for the testimony of Jesus Christ.",
          "I was in the Spirit on the Lord's day, and heard behind me a great voice, as of a trumpet,",
          "Saying, I am Alpha and Omega, the first and the last: and, What thou seest, write in a book, and send it unto the seven churches which are in Asia; unto Ephesus, and unto Smyrna, and unto Pergamos, and unto Thyatira, and unto Sardis, and unto Philadelphia, and unto Laodicea.",
          "And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks;",
          "And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle.",
          "His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire.",
          "And his feet like unto fine brass, as if they burned in a furnace; and his voice as the sound of many waters.",
          "And he had in his right hand seven stars: and out of his mouth went a sharp twoedged sword: and his countenance was as the sun shineth in his strength.",
          "And when I saw him, I fell at his feet as dead. And he laid his right hand upon me, saying unto me, Fear not; I am the first and the last:",
          "I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.",
          "Write the things which thou hast seen, and the things which are, and the things which shall be hereafter;",
          "The mystery of the seven stars which thou sawest in my right hand, and the seven golden candlesticks. The seven stars are the angels of the seven churches: and the seven candlesticks which thou sawest are the seven churches."
        ],
        "Revelation:2": [
          "Unto the angel of the church of Ephesus write; These things saith he that holdeth the seven stars in his right hand, who walketh in the midst of the seven golden candlesticks;",
          "I know thy works, and thy labour, and thy patience, and how thou canst not bear them which are evil: and thou hast tried them which say they are apostles, and are not, and hast found them liars:",
          "And hast borne, and hast patience, and for my name's sake hast laboured, and hast not fainted.",
          "Nevertheless I have somewhat against thee, because thou hast left thy first love.",
          "Remember therefore from whence thou art fallen, and repent, and do the first works; or else I will come unto thee quickly, and will remove thy candlestick out of his place, except thou repent.",
          "But this thou hast, that thou hatest the deeds of the Nicolaitans, which I also hate.",
          "He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.",
          "And unto the angel of the church in Smyrna write; These things saith the first and the last, which was dead, and is alive;",
          "I know thy works, and tribulation, and poverty, (but thou art rich) and I know the blasphemy of them which say they are  Jews, and are not, but are the synagogue of Satan.",
          "Fear none of those things which thou shalt suffer: behold, the devil shall cast some of you into prison, that ye may be tried; and ye shall have tribulation ten days: be thou faithful unto death, and I will give thee a crown of life.",
          "He that hath an ear, let him hear what the Spirit saith unto the churches; He that overcometh shall not be hurt of the second death.",
          "And unto the angel of the church in Pergamos write; These things saith he which hath the sharp sword with two edges;",
          "I know thy works, and where thou dwellest, even where Satan's seat is: and thou holdest fast my name, and hast not denied my faith, even in those days wherein Antipas was my faithful martyr, who was slain among you, where Satan dwelleth.",
          "But I have a few things against thee, because thou hast there them that hold the doctrine of Balaam, who taught Balac to cast a stumblingblock before the children of  Israel, to eat things sacrificed unto idols, and to commit fornication.",
          "So hast thou also them that hold the doctrine of the Nicolaitans, which thing I hate.",
          "Repent; or else I will come unto thee quickly, and will fight against them with the sword of my mouth.",
          "He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the hidden manna, and will give him a white stone, and in the stone a new name written, which no man knoweth saving he that receiveth it.",
          "And unto the angel of the church in Thyatira write; These things saith the Son of God, who hath his eyes like unto a flame of fire, and his feet are like fine brass;",
          "I know thy works, and charity, and service, and faith, and thy patience, and thy works; and the last to be more than the first.",
          "Notwithstanding I have a few things against thee, because thou sufferest that  woman Jezebel, which calleth herself a prophetess, to teach and to seduce my servants to commit fornication, and to eat things sacrificed unto idols.",
          "And I gave her space to repent of her fornication; and she repented not.",
          "Behold, I will cast her into a bed, and them that commit adultery with her into great tribulation, except they repent of their deeds.",
          "And I will kill her children with death; and all the churches shall know that I am he which searcheth the reins and hearts: and I will give unto every one of you according to your works.",
          "But unto you I say, and unto the rest in Thyatira, as many as have not this doctrine, and which have not known the depths of Satan, as they speak; I will put upon you none other burden.",
          "But that which ye have already hold fast till I come.",
          "And he that overcometh, and keepeth my works unto the end, to him will I give power over the nations:",
          "And he shall rule them with a rod of iron; as the vessels of a potter shall they be broken to shivers: even as I received of my Father.",
          "And I will give him the morning star.",
          "He that hath an ear, let him hear what the Spirit saith unto the churches."
           
        ],
       "Revelation:3": [
          "And unto the angel of the church in Sardis write; These things saith he that hath the seven Spirits of God, and the seven stars; I know thy works, that thou hast a name that thou livest, and art dead.",
          "Be watchful, and strengthen the things which remain, that are ready to die: for I have not found thy works perfect before God.",
          "Remember therefore how thou hast received and heard, and hold fast, and repent. If therefore thou shalt not watch, I will come on thee as a thief, and thou shalt not know what hour I will come upon thee.",
          "Thou hast a few names even in Sardis which have not defiled their garments; and they shall walk with me in white: for they are worthy.",
          "He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels.",
          "And unto the angel of the church in Philadelphia write; These things saith he that is holy, he that is true, he that hath the key of David, he that openeth, and not shutteth; and shutteth, and not openeth;",
          "I know thy works: behold, I have set before thee an open door, and no man can shut it: for thou hast a little strength, and hast kept my word, and hast not denied my name.",
          "Behold, I will make them of the synagogue of Satan, which say they are Jews, and are not, but do lie; behold, I will make them to come and worship before thy feet, and to know that I have loved thee.",
          "Because thou hast kept the word of my patience, I also will keep thee from the hour of temptation, which shall come upon all the world, to try them that dwell upon the earth.",
          "Behold, I come quickly: hold that fast which thou hast, that no man take thy crown.",
          "He that overcometh, I will make him a pillar in the temple of my God, and he shall go no more out: and I will write upon him the name of my God, and the name of the city of my God, which is new Jerusalem, which cometh down out of heaven from my God: and I will write upon him my new name.",
          "He that hath an ear, let him hear what the Spirit saith unto the churches.",
          "And unto the angel of the church of the Laodiceans write; These things saith the Amen, the faithful and true witness, the beginning of the creation of God;",
          "I know thy works, that thou art neither cold nor hot: I would thou wert cold or hot.",
          "So then because thou art lukewarm, and neither cold nor hot, I will spue thee out of my mouth.",
          "Because thou sayest, I am rich, and increased with goods, and have need of nothing; and knowest not that thou art wretched, and miserable, and poor, and blind, and naked:",
          "I counsel thee to buy of me gold tried in the fire, that thou mayest be rich; and white raiment, that thou mayest be clothed, and that the shame of thy nakedness do not appear; and anoint thine eyes with eyesalve, that thou mayest see.",
          "As many as I love, I rebuke and chasten: be zealous therefore, and repent.",
          "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
          "To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne.",
          "He that hath an ear, let him hear what the Spirit saith unto the churches."
        ],
        "Revelation:4": [
          "After this I looked, and, behold, a door was opened in heaven: and the first voice which I heard was as it were of a trumpet talking with me; which said, Come up hither, and I will shew thee things which must be hereafter.",
          "And immediately I was in the spirit: and, behold, a throne was set in heaven, and one sat on the throne.",
          "And he that sat was to look upon like a jasper and a sardine stone: and there was a rainbow round about the throne, in sight like unto an emerald.",
          "And round about the throne were four and twenty seats: and upon the seats I saw four and twenty elders sitting, clothed in white raiment; and they had on their heads crowns of gold.",
          "And out of the throne proceeded lightnings and thunderings and voices: and there were seven lamps of fire burning before the throne, which are the seven Spirits of God.",
          "And before the throne there was a sea of glass like unto crystal: and in the midst of the throne, and round about the throne, were four beasts full of eyes before and behind.",
          "And the first beast was like a lion, and the second beast like a calf, and the third beast had a face as a man, and the fourth beast was like a flying eagle.",
          "And the four beasts had each of them six wings about him; and they were full of eyes within: and they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.",
          "And when those beasts give glory and honour and thanks to him that sat on the throne, who liveth for ever and ever,",
          "The four and twenty elders fall down before him that sat on the throne, and worship him that liveth for ever and ever, and cast their crowns before the throne, saying,",
          "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created."
        ],
        
       "Revelation:5": [
          "And I saw in the right hand of him that sat on the throne a book written within and on the backside, sealed with seven seals.",
          "And I saw a strong angel proclaiming with a loud voice, Who is worthy to open the book, and to loose the seals thereof?",
          "And no man in heaven, nor in earth, neither under the earth, was able to open the book, neither to look thereon.",
          "And I wept much, because no man was found worthy to open and to read the book, neither to look thereon.",
          "And one of the elders saith unto me, Weep not: behold, the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book, and to loose the seven seals thereof.",
          "And I beheld, and, lo, in the midst of the throne and of the four beasts, and in the midst of the elders, stood a Lamb as it had been slain, having seven horns and seven eyes, which are the seven Spirits of God sent forth into all the earth.",
          "And he came and took the book out of the right hand of him that sat upon the throne.",
          "And when he had taken the book, the four beasts and four and twenty elders fell down before the Lamb, having every one of them harps, and golden vials full of odours, which are the prayers of saints.",
          "And they sung a new song, saying, Thou art worthy to take the book, and to open the seals thereof: for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation;",
          "And hast made us unto our God kings and priests: and we shall reign on the earth.",
          "And I beheld, and I heard the voice of many angels round about the throne and the beasts and the elders: and the number of them was ten thousand times ten thousand, and thousands of thousands;",
          "Saying with a loud voice, Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.",
          "And every creature which is in heaven, and on the earth, and under the earth, and such as are in the sea, and all that are in them, heard I saying, Blessing, and honour, and glory, and power, be unto him that sitteth upon the throne, and unto the Lamb for ever and ever.",
          "And the four beasts said, Amen. And the four and twenty elders fell down and worshipped him that liveth for ever and ever."
        ],
        "Revelation:6": [
          "And I saw when the Lamb opened one of the seals, and I heard, as it were the noise of thunder, one of the four beasts saying, Come and see.",
          "And I saw, and behold a white horse: and he that sat on him had a bow; and a crown was given unto him: and he went forth conquering, and to conquer.",
          "And when he had opened the second seal, I heard the second beast say, Come and see.",
          "And there went out another horse that was red: and power was given to him that sat thereon to take peace from the earth, and that they should kill one another: and there was given unto him a great sword.",
          "And when he had opened the third seal, I heard the third beast say, Come and see.",
          "And I beheld, and lo a black horse; and he that sat on him had a pair of balances in his hand.",
          "And I heard a voice in the midst of the four beasts say, A measure of wheat for a penny, and three measures of barley for a penny; and see thou hurt not the oil and the wine.",
          "And when he had opened the fourth seal, I heard the voice of the fourth beast say, Come and see.",
          "And I looked, and behold a pale horse: and his name that sat on him was Death, and Hell followed with him. And power was given unto them over the fourth part of the earth, to kill with sword, and with hunger, and with death, and with the beasts of the earth.",
          "And when he had opened the fifth seal, I saw under the altar the souls of them that were slain for the word of God, and for the testimony which they held:",
          "And they cried with a loud voice, saying, How long, O Lord, holy and true, dost thou not judge and avenge our blood on them that dwell on the earth?",
          "And white robes were given unto every one of them; and it was said unto them, that they should rest yet for a little season, until their fellowservants also and their brethren, that should be killed as they were, should be fulfilled.",
          "And I beheld when he had opened the sixth seal, and, lo, there was a great earthquake; and the sun became black as sackcloth of hair, and the moon became as blood;",
          "And the stars of heaven fell unto the earth, even as a fig tree casteth her untimely figs, when she is shaken of a mighty wind.",
          "And the heaven departed as a scroll when it is rolled together; and every mountain and island were moved out of their places.",
          "And the kings of the earth, and the great men, and the rich men, and the chief captains, and the mighty men, and every bondman, and every free man, hid themselves in the dens and in the rocks of the mountains;",
          "And said to the mountains and rocks, Fall on us, and hide us from the face of him that sitteth on the throne, and from the wrath of the Lamb:",
          "For the great day of his wrath is come; and who shall be able to stand?"
        ],
        "Revelation:7": [
          "And after these things I saw four angels standing on the four corners of the earth, holding the four winds of the earth, that the wind should not blow on the earth, nor on the sea, nor on any tree.",
          "And I saw another angel ascending from the east, having the seal of the living God: and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea,",
          "Saying, Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads.",
          "And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel.",
          "Of the tribe of Juda were sealed twelve thousand. Of the tribe of Reuben were sealed twelve thousand. Of the tribe of Gad were sealed twelve thousand.",
          "Of the tribe of Aser were sealed twelve thousand. Of the tribe of Nepthalim were sealed twelve thousand. Of the tribe of Manasses were sealed twelve thousand.",
          "Of the tribe of Simeon were sealed twelve thousand. Of the tribe of Levi were sealed twelve thousand. Of the tribe of Issachar were sealed twelve thousand.",
          "Of the tribe of Zabulon were sealed twelve thousand. Of the tribe of Joseph were sealed twelve thousand. Of the tribe of Benjamin were sealed twelve thousand.",
          "After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb, clothed with white robes, and palms in their hands;",
          "And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb.",
          "And all the angels stood round about the throne, and about the elders and the four beasts, and fell before the throne on their faces, and worshipped God,",
          "Saying, Amen: Blessing, and glory, and wisdom, and thanksgiving, and honour, and power, and might, be unto our God for ever and ever. Amen.",
          "And one of the elders answered, saying unto me, What are these which are arrayed in white robes? and whence came they?",
          "And I said unto him, Sir, thou knowest. And he said to me, These are they which came out of great tribulation, and have washed their robes, and made them white in the blood of the Lamb.",
          "Therefore are they before the throne of God, and serve him day and night in his temple: and he that sitteth on the throne shall dwell among them.",
          "They shall hunger no more, neither thirst any more; neither shall the sun light on them, nor any heat.",
          "For the Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears from their eyes."
        ],
       "Revelation:8": [
          "And when he had opened the seventh seal, there was silence in heaven about the space of half an hour.",
          "And I saw the seven angels which stood before God; and to them were given seven trumpets.",
          "And another angel came and stood at the altar, having a golden censer; and there was given unto him much incense, that he should offer it with the prayers of all saints upon the golden altar which was before the throne.",
          "And the smoke of the incense, which came with the prayers of the saints, ascended up before God out of the angel's hand.",
          "And the angel took the censer, and filled it with fire of the altar, and cast it into the earth: and there were voices, and thunderings, and lightnings, and an earthquake.",
          "And the seven angels which had the seven trumpets prepared themselves to sound.",
          "The first angel sounded, and there followed hail and fire mingled with blood, and they were cast upon the earth: and the third part of trees was burnt up, and all green grass was burnt up.",
          "And the second angel sounded, and as it were a great mountain burning with fire was cast into the sea: and the third part of the sea became blood;",
          "And the third part of the creatures which were in the sea, and had life, died; and the third part of the ships were destroyed.",
          "And the third angel sounded, and there fell a great star from heaven, burning as it were a lamp, and it fell upon the third part of the rivers, and upon the fountains of waters;",
          "And the name of the star is called Wormwood: and the third part of the waters became wormwood; and many  men died of the waters, because they were made bitter.",
          "And the fourth angel sounded, and the third part of the sun was smitten, and the third part of the moon, and the third part of the stars; so as the third part of them was darkened, and the day shone not for a third part of it, and the night likewise.",
          "And I beheld, and heard an angel flying through the midst of heaven, saying with a loud voice, Woe, woe, woe, to the inhabiters of the earth by reason of the other voices of the trumpet of the three angels, which are yet to sound!"
        ],
       "Revelation:9": [
          "And the fifth angel sounded, and I saw a star fall from heaven unto the earth: and to him was given the key of the bottomless pit.",
          "And he opened the bottomless pit; and there arose a smoke out of the pit, as the smoke of a great furnace; and the sun and the air were darkened by reason of the smoke of the pit.",
          "And there came out of the smoke locusts upon the earth: and unto them was given power, as the scorpions of the earth have power.",
          "And it was commanded them that they should not hurt the grass of the earth, neither any green thing, neither any tree; but only those men which have not the seal of God in their foreheads.",
          "And to them it was given that they should not kill them, but that they should be tormented five months: and their torment was as the torment of a scorpion, when he striketh a man.",
          "And in those days shall men seek death, and shall not find it; and shall desire to die, and death shall flee from them.",
          "And the shapes of the locusts were like unto horses prepared unto battle; and on their heads were as it were crowns like gold, and their faces were as the faces of men.",
          "And they had hair as the hair of women, and their teeth were as the teeth of lions.",
          "And they had breastplates, as it were breastplates of iron; and the sound of their wings was as the sound of chariots of many horses running to battle.",
          "And they had tails like unto scorpions, and there were stings in their tails: and their power was to hurt men five months.",
          "And they had a king over them, which is the angel of the bottomless pit, whose name in the Hebrew tongue is Abaddon, but in the Greek tongue hath his name Apollyon.",
          "The first woe is past; and, behold, there come two woes more hereafter.",
          "And the sixth angel sounded, and I heard a voice from the four horns of the golden altar which is before God,",
          "Saying to the sixth angel which had the trumpet, Loose the four angels which are bound in the great river Euphrates.",
          "And the four angels were loosed, which were prepared for an hour, and a day, and a month, and a year, for to slay the third part of men.",
          "And the number of the army of the horsemen were two hundred thousand thousand: and I heard the number of them.",
          "And thus I saw the horses in the vision, and them that sat on them, having breastplates of fire, and of jacinth, and brimstone: and the heads of the horses were as the heads of lions; and out of their mouths issued fire and smoke and brimstone.",
          "By these three was the third part of men killed, by the fire, and by the smoke, and by the brimstone, which issued out of their mouths.",
          "For their power is in their mouth, and in their tails: for their tails were like unto serpents, and had heads, and with them they do hurt.",
          "And the rest of the men which were not killed by these plagues yet repented not of the works of their hands, that they should not worship devils, and idols of gold, and silver, and brass, and stone, and of wood: which neither can see, nor hear, nor walk:",
          "Neither repented they of their murders, nor of their sorceries, nor of their fornication, nor of their thefts."
        ],
        "Revelation:10": [
          "And I saw another mighty angel come down from heaven, clothed with a cloud: and a rainbow was upon his head, and his face was as it were the sun, and his feet as pillars of fire:",
          "And he had in his hand a little book open: and he set his right foot upon the sea, and his left foot on the earth,",
          "And cried with a loud voice, as when a lion roareth: and when he had cried, seven thunders uttered their voices.",
          "And when the seven thunders had uttered their voices, I was about to write: and I heard a voice from heaven saying unto me, Seal up those things which the seven thunders uttered, and write them not.",
          "And the angel which I saw stand upon the sea and upon the earth lifted up his hand to heaven,",
          "And sware by him that liveth for ever and ever, who created heaven, and the things that therein are, and the earth, and the things that therein are, and the sea, and the things which are therein, that there should be time no longer:",
          "But in the days of the voice of the seventh angel, when he shall begin to sound, the mystery of God should be finished, as he hath declared to his servants the prophets.",
          "And the voice which I heard from heaven spake unto me again, and said, Go and take the little book which is open in the hand of the angel which standeth upon the sea and upon the earth.",
          "And I went unto the angel, and said unto him, Give me the little book. And he said unto me, Take it, and eat it up; and it shall make thy belly bitter, but it shall be in thy mouth sweet as honey.",
          "And I took the little book out of the angel's hand, and ate it up; and it was in my mouth sweet as honey: and as soon as I had eaten it, my belly was bitter.",
          "And he said unto me, Thou must prophesy again before many peoples, and nations, and tongues, and kings."
        ],
        "Revelation:11": [
          "And there was given me a reed like unto a rod: and the angel stood, saying, Rise, and measure the temple of God, and the altar, and them that worship therein.",
          "But the court which is without the temple leave out, and measure it not; for it is given unto the Gentiles: and the holy city shall they tread under foot forty and two months.",
          "And I will give power unto my two witnesses, and they shall prophesy a thousand two hundred and threescore days, clothed in sackcloth.",
          "These are the two olive trees, and the two candlesticks standing before the God of the earth.",
          "And if any man will hurt them, fire proceedeth out of their mouth, and devoureth their enemies: and if any man will hurt them, he must in this manner be killed.",
          "These have power to shut heaven, that it rain not in the days of their prophecy: and have power over waters to turn them to blood, and to smite the earth with all plagues, as often as they will.",
          "And when they shall have finished their testimony, the beast that ascendeth out of the bottomless pit shall make war against them, and shall overcome them, and kill them.",
          "And their dead bodies shall lie in the street of the great city, which spiritually is called Sodom and Egypt, where also our Lord was crucified.",
          "And they of the people and kindreds and tongues and nations shall see their dead bodies three days and an half, and shall not suffer their dead bodies to be put in graves.",
          "And they that dwell upon the earth shall rejoice over them, and make merry, and shall send gifts one to another; because these two prophets tormented them that dwelt on the earth.",
          "And after three days and an half the Spirit of life from God entered into them, and they stood upon their feet; and great fear fell upon them which saw them.",
          "And they heard a great voice from heaven saying unto them, Come up hither. And they ascended up to heaven in a cloud; and their enemies beheld them.",
          "And the same hour was there a great earthquake, and the tenth part of the city fell, and in the earthquake were slain of men seven thousand: and the remnant were affrighted, and gave glory to the God of heaven.",
          "The second woe is past; and, behold, the third woe cometh quickly.",
          "And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.",
          "And the four and twenty elders, which sat before God on their seats, fell upon their faces, and worshipped God,",
          "Saying, We give thee thanks, O Lord God Almighty, which art, and wast, and art to come; because thou hast taken to thee thy great power, and hast reigned.",
          "And the nations were angry, and thy wrath is come, and the time of the dead, that they should be judged, and that thou shouldest give reward unto thy servants the prophets, and to the saints, and them that fear thy name, small and great; and shouldest destroy them which destroy the earth.",
          "And the temple of God was opened in heaven, and there was seen in his temple the ark of his testament: and there were lightnings, and voices, and thunderings, and an earthquake, and great hail."
        ],
        "Revelation:12":[
          "And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars:",
          "And she being with child cried, travailing in birth, and pained to be delivered.",
          "And there appeared another wonder in heaven; and behold a great red dragon, having seven heads and ten horns, and seven crowns upon his heads.",
          "And his tail drew the third part of the stars of heaven, and did cast them to the earth: and the dragon stood before the woman which was ready to be delivered, for to devour her child as soon as it was born.",
          "And she brought forth a man child, who was to rule all nations with a rod of iron: and her child was caught up unto God, and to his throne.",
          "And the woman fled into the wilderness, where she hath a place prepared of God, that they should feed her there a thousand two hundred and threescore days.",
          "And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels,",
          "And prevailed not; neither was their place found any more in heaven.",
          "And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world: he was cast out into the earth, and his angels were cast out with him.",
          "And I heard a loud voice saying in heaven, Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ: for the accuser of our brethren is cast down, which accused them before our God day and night.",
          "And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.",
          "Therefore rejoice, ye heavens, and ye that dwell in them. Woe to the inhabiters of the earth and of the sea! for the devil is come down unto you, having great wrath, because he knoweth that he hath but a short time.",
          "And when the dragon saw that he was cast unto the earth, he persecuted the woman which brought forth the man child.",
          "And  to the woman were given two wings of a great eagle, that she might fly into the wilderness, into her place, where she is nourished for a time, and times, and half a time, from the face of the serpent.",
          "And the serpent cast out of his mouth water as a flood after the woman, that he might cause her to be carried away of the flood.",
          "And the earth helped the woman, and the earth opened her mouth, and swallowed up the flood which the dragon cast out of his mouth.",
          "And the dragon was wroth with the woman, and went to make war with the remnant of her seed, which keep the commandments of God, and have the testimony of Jesus Christ."
        ],
        "Revelation:13":[
          "And I stood upon the sand of the sea, and saw a beast rise up out of the sea, having seven heads and ten horns, and upon his horns ten crowns, and upon his heads the name of blasphemy.",
          "And the beast which I saw was like unto a leopard, and his feet were as the feet of a bear, and his mouth as the mouth of a lion: and the dragon gave him his power, and his seat, and great authority.",
          "And I saw one of his heads as it were wounded to death; and his deadly wound was healed: and all the world wondered after the beast.",
          "And they worshipped the dragon which gave power unto the beast: and they worshipped the beast, saying, Who is like unto the beast? who is able to make war with him?",
          "And there was given unto him a mouth speaking great things and blasphemies; and power was given unto him to continue forty and two months.",
          "And he opened his mouth in blasphemy against God, to blaspheme his name, and his tabernacle, and them that dwell in heaven.",
          "And it was given unto him to make war with the saints, and to overcome them: and power was given him over all kindreds, and tongues, and nations.",
          "And all that dwell upon the earth shall worship him, whose names are not written in the book of life of the Lamb slain from the foundation of the world.",
          "If any man have an ear, let him hear.",
          "He that leadeth into captivity shall go into captivity: he that killeth with the sword must be killed with the sword. Here is the patience and the faith of the saints.",
          "And I beheld another beast coming up out of the earth; and he had two horns like a lamb, and he spake as a dragon",
          "And he exerciseth all the power of the first beast before him, and causeth the earth and them which dwell therein to worship the first beast, whose deadly wound was healed.",
          "And he doeth great wonders, so that he maketh fire come down from heaven on the earth in the sight of men,",
          "And deceiveth them that dwell on the earth by the means of those miracles which he had power to do in the sight of the beast; saying to them that dwell on the earth, that they should make an image to the beast, which had the wound by a sword, and did live.",
          "And he hath power to give life unto the image of the beast, that the image of the beast should both speak, and cause that as many as would not worship the image of the beast should be killed.",
          "And he causeth all, both small and great, rich and poor, free and bond, to receive a mark in their right hand, or in their foreheads:",
          "And that no man might buy or sell, save he that had the mark, or the name of the beast, or the number of his name.",
          "Here is wisdom. Let him that hath understanding count the number of the beast: for it is the number of a man; and his number is Six hundred threescore and six."
        ],
       "Revelation:14":[
          "And I looked, and, lo, a Lamb stood on the mount Sion, and with him an hundred forty and four thousand, having his Father's name written in their foreheads",
          "And I heard a voice from heaven, as the voice of many waters, and as the voice of a great thunder: and I heard the voice of harpers harping with their harps:",
          "And they sung as it were a new song before the throne, and before the four beasts, and the elders: and no man could learn that song but the hundred and forty and four thousand, which were redeemed from the earth.",
          "These are they which were not defiled with women; for they are virgins. These are they which follow the Lamb whithersoever he goeth. These were redeemed from among men, being the firstfruits unto God and to the Lamb.",
          "And in their mouth was found no guile: for they are without fault before the throne of God.",
          "And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth, and to every nation, and kindred, and tongue, and people,",
          "Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven, and earth, and the sea, and the fountains of waters.",
          "And there followed another angel, saying, Babylon is fallen, is fallen, that great city, because she made all nations drink of the wine of the wrath of her fornication.",
          "And the third angel followed them, saying with a loud voice, If any man worship the beast and his image, and receive his mark in his forehead, or in his hand,",
          "The same shall drink of the wine of the wrath of God, which is poured out without mixture into the cup of his indignation; and he shall be tormented with fire and brimstone in the presence of the holy angels, and in the presence of the Lamb:",
          "And the smoke of their torment ascendeth up for ever and ever: and they have no rest day nor night, who worship the beast and his image, and whosoever receiveth the mark of his name.",
          "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.",
          "And I heard a voice from heaven saying unto me, Write, Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them.",
          "And I looked, and behold a white cloud, and upon the cloud one sat like unto the Son of man, having on his head a golden crown, and in his hand a sharp sickle.",
          "And another angel came out of the temple, crying with a loud voice to him that sat on the cloud, Thrust in thy sickle, and reap: for the time is come for thee to reap; for the harvest of the earth is ripe.",
          "And he that sat on the cloud thrust in his sickle on the earth; and the earth was reaped.",
          "And another angel came out of the temple which is in heaven, he also having a sharp sickle.",
          "And another angel came out from the altar, which had power over fire; and cried with a loud cry to him that had the sharp sickle, saying, Thrust in thy sharp sickle, and gather the clusters of the vine of the earth; for her grapes are fully ripe.",
          "And the angel thrust in his sickle into the earth, and gathered the vine of the earth, and cast it into the great winepress of the wrath of God.",
          "And the winepress was trodden without the city, and blood came out of the winepress, even unto the horse bridles, by the space of a thousand and six hundred furlongs."
        ],
        "Revelation:15":[
          "And I saw another sign in heaven, great and marvellous, seven angels having the seven last plagues; for in them is filled up the wrath of God.",
          "And I saw as it were a sea of glass mingled with fire: and them that had gotten the victory over the beast, and over his image, and over his mark, and over the number of his name, stand on the sea of glass, having the harps of God.",
          "And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints.",
          "Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy: for all nations shall come and worship before thee; for thy judgments are made manifest.",
          "And after that I looked, and, behold, the temple of the tabernacle of the testimony in heaven was opened:",
          "And the seven angels came out of the temple, having the seven plagues, clothed in pure and white linen, and having their breasts girded with golden girdles.",
          "And one of the four beasts gave unto the seven angels seven golden vials full of the wrath of God, who liveth for ever and ever.",
          "And the temple was filled with smoke from the glory of God, and from his power; and no man was able to enter into the temple, till the seven plagues of the seven angels were fulfilled."
        ],
        "Revelation:16":[
          "And I heard a great voice out of the temple saying to the seven angels, Go your ways, and pour out the vials of the wrath of God upon the earth.",
          "And the first went, and poured out his vial upon the earth; and there fell a noisome and grievous sore upon  the men which had the mark of the beast, and upon them which worshipped his image.",
          "And the second angel poured out his vial upon the sea; and it became as the blood of a dead man: and every living soul died in the sea.",
          "And the third angel poured out his vial upon the rivers and fountains of waters; and they became blood.",
          "And I heard the angel of the waters say, Thou art righteous, O Lord, which art, and wast, and shalt be, because thou hast judged thus.",
          "For they have shed the blood of saints and prophets, and thou hast given them blood to drink; for they are worthy.",
          "And I heard another out of the altar say, Even so, Lord God Almighty, true and righteous are thy judgments.",
          "And the fourth angel poured out his vial upon the sun; and power was given unto him to scorch men with fire.",
          " And men were scorched with great heat, and blasphemed the name of God, which hath power over these plagues: and they repented not to give him glory.",
          "And the fifth angel poured out his vial upon the seat of the beast; and his kingdom was full of darkness; and they gnawed their tongues for pain,",
          "And blasphemed the God of heaven because of their pains and their sores, and repented not of their deeds.",  
          "And the sixth angel poured out his vial upon the great river Euphrates; and the water thereof was dried up, that the way of the kings of the east might be prepared.",
          "And I saw three unclean spirits like frogs come out of the mouth of the dragon, and out of the mouth of the beast, and out of the mouth of the false prophet.",
          "For they are the spirits of devils, working miracles, which go forth unto the kings of the earth and of the whole world, to gather them to the battle of that great day of God Almighty.",
          "Behold, I come as a thief. Blessed is he that watcheth, and keepeth his garments, lest he walk naked, and they see his shame.",
          "And he gathered them together into a place called in the Hebrew tongue Armageddon.",
          "And the seventh angel poured out his vial into the air; and there came a great voice out of the temple of heaven, from the throne, saying, It is done.",
          "And there were voices, and thunders, and lightnings; and there was a great earthquake, such as was not since there was a nation, so mighty an earthquake, and so great.",
          "And the great city was divided into three parts, and the cities of the nations fell: and great Babylon came in remembrance before God, to give unto her the cup of the wine of the fierceness of his wrath.",
          "And every island fled away, and the mountains were not found.",
          "And great hail came down from heaven upon men,  every stone about the weight of a talent: and men blasphemed God because of the plague of the hail; for the plague thereof was exceeding great."
        ],
      "Revelation:17":[
          "And there came one of the seven angels which had the seven vials, and talked with me, saying unto me, Come hither; I will shew unto thee the judgment  of the great whore that sitteth upon many waters:",
          "With whom the kings of the earth have committed fornication, and the inhabitants of the earth have been made drunk with the wine of her fornication.",
          "So he carried me away in the spirit into the wilderness: and I saw a woman sit upon a scarlet beast, full of names of blasphemy, having seven heads and ten horns.", 
          "And the woman was arrayed in purple and scarlet colour, and decked with gold and precious stones and pearls, having a golden cup in her hand full of abominations and filthiness of her fornication:",
          "And upon her forehead was a name written, MYSTERY, BABYLON THE GREAT, THE MOTHER OF HARLOTS AND ABOMINATIONS OF THE EARTH.",
          "And I saw the woman drunken with the blood of the saints, and with the blood of the martyrs of Jesus: and when I saw her I wondered with great admiration.",
          "And the angel said unto me, Wherefore didst thou marvel? I will tell thee the mystery of the woman, and of the beast that carrieth her, which hath the seven heads and ten horns.",
          "The beast that thou sawest was, and is not; and shall ascend out of the bottomless pit, and go into perdition: and they that dwell on the earth shall wonder, whose names were not written in the book of life from the foundation of the world, when they behold the beast that was, and is not, and yet is.",
          "And here is the mind which hath wisdom. The seven heads are seven mountains, on which the woman sitteth.",
          "And there are seven kings: five are fallen, and one is, and the other is not yet come; and when he cometh, he must continue a short space.",
          "And the beast that was, and is not, even he is the eighth, and is of the seven, and goeth into perdition.",
          "And the ten horns which thou sawest are ten kings, which have received no kingdom as yet; but receive power as kings one hour with the beast.",
          "These have one mind, and shall give their power and strength unto the beast.",
          "These shall make war with the Lamb, and the Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.",
          "And he saith unto me, The waters which thou sawest, where the  whore sitteth, are peoples, and multitudes, and nations, and tongues.",
          "And the ten horns which thou sawest upon the beast, these shall hate the whore, and shall make her desolate and naked, and shall eat her flesh, and burn her with fire.",
          "For God hath put in their hearts to fulfil his will, and to agree, and give their kingdom unto the beast, until the words of God shall be fulfilled.",
          "And the woman which thou sawest is that great city, which reigneth over the kings of the earth."
        ],
        "Revelation:18": [
          "And after these things I saw another angel come down from heaven, having great power; and the earth was lightened with his glory.",
          "And he cried mightily with a strong voice, saying, Babylon the great is fallen, is fallen, and is become the habitation of devils, and the hold of every foul spirit, and a cage of every unclean and hateful bird.",
          "For all nations have drunk of the wine of the wrath of her fornication, and the kings of the earth have committed fornication with her, and the merchants of the earth are waxed rich through the abundance of her delicacies.",
          "And I heard another voice from heaven, saying, Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues.",
          "For her sins have reached unto heaven, and God hath remembered her iniquities.",
          "Reward her even as she rewarded you, and double unto her double according to her works: in the cup which she hath filled fill to her double.",
          "How much she hath glorified herself, and lived deliciously, so much torment and sorrow give her: for she saith in her heart, I sit a queen, and am no widow, and shall see no sorrow.",
          "Therefore shall her plagues come in one day, death, and mourning, and famine; and she shall be utterly burned with fire: for strong is the Lord God who judgeth her.",
          "And the kings of the earth, who have committed fornication and lived deliciously with her, shall bewail her, and lament for her, when they shall see the smoke of her burning,",
          "Standing afar off for the fear of her torment, saying, Alas, alas that great city Babylon, that mighty city! for in one hour is thy judgment come.",
          "And the merchants of the earth shall weep and mourn over her; for no man buyeth their merchandise any more:",
          "The merchandise of gold, and silver, and precious stones, and of pearls, and fine linen, and purple, and silk, and scarlet, and all thyine wood, and all manner vessels of ivory, and all manner vessels of most precious wood, and of brass, and iron, and marble,",
          "And cinnamon, and odours, and ointments, and frankincense, and wine, and oil, and fine flour, and wheat, and beasts, and sheep, and horses, and chariots, and slaves, and souls of men.",
          "And the fruits that thy soul lusted after are departed from thee, and all things which were dainty and goodly are departed from thee, and thou shalt find them no more at all.",
          "The merchants of these things, which were made rich by her, shall stand afar off for the fear of her torment, weeping and wailing,",
          "And saying, Alas, alas that great city, that was clothed in fine linen, and purple, and scarlet, and decked with gold, and precious stones, and pearls!",
          "For in one hour so great riches is come to nought. And every shipmaster, and all the company in ships, and sailors, and as many as trade by sea, stood afar off,",
          "And cried when they saw the smoke of her burning, saying, What city is like unto this great city!",
          "And they cast dust on their heads, and cried, weeping and wailing, saying, Alas, alas that great city, wherein were made rich all that had ships in the sea by reason of her costliness! for in one hour is she made desolate.",
          "Rejoice over her, thou heaven, and ye holy apostles and prophets; for God hath avenged you on her.",
          "And a mighty angel took up a stone like a great millstone, and cast it into the sea, saying, Thus with violence shall that great city Babylon be thrown down, and shall be found no more at all.",
          "And the voice of harpers, and musicians, and of pipers, and trumpeters, shall be heard no more at all in thee; and no craftsman, of whatsoever craft he be, shall be found any more in thee; and the sound of a millstone shall be heard no more at all in thee;",
          "And the light of a candle shall shine no more at all in thee; and the voice of the bridegroom and of the bride shall be heard no more at all in thee: for thy merchants were the great men of the earth; for by thy sorceries were all nations deceived.",
          "And in her was found the blood of prophets, and of saints, and of all that were slain upon the earth."
        ],
        "Revelation:19": [
          "And after these things I heard a great voice of much people in heaven, saying, Alleluia; Salvation, and glory, and honour, and power, unto the Lord our God:",
          "For true and righteous are his judgments: for he hath judged the great whore, which did corrupt the earth with her fornication, and hath avenged the blood of his servants at her hand.",
          "And again they said, Alleluia. And her smoke rose up for ever and ever.",
          "And the four and twenty elders and the four beasts fell down and worshipped God that sat on the throne, saying, Amen; Alleluia.",
          "And a voice came out of the throne, saying, Praise our God, all ye his servants, and ye that fear him, both small and great",
          "And I heard as it were the voice of a great multitude, and as the voice of many waters, and as the voice of mighty thunderings, saying, Alleluia: for the Lord God omnipotent reigneth.",
          "Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come, and his wife hath made herself ready.",
          "And to her was granted that she should be arrayed in fine linen, clean and white: for the fine linen is the righteousness of saints.",
          "And he saith unto me, Write, Blessed are they which are called unto the marriage supper of the Lamb. And he saith unto me, These are the true sayings of God.",
          "And I fell at his feet to worship him. And he said unto me, See thou do it not: I am thy fellowservant, and of thy brethren that have the testimony of Jesus: worship God: for the testimony of Jesus is the spirit of prophecy.",
          "And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.",
          "His eyes were as a flame of fire, and on his head were many crowns; and he had a name written, that no man knew, but he himself.",
          "And he was clothed with a vesture dipped in blood: and his name is called The Word of God.",
          "And the armies which were in heaven followed him upon white horses, clothed in fine linen, white and clean.",
          "And out of his mouth goeth a sharp sword, that with it he should smite the nations: and he shall rule them with a rod of iron: and he treadeth the winepress of the fierceness and wrath of Almighty God.",
          "And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS.",
          "And I saw an angel standing in the sun; and he cried with a loud voice, saying to all the fowls that fly in the midst of heaven, Come and gather yourselves together unto the supper of the great God;",
          "That ye may eat the flesh of kings, and the flesh of captains, and the flesh of mighty men, and the flesh of horses, and of them that sit on them, and the flesh of all men, both free and bond, both small and great.",
          "And I saw the beast, and the kings of the earth, and their armies, gathered together to make war against him that sat on the horse, and against his army.",
          "And the beast was taken, and with him the false prophet that wrought miracles before him, with which he deceived them that had received the mark of the beast, and them that worshipped his image. These both were cast alive into a lake of fire burning with brimstone.",
          "And the remnant were slain with the sword of him that sat upon the horse, which sword proceeded out of his mouth: and all the fowls were filled with their flesh."
        ],
        "Revelation:20": [
          "And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand.",
          "And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years,",
          "And cast him into the bottomless pit, and shut him up, and set a seal upon him, that he should deceive the nations no more, till the thousand years should be fulfilled: and after that he must be loosed a little season.",
          "And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years.",
          "But the rest of the dead lived not again until the thousand years were finished. This is the first resurrection.",
          "Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.",
          "And when the thousand years are expired, Satan shall be loosed out of his prison,",
          "And shall go out to deceive the nations which are in the four quarters of the earth, Gog and Magog, to gather them together to battle: the number of whom is as the sand of the sea.",
          "And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city: and fire came down from God out of heaven, and devoured them.",
          "And the devil that deceived them was cast into the lake of fire and brimstone, where the beast and the false prophet are, and shall be tormented day and night for ever and ever.",
          "And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them.",
          "And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works.",
          "And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works.",
          "And death and hell were cast into the lake of fire. This is the second death.",
          "And whosoever was not found written in the book of life was cast into the lake of fire."
        ],
       "Revelation:21": [
          "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea.",
          "And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband.",
          "And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.",
          "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
          "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.",
          "And he said unto me, It is done. I am Alpha and Omega, the beginning and the end. I will give unto him that is athirst of the fountain of the water of life freely.",
          "He that overcometh shall inherit all things; and I will be his God, and he shall be my son.",
          "But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.",
          "And there came unto me one of the seven angles which had the seven vials full of the seven last plagues, and talked with me, saying, Come hither, I will shew thee the bride, the Lamb's wife.",
          "And he carried me away in the spirit to a great and high mountain, and shewed me that great city, the holy Jerusalem, descending out of heaven from God,",
          "Having the glory of God: and her light was like unto a stone most precious, even like a jasper stone, clear as crystal;",
          "And had a wall great and high, and had twelve gates, and at the gates twelve angels, and names written thereon,which are the names of the twelve tribes of the children of Israel.",
          "On the east three gates; on the north three gates; on the south three gates; and on the west three gates.",
          "And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb.",
          "And he that talked with me had a golden reed to measure the city, and the gates thereof, and the wall thereof.",
          "And the city lieth foursquare, and the length is as large as the breadth: and he measured the city with the reed, twelve thousand furlongs. The length and the breadth and the height of it are equal.",
          "And he measured the wall thereof, an hundred and forty and four cubits, according to the measure of a man, that is, of the angel.",
          "And the building of the wall of it was of jasper: and the city was pure gold, like unto clear glass.",
          "And the foundations of the wall of the city were garnished with all manner of precious stones. The first foundation was jasper; the second, sapphire; the third, a chalcedony; the fourth, an emerald;",
          "The fifth, sardonyx; the sixth, sardius; the seventh, chrysolite; the eighth, beryl; the ninth, a topaz; the tenth, a chrysoprasus; the eleventh, a jacinth; the twelfth, an amethyst.",
          "And the twelve gates were twelve pearls; every several gate was of one pearl: and the street of the city was pure gold, as it were transparent glass.",
          "And I saw no temple therein: for the Lord God Almighty and the Lamb are the temple of it.",
          "And the city had no need of the sun, neither of the moon, to shine in it: for the glory of God did lighten it, and the Lamb is the light thereof.",
          "And the nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it.",
          "And the gates of it shall not be shut at all by day: for there shall be no night there.",
          "And they shall bring the glory and honour of the nations into it.",
          "And there shall in no wise enter into it any thing that defileth, neither whatsoever worketh abomination, or maketh a lie: but they which are written in the Lamb's book of life."
        ],
       "Revelation:22": [
          "And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb.",
          "In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.",
          "And there shall be no more curse: but the throne of God and of the Lamb shall be in it; and his servants shall serve him:",
          "And they shall see his face; and his name shall be in their foreheads.",
          "And there shall be no night there; and they need no candle, neither light of the sun; for the Lord God giveth them light: and they shall reign for ever and ever.",
          "And he said unto me, These sayings are faithful and true: and the Lord God of the holy prophets sent his angel to shew unto his servants the things which must shortly be done.",
          "Behold, I come quickly: blessed is he that keepeth the sayings of the prophecy of this book.",
          "And I John saw these things, and heard them. And when I had heard and seen, I fell down to worship before the feet of the angel which shewed me these things.",
          "And he saith unto me, See thou do it not: for I am thy fellowservant, and of thy brethren the prophets, and of them which keep the sayings of this book: worship God.",
          "And he saith unto me, Seal not the sayings of the prophecy of this book: for the time is at hand.",
          "He that is unjust, let him be unjust still: and he which is filthy, let him be filthy still: and he that is righteous, let him be righteous still: and he that is holy, let him be holy still.",
          "And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be.",
          "I am Alpha and Omega, the beginning and the end, the first and the last.",
          "Blessed are they that do his commandments, that they may have right to the tree of life, and may enter in through the gates into the city.",
          "For without are dogs, and sorcerers, and whoremongers, and murderers, and idolaters, and whosoever loveth and maketh a lie.",
          "I Jesus have sent mine angel to testify unto you these things in the churches. I am the root and the offspring of David, and the bright and morning star.",
          "And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirs come. And whosoever will, let him take the water of life feely.",
          "For I testify unto every man that heareth the words of the prophecy of this book, If any man shall add unto these things, God shall add unto him the plagues that are written in this book:",
          "And if any man shall take away from  the words of the book of this prophecy, God shall take away his part out of the book of life, and out of the holy city, and from the things which are written in this book.",
          "He which testifieth these things saith, Surely I come quickly. Amen Even so, come, Lord Jesus.",
          "The grace of our Lord Jesus Christ be with you all. Amen."

        ],
       "default": [
    "And God said, Let there be light: and there was light.",
    "And God saw the light, that it was good: and God divided the light from the darkness."
  ]
      };


let bibleState = {
  currentTestament: 'old',
  selectedBook: null,
  selectedChapter: null,
  verses: [], // All verses in current chapter
  currentVerseIndex: 0, // Current verse being typed
  currentVerse: '',
  typedText: '',
  startTime: null,
  timerInterval: null,
  timeLeft: 60,
  duration: 60,
  isRunning: false,
  mode: 'typing', // 'typing' or 'audio'
  chapterStats: [], // Stats for each verse in chapter
  stats: {
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    incorrectChars: 0
  }
};

// Initialize Bible Practice Page
window.loadBiblePage = function() {
  renderBooksGrid();
  setupBibleEventListeners();
};

// Setup Event Listeners
function setupBibleEventListeners() {
  // Testament tabs
  document.querySelectorAll('.bible-testament-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.bible-testament-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      bibleState.currentTestament = this.dataset.testament;
      renderBooksGrid();
    });
  });

  // Mode toggle (will be added to practice card)
  const modeToggle = document.getElementById('bible-mode-toggle');
  if (modeToggle) {
    modeToggle.addEventListener('change', function() {
      bibleState.mode = this.checked ? 'audio' : 'typing';
      updateModeDisplay();
    });
  }

  // Timer select
  const timerSelect = document.getElementById('bible-timer-select');
  if (timerSelect) {
    timerSelect.addEventListener('change', function() {
      bibleState.duration = parseInt(this.value) || 60;
      bibleState.timeLeft = bibleState.duration;
      updateCountdownDisplay();
    });
  }

  // Input handler
  const input = document.getElementById('bible-input');
  if (input) {
    input.addEventListener('input', handleBibleInput);
    input.addEventListener('paste', e => e.preventDefault());
  }

  // Back button
  const backBtn = document.getElementById('back-to-books');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      document.getElementById('bible-practice-card').style.display = 'none';
      document.getElementById('bible-chapters-card').style.display = 'none';
      document.getElementById('bible-books-grid').style.display = 'grid';
      resetBibleTest();
    });
  }

  // Back to chapters button
  const backToChaptersBtn = document.getElementById('back-to-chapters');
  if (backToChaptersBtn) {
    backToChaptersBtn.addEventListener('click', () => {
      document.getElementById('bible-practice-card').style.display = 'none';
      showChaptersGrid(bibleState.selectedBook);
    });
  }
}

// Render Books Grid
function renderBooksGrid() {
  const grid = document.getElementById('bible-books-grid');
  if (!grid) return;

  const books = BIBLE_BOOKS[bibleState.currentTestament] || [];
  
  grid.innerHTML = books.map(book => `
    <div class="bible-book-card" onclick="showChaptersGrid('${book.name}')">
      <h3 class="bible-book-name">${book.name}</h3>
      <div class="bible-book-meta">
        <span>📖 ${book.chapters} ${book.chapters === 1 ? 'Chapter' : 'Chapters'}</span>
        <span>KJV</span>
      </div>
    </div>
  `).join('');
}

// Show Chapters Grid (NEW)
window.showChaptersGrid = function(bookName) {
  const book = [...BIBLE_BOOKS.old, ...BIBLE_BOOKS.new].find(b => b.name === bookName);
  if (!book) return;

  bibleState.selectedBook = bookName;

  // Hide books grid
  document.getElementById('bible-books-grid').style.display = 'none';

  // Create or show chapters card
  let chaptersCard = document.getElementById('bible-chapters-card');
  if (!chaptersCard) {
    chaptersCard = document.createElement('div');
    chaptersCard.id = 'bible-chapters-card';
    chaptersCard.className = 'bible-chapters-card';
    document.getElementById('bible-full-page').appendChild(chaptersCard);
  }

  // Render chapters
  let chaptersHTML = `
    <div class="chapters-header">
      <button class="btn btn-secondary btn-small" onclick="backToBooksFromChapters()">
        ← Back to Books
      </button>
      <div>
        <h2 class="chapters-title">${bookName}</h2>
        <p class="chapters-subtitle">Select a chapter to practice</p>
      </div>
    </div>
    <div class="chapters-grid">
  `;

  for (let i = 1; i <= book.chapters; i++) {
    // Get verse count for this chapter (in production, fetch from API)
    const verseKey = `${bookName}:${i}`;
    const verses = SAMPLE_VERSES[verseKey] || SAMPLE_VERSES.default;
    const verseCount = verses.length;
    
    chaptersHTML += `
      <div class="chapter-card" onclick="startChapterPractice('${bookName}', ${i})">
        <div class="chapter-number">Chapter ${i}</div>
        <div class="chapter-verses">${verseCount} ${verseCount === 1 ? 'verse' : 'verses'}</div>
      </div>
    `;
  }

  chaptersHTML += `</div>`;
  chaptersCard.innerHTML = chaptersHTML;
  chaptersCard.style.display = 'block';
};

// Back to Books from Chapters
window.backToBooksFromChapters = function() {
  document.getElementById('bible-chapters-card').style.display = 'none';
  document.getElementById('bible-books-grid').style.display = 'grid';
  bibleState.selectedBook = null;
};

// Start Chapter Practice (NEW)
window.startChapterPractice = function(bookName, chapter) {
  bibleState.selectedBook = bookName;
  bibleState.selectedChapter = chapter;
  bibleState.currentVerseIndex = 0;
  bibleState.chapterStats = [];

  // Get all verses for this chapter (in production, fetch from API)
  const verseKey = `${bookName}:${chapter}`;
  bibleState.verses = SAMPLE_VERSES[verseKey] || SAMPLE_VERSES.default;
  bibleState.currentVerse = bibleState.verses[0];

  // Hide chapters grid
  document.getElementById('bible-chapters-card').style.display = 'none';

  // Show practice card
  const practiceCard = document.getElementById('bible-practice-card');
  practiceCard.style.display = 'block';

  // Update header
  updatePracticeHeader();

  resetBibleTest();
  renderBibleVerse();
  
  // FIX 1: Autofocus on input
  setTimeout(() => {
    const input = document.getElementById('bible-input');
    if (input) {
      input.focus();
    }
  }, 100);
};

// Update Practice Header
function updatePracticeHeader() {
  const headerText = document.querySelector('.bible-practice-header-text');
  if (headerText) {
    const verseNum = bibleState.currentVerseIndex + 1;
    const totalVerses = bibleState.verses.length;
    headerText.innerHTML = `
      <h3 style="margin: 0; font-size: 1.5rem; color: var(--text);">
        ${bibleState.selectedBook} ${bibleState.selectedChapter}:${verseNum}
      </h3>
      <p style="margin: 4px 0 0; color: var(--muted); font-size: 0.875rem;">
        Verse ${verseNum} of ${totalVerses} • King James Version
      </p>
    `;
  }
}

// Handle Bible Input
function handleBibleInput(e) {
  if (!bibleState.isRunning && e.target.value.length > 0) {
    startBibleTimer();
  }

  bibleState.typedText = e.target.value;
  renderBibleVerse();
  calculateBibleStats();
}

// Start Timer
function startBibleTimer() {
  if (bibleState.isRunning) return;
  
  bibleState.isRunning = true;
  bibleState.startTime = Date.now();
  
  bibleState.timerInterval = setInterval(() => {
    if (bibleState.duration === 0) {
      // No timer mode
      updateLiveTimer();
    } else {
      // Countdown mode
      bibleState.timeLeft--;
      updateCountdownDisplay();
      
      if (bibleState.timeLeft <= 0) {
        finishBibleTest(true); // true = time's up
      }
    }
    
    calculateBibleStats();
  }, 1000);
}

// Update Live Timer (for no timer mode)
function updateLiveTimer() {
  const elapsed = Math.floor((Date.now() - bibleState.startTime) / 1000);
  const countdownEl = document.getElementById('bible-countdown');
  if (countdownEl && bibleState.duration === 0) {
    countdownEl.textContent = elapsed + 's';
  }
}

// Update Countdown Display
function updateCountdownDisplay() {
  const countdownEl = document.getElementById('bible-countdown');
  if (!countdownEl) return;

  if (bibleState.duration === 0) {
    countdownEl.textContent = '∞';
    countdownEl.className = '';
    return;
  }

  countdownEl.textContent = bibleState.timeLeft + 's';
  countdownEl.classList.remove('warning', 'danger');
  
  if (bibleState.timeLeft <= 10) {
    countdownEl.classList.add('danger');
  } else if (bibleState.timeLeft <= 30) {
    countdownEl.classList.add('warning');
  }
}

// Render Bible Verse
function renderBibleVerse() {
  const display = document.getElementById('verse-text');
  if (!display) return;

  // FIX 4: In audio mode, hide text completely until time is up or completed
  const verseDisplayContainer = document.querySelector('.bible-verse-display');
  if (bibleState.mode === 'audio' && bibleState.isRunning) {
    if (verseDisplayContainer) {
      verseDisplayContainer.style.display = 'none';
    }
    return;
  } else {
    if (verseDisplayContainer) {
      verseDisplayContainer.style.display = 'block';
    }
  }

  let html = '';
  const verse = bibleState.currentVerse;
  const typed = bibleState.typedText;

  for (let i = 0; i < verse.length; i++) {
    const char = verse[i];
    const typedChar = typed[i];

    let className = 'char';
    
    if (i === typed.length) {
      className += ' current';
    } else if (typedChar !== undefined) {
      className += typedChar === char ? ' correct' : ' incorrect';
    }

    html += `<span class="${className}">${char === ' ' ? '&nbsp;' : char}</span>`;
  }

  display.innerHTML = html;

  // Check if complete
  if (typed.length >= verse.length && bibleState.isRunning) {
    finishBibleTest(false); // false = completed
  }
}

// Calculate Stats
function calculateBibleStats() {
  const verse = bibleState.currentVerse;
  const typed = bibleState.typedText;
  
  let correct = 0;
  let incorrect = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === verse[i]) {
      correct++;
    } else {
      incorrect++;
    }
  }

  const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;
  
  // Calculate WPM
  const elapsed = bibleState.startTime ? (Date.now() - bibleState.startTime) / 1000 : 1;
  const minutes = elapsed / 60;
  const wpm = minutes > 0 ? Math.round((typed.length / 5) / minutes) : 0;

  bibleState.stats = {
    wpm: wpm,
    accuracy: accuracy,
    correctChars: correct,
    incorrectChars: incorrect
  };

  // Update display
  document.getElementById('bible-wpm').textContent = wpm;
  document.getElementById('bible-accuracy').textContent = accuracy + '%';
}

// Finish Test
function finishBibleTest(timedOut) {
  clearInterval(bibleState.timerInterval);
  bibleState.isRunning = false;
  
  const input = document.getElementById('bible-input');
  if (input) input.disabled = true;

  // Save stats for this verse
  bibleState.chapterStats.push({
    verse: bibleState.currentVerseIndex + 1,
    wpm: bibleState.stats.wpm,
    accuracy: bibleState.stats.accuracy,
    completed: !timedOut
  });

  if (timedOut) {
    showTimesUpModal();
  } else {
    // FIX 2: Auto-proceed to next verse
    const nextVerseIndex = bibleState.currentVerseIndex + 1;
    
    if (nextVerseIndex < bibleState.verses.length) {
      // More verses in chapter - show toast and auto-proceed
      showVerseCompletedToast();
      
      setTimeout(() => {
        bibleState.currentVerseIndex = nextVerseIndex;
        bibleState.currentVerse = bibleState.verses[nextVerseIndex];
        updatePracticeHeader();
        resetBibleTest();
        
        // Autofocus on next verse
        const input = document.getElementById('bible-input');
        if (input) {
          input.focus();
        }
      }, 2000); // 2 second delay to see completion message
    } else {
      // FIX 3: Chapter completed - show summary modal
      setTimeout(() => {
        showChapterSummaryModal();
      }, 1000);
    }
  }
}

// Show Verse Completed Toast (for auto-proceed)
function showVerseCompletedToast() {
  const toast = document.createElement('div');
  toast.className = 'bible-completion-toast';
  toast.innerHTML = `
    ✅ Verse completed! ${bibleState.stats.wpm} WPM • ${bibleState.stats.accuracy}% Accuracy
    <br><span style="font-size: 0.875rem; opacity: 0.9;">Next verse loading...</span>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 2000);
}

// Show Time's Up Modal (WITH RETRY BUTTON)
function showTimesUpModal() {
  // FIX 4: Show verse text in audio mode after time is up
  if (bibleState.mode === 'audio') {
    const verseDisplay = document.querySelector('.bible-verse-display');
    if (verseDisplay) {
      verseDisplay.style.display = 'block';
      renderBibleVerse();
    }
  }
  
  const modal = document.createElement('div');
  modal.className = 'bible-times-up-overlay';
  modal.innerHTML = `
    <div class="bible-times-up-modal">
      <h3>⏰ Time's Up!</h3>
      <p>You typed ${bibleState.typedText.length} of ${bibleState.currentVerse.length} characters</p>
      <div class="times-up-stats">
        <div class="times-up-stat">
          <div class="stat-value">${bibleState.stats.wpm}</div>
          <div class="stat-label">WPM</div>
        </div>
        <div class="times-up-stat">
          <div class="stat-value">${bibleState.stats.accuracy}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
      </div>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
        <button class="btn" onclick="retryBibleVerse()">🔄 Retry Verse</button>
        <button class="btn btn-secondary" onclick="skipToNextVerse()">Skip to Next →</button>
        <button class="btn btn-secondary" onclick="backToBooksFromPractice()">← Back to Chapters</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// FIX 6: Skip to next verse
window.skipToNextVerse = function() {
  closeTimesUpModal();
  
  const nextVerseIndex = bibleState.currentVerseIndex + 1;
  
  if (nextVerseIndex < bibleState.verses.length) {
    bibleState.currentVerseIndex = nextVerseIndex;
    bibleState.currentVerse = bibleState.verses[nextVerseIndex];
    updatePracticeHeader();
    resetBibleTest();
    
    const input = document.getElementById('bible-input');
    if (input) {
      input.focus();
    }
  } else {
    // Last verse - show chapter summary
    showChapterSummaryModal();
  }
};

// Retry Verse (NEW)
window.retryBibleVerse = function() {
  closeTimesUpModal();
  resetBibleTest();
  
  // FIX 1: Autofocus on input after retry
  setTimeout(() => {
    const input = document.getElementById('bible-input');
    if (input) {
      input.disabled = false;
      input.focus();
    }
  }, 100);
};

// Close Time's Up Modal
window.closeTimesUpModal = function() {
  const modal = document.querySelector('.bible-times-up-overlay');
  if (modal) modal.remove();
};

// Back to Books from Practice
window.backToBooksFromPractice = function() {
  closeTimesUpModal();
  document.getElementById('bible-practice-card').style.display = 'none';
  document.getElementById('bible-books-grid').style.display = 'grid';
  resetBibleTest();
};

// Show Completion Toast
function showCompletionToast() {
  const toast = document.createElement('div');
  toast.className = 'bible-completion-toast';
  toast.innerHTML = `
    ✅ Verse completed! ${bibleState.stats.wpm} WPM • ${bibleState.stats.accuracy}% Accuracy
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
    showNextVerseOptions();
  }, 3000);
}

// Show Next Verse Options
function showNextVerseOptions() {
  if (confirm('Great job! Practice another verse from this chapter?')) {
    retryBibleVerse();
  } else {
    showChaptersGrid(bibleState.selectedBook);
  }
}

// FIX 3: Show Chapter Summary Modal
function showChapterSummaryModal() {
  // Calculate overall stats
  const completedVerses = bibleState.chapterStats.filter(v => v.completed).length;
  const totalVerses = bibleState.verses.length;
  const avgWPM = Math.round(
    bibleState.chapterStats.reduce((sum, v) => sum + v.wpm, 0) / bibleState.chapterStats.length
  );
  const avgAccuracy = Math.round(
    bibleState.chapterStats.reduce((sum, v) => sum + v.accuracy, 0) / bibleState.chapterStats.length
  );

  const modal = document.createElement('div');
  modal.className = 'bible-times-up-overlay';
  modal.innerHTML = `
    <div class="bible-chapter-summary-modal">
      <div class="chapter-summary-icon">🎉</div>
      <h3>Chapter Completed!</h3>
      <p class="chapter-summary-book">${bibleState.selectedBook} ${bibleState.selectedChapter}</p>
      
      <div class="chapter-summary-stats">
        <div class="chapter-summary-stat">
          <div class="stat-icon">📝</div>
          <div class="stat-content">
            <div class="stat-value">${completedVerses}/${totalVerses}</div>
            <div class="stat-label">Verses</div>
          </div>
        </div>
        
        <div class="chapter-summary-stat">
          <div class="stat-icon">⚡</div>
          <div class="stat-content">
            <div class="stat-value">${avgWPM}</div>
            <div class="stat-label">Avg WPM</div>
          </div>
        </div>
        
        <div class="chapter-summary-stat">
          <div class="stat-icon">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${avgAccuracy}%</div>
            <div class="stat-label">Accuracy</div>
          </div>
        </div>
      </div>
      
      <p class="chapter-summary-message">
        ${completedVerses === totalVerses 
          ? 'Perfect! You completed all verses in this chapter!' 
          : 'Great progress! Keep practicing to complete all verses.'}
      </p>
      
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button class="btn" onclick="retryChapter()">🔄 Practice Again</button>
        <button class="btn btn-secondary" onclick="nextChapter()">Next Chapter →</button>
        <button class="btn btn-secondary" onclick="closeChapterSummary()">← Back to Chapters</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Save chapter progress
  saveChapterProgress();
}

// Retry entire chapter
window.retryChapter = function() {
  closeChapterSummary();
  bibleState.currentVerseIndex = 0;
  bibleState.currentVerse = bibleState.verses[0];
  bibleState.chapterStats = [];
  updatePracticeHeader();
  resetBibleTest();
  
  const input = document.getElementById('bible-input');
  if (input) {
    input.focus();
  }
};

// Go to next chapter
window.nextChapter = function() {
  closeChapterSummary();
  const book = [...BIBLE_BOOKS.old, ...BIBLE_BOOKS.new].find(b => b.name === bibleState.selectedBook);
  
  if (book && bibleState.selectedChapter < book.chapters) {
    startChapterPractice(bibleState.selectedBook, bibleState.selectedChapter + 1);
  } else {
    // Last chapter - go back to chapters grid
    showChaptersGrid(bibleState.selectedBook);
  }
};

// Close chapter summary
window.closeChapterSummary = function() {
  const modal = document.querySelector('.bible-times-up-overlay');
  if (modal) modal.remove();
  showChaptersGrid(bibleState.selectedBook);
};

// Save chapter progress
function saveChapterProgress() {
  if (!window.currentUser) return;

  const progress = {
    book: bibleState.selectedBook,
    chapter: bibleState.selectedChapter,
    verses: bibleState.chapterStats,
    avgWPM: Math.round(
      bibleState.chapterStats.reduce((sum, v) => sum + v.wpm, 0) / bibleState.chapterStats.length
    ),
    avgAccuracy: Math.round(
      bibleState.chapterStats.reduce((sum, v) => sum + v.accuracy, 0) / bibleState.chapterStats.length
    ),
    timestamp: Date.now()
  };

  const key = `bible_progress_${window.currentUser.uid}`;
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  existing.unshift(progress);
  
  if (existing.length > 50) {
    existing.length = 50;
  }
  
  localStorage.setItem(key, JSON.stringify(existing));
  updateVersesTypedCount();
}

// Reset Test
function resetBibleTest() {
  clearInterval(bibleState.timerInterval);
  bibleState.timerInterval = null;
  bibleState.isRunning = false;
  bibleState.typedText = '';
  bibleState.timeLeft = bibleState.duration;
  bibleState.startTime = null;
  bibleState.stats = {
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    incorrectChars: 0
  };

  const input = document.getElementById('bible-input');
  if (input) {
    input.value = '';
    input.disabled = false;
  }

  updateCountdownDisplay();
  document.getElementById('bible-wpm').textContent = '0';
  document.getElementById('bible-accuracy').textContent = '100%';
  
  // Show verse display in typing mode, hide in audio mode before starting
  const verseDisplay = document.querySelector('.bible-verse-display');
  if (verseDisplay) {
    if (bibleState.mode === 'audio') {
      verseDisplay.style.display = 'block'; // Show initially
    } else {
      verseDisplay.style.display = 'block';
    }
  }
  
  renderBibleVerse();
}

// Audio Mode Functions (NEW)
window.toggleAudioMode = function() {
  const toggle = document.getElementById('bible-mode-toggle');
  bibleState.mode = toggle.checked ? 'audio' : 'typing';
  updateModeDisplay();
};

function updateModeDisplay() {
  const verseDisplay = document.querySelector('.bible-verse-display');
  const audioControls = document.getElementById('bible-audio-controls');
  
  if (bibleState.mode === 'audio') {
    // Show audio controls
    if (audioControls) audioControls.style.display = 'block';
    
    // COMPLETELY HIDE verse display in audio mode
    if (verseDisplay) {
      verseDisplay.style.display = 'none';
    }
  } else {
    // Hide audio controls, show verse
    if (audioControls) audioControls.style.display = 'none';
    if (verseDisplay) {
      verseDisplay.style.display = 'block';
    }
    renderBibleVerse();
  }
}

// Play Audio (Text-to-Speech)
window.playBibleAudio = function() {
  if (!('speechSynthesis' in window)) {
    alert('Text-to-speech is not supported in your browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Split verse into sentences and speak them with pauses
  speakVerseWithPauses(bibleState.currentVerse);
};

// Speak verse sentence by sentence with natural pauses
function speakVerseWithPauses(text) {
  // Split text into sentences (by periods, question marks, exclamation marks)
  const sentences = text.match(/[^.!?]+[.!?]+["']?/g) || [text];
  
  const playBtn = document.getElementById('play-bible-audio');
  if (playBtn) {
    playBtn.textContent = '🔊 Playing...';
    playBtn.disabled = true;
  }

  let currentSentenceIndex = 0;

  function speakNextSentence() {
    if (currentSentenceIndex >= sentences.length) {
      // All sentences spoken
      if (playBtn) {
        playBtn.textContent = '▶️ Play Audio';
        playBtn.disabled = false;
      }
      return;
    }

    const sentence = sentences[currentSentenceIndex].trim();
    const speechText = convertTextForSpeechWithPauses(sentence);
    
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.70; // Slightly slower for better comprehension
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onend = () => {
      currentSentenceIndex++;
      
      // Pause between sentences (1.5 seconds)
      setTimeout(() => {
        speakNextSentence();
      }, 1500);
    };

    utterance.onerror = (error) => {
      console.error('Speech error:', error);
      if (playBtn) {
        playBtn.textContent = '▶️ Play Audio';
        playBtn.disabled = false;
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  // Start speaking
  speakNextSentence();
}

// Convert text to include spoken punctuation marks with pauses
function convertTextForSpeechWithPauses(text) {
  let speechText = text;
  
  // Add pauses and speak punctuation
  // Period - longer pause
  speechText = speechText.replace(/\./g, ' , period , , ');
  
  // Comma - short pause
  speechText = speechText.replace(/,/g, ' , comma , ');
  
  // Semicolon - medium pause
  speechText = speechText.replace(/;/g, ' , semicolon , , ');
  
  // Colon - medium pause
  speechText = speechText.replace(/:/g, ' , colon , , ');
  
  // Question mark - longer pause with emphasis
  speechText = speechText.replace(/\?/g, ' , , question mark , , ');
  
  // Exclamation mark - longer pause with emphasis
  speechText = speechText.replace(/!/g, ' , , exclamation mark , , ');
  
  // Quotation marks - slight pause
  speechText = speechText.replace(/"/g, ' quotation mark ');
  
  // Apostrophe in contractions - no pause, just announce
  speechText = speechText.replace(/'/g, ' apostrophe ');
  
  // Parentheses - slight pause
  speechText = speechText.replace(/\(/g, ' , open parenthesis ');
  speechText = speechText.replace(/\)/g, ' close parenthesis , ');
  
  // Brackets - slight pause
  speechText = speechText.replace(/\[/g, ' , open bracket ');
  speechText = speechText.replace(/\]/g, ' close bracket , ');
  
  // Dashes - medium pause
  speechText = speechText.replace(/—/g, ' , em dash , ');
  speechText = speechText.replace(/–/g, ' , en dash , ');
  speechText = speechText.replace(/-/g, ' dash ');
  
  // Clean up multiple spaces and commas (commas create pauses in TTS)
  speechText = speechText.replace(/\s+/g, ' ').trim();
  
  return speechText;
}

// Stop Audio
window.stopBibleAudio = function() {
  window.speechSynthesis.cancel();
  const playBtn = document.getElementById('play-bible-audio');
  if (playBtn) {
    playBtn.textContent = '▶️ Play Audio';
    playBtn.disabled = false;
  }
};

// Update Verses Typed Count
function updateVersesTypedCount() {
  if (!window.currentUser) return;

  const key = `bible_progress_${window.currentUser.uid}`;
  const progress = JSON.parse(localStorage.getItem(key) || '[]');
  
  // Count total verses from all chapters
  let totalVerses = 0;
  progress.forEach(chapter => {
    if (chapter.verses) {
      totalVerses += chapter.verses.length;
    }
  });
  
  const totalEl = document.getElementById('total-verses-typed');
  if (totalEl) {
    totalEl.textContent = totalVerses;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bible-full-page')) {
    // Will be called when user navigates to Bible tab
    console.log('Bible practice system loaded');
  }
});
