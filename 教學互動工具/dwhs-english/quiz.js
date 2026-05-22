// 學測英文題庫數據
const quizData = [
    {
        question: "1. The teacher asked the students _______ their homework on time.",
        options: [
            "A) submit",
            "B) to submit",
            "C) submitting",
            "D) submitted"
        ],
        answer: 1,
        explanation: "✅ 正確答案：B) to submit\n\n💡 語法解析：ask + 人 + to V（不定詞）是固定用法，表示「要求某人做某事」。\n\n📌 例句：My mother asked me to clean my room.（我媽媽要我打掃房間。）"
    },
    {
        question: "2. If I _______ you, I would take the job offer immediately.",
        options: [
            "A) am",
            "B) was",
            "C) were",
            "D) have been"
        ],
        answer: 2,
        explanation: "✅ 正確答案：C) were\n\n💡 語法解析：這是虛擬語氣（If I were...），表示與現在事實相反的假設，be 動詞一律用 were。\n\n📌 例句：If I were rich, I would travel around the world.（如果我有錢，我會環遊世界。）"
    },
    {
        question: "3. Not only _______ late, but he also forgot his presentation materials.",
        options: [
            "A) he was",
            "B) was he",
            "C) did he",
            "D) he did"
        ],
        answer: 1,
        explanation: "✅ 正確答案：B) was he\n\n💡 語法解析：Not only 開頭的句子需要「倒裝」，be 動詞（was）要放在主詞（he）前面。\n\n📌 例句：Not only did she finish her homework, but she also helped her brother.（她不僅完成了作業，還幫了她弟弟。）"
    },
    {
        question: "4. The book, _______ cover is red, belongs to my sister.",
        options: [
            "A) who",
            "B) whom",
            "C) whose",
            "D) which"
        ],
        answer: 2,
        explanation: "✅ 正確答案：C) whose\n\n💡 語法解析：whose 表示「...的」，後面要接名詞（cover），用來修飾前面的先行詞（the book）。\n\n📌 例句：The man whose car was stolen called the police.（車子被偷的那個人報警了。）"
    },
    {
        question: "5. By the time we arrived at the cinema, the movie _______.",
        options: [
            "A) already started",
            "B) has already started",
            "C) had already started",
            "D) was already starting"
        ],
        answer: 2,
        explanation: "✅ 正確答案：C) had already started\n\n💡 語法解析：By the time + 過去式，主句要用「過去完成式」（had + p.p.），表示「在某個過去時間點之前已經完成」。\n\n📌 例句：By the time I woke up, my father had already left for work.（當我醒來時，我爸已經去上班了。）"
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// 渲染題目
function renderQuestion() {
    const quizContent = document.getElementById('quizContent');
    
    if (currentQuestion >= quizData.length) {
        // 測驗結束
        quizContent.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: #2A5CAA; margin-bottom: 20px;">🎉 測驗完成！</h2>
                <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 30px;">
                    你答對了 <span style="color: #4CAF50;">${score}</span> / ${quizData.length} 題
                </p>
                <p style="font-size: 1.2rem; color: #666; margin-bottom: 40px;">
                    正確率: <span style="color: #2A5CAA; font-weight: bold;">
                        ${Math.round((score / quizData.length) * 100)}%
                    </span>
                </p>
                <button onclick="location.reload()" class="btn btn-primary">
                    <i class="fas fa-redo"></i> 再測一次
                </button>
            </div>
        `;
        
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
        document.querySelector('.score-display').style.display = 'none';
        return;
    }
    
    const question = quizData[currentQuestion];
    
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestion] === index;
        const isCorrect = index === question.answer;
        const showFeedback = userAnswers[currentQuestion] !== undefined;
        
        let className = 'quiz-option';
        if (isSelected) className += ' selected';
        if (showFeedback && isCorrect) className += ' correct';
        if (showFeedback && !isCorrect && isSelected) className += ' incorrect';
        
        optionsHTML += `
            <div class="${className}" onclick="selectOption(${index})">
                ${option}
            </div>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="quiz-question">📝 ${question.question}</div>
        <div class="quiz-options">
            ${optionsHTML}
        </div>
        <div class="quiz-feedback ${userAnswers[currentQuestion] !== undefined ? 'show' : ''}" 
             id="feedback">
            ${userAnswers[currentQuestion] !== undefined ? question.explanation : ''}
        </div>
    `;
    
    // 顯示/隱藏按鈕
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtnText').textContent = 
        currentQuestion === quizData.length - 1 ? '完成測驗' : '下一題';
    
    // 更新分數顯示
    document.getElementById('score').textContent = score;
}

// 選擇答案
function selectOption(index) {
    // 如果已經回答過，不再更改
    if (userAnswers[currentQuestion] !== undefined) return;
    
    userAnswers[currentQuestion] = index;
    
    // 檢查是否正確
    if (index === quizData[currentQuestion].answer) {
        score++;
        showNotification('✅ 答對了！');
    } else {
        showNotification('❌ 再想想看！');
    }
    
    // 重新渲染題目以顯示反饋
    renderQuestion();
}

// 上一題
document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
});

// 下一題
document.getElementById('nextBtn').addEventListener('click', function() {
    if (userAnswers[currentQuestion] === undefined) {
        showNotification('⚠️ 請先選擇答案！');
        return;
    }
    
    currentQuestion++;
    renderQuestion();
});

// 初次渲染
renderQuestion();