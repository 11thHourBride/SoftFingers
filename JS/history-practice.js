// History Practice Data
const HISTORY_DATA = {
  martyrdom: {
    name: "Christian Martyrs",
    icon: "✝️",
    description: "Stories of faith and courage",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80",
    stories: [
      {
        id: "polycarp",
        title: "Polycarp of Smyrna",
        year: "155 AD",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80",
        text: "Polycarp, the bishop of Smyrna, was one of the early church fathers who had been a disciple of John the Apostle. When Roman authorities demanded he renounce Christ, the elderly bishop replied: 'Eighty-six years I have served Him, and He has done me no wrong. How can I blaspheme my King and Savior?' He was burned at the stake for his unwavering faith, becoming one of Christianity's most celebrated martyrs."
      },
      {
        id: "perpetua",
        title: "Perpetua and Felicity",
        year: "203 AD",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
        text: "Perpetua was a young noblewoman and nursing mother, while Felicity was her slave, pregnant at the time of their arrest. Despite intense pressure from family and authorities, both women refused to renounce their Christian faith. They were martyred together in the arena at Carthage, demonstrating remarkable courage and solidarity across social classes. Perpetua's diary, written while imprisoned, remains one of the earliest Christian texts written by a woman."
      },
      {
        id: "lawrence",
        title: "Lawrence of Rome",
        year: "258 AD",
        image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&q=80",
        text: "Lawrence served as a deacon in Rome, responsible for the Church's treasury and caring for the poor. When Emperor Valerian demanded the Church's riches, Lawrence gathered the sick, poor, and orphans, presenting them as 'the true treasures of the Church.' For this act of defiance, he was sentenced to death by being roasted on a gridiron. According to tradition, he maintained his wit and faith even in his final moments, famously saying 'Turn me over, I'm done on this side.'"
      },
      {
        id: "peter_apostle",
        title: "Peter the Apostle",
        year: "64-68 AD",
        image: "https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800&q=80",
        text: "Simon Peter, the fisherman who became Jesus's closest disciple and the rock upon which the church was built, faced martyrdom in Rome during Emperor Nero's persecution of Christians. According to early church tradition recorded by Origen and others, Peter was crucified upside down at his own request, feeling unworthy to die in the same manner as his Lord. Despite his earlier denial of Christ during Jesus's trial, Peter had become the fearless leader of the early church, preaching boldly in Jerusalem and establishing Christian communities throughout the Roman world. His martyrdom, likely occurring in Nero's circus on Vatican Hill, symbolized the ultimate transformation of a man who found courage through faith. Peter's letters in the New Testament encouraged believers to stand firm in persecution, words he lived out to his final breath. Today, St. Peter's Basilica stands over the traditional site of his burial, honoring the apostle who Jesus declared would be given the keys to the kingdom of heaven."
      },
      {
        id: "paul_apostle",
        title: "Paul the Apostle",
        year: "64-67 AD",
        image: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?w=800&q=80",
        text: "Saul of Tarsus, once Christianity's fiercest persecutor, became its greatest missionary after his dramatic conversion on the Damascus road. As Paul, he traveled thousands of miles establishing churches across the Roman Empire, writing letters that would become much of the New Testament, and enduring beatings, shipwrecks, and imprisonment for the Gospel. His ministry to Gentiles opened Christianity beyond its Jewish origins, fundamentally shaping the faith's development. Tradition holds that Paul was beheaded in Rome during Nero's persecution, his Roman citizenship sparing him from crucifixion. Before his execution, he wrote his final letter to Timothy: 'I have fought the good fight, I have finished the race, I have kept the faith.' Paul's transformation from persecutor to martyr demonstrates Christianity's power to change lives. His theological writings on grace, faith, and salvation continue influencing Christian thought two millennia later. From violent opponent to willing sacrifice, Paul's life and death exemplified total devotion to Christ and the conviction that neither death nor life could separate believers from God's love."
      },
      {
        id: "andrew_apostle",
        title: "Andrew the Apostle",
        year: "60 AD",
        image: "https://images.unsplash.com/photo-1445346366695-5bf62de05412?w=800&q=80",
        text: "Andrew, originally a disciple of John the Baptist, became one of Jesus's first followers and brought his brother Peter to Christ. After Pentecost, tradition states Andrew preached throughout Greece, Asia Minor, and along the Black Sea, eventually reaching as far as Scythia and Byzantium. His missionary work helped establish Christianity in regions that would become crucial to the faith's spread. According to early church sources, Andrew was martyred in Patras, Greece, crucified on an X-shaped cross by order of the Roman governor Aegeates, whose wife Andrew had converted to Christianity. The governor, enraged by his wife's conversion and Andrew's refusal to sacrifice to pagan gods, ordered his execution. Andrew reportedly preached from the cross for two days before dying, using his elevated position to proclaim Christ to gathered crowds. He encouraged believers not to rescue him, embracing martyrdom as union with his crucified Lord. The X-shaped cross became known as St. Andrew's Cross, appearing on Scotland's flag, as Andrew is that nation's patron saint. His faithfulness from Jesus's first calling to his final breath exemplifies unwavering apostolic devotion."
      },
      {
        id: "james_zebedee",
        title: "James, Son of Zebedee",
        year: "44 AD",
        image: "https://images.unsplash.com/photo-1501675423372-86c80e1c65c5?w=800&q=80",
        text: "James, son of Zebedee and brother of John, was one of Jesus's inner circle of three disciples who witnessed the Transfiguration and accompanied Jesus to Gethsemane. Jesus nicknamed James and his brother 'Boanerges'—Sons of Thunder—perhaps reflecting their passionate temperaments. After Jesus's ascension, James became a leader in the Jerusalem church, boldly proclaiming the Gospel despite growing persecution. In 44 AD, King Herod Agrippa I, seeking to please Jewish authorities opposing Christianity, ordered James's arrest and execution. The book of Acts records simply: 'He had James, the brother of John, put to death with the sword.' James thus became the first apostle martyred, beheaded in Jerusalem approximately fourteen years after Jesus's crucifixion. Early church historian Eusebius recounts that James's accuser was so moved by the apostle's testimony at trial that he converted to Christianity on the spot, choosing to be executed alongside James. Both men reportedly encouraged each other as they faced death together. James's martyrdom signaled the beginning of systematic persecution against church leaders. His willingness to die for his faith, having witnessed Jesus's resurrection firsthand, powerfully testified to Christianity's truth. His death fulfilled Jesus's prophecy that James would indeed drink from the same cup of suffering."
      },
      {
        id: "ignatius",
        title: "Ignatius of Antioch",
        year: "108 AD",
        image: "https://images.unsplash.com/photo-1544306094-e2dcf9479da3?w=800&q=80",
        text: "Ignatius served as bishop of Antioch, one of early Christianity's most important centers, where believers were first called Christians. Tradition identifies him as a disciple of the apostle John, directly connecting him to Jesus's original followers. Around 108 AD, during Emperor Trajan's reign, Ignatius was arrested and sentenced to death in Rome's Colosseum, to be devoured by wild beasts for the entertainment of crowds. During his journey from Antioch to Rome under military guard, Ignatius wrote seven letters to various churches, which survive today as precious early Christian documents. In these letters, he emphasized church unity, the reality of Christ's physical incarnation against emerging heresies, and the importance of bishops in church governance. His letter to the Romans is particularly moving—he begged them not to intervene to save his life, writing: 'I am God's wheat, and I am being ground by the teeth of wild beasts so that I may become pure bread of Christ.' Ignatius eagerly embraced martyrdom as ultimate union with Christ, viewing it not as tragedy but as glorious completion of his faith journey. His letters reveal a man of profound devotion who saw death in the arena as the culmination of Christian discipleship. Ignatius's courage and theological insights significantly influenced early church development."
      },
      {
        id: "antipas",
        title: "Antipas of Pergamum",
        year: "92 AD",
        image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&q=80",
        text: "Antipas serves as an important yet often overlooked martyr, specifically mentioned by name in the book of Revelation. Jesus, speaking to the church in Pergamum, declared: 'I know where you dwell, where Satan's throne is. Yet you hold fast my name, and you did not deny my faith even in the days of Antipas my faithful witness, who was killed among you.' Pergamum was indeed a center of pagan worship, featuring a massive altar to Zeus and temples to various Roman gods. As bishop of Pergamum, Antipas faithfully preached Christ in this spiritually hostile environment. According to early church tradition preserved by various sources, pagan priests accused Antipas of causing their gods to fall silent and preventing their divination practices from working. The Roman authorities demanded he renounce Christ and offer sacrifice to the emperor. When Antipas refused, he was placed inside a bronze bull that was heated until it glowed red hot—a torture device designed to roast victims alive while their screams echoed through holes designed to sound like a bull's roar. Throughout this horrific ordeal, witnesses reported that Antipas praised God until his death. Jesus's personal commendation of Antipas in Revelation underscores that every faithful witness matters to God, whether remembered by history or known only to heaven. Antipas died approximately 92 AD, during Emperor Domitian's persecution."
      },
      {
        id: "john_huss",
        title: "John Huss",
        year: "July 6, 1415",
        image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
        text: "Jan Hus was a Czech priest, philosopher, and rector of Charles University in Prague who became an early church reformer, preceding Martin Luther by a century. Influenced by John Wycliffe's writings, Hus preached against clerical corruption, the selling of indulgences, and other abuses in the medieval Catholic Church. He argued that Christ, not the Pope, was the true head of the church, and that Scripture held supreme authority over church tradition. His teachings threatened both religious and political establishments. In 1415, Hus was summoned to the Council of Constance under a promise of safe conduct from Emperor Sigismund to defend his views. However, upon arrival, he was immediately arrested, tried for heresy, and imprisoned. The council demanded he recant his teachings, but Hus refused to deny what he believed to be biblical truth, reportedly saying, 'I would not, for a chapel full of gold, recede from the truth.' On July 6, 1415, Hus was led to execution. He was stripped, chained to a stake, and burned alive. As flames engulfed him, witnesses reported he sang hymns and prayed for his enemies. His last words were reportedly, 'Christ, son of the living God, have mercy on me.' Hus's martyrdom sparked the Hussite Wars in Bohemia and inspired later reformers. He prophetically declared that though they were burning a goose (his name means 'goose' in Czech), a swan would arise that they could not burn—many believe this prophecy was fulfilled in Martin Luther. Hus's courage in standing for biblical truth against institutional power made him a hero of the Protestant Reformation."
      },
      {
        id: "joan_of_arc",
        title: "Joan of Arc",
        year: "May 30, 1431",
        image: "https://images.unsplash.com/photo-1583001809774-fa8bc181a1b2?w=800&q=80",
        text: "Joan of Arc, a peasant girl from Domrémy, France, became one of history's most remarkable figures, uniting religious devotion with military genius during the Hundred Years' War. At age thirteen, Joan began experiencing visions of Saints Michael, Catherine, and Margaret, who instructed her to support Charles VII and help free France from English domination. Despite her youth and gender, she convinced Charles to allow her to lead French forces. Wearing armor and carrying her banner inscribed with 'Jesus, Mary,' Joan led the French army to crucial victories, breaking the English siege of Orléans and enabling Charles's coronation at Reims. Her military success defied all contemporary expectations of women's roles. In 1430, Burgundian forces allied with England captured Joan. Rather than treating her as a prisoner of war, they charged her with heresy and witchcraft, specifically targeting her claim of divine guidance and her wearing of men's clothing. Her trial was politically motivated, designed to discredit Charles VII by proving his victories came through a heretic. Though only nineteen, Joan defended herself brilliantly against her interrogators, but was ultimately condemned. On May 30, 1431, Joan was burned at the stake in Rouen's marketplace. She requested a cross to hold and reportedly called on Jesus until the flames silenced her. An English soldier who witnessed her death later said, 'We are lost; we have burned a saint.' Twenty-five years later, Pope Callixtus III authorized a retrial that declared her innocent. In 1920, the Catholic Church canonized her as Saint Joan of Arc. Her story transcends simple martyrdom—she was a warrior, visionary, and symbol of courage who maintained faith even facing flames, becoming France's patron saint and an enduring icon of conviction and bravery."
      },
      {
        id: "thomas_cranmer",
        title: "Thomas Cranmer",
        year: "March 21, 1556",
        image: "https://images.unsplash.com/photo-1495021403695-38989a98e6e7?w=800&q=80",
        text: "Thomas Cranmer served as Archbishop of Canterbury during the English Reformation, playing a crucial role in England's break from Rome and the establishment of the Church of England. He helped King Henry VIII obtain his divorce from Catherine of Aragon and supported Henry's assertion of royal supremacy over the church. More significantly, Cranmer was the primary author of the Book of Common Prayer, which shaped Anglican worship and the English language itself with its beautiful, enduring phrases. He also supervised the translation of the Great Bible, making Scripture accessible to English speakers. Under the young King Edward VI, Cranmer advanced Protestant reforms, but when Catholic Queen Mary I took the throne in 1553, his position became perilous. Mary was determined to return England to Catholicism and punish those who had promoted Protestantism. Cranmer was arrested, tried for treason and heresy, and imprisoned. Under extreme psychological pressure and threat of burning, Cranmer signed several recantations, hoping to save his life. However, Mary ordered his execution regardless. On March 21, 1556, Cranmer was to be burned at St. Mary's Church in Oxford. Before his execution, he was forced to read a final recantation, but instead, he stunned onlookers by renouncing his earlier recantations. He declared that he had sinned by signing them and proclaimed his Protestant beliefs. When led to the stake, Cranmer thrust his right hand—the hand that had signed the recantations—into the flames first, declaring, 'This unworthy right hand!' He held it steadily in the fire until it was consumed, showing remarkable courage. Cranmer's final act of faith, reclaiming his convictions even at death's door, transformed his story from one of weakness to redemption. His liturgical legacy lives on in Anglican churches worldwide, and his courage in his final moments inspired Protestants during the Marian persecutions."
      },
      {
        id: "stephen_deacon",
        title: "Stephen the First Martyr",
        year: "34 AD",
        image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80",
        text: "Stephen holds the distinction of being Christianity's first martyr, or 'protomartyr,' his death recorded in vivid detail in Acts chapters 6 and 7. Chosen as one of seven deacons to serve the early Jerusalem church, Stephen was 'full of faith and of the Holy Spirit,' performing great wonders and signs among the people. His wisdom in debating Scripture was so compelling that his opponents 'could not stand against the wisdom and the Spirit with which he was speaking.' Unable to defeat him through argument, they brought false witnesses who accused him of blasphemy against Moses, the Law, and the Temple. Arrested and brought before the Sanhedrin, Stephen was given opportunity to defend himself. His response was not a defense but a bold sermon recounting Israel's history of rejecting God's messengers, culminating in their betrayal and murder of 'the Righteous One'—Jesus Christ. He accused the religious leaders directly: 'You stiff-necked people, uncircumcised in heart and ears, you always resist the Holy Spirit.' As the council raged against him, Stephen looked up and declared, 'Behold, I see the heavens opened, and the Son of Man standing at the right hand of God.' This claim of seeing Jesus in glory was the final straw. The crowd rushed upon him, dragged him outside the city, and stoned him to death. As stones struck him, Stephen prayed, 'Lord Jesus, receive my spirit,' echoing Jesus's words on the cross. His final words were for his executioners: 'Lord, do not hold this sin against them.' Among the crowd approving Stephen's death was a young Pharisee named Saul, who would later become the apostle Paul after his own dramatic conversion. Stephen's death was approximately 34 AD, just a few years after Christ's crucifixion, and it marked the beginning of severe persecution that scattered Christians beyond Jerusalem, paradoxically spreading the Gospel throughout the Roman world. Stephen's courage, his Christ-like forgiveness of his killers, and his vision of Jesus standing to receive him set the pattern for Christian martyrdom throughout history."
      }
    ]
  },
  
  discoveries: {
    name: "Scientific Discoveries",
    icon: "🔬",
    description: "Breakthroughs that changed the world",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    stories: [
      {
        id: "penicillin",
        title: "Discovery of Penicillin",
        year: "1928",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
        text: "Alexander Fleming made one of medicine's greatest accidental discoveries when he returned from vacation to find mold had contaminated his bacterial cultures. Rather than discarding them, he noticed the mold had killed the surrounding bacteria. This chance observation led to the development of penicillin, the first widely used antibiotic. Fleming's discovery has saved countless millions of lives and revolutionized modern medicine, earning him the Nobel Prize in 1945."
      },
      {
        id: "dna",
        title: "Structure of DNA",
        year: "1953",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
        text: "James Watson and Francis Crick, building on Rosalind Franklin's crucial X-ray crystallography work, discovered the double helix structure of DNA. This breakthrough revealed how genetic information is stored and transmitted, fundamentally changing our understanding of life itself. The elegant spiral staircase structure explained how DNA could replicate and pass information to new cells, launching the modern era of molecular biology and genetics."
      },
      {
        id: "gravity",
        title: "Law of Universal Gravitation",
        year: "1687",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
        text: "Isaac Newton's formulation of the law of universal gravitation unified celestial and terrestrial mechanics under a single mathematical framework. His work explained not only why apples fall from trees but also why planets orbit the sun. Published in his masterwork 'Principia Mathematica,' Newton's laws of motion and gravitation remained unchallenged for over two centuries and still accurately predict the motion of most objects we encounter daily."
      }
    ]
  },
  
  exploration: {
    name: "Age of Exploration",
    icon: "🗺️",
    description: "Voyages that mapped the world",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
    stories: [
      {
        id: "columbus",
        title: "Columbus Reaches the Americas",
        year: "1492",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        text: "Christopher Columbus, sailing under Spanish patronage, sought a westward route to Asia but instead encountered the Americas. On October 12, 1492, his expedition landed in the Bahamas, initiating sustained contact between Europe and the Americas. While Columbus never realized he had found a 'New World,' his voyage transformed global history, though it also began a period of devastating consequences for indigenous peoples through disease, exploitation, and colonization."
      },
      {
        id: "magellan",
        title: "First Circumnavigation",
        year: "1519-1522",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        text: "Ferdinand Magellan led the first expedition to circumnavigate the globe, proving Earth's spherical nature through direct experience. Though Magellan died in the Philippines, his crew completed the journey under Juan Sebastián Elcano's command. The expedition faced mutinies, starvation, scurvy, and hostile encounters, yet the 18 survivors who returned to Spain had accomplished an unprecedented feat of navigation and human endurance."
      },
      {
        id: "cook",
        title: "Captain Cook's Pacific Voyages",
        year: "1768-1779",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        text: "James Cook made three voyages to the Pacific Ocean, mapping lands from New Zealand to Hawaii with unprecedented accuracy. His expeditions combined naval precision with scientific inquiry, carrying astronomers and naturalists who documented countless new species. Cook's detailed charts and astronomical observations advanced navigation and geography, though his voyages also marked the beginning of European colonization in the Pacific with profound impacts on indigenous populations."
      }
    ]
  },
  
  inventions: {
    name: "Revolutionary Inventions",
    icon: "💡",
    description: "Innovations that shaped civilization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    stories: [
      {
        id: "printing",
        title: "Gutenberg's Printing Press",
        year: "1440",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
        text: "Johannes Gutenberg's invention of movable type printing revolutionized information dissemination in Europe. His press could produce books at unprecedented speed and cost, making knowledge accessible beyond wealthy elites and monasteries. The Gutenberg Bible, printed around 1455, demonstrated the technology's potential. This invention catalyzed the Renaissance, enabled the Reformation, and laid groundwork for the Scientific Revolution by allowing rapid spread of ideas across Europe."
      },
      {
        id: "telephone",
        title: "Bell's Telephone",
        year: "1876",
        image: "https://images.unsplash.com/photo-1553708881-112abc53fe54?w=800&q=80",
        text: "Alexander Graham Bell successfully transmitted the first clear speech over wire on March 10, 1876, famously calling to his assistant: 'Mr. Watson, come here, I want to see you.' The telephone transformed human communication, shrinking distances and enabling instant voice contact across vast spaces. Bell's invention evolved from scientific curiosity about sound and speech into a technology that would fundamentally reshape business, personal relationships, and social structures worldwide."
      },
      {
        id: "internet",
        title: "Birth of the Internet",
        year: "1969",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        text: "The first ARPANET message was sent from UCLA to Stanford on October 29, 1969, marking the internet's birth. The system crashed after transmitting just two letters of 'LOGIN,' but this humble beginning launched a revolution. Developed initially for military and academic communication, the internet evolved into a global network connecting billions. It has transformed commerce, education, entertainment, and human interaction more profoundly than perhaps any other invention in history."
      }
    ]
  },
  
  independence: {
    name: "Independence Movements",
    icon: "🗽",
    description: "Nations fighting for freedom",
    image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&q=80",
    stories: [
      {
        id: "american",
        title: "American Revolution",
        year: "1775-1783",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        text: "The American colonies' rebellion against British rule began with the 'shot heard round the world' at Lexington in 1775. Colonists fought for self-governance and individual rights, articulating their cause in the Declaration of Independence: 'all men are created equal.' After years of warfare, including the pivotal victory at Yorktown in 1781, the Treaty of Paris recognized American independence, creating a new nation founded on Enlightenment principles that would influence democratic movements worldwide."
      },
      {
        id: "indian",
        title: "Indian Independence",
        year: "1947",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
        text: "India achieved independence from British rule on August 15, 1947, after decades of struggle led by figures like Mahatma Gandhi and Jawaharlal Nehru. Gandhi's philosophy of non-violent resistance inspired millions to peaceful protest despite brutal repression. The independence movement combined civil disobedience, boycotts, and political negotiation. While independence was bittersweet due to partition's violence, it ended nearly 200 years of colonial rule and inspired anti-colonial movements across Asia and Africa."
      },
      {
        id: "south_african",
        title: "End of Apartheid",
        year: "1994",
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
        text: "South Africa's first democratic elections in 1994 marked the end of apartheid, the brutal system of racial segregation. Nelson Mandela, imprisoned for 27 years for his activism, became the nation's first Black president. The peaceful transition from white minority rule to democracy, guided by Mandela's vision of reconciliation rather than revenge, offered hope that deeply divided societies could heal. The Truth and Reconciliation Commission sought justice while building a shared future."
      }
    ]
  },
  
  renaissance: {
    name: "Renaissance Era",
    icon: "🎨",
    description: "The rebirth of art and learning",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    stories: [
      {
        id: "davinci",
        title: "Leonardo da Vinci",
        year: "1452-1519",
        image: "https://images.unsplash.com/photo-1578926078451-e23a3d2b9189?w=800&q=80",
        text: "Leonardo da Vinci epitomized the Renaissance ideal of the universal genius. He excelled as painter, sculptor, architect, scientist, and engineer. His masterpieces like 'The Last Supper' and 'Mona Lisa' revolutionized art through innovative techniques and psychological depth. His notebooks revealed designs for helicopters, tanks, and submarines centuries before their invention. Da Vinci's insatiable curiosity and systematic observation of nature bridged art and science, embodying the Renaissance spirit of human potential."
      },
      {
        id: "michelangelo",
        title: "Michelangelo's Sistine Chapel",
        year: "1508-1512",
        image: "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?w=800&q=80",
        text: "Michelangelo reluctantly accepted Pope Julius II's commission to paint the Sistine Chapel ceiling, considering himself primarily a sculptor. Working alone on scaffolding, he spent four years creating one of art history's masterpieces. The ceiling's nine central panels depict Creation, from God separating light from darkness to the Flood. The iconic 'Creation of Adam,' showing God giving life to humanity, became one of the world's most recognizable images, influencing Western art for centuries."
      },
      {
        id: "medici",
        title: "The Medici Family",
        year: "1400s-1500s",
        image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80",
        text: "The Medici banking family transformed Florence into the Renaissance's cultural heart through generous patronage of arts and learning. Cosimo and Lorenzo de' Medici supported artists like Donatello, Botticelli, and Michelangelo, while hosting scholars who translated ancient Greek and Roman texts. Their patronage enabled artists to work without financial worry, fostering creativity and innovation. The Medicis' support of humanism and classical learning helped spark the intellectual revolution that spread across Europe."
      }
    ]
  },
   ancientCivilizations: {
    name: "Ancient Civilizations",
    icon: "🏛️",
    description: "The foundations of human society",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    stories: [
      {
        id: "egypt_pyramids",
        title: "Building the Great Pyramids",
        year: "2580-2560 BC",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
        text: "The Great Pyramid of Giza stands as a testament to ancient Egyptian engineering prowess. Built as a tomb for Pharaoh Khufu, this architectural marvel required an estimated 2.3 million limestone blocks, each weighing between 2.5 to 15 tons. For over 3,800 years, it remained the tallest man-made structure in the world. The precision of its construction astounds modern engineers: the base is level to within 2.1 centimeters, and its sides are oriented almost exactly to true north. Workers, contrary to popular belief, were not slaves but skilled laborers who were well-fed and housed in nearby workers' villages. The pyramid's construction required sophisticated mathematics, astronomy, and organizational skills that demonstrate the advanced nature of ancient Egyptian civilization."
      },
      {
        id: "roman_aqueducts",
        title: "Roman Aqueduct Engineering",
        year: "312 BC - 226 AD",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
        text: "The Romans revolutionized water supply with their magnificent aqueduct systems, bringing fresh water from distant mountain springs to their cities. The Aqua Appia, built in 312 BC, was Rome's first aqueduct, stretching 16 kilometers mostly underground. At their peak, eleven major aqueducts served Rome, delivering about 1 million cubic meters of water daily—more than many modern cities provide per capita. These gravity-fed systems required remarkable engineering precision: gradients of just 1 in 4,800 maintained steady flow across valleys and mountains. The iconic arched bridges we associate with Roman aqueducts were actually just a small portion of the systems, which ran mostly underground or at ground level. Some Roman aqueducts still function today, nearly 2,000 years later, testament to their builders' skill and the quality of Roman concrete."
      },
      {
        id: "library_alexandria",
        title: "The Library of Alexandria",
        year: "3rd Century BC",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
        text: "The Great Library of Alexandria represented the ancient world's greatest collection of knowledge, housing an estimated 400,000 to 700,000 scrolls at its height. Founded by Ptolemy I Soter and expanded by his successors, it aimed to collect all the world's knowledge under one roof. Scholars came from across the known world to study mathematics, astronomy, medicine, and philosophy. The library pioneered systematic cataloging, literary criticism, and translation—the Septuagint, the Greek translation of Hebrew scriptures, was produced here. Ships docking at Alexandria's harbor were required to loan any books they carried; these were copied, with the originals often kept for the library and copies returned to owners. Though its destruction remains shrouded in mystery—likely occurring gradually through multiple events rather than one catastrophic fire—the Library's loss represents one of history's greatest intellectual tragedies, with countless ancient works lost forever to humanity."
      }
    ]
  },

  worldWars: {
    name: "World Wars",
    icon: "⚔️",
    description: "Conflicts that shaped the modern world",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    stories: [
      {
        id: "dday",
        title: "D-Day Invasion of Normandy",
        year: "June 6, 1944",
        image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80",
        text: "Operation Overlord, the Allied invasion of Nazi-occupied France, began on June 6, 1944, with the largest amphibious assault in history. Over 156,000 American, British, and Canadian troops landed on five beaches along a 50-mile stretch of Normandy coastline. The operation required unprecedented coordination: 5,000 ships and landing craft, 11,000 aircraft, and months of deception operations to mislead German forces about the landing location. Paratroopers dropped behind enemy lines in darkness to secure key positions. Despite heavy casualties—approximately 10,000 Allied casualties on the first day, with 4,400 confirmed dead—the invasion succeeded in establishing a crucial foothold in continental Europe. The bravery displayed at Omaha Beach, where American forces faced the fiercest resistance, has become legendary. D-Day marked the beginning of the end for Nazi Germany, opening the Western Front that would lead to Allied victory in Europe less than a year later."
      },
      {
        id: "battle_stalingrad",
        title: "Battle of Stalingrad",
        year: "August 1942 - February 1943",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
        text: "The Battle of Stalingrad stands as one of history's bloodiest battles and a crucial turning point in World War II. Hitler's obsession with capturing this industrial city led to a brutal five-month urban warfare campaign. Soviet defenders and German attackers fought building by building, room by room, often engaging in hand-to-hand combat. Soviet sniper Vasily Zaytsev became legendary, reportedly killing 225 enemy soldiers during the battle. The harsh Russian winter, lack of supplies, and relentless Soviet resistance gradually wore down German forces. In November 1942, the Soviets launched Operation Uranus, encircling the German Sixth Army. Despite Hitler's orders to fight to the death, German commander Friedrich Paulus surrendered on February 2, 1943. The battle claimed an estimated 2 million casualties—soldiers and civilians combined. This Soviet victory shattered the myth of German invincibility and marked the beginning of Germany's retreat on the Eastern Front, ultimately contributing decisively to Allied victory."
      },
      {
        id: "atomic_bomb",
        title: "The Manhattan Project",
        year: "1942-1945",
        image: "https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=800&q=80",
        text: "The Manhattan Project represented humanity's largest and most secret scientific endeavor, bringing together the world's greatest physicists to develop the atomic bomb. Led by J. Robert Oppenheimer and General Leslie Groves, the project employed over 130,000 people across secret facilities in Los Alamos, Oak Ridge, and Hanford. Scientists including Enrico Fermi, Niels Bohr, and Richard Feynman worked to solve unprecedented technical challenges in uranium enrichment and plutonium production. The first test, code-named Trinity, occurred in the New Mexico desert on July 16, 1945, producing an explosion equivalent to 22,000 tons of TNT. Witnessing it, Oppenheimer famously recalled words from the Bhagavad Gita: 'Now I am become Death, the destroyer of worlds.' Three weeks later, atomic bombs devastated Hiroshima and Nagasaki, killing over 200,000 people and forcing Japan's surrender. The project ushered in the nuclear age, forever changing warfare, international relations, and humanity's relationship with scientific power. Its legacy remains deeply controversial, raising enduring questions about the ethics of such devastating weapons."
      }
    ]
  },

  civilRights: {
    name: "Civil Rights Movements",
    icon: "✊",
    description: "Fighting for equality and justice",
    image: "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?w=800&q=80",
    stories: [
      {
        id: "rosa_parks",
        title: "Rosa Parks and Montgomery Bus Boycott",
        year: "December 1, 1955",
        image: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=800&q=80",
        text: "On December 1, 1955, Rosa Parks refused to give up her seat to a white passenger on a Montgomery, Alabama bus, an act of defiance that sparked a movement. Contrary to popular belief, Parks was not simply a tired seamstress but a trained activist with the NAACP who had attended workshops on civil disobedience. Her arrest galvanized Montgomery's Black community, leading to a 381-day bus boycott organized by the newly formed Montgomery Improvement Association, led by a young minister named Martin Luther King Jr. African Americans, who comprised 75% of the bus system's riders, organized carpools, walked miles to work, and endured harassment and violence. The boycott severely damaged the bus company financially and drew national attention to segregation's injustices. On November 13, 1956, the Supreme Court ruled that bus segregation was unconstitutional. Parks's courage and the community's sustained resistance demonstrated that organized, nonviolent protest could challenge systemic racism, inspiring the broader Civil Rights Movement."
      },
      {
        id: "march_washington",
        title: "March on Washington",
        year: "August 28, 1963",
        image: "https://images.unsplash.com/photo-1483301286521-68b33ee3d36c?w=800&q=80",
        text: "On August 28, 1963, approximately 250,000 people gathered at the Lincoln Memorial in Washington D.C. for the March on Washington for Jobs and Freedom, making it the largest demonstration for civil rights in American history at that time. The march's organizers, including A. Philip Randolph, Bayard Rustin, and the 'Big Six' civil rights leaders, aimed to pressure the government to pass meaningful civil rights legislation and address economic inequality affecting African Americans. The sweltering summer day featured speeches from various civil rights leaders, but Dr. Martin Luther King Jr.'s 'I Have a Dream' speech became the defining moment. King's powerful oratory, departing from his prepared text to deliver the now-famous refrain, articulated a vision of racial harmony that resonated across America and around the world. The march's peaceful, dignified character helped shift public opinion and contributed to passage of the Civil Rights Act of 1964 and Voting Rights Act of 1965, though the struggle for true equality continued long after."
      },
      {
        id: "apartheid_mandela",
        title: "Nelson Mandela's Release",
        year: "February 11, 1990",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        text: "After 27 years in prison, Nelson Mandela walked free on February 11, 1990, his release marking a pivotal moment in South Africa's transition from apartheid to democracy. Mandela had been imprisoned since 1962 for his opposition to apartheid—the brutal system of racial segregation that denied basic rights to South Africa's Black majority. During his imprisonment on Robben Island and later at Pollsmoor and Victor Verster prisons, Mandela became a global symbol of resistance to oppression. International pressure, economic sanctions, and internal resistance had made apartheid increasingly unsustainable. President F.W. de Klerk, recognizing the need for change, announced Mandela's release. Mandela emerged not with bitterness but with a message of reconciliation, famously saying, 'As I walked out the door toward the gate that would lead to my freedom, I knew if I didn't leave my bitterness and hatred behind, I'd still be in prison.' Four years later, he became South Africa's first Black president in the nation's first fully democratic elections, choosing forgiveness over revenge and helping guide his country toward a peaceful transition, though challenges of inequality persist today."
      }
    ]
  },

  industrialRevolution: {
    name: "Industrial Revolution",
    icon: "⚙️",
    description: "Technology transforms society",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    stories: [
      {
        id: "steam_engine",
        title: "James Watt's Steam Engine",
        year: "1769-1776",
        image: "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?w=800&q=80",
        text: "James Watt's improvements to the steam engine, patented in 1769, transformed a crude pumping device into an efficient power source that would drive the Industrial Revolution. While Thomas Newcomen had invented an early steam engine in 1712, it was inefficient, consuming enormous amounts of coal. Watt's innovation—adding a separate condenser—dramatically improved efficiency, reducing fuel consumption by 75%. His partnership with industrialist Matthew Boulton brought these engines to market, powering factories, mills, mines, and eventually locomotives and ships. The steam engine freed factories from water power, allowing them to locate anywhere. It mechanized textile production, increased mining output, and enabled mass transportation. Watt also developed the concept of 'horsepower' as a unit of measurement and invented the governor to regulate engine speed. His improvements didn't just advance technology—they transformed society, concentrating workers in industrial cities, creating new social classes, and beginning humanity's reliance on fossil fuels that continues today. The Industrial Revolution Watt enabled brought unprecedented prosperity but also pollution, exploitation, and social upheaval."
      },
      {
        id: "assembly_line",
        title: "Ford's Assembly Line",
        year: "1913",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
        text: "On October 7, 1913, Henry Ford revolutionized manufacturing by implementing the moving assembly line at his Highland Park plant in Michigan. Before this innovation, skilled workers assembled entire automobiles at stationary positions, taking over 12 hours to complete one Model T. Ford's system broke production into 84 discrete steps, with the car moving past stationary workers who each performed one specific task repeatedly. This method, inspired by meatpacking operations and precision manufacturing, reduced Model T assembly time to just 93 minutes. The efficiency gains were staggering: production increased from 68,773 cars in 1912 to 202,667 in 1914. This allowed Ford to dramatically reduce prices—from $850 in 1908 to $260 in 1924—making automobiles affordable for average Americans. Ford also instituted the 'Five Dollar Day' wage in 1914, doubling workers' pay to reduce turnover and enable employees to buy the cars they built. The assembly line principle spread across industries, defining modern mass production, though it also brought monotonous, dehumanizing work that labor movements and later automation would address."
      },
      {
        id: "electricity_edison",
        title: "Edison's Electric Light System",
        year: "1879-1882",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
        text: "Thomas Edison's development of a practical electric lighting system between 1879 and 1882 fundamentally changed human civilization, extending productive hours beyond daylight and transforming urban life. While Edison didn't invent the light bulb—over 20 inventors had created electric lights before him—he developed the first commercially practical incandescent lighting system. His key innovations included a high-resistance lamp with a carbonized bamboo filament that burned for over 1,200 hours, and more importantly, an entire electrical distribution system including generators, wiring, switches, and meters. On September 4, 1882, Edison's Pearl Street Station in Manhattan began supplying electricity to 59 customers in lower Manhattan, marking the birth of the electric utility industry. His direct current (DC) system initially competed with Nikola Tesla and George Westinghouse's alternating current (AC) system in the 'War of Currents,' with AC ultimately prevailing for long-distance transmission. Edison's work didn't just provide light—it enabled countless other electrical innovations, transformed urban planning, changed work patterns, and began humanity's ever-increasing energy consumption. The electric age had begun."
      }
    ]
  },

  spaceRace: {
    name: "Space Exploration",
    icon: "🚀",
    description: "Humanity reaches for the stars",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
    stories: [
      {
        id: "sputnik",
        title: "Sputnik and the Space Race",
        year: "October 4, 1957",
        image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80",
        text: "On October 4, 1957, the Soviet Union launched Sputnik 1, the world's first artificial satellite, initiating the Space Race and shocking the Western world. The basketball-sized sphere with four external radio antennas transmitted radio pulses for 21 days as it orbited Earth every 96 minutes. Americans could see it crossing the night sky and hear its distinctive 'beep-beep' signal on their radios, a stark demonstration of Soviet technological achievement during the Cold War. This 'Sputnik Crisis' profoundly affected American confidence and education policy. President Eisenhower responded by creating NASA in 1958 and dramatically increasing science and mathematics education funding. Congress passed the National Defense Education Act, pouring money into schools and universities. The Space Race had begun in earnest, transforming from Cold War competition into one of humanity's greatest scientific and engineering achievements. Sputnik proved that space was accessible, sparked global imagination about humanity's future beyond Earth, and accelerated technological advancement in ways that continue to benefit society today, from satellite communications to GPS navigation."
      },
      {
        id: "moon_landing",
        title: "Apollo 11 Moon Landing",
        year: "July 20, 1969",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
        text: "On July 20, 1969, Neil Armstrong became the first human to walk on the Moon, fulfilling President Kennedy's 1961 promise to land a man on the Moon before the decade ended. After a four-day journey covering 240,000 miles, the Lunar Module Eagle separated from the Command Module Columbia and descended toward the Moon's surface. Computer alarms and dwindling fuel made the final moments tense, but Armstrong manually piloted to a safe landing in the Sea of Tranquility with just 25 seconds of fuel remaining. Six hours later, Armstrong descended the ladder, famously declaring: 'That's one small step for man, one giant leap for mankind.' He was joined by Buzz Aldrin 19 minutes later; together they spent about two and a half hours on the lunar surface, collecting 47.5 pounds of rock and soil samples, deploying scientific instruments, and planting an American flag. Michael Collins orbited above in Columbia. The mission captivated the world—an estimated 650 million people watched on television. Apollo 11 represented humanity's highest technological achievement, born from Cold War competition but transcending politics to inspire generations about human potential and our place in the cosmos."
      },
      {
        id: "iss",
        title: "International Space Station",
        year: "1998-Present",
        image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
        text: "The International Space Station represents unprecedented international cooperation, bringing together the United States, Russia, Japan, Canada, and the European Space Agency to build and maintain humanity's permanent presence in space. Construction began with the launch of the Russian Zarya module on November 20, 1998, followed by the American Unity node. Assembly required over 40 missions and more than a decade of work, with the station achieving full operational capacity around 2011. The ISS orbits Earth every 90 minutes at an altitude of about 250 miles, traveling at 17,500 miles per hour. It has been continuously inhabited since November 2, 2000, making it the longest continuous human presence in space. The station serves as a unique microgravity laboratory where crews conduct experiments in biology, physics, astronomy, and materials science impossible to perform on Earth. Research conducted there has advanced our understanding of human physiology in space, tested technologies for future Mars missions, and produced breakthroughs in drug development and materials science. Perhaps most significantly, the ISS demonstrates that former adversaries can work together peacefully toward common goals, offering hope for international cooperation on Earth's challenges."
      }
    ]
  },

  medicalBreakthroughs: {
    name: "Medical Breakthroughs",
    icon: "⚕️",
    description: "Advances that saved millions of lives",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    stories: [
      {
        id: "vaccines_jenner",
        title: "Jenner's Smallpox Vaccine",
        year: "1796",
        image: "https://images.unsplash.com/photo-1583912267550-d974556c3e8f?w=800&q=80",
        text: "On May 14, 1796, English physician Edward Jenner performed a daring experiment that would save countless millions of lives and establish the science of immunology. He had observed that milkmaids who contracted cowpox, a mild disease, seemed immune to smallpox, a deadly plague that killed 30% of its victims and scarred or blinded survivors. Jenner took material from a cowpox blister on milkmaid Sarah Nelmes's hand and inoculated eight-year-old James Phipps. The boy developed mild symptoms but recovered quickly. Six weeks later, Jenner exposed Phipps to smallpox, and the boy remained healthy, proving the protective effect. Despite initial skepticism and opposition from those who found the idea of using animal disease material repugnant, vaccination spread worldwide. By 1800, over 100,000 people had been vaccinated in England alone. Jenner's work led to the eventual global eradication of smallpox, declared by the World Health Organization in 1980—the first and only human disease completely eliminated. His principle of vaccination has since protected billions from diseases like polio, measles, and now COVID-19, making him arguably one of history's greatest life-savers."
      },
      {
        id: "anesthesia",
        title: "Discovery of Anesthesia",
        year: "1846",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
        text: "Before anesthesia, surgery was a nightmare of unimaginable agony. Patients were held or tied down while surgeons worked as quickly as possible, with speed valued over precision. Some operations took mere minutes to avoid prolonged suffering. On October 16, 1846, at Massachusetts General Hospital, dentist William T.G. Morton publicly demonstrated ether anesthesia during surgery, revolutionizing medicine forever. Morton administered ether to patient Gilbert Abbott, and surgeon John Collins Warren removed a tumor from Abbott's neck while the patient remained unconscious. Upon completion, Warren announced: 'Gentlemen, this is no humbug!' The news spread rapidly worldwide. Within months, ether was being used in London, Paris, and across Europe. Though credit for anesthesia's discovery is disputed—Crawford Long had used ether earlier but didn't publish, while Horace Wells had experimented with nitrous oxide—Morton's public demonstration proved its viability. Anesthesia transformed surgery from a last resort to a viable medical treatment, enabling complex procedures previously impossible. It also sparked development of new surgical techniques and specialties. The relief of human suffering this brought cannot be overstated—anesthesia ranks among medicine's greatest gifts to humanity."
      },
      {
        id: "insulin",
        title: "Discovery of Insulin",
        year: "1921-1922",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
        text: "Before 1921, a diagnosis of Type 1 diabetes was essentially a death sentence, particularly for children. Patients wasted away, following strict starvation diets that merely delayed the inevitable. In the summer of 1921, at the University of Toronto, orthopedic surgeon Frederick Banting and medical student Charles Best began experiments to isolate the pancreatic substance that regulated blood sugar. Working in a laboratory lent by Professor J.J.R. Macleod during summer vacation, they tied off dogs' pancreatic ducts and extracted a substance from the atrophied organs. On July 30, they successfully lowered a diabetic dog's blood sugar with their extract. Biochemist James Collip joined to purify the extract, which they named insulin. On January 11, 1922, they gave the first injection to 14-year-old Leonard Thompson, who was dying from diabetes. Though the initial injection caused an allergic reaction, a purified version worked dramatically—Thompson lived 13 more years. The transformation was miraculous: children near death recovered within days. Banting and Macleod won the 1923 Nobel Prize. They sold the patent to the University of Toronto for one dollar, believing insulin was too important to be monopolized. Today, insulin therapy allows millions of diabetics to live normal lives, though access and affordability remain critical issues."
      }
    ]
  },

  africaHistory: {
    name: "African Kingdoms",
    icon: "👑",
    description: "Great civilizations of Africa",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    stories: [
      {
        id: "mansa_musa",
        title: "Mansa Musa's Golden Pilgrimage",
        year: "1324-1325",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
        text: "In 1324, Mansa Musa, ruler of the Mali Empire, embarked on a pilgrimage to Mecca that would become legendary for its extravagant display of wealth. His caravan included 60,000 men, 12,000 enslaved people carrying gold bars, and 80 camels bearing 300 pounds of gold each. In Cairo, Musa's generosity was so lavish that he gave away so much gold it caused inflation that lasted a decade, devaluing the metal throughout Egypt and the Middle East. This remained the only time in history when one man's generosity destabilized an entire region's economy. Musa ruled the Mali Empire at its height, controlling West Africa's gold and salt trade—sources of immense wealth. His empire stretched over 2,000 miles, encompassing parts of modern-day Mali, Senegal, Gambia, Guinea, Niger, Nigeria, Chad, and Mauritania. Beyond displaying wealth, Musa was a devoted Muslim who built mosques and Islamic schools throughout his empire. He brought back scholars and architects from his pilgrimage, including the Andalusian architect Abu Ishaq al-Sahili, who designed distinctive mosques. Musa's reign and legendary journey put Mali on European and Arab maps, though his empire's sophistication and wealth often surprise those who learned little about African history. He remains arguably the richest person in history when adjusted for inflation."
      },
      {
        id: "great_zimbabwe",
        title: "Great Zimbabwe Kingdom",
        year: "1100-1450 AD",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        text: "Great Zimbabwe was the capital of the Kingdom of Zimbabwe during the Late Iron Age, and its ruins remain among Africa's most significant archaeological sites. The massive stone structures, built without mortar between the 11th and 15th centuries, demonstrate sophisticated engineering and architectural knowledge. The Great Enclosure's walls reach 36 feet high and 20 feet thick in places, constructed from over a million granite blocks fitted together precisely. At its peak, Great Zimbabwe housed an estimated 18,000 people, serving as political and trading capital of a vast kingdom. The civilization grew wealthy from gold trade with Swahili merchants on the East African coast, who traded with Arab merchants, connecting Great Zimbabwe to Indian Ocean trade networks reaching as far as China. Archaeologists have found Persian pottery, Arabian glass, and Chinese porcelain at the site. When European colonizers first encountered these ruins in the 19th century, they refused to believe Africans could have built such sophisticated structures, attributing them to Phoenicians or other groups—a racist denial that persisted into the 20th century. Today, Great Zimbabwe stands as proud testament to African architectural achievement and the continent's complex medieval civilizations. The modern nation of Zimbabwe takes its name from these ruins, meaning 'houses of stone' in Shona."
      },
      {
        id: "axum",
        title: "Kingdom of Axum",
        year: "100-940 AD",
        image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=800&q=80",
        text: "The Kingdom of Axum, located in modern-day Ethiopia and Eritrea, was one of the four great powers of the ancient world alongside Rome, Persia, and China. Between the 1st and 7th centuries AD, Axum controlled important trade routes linking the Roman Empire with India, trading ivory, gold, emerald, and frankincense. The kingdom minted its own gold, silver, and bronze coins featuring images of Axumite kings—the first sub-Saharan African nation to do so, demonstrating its economic sophistication and international connections. Axum's most striking monuments are its towering stone obelisks, or stelae, some reaching over 100 feet tall and weighing hundreds of tons. These precisely carved granite monuments, decorated with false doors and windows representing multi-story buildings, showcase remarkable engineering skills. The largest erected obelisk that still stands is 79 feet tall. In the 4th century, King Ezana converted to Christianity, making Axum one of the first Christian nations, predating most European conversions. The Ethiopian Orthodox Church traces its history to this period. Axum also claimed to house the Ark of the Covenant, brought from Jerusalem, a tradition maintained by Ethiopian Orthodox Christians today. Though Axum declined after Islamic expansion disrupted its trade routes, it left a profound legacy on Ethiopian culture, religion, and identity that continues to this day."
      }
    ]
  },

  asianHistory: {
    name: "Asian Empires",
    icon: "🏯",
    description: "Eastern powers and dynasties",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    stories: [
      {
        id: "great_wall",
        title: "The Great Wall of China",
        year: "7th Century BC - 1644 AD",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
        text: "The Great Wall of China represents one of humanity's most ambitious construction projects, built and rebuilt over more than 2,000 years by successive Chinese dynasties. While walls were constructed as early as the 7th century BC by various states, Emperor Qin Shi Huang unified and connected these walls around 221-206 BC to defend against northern invasions. The wall we see today mostly dates from the Ming Dynasty (1368-1644), which rebuilt and extended it with brick and stone. At its greatest extent, the wall system stretched over 13,000 miles, winding through mountains, deserts, and plains. Construction required enormous human cost—hundreds of thousands of workers, many of whom died during the decades of labor. Contrary to popular myth, it's not visible from space with the naked eye, and it didn't always successfully prevent invasions—the Mongols and Manchus both conquered China despite it. However, the wall effectively controlled trade along the Silk Road and immigration. It facilitated communication through beacon towers that could transmit messages across vast distances using smoke and fire signals. Today, the Great Wall stands as an enduring symbol of Chinese civilization's persistence, engineering prowess, and the lengths to which societies go to define and defend their boundaries."
      },
      {
        id: "samurai",
        title: "The Samurai Warriors",
        year: "794-1868 AD",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
          text: "The samurai were members of Japan's military nobility who dominated Japanese society from the 12th to the 19th century, following a strict code of honor called Bushido—'the way of the warrior.' Emerging during the Heian period (794-1185) as provincial warriors, samurai rose to political dominance when Minamoto Yoritomo established the first shogunate in 1192, beginning 676 years of military government. Samurai were not merely warriors but also administrators, artists, and scholars who valued honor above life itself. They practiced seppuku (ritual suicide) rather than face dishonor or capture. Their distinctive armor, featuring iron plates laced together with silk cords, protected while allowing mobility. The katana sword became their symbol, forged through complex metallurgical processes passed down through generations. Samurai followed Zen Buddhism, which emphasized discipline, meditation, and acceptance of death—philosophies that reinforced Bushido principles. They practiced arts like calligraphy, tea ceremony, and poetry alongside martial training, embodying the ideal of the cultured warrior. The Meiji Restoration of 1868 abolished the samurai class, modernizing Japan's military along Western lines. However, samurai values profoundly influenced modern Japanese culture, business practices, and martial arts traditions worldwide. Their legacy of discipline, honor, and loyalty continues to fascinate global popular culture."
      },
      {
        id: "silk_road",
        title: "The Silk Road Trade Routes",
        year: "130 BC - 1453 AD",
        image: "https://images.unsplash.com/photo-1549488497-2ef5e8c91c1e?w=800&q=80",
        text: "The Silk Road was not a single road but a vast network of trade routes connecting China with the Mediterranean, Central Asia, India, and the Middle East for over 1,500 years. Named for the lucrative silk trade from China—where silk production was a jealously guarded secret—these routes carried far more than goods. They facilitated exchange of technologies, religions, philosophies, diseases, and genetic material that shaped Eurasian history. Chinese innovations like paper, gunpowder, and printing spread westward, while Buddhism traveled from India to China, and later Islam spread eastward. Marco Polo's famous 13th-century journey to China followed Silk Road routes, introducing Europeans to Asian wonders and spurring later Age of Exploration. Cities like Samarkand, Bukhara, and Kashgar flourished as cosmopolitan trading hubs where Persian, Arab, Turkish, Chinese, and Indian merchants mingled, exchanged ideas, and intermarried. The routes also spread diseases—the Black Death likely traveled along Silk Road trade networks from Asia to Europe in the 14th century. The Mongol Empire's 13th-century unification of much of Eurasia created the 'Pax Mongolica,' making travel safer and trade flourish. However, the Ottoman Empire's control of western routes and development of maritime trade to Asia gradually reduced the Silk Road's importance. Today, China's Belt and Road Initiative explicitly references this historical network, seeking to recreate Eurasian connectivity for the modern era."
      },
      {
        id: "taj_mahal",
        title: "Building the Taj Mahal",
        year: "1632-1653",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
        text: "The Taj Mahal, widely considered the world's most beautiful building, was commissioned by Mughal Emperor Shah Jahan as a tomb for his beloved wife, Mumtaz Mahal, who died during childbirth in 1631. Grief-stricken, the emperor devoted immense resources to creating a monument worthy of his queen. Construction required 22 years and employed 20,000 workers—architects, calligraphers, stonecutters, and artisans from across India, Persia, Ottoman Turkey, and Europe. The white Makrana marble structure features intricate inlay work using 28 types of precious and semi-precious stones including jade, crystal, lapis lazuli, amethyst, and turquoise, transported from distant lands via caravans of 1,000 elephants. The complex includes four minarets, symmetrical gardens representing paradise, and a mosque flanking the main tomb. The central dome rises 240 feet high, while the interior features elaborate floral designs and Quranic calligraphy. Every architectural element demonstrates mathematical precision and symbolic meaning. According to legend, Shah Jahan planned a black marble mausoleum for himself across the river, connected by a bridge, but his son Aurangzeb imprisoned him before this could begin. Shah Jahan spent his final years under house arrest, reportedly gazing at the Taj Mahal from his window. Today, the Taj Mahal attracts millions of visitors annually, recognized as a UNESCO World Heritage Site and symbol of eternal love that transcends cultures and centuries."
      }
    ]
  },

  feminism: {
    name: "Women's Rights Movement",
    icon: "♀️",
    description: "The fight for gender equality",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
    stories: [
      {
        id: "suffragettes",
        title: "Women's Suffrage Movement",
        year: "1848-1920",
        image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&q=80",
        text: "The women's suffrage movement in the United States began formally at the Seneca Falls Convention in 1848, where Elizabeth Cady Stanton and Lucretia Mott organized the first women's rights convention. The Declaration of Sentiments they drafted, modeled on the Declaration of Independence, proclaimed that 'all men and women are created equal' and demanded voting rights. The movement faced fierce opposition from those who believed women's place was solely domestic. Suffragists employed various tactics—Susan B. Anthony illegally voted in 1872 and was arrested and fined, though she refused to pay. British suffragettes, led by Emmeline Pankhurst, became more militant, engaging in hunger strikes and property destruction, inspiring American activists. During World War I, women's contributions to the war effort strengthened suffrage arguments—they managed farms, worked in factories, and served as nurses, demonstrating capabilities beyond domestic spheres. States gradually granted women voting rights, beginning with Wyoming in 1869. Finally, on August 18, 1920, the 19th Amendment was ratified, prohibiting voting discrimination based on sex. However, this victory primarily benefited white women—many women of color were effectively disenfranchised through Jim Crow laws, poll taxes, and literacy tests until the Voting Rights Act of 1965. The suffrage movement laid groundwork for subsequent feminist waves that addressed broader gender inequalities."
      },
      {
        id: "roe_wade",
        title: "Roe v. Wade Decision",
        year: "January 22, 1973",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
        text: "On January 22, 1973, the U.S. Supreme Court issued its landmark Roe v. Wade decision, ruling 7-2 that the Constitution protects a woman's right to choose abortion. The case began when Norma McCorvey, using the pseudonym 'Jane Roe,' sued Texas District Attorney Henry Wade, challenging Texas laws prohibiting abortion except to save the mother's life. Justice Harry Blackmun, writing for the majority, grounded the decision in the right to privacy, arguing that government interference with abortion violated Due Process Clause protections. The ruling established a trimester framework: during the first trimester, abortion decisions belonged to women and their doctors; states could regulate second-trimester abortions to protect maternal health; third-trimester abortions could be prohibited except when necessary for the mother's life or health. The decision immediately became one of America's most contentious, galvanizing both pro-choice and pro-life movements. It influenced elections, judicial nominations, and spawned decades of legal battles over restrictions. Subsequent cases like Planned Parenthood v. Casey modified but upheld Roe's core holding. In June 2022, the Supreme Court overturned Roe in Dobbs v. Jackson, returning abortion regulation to individual states—a reversal that sparked nationwide protests and political upheaval. Regardless of one's position, Roe v. Wade profoundly shaped American politics, law, and society for nearly 50 years."
      },
      {
        id: "malala",
        title: "Malala Yousafzai's Stand",
        year: "October 9, 2012",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
        text: "On October 9, 2012, 15-year-old Malala Yousafzai was shot in the head by a Taliban gunman while riding a school bus in Pakistan's Swat Valley. Her 'crime' was advocating for girls' education in an area where the Taliban had banned female schooling. Malala had been documenting life under Taliban rule through a BBC blog since age 11, writing under a pseudonym about the importance of education and her fears as schools were destroyed. The assassination attempt shocked the world. Malala was airlifted to Birmingham, England, where surgeons saved her life through multiple operations. Rather than silencing her, the attack amplified her voice globally. She addressed the United Nations on her 16th birthday, declaring: 'One child, one teacher, one book, one pen can change the world.' In 2014, at age 17, Malala became the youngest person ever to win the Nobel Peace Prize, sharing it with Indian child rights activist Kailash Satyarthi. She established the Malala Fund, advocating for 12 years of free, safe, quality education for every girl worldwide. Her courage inspired millions and drew attention to the 130 million girls globally denied education. Malala's story demonstrates how individual courage can catalyze global movements, though she emphasizes she represents millions of girls fighting for education. She continues her activism while pursuing her own education, embodying the transformative power she champions."
      }
    ]
  },

  coldWar: {
    name: "Cold War Era",
    icon: "❄️",
    description: "Global tensions and proxy conflicts",
    image: "https://images.unsplash.com/photo-1451481454041-104482d8e284?w=800&q=80",
    stories: [
      {
        id: "berlin_wall",
        title: "Fall of the Berlin Wall",
        year: "November 9, 1989",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
        text: "On November 9, 1989, the Berlin Wall—symbol of the Cold War's division of Europe—unexpectedly opened after 28 years of separating East and West Berlin. The wall, erected in 1961 by East Germany to stop emigration to the West, stretched 96 miles through Berlin, dividing families and neighborhoods. At least 140 people died attempting to cross it, shot by border guards or killed by landmines. The evening of November 9, East German government spokesman Günter Schabowski announced new travel regulations at a press conference, mistakenly saying they were effective 'immediately.' Thousands of East Berliners rushed to checkpoints, overwhelming confused guards who eventually opened gates rather than risk violence. Scenes of jubilant crowds dancing on the wall, chipping away pieces with hammers and pickaxes, broadcast worldwide, symbolizing communism's collapse in Eastern Europe. The wall's fall was not a singular event but culmination of years of economic pressure, political reform under Soviet leader Mikhail Gorbachev's glasnost and perestroika policies, and peaceful protests by East Germans demanding freedom. Germany officially reunified on October 3, 1990. The Berlin Wall's opening marked the beginning of the Cold War's end—within two years, the Soviet Union itself dissolved. Today, fragments of the wall stand as memorials, reminding us of division's costs and freedom's value, while the empty strip where it stood testifies to barriers overcome."
      },
      {
        id: "cuban_missile",
        title: "Cuban Missile Crisis",
        year: "October 1962",
        image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=800&q=80",
        text: "For 13 days in October 1962, the world stood on the brink of nuclear war during the Cuban Missile Crisis—the Cold War's most dangerous moment. On October 14, American U-2 spy planes photographed Soviet nuclear missile installations under construction in Cuba, just 90 miles from Florida. President Kennedy faced a crisis: Soviet Premier Nikita Khrushchev was placing medium and intermediate-range ballistic missiles capable of striking most American cities. Kennedy convened the Executive Committee of the National Security Council, debating responses ranging from invasion to negotiation. On October 22, Kennedy announced a naval 'quarantine' (avoiding the word 'blockade,' which legally constituted an act of war) preventing further Soviet weapons shipments to Cuba. The world held its breath as Soviet ships approached the quarantine line. On October 24, Soviet ships carrying missiles turned back, prompting Secretary of State Dean Rusk to say, 'We're eyeball to eyeball, and I think the other fellow just blinked.' Negotiations continued secretly—Kennedy agreed to remove American missiles from Turkey (though this wasn't publicly disclosed for years) and promised not to invade Cuba. Khrushchev agreed to remove Soviet missiles from Cuba. The crisis led to establishment of a direct Washington-Moscow hotline and began détente—reduced tensions between superpowers. Both leaders recognized that nuclear war's catastrophic consequences required better crisis communication and nuclear arms control, leading to the 1963 Nuclear Test Ban Treaty."
      },
      {
        id: "vietnam_war",
        title: "Vietnam War",
        year: "1955-1975",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
        text: "The Vietnam War represented the longest and most divisive military conflict in American history, fundamentally shaping American society and foreign policy. The conflict began as France's colonial war but escalated after France's defeat at Dien Bien Phu in 1954. Vietnam was divided at the 17th parallel: communist North Vietnam under Ho Chi Minh and U.S.-supported South Vietnam. American involvement gradually increased—military advisors in the 1950s became combat troops following the Gulf of Tonkin incident in 1964. At its peak, over 500,000 American troops fought in Vietnam. The conflict defied conventional warfare—North Vietnamese and Viet Cong guerrillas fought from jungles and tunnels, negating American technological superiority. Heavy U.S. bombing campaigns and controversial tactics like Agent Orange defoliant use caused massive civilian casualties and environmental destruction. Television brought war's horrors into American living rooms, fueling anti-war movements. The Tet Offensive in 1968, though militarily unsuccessful for North Vietnam, shattered American confidence in victory. President Nixon's 'Vietnamization' gradually withdrew American troops while intensifying bombing. The Paris Peace Accords officially ended American involvement in 1973, but fighting continued until Saigon's fall on April 30, 1975. Over 58,000 Americans died, along with millions of Vietnamese. The war's legacy—distrust of government, veterans' struggles, refugee crises—continues affecting both nations. It demonstrated limits of military power and profoundly influenced subsequent American military interventions."
      }
    ]
  }
};

