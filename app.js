const weatherLocations = {
  sanFrancisco: { name: "旧金山", latitude: 37.7749, longitude: -122.4194, timezone: "America/Los_Angeles" },
  napa: { name: "Napa", latitude: 38.2975, longitude: -122.2869, timezone: "America/Los_Angeles" },
  stanford: { name: "斯坦福", latitude: 37.4275, longitude: -122.1697, timezone: "America/Los_Angeles" },
  halfMoonBay: { name: "Half Moon Bay", latitude: 37.4636, longitude: -122.4286, timezone: "America/Los_Angeles" },
  monterey: { name: "蒙特雷", latitude: 36.6002, longitude: -121.8947, timezone: "America/Los_Angeles" },
  livermore: { name: "Livermore", latitude: 37.6819, longitude: -121.7680, timezone: "America/Los_Angeles" },
  bozeman: { name: "博兹曼", latitude: 45.6770, longitude: -111.0429, timezone: "America/Denver" },
  mammothHotSprings: { name: "Mammoth Hot Springs", latitude: 44.9766, longitude: -110.7013, timezone: "America/Denver" },
  grandPrismatic: { name: "Grand Prismatic", latitude: 44.5251, longitude: -110.8382, timezone: "America/Denver" },
  oldFaithful: { name: "Old Faithful", latitude: 44.4605, longitude: -110.8281, timezone: "America/Denver" },
  yellowstoneCanyon: { name: "Yellowstone Canyon", latitude: 44.7208, longitude: -110.4966, timezone: "America/Denver" },
  lasVegas: { name: "拉斯维加斯", latitude: 36.1296, longitude: -115.1686, timezone: "America/Los_Angeles" }
};

