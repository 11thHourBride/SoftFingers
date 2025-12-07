// ==== BIBLE PRACTICE SYSTEM ====

// Expanded Bible verses from KJV
const BIBLE_DATA = {
  oldTestament: [
    {
      name: "Genesis",
      totalChapters: 50,
      verses: {
        1: [
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
        2: [
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
        3:[
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
    4:[
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
     5:[
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
     6:[
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
        7:[
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
    8: [
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
   9: [
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
    10: [
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
      11: [
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
      12: [
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
      13: [
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
      14: [
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
      ]
      }
    },
    {
      name: "Exodus",
      totalChapters: 40,
      verses: {
        20: [
          "And God spake all these words, saying,",
          "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.",
          "Thou shalt have no other gods before me.",
          "Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth.",
          "Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;",
          "And shewing mercy unto thousands of them that love me, and keep my commandments.",
          "Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.",
          "Remember the sabbath day, to keep it holy."
        ]
      }
    },
    {
      name: "Psalms",
      totalChapters: 150,
      verses: {
        1: [
          "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
          "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
          "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
          "The ungodly are not so: but are like the chaff which the wind driveth away.",
          "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.",
          "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish."
        ],
        23: [
          "The LORD is my shepherd; I shall not want.",
          "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
          "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
          "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
          "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
          "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever."
        ],
        91: [
          "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
          "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
          "Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.",
          "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler."
        ],
        119: [
          "Blessed are the undefiled in the way, who walk in the law of the LORD.",
          "Blessed are they that keep his testimonies, and that seek him with the whole heart.",
          "They also do no iniquity: they walk in his ways.",
          "Thou hast commanded us to keep thy precepts diligently."
        ]
      }
    },
    {
      name: "Proverbs",
      totalChapters: 31,
      verses: {
        1: [
          "The proverbs of Solomon the son of David, king of Israel;",
          "To know wisdom and instruction; to perceive the words of understanding;",
          "To receive the instruction of wisdom, justice, and judgment, and equity;",
          "To give subtilty to the simple, to the young man knowledge and discretion.",
          "A wise man will hear, and will increase learning; and a man of understanding shall attain unto wise counsels:"
        ],
        3: [
          "My son, forget not my law; but let thine heart keep my commandments:",
          "For length of days, and long life, and peace, shall they add to thee.",
          "Let not mercy and truth forsake thee: bind them about thy neck; write them upon the table of thine heart:",
          "So shalt thou find favour and good understanding in the sight of God and man.",
          "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
          "In all thy ways acknowledge him, and he shall direct thy paths.",
          "Be not wise in thine own eyes: fear the LORD, and depart from evil."
        ],
        4: [
          "Hear, ye children, the instruction of a father, and attend to know understanding.",
          "For I give you good doctrine, forsake ye not my law.",
          "For I was my father's son, tender and only beloved in the sight of my mother.",
          "He taught me also, and said unto me, Let thine heart retain my words: keep my commandments, and live."
        ]
      }
    },
    {
      name: "Isaiah",
      totalChapters: 66,
      verses: {
        40: [
          "Comfort ye, comfort ye my people, saith your God.",
          "Speak ye comfortably to Jerusalem, and cry unto her, that her warfare is accomplished, that her iniquity is pardoned: for she hath received of the LORD'S hand double for all her sins.",
          "The voice of him that crieth in the wilderness, Prepare ye the way of the LORD, make straight in the desert a highway for our God."
        ],
        53: [
          "Who hath believed our report? and to whom is the arm of the LORD revealed?",
          "For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him.",
          "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not."
        ]
      }
    }
  ],
  newTestament: [
    {
      name: "Matthew",
      totalChapters: 28,
      verses: {
        5: [
          "And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:",
          "And he opened his mouth, and taught them, saying,",
          "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
          "Blessed are they that mourn: for they shall be comforted.",
          "Blessed are the meek: for they shall inherit the earth.",
          "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
          "Blessed are the merciful: for they shall obtain mercy.",
          "Blessed are the pure in heart: for they shall see God."
        ],
        6: [
          "Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.",
          "Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward.",
          "But when thou doest alms, let not thy left hand know what thy right hand doeth:",
          "That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly."
        ],
        28: [
          "In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.",
          "And, behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it.",
          "His countenance was like lightning, and his raiment white as snow:"
        ]
      }
    },
    {
      name: "Mark",
      totalChapters: 16,
      verses: {
        1: [
          "The beginning of the gospel of Jesus Christ, the Son of God;",
          "As it is written in the prophets, Behold, I send my messenger before thy face, which shall prepare thy way before thee.",
          "The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight."
        ],
        16: [
          "And when the sabbath was past, Mary Magdalene, and Mary the mother of James, and Salome, had bought sweet spices, that they might come and anoint him.",
          "And very early in the morning the first day of the week, they came unto the sepulchre at the rising of the sun.",
          "And they said among themselves, Who shall roll us away the stone from the door of the sepulchre?"
        ]
      }
    },
    {
      name: "Luke",
      totalChapters: 24,
      verses: {
        2: [
          "And it came to pass in those days, that there went out a decree from Caesar Augustus that all the world should be taxed.",
          "And all went to be taxed, every one into his own city.",
          "And Joseph also went up from Galilee, out of the city of Nazareth, into Judaea, unto the city of David, which is called Bethlehem;",
          "To be taxed with Mary his espoused wife, being great with child.",
          "And so it was, that, while they were there, the days were accomplished that she should be delivered.",
          "And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn."
        ]
      }
    },
    {
      name: "John",
      totalChapters: 21,
      verses: {
        1: [
          "In the beginning was the Word, and the Word was with God, and the Word was God.",
          "The same was in the beginning with God.",
          "All things were made by him; and without him was not any thing made that was made.",
          "In him was life; and the life was the light of men.",
          "And the light shineth in darkness; and the darkness comprehended it not."
        ],
        3: [
          "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:",
          "The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him.",
          "Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.",
          "Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother's womb, and be born?",
          "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.",
          "That which is born of the flesh is flesh; and that which is born of the Spirit is spirit."
        ],
        14: [
          "Let not your heart be troubled: ye believe in God, believe also in me.",
          "In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
          "And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.",
          "And whither I go ye know, and the way ye know."
        ]
      }
    },
    {
      name: "Acts",
      totalChapters: 28,
      verses: {
        2: [
          "And when the day of Pentecost was fully come, they were all with one accord in one place.",
          "And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting.",
          "And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.",
          "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance."
        ]
      }
    },
    {
      name: "Romans",
      totalChapters: 16,
      verses: {
        3: [
          "What advantage then hath the Jew? or what profit is there of circumcision?",
          "Much every way: chiefly, because that unto them were committed the oracles of God.",
          "For what if some did not believe? shall their unbelief make the faith of God without effect?",
          "God forbid: yea, let God be true, but every man a liar; as it is written, That thou mightest be justified in thy sayings, and mightest overcome when thou art judged."
        ],
        8: [
          "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
          "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.",
          "For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh:",
          "That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit."
        ],
        12: [
          "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
          "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."
        ]
      }
    },
    {
      name: "1 Corinthians",
      totalChapters: 16,
      verses: {
        13: [
          "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.",
          "And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.",
          "And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing.",
          "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up."
        ]
      }
    },
    {
      name: "Ephesians",
      totalChapters: 6,
      verses: {
        6: [
          "Children, obey your parents in the Lord: for this is right.",
          "Honour thy father and mother; which is the first commandment with promise;",
          "That it may be well with thee, and thou mayest live long on the earth.",
          "And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord."
        ]
      }
    },
    {
      name: "Philippians",
      totalChapters: 4,
      verses: {
        4: [
          "Rejoice in the Lord always: and again I say, Rejoice.",
          "Let your moderation be known unto all men. The Lord is at hand.",
          "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
          "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."
        ]
      }
    },
    {
      name: "Revelation",
      totalChapters: 22,
      verses: {
        1: [
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
        2: [
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
        3: [
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
        4: [
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
        
        5: [
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
        6: [
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
        7: [
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
        8: [
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
        9: [
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
        10: [
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
        11: [
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
        12:[
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
        13:[
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
        14:[
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
        15:[
          "And I saw another sign in heaven, great and marvellous, seven angels having the seven last plagues; for in them is filled up the wrath of God.",
          "And I saw as it were a sea of glass mingled with fire: and them that had gotten the victory over the beast, and over his image, and over his mark, and over the number of his name, stand on the sea of glass, having the harps of God.",
          "And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints.",
          "Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy: for all nations shall come and worship before thee; for thy judgments are made manifest.",
          "And after that I looked, and, behold, the temple of the tabernacle of the testimony in heaven was opened:",
          "And the seven angels came out of the temple, having the seven plagues, clothed in pure and white linen, and having their breasts girded with golden girdles.",
          "And one of the four beasts gave unto the seven angels seven golden vials full of the wrath of God, who liveth for ever and ever.",
          "And the temple was filled with smoke from the glory of God, and from his power; and no man was able to enter into the temple, till the seven plagues of the seven angels were fulfilled."
        ],
        16:[
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
        17:[
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
        18: [
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
        19: [
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
        20: [
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
        21: [
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
        22: [
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

        ]
      }
    }
  ]
};

// Enhanced Bible Practice JavaScript with Fixes

// State variables
let currentBibleBook = null;
let currentChapter = 1;
let currentVerseIndex = 0;
let currentVerseText = '';
let bibleTyped = '';
let bibleStartTime = null;
let currentTestament = 'old';
let bibleTimerDuration = 60;
let bibleTimeLeft = 60;
let bibleTimerInterval = null;

// Chapter tracking for stats
let chapterStats = {
  totalWords: 0,
  totalChars: 0,
  correctChars: 0,
  totalTime: 0,
  versesCompleted: 0
};

// Initialize Bible page
function loadBiblePage() {
  updateBibleStats();
  loadBibleBooks(currentTestament);
  setupBibleEventListeners();
}

function setupBibleEventListeners() {
  // Testament tabs
  document.querySelectorAll('.bible-testament-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.bible-testament-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentTestament = this.dataset.testament;
      loadBibleBooks(currentTestament);
    });
  });
  
  // Timer select
  const timerSelect = document.getElementById('bible-timer-select');
  if (timerSelect && !timerSelect.dataset.listenerAdded) {
    timerSelect.dataset.listenerAdded = 'true';
    timerSelect.addEventListener('change', (e) => {
      bibleTimerDuration = parseInt(e.target.value);
      bibleTimeLeft = bibleTimerDuration;
      
      const countdownEl = document.getElementById('bible-countdown');
      if (bibleTimerDuration === 0) {
        countdownEl.textContent = '∞';
        countdownEl.className = '';
      } else {
        countdownEl.textContent = bibleTimerDuration + 's';
        countdownEl.className = '';
      }
    });
  }
  
  // Back button
  const backBtn = document.getElementById('back-to-books');
  if (backBtn && !backBtn.dataset.listenerAdded) {
    backBtn.dataset.listenerAdded = 'true';
    backBtn.addEventListener('click', () => {
      document.getElementById('bible-books-grid').style.display = 'grid';
      document.getElementById('bible-practice-card').style.display = 'none';
      stopBibleTimer();
      bibleTyped = '';
      document.getElementById('bible-input').value = '';
      resetChapterStats();
    });
  }
  
  // Bible input
  const bibleInput = document.getElementById('bible-input');
  if (bibleInput && !bibleInput.dataset.listenerAdded) {
    bibleInput.dataset.listenerAdded = 'true';
    bibleInput.addEventListener('input', handleBibleInput);
    bibleInput.addEventListener('paste', e => e.preventDefault());
  }
}

// Enhanced startBibleTimer with visual feedback
function startBibleTimer() {
  // Clear any existing timer
  if (bibleTimerInterval) {
    clearInterval(bibleTimerInterval);
  }
  
  // If timer is disabled (0), don't start
  if (bibleTimerDuration === 0) {
    document.getElementById('bible-countdown').textContent = '∞';
    document.getElementById('bible-countdown').className = '';
    return;
  }
  
  bibleTimeLeft = bibleTimerDuration;
  const countdownEl = document.getElementById('bible-countdown');
  countdownEl.textContent = bibleTimeLeft + 's';
  countdownEl.className = ''; // Reset classes
  
  bibleTimerInterval = setInterval(() => {
    bibleTimeLeft--;
    
    if (bibleTimeLeft <= 0) {
      clearInterval(bibleTimerInterval);
      bibleTimerInterval = null;
      countdownEl.textContent = '0s';
      countdownEl.className = 'danger';
      
      // Disable input
      document.getElementById('bible-input').disabled = true;
      
      // Show times up modal
      showTimesUpModal();
    } else {
      countdownEl.textContent = bibleTimeLeft + 's';
      
      // Update visual feedback based on time remaining
      if (bibleTimeLeft <= 10) {
        countdownEl.className = 'danger';
      } else if (bibleTimeLeft <= 30) {
        countdownEl.className = 'warning';
      } else {
        countdownEl.className = '';
      }
    }
  }, 1000);
}
// Show times up modal
function showTimesUpModal() {
  const overlay = document.createElement('div');
  overlay.className = 'bible-times-up-overlay';
  overlay.innerHTML = `
    <div class="bible-times-up-modal">
      <h3>⏰ Time's Up!</h3>
      <p>Complete this verse or move to the next one to continue practicing.</p>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn btn-secondary" onclick="this.closest('.bible-times-up-overlay').remove()">
          Review Verse
        </button>
        <button class="btn" onclick="this.closest('.bible-times-up-overlay').remove(); nextVerse();">
          Next Verse →
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Remove overlay when clicking outside modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}


// Update Bible stats from localStorage
function updateBibleStats() {
  const statsKey = 'bible_stats_global';
  const stats = JSON.parse(localStorage.getItem(statsKey) || '{"totalVerses": 0}');
  
  document.getElementById('total-verses-typed').textContent = stats.totalVerses || 0;
}

// Load books for testament
function loadBibleBooks(testament) {
  const booksGrid = document.getElementById('bible-books-grid');
  const books = testament === 'old' ? BIBLE_DATA.oldTestament : BIBLE_DATA.newTestament;
  
  let html = '';
  books.forEach(book => {
    const availableChapters = Object.keys(book.verses).length;
    html += `
      <div class="bible-book-card" onclick="openBibleBook('${testament}', '${book.name}')">
        <h4 class="bible-book-name">${book.name}</h4>
        <div class="bible-book-meta">
          <span>${availableChapters} of ${book.totalChapters} chapters</span>
        </div>
      </div>
    `;
  });
  
  booksGrid.innerHTML = html;
}

// Open a Bible book
window.openBibleBook = function(testament, bookName) {
  const books = testament === 'old' ? BIBLE_DATA.oldTestament : BIBLE_DATA.newTestament;
  currentBibleBook = books.find(b => b.name === bookName);
  
  if (!currentBibleBook) return;
  
  // Get first available chapter
  const availableChapters = Object.keys(currentBibleBook.verses).sort((a, b) => parseInt(a) - parseInt(b));
  currentChapter = parseInt(availableChapters[0]);
  currentVerseIndex = 0;
  
  // Reset chapter stats
  resetChapterStats();
  
  // Hide books, show practice
  document.getElementById('bible-books-grid').style.display = 'none';
  document.getElementById('bible-practice-card').style.display = 'block';
  
  // Update book name display
  updateChapterVerseDisplay();
  
  // Load first verse
  loadCurrentVerse();
};

// Reset chapter stats
function resetChapterStats() {
  chapterStats = {
    totalWords: 0,
    totalChars: 0,
    correctChars: 0,
    totalTime: 0,
    versesCompleted: 0
  };
}
// Update the chapter/verse display
function updateChapterVerseDisplay() {
  const availableChapters = Object.keys(currentBibleBook.verses).sort((a, b) => parseInt(a) - parseInt(b));
  const currentVerses = currentBibleBook.verses[currentChapter];
  const totalVerses = currentVerses ? currentVerses.length : 0;
  
  const displayText = `${currentBibleBook.name} ${currentChapter}:${currentVerseIndex + 1} of ${totalVerses}`;
  
  const practiceCard = document.getElementById('bible-practice-card');
  let chapterDisplay = practiceCard.querySelector('.bible-chapter-display');
  
  if (!chapterDisplay) {
    chapterDisplay = document.createElement('div');
    chapterDisplay.className = 'bible-chapter-display';
    
    const verseDisplay = document.getElementById('bible-verse-display');
    verseDisplay.parentNode.insertBefore(chapterDisplay, verseDisplay);
  }
  
  chapterDisplay.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; gap: 16px;">
      <button onclick="previousVerse()" class="btn btn-secondary btn-small" ${currentVerseIndex === 0 ? 'disabled' : ''}>← Previous</button>
      <span>${displayText}</span>
      <button onclick="nextVerse()" class="btn btn-secondary btn-small" ${currentVerseIndex >= totalVerses - 1 ? 'disabled' : ''}>Next →</button>
    </div>
    <div style="margin-top: 12px;">
      <button onclick="changeChapter(-1)" class="btn btn-secondary btn-small" ${!canGoPreviousChapter() ? 'disabled' : ''}>← Previous Chapter</button>
      <button onclick="changeChapter(1)" class="btn btn-secondary btn-small" ${!canGoNextChapter() ? 'disabled' : ''}>Next Chapter →</button>
    </div>
  `;
}

// Navigation functions
window.previousVerse = function() {
  if (currentVerseIndex > 0) {
    currentVerseIndex--;
    loadCurrentVerse();
  }
};

window.nextVerse = function() {
  const verses = currentBibleBook.verses[currentChapter];
  if (verses && currentVerseIndex < verses.length - 1) {
    currentVerseIndex++;
    loadCurrentVerse();
  }
};

window.changeChapter = function(direction) {
  const availableChapters = Object.keys(currentBibleBook.verses).map(Number).sort((a, b) => a - b);
  const currentIndex = availableChapters.indexOf(currentChapter);
  
  if (direction === -1 && currentIndex > 0) {
    // Show chapter summary before going back
    if (chapterStats.versesCompleted > 0) {
      showChapterSummary(() => {
        currentChapter = availableChapters[currentIndex - 1];
        currentVerseIndex = 0;
        resetChapterStats();
        loadCurrentVerse();
      });
    } else {
      currentChapter = availableChapters[currentIndex - 1];
      currentVerseIndex = 0;
      resetChapterStats();
      loadCurrentVerse();
    }
  } else if (direction === 1 && currentIndex < availableChapters.length - 1) {
    // Show chapter summary before moving forward
    if (chapterStats.versesCompleted > 0) {
      showChapterSummary(() => {
        currentChapter = availableChapters[currentIndex + 1];
        currentVerseIndex = 0;
        resetChapterStats();
        loadCurrentVerse();
      });
    } else {
      currentChapter = availableChapters[currentIndex + 1];
      currentVerseIndex = 0;
      resetChapterStats();
      loadCurrentVerse();
    }
  }
};

function canGoPreviousChapter() {
  const availableChapters = Object.keys(currentBibleBook.verses).map(Number).sort((a, b) => a - b);
  const currentIndex = availableChapters.indexOf(currentChapter);
  return currentIndex > 0;
}

function canGoNextChapter() {
  const availableChapters = Object.keys(currentBibleBook.verses).map(Number).sort((a, b) => a - b);
  const currentIndex = availableChapters.indexOf(currentChapter);
  return currentIndex < availableChapters.length - 1;
}

// Load current verse
function loadCurrentVerse() {
  const verses = currentBibleBook.verses[currentChapter];
  
  if (!verses || currentVerseIndex >= verses.length) {
    alert('Verse not available.');
    return;
  }
  
  currentVerseText = verses[currentVerseIndex];
  bibleTyped = '';
  bibleStartTime = null;
  
  updateChapterVerseDisplay();
  renderBibleVerse();
  
  const input = document.getElementById('bible-input');
  input.value = '';
  input.disabled = false;
  input.focus();
  
  // Reset stats display
  document.getElementById('bible-time').textContent = '0s';
  document.getElementById('bible-wpm').textContent = '0';
  document.getElementById('bible-accuracy').textContent = '100%';

  // Reset and display timer
  stopBibleTimer();
  bibleTimeLeft = bibleTimerDuration;
  const countdownEl = document.getElementById('bible-countdown');
  
  if (bibleTimerDuration === 0) {
    countdownEl.textContent = '∞';
    countdownEl.className = '';
  } else {
    countdownEl.textContent = bibleTimerDuration + 's';
    countdownEl.className = '';
  }
}
// FIX #1: Render verse with proper word wrapping (no word breaks)
function renderBibleVerse() {
  const display = document.getElementById('verse-text');
  
  // Split text into words to prevent mid-word line breaks
  const words = currentVerseText.split(' ');
  let html = '';
  let charIndex = 0;
  
  words.forEach((word, wordIdx) => {
    // Add space wrapper to keep words together
    html += '<span class="word-wrapper" style="display: inline-block; white-space: nowrap;">';
    
    // Render each character in the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const typedChar = bibleTyped[charIndex];
      
      let charClass = 'char';
      
      if (charIndex === bibleTyped.length) {
        charClass += ' current';
      } else if (typedChar !== undefined) {
        if (typedChar === char) {
          charClass += ' correct';
        } else {
          charClass += ' incorrect';
        }
      }
      
      html += `<span class="${charClass}">${escapeHtml(char)}</span>`;
      charIndex++;
    }
    
    html += '</span>';
    
    // Add space between words (except last word)
    if (wordIdx < words.length - 1) {
      const spaceTypedChar = bibleTyped[charIndex];
      let spaceClass = 'char';
      
      if (charIndex === bibleTyped.length) {
        spaceClass += ' current';
      } else if (spaceTypedChar !== undefined) {
        if (spaceTypedChar === ' ') {
          spaceClass += ' correct';
        } else {
          spaceClass += ' incorrect';
        }
      }
      
      html += `<span class="${spaceClass}">&nbsp;</span>`;
      charIndex++;
    }
  });
  
  display.innerHTML = html;
}

// Handle bible input
function handleBibleInput(e) {
  // Start timer on first keystroke
  if (!bibleStartTime) {
    bibleStartTime = Date.now();
    startBibleTimer();
  }
  
  bibleTyped = e.target.value;
  renderBibleVerse();
  
  // Calculate stats
  const elapsed = (Date.now() - bibleStartTime) / 1000;
  const wordsTyped = bibleTyped.length / 5;
  const wpm = elapsed > 0 ? Math.round((wordsTyped / elapsed) * 60) : 0;
  
  let correct = 0;
  for (let i = 0; i < bibleTyped.length; i++) {
    if (bibleTyped[i] === currentVerseText[i]) correct++;
  }
  const accuracy = bibleTyped.length > 0 ? Math.round((correct / bibleTyped.length) * 100) : 100;
  
  // Update display
  document.getElementById('bible-time').textContent = Math.floor(elapsed) + 's';
  document.getElementById('bible-wpm').textContent = wpm;
  document.getElementById('bible-accuracy').textContent = accuracy + '%';
  
  // Check completion
  if (bibleTyped.length >= currentVerseText.length) {
    const finalAccuracy = Math.round((correct / currentVerseText.length) * 100);
    completeBibleVerse(wpm, finalAccuracy, elapsed);
  }
}

// FIX #3: Complete verse with chapter stats tracking
function completeBibleVerse(wpm, accuracy, elapsed) {
  // Stop timer
  stopBibleTimer();
  
  // Disable input
  document.getElementById('bible-input').disabled = true;
  
  // Update chapter stats
  const wordCount = currentVerseText.split(' ').length;
  chapterStats.totalWords += wordCount;
  chapterStats.totalChars += currentVerseText.length;
  chapterStats.correctChars += Math.round((accuracy / 100) * currentVerseText.length);
  chapterStats.totalTime += elapsed;
  chapterStats.versesCompleted++;
  
  // Save verse completion to localStorage
  const statsKey = 'bible_stats_global';
  const stats = JSON.parse(localStorage.getItem(statsKey) || '{"totalVerses": 0}');
  stats.totalVerses = (stats.totalVerses || 0) + 1;
  localStorage.setItem(statsKey, JSON.stringify(stats));
  
  // Update display
  updateBibleStats();
  
  // Show completion toast
  const toast = document.createElement('div');
  toast.className = 'bible-completion-toast';
  toast.textContent = `✝️ Verse completed! ${wpm} WPM • ${accuracy}%`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2700);
  
  // Check if chapter is complete
  const verses = currentBibleBook.verses[currentChapter];
  if (currentVerseIndex < verses.length - 1) {
    // Auto-load next verse after 2 seconds
    setTimeout(() => {
      currentVerseIndex++;
      loadCurrentVerse();
    }, 2000);
  } else {
    // FIX #2 & #3: Chapter completed - show summary and auto-advance
    setTimeout(() => {
      completeChapter();
    }, 2000);
  }
}

// FIX #2 & #3: Complete chapter and show summary
function completeChapter() {
  showChapterSummary(() => {
    // Check if there's a next chapter
    const availableChapters = Object.keys(currentBibleBook.verses).map(Number).sort((a, b) => a - b);
    const currentIndex = availableChapters.indexOf(currentChapter);
    
    if (currentIndex < availableChapters.length - 1) {
      // Move to next chapter
      currentChapter = availableChapters[currentIndex + 1];
      currentVerseIndex = 0;
      resetChapterStats();
      loadCurrentVerse();
    } else {
      // Book completed
      const bookToast = document.createElement('div');
      bookToast.className = 'bible-completion-toast';
      bookToast.textContent = `📖 ${currentBibleBook.name} completed! Amazing work!`;
      document.body.appendChild(bookToast);
      
      setTimeout(() => {
        bookToast.style.opacity = '0';
        setTimeout(() => bookToast.remove(), 300);
      }, 4000);
      
      // Go back to books after 3 seconds
      setTimeout(() => {
        document.getElementById('bible-books-grid').style.display = 'grid';
        document.getElementById('bible-practice-card').style.display = 'none';
      }, 5000);
    }
  });
}

// FIX #3: Show chapter summary modal
function showChapterSummary(onClose) {
  // Calculate overall chapter stats
  const overallWPM = chapterStats.totalTime > 0 
    ? Math.round((chapterStats.totalWords / chapterStats.totalTime) * 60) 
    : 0;
  const overallAccuracy = chapterStats.totalChars > 0 
    ? Math.round((chapterStats.correctChars / chapterStats.totalChars) * 100) 
    : 100;
  
  const overlay = document.createElement('div');
  overlay.className = 'bible-times-up-overlay';
  overlay.innerHTML = `
    <div class="bible-chapter-summary-modal">
      <div class="chapter-summary-icon">🎉</div>
      <h3>Chapter ${currentChapter} Completed!</h3>
      <p class="chapter-summary-book">${currentBibleBook.name}</p>
      
      <div class="chapter-summary-stats">
        <div class="chapter-summary-stat">
          <div class="stat-icon">⚡</div>
          <div class="stat-content">
            <div class="stat-value">${overallWPM}</div>
            <div class="stat-label">Overall WPM</div>
          </div>
        </div>
        <div class="chapter-summary-stat">
          <div class="stat-icon">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${overallAccuracy}%</div>
            <div class="stat-label">Overall Accuracy</div>
          </div>
        </div>
        <div class="chapter-summary-stat">
          <div class="stat-icon">📝</div>
          <div class="stat-content">
            <div class="stat-value">${chapterStats.versesCompleted}</div>
            <div class="stat-label">Verses Completed</div>
          </div>
        </div>
      </div>
      
      <p class="chapter-summary-message">
        You typed ${chapterStats.totalWords} words with ${overallAccuracy}% accuracy!
      </p>
      
      <button class="btn" onclick="this.closest('.bible-times-up-overlay').remove();" style="width: 200px; margin: 0 auto;">
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

// Start countdown timer
function startBibleTimer() {
  if (bibleTimerInterval) {
    clearInterval(bibleTimerInterval);
  }
  
  if (bibleTimerDuration === 0) {
    document.getElementById('bible-countdown').textContent = '∞';
    document.getElementById('bible-countdown').className = '';
    return;
  }
  
  bibleTimeLeft = bibleTimerDuration;
  const countdownEl = document.getElementById('bible-countdown');
  countdownEl.textContent = bibleTimeLeft + 's';
  countdownEl.className = '';
  
  bibleTimerInterval = setInterval(() => {
    bibleTimeLeft--;
    
    if (bibleTimeLeft <= 0) {
      clearInterval(bibleTimerInterval);
      bibleTimerInterval = null;
      countdownEl.textContent = '0s';
      countdownEl.className = 'danger';
      
      document.getElementById('bible-input').disabled = true;
      showTimesUpModal();
    } else {
      countdownEl.textContent = bibleTimeLeft + 's';
      
      if (bibleTimeLeft <= 10) {
        countdownEl.className = 'danger';
      } else if (bibleTimeLeft <= 30) {
        countdownEl.className = 'warning';
      } else {
        countdownEl.className = '';
      }
    }
  }, 1000);
}

// Show times up modal
function showTimesUpModal() {
  const overlay = document.createElement('div');
  overlay.className = 'bible-times-up-overlay';
  overlay.innerHTML = `
    <div class="bible-times-up-modal">
      <h3>⏰ Time's Up!</h3>
      <p>Complete this verse or move to the next one to continue practicing.</p>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn btn-secondary" onclick="this.closest('.bible-times-up-overlay').remove()">
          Review Verse
        </button>
        <button class="btn" onclick="this.closest('.bible-times-up-overlay').remove(); nextVerse();">
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

// Stop timer
function stopBibleTimer() {
  if (bibleTimerInterval) {
    clearInterval(bibleTimerInterval);
    bibleTimerInterval = null;
  }
}

// Helper function
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Export for use in main file
window.loadBiblePage = loadBiblePage;