// Initialize History Practice
function initHistoryPractice() {
  const historyListGrid = document.getElementById('history-list-grid');
  if (!historyListGrid) return;
  
  // Render category cards
  let html = '';
  Object.keys(HISTORY_DATA).forEach(categoryKey => {
    const category = HISTORY_DATA[categoryKey];
    html += `
      <div class="history-category-card" onclick="selectHistoryCategory('${categoryKey}')">
        <div class="history-category-image" style="background-image: url('${category.image}')"></div>
        <div class="history-category-content">
          <div class="history-category-icon">${category.icon}</div>
          <h3 class="history-category-title">${category.name}</h3>
          <p class="history-category-description">${category.description}</p>
          <div class="history-category-count">${category.stories.length} stories</div>
        </div>
      </div>
    `;
  });
  
  historyListGrid.innerHTML = html;
}

// Select a history category
window.selectHistoryCategory = function(categoryKey) {
  const category = HISTORY_DATA[categoryKey];
  const storiesGrid = document.getElementById('history-stories-grid');
  const listGrid = document.getElementById('history-list-grid');
  const backBtn = document.getElementById('back-to-categories');
  const pageTitle = document.querySelector('.history-header h2');
  
  // Hide categories, show stories
  listGrid.style.display = 'none';
  storiesGrid.style.display = 'grid';
  backBtn.style.display = 'inline-flex';
  pageTitle.textContent = category.name;
  
  // Render stories
  let html = '';
  category.stories.forEach(story => {
    html += `
      <div class="history-story-card" onclick="startHistoryPractice('${categoryKey}', '${story.id}')">
        <div class="history-story-image" style="background-image: url('${story.image}')"></div>
        <div class="history-story-content">
          <h4 class="history-story-title">${story.title}</h4>
          <div class="history-story-year">${story.year}</div>
          <p class="history-story-preview">${story.text.substring(0, 120)}...</p>
          <button class="btn btn-small" onclick="event.stopPropagation(); startHistoryPractice('${categoryKey}', '${story.id}')">
            Start Typing
          </button>
        </div>
      </div>
    `;
  });
  
  storiesGrid.innerHTML = html;
};