const itinerary = [
  {
    date: "2026-06-11",
    dayLabel: "第 1 天",
    city: "旧金山",
    coverImage: "assets/sfo-arrival-sienna.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "SFO 接机后领取 Toyota Sienna，入住 Airbnb，午饭定为 The Kitchen 廚房製造。",
    transport: "6/11-6/18 旧金山段租 Toyota Sienna。女朋友妈妈乘坐 MU589，6/11 12:30 从上海浦东出发，6/11 9:05 抵达旧金山。爸妈去程机票未定。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place，住宿至 6/18 早上退房。",
    lunch: "The Kitchen 廚房製造（Millbrae）。",
    schedule: {
      morning: "SFO 接机；女朋友妈妈抵达后完成入境、取行李，并领取 Toyota Sienna。爸妈去程航班待确认。",
      afternoon: "前往 36 Henderson Place Airbnb，办理入住或寄存行李；采购饮用水、早餐和生活用品。",
      evening: "晚饭安排 Chong Qing Xiao Mian 重慶小面（San Francisco），之后回 Airbnb 休息倒时差。"
    },
    notes: "爸妈 6/3 签证，去程机票未定；确认机场接送、民宿入住时间和第一天采购清单。"
  },
  {
    date: "2026-06-12",
    dayLabel: "第 2 天",
    city: "旧金山",
    coverImage: "assets/sf-cloud-sea.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "上午 10:35 恶魔岛已预约，下午去金门桥看景，晚上 17:30 到 Redwood City 吃 Sushi Ai。",
    transport: "Toyota Sienna 自驾到旧金山市区，恶魔岛段需按码头停车和登船时间安排。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place。",
    lunch: "Dumpling Home（San Francisco）。",
    schedule: {
      morning: "恶魔岛 Alcatraz 10:35 已预约，提前到码头停车、取票或排队登船。",
      afternoon: "恶魔岛结束后安排 Dumpling Home 午饭；下午去金门桥观景点看景，可按天气选择 Battery Spencer、Golden Gate Overlook 或 Crissy Field。",
      evening: "晚饭安排 Sushi Ai（Redwood City）17:30，之后返回 Airbnb。"
    },
    notes: "恶魔岛预约时间为 10:35，需确认集合地点、停车和登船要求；金门桥看景受雾和风影响明显；Sushi Ai 预约时间为 17:30，需预留旧金山到 Redwood City 的路程和停车时间。"
  },
  {
    date: "2026-06-13",
    dayLabel: "第 3 天",
    city: "Napa / Geyserville",
    coverImage: "assets/napa-winery.png",
    weatherLocation: weatherLocations.napa,
    summary: "Napa 一日往返，重点安排 Opus One Winery，晚饭去 Geyserville 的 Cyrus。",
    transport: "Toyota Sienna 自驾从旧金山往返 Napa；酒庄预约和当天司机安排需提前确认。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place。",
    lunch: "Bouchon Bistro（Yountville）。",
    schedule: {
      morning: "从 Airbnb 出发前往 Napa，预留路上时间和酒庄停车时间。",
      afternoon: "参观 Opus One Winery；如有余力，在 Yountville 或 St. Helena 短暂停留。",
      evening: "Napa 段结束后前往 Geyserville，晚饭安排 Cyrus（Geyserville），之后返回 Airbnb。"
    },
    notes: "Opus One Winery 需提前确认预约时间；Cyrus 具体预约时间待补。当天不要安排过多酒庄，开车人需避开饮酒；晚饭后回旧金山路程较长，需预留体力和夜间驾驶时间。"
  },
  {
    date: "2026-06-14",
    dayLabel: "第 4 天",
    city: "斯坦福",
    coverImage: "assets/stanford.png",
    weatherLocation: weatherLocations.stanford,
    summary: "全天参加女朋友的斯坦福毕业典礼，午饭在 Palo Alto，晚饭安排 Macarena。",
    transport: "Toyota Sienna 自驾从旧金山前往 Stanford，出发时间按典礼入场和停车要求确认。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place。",
    lunch: "Dumpling Hours（Palo Alto）。",
    schedule: {
      morning: "前往 Stanford，参加毕业典礼相关活动。",
      afternoon: "继续毕业典礼、校园拍照和家庭会合；间隙可短逛 Stanford Shopping Center。",
      evening: "毕业晚饭安排 Macarena Restaurant（Palo Alto）。"
    },
    notes: "确认毕业典礼具体时间、地点、停车/入场规则和 Macarena Restaurant 预约。"
  },
  {
    date: "2026-06-15",
    dayLabel: "第 5 天",
    city: "Half Moon Bay",
    coverImage: "assets/half-moon-bay-horseback.png",
    weatherLocation: weatherLocations.halfMoonBay,
    summary: "只安排 Half Moon Bay，看海和骑马，晚上安排唯一一顿 Airbnb 家庭晚饭。",
    transport: "Toyota Sienna 自驾往返 Half Moon Bay。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place。",
    lunch: "Sam's Chowder House（Half Moon Bay）。",
    schedule: {
      morning: "前往 Half Moon Bay 看海，安排海边散步和观景。",
      afternoon: "Half Moon Bay 骑马；回程顺路采购家庭晚饭食材。",
      evening: "Airbnb 家庭晚饭，作为本次湾区段唯一一顿自己做饭。"
    },
    notes: "家庭晚饭只安排这一顿；骑马项目需确认预约时间、年龄/体重限制、鞋服要求和停车点。"
  },
  {
    date: "2026-06-16",
    dayLabel: "第 6 天",
    city: "蒙特雷",
    coverImage: "assets/monterey-whale-aquarium.png",
    weatherLocation: weatherLocations.monterey,
    summary: "蒙特雷 09:00 四小时观鲸已预订，下午蒙特雷水族馆，晚饭回湾区吃 In-N-Out。",
    transport: "Toyota Sienna 自驾从旧金山往返蒙特雷；09:00 观鲸需很早出发，预留停车和登船时间。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place。",
    lunch: "Old Fisherman's Grotto（Monterey）。",
    schedule: {
      morning: "参加 Whale Watching Tour From Monterey，4-Hour Whale Watching Tour 09:00，5 Adults，Booking reference BR-1405224561。",
      afternoon: "参观蒙特雷水族馆，控制节奏并预留回程时间。",
      evening: "晚饭安排 In-N-Out Burger（Daly City），之后返回 Airbnb。"
    },
    notes: "观鲸订单总额 $425.00，$85.00 x 5 Adults；页面显示将于 06/14/26 扣款。观鲸受天气和海况影响，出发前确认船班；准备防风外套和晕船药。"
  },
  {
    date: "2026-06-17",
    dayLabel: "第 7 天",
    city: "旧金山",
    coverImage: "assets/livermore-outlets.png",
    weatherLocation: weatherLocations.livermore,
    summary: "Livermore Outlets 购物和行李整理，晚上 21:00 San Ho Won 已预约。",
    transport: "Toyota Sienna 自驾前往 Livermore Outlets；确认次日还车和去 SFO 的时间；6/18 AS2062 13:56 从旧金山飞博兹曼。",
    lodging: "旧金山 Airbnb 民宿：36 Henderson Place，6/18 早上退房。",
    lunch: "In-N-Out Burger（Livermore）。",
    schedule: {
      morning: "前往 Livermore Outlets 购物，控制购物时间避免影响下午整理。",
      afternoon: "返回 Airbnb，整理行李，确认黄石段 Toyota Sienna、住宿、路线和天气。",
      evening: "San Ho Won 21:00，Reservation #EP73R444PKC，Party of 5。"
    },
    notes: "确认 AS2062 行李额度、SFO 出发航站楼、黄石段 Toyota Sienna 取车信息、保暖衣物、雨具、防晒、充电设备和证件；San Ho Won 预约已确认。"
  },
  {
    date: "2026-06-18",
    dayLabel: "第 8 天",
    city: "旧金山 / 博兹曼",
    coverImage: "assets/bozeman-sienna-transfer.png",
    weatherLocation: weatherLocations.bozeman,
    summary: "退房还车后乘 AS2062 抵达博兹曼，领取黄石段 Toyota Sienna，补给后入住 Livingston 方向 Airbnb。",
    transport: "归还 6/11-6/18 旧金山段 Toyota Sienna。Alaska Airlines AS2062，5 人同行，13:56 从旧金山出发，17:11 到达博兹曼。抵达 BZN 后领取黄石段 Toyota Sienna。",
    lodging: "Livingston / Yellowstone's Edge 方向 Airbnb 待确认。",
    lunch: "Bun Mee（SFO）。",
    schedule: {
      morning: "从 36 Henderson Place Airbnb 退房，整理行李，归还 Toyota Sienna 并前往 SFO。",
      afternoon: "在 SFO 午饭后乘坐 AS2062 飞往博兹曼，17:11 抵达 BZN 后取行李并领取黄石段 Toyota Sienna。",
      evening: "Bozeman / Belgrade 快速补给，优先买水、早餐和零食；晚饭 Copper，之后开往 Livingston / Yellowstone's Edge 方向 Airbnb 入住。"
    },
    notes: "补给点参考：REI 2220 Tschache Ln、Walmart Supercenter Bozeman、Albertsons Belgrade。确认 Copper 预约、BZN 取车柜台/停车场、第一晚 Airbnb 地址和夜间到达路线。"
  },
  {
    date: "2026-06-19",
    dayLabel: "第 9 天",
    city: "黄石公园",
    coverImage: "assets/yellowstone-mammoth-scenic.png",
    weatherLocation: weatherLocations.mammothHotSprings,
    summary: "黄石北线轻松日：Roosevelt Arch、Mammoth Hot Springs 和 Tower Fall。",
    transport: "黄石段 Toyota Sienna 自驾，从 Livingston / Yellowstone's Edge 方向前往 Gardiner 北门，再游览 Mammoth 和 Tower Fall。",
    lodging: "Livingston / Yellowstone's Edge 方向 Airbnb 待确认。",
    lunch: "Mammoth 午餐 / 休息。",
    schedule: {
      morning: "9:00 左右起床、早餐和整理；10:00 从住宿出发，经 US-89 前往 Gardiner / North Entrance，先在 Roosevelt Arch 拍照。",
      afternoon: "游览 Mammoth Hot Springs，核心看 Lower Terraces；午饭休息后前往 Tower Fall，途中可短停 Undine Falls。",
      evening: "返回 Livingston / Yellowstone's Edge 方向住宿休息；晚饭在 Yellowstone Valley Grill 或 The Fireside Room at Sage Lodge 二选一。"
    },
    notes: "Tower Fall 可按体力取舍；两家晚饭餐厅都建议确认预约。入园前检查道路开放、天气和野生动物堵车情况。"
  },
  {
    date: "2026-06-20",
    dayLabel: "第 10 天",
    city: "黄石公园",
    coverImage: "assets/yellowstone-grand-prismatic-scenic.png",
    weatherLocation: weatherLocations.grandPrismatic,
    summary: "从北门进入黄石，游览 Norris、Grand Prismatic Overlook 和 Midway Geyser Basin。",
    transport: "黄石段 Toyota Sienna 自驾，从 Yellowstone's Edge 出发，经 Gardiner、Mammoth、Norris、Madison 前往 West Yellowstone / Island Park 方向。",
    lodging: "West Yellowstone / Island Park 方向住宿待确认。",
    lunch: "Picnic 午餐 / 休息。",
    schedule: {
      morning: "起床、早餐并 check-out；从 Yellowstone's Edge 出发，经 Gardiner 短补给后前往 Norris Geyser Basin。",
      afternoon: "游览 Norris Geyser Basin，重点走 Porcelain Basin；午饭后经 Madison 前往 Grand Prismatic Overlook，再走 Midway Geyser Basin boardwalk。",
      evening: "从 Madison Junction 出西门，前往 West Yellowstone / Island Park 方向 check-in 和晚饭。"
    },
    notes: "Grand Prismatic 下午光线更适合看颜色；午饭建议提前准备，不依赖园区正式餐厅。确认当晚住宿地址和 West Yellowstone 入住时间。"
  },
  {
    date: "2026-06-21",
    dayLabel: "第 11 天",
    city: "黄石公园",
    coverImage: "assets/yellowstone-old-faithful-scenic.png",
    weatherLocation: weatherLocations.oldFaithful,
    summary: "西门进园游览 Old Faithful、West Thumb、Yellowstone Lake 和 Hayden Valley。",
    transport: "黄石段 Toyota Sienna 自驾，从 West Yellowstone 进园，经 Madison Junction、Old Faithful、West Thumb、Yellowstone Lake 前往 Hayden Valley。",
    lodging: "Canyon Lodge / Lake 区住宿待确认。",
    lunch: "Old Faithful 午餐 / 休息。",
    schedule: {
      morning: "早餐并 check-out；从 West Yellowstone 进园，前往 Old Faithful，结合喷发预测游览 Old Faithful 和 Upper Geyser Basin。",
      afternoon: "从 Old Faithful 前往 West Thumb Geyser Basin，之后沿 Yellowstone Lake 北上，在湖边停留拍照和休息。",
      evening: "傍晚进入 Hayden Valley 观察野生动物，再前往 Canyon Lodge / Lake 区 check-in、晚饭和休息。"
    },
    notes: "Old Faithful 停留时间按喷发预测调整；Hayden Valley 观察野生动物需保持距离。确认当晚住宿到底在 Canyon 还是 Lake 区。"
  },
  {
    date: "2026-06-22",
    dayLabel: "第 12 天",
    city: "黄石公园 / Livingston",
    coverImage: "assets/yellowstone-canyon-scenic.png",
    weatherLocation: weatherLocations.yellowstoneCanyon,
    summary: "Canyon Village 和黄石大峡谷核心日，傍晚回 Mammoth / Gardiner / Livingston 方向。",
    transport: "黄石段 Toyota Sienna 自驾，从 Canyon / Lake 区出发，经 Grand Canyon of the Yellowstone、Hayden Valley optional、Norris、Mammoth、Gardiner 返回 Livingston 方向。",
    lodging: "Yellowstone's Edge / Livingston 方向住宿待确认。",
    lunch: "Canyon Village 午餐 / 补给。",
    schedule: {
      morning: "早餐并 check-out；前往 Canyon Village，午餐、上厕所和补给后进入黄石大峡谷区域。",
      afternoon: "游览 Grand Canyon of the Yellowstone，以 Artist Point 和 Lookout Point 为核心；天气和体力允许时，安排 Hayden Valley 轻量车览。",
      evening: "经 Norris、Mammoth 和 Gardiner 返回 Yellowstone's Edge / Livingston 方向住宿；整理行李、加油，准备次日去 BZN。"
    },
    notes: "这天以峡谷和转场为主，不再深玩 Norris / Mammoth；确认 6/23 前往 BZN 的行车时间、还车时间和油量要求。"
  },
  {
    date: "2026-06-23",
    dayLabel: "第 13 天",
    city: "博兹曼 / 拉斯维加斯",
    coverImage: "assets/bozeman-return-sienna.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "从黄石住宿退房，开 Toyota Sienna 回博兹曼补给并还车，晚上 WN1137 抵达拉斯维加斯。",
    transport: "黄石段 Toyota Sienna 自驾至 BZN 并还车。Southwest Airlines WN1137，19:10 从博兹曼出发，20:20 到达拉斯维加斯。拉斯维加斯市内以打车为主。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    schedule: {
      morning: "从 Yellowstone's Edge / Livingston 方向住宿退房，整理黄石段行李，检查证件、充电设备和车内物品。",
      afternoon: "开往 Bozeman，按时间安排午饭或补给；前往 BZN 还车并办理 WN1137 登机。",
      evening: "20:20 抵达拉斯维加斯，打车前往 Encore at Wynn Las Vegas / 安可酒店办理入住。"
    },
    notes: "确认 WN1137 行李政策、BZN 还车时间、从 Livingston 到机场的路况缓冲、Encore 入住时间和 LAS 打车上车点。"
  },
  {
    date: "2026-06-24",
    dayLabel: "第 14 天",
    city: "拉斯维加斯",
    coverImage: "assets/las-vegas.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "拉斯维加斯第一个完整日，可安排购物、酒店设施或周边短途活动。",
    transport: "市内打车为主；如去周边景点，需另行确认包车或租车。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    schedule: {
      morning: "填写上午安排。",
      afternoon: "填写下午安排。",
      evening: "填写晚间安排。"
    },
    notes: "夏季炎热，户外活动需控制时间并准备饮水。"
  },
  {
    date: "2026-06-25",
    dayLabel: "第 15 天",
    city: "拉斯维加斯",
    coverImage: "assets/las-vegas.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "拉斯维加斯第二个完整日，继续酒店、购物或周边轻量安排。",
    transport: "市内打车为主；如去周边景点，需另行确认包车或租车。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    schedule: {
      morning: "填写上午安排。",
      afternoon: "填写下午安排或购物补给。",
      evening: "填写晚间安排，保留轻松休息时间。"
    },
    notes: "夏季炎热，户外活动需控制时间并准备饮水；确认 Encore 续住和房卡权限。"
  },
  {
    date: "2026-06-26",
    dayLabel: "第 16 天",
    city: "拉斯维加斯",
    coverImage: "assets/las-vegas.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "拉斯维加斯新增停留日，酒店不变，为次日返回旧金山预留整理时间。",
    transport: "市内打车为主，确认次日机场交通。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    schedule: {
      morning: "填写上午安排，节奏以休息和酒店内活动为主。",
      afternoon: "填写下午安排或购物补给；开始整理返回旧金山和返程行李。",
      evening: "整理行李，确认第二天飞旧金山航班、机场交通和退房时间。"
    },
    notes: "这是新增的拉斯维加斯停留日；确认 Encore 住宿覆盖至 6/27 早上退房。"
  },
  {
    date: "2026-06-27",
    dayLabel: "第 17 天",
    city: "返回旧金山",
    coverImage: "assets/san-francisco.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "从拉斯维加斯飞回旧金山，抵达后进入返程前缓冲阶段。",
    transport: "拉斯维加斯飞旧金山，航班待确认。抵达后交通待确认。",
    lodging: "旧金山酒店待确认。",
    schedule: {
      morning: "从 Encore at Wynn Las Vegas / 安可酒店退房并前往机场。",
      afternoon: "飞回旧金山，前往酒店。",
      evening: "轻松晚餐，整理返程购物和行李。"
    },
    notes: "确认航班、旧金山最后两晚住宿和机场交通。"
  },
  {
    date: "2026-06-28",
    dayLabel: "第 18 天",
    city: "旧金山",
    coverImage: "assets/san-francisco.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "旧金山返程前缓冲日，用于补充未完成安排和最终整理。",
    transport: "旧金山市内交通待确认。",
    lodging: "旧金山酒店待确认。",
    schedule: {
      morning: "填写上午安排。",
      afternoon: "填写下午安排，预留购物或收拾时间。",
      evening: "整理全部行李，确认第二天返程手续。"
    },
    notes: "检查护照、行李重量、退税或购物票据、机场交通。"
  },
  {
    date: "2026-06-29",
    dayLabel: "第 19 天",
    city: "旧金山 / 返回北京",
    coverImage: "assets/san-francisco.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "计划从旧金山返回北京，返程机票未买，具体时间待确认。",
    transport: "旧金山返回北京，航班未购买。前往 SFO 的方式待确认。",
    lodging: "返程日无住宿，除非航班改为次日。",
    schedule: {
      morning: "根据航班时间安排退房、早餐和前往机场。",
      afternoon: "办理值机、托运和安检。",
      evening: "返程飞往北京，具体时间待确认。"
    },
    notes: "这是最重要的待确认项：购买返京机票后更新航班号、起飞时间和到达时间。"
  }
];

