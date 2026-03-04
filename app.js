/**
 * 雅思词汇真经 - 应用逻辑
 * 智能记忆算法 + 语音 + 提醒
 */

class IELTSVocabApp {
    constructor() {
        this.currentChapter = null;
        this.currentWordIndex = 0;
        this.currentMode = 'learn';
        this.reviewPageIndex = 0; // 复习模式当前页码
        this.wordsPerPage = 5; // 每页显示5个单词
        this.studyData = this.loadStudyData();
        this.speechifyApiKey = null; // 可以在这里设置Speechify API密钥
        this.init();
    }

    init() {
        this.renderChapters();
        this.renderSummaryChapters();
        this.updateProgress();
        this.createStars();
        this.checkDailyStreak();
        this.displayHomeMuskQuote();
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

    // 在首页显示马斯克语录 - 每次随机显示不同的英文语录
    displayHomeMuskQuote() {
        const quoteDisplay = document.getElementById('musk-quote-display');
        if (quoteDisplay && vocabularyData.muskQuotes && vocabularyData.muskQuotes.length > 0) {
            // 随机选择一条语录
            const randomIndex = Math.floor(Math.random() * vocabularyData.muskQuotes.length);
            const randomQuote = vocabularyData.muskQuotes[randomIndex];
            quoteDisplay.textContent = '"' + randomQuote + '"';
            console.log('马斯克语录已显示:', randomQuote);
        }
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
        this.reviewPageIndex = 0; // 重置复习页码
        
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
        document.getElementById('study-progress').textContent = `${this.currentWordIndex + 1} / ${this.currentChapter.words.length}`;
        
        // 根据模式应用不同的显示设置
        this.applyModeSettings(word);
    }

    // 渲染复习模式列表
    renderReviewList() {
        if (!this.currentChapter) return;
        
        const reviewList = document.getElementById('review-list');
        const reviewContainer = document.getElementById('review-list-container');
        const wordCardContainer = document.getElementById('word-card-container');
        const spellingSection = document.getElementById('spelling-section');
        const memoryButtons = document.getElementById('memory-buttons');
        const navButtons = document.querySelector('.nav-buttons');
        
        if (!reviewList || !reviewContainer) return;
        
        // 显示复习列表，隐藏单词卡片
        reviewContainer.classList.add('active');
        if (wordCardContainer) wordCardContainer.classList.add('hidden');
        if (spellingSection) spellingSection.style.display = 'none';
        if (memoryButtons) memoryButtons.style.display = 'none';
        if (navButtons) navButtons.style.display = 'none';
        
        // 计算当前页要显示的单词
        const startIndex = this.reviewPageIndex * this.wordsPerPage;
        const endIndex = Math.min(startIndex + this.wordsPerPage, this.currentChapter.words.length);
        const pageWords = this.currentChapter.words.slice(startIndex, endIndex);
        
        // 生成列表HTML
        reviewList.innerHTML = pageWords.map((word, index) => {
            const actualIndex = startIndex + index;
            return `
                <div class="review-item">
                    <div class="review-word">
                        <button class="review-speak-btn" onclick="app.speakWord(${actualIndex})" id="review-speak-btn-${actualIndex}">🔊</button>
                        <span class="review-word-text">${word.word}</span>
                    </div>
                    <div class="review-meaning">${word.meaning || ''}</div>
                </div>
            `;
        }).join('');
        
        // 更新分页信息
        const totalPages = Math.ceil(this.currentChapter.words.length / this.wordsPerPage);
        const pageInfo = document.getElementById('review-page-info');
        const prevBtn = document.getElementById('review-prev-btn');
        const nextBtn = document.getElementById('review-next-btn');
        
        if (pageInfo) pageInfo.textContent = `${this.reviewPageIndex + 1} / ${totalPages}`;
        if (prevBtn) prevBtn.disabled = this.reviewPageIndex === 0;
        if (nextBtn) nextBtn.disabled = this.reviewPageIndex >= totalPages - 1;
        
        // 更新进度显示
        document.getElementById('study-progress').textContent = `${startIndex + 1} - ${endIndex} / ${this.currentChapter.words.length}`;
    }

    // 播放指定索引单词的发音
    speakWord(index) {
        if (!this.currentChapter || !this.currentChapter.words[index]) return;
        
        const word = this.currentChapter.words[index];
        const btn = document.getElementById(`review-speak-btn-${index}`);
        if (btn) btn.classList.add('playing');
        
        // 使用 Web Speech API 播放
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word.word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        utterance.onend = () => {
            if (btn) btn.classList.remove('playing');
        };
        
        utterance.onerror = () => {
            if (btn) btn.classList.remove('playing');
        };
        
        speechSynthesis.speak(utterance);
    }

    // 复习模式上一页
    prevReviewPage() {
        if (this.reviewPageIndex > 0) {
            this.reviewPageIndex--;
            this.renderReviewList();
        }
    }

    // 复习模式下一页
    nextReviewPage() {
        if (!this.currentChapter) return;
        const totalPages = Math.ceil(this.currentChapter.words.length / this.wordsPerPage);
        if (this.reviewPageIndex < totalPages - 1) {
            this.reviewPageIndex++;
            this.renderReviewList();
        }
    }

    // 应用模式设置 - 根据当前模式显示/隐藏不同内容
    applyModeSettings(word) {
        const wordTextEl = document.getElementById('word-text');
        const wordPhoneticEl = document.getElementById('word-phonetic');
        const wordMeaningEl = document.getElementById('word-meaning');
        const wordExampleEl = document.getElementById('word-example');
        const wordExampleSection = document.getElementById('word-example-section');
        const wordTranslationEl = document.getElementById('word-translation');
        const etymologySection = document.getElementById('word-etymology-section');
        const etymologyText = document.getElementById('word-etymology');
        const memorySection = document.getElementById('word-memory-section');
        const memoryText = document.getElementById('word-memory');
        const spellSection = document.getElementById('spelling-section');
        const spellResultEl = document.getElementById('spelling-result');
        const memoryButtons = document.getElementById('memory-buttons');
        const reviewContainer = document.getElementById('review-list-container');
        const wordCardContainer = document.getElementById('word-card-container');
        const navButtons = document.querySelector('.nav-buttons');
        
        // 重置所有元素的样式
        if (wordMeaningEl) {
            wordMeaningEl.classList.remove('blurred-content', 'revealed');
            wordMeaningEl.style.filter = '';
        }
        if (etymologyText) {
            etymologyText.classList.remove('blurred-content', 'revealed');
            etymologyText.style.filter = '';
        }
        if (memoryText) {
            memoryText.classList.remove('blurred-content', 'revealed');
            memoryText.style.filter = '';
        }
        
        // 隐藏拼写区域和复习列表
        if (spellSection) spellSection.style.display = 'none';
        if (spellResultEl) spellResultEl.style.display = 'none';
        if (reviewContainer) reviewContainer.classList.remove('active');
        
        // 清除之前的事件监听器（通过克隆元素）
        if (wordMeaningEl) {
            const newMeaningEl = wordMeaningEl.cloneNode(true);
            wordMeaningEl.parentNode.replaceChild(newMeaningEl, wordMeaningEl);
        }
        if (etymologyText) {
            const newEtymologyText = etymologyText.cloneNode(true);
            etymologyText.parentNode.replaceChild(newEtymologyText, etymologyText);
        }
        if (memoryText) {
            const newMemoryText = memoryText.cloneNode(true);
            memoryText.parentNode.replaceChild(newMemoryText, memoryText);
        }
        
        // 获取最新的元素引用（因为可能已经被克隆替换）
        const currentMeaningEl = document.getElementById('word-meaning');
        const currentEtymologyText = document.getElementById('word-etymology');
        const currentMemoryText = document.getElementById('word-memory');
        
        switch (this.currentMode) {
            case 'learn':
                // 学习模式：显示单词卡片，隐藏复习列表
                if (wordCardContainer) wordCardContainer.classList.remove('hidden');
                if (navButtons) navButtons.style.display = 'flex';
                
                // 学习模式：显示所有内容
                wordTextEl.textContent = word.word;
                wordTextEl.style.visibility = 'visible';
                wordPhoneticEl.textContent = word.phonetic || '';
                wordPhoneticEl.style.visibility = 'visible';
                if (currentMeaningEl) currentMeaningEl.textContent = word.meaning || '';
                wordExampleEl.textContent = word.example || '';
                wordTranslationEl.textContent = word.translation || '';
                
                // 显示词源
                if (word.etymology && word.etymology !== '词根待补充') {
                    etymologySection.style.display = 'block';
                    if (currentEtymologyText) currentEtymologyText.textContent = word.etymology;
                } else {
                    etymologySection.style.display = 'none';
                }
                
                // 显示记忆方法
                if (word.memory && word.memory !== '联想记忆: ' + word.word) {
                    memorySection.style.display = 'block';
                    if (currentMemoryText) currentMemoryText.textContent = word.memory;
                } else {
                    memorySection.style.display = 'none';
                }
                
                // 显示例句区域
                if (wordExampleSection) wordExampleSection.style.display = 'block';
                
                // 显示记忆按钮
                if (memoryButtons) memoryButtons.style.display = 'grid';
                break;
                
            case 'review':
                // 复习模式：显示列表形式
                this.renderReviewList();
                return; // 复习模式使用独立的渲染逻辑
                
            case 'spell':
                // 拼写模式：显示单词卡片，隐藏复习列表
                if (wordCardContainer) wordCardContainer.classList.remove('hidden');
                if (navButtons) navButtons.style.display = 'flex';
                
                // 拼写模式：隐藏单词，显示释义作为提示，显示输入框
                wordTextEl.textContent = '***';
                wordTextEl.style.visibility = 'visible';
                wordTextEl.style.color = '';
                wordPhoneticEl.textContent = '';
                wordPhoneticEl.style.visibility = 'hidden';
                if (currentMeaningEl) {
                    currentMeaningEl.textContent = word.meaning || '';
                    currentMeaningEl.classList.remove('blurred-content', 'revealed');
                }
                
                // 隐藏例句区域
                if (wordExampleSection) wordExampleSection.style.display = 'none';
                
                // 隐藏词源和记忆方法
                etymologySection.style.display = 'none';
                memorySection.style.display = 'none';
                
                // 显示拼写区域
                if (spellSection) {
                    spellSection.style.display = 'block';
                    const spellInput = document.getElementById('spelling-input');
                    if (spellInput) {
                        spellInput.value = '';
                        spellInput.classList.remove('correct', 'wrong');
                        setTimeout(() => spellInput.focus(), 100);
                    }
                }
                
                // 隐藏记忆按钮（拼写模式有自己的检查按钮）
                if (memoryButtons) memoryButtons.style.display = 'none';
                
                // 存储当前单词用于检查
                this.currentSpellWord = word.word;
                break;
        }
    }

    // 检查拼写
    checkSpelling() {
        const spellInput = document.getElementById('spelling-input');
        const spellResultEl = document.getElementById('spelling-result');
        const wordTextEl = document.getElementById('word-text');
        
        if (!spellInput || !spellResultEl) return;
        
        const userInput = spellInput.value.trim().toLowerCase();
        const correctWord = this.currentSpellWord.toLowerCase();
        
        spellResultEl.style.display = 'block';
        
        if (userInput === correctWord) {
            // 拼写正确
            spellResultEl.className = 'spelling-result correct';
            spellResultEl.textContent = '✓ 正确！';
            spellInput.classList.add('correct');
            wordTextEl.textContent = this.currentSpellWord;
            wordTextEl.style.color = '#4ade80';
            
            this.playCorrectSound();
            
            // 延迟后自动进入下一个
            setTimeout(() => {
                wordTextEl.style.color = '';
                spellInput.classList.remove('correct');
                this.nextWord();
            }, 1500);
        } else {
            // 拼写错误
            spellResultEl.className = 'spelling-result wrong';
            spellResultEl.textContent = `✗ 错误！正确答案是: ${this.currentSpellWord}`;
            spellInput.classList.add('wrong');
            wordTextEl.textContent = this.currentSpellWord;
            wordTextEl.style.color = '#f87171';
            
            this.playWrongSound();
            
            // 3秒后恢复并进入下一个
            setTimeout(() => {
                wordTextEl.style.color = '';
                spellInput.classList.remove('wrong');
                this.nextWord();
            }, 3000);
        }
    }

    // 播放正确音效
    playCorrectSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            // 创建愉快的上升音调
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.exponentialRampToValueAtTime(1046.5, audioContext.currentTime + 0.1); // C6
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Correct sound play failed:', e);
        }
    }

    // 播放错误音效
    playWrongSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            // 创建低沉的下降音调
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Wrong sound play failed:', e);
        }
    }

    // 播放单词（顶部按钮）
    async speak() {
        if (!this.currentChapter) return;
        
        const word = this.currentChapter.words[this.currentWordIndex];
        if (!word) return;
        
        const btn = document.getElementById('speak-btn');
        if (btn) btn.classList.add('playing');

        // 只播放单词
        this.speakWithWebSpeechWord(word.word);
    }

    // 只播放单词
    speakWithWebSpeechWord(word) {
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        utterance.onend = () => {
            const btn = document.getElementById('speak-btn');
            if (btn) btn.classList.remove('playing');
        };

        utterance.onerror = () => {
            const btn = document.getElementById('speak-btn');
            if (btn) btn.classList.remove('playing');
        };
        
        speechSynthesis.speak(utterance);
    }

    // Speechify TTS API
    async speakWithSpeechify(text, example) {
        const response = await fetch('https://api.sws.speechify.com/v1/audio/stream', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.speechifyApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: `<speak>${text}. <break time="500ms"/> ${example}</speak>`,
                voice_id: 'henry', // 可以选择不同的声音
                audio_format: 'mp3'
            })
        });

        if (!response.ok) {
            throw new Error('Speechify API error');
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        
        audio.onended = () => {
            const btn = document.getElementById('speak-btn');
            if (btn) btn.classList.remove('playing');
            URL.revokeObjectURL(audioUrl);
        };

        await audio.play();
    }

    // 播放例句
    speakExample() {
        if (!this.currentChapter) return;
        
        const word = this.currentChapter.words[this.currentWordIndex];
        if (!word || !word.example) return;
        
        const btn = document.getElementById('speak-example-btn');
        if (btn) btn.classList.add('playing');
        
        // 使用 Web Speech API 播放例句
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word.example);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        utterance.onend = () => {
            const btn = document.getElementById('speak-example-btn');
            if (btn) btn.classList.remove('playing');
        };
        
        utterance.onerror = () => {
            const btn = document.getElementById('speak-example-btn');
            if (btn) btn.classList.remove('playing');
        };
        
        speechSynthesis.speak(utterance);
    }

    // Web Speech API 作为备选
    speakWithWebSpeech(word, example) {
        // 取消之前的语音
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        utterance.onend = () => {
            setTimeout(() => {
                if (example && example !== 'This is an example sentence with ' + word + '.') {
                    const exUtterance = new SpeechSynthesisUtterance(example);
                    exUtterance.lang = 'en-US';
                    exUtterance.rate = 0.9;
                    exUtterance.onend = () => {
                        const btn = document.getElementById('speak-btn');
                        if (btn) btn.classList.remove('playing');
                    };
                    speechSynthesis.speak(exUtterance);
                } else {
                    const btn = document.getElementById('speak-btn');
                    if (btn) btn.classList.remove('playing');
                }
            }, 300);
        };

        utterance.onerror = () => {
            const btn = document.getElementById('speak-btn');
            if (btn) btn.classList.remove('playing');
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
            
            // 播放鼓励语音
            this.playEncouragement();
            
            setTimeout(() => {
                popup.classList.add('hide');
                setTimeout(() => {
                    popup.classList.remove('show');
                    popup.classList.remove('hide');
                }, 300);
            }, 3000);
        }
    }

    // 播放狗狗撒娇开心的叫声
    playEncouragement() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // 如果音频上下文被暂停，尝试恢复
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            // 创建狗狗撒娇开心的叫声 - 短促上扬的音调
            const now = audioContext.currentTime;
            
            // 第一声 - 短促上扬
            this.playDogBark(audioContext, now, 600, 0.1);
            // 第二声 - 稍高，更开心
            this.playDogBark(audioContext, now + 0.15, 750, 0.08);
            // 第三声 - 最高，撒娇
            this.playDogBark(audioContext, now + 0.3, 900, 0.12);
        } catch (e) {
            console.log('Audio play failed:', e);
        }
    }

    // 播放单声狗叫
    playDogBark(audioContext, startTime, startFreq, duration) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // 使用三角波模拟狗叫声
        oscillator.type = 'triangle';
        
        // 频率快速上升然后下降，模拟撒娇的叫声
        oscillator.frequency.setValueAtTime(startFreq * 0.7, startTime);
        oscillator.frequency.exponentialRampToValueAtTime(startFreq, startTime + duration * 0.3);
        oscillator.frequency.exponentialRampToValueAtTime(startFreq * 0.5, startTime + duration);
        
        // 低通滤波器让声音更柔和
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, startTime);
        filter.frequency.exponentialRampToValueAtTime(1000, startTime + duration);
        
        // 音量包络 - 快速起音，柔和衰减
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.25, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
    }

    // 渲染章节词汇汇总按钮
    renderSummaryChapters() {
        const grid = document.getElementById('summary-chapters-grid');
        if (!grid) return;

        grid.innerHTML = vocabularyData.chapters.map(chapter => `
            <div class="summary-chapter-btn" onclick="app.showChapterSummary(${chapter.id})">
                <div class="chapter-icon">${chapter.icon}</div>
                <div class="chapter-name">${chapter.name}</div>
                <div class="chapter-count">${chapter.words.length} 词</div>
            </div>
        `).join('');
    }

    // 显示章节词汇汇总
    showChapterSummary(chapterId) {
        const chapter = vocabularyData.chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        document.getElementById('summary-chapter-name').textContent = chapter.name + ' - 词汇汇总';
        document.getElementById('summary-word-count').textContent = `共 ${chapter.words.length} 词`;

        const container = document.getElementById('summary-list-container');
        container.innerHTML = chapter.words.map((word, index) => `
            <div class="summary-item">
                <div class="summary-item-number">#${index + 1}</div>
                <div class="summary-item-content">
                    <div class="summary-item-word">${word.word}</div>
                    <div class="summary-item-phonetic">${word.phonetic || ''}</div>
                    <div class="summary-item-meaning">${word.meaning || ''}</div>
                </div>
                <button class="summary-item-speak" onclick="app.speakWordText('${word.word}', this)">🔊</button>
            </div>
        `).join('');

        this.showPage('summary');
    }

    // 播放单个单词（用于汇总页面）
    speakWordText(word, btn) {
        if (btn) btn.classList.add('playing');

        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;

        utterance.onend = () => {
            if (btn) btn.classList.remove('playing');
        };

        utterance.onerror = () => {
            if (btn) btn.classList.remove('playing');
        };

        speechSynthesis.speak(utterance);
    }

    nextWord() {
        if (!this.currentChapter) return;
        
        // 记录当前单词为已学习
        const wordKey = `${this.currentChapter.id}_${this.currentWordIndex}`;
        const isNewWord = !this.studyData.learnedWords[wordKey];
        
        if (isNewWord) {
            this.studyData.learnedWords[wordKey] = true;
            this.saveStudyData();
            this.updateProgress();
            
            // 检查糖果动画 - 每学习10个新单词
            const totalLearned = Object.keys(this.studyData.learnedWords).length;
            if (totalLearned % 10 === 0) {
                this.showCandyCelebration(totalLearned);
            }
        }
        
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
        
        // 切换到复习模式时重置页码
        if (mode === 'review') {
            this.reviewPageIndex = 0;
        }
        
        // 更新模式按钮状态
        document.querySelectorAll('.mode-btn').forEach((btn, index) => {
            btn.classList.remove('active');
            if ((mode === 'learn' && index === 0) || 
                (mode === 'review' && index === 1) || 
                (mode === 'spell' && index === 2)) {
                btn.classList.add('active');
            }
        });
        
        // 获取所有相关元素
        const wordCardContainer = document.getElementById('word-card-container');
        const reviewContainer = document.getElementById('review-list-container');
        const spellingSection = document.getElementById('spelling-section');
        const memoryButtons = document.getElementById('memory-buttons');
        const navButtons = document.querySelector('.nav-buttons');
        
        // 重置所有视图
        if (wordCardContainer) wordCardContainer.classList.remove('hidden');
        if (reviewContainer) reviewContainer.classList.remove('active');
        if (spellingSection) spellingSection.style.display = 'none';
        if (memoryButtons) memoryButtons.style.display = 'none';
        if (navButtons) navButtons.style.display = 'flex';
        
        // 根据模式应用不同设置
        if (mode === 'learn') {
            if (memoryButtons) memoryButtons.style.display = 'grid';
        } else if (mode === 'review') {
            if (wordCardContainer) wordCardContainer.classList.add('hidden');
            if (navButtons) navButtons.style.display = 'none';
            this.renderReviewList();
            return;
        } else if (mode === 'spell') {
            if (memoryButtons) memoryButtons.style.display = 'none';
        }
        
        // 重新渲染当前单词以应用新模式
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
            this.updateStats();
        }
    }

    updateStats() {
        const totalWords = vocabularyData.chapters.reduce((sum, ch) => sum + ch.words.length, 0);
        const learnedCount = Object.keys(this.studyData.learnedWords).length;
        
        document.getElementById('stat-total').textContent = learnedCount;
        document.getElementById('stat-mastered').textContent = learnedCount;
        document.getElementById('stat-streak').textContent = this.studyData.streak;
        document.getElementById('stat-time').textContent = Math.floor(this.studyData.totalStudyTime / 60);
    }

    goHome() {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('home-page').classList.add('active');
        this.displayHomeMuskQuote();
        this.renderChapters();
    }

    setReminder(element, time) {
        document.querySelectorAll('.time-chip').forEach(chip => chip.classList.remove('active'));
        element.classList.add('active');
        this.studyData.reminders = [time];
        this.saveStudyData();
        
        // 显示提醒已设置的提示
        this.showToast(`⏰ 已设置每日 ${time} 提醒学习！`);
    }

    // 显示提示消息
    showToast(message) {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 0.95rem;
            font-weight: 500;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 3000;
            animation: toastPop 0.3s ease;
        `;
        toast.textContent = message;
        
        // 添加动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes toastPop {
                0% { transform: translateX(-50%) scale(0.8); opacity: 0; }
                100% { transform: translateX(-50%) scale(1); opacity: 1; }
            }
            @keyframes toastFade {
                0% { transform: translateX(-50%) scale(1); opacity: 1; }
                100% { transform: translateX(-50%) scale(0.8); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(toast);
        
        // 3秒后自动消失
        setTimeout(() => {
            toast.style.animation = 'toastFade 0.3s ease forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}

const app = new IELTSVocabApp();

document.addEventListener('keydown', (e) => {
    // 如果在拼写模式，且焦点在输入框，按回车键检查拼写
    if (app.currentMode === 'spell' && document.activeElement?.id === 'spelling-input') {
        if (e.key === 'Enter') {
            e.preventDefault();
            app.checkSpelling();
            return;
        }
    }
    
    if (e.key === 'ArrowLeft') app.prevWord();
    if (e.key === 'ArrowRight') app.nextWord();
    if (e.key === ' ') {
        e.preventDefault();
        app.speak();
    }
});