// Back to categories
window.backToHistoryCategories = function() {
  const storiesGrid = document.getElementById('history-stories-grid');
  const listGrid = document.getElementById('history-list-grid');
  const backBtn = document.getElementById('back-to-categories');
  const pageTitle = document.querySelector('.history-header h2');
  
  storiesGrid.style.display = 'none';
  listGrid.style.display = 'grid';
  backBtn.style.display = 'none';
  pageTitle.textContent = '📜 History Practice';
};

// Start history practice
window.startHistoryPractice = function(categoryKey, storyId) {
  const category = HISTORY_DATA[categoryKey];
  const story = category.stories.find(s => s.id === storyId);
  
  if (!story) return;
  
  // Hide stories grid, show practice card
  document.getElementById('history-stories-grid').style.display = 'none';
  document.getElementById('history-practice-card').style.display = 'block';
  
  // Set story info
  document.getElementById('history-story-title').textContent = story.title;
  document.getElementById('history-story-year').textContent = story.year;
  document.getElementById('history-story-image').style.backgroundImage = `url('${story.image}')`;
  
  // Set story text
  const storyText = document.getElementById('history-story-text');
  storyText.textContent = story.text;
  
  // Reset and setup typing
  window.currentHistoryStory = {
    categoryKey,
    storyId,
    text: story.text,
    typed: '',
    startTime: null,
    timerInterval: null
  };
  
  const input = document.getElementById('history-input');
  input.value = '';
  input.disabled = false;
  input.focus();
  
  // Reset stats
  document.getElementById('history-wpm').textContent = '0';
  document.getElementById('history-accuracy').textContent = '100%';
  document.getElementById('history-progress').textContent = '0%';
  
  // Setup timer
  const timerSelect = document.getElementById('history-timer-select');
  const duration = parseInt(timerSelect.value);
  if (duration > 0) {
    document.getElementById('history-countdown').textContent = duration + 's';
  } else {
    document.getElementById('history-countdown').textContent = '∞';
  }
  
  // Render initial text
  renderHistoryText();
};

