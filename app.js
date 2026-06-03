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
    summary: "SFO 接机后领取 Toyota Sienna，入住 3639 Haven Avenue 公寓，午饭定为 The Kitchen 廚房製造，晚饭 Sushi Ai 17:30。",
    transport: "6/11-6/18 旧金山段租 Toyota Sienna。女朋友妈妈乘坐 MU589，6/11 12:30 从上海浦东出发，6/11 9:05 抵达旧金山。",
    lodging: "3639 Haven Avenue 公寓，住宿 6/11-6/16 晚。",
    lunch: "The Kitchen 廚房製造（Millbrae）。",
    schedule: {
      morning: "SFO 接机；女朋友妈妈抵达后完成入境、取行李，并领取 Toyota Sienna。",
      afternoon: "前往 3639 Haven Avenue 公寓，办理入住或寄存行李；采购饮用水、早餐和生活用品。",
      evening: "晚饭安排 Sushi Ai（Redwood City）17:30，之后回公寓休息倒时差。"
    },
    notes: "确认机场接送、公寓入住时间、第一天采购清单和 Sushi Ai 预约。"
  },
  {
    date: "2026-06-12",
    dayLabel: "第 2 天",
    city: "旧金山",
    coverImage: "assets/sf-cloud-sea.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "上午 10:35 恶魔岛已预约，下午旧金山市区轻松调整，晚上吃韶山印象。",
    transport: "Toyota Sienna 自驾到旧金山市区，恶魔岛段需按码头停车和登船时间安排。",
    lodging: "3639 Haven Avenue 公寓。",
    lunch: "Dumpling Home（San Francisco）。",
    schedule: {
      morning: "恶魔岛 Alcatraz 10:35 已预约，提前到码头停车、取票或排队登船。",
      afternoon: "恶魔岛结束后安排 Dumpling Home 午饭；下午在旧金山市区轻松调整，按体力回公寓休息或短逛。",
      evening: "晚饭安排韶山印象，之后返回 3639 Haven Avenue 公寓。"
    },
    notes: "恶魔岛预约时间为 10:35，需确认集合地点、停车和登船要求；晚饭前预留市区到餐厅的路程和停车时间。"
  },
  {
    date: "2026-06-13",
    dayLabel: "第 3 天",
    city: "Napa / Geyserville",
    coverImage: "assets/napa-winery.png",
    weatherLocation: weatherLocations.napa,
    summary: "Napa 一日往返，重点安排 Opus One Winery，晚饭去 Geyserville 的 Cyrus。",
    transport: "Toyota Sienna 自驾从旧金山往返 Napa；酒庄预约和当天司机安排需提前确认。",
    lodging: "3639 Haven Avenue 公寓。",
    lunch: "Bouchon Bistro（Yountville）。",
    schedule: {
      morning: "从 3639 Haven Avenue 公寓出发前往 Napa，预留路上时间和酒庄停车时间。",
      afternoon: "参观 Opus One Winery；如有余力，在 Yountville 或 St. Helena 短暂停留。",
      evening: "Napa 段结束后前往 Geyserville，晚饭安排 Cyrus（Geyserville），之后返回公寓。"
    },
    notes: "Opus One Winery 需提前确认预约时间；Cyrus 预约时间更新后同步。当天不要安排过多酒庄，开车人需避开饮酒；晚饭后回旧金山路程较长，需预留体力和夜间驾驶时间。"
  },
  {
    date: "2026-06-14",
    dayLabel: "第 4 天",
    city: "斯坦福",
    coverImage: "assets/stanford.png",
    weatherLocation: weatherLocations.stanford,
    summary: "全天参加女朋友的斯坦福毕业典礼，午饭在 Palo Alto，晚饭安排 Macarena。",
    transport: "Toyota Sienna 自驾从旧金山前往 Stanford，出发时间按典礼入场和停车要求确认。",
    lodging: "3639 Haven Avenue 公寓。",
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
    summary: "只安排 Half Moon Bay，看海和骑马，晚上安排唯一一顿公寓家庭晚饭。",
    transport: "Toyota Sienna 自驾往返 Half Moon Bay。",
    lodging: "3639 Haven Avenue 公寓。",
    lunch: "Sam's Chowder House（Half Moon Bay）。",
    schedule: {
      morning: "前往 Half Moon Bay 看海，安排海边散步和观景。",
      afternoon: "Half Moon Bay 骑马；回程顺路采购家庭晚饭食材。",
      evening: "公寓家庭晚饭，作为本次湾区段唯一一顿自己做饭。"
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
    lodging: "3639 Haven Avenue 公寓。",
    lunch: "Old Fisherman's Grotto（Monterey）。",
    schedule: {
      morning: "参加 Whale Watching Tour From Monterey，4-Hour Whale Watching Tour 09:00，3 Adults，Booking reference BR-1405224561。",
      afternoon: "参观蒙特雷水族馆，控制节奏并预留回程时间。",
      evening: "晚饭安排 In-N-Out Burger（Daly City），之后返回公寓。"
    },
    notes: "观鲸预约人数为 3 Adults，Booking reference BR-1405224561。观鲸受天气和海况影响，出发前确认船班；准备防风外套和晕船药。"
  },
  {
    date: "2026-06-17",
    dayLabel: "第 7 天",
    city: "Livermore / Half Moon Bay",
    coverImage: "assets/livermore-outlets.png",
    weatherLocation: weatherLocations.livermore,
    summary: "Livermore Outlets 购物，下午前往半月湾丽思卡尔顿，晚上 21:00 San Ho Won 已预约。",
    transport: "Toyota Sienna 自驾前往 Livermore Outlets；下午从 3639 Haven Avenue 公寓整理离开并前往半月湾酒店；6/18 AS2062 13:56 从旧金山飞博兹曼。",
    lodging: "The Ritz-Carlton, Half Moon Bay / 半月湾丽思卡尔顿酒店。",
    lunch: "In-N-Out Burger（Livermore）。",
    schedule: {
      morning: "前往 Livermore Outlets 购物，控制购物时间避免影响下午整理。",
      afternoon: "从 3639 Haven Avenue 公寓整理离开，前往 The Ritz-Carlton, Half Moon Bay / 半月湾丽思卡尔顿酒店办理入住或寄存行李；确认黄石段 Toyota Sienna、住宿、路线和天气。",
      evening: "San Ho Won 21:00，Reservation #EP73R444PKC，3 人。晚饭后返回半月湾酒店。"
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
    transport: "归还 6/11-6/18 旧金山段 Toyota Sienna。Alaska Airlines AS2062，3 人同行，13:56 从旧金山出发，17:11 到达博兹曼。抵达 BZN 后领取黄石段 Toyota Sienna。",
    lodging: "Livingston / Yellowstone's Edge 方向 Airbnb，以最终预订为准。",
    lunch: "Bun Mee（SFO）。",
    schedule: {
      morning: "从 The Ritz-Carlton, Half Moon Bay / 半月湾丽思卡尔顿酒店出发，整理行李，归还 Toyota Sienna 并前往 SFO。",
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
    lodging: "Livingston / Yellowstone's Edge 方向 Airbnb，以最终预订为准。",
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
    lodging: "West Yellowstone / Island Park 方向住宿，以最终预订为准。",
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
    lodging: "Canyon Lodge / Lake 区住宿，以最终预订为准。",
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
    lodging: "Yellowstone's Edge / Livingston 方向住宿，以最终预订为准。",
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
    summary: "从黄石住宿退房，开 Toyota Sienna 回博兹曼补给并还车，晚上 WN1137 抵达拉斯维加斯并入住 Encore。",
    transport: "黄石段 Toyota Sienna 自驾至 BZN 并还车。Southwest Airlines WN1137，19:10 从博兹曼出发，20:20 到达拉斯维加斯。拉斯维加斯市内以打车为主。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    schedule: {
      morning: "从 Yellowstone's Edge / Livingston 方向住宿退房，整理黄石段行李，检查证件、充电设备和车内物品。",
      afternoon: "开往 Bozeman，按时间安排午饭或补给；前往 BZN 还车并办理 WN1137 登机。",
      evening: "20:20 抵达拉斯维加斯，打车前往 Encore at Wynn Las Vegas / 安可酒店办理入住；不安排正式晚饭，只在 Encore / Wynn 酒店和赌场轻松走一圈。"
    },
    notes: "确认 WN1137 行李政策、BZN 还车时间、从 Livingston 到机场的路况缓冲、Encore 入住时间和 LAS 打车上车点；黄石转场后避免安排需要预约的正式晚饭。"
  },
  {
    date: "2026-06-24",
    dayLabel: "第 14 天",
    city: "拉斯维加斯",
    coverImage: "assets/las-vegas-strip-show.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "中南 Strip 购物日：Crystals、Caesars / Forum Shops，晚饭 Peter Luger，晚上 O Show。",
    transport: "市内打车为主。路线集中为 Encore → Cosmopolitan / Crystals → Caesars → Bellagio → Encore。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    lunch: "Eggslut（The Cosmopolitan，早餐/早午饭；不强行预约，早去排队）。",
    schedule: {
      morning: "从 Encore 打车到 The Cosmopolitan，早餐/早午饭安排 Eggslut；之后前往 The Shops at Crystals 购物。",
      afternoon: "继续 Crystals 购物；下午转到 Caesars Palace / Forum Shops，顺路看 Caesars 区域并控制体力。",
      evening: "晚饭安排 Peter Luger Steak House Las Vegas（Caesars Palace），建议预约 17:00-17:30；晚上看 O by Cirque du Soleil（Bellagio），建议买 21:00 场，饭后步行或打车到 Bellagio。"
    },
    notes: "Peter Luger 和 O Show 都需要提前预约/买票；如果 O Show 场次不是 21:00，晚饭时间需随之调整。夏季炎热，购物点之间尽量打车或走室内连通区域。"
  },
  {
    date: "2026-06-25",
    dayLabel: "第 15 天",
    city: "拉斯维加斯",
    coverImage: "assets/las-vegas-boulder-city.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "上午 Pro Gun Vegas，午饭按结束时间选 Ping Pang Pong 或 Weera Thai，晚上 Raku。",
    transport: "打车或包车为主。路线集中为 Encore → Boulder City / Pro Gun Vegas → Gold Coast 或 Chinatown → Encore。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    lunch: "Ping Pang Pong（金海岸 Gold Coast）或 Weera Thai Chinatown / Sahara，按 Pro Gun Vegas 结束时间决定。",
    schedule: {
      morning: "Pro Gun Vegas / Pro Gun Club，建议预约 9:00-10:00；从 Encore 出发，夏天早去更合理。",
      afternoon: "午饭在 Ping Pang Pong 或 Weera Thai 之间选择；之后回 Encore 休息，避开最热时段。",
      evening: "晚饭安排 Raku / Aburiya Raku（Chinatown / Spring Mountain），建议预约 18:00-18:30；Oyster Bar at Palace Station 只作为大家还有体力时的可选夜宵。"
    },
    notes: "Pro Gun Vegas、Raku 需要提前预约；Pro Gun 往返时间较长，午饭不要排太紧。Oyster Bar 不是必须项，避免当天行程过满。"
  },
  {
    date: "2026-06-26",
    dayLabel: "第 16 天",
    city: "拉斯维加斯",
    coverImage: "assets/las-vegas-north-strip-sphere.png",
    weatherLocation: weatherLocations.lasVegas,
    summary: "北 Strip 轻松日：Wynn / Encore、Sphere / Palazzo、Mott 32 和 Awakening。",
    transport: "市内打车为主。路线集中为 Encore / Wynn → Sphere / Venetian / Palazzo → Wynn。",
    lodging: "Encore at Wynn Las Vegas / 安可酒店。",
    lunch: "The Buffet at Wynn，建议抢 10:30-11:00 priority seating。",
    schedule: {
      morning: "早午饭安排 The Buffet at Wynn，建议 10:30-11:00；之后在 Wynn / Encore 购物和酒店内活动，少走路。",
      afternoon: "Sphere show 暂排下午或傍晚；购票前确认当天节目。如果不是想看的内容，可改为只看 Sphere 外观或取消。",
      evening: "晚饭安排 Mott 32（The Palazzo / Venetian），建议预约 17:30；晚上看 Awakening（Wynn），建议约 21:00，Mott 32 回 Wynn 很近。"
    },
    notes: "Wynn Buffet priority seating、Sphere、Mott 32、Awakening 都需要提前预约/买票；先定 show 时间，再围绕 show 时间定晚饭。确认 Encore 住宿覆盖至 6/27 早上退房。"
  },
  {
    date: "2026-06-27",
    dayLabel: "第 17 天",
    city: "返回旧金山",
    coverImage: "assets/san-francisco.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "从拉斯维加斯飞回旧金山，抵达后进入返程前缓冲阶段。",
    transport: "拉斯维加斯飞旧金山，航班和抵达后交通出发前同步。",
    lodging: "旧金山酒店以最终预订为准。",
    schedule: {
      morning: "从 Encore at Wynn Las Vegas / 安可酒店退房并前往机场。",
      afternoon: "飞回旧金山，前往酒店。",
      evening: "轻松晚餐，整理返程购物和行李。"
    },
    notes: "航班、旧金山最后两晚住宿和机场交通出发前同步；这天不再安排购物或正餐，只保留机场缓冲。"
  },
  {
    date: "2026-06-28",
    dayLabel: "第 18 天",
    city: "旧金山",
    coverImage: "assets/san-francisco.png",
    weatherLocation: weatherLocations.sanFrancisco,
    summary: "旧金山返程前缓冲日，用于补充未完成安排和最终整理。",
    transport: "旧金山市内交通按当天安排确定。",
    lodging: "旧金山酒店以最终预订为准。",
    schedule: {
      morning: "早餐后休息，整理前几天购物和行李。",
      afternoon: "预留补充购物、退换货或轻松散步时间，不安排高强度景点。",
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
    summary: "计划从旧金山返回北京，返程机票安排后同步具体时间。",
    transport: "旧金山返回北京，航班安排后同步。前往 SFO 的方式按航班时间确定。",
    lodging: "返程日无住宿，除非航班改为次日。",
    schedule: {
      morning: "根据航班时间安排退房、早餐和前往机场。",
      afternoon: "办理值机、托运和安检。",
      evening: "返程飞往北京，航班时间更新后同步。"
    },
    notes: "购买返京机票后同步航班号、起飞时间和到达时间。"
  }
];

const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdayZh = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const journeyGroups = [
  {
    id: "bay",
    title: "海湾序章",
    dateRange: "2026-06-11 至 2026-06-17",
    summary: "旧金山湾区、恶魔岛、Napa、斯坦福毕业典礼、Half Moon Bay、蒙特雷和 Livermore。",
    dates: ["2026-06-11", "2026-06-12", "2026-06-13", "2026-06-14", "2026-06-15", "2026-06-16", "2026-06-17"]
  },
  {
    id: "yellowstone",
    title: "山野黄石",
    dateRange: "2026-06-18 至 2026-06-22",
    summary: "从旧金山飞往博兹曼，进入黄石北门、Mammoth、Grand Prismatic、Old Faithful 和黄石大峡谷。",
    dates: ["2026-06-18", "2026-06-19", "2026-06-20", "2026-06-21", "2026-06-22"]
  },
  {
    id: "vegas",
    title: "霓虹假日",
    dateRange: "2026-06-23 至 2026-06-26",
    summary: "博兹曼飞抵拉斯维加斯，入住 Encore，集中安排中南 Strip、Boulder City、Chinatown、Wynn、Sphere 和 show。",
    dates: ["2026-06-23", "2026-06-24", "2026-06-25", "2026-06-26"]
  },
  {
    id: "return",
    title: "返程缓冲",
    dateRange: "2026-06-27 至 2026-06-29",
    summary: "从拉斯维加斯返回旧金山，保留返程前缓冲、购物整理和返京航班确认时间。",
    dates: ["2026-06-27", "2026-06-28", "2026-06-29"]
  }
];

const journeyByDate = new Map(
  journeyGroups.flatMap((group) => group.dates.map((date) => [date, group.id]))
);

const flightSegments = [
  {
    id: "mu589",
    flightNumber: "MU589",
    airline: "China Eastern / 东方航空",
    date: "2026-06-11",
    routeLabel: "上海浦东 PVG → 旧金山 SFO",
    plannedTime: "6/11 12:30 PVG 出发，6/11 09:05 SFO 到达",
    statusLabel: "原计划",
    statusSource: "等待实时状态",
    query: { flight: "MU589", date: "2026-06-11" }
  },
  {
    id: "as2062",
    flightNumber: "AS2062",
    airline: "Alaska Airlines / 阿拉斯加航空",
    date: "2026-06-18",
    routeLabel: "旧金山 SFO → 博兹曼 BZN",
    plannedTime: "6/18 13:56 SFO 出发，17:11 BZN 到达",
    statusLabel: "原计划",
    statusSource: "等待实时状态",
    query: { flight: "AS2062", date: "2026-06-18" }
  },
  {
    id: "wn1137",
    flightNumber: "WN1137",
    airline: "Southwest Airlines / 美国西南航空",
    date: "2026-06-23",
    routeLabel: "博兹曼 BZN → 拉斯维加斯 LAS",
    plannedTime: "6/23 19:10 BZN 出发，20:20 LAS 到达",
    statusLabel: "原计划",
    statusSource: "等待实时状态",
    query: { flight: "WN1137", date: "2026-06-23" }
  },
  {
    id: "las-sfo",
    flightNumber: "LAS → SFO",
    airline: "拉斯维加斯返回旧金山",
    date: "2026-06-27",
    routeLabel: "拉斯维加斯 LAS → 旧金山 SFO",
    plannedTime: "6/27 从 Encore 退房后按航班时间前往 LAS",
    statusLabel: "航班安排后同步",
    statusSource: "手动更新",
    query: null
  },
  {
    id: "sfo-beijing",
    flightNumber: "SFO → 北京",
    airline: "旧金山返回北京",
    date: "2026-06-29",
    routeLabel: "旧金山 SFO → 北京",
    plannedTime: "6/29 按返京航班时间前往 SFO",
    statusLabel: "航班安排后同步",
    statusSource: "手动更新",
    query: null
  }
];

const list = document.querySelector("#itineraryList");
const expandAllButton = document.querySelector("#expandAll");
const collapseAllButton = document.querySelector("#collapseAll");
const journeyTabs = document.querySelector("#journeyTabs");
const journeySummary = document.querySelector("#journeySummary");
const journeyPanels = document.querySelector("#journeyPanels");
const transportStatusList = document.querySelector("#transportStatusList");
const flightStatusEndpoint = transportStatusList?.dataset.flightStatusEndpoint?.trim() || "";
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

function createFlightCard(segment) {
  const article = document.createElement("article");
  article.className = "flight-card";
  article.dataset.flightId = segment.id;

  article.innerHTML = `
    <div class="flight-card__top">
      <span class="flight-card__airline">${segment.airline}</span>
      <span class="flight-card__status" data-flight-status="${segment.id}">${segment.statusLabel}</span>
    </div>
    <div class="flight-card__number">${segment.flightNumber}</div>
    <div class="flight-card__route">${segment.routeLabel}</div>
    <div class="flight-card__time">${segment.plannedTime}</div>
    <div class="flight-card__source" data-flight-source="${segment.id}">${segment.statusSource}</div>
  `;

  return article;
}

function renderTransportStatuses() {
  if (!transportStatusList) {
    return;
  }

  flightSegments.forEach((segment) => {
    transportStatusList.appendChild(createFlightCard(segment));
  });
}

function setFlightCardStatus(segmentId, statusText, sourceText, state = "") {
  const status = document.querySelector(`[data-flight-status="${segmentId}"]`);
  const source = document.querySelector(`[data-flight-source="${segmentId}"]`);

  if (status) {
    status.textContent = statusText;
    status.className = `flight-card__status${state ? ` flight-card__status--${state}` : ""}`;
  }

  if (source) {
    source.textContent = sourceText;
  }
}

function getFlightStatusUrl(segment) {
  const url = new URL(flightStatusEndpoint, window.location.href);
  url.searchParams.set("flight", segment.query.flight);
  url.searchParams.set("date", segment.query.date);
  return url.toString();
}

function getFlightState(status) {
  if (["active", "landed"].includes(status)) {
    return "ok";
  }

  if (["cancelled", "incident", "diverted"].includes(status)) {
    return "alert";
  }

  if (status === "delayed") {
    return "warning";
  }

  return "";
}

async function fetchFlightStatus(segment) {
  const response = await fetch(getFlightStatusUrl(segment));

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Flight status request failed: ${response.status}`);
  }

  return response.json();
}

function formatFlightStatusSource(data) {
  const parts = [];

  if (Number.isFinite(data.delayMinutes) && data.delayMinutes > 0) {
    parts.push(`延误 ${data.delayMinutes} 分钟`);
  }

  if (data.updatedAt) {
    const updatedAt = new Date(data.updatedAt);

    if (!Number.isNaN(updatedAt.getTime())) {
      parts.push(`更新 ${updatedAt.toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })}`);
    }
  }

  return parts.length ? parts.join(" · ") : "Aviationstack 实时状态";
}

async function loadFlightStatuses() {
  if (!transportStatusList || !flightStatusEndpoint || !window.fetch) {
    return;
  }

  await Promise.all(flightSegments
    .filter((segment) => segment.query)
    .map(async (segment) => {
      try {
        const data = await fetchFlightStatus(segment);

        if (!data) {
          setFlightCardStatus(segment.id, "出发前更新", "暂未查到实时状态");
          return;
        }

        setFlightCardStatus(
          segment.id,
          data.statusText || "出发前更新",
          formatFlightStatusSource(data),
          getFlightState(data.status)
        );
      } catch (error) {
        setFlightCardStatus(segment.id, "状态暂不可用", "实时接口暂不可用", "warning");
      }
    }));
}

function getJourneyIdForDate(date) {
  return journeyByDate.get(date) || "bay";
}

function createDayCard(item, index) {
  const parts = getDateParts(item.date);
  const detailsId = `day-details-${index + 1}`;
  const article = document.createElement("article");
  article.className = "day-card";
  article.dataset.journey = getJourneyIdForDate(item.date);

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

function getItemsForJourney(group) {
  const dateSet = new Set(group.dates);
  return itinerary.filter((item) => dateSet.has(item.date));
}

function getActiveCardScope() {
  if (!journeyPanels) {
    return document;
  }

  return journeyPanels.querySelector(".journey-panel:not([hidden])") || journeyPanels;
}

function setAllCards(open) {
  getActiveCardScope().querySelectorAll(".day-card").forEach((card) => {
    const toggle = card.querySelector(".day-card__toggle");
    const details = card.querySelector(".day-card__details");
    const action = card.querySelector(".day-card__action");
    toggle.setAttribute("aria-expanded", String(open));
    details.hidden = !open;
    action.textContent = open ? "收起详情" : "查看详情";
  });
}

function setActiveJourney(groupId) {
  if (!journeyTabs || !journeyPanels) {
    return;
  }

  const activeGroup = journeyGroups.find((group) => group.id === groupId) || journeyGroups[0];

  journeyTabs.querySelectorAll("[role='tab']").forEach((tab) => {
    const isActive = tab.dataset.journeyId === activeGroup.id;
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  journeyPanels.querySelectorAll(".journey-panel").forEach((panel) => {
    const isActive = panel.dataset.journeyId === activeGroup.id;
    panel.hidden = !isActive;

    if (isActive) {
      panel.setAttribute("aria-labelledby", `journey-tab-${activeGroup.id}`);
    }
  });

  if (journeySummary) {
    journeySummary.textContent = activeGroup.summary;
  }
}

function renderJourneyTabs() {
  journeyGroups.forEach((group, index) => {
    const tab = document.createElement("button");
    tab.className = "journey-tab";
    tab.type = "button";
    tab.id = `journey-tab-${group.id}`;
    tab.dataset.journeyId = group.id;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", String(index === 0));
    tab.setAttribute("aria-controls", `journey-panel-${group.id}`);
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.innerHTML = `
      <span class="journey-tab__title">${group.title}</span>
      <span class="journey-tab__meta">${group.dateRange}</span>
    `;

    tab.addEventListener("click", () => setActiveJourney(group.id));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) {
        return;
      }

      const tabs = [...journeyTabs.querySelectorAll("[role='tab']")];
      const currentIndex = tabs.indexOf(tab);
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      setActiveJourney(tabs[nextIndex].dataset.journeyId);
      event.preventDefault();
    });

    journeyTabs.appendChild(tab);
  });
}

function renderJourneyPanels() {
  journeyGroups.forEach((group) => {
    const panel = document.createElement("div");
    panel.className = "journey-panel";
    panel.id = `journey-panel-${group.id}`;
    panel.dataset.journeyId = group.id;
    panel.setAttribute("role", "tabpanel");

    const grid = document.createElement("div");
    grid.className = "day-grid";
    getItemsForJourney(group).forEach((item) => {
      grid.appendChild(createDayCard(item, itinerary.indexOf(item)));
    });

    panel.appendChild(grid);
    journeyPanels.appendChild(panel);
  });

  setActiveJourney(journeyGroups[0].id);
}

function renderItinerary() {
  if (journeyTabs && journeyPanels) {
    renderJourneyTabs();
    renderJourneyPanels();
    return;
  }

  if (!list) {
    return;
  }

  itinerary.forEach((item, index) => {
    list.appendChild(createDayCard(item, index));
  });
}

renderItinerary();
renderTransportStatuses();

loadWeatherForecasts();
loadFlightStatuses();

if (expandAllButton) {
  expandAllButton.addEventListener("click", () => setAllCards(true));
}

if (collapseAllButton) {
  collapseAllButton.addEventListener("click", () => setAllCards(false));
}
