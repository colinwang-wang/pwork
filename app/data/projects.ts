export type Project = {
  slug: string
  title: string
  subtitle: string
  category: 'education' | 'health' | 'ecommerce' | 'corporate' | 'automotive' | 'ai'
  categoryLabel: string
  tags: string[]
  status: '已上线' | '开发中' | '开源'
  featured: boolean
  images: string[]
  background: string
  features: string[]
  techStack: string[]
  duration: string
  highlights: { title: string; desc: string }[]
}

export const projects: Project[] = [
  {
    slug: 'ylp-health',
    title: '元力熊-运动康复SaaS',
    subtitle: '运动康复门店数字化管理平台',
    category: 'health',
    categoryLabel: '医疗健康',
    tags: ['Go', 'React', '微信小程序', 'Docker'],
    status: '已上线',
    featured: true,
    images: ['/projects/ylp-health/01.png', '/projects/ylp-health/02.png', '/projects/ylp-health/03.jpg', '/projects/ylp-health/04.png'],
    background:
      '为连锁运动康复门店打造的一站式数字化管理平台。覆盖会员管理、预约排班、储值卡/次卡消费、开单收银等核心场景，支持多门店独立运营。小程序端面向C端用户提供在线预约、康复计划跟踪、活动报名等功能，管理后台为门店提供完整的运营数据看板与员工管理能力。已服务2500+真实客户。',
    features: [
      '多门店会员管理与微信一键登录',
      '储值卡/次卡/年卡体系，支持跨卡扣费',
      '在线预约与智能排班系统',
      '收钱吧聚合支付（微信/支付宝/现金）',
      '康复计划制定与视频指导',
      '活动运营与首页Banner管理',
      '运营数据报表与统计分析',
    ],
    techStack: ['Go', 'Gin', 'GORM', 'MySQL', 'Redis', 'React', 'Ant Design', '微信小程序', 'COS', 'Docker'],
    duration: '3天',
    highlights: [
      { title: '储值卡智能扣费', desc: '支持多卡余额自动轮转、本金优先于赠额扣减的复杂扣费逻辑' },
      { title: '三端协同', desc: 'Go后端+React管理台+微信小程序，统一API驱动三端业务' },
      { title: '真实运营验证', desc: '已上线运营，服务2500+客户，日均处理预约与消费订单' },
    ],
  },
  {
    slug: 'turnon',
    title: 'TurnOn-海外来华就医平台',
    subtitle: '面向国际患者的来华医疗服务平台',
    category: 'corporate',
    categoryLabel: '企业官网',
    tags: ['Go', 'AI客服', '多语言', 'MySQL'],
    status: '已上线',
    featured: true,
    images: ['/projects/turnon/02.png', '/projects/turnon/03.png', '/projects/turnon/04.png', '/projects/turnon/05.png'],
    background:
      '为海外患者提供来华就医全流程服务的平台，涵盖医院信息展示、医生资源对接、签证协助、行程规划及AI智能客服咨询。平台支持中英双语切换，针对国际用户优化了信息架构与交互流程，通过AI客服7×24小时解答就医流程、费用预估等高频问题，大幅降低跨国医疗信息壁垒。',
    features: [
      '中英双语国际化界面',
      'AI智能客服实时问答',
      '医院与医生资源展示',
      '就医流程在线引导',
      '签证与行程规划服务',
      '在线预约与咨询管理',
    ],
    techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AI大模型', '多语言i18n', 'Nginx'],
    duration: '3天',
    highlights: [
      { title: 'AI客服引擎', desc: '基于大模型的智能问答，支持中英文混合对话，覆盖就医全流程' },
      { title: '多语言架构', desc: '从UI到内容的完整国际化方案，一键切换中英文体验' },
    ],
  },
  {
    slug: 'fooder',
    title: '澜森青飨-上门私厨服务',
    subtitle: '高端上门私厨预订与管理平台',
    category: 'ecommerce',
    categoryLabel: '电商/生活',
    tags: ['Go', 'React', '微信小程序', 'AI'],
    status: '已上线',
    featured: true,
    images: ['/projects/fooder/04.png', '/projects/fooder/05.png', '/projects/fooder/01.png', '/projects/fooder/02.png', '/projects/fooder/03.png'],
    background:
      '面向高净值人群的上门私厨服务平台，用户可通过小程序浏览主厨档案、菜品套餐，在线预约私厨上门服务。平台整合AI智能推荐，根据用户口味偏好、饮食禁忌、宴请场景自动匹配菜单方案。后台为运营团队提供厨师调度、订单管理、客户CRM等完整工具链。',
    features: [
      '主厨档案与菜品套餐展示',
      'AI智能菜单推荐与搭配',
      '在线预约与时段选择',
      '厨师调度与订单管理',
      '客户偏好与饮食禁忌管理',
      '评价体系与复购营销',
      '微信支付与订单状态追踪',
    ],
    techStack: ['Go', 'Gin', 'MySQL', 'React', 'Ant Design', '微信小程序', 'AI推荐', '微信支付'],
    duration: '3天',
    highlights: [
      { title: 'AI菜单智推', desc: '根据人数、口味、场景智能生成菜品搭配方案，提升下单转化' },
      { title: '厨师智能调度', desc: '基于地理位置与档期自动匹配可用厨师，优化服务半径' },
      { title: '全流程小程序闭环', desc: '从浏览到支付到评价，用户无需跳出微信即可完成全流程' },
    ],
  },
  {
    slug: 'fly-tech',
    title: '墨宇航空-航空服务官网',
    subtitle: '航空科技企业品牌官网与业务展示',
    category: 'corporate',
    categoryLabel: '企业官网',
    tags: ['Go', 'Next.js', 'React', 'MySQL'],
    status: '已上线',
    featured: true,
    images: ['/projects/fly-tech/01.png', '/projects/fly-tech/02.png', '/projects/fly-tech/03.png'],
    background:
      '为航空科技企业打造的品牌官网，展示公司核心业务能力、服务案例、团队实力及行业资讯。采用Next.js实现SSR，确保SEO友好与首屏加载性能。后台CMS支持动态管理新闻资讯、案例展示、团队介绍等内容模块，满足企业日常运营更新需求。',
    features: [
      '响应式品牌官网设计',
      'SSR渲染保障SEO效果',
      '业务能力与案例展示',
      '新闻资讯动态管理',
      '团队成员与资质展示',
      '在线咨询与表单收集',
    ],
    techStack: ['Go', 'Gin', 'MySQL', 'Next.js', 'React', 'TailwindCSS', 'Nginx'],
    duration: '3天',
    highlights: [
      { title: 'SSR + SEO优化', desc: 'Next.js服务端渲染配合结构化数据，搜索引擎收录效果优异' },
      { title: 'CMS内容管理', desc: '后台可视化编辑器，运营人员自主管理所有展示内容' },
    ],
  },
  {
    slug: 'appeara-ai',
    title: 'AppearaAI-GEO优化平台',
    subtitle: 'AI驱动的生成式搜索引擎优化工具',
    category: 'ai',
    categoryLabel: 'AI应用',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'LangGraph'],
    status: '已上线',
    featured: true,
    images: ['/projects/appeara-ai/01.png', '/projects/appeara-ai/02.png', '/projects/appeara-ai/03.png', '/projects/appeara-ai/04.png'],
    background:
      '面向品牌方与营销团队的GEO(Generative Engine Optimization)优化平台。随着ChatGPT、Perplexity等AI搜索引擎兴起，品牌在AI回答中的可见性成为新战场。平台通过LangGraph编排多Agent工作流，自动分析品牌在AI搜索结果中的表现，生成优化建议与内容策略，帮助品牌提升在生成式搜索中的曝光率。',
    features: [
      'AI搜索结果品牌可见性分析',
      '多AI引擎对比监测（GPT/Perplexity/Gemini）',
      'LangGraph多Agent优化工作流',
      '内容优化建议自动生成',
      '竞品AI搜索表现对比',
      '优化效果追踪与报告',
      '团队协作与任务管理',
    ],
    techStack: ['Next.js', 'React', 'FastAPI', 'Python', 'PostgreSQL', 'LangGraph', 'LangChain', 'TailwindCSS'],
    duration: '3天',
    highlights: [
      { title: 'LangGraph多Agent协作', desc: '编排搜索分析、内容生成、效果评估等多个AI Agent协同工作' },
      { title: 'GEO全新赛道', desc: '针对生成式AI搜索的SEO优化，抢占AI时代流量入口' },
      { title: '数据驱动决策', desc: '量化品牌在AI回答中的出现频率与情感倾向，指导内容策略' },
    ],
  },
  {
    slug: 'edu-dp',
    title: '教育机构平台-三方交易撮合',
    subtitle: '教育行业三方交易撮合与IM系统',
    category: 'education',
    categoryLabel: '教育',
    tags: ['微信小程序', 'Go', '微信支付', 'IM'],
    status: '开发中',
    featured: true,
    images: ['/projects/edu-dp/01.png', '/projects/edu-dp/02.png'],
    background:
      '连接教育机构、教师与家长的三方撮合交易平台。机构发布课程与师资需求，教师入驻接单，家长浏览选课并完成支付。平台内置即时通讯(IM)系统支持三方实时沟通，微信支付分账能力实现资金自动结算。通过信用评价体系与智能匹配算法，提升供需对接效率。',
    features: [
      '机构/教师/家长三端小程序',
      '课程发布与智能匹配',
      '微信支付与自动分账',
      '即时通讯(IM)系统',
      '信用评价与资质认证',
      '订单全流程状态管理',
      '数据统计与结算报表',
      '消息推送与通知管理',
    ],
    techStack: ['微信小程序', 'Go', 'Gin', 'MySQL', 'Redis', '微信支付', 'WebSocket', 'IM'],
    duration: '3天',
    highlights: [
      { title: '三方撮合交易', desc: '机构-教师-家长三角色交易闭环，支持分账与自动结算' },
      { title: '实时IM通讯', desc: 'WebSocket驱动的即时消息系统，支持文字、图片、语音多种消息类型' },
      { title: '智能匹配算法', desc: '根据地理位置、科目、时间等多维度自动推荐最优师资' },
    ],
  },
  {
    slug: 'mandarin-lab',
    title: 'Mandarin Lab-海外中文学习站',
    subtitle: '面向海外用户的中文在线学习平台',
    category: 'education',
    categoryLabel: '教育',
    tags: ['Go', 'React', 'Stripe', 'PayPal'],
    status: '已上线',
    featured: false,
    images: ['/projects/mandarin-lab/01.png', '/projects/mandarin-lab/02.png'],
    background:
      '面向海外华人及中文学习者的在线教育平台，提供系统化中文课程、直播互动教学与学习社区。平台集成Stripe与PayPal双支付通道，覆盖全球主流付费方式。课程内容分级设计，从拼音启蒙到HSK备考，支持视频录播与直播双模式，满足不同学习节奏。',
    features: [
      '分级课程体系（启蒙到HSK）',
      'Stripe + PayPal全球支付',
      '视频录播与直播教学',
      '学习进度追踪与打卡',
      '课后练习与智能批改',
      '学员社区与互动问答',
    ],
    techStack: ['Go', 'Gin', 'MySQL', 'React', 'TailwindCSS', 'Stripe', 'PayPal', 'WebRTC'],
    duration: '3天',
    highlights: [
      { title: '全球支付覆盖', desc: 'Stripe+PayPal双通道，支持信用卡、借记卡及本地化支付方式' },
      { title: '沉浸式学习体验', desc: '录播+直播+练习+社区四位一体，提升学习完成率与续费率' },
    ],
  },
  {
    slug: 'xzculture',
    title: '巴塘藏戏数字博物馆',
    subtitle: '非遗藏戏文化数字化保护与传播',
    category: 'corporate',
    categoryLabel: '企业官网',
    tags: ['Go', 'React', 'Ant Design', 'Nginx'],
    status: '已上线',
    featured: false,
    images: ['/projects/xzculture/01.png', '/projects/xzculture/02.png'],
    background:
      '为四川甘孜巴塘县藏戏非物质文化遗产打造的数字博物馆，通过数字化手段保护和传播藏戏艺术。平台收录藏戏剧目、表演艺人、服饰道具、历史文献等多维度内容，支持音视频多媒体展示。面向公众提供在线参观体验，面向研究者提供文献检索与资料下载。',
    features: [
      '藏戏剧目数字化展示',
      '艺人档案与传承谱系',
      '音视频多媒体资料库',
      '历史文献与研究资料管理',
      '在线虚拟参观体验',
      '后台内容管理系统',
    ],
    techStack: ['Go', 'Gin', 'MySQL', 'React', 'Ant Design', 'Nginx', 'COS'],
    duration: '3天',
    highlights: [
      { title: '非遗数字保护', desc: '系统化收录藏戏艺术全貌，为文化传承提供数字化基础设施' },
      { title: '多媒体资料库', desc: '支持4K视频、高清图片、音频等多格式内容管理与流畅播放' },
    ],
  },
  {
    slug: 'qiyang',
    title: '启阳电子-B2B产品展示站',
    subtitle: '电子元器件B2B英文产品展示与询盘平台',
    category: 'corporate',
    categoryLabel: '企业官网',
    tags: ['Vue', 'Astro', '多语言', 'SEO'],
    status: '已上线',
    featured: false,
    images: ['/projects/qiyang/01.png', '/projects/qiyang/02.png'],
    background:
      '为电子元器件制造商打造的B2B英文产品展示站，面向海外采购商提供产品目录浏览、规格参数查询、在线询盘等功能。网站针对Google SEO深度优化，支持产品分类筛选与关键词搜索，帮助企业获取海外询盘线索。',
    features: [
      '产品目录与分类展示',
      '产品规格参数详情页',
      '在线询盘表单',
      '响应式多设备适配',
      'Google SEO优化',
      '后台产品管理',
    ],
    techStack: ['Vue', 'Astro', 'TailwindCSS', 'Nginx', 'SEO'],
    duration: '2天',
    highlights: [
      { title: 'SEO友好架构', desc: '静态站点生成+结构化数据，Google收录效果优异' },
      { title: 'B2B询盘转化', desc: '产品页内嵌询盘表单，缩短采购商决策路径' },
    ],
  },
  {
    slug: 'zioran',
    title: '知猿课堂-网课资源平台',
    subtitle: '优质网课资源付费下载与学习平台',
    category: 'education',
    categoryLabel: '教育',
    tags: ['Python', 'FastAPI', 'Vue', '支付'],
    status: '已上线',
    featured: false,
    images: ['/projects/zioran/01.png', '/projects/zioran/02.png'],
    background:
      '面向自学人群的网课资源付费下载平台，提供AIGC、编程、设计等方向的精选课程资源。平台采用金币+VIP双重付费体系，支持微信支付充值，用户可按需购买单课程或开通VIP畅享全站资源。',
    features: [
      '课程资源分类与搜索',
      '金币充值与VIP会员体系',
      '微信支付集成',
      '课程详情与评价系统',
      '用户学习记录追踪',
      '后台内容与订单管理',
    ],
    techStack: ['Python', 'FastAPI', 'Vue', 'MySQL', 'Redis', '微信支付'],
    duration: '3天',
    highlights: [
      { title: '双重付费体系', desc: '金币按课购买+VIP包月/年，灵活满足不同用户付费习惯' },
      { title: '内容分发优化', desc: '课程资源CDN加速，大文件下载稳定流畅' },
    ],
  },
]

export const categories = [
  { id: 'all', label: '全部' },
  { id: 'education', label: '教育' },
  { id: 'health', label: '医疗健康' },
  { id: 'ecommerce', label: '电商/生活' },
  { id: 'corporate', label: '企业官网' },
  { id: 'automotive', label: '汽车/工具' },
  { id: 'ai', label: 'AI应用' },
]
