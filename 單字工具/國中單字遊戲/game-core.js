/* ============================================
   單字島 · 遊戲共用引擎
   ============================================ */

/* ===== 遊戲設定 ===== */
const GAME_CONFIG = {
  quiz: { title: '🎯 四選一',     desc: '四個選項選出正確答案', rounds: 10, timePerRound: 15 },
  type: { title: '⌨️ 打字挑戰',    desc: '看中文打出英文單字',   rounds: 10, timePerRound: 20 },
  scramble: { title: '🧩 拼字遊戲', desc: '打亂字母重新排列',     rounds: 8,  timePerRound: 25 },
  memory: { title: '🃏 翻牌配對',   desc: '翻牌配對中英文',       rounds: 12, timePerRound: 0 },
  marathon: { title: '🏃 單字馬拉松', desc: '答錯即結束',         rounds: 999, timePerRound: 20 },
};

/* ===== 取得該模式要用的單字 ===== */
function getWordsForGame(mode, count) {
  let words = [...WORD_DATA];
  
  // 級別篩選
  const filter = sessionStorage.getItem('wordLevelFilter') || 'all';
  if (filter === '1') words = words.filter(w => w.l === '1' || w.c === 'A1');
  else if (filter === '2') words = words.filter(w => w.l === '2' || w.c === 'A2');
  else if (filter === '3') words = words.filter(w => w.l === '3');
  else if (filter === 'exam') words = words.filter(w => w.c === 'A2' || w.c === 'B1');
  
  // 單字馬拉松要更多題
  const need = mode === 'marathon' ? 200 : count * 2;
  
  // 取亂數單字
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(need, shuffled.length));
}

/* ===== 遊戲狀態 ===== */
class GameState {
  constructor(mode) {
    this.mode = mode;
    this.config = GAME_CONFIG[mode];
    this.words = getWordsForGame(mode, this.config.rounds);
    this.round = 0;
    this.score = 0;
    this.correct = 0;
    this.wrong = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.timeLeft = 0;
    this.timer = null;
    this.isRunning = false;
    this.results = []; // { word, correct, time }
    this.currentWord = null;
  }

  get currentRound() { return Math.min(this.round + 1, this.config.rounds); }
  get totalRounds() { return this.mode === 'marathon' ? '∞' : this.config.rounds; }
  get isDone() {
    if (this.mode === 'marathon') return false;
    return this.round >= this.config.rounds;
  }

  nextWord() {
    if (this.isDone) return null;
    const idx = this.round % this.words.length;
    this.currentWord = this.words[idx];
    this.round++;
    return this.currentWord;
  }

  addResult(correct, timeSpent) {
    this.results.push({
      word: this.currentWord?.w || '',
      correct,
      time: timeSpent,
    });
    if (correct) {
      this.correct++;
      this.score += 10 + Math.floor((this.streak || 0) * 2);
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
    } else {
      this.wrong++;
      this.streak = 0;
    }
  }

  get accuracy() {
    const total = this.correct + this.wrong;
    return total === 0 ? 0 : Math.round(this.correct / total * 100);
  }

  getTitle() {
    if (this.accuracy >= 90) return '🌟 單字大師！';
    if (this.accuracy >= 70) return '👍 繼續加油！';
    if (this.accuracy >= 50) return '💪 再練習！';
    return '📚 需要更多練習';
  }

  getEarnedXp() {
    return this.correct * 5 + Math.floor(this.score / 2);
  }

  getEarnedCoins() {
    return this.correct * 2;
  }
}

/* ===== 遊戲介面 ===== */
function renderGameUI(mode, gs) {
  const cfg = GAME_CONFIG[mode];
  document.title = cfg.title + ' · 單字島';
  document.body.innerHTML = `
    <div class="app">
      <!-- Header -->
      <div id="topBar" class="top-bar"></div>

      <!-- 遊戲面板 -->
      <div class="game-area panel fade-in" id="gameArea">
        <div class="game-header">
          <div class="game-title">${cfg.title}</div>
          <div class="game-status">
            <span id="roundDisplay">${gs.currentRound}/${gs.totalRounds}</span>
            <span id="scoreDisplay">🏆 ${gs.score}</span>
            <span id="streakDisplay">🔥 ${gs.streak}</span>
            ${cfg.timePerRound > 0 ? `<span id="timerDisplay">⏱️ ${cfg.timePerRound}s</span>` : ''}
          </div>
        </div>

        <div id="gameContent" class="game-content"></div>

        <div class="game-progress">
          <div class="progress-bar" id="progressBar">
            <div class="progress-fill" id="progressFill" style="width:0%"></div>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <div class="bottom-nav">
        <div class="nav-item"><div class="icon">🏠</div><div class="lbl">冒險</div></div>
        <div class="nav-item active"><div class="icon">🎮</div><div class="lbl">遊戲中</div></div>
        <div class="nav-item"><div class="icon">📚</div><div class="lbl">單字本</div></div>
        <div class="nav-item"><div class="icon">⚙️</div><div class="lbl">設定</div></div>
      </div>
    </div>

    <style>
      .game-area { flex: 1; display: flex; flex-direction: column; }
      .game-header {
        display: flex; justify-content: space-between; align-items: center;
        margin-bottom: 20px; flex-wrap: wrap; gap: 8px;
      }
      .game-title { font-size: 20px; font-weight: 700; }
      .game-status { display: flex; gap: 14px; font-size: 15px; font-weight: 600; }
      .game-content {
        flex: 1; display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        min-height: 300px;
        width: 100%;
      }
      .progress-bar { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 6px; overflow: hidden; }
      .progress-fill { height: 100%; background: var(--gold); border-radius: 6px; transition: width 0.3s; }
    </style>
  `;
  
  updateTopBar(getPlayer());
}