const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdayZh = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const list = document.querySelector("#itineraryList");
const expandAllButton = document.querySelector("#expandAll");
const collapseAllButton = document.querySelector("#collapseAll");
const weatherApiUrl = "https://api.open-meteo.com/v1/forecast";
const weatherCodeLabels = {
  0: "晴",
  1: "晴间多云",
  2: "多云",
  3: "阴",
  45: "雾",
  48: "雾",
  51: "毛毛雨",
  53: "毛毛雨",
  55: "毛毛雨",
  56: "冻雨",
  57: "冻雨",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "冻雨",
  67: "冻雨",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "阵雨",
  81: "阵雨",
  82: "强阵雨",
  85: "阵雪",
  86: "强阵雪",
  95: "雷雨",
  96: "雷雨冰雹",
  99: "雷雨冰雹"
};
const wetWeatherCodes = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]);

function getDateParts(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return {
    month,
    day,
    weekday: weekdayNames[date.getDay()],
    weekdayCn: weekdayZh[date.getDay()]
  };
}

function getWeatherLabel(code) {
  return weatherCodeLabels[code] || "天气";
}

function formatDailyWeather(code, high, low, precipitationProbability) {
  if (!Number.isFinite(high) || !Number.isFinite(low)) {
    return "天气待更新";
  }

  const roundedHigh = Math.round(high);
  const roundedLow = Math.round(low);
  const label = getWeatherLabel(code);
  const shouldShowRainChance = wetWeatherCodes.has(code) || precipitationProbability >= 30;
  const rainChance = Number.isFinite(precipitationProbability) && shouldShowRainChance
    ? ` ${Math.round(precipitationProbability)}%`
    : "";

  return `${label} ${roundedHigh}°/${roundedLow}°${rainChance}`;
}

