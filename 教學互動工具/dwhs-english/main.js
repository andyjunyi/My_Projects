// ==================== 導航列切換 ====================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // 點擊選單外區域關閉
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && 
                !navMenu.contains(e.target) && 
                navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// ==================== 平滑滾動 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 動畫效果 ====================
// 當元素進入視窗時觸發動畫
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .course-card, .course-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 初次載入和滾動時觸發
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// 初始化動畫狀態
document.querySelectorAll('.feature-card, .course-card, .course-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// ==================== 按鈕互動效果 ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== 課程收藏功能 ====================
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        const isBookmarked = this.classList.toggle('bookmarked');
        
        if (isBookmarked) {
            this.innerHTML = '<i class="fas fa-bookmark"></i> 已收藏';
            this.style.backgroundColor = '#4CAF50';
            this.style.borderColor = '#4CAF50';
            this.style.color = 'white';
            
            // 顯示提示訊息
            showNotification('✅ 已加入收藏！');
        } else {
            this.innerHTML = '<i class="far fa-bookmark"></i> 收藏';
            this.style.backgroundColor = 'transparent';
            this.style.borderColor = '#2A5CAA';
            this.style.color = '#2A5CAA';
        }
    });
});

// ==================== 觀看課程按鈕 ====================
document.querySelectorAll('.btn-play').forEach(button => {
    button.addEventListener('click', function() {
        showNotification('🎬 課程播放功能開發中...');
        
        // 模擬播放統計
        const courseTitle = this.closest('.course-item-content').querySelector('h3').textContent;
        console.log('觀看課程:', courseTitle);
    });
});

// ==================== 通知訊息 ====================
function showNotification(message) {
    // 移除現有的通知
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // 建立新通知
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            ${message}
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒後消失
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== 動畫關鍵幀 ====================
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== 學習進度模擬 ====================
// 模擬用戶學習數據（實際應用時可連接後端）
const userData = {
    completedCourses: 0,
    totalPoints: 0,
    currentStreak: 0,
    lastLogin: new Date().toISOString()
};

// ==================== 頁面載入效果 ====================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});