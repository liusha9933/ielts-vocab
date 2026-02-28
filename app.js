/**
 * 雅思词汇真经 - 应用逻辑
 * 智能记忆算法 + 语音 + 提醒
 */

class IELTSVocabApp {
    constructor() {
        this.currentChapter = null;
        this.currentWordIndex = 0;
        this.currentMode = 'learn';
        this.studyData = this.loadStudyData();
        this.init();
    }

    init() {
        this.renderChapters();
        this.updateProgress();
        this.createStars();
        this.checkDailyStreak();
    }

    createStars() {
        const starsContainer = document.getElementById('stars');
        if (!starsContainer) return;
        
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }

    loadStudyData() {
        const defaultData = {
            learnedWords: {},
            wordStatus: {},
            nextReview: {},
            chapterProgress: {},
            streak: 0,
            lastStudyDate: null,
            totalStudyTime: 0,
            dailyGoal: 20
        };
        
        try {
            const saved = localStorage.getItem('ieltsVocabData');
            return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
        } catch (e) {
            return defaultData;
        }
    }

    saveStudyData() {
        localStorage.setItem('ieltsVocabData', JSON.stringify(this.studyData));
    }

    renderChapters() {
        const grid = document.getElementById('chapters-grid');
        if (!grid) return;
        
        grid.innerHTML = vocabularyData.chapters.map(chapter => {
            const progress = this.studyData.chapterProgress[chapter.id] || 0;
            const isCompleted = progress >= chapter.words.length;
            
            return `
                <div class="chapter-card ${isCompleted ? 'completed' : ''}" onclick="app.startChapter(${chapter.id})">
                    <div class="chapter-icon">${chapter.icon}</div>
                    <div class="chapter-name">${chapter.name}</div>
                    <div class="chapter-count">${chapter.words.length} 词</div>
                    <div class="chapter-progress">
                        <div class="chapter-progress-fill" style="width: ${(progress / chapter.words.length * 100) || 0}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateProgress() {
        const totalWords = vocabularyData.chapters.reduce((sum, ch) => sum + ch.words.length, 0);
        const learnedCount = Object.keys(this.studyData.learnedWords).length;
        const percentage = Math.round(learnedCount / totalWords * 100);
        
        const progressFill = document.getElementById('progress-fill');
        const progressStats = document.getElementById('progress-stats');
        const streakText = document.getElementById('streak-text');
        
        if (progressFill) progressFill.style.width = percentage + '%';
        if (progressStats) progressStats.textContent = `${learnedCount} / ${totalWords} 词`;
        if (streakText) streakText.textContent = `连续学习 ${this.studyData.streak} 天`;
    }

    checkDailyStreak() {
        const today = new Date().toDateString();
        const lastDate = this.studyData.lastStudyDate;
        
        if (lastDate) {
            const last = new Date(lastDate);
            const todayDate = new Date(today);
            const diffDays = Math.floor((todayDate - last) / (1000 * 60 * 60 * 24));
            
            if (diffDays > 1) {
                this.studyData.streak = 0;
                this.saveStudyData();
            }
        }
    }

    startChapter(chapterId) {
        this.currentChapter = vocabularyData.chapters.find(ch => ch.id === chapterId);
        this.currentWordIndex = this.studyData.chapterProgress[chapterId] || 0;
        
        document.getElementById('study-chapter-name').textContent = this.currentChapter.name;
        this.showPage('study');
        this.renderWord();
    }

    renderWord() {
        if (!this.currentChapter) return;
        
        const word = this.currentChapter.words[this.currentWordIndex];
        if (!word) {
            this.showChapterComplete();
            return;
        }
        
        document.getElementById('word-number').textContent = `#${this.currentWordIndex + 1}/${this.currentChapter.words.length}`;
        document.getElementById('word-text').textContent = word.word;
        document.getElementById('word-phonetic').textContent = word.phonetic;
        document.getElementById('word-meaning').textContent = word.meaning;
        document.getElementById('word-example').textContent = word.example;
        document.getElementById('word-translation').textContent = word.translation;
        document.getElementById('study-progress').textContent = `${this.currentWordIndex + 1} / ${this.currentChapter.words.length}`;
        
        // 显示词源解析（如果有）
        const etymologySection = document.getElementById('word-etymology-section');
        const etymologyText = document.getElementById('word-etymology');
        if (word.etymology) {
            etymologySection.style.display = 'block';
            etymologyText.textContent = word.etymology;
        } else {
            etymologySection.style.display = 'none';
        }
        
        // 显示记忆方法（如果有）
        const memorySection = document.getElementById('word-memory-section');
        const memoryText = document.getElementById('word-memory');
        if (word.memory) {
            memorySection.style.display = 'block';
            memoryText.textContent = word.memory;
        } else {
            memorySection.style.display = 'none';
        }
        
        // 显示马斯克语录（如果有单词特定的语录，否则随机显示）
        const muskSection = document.getElementById('musk-quote-section');
        const muskText = document.getElementById('musk-quote-text');
        if (word.muskQuote || (vocabularyData.muskQuotes && vocabularyData.muskQuotes.length > 0)) {
            muskSection.style.display = 'block';
            if (word.muskQuote) {
                muskText.textContent = word.muskQuote;
            } else {
                // 随机选择一条马斯克语录
                const randomQuote = vocabularyData.muskQuotes[Math.floor(Math.random() * vocabularyData.muskQuotes.length)];
                muskText.textContent = randomQuote;
            }
        } else {
            muskSection.style.display = 'none';
        }
        
        if (this.currentMode === 'learn') {
            setTimeout(() => this.speak(), 500);
        }
    }

    speak() {
        if (!this.currentChapter) return;
        
        const word = this.currentChapter.words[this.currentWordIndex];
        if (!word) return;
        
        const btn = document.getElementById('speak-btn');
        if (btn) btn.classList.add('playing');
        
        const utterance = new SpeechSynthesisUtterance(word.word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        utterance.onend = () => {
            if (btn) btn.classList.remove('playing');
            setTimeout(() => {
                const exUtterance = new SpeechSynthesisUtterance(word.example);
                exUtterance.lang = 'en-US';
                exUtterance.rate = 0.9;
                speechSynthesis.speak(exUtterance);
            }, 300);
        };
        
        speechSynthesis.speak(utterance);
    }

    rateWord(difficulty) {
        if (!this.currentChapter) return;
        
        const word = this.currentChapter.words[this.currentWordIndex];
        const wordKey = `${this.currentChapter.id}_${this.currentWordIndex}`;
        
        // 检查是否是新学习的单词（用于糖果动画计数）
        const isNewWord = !this.studyData.learnedWords[wordKey];
        
        this.studyData.wordStatus[wordKey] = difficulty;
        this.studyData.learnedWords[wordKey] = true;
        
        const days = difficulty === 'hard' ? 1 : difficulty === 'good' ? 3 : 7;
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + days);
        this.studyData.nextReview[wordKey] = nextReview.toISOString();
        
        // 更新章节进度
        const chapterProgress = this.studyData.chapterProgress[this.currentChapter.id] || 0;
        if (this.currentWordIndex >= chapterProgress) {
            this.studyData.chapterProgress[this.currentChapter.id] = this.currentWordIndex + 1;
        }
        
        this.saveStudyData();
        this.updateProgress();
        
        // 检查糖果动画 - 每学习10个新单词
        if (isNewWord) {
            const totalLearned = Object.keys(this.studyData.learnedWords).length;
            if (totalLearned % 10 === 0) {
                this.showCandyCelebration(totalLearned);
            }
        }
        
        // 检查里程碑
        this.checkMilestone();
        
        // 进入下一个单词
        this.nextWord();
    }

    showCandyCelebration(count) {
        const popup = document.getElementById('candy-popup');
        const countSpan = document.getElementById('candy-count');
        
        if (popup && countSpan) {
            countSpan.textContent = count;
            popup.classList.add('show');
            popup.classList.remove('hide');
            
            setTimeout(() => {
                popup.classList.add('hide');
                setTimeout(() => {
                    popup.classList.remove('show');
                    popup.classList.remove('hide');
                }, 300);
            }, 3000);
        }
    }

    nextWord() {
        if (!this.currentChapter) return;
        
        if (this.currentWordIndex < this.currentChapter.words.length - 1) {
            this.currentWordIndex++;
            this.renderWord();
        } else {
            this.showChapterComplete();
        }
    }

    prevWord() {
        if (!this.currentChapter || this.currentWordIndex <= 0) return;
        
        this.currentWordIndex--;
        this.renderWord();
    }

    showChapterComplete() {
        const motivations = vocabularyData.motivations.milestone;
        const randomMot = motivations[Math.floor(Math.random() * motivations.length)];
        
        this.showMotivation(randomMot.emoji, '章节完成！', 
            `恭喜你完成了「${this.currentChapter.name}」的学习！${randomMot.text}`);
        
        this.renderChapters();
        
        setTimeout(() => {
            this.goHome();
        }, 3000);
    }

    checkMilestone() {
        const learnedCount = Object.keys(this.studyData.learnedWords).length;
        const milestones = [100, 500, 1000, 2000, 3600];
        
        if (milestones.includes(learnedCount)) {
            const mot = vocabularyData.motivations.milestone.find(m => 
                (learnedCount === 100 && m.title.includes('100')) ||
                (learnedCount === 500 && m.title.includes('500')) ||
                (learnedCount === 1000 && m.title.includes('1000')) ||
                (learnedCount === 2000 && m.title.includes('2000')) ||
                (learnedCount === 3600 && m.title.includes('终极'))
            );
            
            if (mot) {
                this.showMotivation(mot.emoji, mot.title, mot.text);
            }
        }
    }

    showMotivation(emoji, title, text) {
        document.getElementById('motivation-emoji').textContent = emoji;
        document.getElementById('motivation-title').textContent = title;
        document.getElementById('motivation-text').textContent = text;
        document.getElementById('motivation-modal').classList.add('active');
    }

    closeMotivation() {
        document.getElementById('motivation-modal').classList.remove('active');
    }

    setMode(mode) {
        this.currentMode = mode;
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        this.renderWord();
    }

    showPage(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(page + '-page').classList.add('active');
        
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        if (event && event.target) {
            event.target.closest('.nav-item')?.classList.add('active');
        }
        
        if (page === 'stats') {
            this.updateProgress();
        }
    }

    goHome() {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('home-page').classList.add('active');
        this.renderChapters();
    }

    setReminder(element, time) {
        document.querySelectorAll('.time-chip').forEach(chip => chip.classList.remove('active'));
        element.classList.add('active');
        this.studyData.reminders = [time];
        this.saveStudyData();
    }
}

const app = new IELTSVocabApp();

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') app.prevWord();
    if (e.key === 'ArrowRight') app.nextWord();
    if (e.key === ' ') {
        e.preventDefault();
        app.speak();
    }
});
