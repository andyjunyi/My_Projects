/* ============================================
   單字島 · 共用核心 app.js
   ============================================ */

/* ===== 角色設定 ===== */
const CHARACTERS = [
  { id: 'mage',  icon: '🧙', name: '單字法師',   desc: '精通語言魔法' },
  { id: 'knight', icon: '🗡️', name: '單字劍士',   desc: '以知識為劍' },
  { id: 'archer', icon: '🏹', name: '單字射手',   desc: '瞄準目標' },
];

const LEVEL_CAPS = [
  0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500,
  5500, 6600, 7800, 9100, 10500, 12000, 13600, 15300, 17100, 19000,
  21000, 23100, 25300, 27600, 30000, 32500, 35100, 37800, 40600, 43500,
  46500, 49600, 52800, 56100, 59500, 63000, 66600, 70300, 74100, 78000,
  82000, 86100, 90300, 94600, 99000, 103500, 108100, 112800, 117600, 122500
];

const LEVEL_TITLES = [
  '單字初心者',      // Lv.1
  '文字學徒',        // Lv.2
  '拼字練習生',      // Lv.3
  '詞彙冒險者',      // Lv.4
  '語感探索者',      // Lv.5
  '句子獵人',        // Lv.6
  '見習魔法使',      // Lv.7
  '單字收藏家',      // Lv.8
  '文法編織者',      // Lv.9
  '詞彙大師',        // Lv.10
  '語言工匠',        // Lv.11-15
  '知識守護者',      // Lv.16-20
  '智慧賢者',        // Lv.21-25
  '傳說語言使',      // Lv.26-30
  '單字英雄',        // Lv.31-40
  '單字傳說',        // Lv.41-50
];

/* ===== 道具 ===== */
const ITEMS = [
  { id: 'heart',  icon: '💖', name: '愛心', desc: '答錯扣除，歸零出局' },
  { id: 'time',   icon: '⏰', name: '加時券', desc: '限時模式 +10 秒' },
  { id: 'hint',   icon: '💡', name: '提示', desc: '刪去兩個選項或顯示字母' },
];

/* ===== 每日任務 ===== */
const DAILY_QUESTS = [
  { id: 'practice_10',  icon: '📖', title: '練習 10 個單字', need: 10, xp: 30 },
  { id: 'streak_5',     icon: '✅', title: '連續答對 5 題', need: 5, xp: 20 },
  { id: 'play_3_modes', icon: '🏆', title: '玩 3 種不同模式', need: 3, xp: 50 },
];

/* ===== 存儲 ===== */
function save(key, val) {
  try { localStorage.setItem('wordquest_' + key, JSON.stringify(val)); } catch(e) {}
}
function load(key, def) {
  try {
    const v = localStorage.getItem('wordquest_' + key);
    return v !== null ? JSON.parse(v) : def;
  } catch(e) { return def; }
}

/* ===== 玩家資料 ===== */
function getPlayer() {
  let p = load('player', null);
  if (!p) {
    p = {
      charId: 'mage',
      name: '旅行者',
      level: 1,
      xp: 0,
      coins: 0,
      hearts: 5,
      maxHearts: 5,
      hints: 3,
      timeItems: 2,
      totalCorrect: 0,
      totalWrong: 0,
      streak: 0,
      maxStreak: 0,
      gamesPlayed: 0,
      dailyDate: '',
      dailyProgress: { practice_10: 0, streak_5: 0, play_3_modes: 0 },
      completedModes: [],
      errorWords: [],
      achievements: [],
      createdAt: Date.now(),
    };
    save('player', p);
  }
  return p;
}

function setPlayer(p) { save('player', p); }

/* ===== 角色 ===== */
function getCharacter(id) {
  return CHARACTERS.find(c => c.id === id) || CHARACTERS[0];
}

