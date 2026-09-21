// 机场服务资料库（/recommend/ 目录与详情页的数据来源）。
// 铁律：这里只放"有来源"的资料，不放任何本站没有做过的测速、评分、稳定率、用户数。
// sourceLevel: official = 官网/联盟页面展示；third = 第三方公开资料整理；entry = 仅确认官方入口可访问。
// 品牌顺序固定：无忧链接 > 微风网络 > 飞猫云 > Firefly > 光速云 > 暮光加速 > 星岛梦 > 宇宙云 > 灵猫网络 > 闪跃 > 唯兔云。

export type SourceLevel = 'official' | 'third' | 'entry';

export interface Plan {
  name: string;
  billing: string;
  traffic: string;
  price: string;
  note?: string;
}

export interface Service {
  id: string;
  name: string;
  /** 详情页路径；没有独立详情页的（资料有限）为空 */
  page?: string;
  aff: string;
  sourceLevel: SourceLevel;
  sourceLabel: string;
  mark: string;
  hue: number;
  tagline: string;
  tags: string[];
  /** 起步月均价（元），口径不同，仅用于目录排序参考 */
  startMonthly?: number;
  priceText: string;
  priceBasis: string;
  line: string;
  protocols: string;
  nodes: string;
  client: string;
  extra?: { label: string; value: string }[];
  fit: string;
  caution: string;
  overview: string[];
  pros: string[];
  cons: string[];
  checkFirst: string[];
  plans: Plan[];
  faq: { q: string; a: string }[];
  /** 详情页“相邻服务”推荐 */
  neighbors: string[];
  description: string;
}

export const DATA_DATE = '2026-09-21';

