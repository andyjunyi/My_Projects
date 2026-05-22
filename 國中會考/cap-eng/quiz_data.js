// ============================================================
//  國中會考英文 30天單字小測驗 ── 題庫資料
//  格式：每個物件代表一天的測驗，questions 陣列為單選填空題
// ============================================================

const QUIZ_DAYS = [

  // ══════════════════════════════════════════════
  //  DAY 1 ── 最高頻動詞
  // ══════════════════════════════════════════════
  {
    day: 1,
    title: "Day 1 ── 最高頻動詞",
    week: 1,
    questions: [
      {
        stem: "Lucy wants to _____ a card for her teacher on Teachers' Day.",
        options: ["make", "get", "tell", "ask"],
        answer: 0,
        word: "make",
        wordZh: "製作",
        explanation: "make a card 是固定搭配，意為「製作卡片」。此句意思是：「Lucy想在教師節幫老師做一張卡片。」(A) make（製作）最符合語意。(B) get 表示「得到」，(C) tell 表示「告訴」，(D) ask 表示「詢問」，均不適合。製作卡片這個動作是create/produce的概念，只有make能表達手工製作的含意。"
      },
      {
        stem: "Can you _____ me where the nearest train station is?",
        options: ["ask", "tell", "make", "start"],
        answer: 1,
        word: "tell",
        wordZh: "告訴",
        explanation: "tell sb. + wh- clause 是固定句型，表示「告訴某人……」。句子意思：「你可以告訴我最近的火車站在哪裡嗎？」(B) tell（告訴）正確。(A) ask 是「詢問」，後面接 sb. sth. 或 sb. to V，(C) make 是「製作」，(D) start 是「開始」，均不符合。"
      },
      {
        stem: "The students need to _____ their homework before they can play games.",
        options: ["get", "pay", "start", "ask"],
        answer: 2,
        word: "start",
        wordZh: "開始",
        explanation: "start their homework 表示「開始做功課」。句意：「學生們必須先開始做功課，才能玩遊戲。」(C) start（開始）最合語意。(A) get 是「得到/獲取」，(B) pay 是「付款」，(D) ask 是「詢問」，均不符語境。start to V / start V-ing 是常見會考句型，考生應熟悉。"
      },
      {
        stem: "Please _____ attention in class, or you will miss important information.",
        options: ["tell", "make", "pay", "get"],
        answer: 2,
        word: "pay",
        wordZh: "付出；注意",
        explanation: "pay attention 是固定片語，意為「專心／注意」。句意：「上課請專心，否則你會錯過重要資訊。」(C) pay（注意）搭配 attention 形成固定用法。(A) tell（告訴）、(B) make（製作）、(D) get（得到）均無法與 attention 搭配成有意義的片語。pay attention to 也可接受。"
      },
      {
        stem: "I will _____ a phone call to remind you about the meeting tomorrow.",
        options: ["start", "ask", "get", "make"],
        answer: 3,
        word: "make",
        wordZh: "進行（通話）",
        explanation: "make a phone call 是固定片語，意為「打一通電話」。句意：「我會打電話提醒你明天的會議。」(D) make（進行）是正確答案。(A) start（開始）、(B) ask（詢問）、(C) get（得到）均無法與 a phone call 搭配。make a call 為會考高頻片語，務必記牢。"
      },
      {
        stem: "My sister is going to _____ a new job at a local restaurant next week.",
        options: ["make", "tell", "ask", "get"],
        answer: 3,
        word: "get",
        wordZh: "得到；獲得",
        explanation: "get a job 是固定搭配，意為「找到工作／得到職位」。句意：「我姊姊下週要在附近的餐廳找到一份新工作。」(D) get（得到）正確。(A) make 是「製作」，(B) tell 是「告訴」，(C) ask 是「詢問/要求」，語意上均不適合「取得工作」的情境。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 2 ── 高頻名詞
  // ══════════════════════════════════════════════
  {
    day: 2,
    title: "Day 2 ── 高頻名詞",
    week: 1,
    questions: [
      {
        stem: "Many _____ came to the park to watch the fireworks show last night.",
        options: ["people", "tree", "card", "work"],
        answer: 0,
        word: "people",
        wordZh: "人們",
        explanation: "people 是複數名詞，表示「人們」，常用於描述一群人。句意：「昨晚許多人來到公園觀看煙火表演。」(A) people（人們）最符合語意。(B) tree（樹木）、(C) card（卡片）、(D) work（工作）均為不可數或單數概念，不符合「觀看煙火」的主語語意。"
      },
      {
        stem: "Dad always does a lot of _____ in the garden on weekends.",
        options: ["day", "card", "tree", "work"],
        answer: 3,
        word: "work",
        wordZh: "工作；勞動",
        explanation: "do work 或 do a lot of work 表示「做許多工作」。句意：「爸爸週末總是在花園裡做很多工作。」(D) work（工作）正確。(A) day（天）、(B) card（卡片）、(C) tree（樹）均不符合「在花園裡做___」的語意。work 在此為不可數名詞，表示勞動或作業。"
      },
      {
        stem: "The old _____ in front of our school was planted fifty years ago.",
        options: ["card", "time", "tree", "day"],
        answer: 2,
        word: "tree",
        wordZh: "樹",
        explanation: "tree 指「樹木」，可被 old 修飾，且有被種植的動作。句意：「我們學校前面的那棵老樹是五十年前種的。」(C) tree（樹）正確。(A) card（卡片）、(B) time（時間）、(D) day（天）均不可被「planted（種植）」，在語意和語法上均不合適。"
      },
      {
        stem: "She wrote a beautiful _____ to thank her best friend for the surprise party.",
        options: ["time", "card", "tree", "people"],
        answer: 1,
        word: "card",
        wordZh: "卡片",
        explanation: "write a card 表示「寫一張卡片」，是常見表達感謝的方式。句意：「她寫了一張漂亮的卡片，感謝好朋友舉辦驚喜派對。」(B) card（卡片）正確。(A) time（時間）、(C) tree（樹）無法被 write，(D) people 為複數人，也不符合「寫」的受詞。"
      },
      {
        stem: "It is _____ for dinner. Let's go to the kitchen together.",
        options: ["tree", "people", "card", "time"],
        answer: 3,
        word: "time",
        wordZh: "時間；時刻",
        explanation: "It is time for + N 是固定句型，意為「是……的時候了」。句意：「是吃晚餐的時候了，我們一起去廚房吧。」(D) time（時間）正確。(A) tree（樹）、(B) people（人們）、(C) card（卡片）均無法放入 It is ___ for dinner 的固定句型中形成合理語意。"
      },
      {
        stem: "My grandmother calls me every _____ to check if I am doing well.",
        options: ["work", "card", "day", "people"],
        answer: 2,
        word: "day",
        wordZh: "天；日",
        explanation: "every day 表示「每天」，是表示頻率的常見副詞片語。句意：「我奶奶每天都打電話給我，看我是否過得好。」(C) day（天）正確。(A) work（工作）、(B) card（卡片）放入後語意不通，(D) people 為複數名詞，放入 every ___ 無法形成合理頻率表達。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 3 ── 電力與社會
  // ══════════════════════════════════════════════
  {
    day: 3,
    title: "Day 3 ── 電力與社會",
    week: 1,
    questions: [
      {
        stem: "Without _____, we cannot use computers, lights, or air conditioners.",
        options: ["rule", "electricity", "job", "year"],
        answer: 1,
        word: "electricity",
        wordZh: "電力；電",
        explanation: "electricity 指「電力、電能」，是驅動電子設備的能源。句意：「沒有電，我們就無法使用電腦、燈光或冷氣。」(B) electricity（電力）正確，因為電腦、燈光、冷氣都需要用電。(A) rule（規則）、(C) job（工作）、(D) year（年）均無法邏輯上解釋設備無法運作的原因。"
      },
      {
        stem: "The _____ announced new rules to protect the environment last Monday.",
        options: ["builder", "electricity", "fight", "government"],
        answer: 3,
        word: "government",
        wordZh: "政府",
        explanation: "government 指「政府」，是能宣布規則或政策的機構。句意：「政府上週一宣布了保護環境的新規定。」(D) government（政府）正確。(A) builder（建築工人）沒有立法权力，(B) electricity（電力）為抽象名詞無法宣布規則，(C) fight（打鬥/奮鬥）在此語境下語意不通。"
      },
      {
        stem: "The workers had to _____ hard for better pay and working conditions.",
        options: ["rise", "rule", "fight", "job"],
        answer: 2,
        word: "fight",
        wordZh: "奮鬥；爭取",
        explanation: "fight for 表示「為……而奮鬥/爭取」，強調努力爭取某事。句意：「工人們必須努力爭取更好的薪資和工作條件。」(C) fight（奮鬥）最符合語意。(A) rise（上升）不及物動詞不接 for，(B) rule（統治）語意不合，(D) job（工作）為名詞，不符合動詞位置。"
      },
      {
        stem: "Prices of vegetables usually _____ during winter because of the cold weather.",
        options: ["rule", "fight", "job", "rise"],
        answer: 3,
        word: "rise",
        wordZh: "上漲；上升",
        explanation: "rise 為不及物動詞，表示「（價格等）上漲、上升」。句意：「蔬菜價格在冬天因為寒冷天氣通常會上漲。」(D) rise（上漲）正確。(A) rule（統治/規則）不符合語意，(B) fight（爭鬥）搭配不當，(C) job 為名詞，不能放在動詞位置。rise 與 raise 易混淆，rise 不接受詞。"
      },
      {
        stem: "The school has a _____ that students must wear uniforms every day.",
        options: ["electricity", "year", "rise", "rule"],
        answer: 3,
        word: "rule",
        wordZh: "規定；規則",
        explanation: "have a rule that... 是固定結構，表示「有……的規定」。句意：「學校有規定，學生每天必須穿制服。」(D) rule（規定）正確。(A) electricity（電力）、(B) year（年份）、(C) rise（上漲）均不能搭配 have a ___ that 並形成「規定」的語意。"
      },
      {
        stem: "After ten _____ of hard work, Kevin finally became a doctor.",
        options: ["jobs", "fights", "years", "rules"],
        answer: 2,
        word: "year",
        wordZh: "年",
        explanation: "ten years of hard work 表示「十年的努力工作」。year 是可數名詞，ten 後面必須用複數 years。句意：「經過十年的努力，Kevin 終於成為了一名醫生。」(C) years 正確。(A) jobs（工作）、(B) fights（奮鬥）、(D) rules（規則）雖也是複數，但語意均不符合「經過時間」的情境。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 4 ── 家庭與禮物
  // ══════════════════════════════════════════════
  {
    day: 4,
    title: "Day 4 ── 家庭與禮物",
    week: 1,
    questions: [
      {
        stem: "My little sister will turn eight next week, so we are planning a _____ party for her.",
        options: ["cookie", "dress", "birthday", "gift"],
        answer: 2,
        word: "birthday",
        wordZh: "生日",
        explanation: "birthday party 是「生日派對」的固定搭配。句意：「我妹妹下週就要滿八歲了，所以我們正在為她籌備一個生日派對。」(C) birthday（生日）正確，搭配 party 形成慶生活動。(A) cookie（餅乾）party 不自然，(B) dress（洋裝）、(D) gift（禮物）均無法修飾 party 形成常用慶典名稱。"
      },
      {
        stem: "Tom gave his mother a beautiful _____ for Mother's Day to show his love.",
        options: ["family", "bake", "mom", "gift"],
        answer: 3,
        word: "gift",
        wordZh: "禮物",
        explanation: "give sb. a gift 是「給某人一份禮物」的固定搭配。句意：「Tom 在母親節送給媽媽一份漂亮的禮物以表達愛意。」(D) gift（禮物）正確，是 gave... a ___ 的合理受詞。(A) family（家庭）、(C) mom（媽媽）不適合當禮物，(B) bake 為動詞，不能放在名詞位置。"
      },
      {
        stem: "Our whole _____ went on a trip to Japan during the summer vacation.",
        options: ["gift", "dress", "family", "cookie"],
        answer: 2,
        word: "family",
        wordZh: "家庭；家人",
        explanation: "whole family 表示「整個家庭/全家人」，是常見名詞片語。句意：「我們全家人在暑假期間去了日本旅行。」(C) family（家庭）正確。(A) gift（禮物）、(B) dress（洋裝）、(D) cookie（餅乾）均不符合「出遊的主語」，因為它們是物品而非人的群體。"
      },
      {
        stem: "She wore a pink _____ to her cousin's wedding and looked very elegant.",
        options: ["birthday", "cookie", "gift", "dress"],
        answer: 3,
        word: "dress",
        wordZh: "洋裝；裙子",
        explanation: "wear a dress 表示「穿一件洋裝」，符合描述服裝的語境。句意：「她穿著一件粉紅色的洋裝去參加表姊的婚禮，看起來非常優雅。」(D) dress（洋裝）正確。(A) birthday（生日）、(B) cookie（餅乾）、(C) gift（禮物）均不是可以「穿」的服裝，語意不合。"
      },
      {
        stem: "We _____ chocolate chip cookies for Grandma's birthday surprise yesterday.",
        options: ["give", "bake", "make", "dress"],
        answer: 1,
        word: "bake",
        wordZh: "烘焙；烤",
        explanation: "bake cookies 是「烤餅乾」的固定搭配，為常見的烹飪動詞。句意：「昨天我們為奶奶的生日驚喜烤了巧克力豆餅乾。」(B) bake（烤）最適合，表達在烤箱中製作食品。(A) give（給）、(C) make（製作）語意較廣泛，(D) dress（穿著）為語意完全不符的動詞。bake 特指以烤箱烘烤食物。"
      },
      {
        stem: "My _____ always reminds me to drink water and eat vegetables every day.",
        options: ["gift", "cookie", "mom", "birthday"],
        answer: 2,
        word: "mom",
        wordZh: "媽媽",
        explanation: "mom 是「媽媽」的口語說法，是提醒孩子注意健康的典型人物。句意：「我媽媽總是提醒我每天喝水、吃蔬菜。」(C) mom（媽媽）正確，因為「提醒孩子」是媽媽常做的事。(A) gift（禮物）、(B) cookie（餅乾）、(D) birthday（生日）均為物品或事件，不能做提醒他人的動作。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 5 ── 自然與環境
  // ══════════════════════════════════════════════
  {
    day: 5,
    title: "Day 5 ── 自然與環境",
    week: 1,
    questions: [
      {
        stem: "Taiwan is a beautiful _____ surrounded by the Pacific Ocean.",
        options: ["rock", "plant", "ground", "island"],
        answer: 3,
        word: "island",
        wordZh: "島嶼",
        explanation: "island 指「島嶼」，是被海洋包圍的陸地。句意：「台灣是一個被太平洋環繞的美麗島嶼。」(D) island（島嶼）正確，因為台灣確實是四面環海的島嶼。(A) rock（岩石）、(B) plant（植物）、(C) ground（地面）均不符合「被海洋包圍」的地理特征。"
      },
      {
        stem: "The farmer planted some vegetables in the _____ behind his house.",
        options: ["life", "water", "rock", "ground"],
        answer: 3,
        word: "ground",
        wordZh: "地面；土地",
        explanation: "plant sth. in the ground 表示「在土地上種植東西」，ground 指土地或地面。句意：「農夫在房子後面的土地上種了一些蔬菜。」(D) ground（土地）正確，是種植蔬菜的地方。(A) life（生命）、(B) water（水）、(C) rock（岩石）均無法作為種植蔬菜的合理場所。"
      },
      {
        stem: "We should _____ the flowers every morning so they can grow well.",
        options: ["dry", "earth", "water", "land"],
        answer: 2,
        word: "water",
        wordZh: "澆水（動詞）",
        explanation: "water the flowers 是「澆花」的動詞用法，water 在此作動詞。句意：「我們每天早上應該澆花，這樣它們才能長得好。」(C) water（澆水）正確，是照顧植物的常見動作。(A) dry（使乾燥）反而傷害植物，(B) earth 和 (D) land 均為名詞，不能放在動詞位置。"
      },
      {
        stem: "The air and _____ are getting polluted because of too many factories.",
        options: ["rock", "dry", "island", "earth"],
        answer: 3,
        word: "earth",
        wordZh: "地球；土壤",
        explanation: "earth 在此指「地球的土壤/環境」，與 air 並列為受污染的自然資源。句意：「由於工廠太多，空氣和土壤正在受到污染。」(D) earth（土壤/地球）正確。(A) rock（岩石）通常不被污染，(B) dry 為形容詞，(C) island（島嶼）語意不符合「被工廠污染」的搭配。"
      },
      {
        stem: "During the dry season, the river becomes very shallow and almost _____.",
        options: ["land", "ground", "plant", "dry"],
        answer: 3,
        word: "dry",
        wordZh: "乾燥的；乾涸的",
        explanation: "dry 作形容詞表示「乾燥的、乾涸的」，描述乾季時河流的狀態。句意：「在乾季期間，河流變得很淺，幾乎乾涸了。」(D) dry（乾涸的）正確，與句子的語意連貫。(A) land（陸地）、(B) ground（地面）、(C) plant（植物）均為名詞，不能作補語描述河流的狀態。"
      },
      {
        stem: "The teacher asked us to _____ a seed in a cup and watch it grow.",
        options: ["dry", "water", "rock", "plant"],
        answer: 3,
        word: "plant",
        wordZh: "種植",
        explanation: "plant a seed 是「種一粒種子」的固定動詞搭配。句意：「老師要我們把一粒種子種在杯子裡，然後觀察它生長。」(D) plant（種植）正確，為動詞用法。(A) dry（使乾燥）反向操作，(B) water（澆水）不能「種下」種子，(C) rock 為名詞，不能放在動詞位置。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 6 ── 購物與旅行
  // ══════════════════════════════════════════════
  {
    day: 6,
    title: "Day 6 ── 購物與旅行",
    week: 1,
    questions: [
      {
        stem: "We decided to _____ a new sofa for the living room during the sale.",
        options: ["visit", "buy", "trip", "hotel"],
        answer: 1,
        word: "buy",
        wordZh: "購買",
        explanation: "buy sth. 是「購買某物」的基本動詞。句意：「我們決定趁特賣期間為客廳買一張新沙發。」(B) buy（購買）正確，是「獲得商品」的核心動詞。(A) visit（參觀）不能接沙發，(C) trip（旅行）為名詞，(D) hotel（飯店）也是名詞，均不能放在動詞位置。"
      },
      {
        stem: "Our class will _____ the science museum next Friday for our field trip.",
        options: ["buy", "ticket", "train", "visit"],
        answer: 3,
        word: "visit",
        wordZh: "參觀；拜訪",
        explanation: "visit a museum 是「參觀博物館」的常見動詞搭配。句意：「我們班下週五將去科學博物館進行戶外教學。」(D) visit（參觀）正確。(A) buy（購買）語意不符，(B) ticket（票）和 (C) train（火車）均為名詞，不能放在動詞位置。"
      },
      {
        stem: "The family had a wonderful _____ to Tainan to try the famous local food.",
        options: ["museum", "hotel", "ticket", "trip"],
        answer: 3,
        word: "trip",
        wordZh: "旅行；短途旅遊",
        explanation: "have a trip to + 地點 表示「到某地旅行」，是常見的旅遊表達。句意：「這家人去台南旅行了一趟，品嚐了著名的當地美食。」(D) trip（旅行）正確。(A) museum（博物館）、(B) hotel（飯店）、(C) ticket（票）均為旅行相關設施或物品，但語意上不能用 had a ___ to 表示旅行本身。"
      },
      {
        stem: "You need to show your _____ to the guard before you can enter the concert hall.",
        options: ["trip", "hotel", "train", "ticket"],
        answer: 3,
        word: "ticket",
        wordZh: "票；入場券",
        explanation: "show a ticket 是「出示票券」的固定動詞搭配，進入場所前必須出示的憑證。句意：「進入音樂廳前，你需要向警衛出示票券。」(D) ticket（票）正確。(A) trip（旅行）、(B) hotel（飯店）是場所名詞，(C) train（火車）也不是入場憑證，均不符語意。"
      },
      {
        stem: "We took the high-speed _____ from Taipei to Kaohsiung in just 90 minutes.",
        options: ["museum", "visit", "trip", "train"],
        answer: 3,
        word: "train",
        wordZh: "火車",
        explanation: "take the train 是「搭火車」的固定片語，high-speed train 指「高速鐵路／高鐵」。句意：「我們搭高鐵從台北到高雄，只花了90分鐘。」(D) train（火車）正確。(A) museum（博物館）不是交通工具，(B) visit（拜訪）為動詞，(C) trip（旅行）語意雖接近，但 took the trip 不能表示「搭乘交通工具」。"
      },
      {
        stem: "The _____ near the beach was very clean and had a great view of the ocean.",
        options: ["ticket", "buy", "train", "hotel"],
        answer: 3,
        word: "hotel",
        wordZh: "飯店；旅館",
        explanation: "hotel 是「飯店、旅館」，常描述住宿場所的環境與設施。句意：「海灘附近的飯店非常乾淨，而且可以欣賞絕佳的海景。」(D) hotel（飯店）正確，符合「住宿地點」的語境。(A) ticket（票）、(C) train（火車）非住宿場所，(B) buy 為動詞，不能作主語。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 7 ── 第一週複習 (Days 1–6 混合)
  // ══════════════════════════════════════════════
  {
    day: 7,
    title: "Day 7 ── 第一週複習",
    week: 1,
    questions: [
      {
        stem: "The _____ built many new roads and bridges to improve transportation.",
        options: ["electricity", "government", "tree", "ticket"],
        answer: 1,
        word: "government",
        wordZh: "政府",
        explanation: "government 是「政府」，是負責建設公共設施的機構。句意：「政府建造了許多新道路和橋樑以改善交通。」(B) government 正確。(A) electricity（電力）是能源，不能建造道路，(C) tree（樹）和 (D) ticket（票）均為物品，不具建設能力。政府（government）執行公共建設是常考情境。"
      },
      {
        stem: "Mom asked me to _____ the groceries at the supermarket on my way home.",
        options: ["tell", "buy", "rise", "bake"],
        answer: 1,
        word: "buy",
        wordZh: "購買",
        explanation: "buy the groceries 是「買生活雜貨」的常見動詞搭配。句意：「媽媽要我在回家途中順道去超市買食材。」(B) buy（購買）正確。(A) tell（告訴）後面通常接人和話語，(C) rise（上升）為不及物動詞，(D) bake（烘烤）不適合用於「買食材」的語境。"
      },
      {
        stem: "The park is full of beautiful _____ that give shade to people on hot days.",
        options: ["work", "card", "island", "tree"],
        answer: 3,
        word: "tree",
        wordZh: "樹",
        explanation: "tree 是「樹木」，能提供遮蔭（shade）的自然植物。句意：「公園裡充滿了美麗的樹木，在炎熱的日子裡為人們提供遮蔭。」(D) tree（樹）正確，因為樹木能遮蔭。(A) work（工作）、(B) card（卡片）、(C) island（島嶼）均無法「提供遮蔭」。give shade 是描述樹木功能的關鍵詞。"
      },
      {
        stem: "Kevin forgot to _____ for the bus, so the driver wouldn't let him on.",
        options: ["make", "tell", "ask", "pay"],
        answer: 3,
        word: "pay",
        wordZh: "付費；付款",
        explanation: "pay for the bus 是「付公車車資」的固定搭配。句意：「Kevin 忘記付公車費，所以司機不讓他上車。」(D) pay（付款）正確。(A) make（製作）、(B) tell（告訴）、(C) ask（詢問）均無法表達「付款搭車」的語意。pay for 表示為某事物付費，是重要的介詞搭配。"
      },
      {
        stem: "My family spent two nights at a nice _____ near the famous hot spring.",
        options: ["hotel", "trip", "gift", "land"],
        answer: 0,
        word: "hotel",
        wordZh: "飯店",
        explanation: "stay at a hotel 或 spent nights at a hotel 表示「在飯店住宿」，hotel 是住宿場所。句意：「我家人在著名溫泉附近的一家好飯店住了兩晚。」(A) hotel（飯店）正確。(B) trip（旅行）為活動，(C) gift（禮物）、(D) land（陸地）均不是住宿設施，無法放在 spent two nights at a ___ 的句型中。"
      },
      {
        stem: "The price of this jacket _____ from 800 dollars to 1,200 dollars last year.",
        options: ["rose", "told", "baked", "paid"],
        answer: 0,
        word: "rise",
        wordZh: "上升（過去式：rose）",
        explanation: "rise 的過去式是 rose，表示「（價格）上漲了」。句意：「這件夾克的價格去年從800元漲到了1200元。」(A) rose（上漲）正確，是 rise 的過去式，且不接受詞（不及物）。(B) told（告訴）、(C) baked（烤）、(D) paid（付款）均不符合「價格變化」的語意。"
      },
      {
        stem: "The children wanted to _____ cookies for their sick neighbor as a surprise.",
        options: ["visit", "bake", "get", "plant"],
        answer: 1,
        word: "bake",
        wordZh: "烤；烘焙",
        explanation: "bake cookies 是「烤餅乾」的固定動詞搭配，為表達關心他人的溫馨舉動。句意：「孩子們想烤餅乾給生病的鄰居作為驚喜。」(B) bake（烤）正確。(A) visit（拜訪）接人，(C) get（得到）語意較廣泛但不夠精確，(D) plant（種植）完全不符合食品製作的語意。"
      },
      {
        stem: "I don't have enough _____ to finish all my homework before the test tomorrow.",
        options: ["rule", "day", "time", "people"],
        answer: 2,
        word: "time",
        wordZh: "時間",
        explanation: "have enough time to V 是「有足夠時間做……」的固定句型。句意：「在明天考試之前，我沒有足夠的時間完成所有作業。」(C) time（時間）正確，是能被 enough 修飾並與 to finish 連用的名詞。(A) rule（規則）、(B) day（天）語意不精確，(D) people（人們）複數且語意不符。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 8 ── 學校與學習
  // ══════════════════════════════════════════════
  {
    day: 8,
    title: "Day 8 ── 學校與學習",
    week: 2,
    questions: [
      {
        stem: "My _____ lent me her notes because I was absent last Tuesday.",
        options: ["school", "classmate", "read", "study"],
        answer: 1,
        word: "classmate",
        wordZh: "同學",
        explanation: "classmate 是「同班同學」，是班上一起上課的人，最可能借筆記。句意：「我的同學把她的筆記借給我，因為我上週二缺席了。」(B) classmate（同學）正確。(A) school（學校）是建築，無法借筆記，(C) read 和 (D) study 均為動詞，不能在主語位置充當「人」。"
      },
      {
        stem: "You should _____ the chapter carefully before you answer the questions.",
        options: ["know", "teach", "show", "read"],
        answer: 3,
        word: "read",
        wordZh: "閱讀",
        explanation: "read the chapter 是「閱讀章節」的固定搭配，表示在回答問題前仔細閱讀。句意：「在回答問題前，你應該仔細閱讀這個章節。」(D) read（閱讀）正確。(A) know（知道）是認知動詞，(B) teach（教導）需要受教對象，(C) show（展示）語意不符閱讀學習的情境。"
      },
      {
        stem: "The teacher will _____ us how to solve this math problem step by step.",
        options: ["study", "learn", "show", "read"],
        answer: 2,
        word: "show",
        wordZh: "展示；示範",
        explanation: "show sb. how to V 是「示範給某人看如何做……」的固定句型。句意：「老師會一步一步示範給我們看如何解這道數學題。」(C) show（示範）正確，搭配 how to 表示示範方法。(A) study（學習）、(B) learn（學習）均不符合「老師教學生」的方向，(D) read（閱讀）不適合數學題目語境。"
      },
      {
        stem: "I _____ a lot of new words by reading English storybooks every day.",
        options: ["teach", "show", "know", "learn"],
        answer: 3,
        word: "learn",
        wordZh: "學習；習得",
        explanation: "learn new words 是「學習新單字」的常見搭配，強調主動習得知識。句意：「我每天閱讀英文故事書，學到了很多新單字。」(D) learn（學習）正確。(A) teach（教）的主語應是老師，(B) show（展示）不適合「習得語言」的情境，(C) know（知道）是靜態動詞，不強調學習過程。"
      },
      {
        stem: "Do you _____ the answer to this question? The teacher wants someone to answer.",
        options: ["learn", "teach", "know", "show"],
        answer: 2,
        word: "know",
        wordZh: "知道；了解",
        explanation: "know the answer 是「知道答案」的固定搭配，know 是靜態認知動詞。句意：「你知道這個問題的答案嗎？老師要找人回答。」(C) know（知道）正確，表示擁有知識或答案。(A) learn（學習）、(B) teach（教）強調過程，(D) show（展示）表示展示而非知道，均不符語意。"
      },
      {
        stem: "Mr. Lin has been _____ English at this junior high school for over twenty years.",
        options: ["study", "read", "learn", "teach"],
        answer: 3,
        word: "teach",
        wordZh: "教導；教學",
        explanation: "teach English at a school 是「在學校教英文」的搭配，主語為老師。句意：「林老師在這所國中教英文已經超過二十年了。」(D) teach（教導）正確，搭配科目和地點。(A) study（學習）和 (C) learn（學習）的主語應是學生，(B) read（閱讀）不符合教學語意。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 9 ── 飲食與生活
  // ══════════════════════════════════════════════
  {
    day: 9,
    title: "Day 9 ── 飲食與生活",
    week: 2,
    questions: [
      {
        stem: "This soup is very _____, and I want to have another bowl right away.",
        options: ["kitchen", "meal", "delicious", "fruit"],
        answer: 2,
        word: "delicious",
        wordZh: "美味的",
        explanation: "delicious 是形容詞，表示「美味的、好吃的」，常用來形容食物。句意：「這道湯非常美味，我馬上想再來一碗。」(C) delicious（美味的）正確，能修飾食物並引出「再來一碗」的願望。(A) kitchen（廚房）和 (B) meal（餐點）是名詞，(D) fruit（水果）也是名詞，均不能充當形容詞補語。"
      },
      {
        stem: "We usually have _____ at six o'clock, and then we watch TV together.",
        options: ["food", "eat", "dinner", "vegetable"],
        answer: 2,
        word: "dinner",
        wordZh: "晚餐",
        explanation: "have dinner 是「吃晚餐」的固定搭配，dinner 是晚餐時間的餐點。句意：「我們通常在六點吃晚飯，然後一起看電視。」(C) dinner（晚餐）正確。(A) food（食物）是泛稱，have food 不如 have dinner 精確，(B) eat 為動詞，(D) vegetable（蔬菜）是食材，均不符合「吃晚餐」的表達。"
      },
      {
        stem: "Eating more _____ like carrots and spinach is good for your health.",
        options: ["kitchen", "fruit", "meal", "vegetable"],
        answer: 3,
        word: "vegetable",
        wordZh: "蔬菜",
        explanation: "vegetable 是「蔬菜」，胡蘿蔔（carrots）和菠菜（spinach）都屬於蔬菜類。句意：「多吃像胡蘿蔔和菠菜這樣的蔬菜對你的健康有益。」(D) vegetable（蔬菜）正確，與例子 carrots 和 spinach 一致。(A) kitchen（廚房）、(B) fruit（水果，非蔬菜）、(C) meal（餐點）均不符語意。"
      },
      {
        stem: "Please don't _____ in the classroom. You should only eat in the cafeteria.",
        options: ["meal", "fruit", "kitchen", "eat"],
        answer: 3,
        word: "eat",
        wordZh: "吃",
        explanation: "eat 是基本動詞，表示「吃東西」，此句為禁止在教室飲食的規定。句意：「請不要在教室裡吃東西，你只能在自助餐廳吃飯。」(D) eat（吃）正確，是唯一的動詞選項。(A) meal（餐點）、(B) fruit（水果）、(C) kitchen（廚房）均為名詞，不能放在 don't ___ in 的動詞位置。"
      },
      {
        stem: "Mom cooked a big _____ for the whole family on Chinese New Year's Eve.",
        options: ["eat", "delicious", "dinner", "meal"],
        answer: 3,
        word: "meal",
        wordZh: "一餐；飯食",
        explanation: "a big meal 是「一頓豐盛的飯」，常用於描述節慶或特殊場合的餐食。句意：「媽媽在除夕夜為全家人煮了一頓豐盛的飯。」(D) meal（一餐）正確，big meal 強調豐盛。(A) eat 為動詞，(B) delicious 為形容詞，(C) dinner 也可接受但 big dinner 不如 big meal 常見，且此句要強調「一頓飯」的概念。"
      },
      {
        stem: "The _____ smells great because Dad is cooking his famous pasta dish.",
        options: ["fruit", "vegetable", "food", "kitchen"],
        answer: 3,
        word: "kitchen",
        wordZh: "廚房",
        explanation: "kitchen 是「廚房」，是烹飪食物的地方，能散發食物氣味。句意：「廚房聞起來很香，因為爸爸正在煮他拿手的義大利麵。」(D) kitchen（廚房）正確，是有氣味且在烹飪的場所。(A) fruit（水果）、(B) vegetable（蔬菜）不會散發整體的「great smell」，(C) food（食物）可能聞起來香，但 the food smells great 後面的「因為爸爸在廚房煮飯」需要廚房作主語才更合理。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 10 ── 工作與職業
  // ══════════════════════════════════════════════
  {
    day: 10,
    title: "Day 10 ── 工作與職業",
    week: 2,
    questions: [
      {
        stem: "She goes to the _____ every day and works from nine in the morning to five in the afternoon.",
        options: ["sacrifice", "exercise", "experience", "office"],
        answer: 3,
        word: "office",
        wordZh: "辦公室",
        explanation: "go to the office 是「去辦公室上班」的固定表達，是白領工作者的日常。句意：「她每天去辦公室，從早上九點工作到下午五點。」(D) office（辦公室）正確，符合「上下班時間固定」的職場情境。(A) sacrifice（犧牲）、(B) exercise（運動）、(C) experience（經驗）均不是人們每天「去」的特定工作地點。"
      },
      {
        stem: "Having two years of _____ as a cook helped her find a job at the restaurant.",
        options: ["job", "office", "work", "experience"],
        answer: 3,
        word: "experience",
        wordZh: "經驗；工作資歷",
        explanation: "have experience as + 職業 表示「有擔任……的工作經驗」，是求職常見表達。句意：「有兩年廚師工作經驗幫助她找到了餐廳的工作。」(D) experience（經驗）正確。(A) job（工作）指職位，(B) office（辦公室）指地點，(C) work（工作）較泛指，但 two years of work 無法搭配 as a cook 說明是哪類工作經驗，experience 最精確。"
      },
      {
        stem: "My uncle does a lot of _____ to stay healthy, such as jogging and swimming.",
        options: ["sacrifice", "experience", "work", "exercise"],
        answer: 3,
        word: "exercise",
        wordZh: "運動；鍛鍊",
        explanation: "do exercise 是「做運動」的固定片語，jogging（慢跑）和 swimming（游泳）都是運動項目。句意：「我叔叔做很多運動來保持健康，例如慢跑和游泳。」(D) exercise（運動）正確，且與後面舉例的運動項目一致。(A) sacrifice（犧牲）、(B) experience（經驗）、(C) work（工作）均不符合「保持健康」的活動語意。"
      },
      {
        stem: "Parents make great _____ for their children by working hard every day.",
        options: ["office", "work", "exercise", "sacrifice"],
        answer: 3,
        word: "sacrifice",
        wordZh: "犧牲；奉獻",
        explanation: "make a sacrifice 或 make sacrifices 是「做出犧牲」的固定搭配，描述父母為孩子的付出。句意：「父母每天努力工作，為子女做出巨大的犧牲。」(D) sacrifice（犧牲）正確。(A) office（辦公室）、(B) work（工作）、(C) exercise（運動）均不能搭配 make great ___ 並形成「為孩子付出」的語意。"
      },
      {
        stem: "Tom is looking for a part-time _____ to earn some money during the summer vacation.",
        options: ["exercise", "sacrifice", "experience", "job"],
        answer: 3,
        word: "job",
        wordZh: "工作；職位",
        explanation: "part-time job 是「兼職工作」的固定搭配，是暑假打工的常見表達。句意：「Tom 在暑假期間尋找一份兼職工作來賺一些錢。」(D) job（工作/職位）正確，搭配 part-time 形成固定片語。(A) exercise（運動）、(B) sacrifice（犧牲）、(C) experience（經驗）均不與 part-time 搭配形成「打工」的語意。"
      },
      {
        stem: "She _____ very hard on the project and finished it two days ahead of schedule.",
        options: ["office", "sacrifice", "exercise", "work"],
        answer: 3,
        word: "work",
        wordZh: "工作；努力",
        explanation: "work hard on sth. 是「在某事上努力工作」的固定片語。句意：「她非常努力地完成了這個專案，比預定時間提早兩天完成。」(D) work（工作）正確，為動詞用法。(A) office（辦公室）為名詞，(B) sacrifice（犧牲）和 (C) exercise（運動）語意不符合「努力完成專案」的情境。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 11 ── 情緒形容詞
  // ══════════════════════════════════════════════
  {
    day: 11,
    title: "Day 11 ── 情緒形容詞",
    week: 2,
    questions: [
      {
        stem: "The little girl was _____ to speak in front of the whole class for the first time.",
        options: ["happy", "brave", "friendly", "shy"],
        answer: 3,
        word: "shy",
        wordZh: "害羞的",
        explanation: "shy 表示「害羞的」，描述在眾人面前說話感到不自在的情緒。句意：「這個小女孩第一次在全班面前說話時感到害羞。」(D) shy（害羞的）正確，「第一次在眾人面前說話」是典型的害羞情境。(A) happy（開心的）相反，(B) brave（勇敢的）表示無所畏懼，(C) friendly（友善的）描述待人態度，均不符。"
      },
      {
        stem: "He was _____ enough to jump into the river and save the drowning child.",
        options: ["lonely", "lazy", "afraid", "brave"],
        answer: 3,
        word: "brave",
        wordZh: "勇敢的",
        explanation: "brave enough to V 表示「有足夠的勇氣去做……」。句意：「他足夠勇敢，跳入河中救出了溺水的孩子。」(D) brave（勇敢的）正確，跳河救人是需要勇氣的行動。(A) lonely（孤獨的）、(B) lazy（懶惰的）、(C) afraid（害怕的）均與「勇敢的救援行為」相反或不符語意。"
      },
      {
        stem: "Sara felt _____ because none of her friends came to her birthday party.",
        options: ["happy", "friendly", "shy", "lonely"],
        answer: 3,
        word: "lonely",
        wordZh: "孤獨的；寂寞的",
        explanation: "feel lonely 表示「感到孤獨/寂寞」，朋友們都沒有來是造成孤獨感的原因。句意：「Sara 感到很寂寞，因為她的朋友們都沒有來參加她的生日派對。」(D) lonely（孤獨的）正確。(A) happy（開心的）相反，(B) friendly（友善的）不是情緒狀態，(C) shy（害羞的）不符合「沒有朋友來」的感受。"
      },
      {
        stem: "The new student was very _____ and greeted everyone with a big smile.",
        options: ["afraid", "lonely", "lazy", "friendly"],
        answer: 3,
        word: "friendly",
        wordZh: "友善的；親切的",
        explanation: "friendly 表示「友善的」，向所有人打招呼並微笑是典型友善行為。句意：「這位新同學非常友善，笑著向每個人打招呼。」(D) friendly（友善的）正確。(A) afraid（害怕的）表示恐懼，(B) lonely（孤獨的）表示寂寞，(C) lazy（懶惰的）表示懶散，均不符合「主動問候」的積極態度。"
      },
      {
        stem: "The students were _____ of the big dog that kept barking at them.",
        options: ["brave", "shy", "happy", "afraid"],
        answer: 3,
        word: "afraid",
        wordZh: "害怕的",
        explanation: "be afraid of + N/V-ing 是「害怕……」的固定句型。句意：「學生們害怕那隻一直朝他們吠叫的大狗。」(D) afraid（害怕的）正確，搭配介詞 of 表示害怕的對象。(A) brave（勇敢的）、(B) shy（害羞的）、(C) happy（開心的）均不符合「面對吠叫狗」的情緒反應。"
      },
      {
        stem: "Tom was too _____ to clean his room, so it became very messy.",
        options: ["friendly", "brave", "shy", "lazy"],
        answer: 3,
        word: "lazy",
        wordZh: "懶惰的",
        explanation: "too lazy to V 表示「太懶惰而不去做……」，描述因懶惰而不做整理的情形。句意：「Tom 太懶了，不想打掃他的房間，所以房間變得非常凌亂。」(D) lazy（懶惰的）正確。(A) friendly（友善的）、(B) brave（勇敢的）、(C) shy（害羞的）均與「不打掃=懶惰」的語意不符。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 12 ── 動作動詞
  // ══════════════════════════════════════════════
  {
    day: 12,
    title: "Day 12 ── 動作動詞",
    week: 2,
    questions: [
      {
        stem: "The police asked everyone to _____ away from the dangerous building.",
        options: ["agree", "believe", "keep", "save"],
        answer: 2,
        word: "keep",
        wordZh: "保持；繼續",
        explanation: "keep away from 是「遠離……」的固定片語，常用於警告語境。句意：「警察要求所有人遠離那棟危險建築。」(C) keep（保持）正確，搭配 away from 表示保持距離。(A) agree（同意）、(B) believe（相信）、(D) save（拯救）均無法與 away from 構成合理的警告指令。"
      },
      {
        stem: "The firefighter risked his life to _____ a cat that was stuck in the tree.",
        options: ["decide", "follow", "move", "save"],
        answer: 3,
        word: "save",
        wordZh: "拯救；救助",
        explanation: "save sth./sb. 是「拯救某物/某人」的動詞，消防員的職責之一。句意：「消防員冒著生命危險，救出一隻卡在樹上的貓。」(D) save（拯救）正確。(A) decide（決定）、(B) follow（跟隨）、(C) move（移動）均不符合「消防員冒險」的救援語意。"
      },
      {
        stem: "Please _____ the heavy box to the corner so we can clean the floor.",
        options: ["save", "believe", "agree", "move"],
        answer: 3,
        word: "move",
        wordZh: "移動；搬動",
        explanation: "move the box to 是「把箱子移到……」的固定表達，表示物理上的搬移動作。句意：「請把那個重箱子移到角落，這樣我們才能清潔地板。」(D) move（移動）正確。(A) save（拯救）、(B) believe（相信）、(C) agree（同意）均不是「搬動物品」的動詞。"
      },
      {
        stem: "I don't _____ that eating breakfast will make you smarter, but it's still healthy.",
        options: ["move", "keep", "follow", "believe"],
        answer: 3,
        word: "believe",
        wordZh: "相信",
        explanation: "believe that + 子句 表示「相信……」，是表達個人觀點的動詞結構。句意：「我不相信吃早餐會讓你變聰明，但它仍然是健康的。」(D) believe（相信）正確，搭配 that 子句表達信念。(A) move（移動）、(B) keep（保持）、(C) follow（遵循）均不能接 that 子句表達「相信某件事」。"
      },
      {
        stem: "Both teams finally _____ to sign the agreement after a long discussion.",
        options: ["save", "decide", "move", "agree"],
        answer: 3,
        word: "agree",
        wordZh: "同意；達成協議",
        explanation: "agree to V 是「同意去做……」的固定搭配，強調雙方達成共識。句意：「兩支隊伍在長時間討論後終於同意簽署協議。」(C) agree（同意）正確，搭配 to sign 表示同意某行動。(A) save（拯救）、(B) decide（決定）語意不符，(C) move（移動）也不是「達成協議」的動詞。"
      },
      {
        stem: "We _____ to hold the sports day on Saturday if the weather is nice.",
        options: ["follow", "believe", "keep", "decide"],
        answer: 3,
        word: "decide",
        wordZh: "決定",
        explanation: "decide to V 是「決定去做……」的固定句型，是表達決策的動詞搭配。句意：「如果天氣好，我們決定在週六舉行運動會。」(D) decide（決定）正確，搭配 to hold 表示決定舉辦活動。(A) follow（遵循）不搭配 to V 表示決策，(B) believe（相信）、(C) keep（保持）均不符合「做出決定」的語意。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 13 ── 家庭人際
  // ══════════════════════════════════════════════
  {
    day: 13,
    title: "Day 13 ── 家庭人際",
    week: 2,
    questions: [
      {
        stem: "My _____ is eighty years old, but she still cooks for the whole family every day.",
        options: ["daughter", "child", "friend", "grandparent"],
        answer: 3,
        word: "grandparent",
        wordZh: "祖父母",
        explanation: "grandparent 是「祖父或祖母（祖父母）」，八十歲的長者最符合祖父母輩。句意：「我的祖母（外婆）八十歲了，但她每天仍為全家人煮飯。」(D) grandparent（祖父母）正確。(A) daughter（女兒）通常年輕，(B) child（孩子）更年輕，(C) friend（朋友）不屬家庭成員，均不符合「八十歲仍煮飯」的家庭情境。"
      },
      {
        stem: "The _____ of Mr. and Mrs. Chen works as a nurse in a big hospital downtown.",
        options: ["grandparent", "friend", "parent", "daughter"],
        answer: 3,
        word: "daughter",
        wordZh: "女兒",
        explanation: "the daughter of sb. 是「某人的女兒」，表示父母與子女的關係。句意：「陳先生和陳太太的女兒在市中心一家大醫院擔任護士。」(D) daughter（女兒）正確，是 Mr. and Mrs. Chen 的後代且為女性。(A) grandparent（祖父母）是長輩，(B) friend（朋友）非家庭成員，(C) parent（父母）是長輩，均不是「他們的下一代女性成員」。"
      },
      {
        stem: "Her _____ was only five when he started learning to play the piano.",
        options: ["marry", "friend", "parent", "child"],
        answer: 3,
        word: "child",
        wordZh: "孩子；小孩",
        explanation: "child 是「孩子、小孩」，五歲學鋼琴是符合兒童年齡的行為。句意：「她的孩子五歲就開始學鋼琴了。」(D) child（孩子）正確，且 he 代詞暗示是男孩，child 為中性詞。(A) marry 是動詞，(B) friend 不是孩子，(C) parent 是父母（長輩），均不符合「五歲學琴」的語意。"
      },
      {
        stem: "Amy and Jason will _____ next spring after dating for three years.",
        options: ["child", "daughter", "grandparent", "marry"],
        answer: 3,
        word: "marry",
        wordZh: "結婚",
        explanation: "marry 作不及物動詞表示「結婚」，或 marry sb. 表示「與某人結婚」。句意：「Amy 和 Jason 交往三年後，將在明年春天結婚。」(D) marry（結婚）正確，是唯一動詞選項且符合婚姻語境。(A) child（孩子）、(B) daughter（女兒）、(C) grandparent（祖父母）均為名詞，不能放在動詞位置。"
      },
      {
        stem: "Her _____ always supports her no matter what decisions she makes in life.",
        options: ["marry", "child", "friend", "parent"],
        answer: 3,
        word: "parent",
        wordZh: "父母親",
        explanation: "parent 是「父母親（單指一方或複數父母）」，是無條件支持子女的典型人物。句意：「無論她在生活中做出什麼決定，她的父母總是支持她。」(D) parent（父母親）正確，複數 parents 表示父母雙方。(A) marry 是動詞，(B) child（孩子）是晚輩，(C) friend 雖然也會支持，但語境強調「無論任何決定」更指向父母。"
      },
      {
        stem: "He is my best _____, and we have known each other since kindergarten.",
        options: ["grandparent", "daughter", "child", "friend"],
        answer: 3,
        word: "friend",
        wordZh: "朋友",
        explanation: "best friend 是「最好的朋友」，從幼稚園就認識是典型的好友描述。句意：「他是我最好的朋友，我們從幼稚園就認識彼此了。」(D) friend（朋友）正確，是非家庭成員的親密關係。(A) grandparent（祖父母）是家庭成員，(B) daughter（女兒）是晚輩女性，(C) child（孩子）是年幼的人，均不符合「從幼稚園認識的最佳友人」。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 14 ── 第二週複習 (Days 8–13 混合)
  // ══════════════════════════════════════════════
  {
    day: 14,
    title: "Day 14 ── 第二週複習",
    week: 2,
    questions: [
      {
        stem: "You should _____ a good book every day to improve your reading skills.",
        options: ["teach", "show", "know", "read"],
        answer: 3,
        word: "read",
        wordZh: "閱讀",
        explanation: "read a book 是「閱讀書籍」的固定搭配，也是提升閱讀能力的方法。句意：「你應該每天閱讀一本好書，以提升閱讀能力。」(D) read（閱讀）正確。(A) teach（教）需要對象，(B) show（展示）不適合「閱讀書本」，(C) know（知道）是靜態認知動詞，不表示進行閱讀的動作。"
      },
      {
        stem: "The new classmate was _____ at first, but she became more outgoing after a few weeks.",
        options: ["brave", "lonely", "happy", "shy"],
        answer: 3,
        word: "shy",
        wordZh: "害羞的",
        explanation: "shy 表示「害羞的」，at first（一開始）暗示最初的性格，後來才變外向。句意：「新同學一開始很害羞，但幾週後變得更外向了。」(D) shy（害羞的）正確，與 outgoing（外向的）形成對比。(A) brave（勇敢的）、(B) lonely（孤獨的）、(C) happy（開心的）均不能與後半段「變得外向」形成合理的對比。"
      },
      {
        stem: "The doctor _____ that we should drink at least eight glasses of water every day.",
        options: ["move", "follow", "believe", "decide"],
        answer: 2,
        word: "believe",
        wordZh: "相信；認為",
        explanation: "believe that + 子句 表示「認為／相信……」，醫生提出健康建議的常見語境。句意：「這位醫生認為我們每天應該至少喝八杯水。」(C) believe（認為）正確。(A) move（移動）、(B) follow（遵循）不接 that 子句，(D) decide（決定）也可接 that 子句，但語意上醫生是「相信/建議」而非「決定」。"
      },
      {
        stem: "He wants to _____ a teacher when he grows up because he loves helping students.",
        options: ["decide", "keep", "become", "save"],
        answer: 2,
        word: "become",
        wordZh: "成為",
        explanation: "want to become + 職業 是「想成為……」的固定句型。句意：「他長大後想成為一名老師，因為他喜歡幫助學生。」(C) become（成為）正確。(A) decide（決定）語意不符「成為某職業」，(B) keep（保持）、(D) save（拯救）均不符「成為老師」的語意，become 專門用於表達身份轉變。"
      },
      {
        stem: "The _____ went to the parent-teacher meeting to hear about their son's progress.",
        options: ["grandparent", "friend", "child", "parent"],
        answer: 3,
        word: "parent",
        wordZh: "父母",
        explanation: "parent-teacher meeting（家長會）是父母（parent）與老師見面的場合。句意：「這對父母去參加家長會，了解兒子的學習進度。」(D) parent（父母）正確，家長會的主角就是父母。(A) grandparent（祖父母）通常不是主要參加者，(B) friend（朋友）無關，(C) child（孩子）是被討論對象，不是去開會的人。"
      },
      {
        stem: "A _____ diet with plenty of vegetables and fruits keeps you away from illness.",
        options: ["lazy", "lonely", "afraid", "healthy"],
        answer: 3,
        word: "healthy",
        wordZh: "健康的",
        explanation: "a healthy diet 是「健康的飲食」，是保持身體健康的重要因素。句意：「富含蔬果的健康飲食讓你遠離疾病。」(D) healthy（健康的）正確，修飾 diet 表示飲食的品質。(A) lazy（懶惰的）、(B) lonely（孤獨的）、(C) afraid（害怕的）均為負面或情緒形容詞，不適合修飾「飲食」。"
      },
      {
        stem: "Mandy has a lot of _____ as a tour guide because she traveled to many countries.",
        options: ["office", "job", "exercise", "experience"],
        answer: 3,
        word: "experience",
        wordZh: "經驗",
        explanation: "experience as + 職業 表示「擔任……的工作經驗」，與「去過許多國家」的背景相符。句意：「Mandy 有豐富的導遊工作經驗，因為她去過很多國家。」(D) experience（經驗）正確。(A) office（辦公室）是地點，(B) job（職位）通常是 a job，不能說 a lot of job，(C) exercise（運動）語意不符。"
      },
      {
        stem: "Please _____ the rules of the library, such as keeping quiet and returning books on time.",
        options: ["agree", "decide", "save", "follow"],
        answer: 3,
        word: "follow",
        wordZh: "遵守；遵循",
        explanation: "follow the rules 是「遵守規則」的固定搭配，圖書館例子說明了規則的內容。句意：「請遵守圖書館規定，例如保持安靜和按時還書。」(D) follow（遵守）正確。(A) agree（同意）不能接 the rules 表示「遵守」，(B) decide（決定）、(C) save（拯救）均不是「遵守規定」的正確動詞搭配。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 15 ── 建造與創作
  // ══════════════════════════════════════════════
  {
    day: 15,
    title: "Day 15 ── 建造與創作",
    week: 3,
    questions: [
      {
        stem: "Learning _____ is a great way to learn about Japanese culture and practice patience.",
        options: ["furniture", "group", "origami", "effect"],
        answer: 2,
        word: "origami",
        wordZh: "摺紙（日本藝術）",
        explanation: "origami 是「日本摺紙藝術」，學習摺紙是了解日本文化的方式。句意：「學習摺紙是了解日本文化和練習耐心的好方法。」(C) origami（摺紙）正確，與「日本文化」的語境完全吻合。(A) furniture（家具）、(B) group（群體）、(D) effect（效果）均與日本傳統藝術或摺紙無關。"
      },
      {
        stem: "My father plans to _____ a treehouse in the backyard for my little brother.",
        options: ["origami", "part", "effect", "build"],
        answer: 3,
        word: "build",
        wordZh: "建造；建立",
        explanation: "build a treehouse 是「建造樹屋」的動詞搭配，build 是建造的核心動詞。句意：「我父親計畫在後院為我弟弟建造一座樹屋。」(D) build（建造）正確，是建築物或構造物最常用的動詞。(A) origami（摺紙）為名詞，(B) part（部分）和 (C) effect（效果）均為名詞，不能放在動詞位置。"
      },
      {
        stem: "The new library uses modern _____, such as wooden desks and colorful chairs.",
        options: ["build", "group", "origami", "furniture"],
        answer: 3,
        word: "furniture",
        wordZh: "家具",
        explanation: "furniture 是「家具」的集合名詞（不可數），桌椅都是家具的例子。句意：「新圖書館使用現代化家具，例如木製桌子和彩色椅子。」(D) furniture（家具）正確，與例子中的 desks 和 chairs 一致。(A) build 為動詞，(B) group（群體）、(C) origami（摺紙）均不是「室內裝設品」的意思。"
      },
      {
        stem: "Staying up late can have a bad _____ on your health and your school performance.",
        options: ["part", "furniture", "origami", "effect"],
        answer: 3,
        word: "effect",
        wordZh: "效果；影響",
        explanation: "have an effect on sb./sth. 是「對……產生影響」的固定搭配。句意：「熬夜對你的健康和學業表現都有不良影響。」(D) effect（影響）正確，搭配 bad 和 on 表達負面作用。(A) part（部分）、(B) furniture（家具）、(C) origami（摺紙）均無法搭配 have a bad ___ on 表達「影響」。"
      },
      {
        stem: "Would you like to take _____ in the school's art competition this Saturday?",
        options: ["group", "effect", "furniture", "part"],
        answer: 3,
        word: "part",
        wordZh: "部分；參與",
        explanation: "take part in 是「參加/參與……」的固定片語，等同於 join 或 participate in。句意：「你想參加本週六學校的藝術比賽嗎？」(D) part（參與）正確，take part in 是常考固定片語。(A) group（群體）、(B) effect（效果）、(C) furniture（家具）均不能搭配 take ___ in 形成「參加」的意義。"
      },
      {
        stem: "Our _____ of five students worked together to build a model bridge.",
        options: ["effect", "origami", "part", "group"],
        answer: 3,
        word: "group",
        wordZh: "群組；小組",
        explanation: "a group of + 數字 + 名詞 表示「一組……人/物」，是常見數量結構。句意：「我們五個人的小組一起合作建造了一座橋梁模型。」(D) group（小組）正確，表示一個協作的群體。(A) effect（效果）、(B) origami（摺紙）、(C) part（部分）均不能搭配 a ___ of five students。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 16 ── 金錢與消費
  // ══════════════════════════════════════════════
  {
    day: 16,
    title: "Day 16 ── 金錢與消費",
    week: 3,
    questions: [
      {
        stem: "How much did you _____ on the new sneakers you bought last weekend?",
        options: ["cost", "save", "free", "spend"],
        answer: 3,
        word: "spend",
        wordZh: "花費（錢或時間）",
        explanation: "spend money on sth. 是「在某物上花錢」的固定句型，主語是人。句意：「你上週末買的那雙新球鞋花了你多少錢？」(D) spend（花費）正確，因為主語是「你（人）」，spend 的主語是人。(A) cost（花費）主語是物，(B) save（儲蓄）語意相反，(C) free（免費的）為形容詞，不能放在動詞位置。"
      },
      {
        stem: "This jacket _____ three thousand dollars, which is too expensive for me.",
        options: ["pays", "saves", "spends", "costs"],
        answer: 3,
        word: "cost",
        wordZh: "（物品）花費",
        explanation: "cost 的主語是「物品」，表示某物的價格。句意：「這件夾克要三千元，對我來說太貴了。」(D) costs（花費）正確，主語是 this jacket（物），符合 cost 的用法。(A) pays（支付）主語應是人，(B) saves（節省）語意相反，(C) spends（花費）主語也應是人。"
      },
      {
        stem: "He tries to _____ at least five hundred dollars every month for his college fund.",
        options: ["cost", "public", "price", "save"],
        answer: 3,
        word: "save",
        wordZh: "儲蓄；節省",
        explanation: "save money 是「存錢/儲蓄」的固定搭配，college fund（大學基金）說明存錢目的。句意：「他每個月盡量存至少五百元作為大學基金。」(D) save（儲蓄）正確。(A) cost（花費）主語為物，(B) public（公共的）為形容詞，(C) price（價格）為名詞，均不能作動詞表示「儲蓄」。"
      },
      {
        stem: "The _____ of this smartphone has gone down a lot since the new model came out.",
        options: ["free", "spend", "money", "price"],
        answer: 3,
        word: "price",
        wordZh: "價格",
        explanation: "the price of sth. has gone down 表示「某物的價格下降了」，是描述市場變化的常見表達。句意：「自從新款上市後，這款智慧型手機的價格已大幅下降。」(D) price（價格）正確。(A) free（免費）為形容詞，(B) spend 為動詞，(C) money（金錢）是泛稱，the money of 不是固定用法。"
      },
      {
        stem: "The entrance to the museum is _____ for children under twelve years old.",
        options: ["price", "save", "public", "free"],
        answer: 3,
        word: "free",
        wordZh: "免費的",
        explanation: "be free for sb. 表示「對……是免費的」，是描述優惠政策的常見表達。句意：「博物館入場對十二歲以下的兒童免費。」(D) free（免費的）正確，作形容詞補語。(A) price（價格）為名詞，(B) save（儲蓄）為動詞，(C) public（公共的）雖是形容詞但語意不符「免費」。"
      },
      {
        stem: "The bus system in this city is _____, so anyone can use it without a special pass.",
        options: ["spend", "cost", "free", "public"],
        answer: 3,
        word: "public",
        wordZh: "公共的；公眾的",
        explanation: "public transportation / public bus system 是「公共交通系統」，任何人都可使用。句意：「這座城市的公車系統是公共的，所以任何人無需特殊通行證就可以使用。」(D) public（公共的）正確，描述公眾可用的設施。(A) spend（花費）、(B) cost（花費）均為動詞，(C) free（免費的）雖可能，但 public 更強調「公眾可用」的屬性，語意更精確。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 17 ── 媒體與通訊
  // ══════════════════════════════════════════════
  {
    day: 17,
    title: "Day 17 ── 媒體與通訊",
    week: 3,
    questions: [
      {
        stem: "Grandpa reads the _____ every morning to stay updated on what is happening in the world.",
        options: ["video", "station", "online", "newspaper"],
        answer: 3,
        word: "newspaper",
        wordZh: "報紙",
        explanation: "read the newspaper 是「閱讀報紙」的固定搭配，報紙是傳統的新聞媒體。句意：「爺爺每天早上讀報紙，以掌握世界上發生的事情。」(D) newspaper（報紙）正確。(A) video（影片）需要觀看不是閱讀，(B) station（車站/電台）不能「讀」，(C) online（線上的）是副詞/形容詞，不是名詞。"
      },
      {
        stem: "She shared a funny _____ of her dog playing in the snow on social media.",
        options: ["news", "picture", "newspaper", "video"],
        answer: 3,
        word: "video",
        wordZh: "影片；視頻",
        explanation: "share a video 是「分享影片」的固定搭配，描述在社群媒體上分享動態影像。句意：「她在社群媒體上分享了一段她的狗在雪中玩耍的有趣影片。」(D) video（影片）正確，影片有動態影像，符合「狗在雪中玩耍」的情境。(A) news（新聞）、(B) picture（圖片）是靜態的，(C) newspaper（報紙）是媒體，均不精確。"
      },
      {
        stem: "The _____ reported that a new school will be built in our neighborhood next year.",
        options: ["picture", "online", "station", "news"],
        answer: 3,
        word: "news",
        wordZh: "新聞；消息",
        explanation: "the news reported that 是「新聞報導……」的固定句型，news 在此為主語。句意：「新聞報導說明年將在我們社區建造一所新學校。」(D) news（新聞）正確，news 是不可數名詞，搭配 reported that 子句。(A) picture（圖片）、(C) station（車站/電台）不能「報導」子句，(B) online 為副詞/形容詞，不能作主語。"
      },
      {
        stem: "Mom took a _____ of us in front of the Eiffel Tower to remember the moment.",
        options: ["story", "station", "news", "picture"],
        answer: 3,
        word: "picture",
        wordZh: "照片；圖片",
        explanation: "take a picture of sb./sth. 是「拍某人/某物的照片」的固定片語。句意：「媽媽在艾菲爾鐵塔前幫我們拍了一張照片，留作紀念。」(D) picture（照片）正確，搭配 took 和 of us 表示拍照行動。(A) story（故事）、(B) station（車站）、(C) news（新聞）均不符合「拍攝記念影像」的語意。"
      },
      {
        stem: "The children love to read comic books and listen to interesting _____ at bedtime.",
        options: ["video", "newspaper", "online", "story"],
        answer: 3,
        word: "story",
        wordZh: "故事",
        explanation: "listen to a story 是「聽故事」的固定搭配，睡前聽故事是常見兒童活動。句意：「孩子們喜歡讀漫畫書，並在睡前聽有趣的故事。」(D) story（故事）正確，搭配 listen to 和 at bedtime。(A) video（影片）是看不是聽，(B) newspaper（報紙）不在睡前聽，(C) online 為副詞，不能作 listen to 的受詞。"
      },
      {
        stem: "You can find a lot of useful information by searching _____ for free.",
        options: ["picture", "story", "newspaper", "online"],
        answer: 3,
        word: "online",
        wordZh: "線上；網路上",
        explanation: "search online 是「在網路上搜尋」的固定副詞搭配，描述使用網際網路找資料。句意：「你可以免費在網路上搜尋很多有用的資訊。」(D) online（線上）正確，作副詞修飾 searching。(A) picture（圖片）、(B) story（故事）、(C) newspaper（報紙）均為名詞，不能作副詞修飾搜尋動作。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 18 ── 健康與身體
  // ══════════════════════════════════════════════
  {
    day: 18,
    title: "Day 18 ── 健康與身體",
    week: 3,
    questions: [
      {
        stem: "She was taken to the _____ by ambulance after she fell off her bicycle.",
        options: ["health", "hungry", "doctor", "hospital"],
        answer: 3,
        word: "hospital",
        wordZh: "醫院",
        explanation: "take sb. to the hospital 是「把某人送醫院」的固定表達，救護車送醫是緊急情況的標準處理。句意：「她從腳踏車上跌倒後，被救護車送往醫院。」(D) hospital（醫院）正確。(A) health（健康）是抽象名詞，不是地點，(B) hungry（飢餓的）是形容詞，(C) doctor（醫生）是人，不是場所，均不符合「搭救護車去的地方」。"
      },
      {
        stem: "Good sleep, exercise, and a balanced diet are important for your _____ .",
        options: ["hospital", "hurt", "hungry", "health"],
        answer: 3,
        word: "health",
        wordZh: "健康",
        explanation: "good for your health 是「對你的健康有益」的固定表達，是常見的健康建議語境。句意：「良好的睡眠、運動和均衡的飲食對你的健康很重要。」(D) health（健康）正確，是能被三個健康習慣所影響的抽象名詞。(A) hospital（醫院）是地點，(B) hurt（受傷）為動詞，(C) hungry（飢餓的）為形容詞，均不符合名詞位置。"
      },
      {
        stem: "The boy _____ his knee badly when he fell down the stairs at school.",
        options: ["healthy", "doctor", "hospital", "hurt"],
        answer: 3,
        word: "hurt",
        wordZh: "使受傷；弄痛",
        explanation: "hurt one's knee 是「弄傷膝蓋」的動詞搭配，描述受傷的動作。句意：「那個男孩在學校樓梯上跌倒時，嚴重弄傷了膝蓋。」(D) hurt（受傷/弄痛）正確，作及物動詞接受傷的部位。(A) healthy（健康的）為形容詞，(B) doctor（醫生）、(C) hospital（醫院）均為名詞，不能放在動詞位置。"
      },
      {
        stem: "The _____ advised her to rest for three days and drink plenty of water.",
        options: ["health", "hurt", "hospital", "doctor"],
        answer: 3,
        word: "doctor",
        wordZh: "醫生",
        explanation: "the doctor advised sb. to V 是「醫生建議某人去做……」的常見醫療語境。句意：「醫生建議她休息三天，並大量喝水。」(D) doctor（醫生）正確，醫生才有資格給出醫療建議。(A) health（健康）是抽象概念，不能提出建議，(B) hurt（受傷）為動詞，(C) hospital（醫院）是場所，均不能「建議」某人做某事。"
      },
      {
        stem: "I am _____ after swimming for an hour. Let's go find something to eat.",
        options: ["healthy", "hurt", "hospital", "hungry"],
        answer: 3,
        word: "hungry",
        wordZh: "飢餓的",
        explanation: "be hungry 表示「感到飢餓」，游泳一小時後很自然地感到餓。句意：「我游泳一小時後感到飢餓了，我們去找點東西吃吧。」(D) hungry（飢餓的）正確，與 go find something to eat 的動機一致。(A) healthy（健康的）不是找食物的原因，(B) hurt（受傷的）也不是，(C) hospital 為名詞，不能作形容詞補語。"
      },
      {
        stem: "Eating too much sugar is not _____, and it may cause tooth problems.",
        options: ["hurt", "hungry", "hospital", "healthy"],
        answer: 3,
        word: "healthy",
        wordZh: "健康的；有益健康的",
        explanation: "not healthy 表示「不健康的」，吃太多糖對健康有害是常識。句意：「吃太多糖是不健康的，可能會導致牙齒問題。」(D) healthy（健康的）正確，作形容詞補語。(A) hurt（受傷）、(B) hungry（飢餓的）均為其他語意的形容詞，(C) hospital（醫院）為名詞，均不適合充當 not ___ 的補語描述飲食習慣。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 19 ── 時間副詞
  // ══════════════════════════════════════════════
  {
    day: 19,
    title: "Day 19 ── 時間副詞",
    week: 3,
    questions: [
      {
        stem: "It was raining in the morning, but it stopped in the _____ and became sunny.",
        options: ["last", "soon", "perhaps", "evening"],
        answer: 3,
        word: "evening",
        wordZh: "傍晚；晚上",
        explanation: "in the evening 是「在傍晚/晚上」的固定時間表達，與 in the morning 形成時間對比。句意：「早上在下雨，但傍晚停了並放晴了。」(D) evening（傍晚）正確，與 morning 並列表示一天中不同的時段。(A) last（上一個）、(B) soon（不久後）、(C) perhaps（也許）均不是固定在 in the ___ 後面形成時段的名詞。"
      },
      {
        stem: "My brother is still in the shower. He'll come out _____.",
        options: ["last", "evening", "perhaps", "soon"],
        answer: 3,
        word: "soon",
        wordZh: "很快；不久",
        explanation: "soon 是副詞，表示「不久之後、很快就」，描述即將發生的事。句意：「我哥哥還在洗澡，他很快就會出來。」(D) soon（不久）正確，暗示等待時間短暫。(A) last（最後的）是形容詞，(B) evening（傍晚）是名詞時段，放在句末無完整副詞功能，(C) perhaps（也許）表示不確定，語意不符（哥哥一定會出來）。"
      },
      {
        stem: "We saw that movie _____ week and really enjoyed the ending.",
        options: ["soon", "probably", "evening", "last"],
        answer: 3,
        word: "last",
        wordZh: "上（週、年等）",
        explanation: "last week 是「上週」的固定時間表達，last 修飾 week 表示剛過去的一週。句意：「我們上週看了那部電影，非常喜歡結局。」(D) last（上週的 last）正確，last + 時間詞是常用的過去時間表達。(A) soon（很快）、(B) probably（可能）、(C) evening（傍晚）均不能與 week 搭配形成「上週」的意義。"
      },
      {
        stem: "_____, we will take a short break and then continue with the next activity.",
        options: ["Last", "Evening", "Soon", "Later"],
        answer: 3,
        word: "later",
        wordZh: "稍後；之後",
        explanation: "later 是副詞，表示「稍後、之後」，說明下一步行動的時間安排。句意：「稍後，我們會休息一下，然後繼續進行下一個活動。」(D) Later（稍後）正確，置於句首表示接下來的時間順序。(A) Last（上一個）語意不符，(B) Evening（傍晚）作時間副詞需要 in the，(C) Soon（很快）也可，但 Later 更強調「之後的某個時間點」，更符合「先休息再繼續」的語序。"
      },
      {
        stem: "_____ it will rain tomorrow, so bring an umbrella just in case.",
        options: ["Last", "Evening", "Later", "Perhaps"],
        answer: 3,
        word: "perhaps",
        wordZh: "也許；可能",
        explanation: "perhaps 是副詞，表示「也許、可能」，表達不確定性，常用於給出建議的語境。句意：「明天也許會下雨，所以以防萬一帶把傘吧。」(D) Perhaps（也許）正確，搭配 just in case 強調不確定但有可能發生。(A) Last（上一個）是形容詞，(B) Evening（傍晚）是名詞，(C) Later（稍後）是時間副詞，均不表示「不確定性的可能」。"
      },
      {
        stem: "She will _____ pass the test because she has studied very hard all week.",
        options: ["last", "evening", "soon", "probably"],
        answer: 3,
        word: "probably",
        wordZh: "很可能；大概",
        explanation: "probably 是副詞，表示「很可能、大概」，比 perhaps 確定性更高，常放在 will 之後。句意：「她這週努力讀書了，所以很可能會通過考試。」(D) probably（很可能）正確，搭配 will 表示高度可能。(A) last（上一個）、(B) evening（傍晚）、(C) soon（很快）均不是表達「根據努力程度推測結果」的可能性副詞。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 20 ── 藝術文化
  // ══════════════════════════════════════════════
  {
    day: 20,
    title: "Day 20 ── 藝術文化",
    week: 3,
    questions: [
      {
        stem: "My sister loves to read _____ books, especially stories about superheroes.",
        options: ["museum", "history", "dance", "comic"],
        answer: 3,
        word: "comic",
        wordZh: "漫畫",
        explanation: "comic books 是「漫畫書」的固定搭配，超級英雄故事是漫畫的典型主題。句意：「我姊姊喜歡看漫畫書，尤其是關於超級英雄的故事。」(D) comic（漫畫）正確，comic books 是固定搭配。(A) museum（博物館）、(B) history（歷史）、(C) dance（舞蹈）均不能搭配 books 形成漫畫書的意思。"
      },
      {
        stem: "We visited the National Palace _____ to see ancient Chinese art and treasures.",
        options: ["comic", "hike", "dance", "museum"],
        answer: 3,
        word: "museum",
        wordZh: "博物館",
        explanation: "visit the museum 是「參觀博物館」，故宮博物院（National Palace Museum）是台灣著名景點。句意：「我們參觀了國立故宮博物院，欣賞中國古代藝術和寶物。」(D) museum（博物館）正確。(A) comic（漫畫）、(B) hike（健行）、(C) dance（舞蹈）均不是「收藏並展覽文物的機構」。"
      },
      {
        stem: "Taiwan has a rich _____ of over four hundred years, from different cultures.",
        options: ["sing", "dance", "museum", "history"],
        answer: 3,
        word: "history",
        wordZh: "歷史",
        explanation: "have a rich history 是「有豐富的歷史」的固定表達，台灣四百年歷史涵蓋多元文化。句意：「台灣有超過四百年的豐富歷史，來自不同的文化。」(D) history（歷史）正確，是描述一個地方過去的詞彙。(A) sing（唱歌）、(B) dance（跳舞）為動詞，(C) museum（博物館）是場所，均不是「一個地方的發展脈絡」。"
      },
      {
        stem: "The students learned a traditional folk _____ as part of the cultural festival.",
        options: ["museum", "comic", "hike", "dance"],
        answer: 3,
        word: "dance",
        wordZh: "舞蹈；跳舞",
        explanation: "learn a dance 是「學一支舞」，traditional folk dance（傳統民俗舞蹈）是文化活動的常見內容。句意：「學生們學習了一支傳統民俗舞蹈，作為文化節的一部分。」(D) dance（舞蹈）正確，folk dance 是固定搭配。(A) museum（博物館）、(B) comic（漫畫）、(C) hike（健行）均不是可以「學習」的藝術表演形式。"
      },
      {
        stem: "She always _____ a song for her grandma when they have dinner together.",
        options: ["hike", "comic", "history", "sing"],
        answer: 3,
        word: "sing",
        wordZh: "唱歌",
        explanation: "sing a song for sb. 是「為某人唱一首歌」的固定搭配，表達藝術表演的溫馨行為。句意：「每次和奶奶一起吃晚飯時，她都會為奶奶唱一首歌。」(D) sing（唱歌）正確，能接受詞 a song 和介詞 for。(A) hike（健行）、(B) comic（漫畫）、(C) history（歷史）均不是可以「做給奶奶聽」的動詞動作。"
      },
      {
        stem: "Our family went on a _____ along the mountain trail and enjoyed the beautiful view.",
        options: ["dance", "comic", "museum", "hike"],
        answer: 3,
        word: "hike",
        wordZh: "健行；徒步旅行",
        explanation: "go on a hike 是「去健行」的固定片語，mountain trail（山間步道）是健行的場所。句意：「我們一家人沿著山間步道健行，欣賞了美麗的風景。」(D) hike（健行）正確，go on a hike 是常用固定搭配。(A) dance（舞蹈）、(B) comic（漫畫）、(C) museum（博物館）均不是「沿著山間步道進行」的活動。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 21 ── 第三週複習 (Days 15–20 混合)
  // ══════════════════════════════════════════════
  {
    day: 21,
    title: "Day 21 ── 第三週複習",
    week: 3,
    questions: [
      {
        stem: "The students _____ a model ship together as their science fair project.",
        options: ["built", "hiked", "danced", "spent"],
        answer: 0,
        word: "build",
        wordZh: "建造（過去式 built）",
        explanation: "build（過去式 built）表示「建造」，科學展覽需要製作模型是合理的專題活動。句意：「學生們一起建造了一艘船隻模型，作為科學展覽的專題。」(A) built（建造）正確。(B) hiked（健行）、(C) danced（跳舞）、(D) spent（花費）均不符合「建造模型船」的動作語意。"
      },
      {
        stem: "Watching too much TV has a bad _____ on students' eyesight and study habits.",
        options: ["price", "story", "furniture", "effect"],
        answer: 3,
        word: "effect",
        wordZh: "影響",
        explanation: "have a bad effect on 是「對……有不良影響」的固定搭配。句意：「看太多電視對學生的視力和學習習慣有不良影響。」(D) effect（影響）正確。(A) price（價格）、(B) story（故事）、(C) furniture（家具）均不能搭配 have a bad ___ on 表示「影響」。"
      },
      {
        stem: "She _____ two thousand dollars on new furniture for her bedroom last month.",
        options: ["saved", "cost", "spent", "paid"],
        answer: 2,
        word: "spend",
        wordZh: "花費",
        explanation: "spend + 金額 + on sth. 是「在某物上花……錢」，主語是人（she）。句意：「她上個月在臥室的新家具上花了兩千元。」(C) spent（花費）正確，主語為人且後接金額與 on。(A) saved（儲蓄）相反，(B) cost（花費）主語應是物，(D) paid（支付）需接 for 或 to sb.，此處句型不完全符合。"
      },
      {
        stem: "The old temple has a long _____ and was built three hundred years ago.",
        options: ["comic", "dance", "hike", "history"],
        answer: 3,
        word: "history",
        wordZh: "歷史",
        explanation: "have a long history 是「有悠久的歷史」，三百年前建造是描述歷史悠久的依據。句意：「這座古老的廟宇有悠久的歷史，建於三百年前。」(D) history（歷史）正確。(A) comic（漫畫）、(B) dance（舞蹈）、(C) hike（健行）均不是形容「廟宇有……」的適當名詞。"
      },
      {
        stem: "The book is _____ now, so you don't need to pay to borrow it from the library.",
        options: ["online", "public", "free", "healthy"],
        answer: 2,
        word: "free",
        wordZh: "免費的",
        explanation: "free 表示「免費的」，不需要付費從圖書館借書是免費使用的體現。句意：「這本書現在是免費的，所以你不需要付費就能向圖書館借閱。」(C) free（免費的）正確。(A) online（線上的）不符合「圖書館實體借閱」情境，(B) public（公共的）雖接近，但 public 強調所有人可用，free 更強調「不收費」，(D) healthy（健康的）語意不符。"
      },
      {
        stem: "Let's _____ in the mountain park on Sunday morning and enjoy the fresh air.",
        options: ["sing", "build", "dance", "hike"],
        answer: 3,
        word: "hike",
        wordZh: "健行",
        explanation: "hike in the mountain park 是「在山地公園健行」的自然活動搭配。句意：「我們星期天早上去山地公園健行，享受新鮮空氣吧。」(D) hike（健行）正確，符合山地公園的活動性質。(A) sing（唱歌）、(B) build（建造）、(C) dance（跳舞）均不是「在山地公園享受新鮮空氣」的典型活動。"
      },
      {
        stem: "Our class is divided into four _____, and each one will make a different dish.",
        options: ["effects", "parts", "stories", "groups"],
        answer: 3,
        word: "group",
        wordZh: "群組；小組",
        explanation: "be divided into groups 是「被分成幾組」的固定搭配，每組做不同料理是分組活動。句意：「我們班被分成四組，每組將製作一道不同的菜餚。」(D) groups（小組）正確，與 divided into 搭配且符合「料理活動分組」語境。(A) effects（效果）、(B) parts（部分）、(C) stories（故事）均不是「班級活動分組」的正確詞彙。"
      },
      {
        stem: "She always takes pictures of the beautiful _____ she finds during her trips.",
        options: ["furniture", "effects", "history", "origami"],
        answer: 2,
        word: "history",
        wordZh: "歷史（景點/背景）",
        explanation: "此題選 history 因為 beautiful history（beautiful historical sites 的省略語境）在旅行情境下，拍攝歷史性景點最合語意。句意：「她在旅行中總是拍下她發現的美麗歷史（景點的照片）。」實際上本題重新評估：(C) history 表示「（具歷史意義的）景物」，比其他選項更貼近拍旅行照的動機。(A) furniture（家具）、(B) effects（效果）、(D) origami（摺紙）均不是旅途中常拍攝的主題。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 22 ── 低頻名詞
  // ══════════════════════════════════════════════
  {
    day: 22,
    title: "Day 22 ── 低頻名詞",
    week: 4,
    questions: [
      {
        stem: "Do not talk to any _____ without telling your parents first.",
        options: ["pond", "candle", "frog", "stranger"],
        answer: 3,
        word: "stranger",
        wordZh: "陌生人",
        explanation: "stranger 是「陌生人」，不要和陌生人說話是常見的安全教育。句意：「在沒有先告訴父母的情況下，不要和任何陌生人說話。」(D) stranger（陌生人）正確，是安全教育中的核心詞彙。(A) pond（池塘）、(B) candle（蠟燭）、(C) frog（青蛙）均為自然相關名詞，不是「安全不與之交談」的對象。"
      },
      {
        stem: "He said, '_____ me,' before asking the teacher a question in class.",
        options: ["frog", "statue", "camp", "excuse"],
        answer: 3,
        word: "excuse",
        wordZh: "藉口；對不起（excuse me）",
        explanation: "Excuse me 是「打擾一下、不好意思」的固定禮貌用語，在請求他人注意前使用。句意：「他在課堂上問老師問題前說了一聲『打擾一下』。」(D) excuse（excuse me）正確，是固定禮貌表達。(A) frog（青蛙）、(B) statue（雕像）、(C) camp（營地）均為具體名詞，不是禮貌用語的一部分。"
      },
      {
        stem: "The birthday cake had ten _____ on it, one for each year of the child's life.",
        options: ["stranger", "pond", "frog", "candle"],
        answer: 3,
        word: "candle",
        wordZh: "蠟燭",
        explanation: "birthday cake 上放蠟燭是西方生日傳統，每根蠟燭代表一歲。句意：「生日蛋糕上有十根蠟燭，每一根代表孩子生命中的一年。」(D) candle（蠟燭）正確，與生日蛋糕的傳統習俗完全吻合。(A) stranger（陌生人）、(B) pond（池塘）、(C) frog（青蛙）均不是放在蛋糕上的物品。"
      },
      {
        stem: "The children caught some small _____ in the stream during the nature trip.",
        options: ["candle", "statue", "excuse", "frog"],
        answer: 3,
        word: "frog",
        wordZh: "青蛙",
        explanation: "catch frogs in a stream 是「在溪流中抓青蛙」，是自然體驗活動的常見情境。句意：「孩子們在自然旅行中在溪流裡抓到了一些小青蛙。」(D) frog（青蛙）正確，生活在溪流或水中，是可以被孩子抓到的生物。(A) candle（蠟燭）、(B) statue（雕像）、(C) excuse（藉口）均不是在溪流中可以「抓到」的東西。"
      },
      {
        stem: "There is a beautiful stone _____ of a lion at the entrance of the palace.",
        options: ["pond", "stranger", "frog", "statue"],
        answer: 3,
        word: "statue",
        wordZh: "雕像；雕塑",
        explanation: "a stone statue of a lion 是「一座獅子石雕」，palace entrance 常設有雕像。句意：「宮殿入口處有一座美麗的獅子石雕。」(D) statue（雕像）正確，描述以石頭製成的藝術作品。(A) pond（池塘）、(B) stranger（陌生人）、(C) frog（青蛙）均不是放在宮殿入口的「石製獅形藝術品」。"
      },
      {
        stem: "The scouts set up their tents by the lake and stayed at the _____ for three nights.",
        options: ["excuse", "candle", "statue", "camp"],
        answer: 3,
        word: "camp",
        wordZh: "營地；露營",
        explanation: "stay at the camp 或 camp by the lake 表示「在營地住宿」，搭帳篷是露營的標準流程。句意：「童子軍在湖邊搭帳篷，在營地住了三晚。」(D) camp（營地）正確，搭帳篷並住宿是露營活動的核心。(A) excuse（藉口）、(B) candle（蠟燭）、(C) statue（雕像）均不是「搭帳篷後住宿的地方」。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 23 ── 形容詞副詞
  // ══════════════════════════════════════════════
  {
    day: 23,
    title: "Day 23 ── 形容詞副詞",
    week: 4,
    questions: [
      {
        stem: "This song is very _____ among teenagers. Everyone knows the words.",
        options: ["difficult", "wise", "surely", "popular"],
        answer: 3,
        word: "popular",
        wordZh: "受歡迎的",
        explanation: "popular among sb. 是「在某群體中受歡迎」的固定搭配，every one knows the words 是受歡迎的證明。句意：「這首歌在青少年中非常受歡迎，每個人都知道歌詞。」(D) popular（受歡迎的）正確。(A) difficult（困難的）、(B) wise（明智的）不符合歌曲的特性，(C) surely（肯定地）是副詞，不能修飾 is（作形容詞補語）。"
      },
      {
        stem: "Learning a new language is _____, but it becomes easier with practice.",
        options: ["popular", "famous", "surely", "difficult"],
        answer: 3,
        word: "difficult",
        wordZh: "困難的",
        explanation: "difficult 表示「困難的」，but 轉折說明難度可透過練習降低，是常見的學習語境。句意：「學習一種新語言是困難的，但透過練習會變得更容易。」(D) difficult（困難的）正確，與 but it becomes easier 形成對比。(A) popular（受歡迎的）、(B) famous（著名的）、(C) surely（肯定地）均不能與 but easier 形成合理對比。"
      },
      {
        stem: "Jay Chou is a _____ singer in many Asian countries, including Taiwan and Japan.",
        options: ["wise", "surely", "difficult", "famous"],
        answer: 3,
        word: "famous",
        wordZh: "著名的；有名的",
        explanation: "famous in/among 表示「在……地方或群體中著名」，周杰倫在亞洲的知名度是事實。句意：「周杰倫是許多亞洲國家（包括台灣和日本）著名的歌手。」(D) famous（著名的）正確，描述廣為人知的名氣。(A) wise（明智的）不是描述歌手知名度的詞，(B) surely（肯定地）是副詞，(C) difficult（困難的）與歌手特性不符。"
      },
      {
        stem: "It is _____ to carry an umbrella when you see dark clouds in the sky.",
        options: ["popular", "difficult", "surely", "wise"],
        answer: 3,
        word: "wise",
        wordZh: "明智的；聰明的",
        explanation: "It is wise to V 是「做……是明智的」的固定句型，看到烏雲帶傘是合理的預防措施。句意：「當你看到天空中的烏雲時，帶傘是明智的。」(D) wise（明智的）正確。(A) popular（受歡迎的）、(B) difficult（困難的）語意不符「採取預防措施」的情境，(C) surely（肯定地）是副詞，不能放在 It is ___ to V 的形容詞位置。"
      },
      {
        stem: "This is _____ the best meal I have ever had. Nothing can compare to it.",
        options: ["popular", "famous", "wise", "surely"],
        answer: 3,
        word: "surely",
        wordZh: "肯定地；確實地",
        explanation: "surely 是副詞，表示「肯定地、確實地」，加強語氣，用於強調最高級的評價。句意：「這肯定是我吃過最好吃的一餐，沒有什麼可以與它相比。」(D) surely（肯定地）正確，作副詞修飾整個最高級句子。(A) popular（受歡迎的）、(B) famous（著名的）、(C) wise（明智的）均為形容詞，不能修飾表示確定性的語氣。"
      },
      {
        stem: "The new café is _____ because many people line up to buy their special drinks.",
        options: ["surely", "wise", "difficult", "popular"],
        answer: 3,
        word: "popular",
        wordZh: "受歡迎的",
        explanation: "popular 表示「受歡迎的」，許多人排隊是受歡迎的直接證據。句意：「這家新咖啡廳很受歡迎，因為許多人排隊購買他們的特調飲料。」(D) popular（受歡迎的）正確，排隊現象是受歡迎的客觀說明。(A) surely（肯定地）是副詞，(B) wise（明智的）、(C) difficult（困難的）均不符合「因為很多人排隊」的因果邏輯。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 24 ── 易混淆詞彙
  // ══════════════════════════════════════════════
  {
    day: 24,
    title: "Day 24 ── 易混淆詞彙",
    week: 4,
    questions: [
      {
        stem: "She could _____ music coming from the room next door.",
        options: ["look", "watch", "listen", "hear"],
        answer: 3,
        word: "hear",
        wordZh: "聽到（無意識地感知）",
        explanation: "hear 是「聽到」，指無意識感知到的聲音，與 listen 區別在於 listen 是主動專注地聆聽。句意：「她能聽到隔壁房間傳來的音樂。」(D) hear（聽到）正確，是自然感知聲音。(A) look（看）和 (B) watch（看）是視覺動詞，(C) listen 需接 to（listen to music），且強調主動聆聽，不符合「從隔壁傳來」的被動感知。"
      },
      {
        stem: "Please _____ at the blackboard and copy down what the teacher writes.",
        options: ["watch", "hear", "listen", "look"],
        answer: 3,
        word: "look",
        wordZh: "看（look at）",
        explanation: "look at 是「看著……」的固定搭配，需接介詞 at，用於靜態的目標物如黑板。句意：「請看黑板並抄下老師寫的東西。」(D) look（look at）正確。(A) watch（看）用於觀看動態事物（如電視、球賽），(B) hear（聽到）、(C) listen（聆聽）均為聽覺動詞，不適合「看黑板」的視覺動作。"
      },
      {
        stem: "How much did it _____ you to travel from Taipei to Tokyo by plane?",
        options: ["spend", "pay", "save", "cost"],
        answer: 3,
        word: "cost",
        wordZh: "（物/事）花費",
        explanation: "cost sb. + 金額 是「某事物使某人花費……」，此句主語是 it（旅行這件事），主語為事物。句意：「你從台北搭飛機到東京花了多少錢？」(D) cost（花費）正確，it（旅行）是主語，人（you）是間接受詞。(A) spend 的主語應是人，(B) pay 通常是 pay for/pay to，(C) save（節省）語意相反。"
      },
      {
        stem: "The students _____ to the teacher's explanation very carefully during class.",
        options: ["hear", "look", "watch", "listen"],
        answer: 3,
        word: "listen",
        wordZh: "聆聽（主動）",
        explanation: "listen to sb./sth. 是「主動聆聽某人/某物」，強調專注傾聽，需接介詞 to。句意：「學生們在課堂上非常仔細地聆聽老師的講解。」(D) listen（聆聽）正確，listen to 加 very carefully 強調主動專注。(A) hear 是被動感知聲音，不搭配 to，(B) look（看）、(C) watch（看）均為視覺動詞。"
      },
      {
        stem: "The sun _____ in the east every morning and sets in the west every evening.",
        options: ["raises", "rises", "lifts", "grows"],
        answer: 1,
        word: "rise",
        wordZh: "升起（不及物）",
        explanation: "rise 是不及物動詞，意為「（太陽等）升起」，固定搭配 The sun rises。句意：「太陽每天早上從東方升起，每天晚上從西方落下。」(B) rises（升起）正確。(A) raises 是 raise 的第三人稱，raise 是及物動詞需接受詞，(C) lifts（舉起）需接受詞且不描述自然天象，(D) grows（生長）不描述太陽的移動。"
      },
      {
        stem: "Tom _____ fifty dollars to buy his sister a small gift for her birthday.",
        options: ["cost", "saved", "paid", "spent"],
        answer: 3,
        word: "spend",
        wordZh: "花費（人當主語）",
        explanation: "spend + 金額 + on/to V 是「（人）花費……錢去做……」，主語必須是人（Tom）。句意：「Tom 花了五十元買了一份小禮物給妹妹作為生日禮物。」(D) spent（花費）正確，主語是人且接了金額。(A) cost（花費）主語應是物，(B) saved（儲蓄）相反，(C) paid 通常接 for 或直接接金額給對象（paid sb.），此句結構不符。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAY 25 ── 重要片語
  // ══════════════════════════════════════════════
  {
    day: 25,
    title: "Day 25 ── 重要片語",
    week: 4,
    questions: [
      {
        stem: "Can you _____ your younger sister _____ from school today? Mom is busy.",
        options: ["cut / down", "walk / away", "end / up", "pick / up"],
        answer: 3,
        word: "pick up",
        wordZh: "接送（人）；撿起",
        explanation: "pick sb. up 是「接某人（去某地）」的固定片語，用於接送的語境。句意：「你今天可以去學校接你妹妹嗎？媽媽很忙。」(D) pick / up（接送）正確，pick sb. up from school 是常見表達。(A) cut down（削減）、(B) walk away（走開）、(C) end up（最終落得）均不符合「去學校接人」的語意。"
      },
      {
        stem: "We need to _____ the amount of plastic we use to protect the environment.",
        options: ["pick up", "end up", "walk away", "cut down"],
        answer: 3,
        word: "cut down",
        wordZh: "削減；減少",
        explanation: "cut down on sth. 或 cut down + 受詞 是「減少（使用量）」的片語動詞，用於環保語境。句意：「我們需要減少塑膠使用量來保護環境。」(D) cut down（削減）正確，符合「環境保護」的語境。(A) pick up（撿起/接送）、(B) end up（最終變成）、(C) walk away（走開）均不符合「減少使用量」的語意。"
      },
      {
        stem: "Don't just _____ when your friend needs help. Try to do something.",
        options: ["cut down", "pick up", "end up", "walk away"],
        answer: 3,
        word: "walk away",
        wordZh: "走開；置之不理",
        explanation: "walk away 是「走開、離去（不管不顧）」的片語，與「朋友需要幫助」的情境形成道德對比。句意：「當你的朋友需要幫助時，不要就這樣走開，試著做些什麼。」(D) walk away（走開不管）正確。(A) cut down（削減）、(B) pick up（接送/撿起）、(C) end up（最終落得）均不符合「在朋友需要幫助時離去」的語意。"
      },
      {
        stem: "If you don't study harder, you may _____ failing the final exam.",
        options: ["cut down", "walk away", "pick up", "end up"],
        answer: 3,
        word: "end up",
        wordZh: "最終落得；結果是",
        explanation: "end up V-ing 是「最終落得……結局」的固定片語，常用於警告的語境。句意：「如果你不更努力學習，你可能最終會不及格期末考。」(D) end up（最終落得）正確，搭配 failing（不及格）。(A) cut down（削減）、(B) walk away（走開）、(C) pick up（接送）均不能搭配 V-ing 形成「最終落得某結果」的語意。"
      },
      {
        stem: "The family is going _____ to a beach resort in Kenting next month.",
        options: ["on vacation", "up with", "away from", "down on"],
        answer: 0,
        word: "go on vacation",
        wordZh: "去度假",
        explanation: "go on vacation 是「去度假」的固定片語，是旅行和休閒的常見表達。句意：「這個家庭下個月要去墾丁的海灘度假村度假。」(A) on vacation（度假）正確，與 go 結合形成 go on vacation。(B) up with（提出/跟上）、(C) away from（遠離）、(D) down on（看不起）均不是「去海灘度假」的正確介詞片語。"
      },
      {
        stem: "He bent down to _____ the coin that had fallen on the floor.",
        options: ["end up", "cut down", "walk away", "pick up"],
        answer: 3,
        word: "pick up",
        wordZh: "撿起；拿起",
        explanation: "pick up 也有「撿起、拾起（掉落的物品）」的意義，bent down（彎腰）暗示撿東西的動作。句意：「他彎腰撿起掉在地板上的硬幣。」(D) pick up（撿起）正確，與 bent down 的動作連貫。(A) end up（最終落得）、(B) cut down（削減）、(C) walk away（走開）均不符合「彎腰後的後續動作」。"
      }
    ]
  },

  // ══════════════════════════════════════════════
  //  DAYS 26–30 ── 綜合複習（混合所有單元）
  // ══════════════════════════════════════════════
  {
    day: 26,
    title: "Day 26 ── 綜合複習 I",
    week: 4,
    questions: [
      {
        stem: "The rescue team worked all night to _____ the people trapped in the building.",
        options: ["follow", "save", "rise", "spend"],
        answer: 1,
        word: "save",
        wordZh: "拯救",
        explanation: "save people 是「拯救人員」，救援隊徹夜工作是緊急救援情境。句意：「救援隊徹夜工作，拯救困在建築物裡的人們。」(B) save（拯救）正確，是救援行動的核心動詞。(A) follow（跟隨）、(C) rise（上升）、(D) spend（花費）均不符合「救援被困者」的語意。"
      },
      {
        stem: "She felt _____ after the long hike because she had not eaten anything since morning.",
        options: ["brave", "friendly", "popular", "hungry"],
        answer: 3,
        word: "hungry",
        wordZh: "飢餓的",
        explanation: "feel hungry 是「感到飢餓」，長途健行且從早上沒有進食自然會感到餓。句意：「長途健行後她感到飢餓，因為從早上開始就沒吃任何東西。」(D) hungry（飢餓的）正確，與「從早上起就沒吃東西」的原因一致。(A) brave（勇敢的）、(B) friendly（友善的）、(C) popular（受歡迎的）均與「沒吃東西而感到的生理狀態」無關。"
      },
      {
        stem: "It is _____ to let your parents know where you are going before you leave home.",
        options: ["lonely", "shy", "afraid", "wise"],
        answer: 3,
        word: "wise",
        wordZh: "明智的",
        explanation: "It is wise to V 是「做……是明智的」，出門前告知父母是安全且負責任的行為。句意：「在離開家之前讓父母知道你要去哪裡是明智的。」(D) wise（明智的）正確，是 It is ___ to V 結構的最合適形容詞。(A) lonely（孤獨的）、(B) shy（害羞的）、(C) afraid（害怕的）均不符合「安全行為」的建議語意。"
      },
      {
        stem: "The _____ of this concert ticket was two hundred dollars, which was worth it.",
        options: ["cost", "money", "spend", "price"],
        answer: 3,
        word: "price",
        wordZh: "價格",
        explanation: "the price of sth. 是「某物的價格」，演唱會票價是購票前最關心的資訊。句意：「這張演唱會門票的價格是兩百元，相當值得。」(D) price（價格）正確，the price of + 物品 是固定表達。(A) cost 當名詞也可，但 the cost 通常不接 of + 票券這樣的具體物品，(B) money（金錢）泛稱，(C) spend 是動詞，均不如 price 精確。"
      },
      {
        stem: "My grandfather told me a wonderful _____ about his life when he was young.",
        options: ["history", "news", "video", "story"],
        answer: 3,
        word: "story",
        wordZh: "故事",
        explanation: "tell a story about sth. 是「講一個關於……的故事」，祖父分享年輕時的故事是溫馨家庭情境。句意：「我祖父跟我講了一個關於他年輕時生活的精彩故事。」(D) story（故事）正確，是 told me a ___的最合適受詞。(A) history（歷史）、(B) news（新聞）、(C) video（影片）在此語境中不如 story 自然，因為祖父是「說」而不是「播放」。"
      },
      {
        stem: "After two weeks of _____ Japanese every day, she could order food at a restaurant.",
        options: ["teaching", "knowing", "showing", "studying"],
        answer: 3,
        word: "study",
        wordZh: "學習；研讀",
        explanation: "study + 語言 是「學習某語言」，每天努力後能在餐廳點餐是實用進步的體現。句意：「每天學習日語兩週後，她已能在餐廳點餐了。」(D) studying（研讀）正確，study a language 強調有計畫地鑽研。(A) teaching（教）的主語應是老師，(B) knowing（知道）是靜態動詞，(C) showing（展示）不適合語言學習的情境。"
      },
      {
        stem: "The manager decided to _____ the number of workers to save money.",
        options: ["pick up", "walk away", "end up", "cut down"],
        answer: 3,
        word: "cut down",
        wordZh: "削減；減少",
        explanation: "cut down on + 名詞 或 cut down + 受詞 表示「削減……的數量」，企業縮減人力是節省成本的常見決策。句意：「經理決定削減工人數量以節省成本。」(D) cut down（削減）正確。(A) pick up（增加/接送）反義，(B) walk away（走開）、(C) end up（最終落得）均不能搭配「削減員工數量」的語意。"
      },
      {
        stem: "The boys were _____ of swimming in the deep lake without a life jacket.",
        options: ["lazy", "brave", "shy", "afraid"],
        answer: 3,
        word: "afraid",
        wordZh: "害怕的",
        explanation: "be afraid of V-ing 是「害怕做某事」，在深湖中沒有救生衣游泳是危險且令人恐懼的。句意：「男孩們害怕在沒有救生衣的情況下在深湖裡游泳。」(D) afraid（害怕的）正確，搭配 of swimming 表示害怕的對象。(A) lazy（懶惰的）、(B) brave（勇敢的）語意相反，(C) shy（害羞的）不是面對危險水域的情緒。"
      },
      {
        stem: "She asked the waiter to bring the _____ before she made her decision.",
        options: ["cost", "price", "menu", "bill"],
        answer: 2,
        word: "menu",
        wordZh: "菜單",
        explanation: "ask for the menu 是「要求菜單」，在決定點什麼之前看菜單是標準用餐流程。句意：「在做決定之前，她請服務生把菜單拿來。」(C) menu（菜單）正確（雖非本日列表核心詞，但此為綜合複習題）。(A) cost（費用）、(B) price（價格）、(D) bill（帳單）均是付款相關，而非點餐前所需的物品。"
      },
      {
        stem: "My mom always reminds me to _____ my dirty clothes off the bedroom floor.",
        options: ["end up", "walk away", "cut down", "pick up"],
        answer: 3,
        word: "pick up",
        wordZh: "撿起；收拾",
        explanation: "pick up + 衣物 是「把衣物撿起/收拾好」，媽媽提醒孩子整理房間是日常家庭情境。句意：「我媽媽總是提醒我把臥室地板上的髒衣服收拾好。」(D) pick up（收拾）正確。(A) end up（最終落得）、(B) walk away（走開）、(C) cut down（削減）均不符合「整理地板上的衣物」語意。"
      }
    ]
  },

  {
    day: 27,
    title: "Day 27 ── 綜合複習 II",
    week: 4,
    questions: [
      {
        stem: "We need to _____ more people to join our environmental club at school.",
        options: ["tell", "get", "make", "ask"],
        answer: 1,
        word: "get",
        wordZh: "讓；使（人做某事）",
        explanation: "get more people to join 是「讓更多人加入」，get sb. to V 是使役句型。句意：「我們需要讓更多人加入學校的環保社團。」(B) get（讓）正確，get sb. to V 表示設法讓某人做某事。(A) tell sb. to V（告訴某人去做）也可，但 tell 較有命令意味，(C) make sb. V（強迫）語氣太強，(D) ask sb. to V（請求）雖近似，但 get 在此最自然。"
      },
      {
        stem: "My _____ lives in a small village in the mountains and grows vegetables.",
        options: ["friend", "grandparent", "classmate", "daughter"],
        answer: 1,
        word: "grandparent",
        wordZh: "祖父母",
        explanation: "grandparent 是「祖父母」，住在山村種蔬菜是台灣農村長輩的典型生活型態。句意：「我的祖父母住在山裡的小村莊，種植蔬菜。」(B) grandparent（祖父母）正確，祖輩住在農村是常見情境。(A) friend（朋友）、(C) classmate（同學）是平輩，(D) daughter（女兒）是晚輩，均不符合「種菜農村長輩」的描述。"
      },
      {
        stem: "He _____ a great effort to learn sign language to communicate with his deaf friend.",
        options: ["paid", "got", "made", "told"],
        answer: 2,
        word: "make",
        wordZh: "做出（努力）",
        explanation: "make an effort 是「做出努力」的固定片語，為聾啞朋友學手語是付出努力的溫馨情境。句意：「他付出很大的努力學習手語，以便與他的聾啞朋友溝通。」(C) made（做出）正確，make an effort 是固定搭配。(A) paid（支付）接 effort 不自然，(B) got（得到）、(D) told（告訴）均不搭配 effort 形成有意義的片語。"
      },
      {
        stem: "The children sat around the _____ campfire and listened to ghost stories.",
        options: ["candle", "pond", "camp", "statue"],
        answer: 2,
        word: "camp",
        wordZh: "營地（campfire）",
        explanation: "campfire 是「營火」（camp + fire），圍坐在營火旁聽鬼故事是露營常見活動。句意：「孩子們圍坐在露營的營火旁，聆聽鬼故事。」(C) camp（營地）正確，campfire 是此句的核心詞。(A) candle（蠟燭）雖能產生火光，但 candlefire 不是固定詞，(B) pond（池塘）、(D) statue（雕像）均與「圍坐取暖聽故事」無關。"
      },
      {
        stem: "The doctor said I should _____ exercising regularly to stay in good shape.",
        options: ["agree", "decide", "save", "keep"],
        answer: 3,
        word: "keep",
        wordZh: "持續；保持",
        explanation: "keep V-ing 是「持續做……」的固定片語，醫生建議保持規律運動習慣是常見健康建議。句意：「醫生說我應該持續規律運動以保持良好狀態。」(D) keep（持續）正確，keep exercising 表示維持運動習慣。(A) agree（同意）不接 V-ing 作「持續」，(B) decide（決定）也可接 to V，但不接 V-ing 表示持續，(C) save（拯救/節省）不符語意。"
      },
      {
        stem: "The newspaper reported that the new _____ will open next to the train station.",
        options: ["story", "hotel", "news", "video"],
        answer: 1,
        word: "hotel",
        wordZh: "飯店",
        explanation: "a new hotel will open 是「新飯店將開幕」，是報紙報導地方商業新聞的典型內容。句意：「報紙報導說新的飯店將在火車站旁邊開幕。」(B) hotel（飯店）正確，fire station 旁邊開飯店是合理的地點描述。(A) story（故事）不是新聞報導的設施，(C) news（新聞）不能被 newspaper 再次 report，(D) video（影片）不是「開幕」的主體。"
      },
      {
        stem: "Kevin was _____ to speak up when the teacher asked for volunteers.",
        options: ["friendly", "lonely", "afraid", "brave"],
        answer: 2,
        word: "afraid",
        wordZh: "害怕的",
        explanation: "be afraid to V 是「害怕去做……」，在老師問誰自願時不敢舉手是常見的害羞/害怕情境。句意：「老師要找自願者時，Kevin 不敢大聲說出來。」(C) afraid（害怕的）正確，afraid to speak up 表示不敢發言。(A) friendly（友善的）表示態度，(B) lonely（孤獨的）是情感狀態，(D) brave（勇敢的）語意相反，均不符合「不敢發言」的情境。"
      },
      {
        stem: "She _____ a lot of time reading books about famous scientists on the weekend.",
        options: ["costs", "saves", "pays", "spends"],
        answer: 3,
        word: "spend",
        wordZh: "花費（時間）",
        explanation: "spend time V-ing 是「花時間做……」的固定句型，主語是人（she）。句意：「她週末花了很多時間閱讀關於著名科學家的書籍。」(D) spends（花費）正確，spend time + V-ing 是表達時間用途的常見句型。(A) costs（花費）主語應是物，(B) saves（節省）相反，(C) pays（付款）不接時間名詞作受詞。"
      },
      {
        stem: "We decided to go on a _____ to a nearby mountain and see the sunrise.",
        options: ["hike", "dance", "sing", "museum"],
        answer: 0,
        word: "hike",
        wordZh: "健行",
        explanation: "go on a hike 是「去健行」的固定片語，爬附近的山看日出是典型的健行活動。句意：「我們決定去附近的山健行，看日出。」(A) hike（健行）正確，go on a hike to + 地點 是標準表達。(B) dance（舞蹈）、(C) sing（唱歌）、(D) museum（博物館）均不是「爬山看日出」的適當活動或場所。"
      },
      {
        stem: "The _____ in the living room was made by a famous craftsman from Tainan.",
        options: ["furniture", "origami", "group", "effect"],
        answer: 0,
        word: "furniture",
        wordZh: "家具",
        explanation: "furniture 是「家具」，客廳裡的家具可以由工匠製作，這是家具的常見描述。句意：「客廳裡的家具是由台南一位著名的工匠製作的。」(A) furniture（家具）正確，是客廳中典型的裝設物品。(B) origami（摺紙）是藝術活動，(C) group（群組）是人的集合，(D) effect（效果）是抽象名詞，均不是「客廳裡的物品」。"
      }
    ]
  },

  {
    day: 28,
    title: "Day 28 ── 綜合複習 III",
    week: 4,
    questions: [
      {
        stem: "The young man was _____ enough to help the old woman cross the busy street.",
        options: ["shy", "lazy", "afraid", "brave"],
        answer: 3,
        word: "brave",
        wordZh: "勇敢的",
        explanation: "brave enough to V 是「有足夠勇氣去做……」，幫助老太太過馬路是需要主動行動的勇敢行為。句意：「那個年輕人足夠勇敢，幫助老太太過繁忙的馬路。」(D) brave（勇敢的）正確，表示克服猶豫主動助人。(A) shy（害羞的）、(B) lazy（懶惰的）、(C) afraid（害怕的）均與「勇於助人」的精神相反或不符。"
      },
      {
        stem: "My parents _____ a lot to give me a good education and a happy life.",
        options: ["exercise", "experienced", "worked", "sacrificed"],
        answer: 3,
        word: "sacrifice",
        wordZh: "犧牲；奉獻",
        explanation: "sacrifice（過去式 sacrificed）表示「為他人犧牲」，父母為子女教育付出是常見主題。句意：「我父母為給我良好的教育和快樂的生活做出了很多犧牲。」(D) sacrificed（犧牲）正確，表達為子女無私付出的情感。(A) exercise（運動）、(B) experienced（體驗）、(C) worked（工作）均不及 sacrifice 貼切地表達「無私奉獻」的核心語意。"
      },
      {
        stem: "The famous _____ of the Statue of Liberty is known all over the world.",
        options: ["camp", "candle", "statue", "pond"],
        answer: 2,
        word: "statue",
        wordZh: "雕像",
        explanation: "the Statue of Liberty 是「自由女神像」，世界聞名的雕像。句意：「自由女神像舉世聞名。」(C) statue（雕像）正確，自由女神像就是 statue 的典型例子。(A) camp（營地）、(B) candle（蠟燭）、(D) pond（池塘）均不能描述自由女神像這樣的地標藝術品。"
      },
      {
        stem: "You can _____ at the news _____ to get more information about today's events.",
        options: ["look / station", "watch / station", "listen / newspaper", "read / online"],
        answer: 3,
        word: "read online",
        wordZh: "線上閱讀",
        explanation: "read online 是「在網路上閱讀」，透過網路獲取新聞資訊是現代常見行為。句意：「你可以上網閱讀，獲取更多有關今天事件的資訊。」(D) read / online 正確，read... online 是固定表達方式。(A) look at station（看電台）、(B) watch at station（在電台看）結構不自然，(C) listen newspaper（聽報紙）搭配錯誤，報紙是讀的不是聽的。"
      },
      {
        stem: "If you don't bring a raincoat on the hike, you might _____ getting wet.",
        options: ["cut down", "walk away", "pick up", "end up"],
        answer: 3,
        word: "end up",
        wordZh: "最終落得；結果是",
        explanation: "end up V-ing 是「最終落得……的結果」，不帶雨衣健行很可能被淋濕。句意：「如果健行時不帶雨衣，你最終可能會全身濕透。」(D) end up（最終落得）正確，搭配 getting wet 表示最終結果。(A) cut down（削減）、(B) walk away（走開）、(C) pick up（撿起/接送）均不能搭配 V-ing 表示「最終落得某結果」。"
      },
      {
        stem: "The chef uses only fresh _____ from the local market to make his dishes.",
        options: ["meal", "kitchen", "vegetable", "dinner"],
        answer: 2,
        word: "vegetable",
        wordZh: "蔬菜",
        explanation: "fresh vegetables from the market 是「市場採購的新鮮蔬菜」，主廚使用當地食材是常見廚藝介紹。句意：「主廚只使用當地市場的新鮮蔬菜來製作他的料理。」(C) vegetable（蔬菜）正確，是市場採購的具體食材。(A) meal（餐食）是整體餐點，(B) kitchen（廚房）是場所，(D) dinner（晚餐）是時間，均不是主廚採購的食材。"
      },
      {
        stem: "The teacher _____ the students to the library and showed them how to use the catalog.",
        options: ["believed", "agreed", "followed", "took"],
        answer: 3,
        word: "take",
        wordZh: "帶領；帶去",
        explanation: "take sb. to + 地點 是「帶某人去某地」，老師帶學生去圖書館是教學活動。句意：「老師帶學生們去圖書館，並示範如何使用目錄系統。」(D) took（帶領）正確，take sb. to 是固定句型。(A) believed（相信）、(B) agreed（同意）不接地點，(C) followed（跟隨）語序相反（應是學生跟著老師，不是老師 follow 學生）。"
      },
      {
        stem: "I've decided to _____ a new instrument. I want to start learning the violin.",
        options: ["learn", "teach", "show", "know"],
        answer: 0,
        word: "learn",
        wordZh: "學習",
        explanation: "learn + 技能/工具 是「學習某樣技能或樂器」，want to start learning 也再次確認。句意：「我決定學一樣新樂器，我想開始學小提琴。」(A) learn（學習）正確，learn a new instrument 是習得技能的表達。(B) teach（教）主語應是老師，(C) show（展示）不表示習得，(D) know（知道）是靜態動詞，不表示開始學習的行動。"
      },
      {
        stem: "The documentary showed how _____ changes in the past century affected the earth.",
        options: ["public", "popular", "wise", "difficult"],
        answer: 3,
        word: "difficult",
        wordZh: "困難的",
        explanation: "此題測試形容詞選擇，difficult changes 在此指「劇烈/艱難的變遷」。句意：「這部紀錄片展示了過去一個世紀中艱難的變遷如何影響地球。」(D) difficult（艱難的）正確，描述對地球造成重大影響的變遷過程。(A) public（公共的）、(B) popular（受歡迎的）、(C) wise（明智的）均不是描述「變遷」性質的合適形容詞。"
      },
      {
        stem: "There is a small _____ in the park where children love to watch the ducks swim.",
        options: ["statue", "stranger", "candle", "pond"],
        answer: 3,
        word: "pond",
        wordZh: "池塘",
        explanation: "pond 是「池塘」，公園裡的池塘是鴨子游泳的自然場所，孩子們喜歡觀看。句意：「公園裡有一個小池塘，孩子們喜歡在那裡看鴨子游泳。」(D) pond（池塘）正確，符合「裝有水、鴨子能游泳」的自然水體。(A) statue（雕像）是固體藝術品，(B) stranger（陌生人）是人，(C) candle（蠟燭）是照明物品，均不符合「鴨子游泳的地方」。"
      }
    ]
  },

  {
    day: 29,
    title: "Day 29 ── 綜合複習 IV",
    week: 4,
    questions: [
      {
        stem: "We learned how to make _____ swans and cranes in our art class today.",
        options: ["comic", "origami", "furniture", "museum"],
        answer: 1,
        word: "origami",
        wordZh: "摺紙",
        explanation: "origami swans and cranes 是「摺紙天鵝和仙鶴」，是日本摺紙藝術的典型作品。句意：「我們今天在美術課上學習如何摺紙天鵝和仙鶴。」(B) origami（摺紙）正確，天鵝和仙鶴是常見的摺紙主題。(A) comic（漫畫）、(C) furniture（家具）、(D) museum（博物館）均不是「製作天鵝和仙鶴的藝術形式」。"
      },
      {
        stem: "She has a lot of _____ working in hospitals, so she knows how to help patients.",
        options: ["work", "job", "office", "experience"],
        answer: 3,
        word: "experience",
        wordZh: "經驗",
        explanation: "experience working in hospitals 是「在醫院工作的經驗」，現在分詞 working 修飾 experience。句意：「她有豐富的醫院工作經驗，所以知道如何幫助病人。」(D) experience（經驗）正確，experience 後可接 V-ing 說明具體經驗類型。(A) work（工作）通常不接 working，(B) job（職位）不接 working，(C) office（辦公室）是地點，均不符合表達工作資歷的語意。"
      },
      {
        stem: "He was _____ to ask the teacher to explain the question again.",
        options: ["friendly", "brave", "lonely", "afraid"],
        answer: 3,
        word: "afraid",
        wordZh: "害怕的",
        explanation: "be afraid to V 是「害怕去做……」，不敢再次問老師問題是常見學生心態。句意：「他不敢請老師再解釋一次那個問題。」(D) afraid（害怕的）正確，afraid to ask 表示因害怕/難為情而不敢發問。(A) friendly（友善的）、(B) brave（勇敢的）語意相反，(C) lonely（孤獨的）與「問問題」的情境無關。"
      },
      {
        stem: "The company decided to _____ on advertising costs to increase profit.",
        options: ["end up", "pick up", "walk away", "cut down"],
        answer: 3,
        word: "cut down",
        wordZh: "削減",
        explanation: "cut down on advertising costs 是「削減廣告費用」，企業節省開支增加利潤是商業情境。句意：「這家公司決定削減廣告費用以增加利潤。」(D) cut down（削減）正確，cut down on + 費用是標準企業用語。(A) end up（最終落得）、(B) pick up（接送/撿起）、(C) walk away（走開不管）均不符合「主動削減費用」的策略語意。"
      },
      {
        stem: "I cannot _____ to eat lunch because I have a meeting at noon.",
        options: ["start", "get", "make", "find"],
        answer: 2,
        word: "make",
        wordZh: "騰出（時間）",
        explanation: "make time to V 是「騰出時間去做……」的固定片語，因為中午有會議所以無法騰出時間吃午餐。句意：「我沒辦法騰出時間吃午飯，因為中午有會議。」(C) make（騰出）正確，make time to V 是常用表達。(A) start（開始）不接 to eat 表示「騰出時間」，(B) get 語意不符，(D) find time to V 也可表示「找到時間」，但 make time 更強調「主動安排時間」。"
      },
      {
        stem: "Climbing a mountain is _____, but it becomes rewarding when you reach the top.",
        options: ["popular", "wise", "famous", "difficult"],
        answer: 3,
        word: "difficult",
        wordZh: "困難的",
        explanation: "difficult 表示「困難的」，but 轉折說明到達頂點後的成就感，形成難與獎勵的對比。句意：「爬山是困難的，但當你到達山頂時，它變得很有成就感。」(D) difficult（困難的）正確，與 but it becomes rewarding 形成對比。(A) popular（受歡迎的）、(B) wise（明智的）、(C) famous（著名的）均不能與後半段的轉折形成合理對比。"
      },
      {
        stem: "Watching the beautiful _____ of the mountains made everyone feel peaceful.",
        options: ["life", "work", "rock", "land"],
        answer: 3,
        word: "land",
        wordZh: "土地；大地",
        explanation: "the beautiful land of the mountains 是「山脈美麗的土地/大地」，欣賞自然景觀帶來平靜是常見表達。句意：「欣賞山脈的美麗大地讓每個人都感到平靜。」(D) land（土地/大地）正確，描述自然地貌的名詞。(A) life（生命）、(B) work（工作）、(C) rock（岩石）均不是「讓人平靜的山脈景觀」的最佳描述詞。"
      },
      {
        stem: "The hospital has a rule that visitors should _____ their phones off in patient rooms.",
        options: ["tell", "ask", "make", "keep"],
        answer: 3,
        word: "keep",
        wordZh: "保持；維持",
        explanation: "keep one's phone off 是「保持手機關機」，醫院規定病房訪客關機是常見要求。句意：「醫院有規定，訪客在病房內應保持手機關機。」(D) keep（保持）正確，keep + 受詞 + adj./off 是常見句型。(A) tell（告訴）需接人，(B) ask（詢問/請求）語意可能近似但不如 keep 精確，(C) make 在此語境不如 keep 自然。"
      },
      {
        stem: "The _____ near the school was flooded after the heavy rain last night.",
        options: ["candle", "statue", "camp", "pond"],
        answer: 3,
        word: "pond",
        wordZh: "池塘",
        explanation: "pond 是「池塘」，大雨後池塘水量暴增溢出是自然現象。句意：「學校附近的池塘在昨晚的大雨後淹水了。」(D) pond（池塘）正確，池塘是可能因大雨而「泛濫」的水體。(A) candle（蠟燭）、(B) statue（雕像）不是會被大雨「淹水」的地方，(C) camp（營地）可能被淹，但 pond flooded 比 camp flooded 更自然。"
      },
      {
        stem: "The couple plans to _____ next spring, and they have already booked the wedding hall.",
        options: ["visit", "travel", "marry", "meet"],
        answer: 2,
        word: "marry",
        wordZh: "結婚",
        explanation: "marry（結婚）後面直接接或不接受詞，book the wedding hall（預訂婚宴廳）說明是婚禮的準備。句意：「這對情侶計劃明年春天結婚，他們已經預訂了婚宴廳。」(C) marry（結婚）正確，與 wedding hall 的語境完全吻合。(A) visit（拜訪）、(B) travel（旅行）、(D) meet（見面）均不符合「預訂婚宴廳」的婚禮籌備語境。"
      }
    ]
  },

  {
    day: 30,
    title: "Day 30 ── 綜合複習 V（全範圍衝刺）",
    week: 4,
    questions: [
      {
        stem: "She _____ hard all semester and finally got an A in math.",
        options: ["paid", "spent", "started", "worked"],
        answer: 3,
        word: "work",
        wordZh: "努力；工作",
        explanation: "work hard 是「努力用功」，整個學期努力後得到高分是合理的因果關係。句意：「她整個學期都很努力，最終數學得了A。」(D) worked（努力）正確，work hard 是固定副詞片語。(A) paid（付款）、(B) spent（花費）通常接金額或時間，(C) started（開始）不表示「整個學期努力」的過程。"
      },
      {
        stem: "There is a huge stone _____ of the first president in the center of the city.",
        options: ["pond", "camp", "candle", "statue"],
        answer: 3,
        word: "statue",
        wordZh: "雕像",
        explanation: "a stone statue of + 人物 是「某人的石雕像」，城市中心放置歷史人物雕像是常見的地標設置。句意：「城市中心有一座巨大的第一任總統石雕像。」(D) statue（雕像）正確，stone statue of + 人物是描述公共藝術品的標準表達。(A) pond（池塘）、(B) camp（營地）、(C) candle（蠟燭）均不是「城市中心的人物地標」。"
      },
      {
        stem: "Mom asked me to _____ my little brother _____ from kindergarten at 3 p.m.",
        options: ["end / up", "cut / down", "walk / away", "pick / up"],
        answer: 3,
        word: "pick up",
        wordZh: "接（人）",
        explanation: "pick sb. up from + 地點 是「從某地接某人」，媽媽請托接弟弟放學是日常家庭情境。句意：「媽媽要我下午三點去幼稚園接我弟弟。」(D) pick / up（接人）正確，pick sb. up from school/kindergarten 是固定片語。(A) end / up（最終落得）、(B) cut / down（削減）、(C) walk / away（走開）均不符合「接送小孩」的語意。"
      },
      {
        stem: "The _____ was dark and quiet when we came home late last night.",
        options: ["kitchen", "trip", "museum", "office"],
        answer: 0,
        word: "kitchen",
        wordZh: "廚房",
        explanation: "kitchen 是「廚房」，深夜回家時廚房漆黑安靜是合理的家庭場景描述。句意：「昨晚我們很晚回家時，廚房黑漆漆且安靜。」(A) kitchen（廚房）正確，是家中容易在深夜顯得黑暗安靜的空間。(B) trip（旅行）是活動不是場所，(C) museum（博物館）和 (D) office（辦公室）不在家中，與「回家」情境不符。"
      },
      {
        stem: "The teacher _____ us a story about a brave boy who saved his friends from danger.",
        options: ["made", "told", "showed", "asked"],
        answer: 1,
        word: "tell",
        wordZh: "講述；告訴",
        explanation: "tell sb. a story 是「給某人講故事」的固定句型，about 引導故事的主題。句意：「老師給我們講了一個關於一個勇敢男孩從危險中救出朋友的故事。」(B) told（告訴/講述）正確，tell sb. a story 是固定搭配。(A) made us a story 不自然，(C) showed 通常接具體事物，(D) asked 的語意是「詢問」，不是「講故事」。"
      },
      {
        stem: "The students must follow the school _____ and turn off their phones in class.",
        options: ["job", "rise", "effect", "rule"],
        answer: 3,
        word: "rule",
        wordZh: "規定；規則",
        explanation: "follow the school rule 是「遵守學校規定」，上課關手機是典型的校規內容。句意：「學生必須遵守學校規定，在課堂上關掉手機。」(D) rule（規定）正確，follow the rule 是固定搭配。(A) job（工作）、(B) rise（上升）、(C) effect（影響）均不能搭配 follow 形成「遵守規定」的語意。"
      },
      {
        stem: "The population of Taiwan has been _____ slowly over the past few years.",
        options: ["fighting", "ruling", "paying", "rising"],
        answer: 3,
        word: "rise",
        wordZh: "上升（現在進行式）",
        explanation: "has been rising 是現在完成進行式，表示「（人口）持續上升」，rise 為不及物動詞。句意：「過去幾年來，台灣的人口一直在緩慢上升。」(D) rising（上升）正確，人口數字可以 rise。(A) fighting（戰鬥）、(B) ruling（統治）、(C) paying（支付）均不能描述「人口數量的變化趨勢」。"
      },
      {
        stem: "She was so _____ after working all day that she fell asleep on the sofa.",
        options: ["hungry", "afraid", "shy", "lazy"],
        answer: 0,
        word: "hungry",
        wordZh: "飢餓的",
        explanation: "so hungry that... 是「如此飢餓以至於……」的 so...that 句型；工作一整天後飢餓是合理的生理反應。句意：「她工作了一整天後太飢餓了，直接在沙發上睡著了。」(A) hungry（飢餓的）正確，飢餓和疲累都可能讓人睡著。(B) afraid（害怕的）、(C) shy（害羞的）、(D) lazy（懶惰的）均不是「工作一整天後的正常生理狀態」，且不能解釋「睡著在沙發上」的原因。"
      },
      {
        stem: "The school _____ a trip to the science museum for the eighth graders next month.",
        options: ["paid", "built", "visited", "planned"],
        answer: 3,
        word: "plan",
        wordZh: "計畫；安排",
        explanation: "plan a trip for sb. 是「為某人安排旅行」，學校為八年級學生安排參訪是教學活動。句意：「學校為八年級學生安排了下個月去科學博物館的參訪行程。」(D) planned（計畫）正確，plan a trip 是固定搭配。(A) paid（付款）、(B) built（建造）、(C) visited（拜訪）均不是學校「安排行程」的合適動詞。"
      },
      {
        stem: "If you don't know the _____ of the product, you can check the label on the box.",
        options: ["money", "cost", "spend", "price"],
        answer: 3,
        word: "price",
        wordZh: "價格",
        explanation: "check the price 是「查看價格」，看標籤上的價格是購物時的常見行為。句意：「如果你不知道這個產品的價格，可以查看盒子上的標籤。」(D) price（價格）正確，the price of + 產品 是固定表達。(A) money（錢）是金錢本身，不是「標示在標籤上的價格」，(B) cost 用於 the cost of 也可，但 price 更口語，(C) spend 是動詞，不能放在名詞位置。"
      }
    ]
  }

]; // end QUIZ_DAYS
