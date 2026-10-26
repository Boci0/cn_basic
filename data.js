// [char, pinyin, meaning, flag note (null = none)]
// Pinyin/meanings come from the book's 生词 pages; flags are my own doubts, not the book's.
const POLY="Polyphone: pronunciation depends on the word. ";
const SO="Stroke order: textbooks (China/Singapore vs Taiwan) can differ on this one. Check the animation against your book's grid. ";
const L=[
["L1",[
 ["你","nǐ","you",null],["好","hǎo","good; well",null],["吗","ma","?-particle","Neutral tone (no tone mark in the book)."],
 ["很","hěn","very",null],["早","zǎo","morning; early",null],["安","ān","peace",null],
 ["对","duì","correct",null],["不","bù","no; not","Tone changes to bú before a 4th tone (e.g. 不对 búduì). Book lists bù."],
 ["起","qǐ","rise; up",SO]]],
["L2",[
 ["客","kè","guest",null],["气","qì","air; spirit",SO],["没","méi","not have",null],
 ["关","guān","close; concern",SO],["系","xì","relate",POLY+"系 can also be jì (to tie)."],
 ["再","zài","again",null],["见","jiàn","see; meet",null],["老","lǎo","old",null],
 ["师","shī","teacher",SO],["们","men","plural","Neutral tone."]]],
["L3",[
 ["觉","jué","feel",POLY+"Also jiào in 睡觉. "+SO],["得","de","obtain; (觉得 feel)",POLY+"Also dé (get) and děi (must). The book's 觉得 reads juéde with a light de."],
 ["冷","lěng","cold",null],["饿","è","hungry",null],["忙","máng","busy",null],
 ["困","kùn","sleepy",SO],["有","yǒu","have",null],["高","gāo","tall; high",null],
 ["兴","xìng","joy; glad",POLY+"Book prints gāoxing; dictionaries give gāoxìng. "+SO],["这","zhè","this",SO]]],
["L4",[
 ["他","tā","he; him",null],["我","wǒ","I; me",null],["她","tā","she; her",null],
 ["和","hé","and",POLY+"Also hè, huò, hú, hàn in other words."],["银","yín","silver",null],
 ["行","háng","firm; row",POLY+"行 is xíng (OK/walk) elsewhere; here it is háng."],
 ["邮","yóu","post; mail",SO],["局","jú","office; bureau",SO],
 ["医","yī","medicine",SO],["院","yuàn","institution",SO]]],
["L5",[
 ["一","yī","one (1)","Tone sandhi: 一 is yí before a 4th tone, yì before 1st-3rd (一起 = yìqǐ). Book lists yī."],
 ["二","èr","two (2)",null],["三","sān","three (3)",null],["四","sì","four (4)",null],["五","wǔ","five (5)",null],
 ["六","liù","six (6)",null],["七","qī","seven (7)","七 also changes tone in some speech (qí before 4th tone). Book lists qī."],
 ["八","bā","eight (8)","八 can change to bá before a 4th tone. Book lists bā."],["九","jiǔ","nine (9)",SO],["十","shí","ten (10)",null]]]
];