function getLevelTitle(level) {
  if (level <= 10) return LEVEL_TITLES[level - 1] || LEVEL_TITLES[0];
  if (level <= 15) return LEVEL_TITLES[10];
  if (level <= 20) return LEVEL_TITLES[11];
  if (level <= 25) return LEVEL_TITLES[12];
  if (level <= 30) return LEVEL_TITLES[13];
  if (level <= 40) return LEVEL_TITLES[14];
  return LEVEL_TITLES[15];
}

function getXpForLevel(level) {
  return level < LEVEL_CAPS.length ? LEVEL_CAPS[level] : 999999;
}

function getXpProgress(p) {
  const current = getXpForLevel(p.level - 1);
  const next = getXpForLevel(p.level);
  return { current, next, have: p.xp - current, need: next - current };
}

/* ===== XP 獎勵 ===== */
function addXp(p, amount, reason) {
  p.xp += amount;
  // 升級檢查
  while (p.level < 50 && p.xp >= getXpForLevel(p.level)) {
    p.level++;
    showToast(`🎉 升級！Lv.${p.level} ${getLevelTitle(p.level)}`, 'xp');
  }
  setPlayer(p);
  showToast(`+${amount} XP ${reason ? '(' + reason + ')' : ''}`, 'xp');
}

/* ===== 每日任務 ===== */
function checkDaily(p) {
  const today = new Date().toDateString();
  if (p.dailyDate !== today) {
    p.dailyDate = today;
    p.dailyProgress = { practice_10: 0, streak_5: 0, play_3_modes: 0 };
    p.completedModes = [];
    setPlayer(p);
  }
}

function updateQuest(p, questId, add = 1) {
  checkDaily(p);
  if (!(questId in p.dailyProgress)) p.dailyProgress[questId] = 0;
  p.dailyProgress[questId] += add;
  const quest = DAILY_QUESTS.find(q => q.id === questId);
  if (quest && p.dailyProgress[questId] >= quest.need) {
    p.dailyProgress[questId] = quest.need; // cap
  }
  setPlayer(p);
}

function isQuestDone(p, questId) {
  const quest = DAILY_QUESTS.find(q => q.id === questId);
  return quest && (p.dailyProgress[questId] || 0) >= quest.need;
}

function claimQuest(p, questId) {
  const quest = DAILY_QUESTS.find(q => q.id === questId);
  if (!quest || !isQuestDone(p, questId)) return false;
  // 標記已領取（用負數表示已領）
  p.dailyProgress[questId] = -Math.abs(p.dailyProgress[questId]);
  addXp(p, quest.xp, '每日任務');
  setPlayer(p);
  return true;
}

/* ===== 道具 ===== */
function getItemCount(p, itemId) {
  switch (itemId) {
    case 'heart': return p.hearts;
    case 'time':  return p.timeItems;
    case 'hint':  return p.hints;
    default: return 0;
  }
}

function useItem(p, itemId) {
  const count = getItemCount(p, itemId);
  if (count <= 0) return false;
  switch (itemId) {
    case 'heart': p.hearts--; break;
    case 'time':  p.timeItems--; break;
    case 'hint':  p.hints--; break;
  }
  setPlayer(p);
  return true;
}

/* ===== 錯誤本 ===== */
function addErrorWord(p, word) {
  if (!p.errorWords.includes(word)) {
    p.errorWords.push(word);
    if (p.errorWords.length > 500) p.errorWords.shift();
    setPlayer(p);
  }
}

function removeErrorWord(p, word) {
  p.errorWords = p.errorWords.filter(w => w !== word);
  setPlayer(p);
}