function buildWeatherByDate(data) {
  const daily = data.daily || {};
  const dates = daily.time || [];
  const codes = daily.weather_code || daily.weathercode || [];
  const highs = daily.temperature_2m_max || [];
  const lows = daily.temperature_2m_min || [];
  const rainChances = daily.precipitation_probability_max || [];
  const weatherByDate = new Map();

  dates.forEach((date, index) => {
    weatherByDate.set(date, formatDailyWeather(
      codes[index],
      highs[index],
      lows[index],
      rainChances[index]
    ));
  });

  return weatherByDate;
}

function updateWeatherForDate(date, text) {
  document.querySelectorAll(`[data-weather-date="${date}"]`).forEach((element) => {
    element.textContent = text;
  });
}

function getWeatherGroups() {
  const groups = new Map();

  itinerary.forEach((item) => {
    if (!item.weatherLocation) {
      return;
    }

    const { latitude, longitude, timezone } = item.weatherLocation;
    const key = `${latitude},${longitude},${timezone}`;

    if (!groups.has(key)) {
      groups.set(key, {
        location: item.weatherLocation,
        dates: []
      });
    }

    groups.get(key).dates.push(item.date);
  });

  return [...groups.values()];
}

async function fetchWeather(location) {
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    temperature_unit: "celsius",
    forecast_days: "16",
    timezone: location.timezone
  });
  const response = await fetch(`${weatherApiUrl}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  return response.json();
}

async function loadWeatherForecasts() {
  if (!window.fetch) {
    itinerary.forEach((item) => updateWeatherForDate(item.date, "天气暂不可用"));
    return;
  }

  await Promise.all(getWeatherGroups().map(async ({ location, dates }) => {
    try {
      const data = await fetchWeather(location);
      const weatherByDate = buildWeatherByDate(data);
      dates.forEach((date) => {
        updateWeatherForDate(date, weatherByDate.get(date) || "天气待更新");
      });
    } catch (error) {
      dates.forEach((date) => updateWeatherForDate(date, "天气暂不可用"));
    }
  }));
}

function renderSchedule(schedule) {
  return `
    <ul>
      <li><strong>上午：</strong>${schedule.morning}</li>
      <li><strong>下午：</strong>${schedule.afternoon}</li>
      <li><strong>晚上：</strong>${schedule.evening}</li>
    </ul>
  `;
}

function renderLunch(lunch) {
  if (!lunch) {
    return "";
  }

  return `
        <section class="detail-item">
          <h4>午饭</h4>
          <p>${lunch}</p>
        </section>
  `;
}

function createDayCard(item, index) {
  const parts = getDateParts(item.date);
  const detailsId = `day-details-${index + 1}`;
  const article = document.createElement("article");
  article.className = "day-card";

  article.innerHTML = `
    <button class="day-card__toggle" type="button" aria-expanded="false" aria-controls="${detailsId}">
      <span class="day-card__image-wrap">
        <img class="day-card__image" src="${item.coverImage}" alt="${item.city} 行程图片">
        <span class="day-card__badge">${parts.month}/${parts.day} ${parts.weekdayCn}</span>
      </span>
      <span class="day-card__body">
        <span class="day-card__meta">
          <span>${item.dayLabel}</span>
          <span class="day-card__weather" data-weather-date="${item.date}" aria-live="polite">天气加载中</span>
          <span class="day-card__city">${item.city}</span>
        </span>
        <span class="day-card__title">${item.date} ${parts.weekday}</span>
        <span class="day-card__summary">${item.summary}</span>
        <span class="day-card__action">查看详情</span>
      </span>
    </button>
    <div class="day-card__details" id="${detailsId}" hidden>
      <div class="detail-grid">
        <section class="detail-item">
          <h4>交通</h4>
          <p>${item.transport}</p>
        </section>
        <section class="detail-item">
          <h4>住宿</h4>
          <p>${item.lodging}</p>
        </section>
        ${renderLunch(item.lunch)}
        <section class="detail-item">
          <h4>当天安排</h4>
          ${renderSchedule(item.schedule)}
        </section>
        <section class="detail-item">
          <h4>备注</h4>
          <p>${item.notes}</p>
        </section>
      </div>
    </div>
  `;

  const toggle = article.querySelector(".day-card__toggle");
  const details = article.querySelector(".day-card__details");
  const action = article.querySelector(".day-card__action");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    details.hidden = isOpen;
    action.textContent = isOpen ? "查看详情" : "收起详情";
  });

  return article;
}

function setAllCards(open) {
  document.querySelectorAll(".day-card").forEach((card) => {
    const toggle = card.querySelector(".day-card__toggle");
    const details = card.querySelector(".day-card__details");
    const action = card.querySelector(".day-card__action");
    toggle.setAttribute("aria-expanded", String(open));
    details.hidden = !open;
    action.textContent = open ? "收起详情" : "查看详情";
  });
}

itinerary.forEach((item, index) => {
  list.appendChild(createDayCard(item, index));
});

loadWeatherForecasts();

expandAllButton.addEventListener("click", () => setAllCards(true));
collapseAllButton.addEventListener("click", () => setAllCards(false));