// Back to stories
window.backToHistoryStories = function() {
  // Stop any active timer
  if (window.currentHistoryStory && window.currentHistoryStory.timerInterval) {
    clearInterval(window.currentHistoryStory.timerInterval);
  }
  
  document.getElementById('history-practice-card').style.display = 'none';
  document.getElementById('history-stories-grid').style.display = 'grid';
  
  window.currentHistoryStory = null;
};

// Render history text with progress
function renderHistoryText() {
  if (!window.currentHistoryStory) return;
  
  const { text, typed } = window.currentHistoryStory;
  const storyText = document.getElementById('history-story-text');
  const input = document.getElementById('history-input');
  const currentTyped = typed + input.value;
  
  let html = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const typedChar = currentTyped[i];
    
    if (i === currentTyped.length) {
      html += `<span class="char current">${char === ' ' ? '&nbsp;' : char}</span>`;
    } else if (typedChar !== undefined) {
      if (typedChar === char) {
        html += `<span class="char correct">${char === ' ' ? '&nbsp;' : char}</span>`;
      } else {
        html += `<span class="char incorrect">${char === ' ' ? '&nbsp;' : char}</span>`;
      }
    } else {
      html += `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`;
    }
  }
  
  storyText.innerHTML = html;
  
  // Calculate progress
  const progress = Math.round((currentTyped.length / text.length) * 100);
  document.getElementById('history-progress').textContent = progress + '%';
}