/* ===== 遊戲結束畫面 ===== */
function renderGameOver(gs) {
  const p = getPlayer();
  const xp = gs.getEarnedXp();
  const coins = gs.getEarnedCoins();
  
  // 記錄玩家資料
  p.totalCorrect += gs.correct;
  p.totalWrong += gs.wrong;
  p.gamesPlayed++;
  p.coins += coins;
  if (gs.maxStreak > p.maxStreak) p.maxStreak = gs.maxStreak;
  if (p.streak < gs.streak) p.streak = gs.streak;
  
  addXp(p, xp, gs.config.title);
  updateQuest(p, 'practice_10', gs.correct + gs.wrong);
  updateQuest(p, 'streak_5', gs.maxStreak);
  
  // 錯誤本
  const wrongWords = gs.results.filter(r => !r.correct).map(r => r.word);
  wrongWords.forEach(w => addErrorWord(p, w));
  
  // 最近學習單字
  const recent = load('recentWords', []);
  const newWords = gs.results.map(r => r.word).filter(w => !recent.includes(w));
  recent.unshift(...newWords);
  if (recent.length > 200) recent.length = 200;
  save('recentWords', recent);
  
  // 成就檢查
  checkAchievements(p);
  setPlayer(p);

  const content = document.getElementById('gameContent');
  content.innerHTML = `
    <div class="result-panel fade-in">
      <div class="result-icon">${gs.accuracy >= 90 ? '🌟' : gs.accuracy >= 70 ? '👍' : gs.accuracy >= 50 ? '💪' : '📚'}</div>
      <div class="result-title">${gs.getTitle()}</div>
      <div class="result-stats">
        <div class="rs-row">
          <div class="rs-item"><div class="rs-num">${gs.correct + gs.wrong}</div><div class="rs-lbl">總題數</div></div>
          <div class="rs-item"><div class="rs-num">${gs.correct}</div><div class="rs-lbl">✅ 正確</div></div>
          <div class="rs-item"><div class="rs-num">${gs.wrong}</div><div class="rs-lbl">❌ 錯誤</div></div>
        </div>
        <div class="rs-row">
          <div class="rs-item"><div class="rs-num">${gs.score}</div><div class="rs-lbl">🏆 得分</div></div>
          <div class="rs-item"><div class="rs-num">${gs.accuracy}%</div><div class="rs-lbl">正確率</div></div>
          <div class="rs-item"><div class="rs-num">${gs.maxStreak}</div><div class="rs-lbl">🔥 最大連對</div></div>
        </div>
      </div>
      <div class="result-reward">
        <span>+${xp} XP</span>
        <span>🪙 ${coins}</span>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary" onclick="location.reload()">🔄 再玩一次</button>
        <button class="btn btn-ghost" onclick="navigate('index.html')">🏠 回冒險地圖</button>
      </div>
      ${gs.wrong > 0 ? `<details class="wrong-detail" style="margin-top:16px;text-align:left;width:100%;max-width:400px;">
        <summary style="cursor:pointer;font-size:13px;color:var(--green-200);">📕 答錯的單字（${gs.wrong} 個）</summary>
        <div style="margin-top:8px;font-size:13px;">
          ${gs.results.filter(r => !r.correct).map(r => `<div style="padding:4px 0;display:flex;justify-content:space-between;"><span>${r.word}</span><span style="color:var(--red);">✕</span></div>`).join('')}
        </div>
      </details>` : ''}
    </div>
  `;
  
  updateTopBar(getPlayer());
  
  // 更新進度條
  document.getElementById('progressFill').style.width = '100%';
}

/* ===== 遊戲共用樣式 ===== */
const gameStyles = `
  .result-panel { text-align: center; max-width: 450px; width: 100%; }
  .result-icon { font-size: 64px; margin-bottom: 8px; }
  .result-title { font-size: 24px; font-weight: 800; margin-bottom: 20px; }
  .result-stats { margin-bottom: 16px; }
  .rs-row { display: flex; gap: 8px; margin-bottom: 8px; }
  .rs-item { flex: 1; background: var(--glass); border-radius: var(--radius-sm); padding: 10px; }
  .rs-num { font-size: 24px; font-weight: 800; }
  .rs-lbl { font-size: 11px; color: var(--green-200); }
  .result-reward { 
    font-size: 22px; font-weight: 800; color: var(--gold);
    background: rgba(255,215,0,0.1);
    border-radius: var(--radius-md);
    padding: 12px 24px;
    display: inline-flex; gap: 24px;
    margin-bottom: 20px;
  }
  .result-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
`;