// Vocab view: every 生词 entry of L1-5 that is a multi-character word, or a single character outside the 49 above.
// Same shape as L. Add a lesson/word here and it appears in the app. Tones/neutral tones follow the book's printed pinyin.
const NT="Neutral tone on the last syllable as printed in the book; dictionaries may mark it differently. ";
const V=[
["L1",[
 ["你好","nǐ hǎo","hello",null],["你好吗","nǐ hǎo ma","how are you",null],["早安","zǎo'ān","good morning",null],
 ["对不起","duìbuqǐ","sorry",NT],["没关系","méi guānxi","doesn't matter",NT+"Book prints 没(有)关系."],["谢谢","xièxie","thank you",NT],
 ["客气","kèqi","polite",NT],["不客气","bú kèqi","you're welcome","不 changes to bú before a 4th tone. Book prints bù kèqi."],
 ["再见","zàijiàn","goodbye",null],["救命","jiùmìng","help!",null],["啊","a","(modal particle)",NT]]],
["L2",[
 ["午安","wǔ'ān","good afternoon",null],["呢","ne","(modal particle)",NT],["也","yě","also",null],["学","xué","learn",null],
 ["同学","tóngxué","classmate",null],["老师","lǎoshī","teacher",null],["晚上","wǎnshang","evening; night",NT],["晚上好","wǎnshang hǎo","good evening",NT],
 ["您","nín","you (polite)",null],["早上","zǎoshang","in the morning",NT],["早上好","zǎoshang hǎo","good morning",NT],
 ["中午","zhōngwǔ","noon",null],["中午好","zhōngwǔ hǎo","good afternoon",null],["下午","xiàwǔ","afternoon",null],
 ["下午好","xiàwǔ hǎo","good afternoon",null],["傍晚","bàngwǎn","dusk",null],["傍晚好","bàngwǎn hǎo","good evening",null],["晚安","wǎn'ān","good night",null]]],
["L3",[
 ["觉得","juéde","feel",NT],["怎么样","zěnmeyàng","how",NT],["渴","kě","thirsty",null],["有点儿","yǒu diǎnr","a little bit","Book prints 有(一)点(儿)."],
 ["极了","jí le","extremely",NT],["累","lèi","tired",null],["又","yòu","both…and (又…又…)",null],["高兴","gāoxìng","glad",NT],
 ["都","dōu","all",null],["喜欢","xǐhuan","like",NT],["个","gè","(classifier)",null],["这个","zhège","this (one)",NT],
 ["那","nà","that",null],["那个","nàge","that (one)",NT]]],
["L4",[
 ["想","xiǎng","think; wish to",null],["去","qù","go to",null],["银行","yínháng","bank","行 is háng here."],["商店","shāngdiàn","shop",null],
 ["便利店","biànlìdiàn","convenience store",null],["买","mǎi","buy",null],["东西","dōngxi","goods; thing","东西 means east-west when it is dōngxī; 'thing' is dōngxi."],
 ["要","yào","want to",null],["一起","yìqǐ","together","一 changes to yì before a 3rd tone. Book prints yìqǐ."],["休息","xiūxi","rest",NT],
 ["哪里","nǎlǐ","where","Book prints nǎlǐ; many speakers say nǎli (neutral). Check Forvo."],["邮局","yóujú","post office",null],["寄","jì","post (mail)",null],
 ["快递","kuàidì","express delivery",null],["医院","yīyuàn","hospital",null],["看","kàn","see; watch; read",null],["医生","yīshēng","doctor",null]]],
["L5",[
 ["数字","shùzì","numbers",null],["零","líng","zero (0)",null],["百","bǎi","hundred",null],["时间","shíjiān","time",null],
 ["年","nián","year",null],["月","yuè","month",null],["号","hào","date",null],["星期","xīngqī","week; day of week",null],
 ["点","diǎn","o'clock",null],["分","fēn","minute",null]]]
];

// Vocab word/char -> file in ./audio (see audio/CREDITS.txt). Add a word: drop its .ogg in ./audio and list it here.
const CLIPS={"你好":"nihao","你好吗":"nihaoma","早安":"zaoan","对不起":"duibuqi","没关系":"meiguanxi","谢谢":"xiexie","客气":"keqi","不客气":"bukeqi","再见":"zaijian","救命":"jiuming","啊":"a","午安":"wuan","呢":"ne","也":"ye3","学":"xue2","同学":"tongxue","老师":"laoshi","晚上":"wanshang","晚上好":"wanshanghao","您":"nin2","早上":"zaoshang","早上好":"zaoshanghao","中午":"zhongwu","中午好":"zhongwuhao","下午":"xiawu","下午好":"xiawuhao","傍晚":"bangwan","傍晚好":"bangwanhao","晚安":"wanan","觉得":"juede","怎么样":"zenmeyang","渴":"ke3","有点儿":"youdianr","极了":"jile","累":"lei4","又":"you4","高兴":"gaoxing","都":"dou1","喜欢":"xihuan","个":"ge4","这个":"zhege","那":"na4","那个":"nage","想":"xiang3","去":"qu4","银行":"yinhang","商店":"shangdian","便利店":"bianlidian","买":"mai3","东西":"dongxi","要":"yao4","一起":"yiqi","休息":"xiuxi","哪里":"nali","邮局":"youju","寄":"ji4","快递":"kuaidi","医院":"yiyuan","看":"kan4","医生":"yisheng","数字":"shuzi","零":"ling2","百":"bai3","时间":"shijian","年":"nian2","月":"yue4","号":"hao4","星期":"xingqi","点":"dian3","分":"fen1"};