/* ===== 成就系統 ===== */
function checkAchievements(p) {
  const checks = [
    { id: 'first_game',    name: '初出茅廬',     cond: p.gamesPlayed >= 1,      icon: '🎮' },
    { id: 'games_10',      name: '遊戲玩家',      cond: p.gamesPlayed >= 10,     icon: '🎮' },
    { id: 'games_50',      name: '遊戲達人',      cond: p.gamesPlayed >= 50,     icon: '🎮' },
    { id: 'correct_100',   name: '百題達人',      cond: p.totalCorrect >= 100,   icon: '✅' },
    { id: 'correct_500',   name: '五百題高手',     cond: p.totalCorrect >= 500,   icon: '✅' },
    { id: 'correct_1000',  name: '千題王者',      cond: p.totalCorrect >= 1000,  icon: '👑' },
    { id: 'streak_3',      name: '連三拉三',      cond: p.maxStreak >= 3,        icon: '🔥' },
    { id: 'streak_10',     name: '連十不敗',      cond: p.maxStreak >= 10,       icon: '🔥' },
    { id: 'level_10',      name: '初階大師',      cond: p.level >= 10,           icon: '⭐' },
    { id: 'level_20',      name: '中階賢者',      cond: p.level >= 20,           icon: '⭐' },
    { id: 'level_30',      name: '高階傳說',      cond: p.level >= 30,           icon: '⭐' },
    { id: 'error_clear',   name: '知錯能改',      cond: p.errorWords.length === 0 && p.totalWrong > 0, icon: '📕' },
    { id: 'play_all',      name: '全能玩家',      cond: p.completedModes.length >= 5, icon: '🌟' },
  ];
  const newOnes = [];
  for (const ch of checks) {
    if (ch.cond && !p.achievements.includes(ch.id)) {
      p.achievements.push(ch.id);
      newOnes.push(ch);
    }
  }
  if (newOnes.length > 0) {
    setPlayer(p);
    newOnes.forEach(a => showToast(`🏆 解鎖成就：${a.icon} ${a.name}`, 'good'));
  }
  return newOnes;
}

/* ===== TOAST ===== */
let toastTimer = null;
function showToast(msg, type = '') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = 'toast ' + type;
  clearTimeout(toastTimer);
  // force reflow
  void el.offsetWidth;
  el.classList.add('show');
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ===== 單字工具 ===== */
function getRandomWords(data, count, exclude = []) {
  const pool = data.filter(d => !exclude.includes(d.w));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function getDistractors(data, answer, count = 3) {
  const pool = data.filter(d => d.w !== answer && !d.w.includes(' '));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/* ===== 頁面導航 ===== */
function navigate(page) {
  window.location.href = page;
}

/* ===== 初始化 ===== */
document.addEventListener('DOMContentLoaded', () => {
  const p = getPlayer();
  checkDaily(p);
  checkAchievements(p);
  
  // 更新頂部欄（如果有）
  updateTopBar(p);
});

function updateTopBar(p) {
  const bar = document.getElementById('topBar');
  if (!bar) return;
  const char = getCharacter(p.charId);
  const prog = getXpProgress(p);
  bar.innerHTML = `
    <div class="player">
      <div class="avatar" onclick="navigate('settings.html')">${char.icon}</div>
      <div class="nameplate">
        <div class="name">${char.name}</div>
        <div class="title">Lv.${p.level} ${getLevelTitle(p.level)}</div>
      </div>
    </div>
    <div class="xp-section">
      <div class="xp-label"><span>${prog.have} / ${prog.need} XP</span><span>${Math.round(prog.have/prog.need*100)}%</span></div>
      <div class="xp-bar"><div class="xp-bar-fill" style="width:${prog.have/prog.need*100}%"></div></div>
    </div>
    <div class="stats-row">
      <div class="stat-item"><div class="num">🪙${p.coins}</div><div class="lbl">金幣</div></div>
      <div class="stat-item"><div class="num">📝${p.totalCorrect + p.totalWrong}</div><div class="lbl">總題</div></div>
      <div class="stat-item"><div class="num">${'🔥'.repeat(Math.min(p.streak, 5))}</div><div class="lbl">連答${p.streak}</div></div>
    </div>
  `;
}
