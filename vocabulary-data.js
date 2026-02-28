/**
 * 雅思词汇真经 - 词汇数据
 * 共22个章节，约3600词
 * 基于《雅思词汇真经》刘洪波
 */

const vocabularyData = {
    chapters: [
        {
            id: 1,
            name: "自然地理",
            icon: "🌍",
            words: [
                { word: "source", phonetic: "/sɔːrs/", meaning: "n. 河的源头；根源，来源", etymology: "来自拉丁语 surgere，意为'升起、涌出'", memory: "sour(酸的)+ce → 酸味的源头是醋", example: "The river takes its name from its source.", translation: "这条河以其源头命名。" },
                { word: "shallow", phonetic: "/ˈʃæloʊ/", meaning: "adj. 浅的；肤浅的，浅薄的", etymology: "源自古英语 sceald，与'壳'shell同源", memory: "sha(傻)+llow(谐音'漏') → 傻到漏底了，太肤浅", example: "The lake is quite shallow.", translation: "这个湖很浅。" },
                { word: "superficial", phonetic: "/ˌsuːpərˈfɪʃl/", meaning: "adj. 表皮的，表层的；肤浅的", etymology: "super(上面)+fic(脸)+ial → 表面上的", memory: "super(超级)+ficial(假的) → 超级假的，肤浅的", example: "His understanding of the subject is superficial.", translation: "他对这门学科的理解很肤浅。" },
                { word: "flat", phonetic: "/flæt/", meaning: "adj. 平坦的；扁平的；平淡的", etymology: "源自古诺尔斯语 flatr，意为'平坦的'", memory: "f+lat(迟到) → 迟到被压扁了", example: "The road is flat and straight.", translation: "这条路平坦笔直。" },
                { word: "mattress", phonetic: "/ˈmætrəs/", meaning: "n. 床垫", etymology: "来自阿拉伯语 matrah，意为'垫子'", memory: "mat(垫子)+tress(谐音'睡死') → 睡在垫子上睡死了", example: "I need to buy a new mattress.", translation: "我需要买一个新床垫。" },
                { word: "shear", phonetic: "/ʃɪr/", meaning: "n./v. 大剪刀；剪（羊毛等）", etymology: "源自古英语 sceran，意为'切割'", memory: "she(她)+ar(啊) → 她啊，用大剪刀剪羊毛", example: "Farmers shear sheep in spring.", translation: "农民在春天剪羊毛。" },
                { word: "strand", phonetic: "/strænd/", meaning: "n. 缕，股；滨，岸 v. 使搁浅", etymology: "源自古英语 strand，意为'海滩、岸边'", memory: "st(街道)+rand(随机) → 随机走到街道尽头是海边", example: "A strand of hair fell across her face.", translation: "一缕头发垂落在她脸上。" },
                { word: "match", phonetic: "/mætʃ/", meaning: "n./v. 火柴；比赛；匹配", etymology: "源自古英语 mæcca，意为'伴侣、配对'", memory: "ma(妈)+tch(谐音'吃') → 妈妈吃火柴比赛", example: "He struck a match to light the candle.", translation: "他划了一根火柴来点蜡烛。" },
                { word: "sweep", phonetic: "/swiːp/", meaning: "v. 打扫；（迅猛地）吹走；掠过", etymology: "源自古英语 swāpan，意为'扫、挥动'", memory: "sw(拼音'扫')+eep(谐音'一扑') → 一扫一扑", example: "The wind swept the leaves away.", translation: "风把树叶吹走了。" },
                { word: "erosion", phonetic: "/ɪˈroʊʒn/", meaning: "n. 侵蚀，腐蚀", etymology: "e(出)+ros(咬)+ion → 咬掉、侵蚀", memory: "e(鹅)+ros(谐音'肉')+ion → 鹅的肉被侵蚀了", example: "Soil erosion is a serious problem.", translation: "土壤侵蚀是一个严重的问题。" },
                { word: "sediment", phonetic: "/ˈsedɪmənt/", meaning: "n. 沉淀物，沉积物", etymology: "sed(坐)+iment → 沉下去的东西", memory: "se(色)+di(的)+ment(门徒) → 色的门徒沉淀了", example: "Sediment settled at the bottom of the bottle.", translation: "沉淀物沉到了瓶底。" },
                { word: "delta", phonetic: "/ˈdeltə/", meaning: "n. （河流的）三角洲", etymology: "希腊字母Δ，形状像三角洲", memory: "德尔塔 → 三角形 → 三角洲", example: "The Nile Delta is very fertile.", translation: "尼罗河三角洲非常肥沃。" },
                { word: "basin", phonetic: "/ˈbeɪsn/", meaning: "n. 盆地；盆；流域", etymology: "来自古法语 bacin，意为'盆、碗'", memory: "ba(爸)+sin(罪) → 爸爸在盆地赎罪", example: "The Amazon basin covers a huge area.", translation: "亚马逊流域覆盖面积巨大。" },
                { word: "plateau", phonetic: "/plæˈtoʊ/", meaning: "n. 高原；稳定期", etymology: "来自法语 plateau，意为'高原、台地'", memory: "plat(平)+eau(水) → 高原上的水很平", example: "The Tibetan Plateau is the highest in the world.", translation: "青藏高原是世界上海拔最高的高原。" },
                { word: "valley", phonetic: "/ˈvæli/", meaning: "n. 山谷，溪谷", etymology: "源自古法语 valee，意为'山谷'", memory: "va(哇)+lley(谐音'累') → 哇，山谷里走累了", example: "The village lies in a peaceful valley.", translation: "这个村庄坐落在宁静的山谷中。" },
                { word: "canyon", phonetic: "/ˈkænjən/", meaning: "n. 峡谷", etymology: "来自西班牙语 cañón，意为'管子、深谷'", memory: "can(能)+yon(谐音'勇') → 能勇敢地穿越峡谷", example: "The Grand Canyon is breathtaking.", translation: "大峡谷令人叹为观止。" },
                { word: "ridge", phonetic: "/rɪdʒ/", meaning: "n. 山脊；脊状突起", etymology: "源自古英语 hrycg，意为'背、脊'", memory: "ri(日)+dge(谐音'脊') → 日光照在山脊上", example: "We walked along the mountain ridge.", translation: "我们沿着山脊行走。" },
                { word: "peak", phonetic: "/piːk/", meaning: "n. 山峰；顶点 adj. 最高的", example: "The peak is covered with snow all year.", translation: "这座山峰终年积雪。" },
                { word: "summit", phonetic: "/ˈsʌmɪt/", meaning: "n. 山顶；峰会", example: "They reached the summit at noon.", translation: "他们在中午到达了山顶。" },
                { word: "glacier", phonetic: "/ˈɡleɪʃər/", meaning: "n. 冰川，冰河", example: "The glacier is melting rapidly.", translation: "冰川正在迅速融化。" }
            ]
        },
        {
            id: 2,
            name: "植物研究",
            icon: "🌿",
            words: [
                { word: "botany", phonetic: "/ˈbɑːtəni/", meaning: "n. 植物学", example: "She is studying botany at university.", translation: "她在大学学习植物学。" },
                { word: "flora", phonetic: "/ˈflɔːrə/", meaning: "n. （某地区的）植物群", example: "The island has a unique flora.", translation: "这个岛屿有独特的植物群。" },
                { word: "fauna", phonetic: "/ˈfɔːnə/", meaning: "n. （某地区的）动物群", example: "The fauna of Australia is unique.", translation: "澳大利亚的动物群是独特的。" },
                { word: "species", phonetic: "/ˈspiːʃiːz/", meaning: "n. 物种，种类", example: "This species is endangered.", translation: "这个物种濒临灭绝。" },
                { word: "organism", phonetic: "/ˈɔːrɡənɪzəm/", meaning: "n. 生物，有机体", example: "Bacteria are single-celled organisms.", translation: "细菌是单细胞生物。" },
                { word: "cell", phonetic: "/sel/", meaning: "n. 细胞；牢房；电池", example: "All living things are made of cells.", translation: "所有生物都由细胞组成。" },
                { word: "tissue", phonetic: "/ˈtɪʃuː/", meaning: "n. 组织；纸巾", example: "Muscle tissue is soft and elastic.", translation: "肌肉组织柔软而有弹性。" },
                { word: "root", phonetic: "/ruːt/", meaning: "n. 根；根源 v. 扎根", example: "The roots of this tree go deep.", translation: "这棵树的根扎得很深。" },
                { word: "stem", phonetic: "/stem/", meaning: "n. 茎，干 v. 阻止", example: "Water travels up the stem to the leaves.", translation: "水通过茎输送到叶子。" },
                { word: "leaf", phonetic: "/liːf/", meaning: "n. 叶子；页", example: "The tree has green leaves.", translation: "这棵树有绿叶。" },
                { word: "bark", phonetic: "/bɑːrk/", meaning: "n. 树皮；狗叫声 v. 吠叫", example: "The bark protects the tree.", translation: "树皮保护着树木。" },
                { word: "trunk", phonetic: "/trʌŋk/", meaning: "n. 树干；象鼻；行李箱", example: "The elephant has a long trunk.", translation: "大象有长长的鼻子。" },
                { word: "branch", phonetic: "/bræntʃ/", meaning: "n. 树枝；分支；分店", example: "Birds sat on the branches.", translation: "鸟儿栖息在树枝上。" },
                { word: "bud", phonetic: "/bʌd/", meaning: "n. 芽，花蕾 v. 发芽", example: "The trees are in bud.", translation: "树木正在发芽。" },
                { word: "bloom", phonetic: "/bluːm/", meaning: "n./v. 开花；繁荣", example: "The roses are in full bloom.", translation: "玫瑰正在盛开。" },
                { word: "blossom", phonetic: "/ˈblɑːsəm/", meaning: "n./v. 花；开花期", example: "Cherry trees blossom in spring.", translation: "樱桃树在春天开花。" },
                { word: "pollen", phonetic: "/ˈpɑːlən/", meaning: "n. 花粉", example: "Bees collect pollen from flowers.", translation: "蜜蜂从花朵采集花粉。" },
                { word: "seed", phonetic: "/siːd/", meaning: "n. 种子；起源 v. 播种", example: "Plant the seeds in spring.", translation: "在春天播种。" },
                { word: "germinate", phonetic: "/ˈdʒɜːrmɪneɪt/", meaning: "v. 发芽；形成", example: "The seeds will germinate in warm soil.", translation: "种子会在温暖的土壤中发芽。" },
                { word: "sprout", phonetic: "/spraʊt/", meaning: "v. 发芽；抽条 n. 新芽", example: "New leaves are sprouting.", translation: "新叶正在发芽。" }
            ]
        },
        {
            id: 3,
            name: "动物保护",
            icon: "🦁",
            words: [
                { word: "mammal", phonetic: "/ˈmæml/", meaning: "n. 哺乳动物", example: "Humans are mammals.", translation: "人类是哺乳动物。" },
                { word: "reptile", phonetic: "/ˈreptaɪl/", meaning: "n. 爬行动物", example: "Snakes are reptiles.", translation: "蛇是爬行动物。" },
                { word: "amphibian", phonetic: "/æmˈfɪbiən/", meaning: "n. 两栖动物", example: "Frogs are amphibians.", translation: "青蛙是两栖动物。" },
                { word: "predator", phonetic: "/ˈpredətər/", meaning: "n. 捕食者；掠夺者", example: "Lions are apex predators.", translation: "狮子是顶级捕食者。" },
                { word: "prey", phonetic: "/preɪ/", meaning: "n. 猎物；受害者 v. 捕食", example: "The lion stalked its prey.", translation: "狮子悄悄接近猎物。" },
                { word: "habitat", phonetic: "/ˈhæbɪtæt/", meaning: "n. （动植物的）栖息地", example: "The panda's natural habitat is bamboo forest.", translation: "大熊猫的自然栖息地是竹林。" },
                { word: "ecosystem", phonetic: "/ˈiːkoʊsɪstəm/", meaning: "n. 生态系统", example: "Coral reefs are complex ecosystems.", translation: "珊瑚礁是复杂的生态系统。" },
                { word: "extinct", phonetic: "/ɪkˈstɪŋkt/", meaning: "adj. 灭绝的；熄灭的", example: "Dinosaurs are extinct.", translation: "恐龙已经灭绝了。" },
                { word: "endangered", phonetic: "/ɪnˈdeɪndʒərd/", meaning: "adj. 濒临灭绝的", example: "Tigers are endangered species.", translation: "老虎是濒危物种。" },
                { word: "conservation", phonetic: "/ˌkɑːnsərˈveɪʃn/", meaning: "n. 保护；保存", example: "Wildlife conservation is important.", translation: "野生动物保护很重要。" },
                { word: "preserve", phonetic: "/prɪˈzɜːrv/", meaning: "v. 保护；保存；腌制", example: "We must preserve endangered species.", translation: "我们必须保护濒危物种。" },
                { word: "reserve", phonetic: "/rɪˈzɜːrv/", meaning: "n./v. 保护区；储备；预订", example: "The area is a nature reserve.", translation: "这个区域是自然保护区。" },
                { word: "sanctuary", phonetic: "/ˈsæŋktʃueri/", meaning: "n. 保护区；避难所", example: "The island is a bird sanctuary.", translation: "这个岛屿是鸟类保护区。" },
                { word: "breed", phonetic: "/briːd/", meaning: "v. 繁殖；饲养 n. 品种", example: "They breed horses on the farm.", translation: "他们在农场饲养马匹。" },
                { word: "offspring", phonetic: "/ˈɔːfsprɪŋ/", meaning: "n. 后代，子孙", example: "The cat had five offspring.", translation: "这只猫生了五只小猫。" },
                { word: "evolution", phonetic: "/ˌiːvəˈluːʃn/", meaning: "n. 进化；发展", example: "Darwin studied evolution.", translation: "达尔文研究进化论。" },
                { word: "adapt", phonetic: "/əˈdæpt/", meaning: "v. 适应；改编", example: "Animals adapt to their environment.", translation: "动物适应它们的环境。" },
                { word: "domesticate", phonetic: "/dəˈmestɪkeɪt/", meaning: "v. 驯养；教化", example: "Dogs were domesticated from wolves.", translation: "狗是由狼驯化而来的。" },
                { word: "captive", phonetic: "/ˈkæptɪv/", meaning: "n./adj. 俘虏；被监禁的", example: "The animals were raised in captivity.", translation: "这些动物被圈养。" },
                { word: "wildlife", phonetic: "/ˈwaɪldlaɪf/", meaning: "n. 野生动物", example: "We must protect wildlife.", translation: "我们必须保护野生动物。" }
            ]
        },
        {
            id: 4,
            name: "太空探索",
            icon: "🚀",
            words: [
                { word: "astronomy", phonetic: "/əˈstrɑːnəmi/", meaning: "n. 天文学", example: "Astronomy is the study of stars.", translation: "天文学是研究星星的学科。" },
                { word: "astronaut", phonetic: "/ˈæstrənɔːt/", meaning: "n. 宇航员", example: "The astronaut went to space.", translation: "宇航员去了太空。" },
                { word: "cosmos", phonetic: "/ˈkɑːzmoʊs/", meaning: "n. 宇宙", example: "The cosmos is vast and mysterious.", translation: "宇宙浩瀚而神秘。" },
                { word: "galaxy", phonetic: "/ˈɡæləksi/", meaning: "n. 星系；银河系", example: "Our galaxy is called the Milky Way.", translation: "我们的星系叫做银河系。" },
                { word: "solar", phonetic: "/ˈsoʊlər/", meaning: "adj. 太阳的；太阳能的", example: "The solar system has eight planets.", translation: "太阳系有八颗行星。" },
                { word: "planet", phonetic: "/ˈplænɪt/", meaning: "n. 行星", example: "Earth is the third planet from the sun.", translation: "地球是距离太阳第三近的行星。" },
                { word: "orbit", phonetic: "/ˈɔːrbɪt/", meaning: "n./v. 轨道；绕轨道运行", example: "The moon orbits the Earth.", translation: "月球绕地球运行。" },
                { word: "satellite", phonetic: "/ˈsætəlaɪt/", meaning: "n. 卫星；人造卫星", example: "The satellite transmits TV signals.", translation: "这颗卫星传输电视信号。" },
                { word: "comet", phonetic: "/ˈkɑːmɪt/", meaning: "n. 彗星", example: "Halley's comet appears every 76 years.", translation: "哈雷彗星每76年出现一次。" },
                { word: "asteroid", phonetic: "/ˈæstərɔɪd/", meaning: "n. 小行星", example: "An asteroid passed close to Earth.", translation: "一颗小行星近距离掠过地球。" },
                { word: "meteor", phonetic: "/ˈmiːtiər/", meaning: "n. 流星", example: "We saw a shooting star (meteor).", translation: "我们看到了一颗流星。" },
                { word: "eclipse", phonetic: "/ɪˈklɪps/", meaning: "n./v. 日食；月食；使黯然失色", example: "There will be a solar eclipse tomorrow.", translation: "明天将有日食。" },
                { word: "telescope", phonetic: "/ˈtelɪskoʊp/", meaning: "n. 望远镜", example: "He looked at the stars through a telescope.", translation: "他通过望远镜观察星星。" },
                { word: "observatory", phonetic: "/əbˈzɜːrvətɔːri/", meaning: "n. 天文台，气象台", example: "The observatory is on the mountain.", translation: "天文台在山上。" },
                { word: "launch", phonetic: "/lɔːntʃ/", meaning: "v./n. 发射；发起；上市", example: "They will launch the rocket tomorrow.", translation: "他们明天将发射火箭。" },
                { word: "spacecraft", phonetic: "/ˈspeɪskræft/", meaning: "n. 航天器，宇宙飞船", example: "The spacecraft landed on Mars.", translation: "航天器在火星着陆。" },
                { word: "shuttle", phonetic: "/ˈʃʌtl/", meaning: "n. 航天飞机；穿梭", example: "The space shuttle returned safely.", translation: "航天飞机安全返回。" },
                { word: "module", phonetic: "/ˈmɑːdʒuːl/", meaning: "n. 舱；模块；组件", example: "The lunar module landed on the moon.", translation: "登月舱在月球着陆。" },
                { word: "gravity", phonetic: "/ˈɡrævəti/", meaning: "n. 重力；严重性", example: "There is no gravity in space.", translation: "太空中没有重力。" },
                { word: "vacuum", phonetic: "/ˈvækjuːm/", meaning: "n. 真空；空白 v. 用吸尘器打扫", example: "Space is a vacuum.", translation: "太空是真空环境。" }
            ]
        },
        {
            id: 5,
            name: "学校教育",
            icon: "📚",
            words: [
                { word: "curriculum", phonetic: "/kəˈrɪkjələm/", meaning: "n. 课程，全部课程", example: "The school has a broad curriculum.", translation: "这所学校课程广泛。" },
                { word: "syllabus", phonetic: "/ˈsɪləbəs/", meaning: "n. 教学大纲，课程提纲", example: "The syllabus covers ten topics.", translation: "教学大纲涵盖十个主题。" },
                { word: "discipline", phonetic: "/ˈdɪsəplɪn/", meaning: "n. 学科；纪律；训练 v. 惩罚", example: "Physics is a challenging discipline.", translation: "物理学是一门具有挑战性的学科。" },
                { word: "tuition", phonetic: "/tuˈɪʃn/", meaning: "n. 学费；讲授", example: "Tuition fees have increased.", translation: "学费上涨了。" },
                { word: "scholarship", phonetic: "/ˈskɑːlərʃɪp/", meaning: "n. 奖学金；学问", example: "She won a scholarship to Harvard.", translation: "她获得了哈佛的奖学金。" },
                { word: "academic", phonetic: "/ˌækəˈdemɪk/", meaning: "adj. 学术的；学院的 n. 学者", example: "He has excellent academic records.", translation: "他有优秀的学业成绩。" },
                { word: "semester", phonetic: "/sɪˈmestər/", meaning: "n. 学期", example: "The semester starts in September.", translation: "学期从九月开始。" },
                { word: "seminar", phonetic: "/ˈsemɪnɑːr/", meaning: "n. 研讨会；研讨班", example: "I attended a research seminar.", translation: "我参加了一个研究研讨会。" },
                { word: "lecture", phonetic: "/ˈlektʃər/", meaning: "n./v. 讲座；讲课；训斥", example: "The professor gave a lecture on physics.", translation: "教授做了一场物理学讲座。" },
                { word: "tutorial", phonetic: "/tuːˈtɔːriəl/", meaning: "n. 辅导课；教程 adj. 辅导的", example: "We have small group tutorials.", translation: "我们有小组辅导课。" },
                { word: "assignment", phonetic: "/əˈsaɪnmənt/", meaning: "n. 作业；任务；分配", example: "I have an assignment due tomorrow.", translation: "我明天有一份作业要交。" },
                { word: "dissertation", phonetic: "/ˌdɪsərˈteɪʃn/", meaning: "n. 学位论文", example: "She is writing her dissertation.", translation: "她正在写学位论文。" },
                { word: "thesis", phonetic: "/ˈθiːsɪs/", meaning: "n. 论文；论点", example: "His thesis was published.", translation: "他的论文发表了。" },
                { word: "diploma", phonetic: "/dɪˈploʊmə/", meaning: "n. 文凭，毕业证书", example: "She received her diploma.", translation: "她拿到了毕业证书。" },
                { word: "certificate", phonetic: "/sərˈtɪfɪkət/", meaning: "n. 证书；文凭", example: "He has a teaching certificate.", translation: "他有教师资格证。" },
                { word: "degree", phonetic: "/dɪˈɡriː/", meaning: "n. 学位；程度；度数", example: "She has a master's degree.", translation: "她有硕士学位。" },
                { word: "bachelor", phonetic: "/ˈbætʃələr/", meaning: "n. 学士；单身汉", example: "He is a Bachelor of Arts.", translation: "他是文学学士。" },
                { word: "master", phonetic: "/ˈmæstər/", meaning: "n. 硕士；主人；大师 v. 掌握", example: "She is a Master of Science.", translation: "她是理学硕士。" },
                { word: "doctorate", phonetic: "/ˈdɑːktərət/", meaning: "n. 博士学位", example: "He is pursuing a doctorate.", translation: "他正在攻读博士学位。" },
                { word: "alumni", phonetic: "/əˈlʌmnaɪ/", meaning: "n. 校友，毕业生（复数）", example: "The alumni association is active.", translation: "校友会很活跃。" }
            ]
        },
        {
            id: 6,
            name: "科技发明",
            icon: "💡",
            words: [
                { word: "innovation", phonetic: "/ˌɪnəˈveɪʃn/", meaning: "n. 创新，革新", example: "The company encourages innovation.", translation: "公司鼓励创新。" },
                { word: "invention", phonetic: "/ɪnˈvenʃn/", meaning: "n. 发明；虚构", example: "The telephone is a great invention.", translation: "电话是一项伟大的发明。" },
                { word: "patent", phonetic: "/ˈpætnt/", meaning: "n./v. 专利；申请专利", example: "He holds several patents.", translation: "他拥有几项专利。" },
                { word: "breakthrough", phonetic: "/ˈbreɪkθruː/", meaning: "n. 突破；重大进展", example: "Scientists made a breakthrough.", translation: "科学家们取得了突破。" },
                { word: "artificial", phonetic: "/ˌɑːrtɪˈfɪʃl/", meaning: "adj. 人造的；虚假的", example: "AI stands for artificial intelligence.", translation: "AI代表人工智能。" },
                { word: "intelligence", phonetic: "/ɪnˈtelɪdʒəns/", meaning: "n. 智力；情报；智能", example: "She has high intelligence.", translation: "她智商很高。" },
                { word: "automation", phonetic: "/ˌɔːtəˈmeɪʃn/", meaning: "n. 自动化", example: "Factory automation increases efficiency.", translation: "工厂自动化提高效率。" },
                { word: "robotics", phonetic: "/roʊˈbɑːtɪks/", meaning: "n. 机器人学", example: "He studies robotics at university.", translation: "他在大学学习机器人学。" },
                { word: "virtual", phonetic: "/ˈvɜːrtʃuəl/", meaning: "adj. 虚拟的；实质上的", example: "VR means virtual reality.", translation: "VR代表虚拟现实。" },
                { word: "digital", phonetic: "/ˈdɪdʒɪtl/", meaning: "adj. 数字的；数码的", example: "We live in a digital age.", translation: "我们生活在数字时代。" },
                { word: "software", phonetic: "/ˈsɔːftwer/", meaning: "n. 软件", example: "I need to install new software.", translation: "我需要安装新软件。" },
                { word: "hardware", phonetic: "/ˈhɑːrdwer/", meaning: "n. 硬件；五金", example: "The computer hardware is outdated.", translation: "计算机硬件过时了。" },
                { word: "algorithm", phonetic: "/ˈælɡərɪðəm/", meaning: "n. 算法，计算程序", example: "The app uses a complex algorithm.", translation: "这个应用使用复杂的算法。" },
                { word: "database", phonetic: "/ˈdeɪtəbeɪs/", meaning: "n. 数据库", example: "The information is stored in a database.", translation: "信息存储在数据库中。" },
                { word: "network", phonetic: "/ˈnetwɜːrk/", meaning: "n./v. 网络；联网", example: "The computer network is down.", translation: "计算机网络断了。" },
                { word: "internet", phonetic: "/ˈɪntərnet/", meaning: "n. 互联网", example: "I found it on the internet.", translation: "我在网上找到的。" },
                { word: "wireless", phonetic: "/ˈwaɪərləs/", meaning: "adj. 无线的", example: "The house has wireless internet.", translation: "这房子有无线网络。" },
                { word: "satellite", phonetic: "/ˈsætəlaɪt/", meaning: "n. 卫星", example: "We have satellite TV.", translation: "我们有卫星电视。" },
                { word: "transmit", phonetic: "/trænzˈmɪt/", meaning: "v. 传输；传播；发射", example: "The station transmits 24 hours a day.", translation: "这个电台24小时播放。" },
                { word: "frequency", phonetic: "/ˈfriːkwənsi/", meaning: "n. 频率；频繁", example: "What frequency is the radio on?", translation: "收音机在什么频率？" }
            ]
        },
        {
            id: 7,
            name: "文化历史",
            icon: "🏛️",
            words: [
                { word: "civilization", phonetic: "/ˌsɪvələˈzeɪʃn/", meaning: "n. 文明；开化", example: "Ancient Egypt was a great civilization.", translation: "古埃及是一个伟大的文明。" },
                { word: "empire", phonetic: "/ˈempaɪər/", meaning: "n. 帝国", example: "The Roman Empire was vast.", translation: "罗马帝国幅员辽阔。" },
                { word: "dynasty", phonetic: "/ˈdaɪnəsti/", meaning: "n. 王朝，朝代", example: "The Ming Dynasty lasted 276 years.", translation: "明朝持续了276年。" },
                { word: "monarchy", phonetic: "/ˈmɑːnərki/", meaning: "n. 君主制；君主国", example: "Britain is a constitutional monarchy.", translation: "英国是君主立宪制国家。" },
                { word: "republic", phonetic: "/rɪˈpʌblɪk/", meaning: "n. 共和国", example: "China is a republic.", translation: "中国是一个共和国。" },
                { word: "revolution", phonetic: "/ˌrevəˈluːʃn/", meaning: "n. 革命；旋转", example: "The French Revolution changed Europe.", translation: "法国大革命改变了欧洲。" },
                { word: "independence", phonetic: "/ˌɪndɪˈpendəns/", meaning: "n. 独立", example: "India gained independence in 1947.", translation: "印度于1947年获得独立。" },
                { word: "colony", phonetic: "/ˈkɑːləni/", meaning: "n. 殖民地；聚居区", example: "Australia was once a British colony.", translation: "澳大利亚曾是英国殖民地。" },
                { word: "heritage", phonetic: "/ˈherɪtɪdʒ/", meaning: "n. 遗产；传统", example: "We must preserve our cultural heritage.", translation: "我们必须保护我们的文化遗产。" },
                { word: "tradition", phonetic: "/trəˈdɪʃn/", meaning: "n. 传统；惯例", example: "It's a family tradition.", translation: "这是家族传统。" },
                { word: "custom", phonetic: "/ˈkʌstəm/", meaning: "n. 习俗；海关；习惯", example: "It's a local custom.", translation: "这是当地习俗。" },
                { word: "ritual", phonetic: "/ˈrɪtʃuəl/", meaning: "n. 仪式；惯例 adj. 仪式的", example: "The ceremony follows an ancient ritual.", translation: "这个仪式遵循古老的惯例。" },
                { word: "myth", phonetic: "/mɪθ/", meaning: "n. 神话；虚构的事", example: "Greek myths are fascinating.", translation: "希腊神话引人入胜。" },
                { word: "legend", phonetic: "/ˈledʒənd/", meaning: "n. 传说；传奇人物", example: "He became a legend in his lifetime.", translation: "他在有生之年成为了传奇。" },
                { word: "archaeology", phonetic: "/ˌɑːrkiˈɑːlədʒi/", meaning: "n. 考古学", example: "She studies archaeology.", translation: "她学习考古学。" },
                { word: "artifact", phonetic: "/ˈɑːrtɪfækt/", meaning: "n. 人工制品；手工艺品", example: "The museum displays ancient artifacts.", translation: "博物馆展示古代文物。" },
                { word: "ruins", phonetic: "/ˈruːɪnz/", meaning: "n. 废墟；遗迹", example: "We visited the ruins of Rome.", translation: "我们参观了罗马遗迹。" },
                { word: "monument", phonetic: "/ˈmɑːnjumənt/", meaning: "n. 纪念碑；历史遗迹", example: "The Washington Monument is iconic.", translation: "华盛顿纪念碑是标志性的。" },
                { word: "memorial", phonetic: "/məˈmɔːriəl/", meaning: "n. 纪念碑；纪念馆 adj. 纪念的", example: "The war memorial is beautiful.", translation: "战争纪念碑很壮观。" },
                { word: "antique", phonetic: "/ænˈtiːk/", meaning: "n./adj. 古董；古老的", example: "The shop sells antiques.", translation: "这家店卖古董。" }
            ]
        },
        {
            id: 8,
            name: "语言演化",
            icon: "🗣️",
            words: [
                { word: "linguistics", phonetic: "/lɪŋˈɡwɪstɪks/", meaning: "n. 语言学", example: "Linguistics is the study of language.", translation: "语言学是研究语言的学科。" },
                { word: "dialect", phonetic: "/ˈdaɪəlekt/", meaning: "n. 方言，土语", example: "He speaks a local dialect.", translation: "他说当地方言。" },
                { word: "accent", phonetic: "/ˈæksent/", meaning: "n. 口音；重音", example: "She has a British accent.", translation: "她有英国口音。" },
                { word: "pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃn/", meaning: "n. 发音", example: "Your pronunciation is excellent.", translation: "你的发音很棒。" },
                { word: "vocabulary", phonetic: "/vəˈkæbjəleri/", meaning: "n. 词汇；词汇量", example: "Reading improves your vocabulary.", translation: "阅读能提高词汇量。" },
                { word: "grammar", phonetic: "/ˈɡræmər/", meaning: "n. 语法", example: "English grammar can be tricky.", translation: "英语语法可能很棘手。" },
                { word: "syntax", phonetic: "/ˈsɪntæks/", meaning: "n. 句法，语法", example: "Syntax is about sentence structure.", translation: "句法研究句子结构。" },
                { word: "semantics", phonetic: "/sɪˈmæntɪks/", meaning: "n. 语义学", example: "Semantics deals with meaning.", translation: "语义学研究意义。" },
                { word: "etymology", phonetic: "/ˌetɪˈmɑːlədʒi/", meaning: "n. 词源学", example: "Etymology traces word origins.", translation: "词源学追溯词的起源。" },
                { word: "origin", phonetic: "/ˈɔːrɪdʒɪn/", meaning: "n. 起源；出身", example: "What is the origin of this word?", translation: "这个词的起源是什么？" },
                { word: "evolve", phonetic: "/ɪˈvɑːlv/", meaning: "v. 演变；进化", example: "Languages evolve over time.", translation: "语言随着时间演变。" },
                { word: "derive", phonetic: "/dɪˈraɪv/", meaning: "v. 源于；获得", example: "The word derives from Latin.", translation: "这个词源于拉丁语。" },
                { word: "borrow", phonetic: "/ˈbɔːroʊ/", meaning: "v. 借；借用（词语）", example: "English borrowed many words from French.", translation: "英语从法语借用了许多词。" },
                { word: "native", phonetic: "/ˈneɪtɪv/", meaning: "adj. 本地的；天生的 n. 本地人", example: "She is a native speaker.", translation: "她是母语使用者。" },
                { word: "fluent", phonetic: "/ˈfluːənt/", meaning: "adj. 流利的，流畅的", example: "He is fluent in three languages.", translation: "他能流利地说三种语言。" },
                { word: "bilingual", phonetic: "/ˌbaɪˈlɪŋɡwəl/", meaning: "adj. 双语的", example: "She is bilingual in Chinese and English.", translation: "她能说中英双语。" },
                { word: "multilingual", phonetic: "/ˌmʌltiˈlɪŋɡwəl/", meaning: "adj. 多语的", example: "He is multilingual.", translation: "他会说多种语言。" },
                { word: "translate", phonetic: "/trænsˈleɪt/", meaning: "v. 翻译；转化", example: "Can you translate this?", translation: "你能翻译这个吗？" },
                { word: "interpret", phonetic: "/ɪnˈtɜːrprɪt/", meaning: "v. 口译；解释", example: "She interprets for the UN.", translation: "她为联合国做口译。" },
                { word: "literacy", phonetic: "/ˈlɪtərəsi/", meaning: "n. 识字；读写能力", example: "Literacy rates have improved.", translation: "识字率提高了。" }
            ]
        },
        {
            id: 9,
            name: "娱乐运动",
            icon: "⚽",
            words: [
                { word: "recreation", phonetic: "/ˌrekriˈeɪʃn/", meaning: "n. 娱乐，消遣", example: "Hiking is my favorite recreation.", translation: "徒步是我最喜欢的娱乐活动。" },
                { word: "leisure", phonetic: "/ˈliːʒər/", meaning: "n. 闲暇，空闲", example: "I read for leisure.", translation: "我闲暇时读书。" },
                { word: "hobby", phonetic: "/ˈhɑːbi/", meaning: "n. 爱好", example: "Painting is her hobby.", translation: "绘画是她的爱好。" },
                { word: "pastime", phonetic: "/ˈpæstaɪm/", meaning: "n. 消遣，娱乐", example: "Chess is a popular pastime.", translation: "国际象棋是流行的消遣活动。" },
                { word: "athlete", phonetic: "/ˈæθliːt/", meaning: "n. 运动员", example: "She is a professional athlete.", translation: "她是职业运动员。" },
                { word: "champion", phonetic: "/ˈtʃæmpiən/", meaning: "n. 冠军；拥护者", example: "He is the world champion.", translation: "他是世界冠军。" },
                { word: "tournament", phonetic: "/ˈtʊrnəmənt/", meaning: "n. 锦标赛，联赛", example: "The tennis tournament starts Monday.", translation: "网球锦标赛周一开始。" },
                { word: "stadium", phonetic: "/ˈsteɪdiəm/", meaning: "n. 体育场", example: "The stadium holds 50,000 people.", translation: "这个体育场可容纳5万人。" },
                { word: "arena", phonetic: "/əˈriːnə/", meaning: "n. 竞技场；舞台", example: "The concert was at the arena.", translation: "演唱会在竞技场举行。" },
                { word: "spectator", phonetic: "/ˈspekteɪtər/", meaning: "n. 观众，旁观者", example: "Thousands of spectators watched.", translation: "数千名观众观看。" },
                { word: "amateur", phonetic: "/ˈæmətər/", meaning: "n./adj. 业余爱好者；业余的", example: "He is an amateur photographer.", translation: "他是业余摄影师。" },
                { word: "professional", phonetic: "/prəˈfeʃənl/", meaning: "adj./n. 职业的；专业人员", example: "He turned professional at 18.", translation: "他18岁成为职业选手。" },
                { word: "coach", phonetic: "/koʊtʃ/", meaning: "n. 教练；长途汽车 v. 训练", example: "The coach gave good advice.", translation: "教练给了很好的建议。" },
                { word: "referee", phonetic: "/ˌrefəˈriː/", meaning: "n. 裁判；仲裁人", example: "The referee blew the whistle.", translation: "裁判吹响了哨子。" },
                { word: "opponent", phonetic: "/əˈpoʊnənt/", meaning: "n. 对手，反对者", example: "He defeated his opponent.", translation: "他击败了对手。" },
                { word: "competition", phonetic: "/ˌkɑːmpəˈtɪʃn/", meaning: "n. 竞争；比赛", example: "The competition was fierce.", translation: "竞争很激烈。" },
                { word: "fitness", phonetic: "/ˈfɪtnəs/", meaning: "n. 健康；适合", example: "Fitness is important for health.", translation: "健康对健康很重要。" },
                { word: "exercise", phonetic: "/ˈeksərsaɪz/", meaning: "n./v. 锻炼；练习", example: "I exercise every day.", translation: "我每天锻炼。" },
                { word: "training", phonetic: "/ˈtreɪnɪŋ/", meaning: "n. 训练；培训", example: "The team is in training.", translation: "队伍正在训练。" },
                { word: "workout", phonetic: "/ˈwɜːrkaʊt/", meaning: "n. 锻炼；训练", example: "I had a good workout.", translation: "我锻炼得很好。" }
            ]
        },
        {
            id: 10,
            name: "物品材料",
            icon: "🔧",
            words: [
                { word: "material", phonetic: "/məˈtɪriəl/", meaning: "n. 材料；物质；资料", example: "What material is this made of?", translation: "这是什么材料做的？" },
                { word: "substance", phonetic: "/ˈsʌbstəns/", meaning: "n. 物质；实质", example: "What substance is this?", translation: "这是什么物质？" },
                { word: "chemical", phonetic: "/ˈkemɪkl/", meaning: "n./adj. 化学品；化学的", example: "The chemical reaction occurred.", translation: "化学反应发生了。" },
                { word: "compound", phonetic: "/ˈkɑːmpaʊnd/", meaning: "n. 化合物；复合物", example: "Water is a compound.", translation: "水是一种化合物。" },
                { word: "element", phonetic: "/ˈelɪmənt/", meaning: "n. 元素；要素", example: "Gold is a chemical element.", translation: "金是一种化学元素。" },
                { word: "metal", phonetic: "/ˈmetl/", meaning: "n. 金属", example: "Iron is a common metal.", translation: "铁是一种常见金属。" },
                { word: "steel", phonetic: "/stiːl/", meaning: "n. 钢；钢铁工业", example: "The bridge is made of steel.", translation: "这座桥是钢制的。" },
                { word: "iron", phonetic: "/ˈaɪərn/", meaning: "n. 铁；熨斗 v. 熨烫", example: "The gate is made of iron.", translation: "大门是铁制的。" },
                { word: "copper", phonetic: "/ˈkɑːpər/", meaning: "n. 铜；铜币", example: "Copper conducts electricity well.", translation: "铜导电性能好。" },
                { word: "aluminum", phonetic: "/əˈluːmɪnəm/", meaning: "n. 铝", example: "The can is made of aluminum.", translation: "这个罐子是用铝做的。" },
                { word: "plastic", phonetic: "/ˈplæstɪk/", meaning: "n./adj. 塑料；可塑的", example: "The bottle is made of plastic.", translation: "这个瓶子是塑料做的。" },
                { word: "rubber", phonetic: "/ˈrʌbər/", meaning: "n. 橡胶；橡皮", example: "Tires are made of rubber.", translation: "轮胎是橡胶做的。" },
                { word: "glass", phonetic: "/ɡlæs/", meaning: "n. 玻璃；玻璃杯", example: "The window is made of glass.", translation: "窗户是玻璃做的。" },
                { word: "crystal", phonetic: "/ˈkrɪstl/", meaning: "n. 水晶；晶体", example: "The chandelier has crystal.", translation: "吊灯上有水晶。" },
                { word: "ceramic", phonetic: "/səˈræmɪk/", meaning: "n./adj. 陶瓷；陶器的", example: "The vase is ceramic.", translation: "这个花瓶是陶瓷的。" },
                { word: "porcelain", phonetic: "/ˈpɔːrsəlɪn/", meaning: "n. 瓷器", example: "China is famous for porcelain.", translation: "中国以瓷器闻名。" },
                { word: "wood", phonetic: "/wʊd/", meaning: "n. 木材；树林", example: "The table is made of wood.", translation: "这张桌子是木制的。" },
                { word: "timber", phonetic: "/ˈtɪmbər/", meaning: "n. 木材；木料", example: "The house is built of timber.", translation: "这房子是木结构的。" },
                { word: "cotton", phonetic: "/ˈkɑːtn/", meaning: "n. 棉花；棉布", example: "The shirt is 100% cotton.", translation: "这件衬衫是100%棉的。" },
                { word: "wool", phonetic: "/wʊl/", meaning: "n. 羊毛；毛线", example: "The sweater is made of wool.", translation: "这件毛衣是羊毛的。" }
            ]
        }
    ],

    // 激励语录
    motivations: {
        daily: [
            { emoji: "🌅", title: "新的一天", text: "每一个清晨都是新的开始，今天也要加油背单词哦！" },
            { emoji: "💪", title: "坚持就是胜利", text: "你已经走在了成功的路上，继续前进！" },
            { emoji: "🎯", title: "目标明确", text: "今天的目标：背完这个章节！你可以的！" }
        ],
        milestone: [
            { emoji: "🎉", title: "里程碑达成！", text: "恭喜你完成了一个章节的学习，离雅思高分又近了一步！" },
            { emoji: "🏆", title: "太棒了！", text: "你已经掌握了100个单词，继续保持这个节奏！" },
            { emoji: "⭐", title: "闪耀时刻", text: "连续学习7天，你的坚持让人敬佩！" },
            { emoji: "🚀", title: "突飞猛进", text: "500个单词已掌握，你的词汇量正在飞速增长！" },
            { emoji: "👑", title: "词汇王者", text: "1000个单词！你已经超越了大多数人！" },
            { emoji: "🎓", title: "学霸认证", text: "2000个单词！雅思7分指日可待！" },
            { emoji: "🏅", title: "终极成就", text: "全部单词学完！你准备好征服雅思了吗？" }
        ],
        encouragement: [
            "记住，每一个单词都是通往成功的阶梯。",
            "今天的努力，是明天的高分。",
            "相信自己，你比想象中更强大。",
            "困难只是暂时的，放弃才是永远的。",
            "你的坚持，终将美好。",
            "每一个单词，都是未来的礼物。"
        ]
    },

    // 马斯克语录
    muskQuotes: [
        "When something is important enough, you do it even if the odds are not in your favor.",
        "Persistence is very important. You should not give up unless you are forced to give up.",
        "I think it's possible for ordinary people to choose to be extraordinary.",
        "The first step is to establish that something is possible; then probability will occur.",
        "Don't confuse schooling with education. I didn't go to Harvard, but the people that work for me did.",
        "Failure is an option here. If things are not failing, you are not innovating enough.",
        "I could either watch it happen or be a part of it.",
        "Take risks now and do something bold. You won't regret it.",
        "If you get up in the morning and think the future is going to be better, it is a bright day.",
        "I don't ever give up. I'd have to be dead or completely incapacitated.",
        "Work every waking hour. That's what it takes.",
        "Great companies are built on great products.",
        "Innovation distinguishes between a leader and a follower.",
        "The only way to do great work is to love what you do.",
        "Stay hungry, stay foolish."
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vocabularyData;
}
