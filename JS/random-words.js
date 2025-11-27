 const WORDS = {
   Beginner: [
  // Common articles, pronouns, and conjunctions
  'the','and','for','are','but','not','you','all','can','her','was','one','our','out','day','get','has','him','his','how','man','new','now','old','see','time','two','way','who','boy','did','its','let','put','say','she','too',
  'use','any','may','had','her','him','his','get','has','had','made','find','long','down','day','been','call','come','made','part','over',
  
  // Basic nouns - Nature
  'sun','moon','star','sky','rain','snow','wind','tree','leaf','bird','fish','frog','bear','deer','duck','goat','lion','wolf','rose','lily','rock','hill','lake','pond','cave','sand','dirt','seed','root','stem','twig','bark',
  
  // Basic nouns - Home & Family
  'home','door','room','wall','roof','bed','desk','chair','table','lamp','book','pen','cup','dish','bowl','fork','knife','spoon','plate','glass','mom','dad','son','girl','baby','aunt','uncle','wife','papa','mama','child','kids',
  
  // Basic nouns - Body parts
  'head','face','eye','ear','nose','mouth','chin','neck','hand','arm','leg','foot','toe','knee','back','skin','hair','bone','heart','mind','body','thumb','wrist','elbow','chest','waist',
  
  // Basic nouns - Food
  'food','meat','fish','rice','corn','bean','pear','plum','grape','fruit','bread','cake','milk','juice','tea','egg','soup','salad','cheese','butter','sugar','salt','apple','orange','lemon','banana','cherry','melon','carrot','potato',
  
  // Basic nouns - Animals
  'dog','cat','pig','cow','hen','ant','bee','fly','bug','pet','paw','tail','wing','claw','hoof','fur','egg','nest','den','farm','barn','zoo','wild','tame',
  
  // Basic nouns - Places & Things
  'city','town','road','path','park','shop','store','bank','post','mail','box','bag','toy','gift','ball','game','team','flag','bell','ring','coin','king','queen','ship','boat','cart','bike','bus','taxi','plane','train',
  
  // Basic nouns - School & Learning
  'class','test','page','word','name','note','rule','fact','idea','plan','math','art','gym','lunch','bell','hall','yard','board','chalk','paper','pencil','eraser','ruler','glue','paint','brush','student','teacher','principal',
  
  // Basic nouns - Time & Weather
  'year','week','hour','dawn','dusk','spring','summer','fall','winter','season','storm','cloud','fog','mist','heat','cold','warm','cool','sunny','rainy','windy','snowy','clear','dark','bright','shadow','light','thunder','lightning',
  
  // Common verbs - Movement
  'walk','run','jump','hop','skip','crawl','climb','swim','fly','roll','spin','turn','push','pull','lift','drop','throw','catch','kick','hit','slide','dance','march','race','rush','hurry','speed','move','step','pace',
  
  // Common verbs - Actions
  'play','work','rest','sleep','wake','eat','drink','cook','bake','wash','clean','sweep','wipe','dust','fold','hang','cut','tear','fix','break','build','make','create','draw','paint','write','read','spell','count','add',
  
  // Common verbs - Communication
  'say','tell','talk','speak','ask','answer','call','shout','yell','whisper','sing','hum','laugh','cry','smile','frown','nod','wave','point','show','teach','learn','study','practice','try','help','share','give','take',
  
  // Common verbs - Senses & Feelings
  'see','look','watch','hear','listen','smell','taste','touch','feel','think','know','remember','forget','hope','wish','want','need','like','love','hate','enjoy','prefer','care','worry','fear','trust','believe','understand',
  
  // Common verbs - Daily activities
  'open','close','start','stop','begin','end','finish','continue','pause','wait','stay','leave','go','come','arrive','reach','enter','exit','pass','cross','follow','lead','guide','join','meet','greet','welcome','invite',
  
  // Common adjectives - Size & Shape
  'big','small','large','tiny','huge','little','long','short','tall','high','low','deep','wide','narrow','thick','thin','fat','round','square','flat','sharp','dull','straight','curved','smooth','rough','bumpy',
  
  // Common adjectives - Colors
  'red','blue','green','yellow','orange','purple','pink','brown','black','white','gray','silver','gold','dark','light','bright','pale','vivid','clear','cloudy',
  
  // Common adjectives - Quality
  'good','bad','best','worst','better','nice','fine','great','poor','rich','cheap','clean','dirty','neat','messy','tidy','ugly','pretty','beautiful','plain','simple','fancy','easy','hard','soft','tough','weak','strong','heavy','light',
  
  // Common adjectives - Feelings
  'happy','sad','glad','mad','angry','upset','calm','peace','joy','proud','shy','brave','scared','safe','sorry','lucky','funny','silly','serious','kind','mean','nice','rude','polite','gentle','rough','sweet','bitter','sour',
  
  // Common adjectives - Quantity
  'many','few','some','any','all','most','more','less','full','empty','whole','half','double','single','every','each','both','neither','several','plenty',
  
  // Common adjectives - Speed & Time
  'fast','slow','quick','rapid','swift','sudden','instant','early','late','prompt','ready','busy','free','new','old','young','fresh','stale','modern','ancient','recent','current','past','future','present',
  
  // Common adverbs
  'very','quite','rather','too','so','just','only','even','still','yet','already','soon','never','always','often','sometimes','rarely','once','twice','again','back','away','here','there','near','far','up','down','in','out',
  
  // Prepositions
  'at','by','for','from','in','into','of','off','on','onto','over','to','under','with','without','above','below','behind','beside','between','among','through','across','along','around','during','before','after','until','since',
  
  // Question words
  'who','what','when','where','why','how','which','whose','whom',
  
  // Common connectors
  'if','or','so','than','that','then','thus','when','also','else','next','once','both','either','neither','though','unless','while','whether',
  
  // Numbers
  'zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','twenty','thirty','hundred','thousand','first','second','third','fourth','fifth',
  
  // Days and months (shortened)
  'monday','tuesday','wednesday','thursday','friday','saturday','sunday','january','february','march','april','june','july','august','september','october','november','december',
  
  // Common expressions
  'yes','no','okay','hello','goodbye','please','thanks','sorry','welcome','excuse','pardon','sure','maybe','perhaps','certainly','indeed','really','truly','quite','rather','fairly'
],
  Intermediate: [
  'because','between','always','almost','around','before','after','again','another','answer','beautiful','believe','better','beyond','brother','brought','building','careful','center','chance','change','choose','circle','clothes','country','course','cousin','create','decide','develop','different','direction','discover','doctor','during','eight','enough','especially','example','family','favorite','feeling','finish','follow','forgot','forward','happen','hundred','important','instead','interesting','journey','language','machine','moment','money','morning','mountain','neighbor','nothing','number','office','outside','parent','people','perhaps','person','picture','please','police',
  'problem','question','quickly','reason','remember','return','school','season','second','sentence','several','should','sister','something','sometimes','special','station','story','strange','student','study','subject','sudden','summer','teacher','through','together','tonight','tomorrow','understand','village','weather','weekend','window','without','wonder','world','writing','yellow','accident','advice','ancient','anybody','arrive','artist','attempt','battle','beautifully','belong','border','breathe','bridge','butterfly','captain','carefully','celebrate','certain','climate','collect','command','company','complete','consider','contain','control','correct','courage','damage',
  'december','delicious','describe','destroy','developed','diamond','difference','discuss','education','electric','emergency','energy','enjoy','enough','escape','experience','explain','famous','feather','festival','future','garden','general','government','grocery','history','holiday','hospital','imagine','include','information','island','knowledge','language','library','message','mountain','natural','necessary','neither','occasion','opinion','package','pattern','peaceful','performance','perfect','perhaps','physical','planet','pleasure','polite','popular','position','positive','possible','powerful','prepare','present','prevent','private','produce','promise','protect','provide','purpose','quality','quietly','quickness','rainbow','realize','receive','recognize','recommend','record','refresh','region','regular','relation','relax','release','remember','replace','report','require','respect','respond','result','return','reward','safety','satisfy','science','seasonal','secret','secure','sensible','sentence','separate','serious','service','shadow','shelter','shining','shoulder','silence','similar','simple','single','situation','society','solution','someone','something','sometimes','somewhere','southern','specialist','speech','spirit','station','strength','stretch','student','subject','success','suggest','summer','support','surface','surprise','surround','system','teacher','technical','temperature','together','tomorrow','tonight','traffic','training','translate','transport','trouble','trust','understand','uniform','universe','unknown','unusual','useful','usually','valuable','variety','vehicle','village','visitor','victory','weather','welcome','western','whisper','wonderful','wooden','working','writing','yourself','yesterday','adventure','behavior','birthday','bicycle','breathe','building','capture','careless','carrier','century','channel','chapter','comfort','compare','concert','connect','contain','courage','curious','custom','damage','decide','deliver','demand','depend','describe','detail','difference','disappear','discover','disease','education','election','emotion','employer','encourage','engineer','enjoyment','enough','entrance','environment','escape','especially','evidence','example','exercise','explain','factory','famous','fashion','feature','festival',
  'finally','foreign','freedom','friendly','function','future','gallery','general','governor','handsome','healthy','holiday','honest','imagine','improve','increase','independent','individual','industry','influence','information','instrument','interest','journey','language','laughter','library','machine','manage','manner','material','measure','medicine','memory','mention','message','method','mirror','moment','movement','musical','natural','necessary',  'neighbor','normal','notice','object','officer','opinion','opposite','ordinary','original','package','paragraph','partner','passenger','pattern','peaceful','perfect','personal','picture','pleasure','pollution','popular','position',
  'possible','powerful','practice','prepare','present','pressure','previous','probably','process','produce','product','progress','project','promise','protect','provide','purpose'
],


      
  
   Advanced: [
  'abandon','absolute','abstract','academy','achievement','acoustic','adaptation','advantage','affection','agreement','ambition','analysis','ancestor','anonymous','appliance','approach','architect','arrangement','assistant',
  'atmosphere','attention','audience','authority','background','behavior','biography','brilliant','capacity','category','celebration','challenge','character','chemical','circumstance','civilization','colleague','combination',
  'communication','community','competition','complicated','conclusion','condition','conference','confidence','connection','consequence','consideration','construction','contribution','convenient','cooperation','correction',
  'creativity','curiosity','decision','definition','democracy','department','description','determination','development','difference','difficulty','direction','discovery','distinction','education','efficiency','electricity',
  'employment','encouragement','environment','establishment','evaluation','experience','experiment','expression','foundation','generation','government','identification','imagination','importance','improvement','independent',
  'information','initiative','innovation','inspiration','intelligence','interaction','introduction','investigation','knowledge','leadership','literature','management','mathematics','measurement','motivation','movement','necessity',
  'observation','opportunity','organization','participation','performance','personality','philosophy','population','possibility','preparation','presentation','president','principle','probability','production','professional',
  'protection','publication','qualification','reaction','realization','recommendation','relationship','requirement','reservation','resolution','revolution','satisfaction','situation','stability','statement','structure',
  'technology','temperature','tradition','transportation','university','understanding','volunteer','wonderful','achievement','acknowledge','announcement','architecture','championship','collaboration','combination','comparison',
  'concentration','conversation','coordination','corporation','description','determination','development','discrimination','distribution','documentation','education','entertainment','evaluation','examination','experience',
  'improvement','information','introduction','maintenance','management','measurement','motivation','organization','participation','performance','personality','philosophy','population','preparation','presentation','production',
  'accomplishment','administration','advertisement','agriculture','anniversary','application','appointment','appreciation','arrangement','association','atmosphere','availability','biological','calculation','certificate',
  'circumstance','combination','communication','comparison','competition','comprehensive','concentration','conclusion','conference','confidence','connection','consequence','consideration','construction','consultation',
  'contribution','cooperation','coordination','corporation','correction','declaration','demonstration','determination','development','difference','difficulty','direction','discrimination','distribution','documentation',
  'education','efficiency','electricity','employment','encouragement','environment','establishment','evaluation','examination','experience','experiment','expression','foundation','generation','government','identification',
  'imagination','importance','improvement','independent','information','initiative','innovation','inspiration','intelligence','interaction','introduction','investigation','knowledge','leadership','literature','management',
  'mathematics','measurement','motivation','movement','necessity','observation','opportunity','organization','participation','performance','personality','philosophy','population','possibility','preparation','presentation',
  'president','principle','probability','production','professional','protection','publication','qualification','reaction','realization','recommendation','relationship','requirement','reservation','resolution','revolution',
  'satisfaction','situation','stability','statement','structure','technology','temperature','tradition','transportation','university','understanding','volunteer','wonderful','scientific','biological','linguistic','psychology',
  'philosophy','anthropology','architecture','metaphor','paradigm','criterion','sociology','artificial','intelligence','machine','learning','neural','network','cognitive','computation','sustainability','biodiversity',
  'conservation','infrastructure','legislation','international','collaboration','innovation','entrepreneurship','negotiation','evaluation','optimization','implementation','synchronization','accountability','credibility',
  'responsibility','transparency','governance','leadership','management','entrepreneur','stakeholder','globalization','distribution','industrialization','investment','productivity','sustainability','transportation',
  'communication','representation','transformation','revolutionary','psychological','technological','environmental','biochemical','pharmaceutical','astronomical','metaphysical','constitutional','organizational','institutional',
  'professionalism','philanthropy','quantitative','qualitative','methodology','disciplinary','interdisciplinary','crossfunctional','biotechnology','nanotechnology','cybersecurity','cryptocurrency','automation','simulation',
  'integration','virtualization','optimization','visualization','theoretical','practical','experimental','computational','contextual','sociocultural','biomedical','diagnostic','therapeutic','regenerative','educational',
  'transformational','dimensional','hypothesis','empirical','systematic','conceptual','sustainability','reliability','adaptability','resilience','flexibility','scalability','accountability','credibility','viability','transparency',
  'collaborative','cooperative','productive','constructive','comprehensive','analytical','synthetic','evaluative','interpretive','comparative','quantitative','qualitative','correlative','predictive','cognitive','creative',
  'innovative','progressive','transformative','evolutionary','revolutionary'
]


   
   };