// History input handler
document.addEventListener('DOMContentLoaded', () => {
  const historyInput = document.getElementById('history-input');
  
  if (historyInput) {
    historyInput.addEventListener('input', (e) => {
      if (!window.currentHistoryStory) return;
      
      // Start timer on first keystroke
      if (!window.currentHistoryStory.startTime) {
        startHistoryTimer();
      }
      
      const { text, typed } = window.currentHistoryStory;
      const currentTyped = typed + historyInput.value;
      
      // Check if word is complete (space pressed)
      if (historyInput.value.endsWith(' ')) {
        window.currentHistoryStory.typed += historyInput.value;
        historyInput.value = '';
      }
      
      // Prevent typing beyond text length
      if (currentTyped.length > text.length) {
        historyInput.value = historyInput.value.slice(0, text.length - typed.length);
        return;
      }
      
      renderHistoryText();
      updateHistoryStats();
      
      // Check if complete
      if (currentTyped.length >= text.length) {
        finishHistoryPractice();
      }
    });
    
    historyInput.addEventListener('paste', e => e.preventDefault());
  }
  
  // Timer select handler
  const timerSelect = document.getElementById('history-timer-select');
  if (timerSelect) {
    timerSelect.addEventListener('change', () => {
      if (window.currentHistoryStory && !window.currentHistoryStory.startTime) {
        const duration = parseInt(timerSelect.value);
        if (duration > 0) {
          document.getElementById('history-countdown').textContent = duration + 's';
        } else {
          document.getElementById('history-countdown').textContent = '∞';
        }
      }
    });
  }
});