export const services: Service[] = [
  {
    id: 'wuyou',
    name: '无忧链接',
    page: '/airport/wuyou/',
    aff: 'https://vip02.worryfreeaff.com/#/?code=XT1WDPvr',
    sourceLevel: 'official',
    sourceLabel: '官网价格页 + 联盟页面展示信息',
    mark: '无',
    hue: 42,
    tagline: '三档套餐一目了然，官网价格页 ¥6/月起，适合先小额试用再决定',
    tags: ['IPLC 专线', 'VLESS / Trojan / Hysteria2', '月付起步', '本站重点介绍'],
    startMonthly: 6,
    priceText: '¥6/月起（40GB）',
    priceBasis: '官网价格页 · 月付',
    line: '官网价格页标注“全 IPLC 专线”；联盟页面另有 IPLC / IEPL 的表述',
    protocols: 'VLESS / Trojan / Hysteria2（联盟页面展示，官网价格页未列出）',
    nodes: '香港、日本、新加坡、美国（联盟页面展示）',
    client: 'Clash 系、Shadowrocket、v2rayN / v2rayNG、Surge 等主流客户端（官网与联盟页面表述）',
    extra: [
      { label: '退款', value: '官网价格页：购买后 72 小时内符合条件可申请退款' },
      { label: '支付方式', value: '支付宝、微信支付，以及 USDT 等加密货币（官网价格页）' },
    ],
    fit: '第一次接触机场、想从小套餐试用、看重价格透明度的用户',
    caution: '官网价格页与联盟页面对 MINI 档的计费口径不一致；另有资料提到通用订阅入口曾暂时关闭、需使用官方客户端；本站没有做过实测。',
    overview: [
      '无忧链接是本站目前重点介绍的机场服务。官网价格页在 2026-09-21 展示三档套餐：MINI 链接 ¥6/月（40GB）、舒心链接 ¥19/月（100GB，官网标注“强烈推荐”）、省心链接 ¥33/月（200GB），线路标注为“全 IPLC 专线”。',
      '联盟页面（本站的注册入口）展示的资料略有不同：MINI 档写作按年计费约 ¥79/年，协议列为 VLESS、Trojan、Hysteria2，节点地区为香港、日本、新加坡、美国。两处口径并不完全一致，所以本站把两个来源分开写，购买前请以下单页面为准。',
    ],
    pros: ['三档梯度清晰，入门价格低，适合先试用', '官网价格页把价格、流量、线路类型写得比较直白', '官网价格页写明 72 小时内符合条件可申请退款'],
    cons: ['官网价格页与联盟页面对 MINI 档的计费周期说法不同', '本站没有做过独立测速，稳定性无法给出第一手结论', '通用订阅入口是否可用，请以官方最新说明为准'],
    checkFirst: [
      '结算页上 MINI 档到底是按月还是按年计费，以及是否参与折扣。',
      '订阅是通用订阅链接，还是需要官方客户端才能导入。',
      '“72 小时内符合条件可申请退款”里的“条件”具体是什么，向客服确认后再付款。',
    ],
    plans: [
      { name: 'MINI 链接', billing: '月付', traffic: '40GB/月', price: '¥6/月', note: '官网价格页口径；联盟页面另写作约 ¥79/年' },
      { name: '舒心链接', billing: '月付', traffic: '100GB/月', price: '¥19/月', note: '官网标注“强烈推荐”' },
      { name: '省心链接', billing: '月付', traffic: '200GB/月', price: '¥33/月' },
    ],
    faq: [
      { q: '无忧链接的价格到底以哪个为准？', a: '本站列出了两个来源：官网价格页（2026-09-21 核对）显示 MINI ¥6/月，联盟页面资料则把 MINI 写作按年约 ¥79/年。两者口径不同，实际以你在结算页看到的周期和价格为准。' },
      { q: '本站有无忧链接的实测数据吗？', a: '没有。本站目前没有对它做独立的速度、延迟、丢包测试，页面上的线路和协议都是官方或联盟页面的表述。' },
      { q: '第一次买应该选哪一档？', a: '如果只是想验证线路和客户端是否好用，可以先选最便宜的月付周期；确认能用再考虑更大流量档位。具体判断方法见《机场怎么选》系列文章。' },
    ],
    neighbors: ['weifeng', 'feimao', 'firefly'],
    description: '无忧链接怎么样：官网价格页三档套餐（¥6/月起）、IPLC 线路、协议与客户端、购买前要确认的事项，官网资料与本站观察分开标注。',
  },
  {
    id: 'weifeng',
    name: '微风网络',
    page: '/recommend/weifeng/',
    aff: 'https://wep01.breezenetaff.com/#/?code=XzOO248D',
    sourceLevel: 'third',
    sourceLabel: '第三方资料整理',
    mark: '微',
    hue: 205,
    tagline: '入门档流量额度较大，第三方资料宣称采用 IEPL 专线',
    tags: ['IEPL 专线', '年付', '100GB 入门档'],
    startMonthly: 11,
    priceText: '约 ¥11/月起（100GB）',
    priceBasis: '年付折算',
    line: 'IEPL 专线（第三方资料）',
    protocols: '第三方资料未列出具体协议',
    nodes: '香港、新加坡、日本、美国（第三方资料）',
    client: '资料未列出',
    fit: '想要 IEPL 定位、看重较大流量额度的入门用户',
    caution: '官方入口需要先注册账户才能查看完整套餐，本站没有创建账户核实；第三方页面里的测速数据标注为“整理中”，没有可引用的数字。',
    overview: [
      '微风网络在第三方资料里被归为入门级机场，宣称采用 IEPL 专线，入门档约 ¥11/月起，含 100GB 流量，按年付折算。',
      '这一档在资料里的特点是流量额度相对大，而不是价格最低。资料没有列出具体协议和客户端，也没有可引用的测速数字，所以下面的信息更适合用来“筛选候选”，而不是直接下结论。',
    ],
    pros: ['入门档流量额度较大（100GB）', '第三方资料宣称采用 IEPL 专线', '节点地区覆盖港、新、日、美'],
    cons: ['需要先注册账户才能看到完整套餐，本站未核实', '协议、客户端资料缺失', '第三方页面的测速数据仍在“整理中”'],
    checkFirst: [
      '注册后在结算页确认套餐周期：资料里的价格是按年折算的。',
      '向客服确认支持的协议与客户端，资料里没有写。',
      'IEPL 是服务商说法，可以用本站《机场应该测试哪些指标》的方法自己测一次。',
    ],
    plans: [{ name: '入门档', billing: '年付', traffic: '100GB', price: '约 ¥11/月', note: '第三方资料，折算口径' }],
    faq: [
      { q: '为什么微风网络的价格看起来比别家高？', a: '资料里它的入门档含 100GB，额度比同类年付入门档大；如果只看每月价格，它不是最低，但每 GB 成本要结合自己的用量再算。' },
      { q: '不注册能看到套餐吗？', a: '本站核对时官方入口需要先注册账户，因此没有创建账户核实完整套餐，这也是本页资料标为“第三方整理”的原因。' },
    ],
    neighbors: ['wuyou', 'feimao', 'guangsu'],
    description: '微风网络套餐与线路资料整理：第三方资料显示 IEPL 专线、约 ¥11/月起的 100GB 入门档，含购买前需要核对的事项与资料来源说明。',
  },
  {
    id: 'feimao',
    name: '飞猫云',
    page: '/recommend/feimao/',
    aff: 'https://flycat1.flycatvipaff.cc/#/?code=sTn3w676',
    sourceLevel: 'third',
    sourceLabel: '第三方资料整理（两个独立来源价格互相印证）',
    mark: '猫',
    hue: 18,
    tagline: '入门价约 ¥7/月，两个独立第三方来源对价格的描述基本一致',
    tags: ['IPLC 专线', 'SS / Trojan / VLESS', '50GB 入门档'],
    startMonthly: 7,
    priceText: '约 ¥7/月起（50GB）',
    priceBasis: '第三方资料；年付约 ¥84',
    line: '宣称全线 IPLC 专线，单节点峰值 2.5Gbps（服务商宣称）',
    protocols: 'Shadowsocks / Trojan / VLESS（第三方资料）',
    nodes: '资料未列出完整地区',
    client: '资料未列出',
    fit: '预算有限、想用低价入门套餐尝试 IPLC 线路的用户',
    caution: '资料来自第三方转引，本站没有通过官方入口核实，也没有本站测试数据；具体套餐以官网结算页为准。',
    overview: [
      '飞猫云的入门档在第三方资料里约 ¥7/月、含 50GB，年付约 ¥84。本站找到两个相互独立的来源，对入门价的描述基本一致，这是它在资料层面相对可靠的一点。',
      '线路方面，服务商宣称全线 IPLC 专线、单节点峰值 2.5Gbps，这些是服务商的说法，没有本站的验证。协议方面，第三方资料记录了 Shadowsocks、Trojan 与 VLESS。',
    ],
    pros: ['入门价格低，价格资料有两个独立来源相互印证', '资料记录的协议较多（SS、Trojan、VLESS）', '宣称全线 IPLC 专线'],
    cons: ['节点地区、客户端资料缺失', '资料来自第三方转引，未经本站官方渠道核实', '“峰值 2.5Gbps”是服务商宣称，不是测速结果'],
    checkFirst: [
      '结算页上的 50GB 档是月付还是按年折算，与资料是否一致。',
      '向客服确认节点地区列表，资料里没有完整地区。',
      '把“单节点峰值”当作宣传参数，实际速度要自己在常用时段测。',
    ],
    plans: [{ name: '入门档', billing: '月付 / 年付', traffic: '50GB', price: '约 ¥7/月；年付约 ¥84', note: '两个独立第三方来源描述一致' }],
    faq: [
      { q: '飞猫云的 2.5Gbps 是实测速度吗？', a: '不是。这是服务商对单节点峰值的宣称，本站没有做过测速，也不建议把峰值带宽等同于你实际能跑到的速度。' },
      { q: '价格资料可靠吗？', a: '两个相互独立的第三方来源对入门价描述基本一致，可信度比单一来源略高，但仍以官网结算页为准。' },
    ],
    neighbors: ['wuyou', 'lingmao', 'firefly'],
    description: '飞猫云套餐资料整理：约 ¥7/月起的 50GB 入门档、宣称的 IPLC 专线与协议，两个独立第三方来源价格互相印证，附购买前核对事项。',
  },
  {
    id: 'firefly',
    name: 'Firefly',
    page: '/recommend/firefly/',
    aff: 'https://vip02.fireflyaff.com/#/?code=Rmc0fhp4',
    sourceLevel: 'third',
    sourceLabel: '第三方资料整理（两个独立来源价格互相印证）',
    mark: 'F',
    hue: 160,
    tagline: '主打 IPLC 专线，年付折算约 ¥8/月，价格描述在两个来源中一致',
    tags: ['IPLC 专线', 'VLESS', '年付', '60GB 入门档'],
    startMonthly: 8,
    priceText: '年付约 ¥8/月起（60GB）',
    priceBasis: '年付折算',
    line: 'IPLC 专线（第三方资料）',
    protocols: 'VLESS（第三方资料转述服务商说法）',
    nodes: '香港、新加坡、日本、台湾（第三方资料）',
    client: '资料未列出',
    fit: '看重 IPLC 定位、能接受年付的用户',
    caution: '测速与解锁描述均来自第三方，未经本站实测；部分描述在不同服务商页面之间高度相似，建议谨慎参考。',
    overview: [
      'Firefly 在第三方资料里主打 IPLC 专线，入门档年付折算约 ¥8/月，含 60GB。两个相互独立的来源对价格的描述一致。',
      '资料显示节点覆盖香港、新加坡、日本、台湾，协议为 VLESS（转述服务商说法）。值得注意的是，这类页面里的解锁、测速描述常与其他服务商高度相似，本站没有把它们当作事实使用。',
    ],
    pros: ['价格描述在两个独立来源中一致', 'IPLC 定位，节点覆盖港、新、日、台', '入门档流量 60GB'],
    cons: ['按年计费，试错成本比月付高', '测速与解锁描述来自第三方，未经本站验证', '客户端资料缺失'],
    checkFirst: [
      '是否提供月付选项：资料里的价格是年付折算。',
      '向客服确认支持的客户端与订阅格式。',
      '解锁类描述先当作宣传，用自己需要的服务实际登录测一次。',
    ],
    plans: [{ name: '入门档', billing: '年付', traffic: '60GB', price: '约 ¥8/月', note: '折算口径，两个独立来源描述一致' }],
    faq: [
      { q: 'Firefly 适合先买一年吗？', a: '本站不建议直接买长周期。资料里的价格按年折算，如果服务商有更短周期，先短周期验证线路和客户端，再决定是否升级。' },
      { q: '为什么强调“描述高度相似”？', a: '不同服务商页面里的测速、解锁描述有时几乎一样，说明它们可能来自同一来源或模板，参考价值有限，所以本站不把这类描述当作已验证事实。' },
    ],
    neighbors: ['wuyou', 'shanyue', 'feimao'],
    description: 'Firefly 机场资料整理：年付折算约 ¥8/月起的 60GB 入门档、IPLC 专线、VLESS 协议与节点地区，第三方资料标注来源，含购买前核对事项。',
  },
  {
    id: 'guangsu',
    name: '光速云',
    page: '/recommend/guangsuyun/',
    aff: 'https://sahude.gsyvipaff.com/#/?code=cD14nZYf',
    sourceLevel: 'third',
    sourceLabel: '第三方资料转述',
    mark: '光',
    hue: 268,
    tagline: '第三方资料称 2020 年开业，以官方自研客户端为主',
    tags: ['IEPL + 企业级内网专线', 'VLESS', '自研客户端'],
    startMonthly: 7.5,
    priceText: '年付折算约 ¥7.5/月起（59GB）',
    priceBasis: '年付折算；另有新人优惠码（约 8 折，以官网为准）',
    line: 'IEPL + 企业级内网专线（第三方资料）',
    protocols: 'VLESS（第三方资料）',
    nodes: '资料未列出完整地区',
    client: '自研客户端为主，使用第三方客户端需联系客服（第三方资料）',
    fit: '愿意使用官方自研客户端、看重运营年限的用户',
    caution: '资料来自另一个友情站点的转述，不是本站直接核实，也不是本站实测；优惠码是否有效以官网为准。',
    overview: [
      '光速云在第三方资料里被描述为 2020 年开业的老牌综合型机场，入门档年付折算约 ¥7.5/月、含 59GB，据介绍有约 8 折的新人优惠码。',
      '它和其他几家最大的不同是客户端：资料称以官方自研客户端为主，想用 Clash 等第三方客户端需要联系客服。如果你已经习惯自己的客户端，这一点要先确认。',
    ],
    pros: ['资料称运营时间较长（2020 年开业）', '线路描述为 IEPL 加企业级内网专线', '年付折算价格有竞争力'],
    cons: ['以自研客户端为主，第三方客户端需联系客服', '资料是转述，未经本站直接核实', '节点地区资料缺失'],
    checkFirst: [
      '能否导入到你常用的客户端，还是必须用官方客户端。',
      '优惠码的规则与有效期，以官网为准。',
      '“2020 年开业”是第三方说法，可以自己搜索验证运营历史。',
    ],
    plans: [{ name: '入门档', billing: '年付', traffic: '59GB', price: '约 ¥7.5/月', note: '折算口径；新人优惠码约 8 折（以官网为准）' }],
    faq: [
      { q: '光速云可以用 Clash 吗？', a: '资料称以自研客户端为主、第三方客户端需要联系客服，本站没有核实。如果你必须用自己的客户端，购买前先问清楚。' },
      { q: '“2020 年开业”可信吗？', a: '这是第三方转述的说法，本站没有独立核实。运营年限只能说明它存活得久，并不直接等于线路好用。' },
    ],
    neighbors: ['wuyou', 'weifeng', 'yuzhou'],
    description: '光速云资料整理：第三方资料称 2020 年开业、IEPL 加企业级内网专线、自研客户端为主，年付折算约 ¥7.5/月起，附购买前确认事项。',
  },
  {
    id: 'muguang',
    name: '暮光加速',
    aff: 'https://varnexa.twilightaff.com/#/?code=sdiwT8nj',
    sourceLevel: 'entry',
    sourceLabel: '仅确认官方入口可访问',
    mark: '暮',
    hue: 330,
    tagline: '公开资料有限，本站目前只确认官方入口可以访问（又称暮光网络）',
    tags: ['资料有限'],
    priceText: '暂无可核实的公开资料',
    priceBasis: '—',
    line: '暂无可核实的公开资料',
    protocols: '暂无可核实的公开资料',
    nodes: '暂无可核实的公开资料',
    client: '暂无可核实的公开资料',
    fit: '想自己到官网查看最新套餐再决定的用户',
    caution: '官方入口先经过“线路检测”页面再进入账户注册页，本站没有创建账户，无法给出套餐、价格、节点等结论。',
    overview: [],
    pros: [],
    cons: [],
    checkFirst: [],
    plans: [],
    faq: [],
    neighbors: [],
    description: '暮光加速公开资料有限，本站仅确认官方入口可访问。',
  },
  {
    id: 'xingdao',
    name: '星岛梦',
    aff: 'https://kfccbb.xingdaomeng.com/#/?code=yyH19CtQ',
    sourceLevel: 'entry',
    sourceLabel: '仅确认官方入口可访问',
    mark: '岛',
    hue: 190,
    tagline: '公开资料有限，本站目前只确认官方入口会跳转到账户注册页',
    tags: ['资料有限'],
    priceText: '暂无可核实的公开资料',
    priceBasis: '—',
    line: '暂无可核实的公开资料',
    protocols: '暂无可核实的公开资料',
    nodes: '暂无可核实的公开资料',
    client: '暂无可核实的公开资料',
    fit: '想自己到官网查看最新套餐再决定的用户',
    caution: '官方入口会跳转到账户注册页，本站没有创建账户，无法给出套餐、价格、节点等结论。',
    overview: [],
    pros: [],
    cons: [],
    checkFirst: [],
    plans: [],
    faq: [],
    neighbors: [],
    description: '星岛梦公开资料有限，本站仅确认官方入口可访问。',
  },
  {
    id: 'yuzhou',
    name: '宇宙云',
    page: '/recommend/yuzhouyun/',
    aff: 'https://wzjc.yuzoucloud.cc/#/?code=neQj0Arj',
    sourceLevel: 'third',
    sourceLabel: '第三方资料转述',
    mark: '宇',
    hue: 250,
    tagline: '第三方资料称节点数量多、主打企业级内网专线，采用不限时套餐设计',
    tags: ['企业级内网专线', '70+ 节点（第三方资料）', '不限时套餐'],
    priceText: '不限时套餐设计，具体价格以官网为准',
    priceBasis: '资料未给出价格',
    line: '企业级内网专线（第三方资料）',
    protocols: '第三方资料未列出具体协议',
    nodes: '70+ 个节点（第三方资料）',
    client: '自研客户端；支持导入第三方订阅，需联系在线客服（第三方资料）',
    fit: '预算相对充足、希望节点选择多、关注流媒体与 AI 使用场景的用户',
    caution: '流媒体、AI 平台解锁均为第三方资料的宣称，本站没有实测；资料来自友情站点转述，未经本站官方渠道核实。',
    overview: [
      '宇宙云在第三方资料里被归为综合旗舰型：节点数量在 70 个以上，主打企业级内网专线，套餐采用不限时设计。',
      '资料没有给出具体价格，这一点和前面几家不同——你需要自己到官网核对。资料还称可解锁主流流媒体与部分 AI 平台，这些是宣称，本站没有验证。',
    ],
    pros: ['第三方资料称节点数量较多', '不限时套餐设计，流量不按月清零（以官网为准）', '支持导入第三方订阅（需联系客服）'],
    cons: ['资料没有给出价格', '解锁能力只是宣称，没有验证', '需联系客服才能导入第三方订阅'],
    checkFirst: [
      '不限时套餐的价格、流量额度、有效期，全部以官网结算页为准。',
      '想用自己的客户端时，先联系客服确认订阅格式。',
      '“70+ 节点”是数量宣称，不代表每个节点都适合你的常用地区。',
    ],
    plans: [],
    faq: [
      { q: '宇宙云的价格是多少？', a: '本站找到的第三方资料没有给出具体价格，只说明采用不限时套餐设计，因此不在这里写数字，请以官网结算页为准。' },
      { q: '“不限时”是不是永远有效？', a: '“不限时”通常指流量不按月清零，不等于服务永久存在，任何机场都有运营风险，建议不要一次性买过大额度。' },
    ],
    neighbors: ['guangsu', 'wuyou', 'lingmao'],
    description: '宇宙云资料整理：第三方资料称 70+ 节点、企业级内网专线与不限时套餐设计，解锁能力为宣称，含购买前确认事项与来源说明。',
  },
  {
    id: 'lingmao',
    name: '灵猫网络',
    page: '/recommend/lingmao/',
    aff: 'https://kshare.civetnettttt.homes/#/?code=0BJsagiX',
    sourceLevel: 'third',
    sourceLabel: '第三方资料整理（协议描述存在冲突）',
    mark: '灵',
    hue: 95,
    tagline: '年付入门约 ¥7.1/月，但不同来源对协议的说法互相矛盾',
    tags: ['IPLC 专线', '年付', '协议描述冲突'],
    startMonthly: 7.1,
    priceText: '年付约 ¥7.1/月起（45GB）',
    priceBasis: '年付折算',
    line: 'IPLC 专线（第三方资料宣称）',
    protocols: '来源冲突：服务商文案称“新 SS 协议”，测速截图显示 VLESS',
    nodes: '资料未列出完整地区',
    client: '资料未列出',
    fit: '价格敏感、并愿意在购买前向客服确认协议类型的用户',
    caution: '协议描述前后矛盾，本站无法判断实际使用哪种协议，建议先向官方客服确认。',
    overview: [
      '灵猫网络的入门档年付折算约 ¥7.1/月、含 45GB，第三方资料称采用 IPLC 专线。',
      '需要单独提醒的是协议：服务商文案说是“新 SS 协议”，而测速截图里显示的是 VLESS，两个来源互相矛盾。本站没有办法判断哪个是实际情况，所以这里不选边，只把矛盾如实写出来。',
    ],
    pros: ['入门价格低', '宣称 IPLC 专线', '资料里明确了价格与流量档位'],
    cons: ['协议描述前后矛盾', '节点地区、客户端资料缺失', '按年计费'],
    checkFirst: [
      '购买前先问客服实际使用的协议，并要求给出书面说明。',
      '你的客户端是否支持它使用的协议：SS 系与 VLESS 的客户端支持并不完全相同。',
      '按年计费的部分，先确认是否有更短周期可以试用。',
    ],
    plans: [{ name: '入门档', billing: '年付', traffic: '45GB', price: '约 ¥7.1/月', note: '折算口径' }],
    faq: [
      { q: '灵猫网络到底用什么协议？', a: '不同来源说法不一致：服务商文案称“新 SS 协议”，测速截图显示 VLESS。本站无法判断，建议购买前向客服确认。' },
      { q: '协议不明会影响使用吗？', a: '会。不同协议对客户端的支持不同，买之前确认协议，才知道你手上的客户端能不能用。' },
    ],
    neighbors: ['feimao', 'shanyue', 'wuyou'],
    description: '灵猫网络资料整理：年付约 ¥7.1/月起的 45GB 入门档，第三方资料称 IPLC 专线，但协议描述存在冲突，附购买前需向客服确认的事项。',
  },
  {
    id: 'shanyue',
    name: '闪跃',
    page: '/recommend/shanyue/',
    aff: 'https://wep01.flashleapaff.com/#/?code=D3N30Gco',
    sourceLevel: 'third',
    sourceLabel: '第三方资料整理',
    mark: '闪',
    hue: 60,
    tagline: '第三方资料显示节点覆盖港、新、日、台、美五个地区，年付约 ¥8/月',
    tags: ['IPLC + 骨干网接入', '年付', '含美国节点'],
    startMonthly: 8,
    priceText: '年付约 ¥8/月起（60GB）',
    priceBasis: '年付折算',
    line: 'IPLC 专线与骨干网接入（第三方资料）',
    protocols: '资料未列出',
    nodes: '香港、新加坡、日本、台湾、美国（第三方资料）',
    client: '资料未列出',
    fit: '想要覆盖美国节点、能接受年付的用户',
    caution: '官方入口为验证码校验页，本站未能进一步核实；测速与解锁描述来自第三方，未经本站实测。',
    overview: [
      '闪跃在第三方资料里采用 IPLC 专线与骨干网接入，入门档年付折算约 ¥8/月、含 60GB，节点覆盖香港、新加坡、日本、台湾、美国五个地区。',
      '和同价位的几家相比，资料里明确写到了美国节点，这是它的差异点。本站访问官方入口时看到的是验证码校验页，没有进一步核实，所以这一页仍以第三方资料为准。',
    ],
    pros: ['资料里节点覆盖五个地区，包含美国', '入门档 60GB，年付折算价格较低', 'IPLC 加骨干网接入的组合描述'],
    cons: ['官方入口为验证码页，本站未能进一步核实', '协议、客户端资料缺失', '按年计费'],
    checkFirst: [
      '是否有月付选项，先短周期验证再决定。',
      '美国节点的具体线路类型与地区数量，向客服确认。',
      '测速与解锁描述先当宣传，自己实际测。',
    ],
    plans: [{ name: '入门档', billing: '年付', traffic: '60GB', price: '约 ¥8/月', note: '折算口径' }],
    faq: [
      { q: '闪跃适合需要美国节点的人吗？', a: '第三方资料显示它包含美国节点，但节点数量、线路类型和稳定性都没有验证，需要美国节点的话购买前先向客服确认。' },
      { q: '为什么本站没有更多资料？', a: '访问官方入口时先出现验证码校验页，本站没有继续操作，所以只能依据第三方资料整理。' },
    ],
    neighbors: ['firefly', 'lingmao', 'wuyou'],
    description: '闪跃机场资料整理：第三方资料显示 IPLC 加骨干网接入、覆盖港新日台美五个地区、年付约 ¥8/月起的 60GB 入门档，附核对事项与来源说明。',
  },
  {
    id: 'weitu',
    name: '唯兔云',
    aff: 'https://fast.v2yunvipaff.com/#/?code=22gEFKAn',
    sourceLevel: 'entry',
    sourceLabel: '仅确认官方入口可访问',
    mark: '兔',
    hue: 300,
    tagline: '公开资料有限，本站目前只确认官方入口是账户注册页',
    tags: ['资料有限'],
    priceText: '暂无可核实的公开资料',
    priceBasis: '—',
    line: '暂无可核实的公开资料',
    protocols: '暂无可核实的公开资料',
    nodes: '暂无可核实的公开资料',
    client: '暂无可核实的公开资料',
    fit: '想自己到官网查看最新套餐再决定的用户',
    caution: '官方入口是账户注册页，本站没有创建账户，无法给出套餐、价格、节点等结论。',
    overview: [],
    pros: [],
    cons: [],
    checkFirst: [],
    plans: [],
    faq: [],
    neighbors: [],
    description: '唯兔云公开资料有限，本站仅确认官方入口可访问。',
  },
];

export const byId = (id: string) => services.find((s) => s.id === id)!;
export const withPage = services.filter((s) => s.page);
export const limited = services.filter((s) => !s.page);
export const sourceBadge: Record<SourceLevel, string> = {
  official: '官方/联盟页面资料',
  third: '第三方资料整理',
  entry: '仅确认入口可访问',
};