// Start history timer
function startHistoryTimer() {
  const timerSelect = document.getElementById('history-timer-select');
  const duration = parseInt(timerSelect.value);
  
  window.currentHistoryStory.startTime = Date.now();
  
  if (duration > 0) {
    let timeLeft = duration;
    
    window.currentHistoryStory.timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById('history-countdown').textContent = timeLeft + 's';
      
      if (timeLeft <= 0) {
        finishHistoryPractice();
      }
    }, 1000);
  }
}

// Update history stats
function updateHistoryStats() {
  if (!window.currentHistoryStory || !window.currentHistoryStory.startTime) return;
  
  const { text, typed } = window.currentHistoryStory;
  const input = document.getElementById('history-input');
  const currentTyped = typed + input.value;
  
  const elapsed = (Date.now() - window.currentHistoryStory.startTime) / 1000;
  
  // Calculate WPM
  const minutes = elapsed / 60;
  const wpm = minutes > 0 ? Math.round((currentTyped.length / 5) / minutes) : 0;
  
  // Calculate accuracy
  let correct = 0;
  for (let i = 0; i < currentTyped.length; i++) {
    if (currentTyped[i] === text[i]) correct++;
  }
  const accuracy = currentTyped.length > 0 ? Math.round((correct / currentTyped.length) * 100) : 100;
  
  document.getElementById('history-wpm').textContent = wpm;
  document.getElementById('history-accuracy').textContent = accuracy + '%';
}

// Finish history practice
function finishHistoryPractice() {
  if (!window.currentHistoryStory) return;
  
  // Stop timer
  if (window.currentHistoryStory.timerInterval) {
    clearInterval(window.currentHistoryStory.timerInterval);
  }
  
  // Disable input
  const input = document.getElementById('history-input');
  input.disabled = true;
  
  // Calculate final stats
  updateHistoryStats();
  
  const wpm = parseInt(document.getElementById('history-wpm').textContent);
  const accuracy = parseInt(document.getElementById('history-accuracy').textContent);
  const progress = document.getElementById('history-progress').textContent;
  
  // Calculate time taken
  const elapsed = window.currentHistoryStory.startTime 
    ? Math.round((Date.now() - window.currentHistoryStory.startTime) / 1000)
    : 0;
  
  // Store completion data
  window.lastHistoryCompletion = {
    wpm: wpm,
    accuracy: accuracy,
    progress: progress,
    timeTaken: elapsed,
    storyTitle: document.getElementById('history-story-title').textContent,
    storyYear: document.getElementById('history-story-year').textContent,
    isTimeUp: progress !== '100%' // True if time ran out before completion
  };
  
  // Show completion modal instead of alert
  showHistoryCompletionModal();
}

// Show completion modal
function showHistoryCompletionModal() {
  const modal = document.getElementById('history-completion-modal');
  if (!modal || !window.lastHistoryCompletion) return;
  
  const data = window.lastHistoryCompletion;
  
  // Set title based on completion status
  const titleEl = document.getElementById('completion-modal-title');
  if (data.isTimeUp) {
    titleEl.textContent = '⏰ Time\'s Up!';
  } else {
    titleEl.textContent = '🎉 Story Completed!';
  }
  
  // Set stats
  document.getElementById('completion-wpm').textContent = data.wpm;
  document.getElementById('completion-accuracy').textContent = data.accuracy + '%';
  document.getElementById('completion-story-title').textContent = data.storyTitle;
  document.getElementById('completion-story-year').textContent = data.storyYear;
  document.getElementById('completion-time').textContent = data.timeTaken + 's';
  document.getElementById('completion-progress-text').textContent = data.progress;
  
  // Set message based on performance
  const messageEl = document.getElementById('completion-message');
  if (data.wpm >= 60 && data.accuracy >= 95) {
    messageEl.textContent = '🌟 Outstanding! You\'re a history typing master!';
  } else if (data.wpm >= 40 && data.accuracy >= 90) {
    messageEl.textContent = '👏 Great work learning history through typing!';
  } else if (data.wpm >= 25 && data.accuracy >= 85) {
    messageEl.textContent = '✨ Good job! Keep practicing to improve!';
  } else {
    messageEl.textContent = '💪 Nice effort! Practice makes perfect!';
  }
  
  if (data.isTimeUp) {
    messageEl.textContent = '⏰ Time ran out! You completed ' + data.progress + ' of the story.';
  }
  
  // Show modal
  modal.classList.remove('hidden');
}

// Close completion modal
window.closeHistoryCompletionModal = function() {
  const modal = document.getElementById('history-completion-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
};

// Retry from modal
window.retryHistoryFromModal = function() {
  closeHistoryCompletionModal();
  retryHistoryPractice();
};

// Back to stories from modal
window.backToHistoryStoriesFromModal = function() {
  closeHistoryCompletionModal();
  backToHistoryStories();
};

// Retry current story
window.retryHistoryPractice = function() {
  if (!window.currentHistoryStory) return;
  
  const { categoryKey, storyId } = window.currentHistoryStory;
  
  // Restart the same story
  startHistoryPractice(categoryKey, storyId);
};

// Load history page
window.loadHistoryPage = function() {
  initHistoryPractice();
};
