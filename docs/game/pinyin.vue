<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">🧩 声母韵母拼装游戏</h1>
      <div class="score">得分: <span>{{ score }}</span> | 关卡: <span>{{ currentLevel }}</span></div>
    </div>

    <div class="game-area">
      <div class="target-area">
        <div class="target-word">拼出下面的拼音:</div>
        <div class="target-image">{{ currentLevelData.emoji }}</div>
        <div>{{ currentLevelData.pinyin }} ({{ currentLevelData.word }})</div>
        <div class="drop-zones">
          <div 
            v-for="(zone, index) in dropZones" 
            :key="index"
            class="drop-zone"
            :class="{ 
              'drag-over': dragOverIndex === index,
              'filled': zone !== '',
              'clickable': selectedPiece && zone === ''
            }"
            @dragover="handleDragOver($event, index)"
            @drop="handleDrop($event, index)"
            @click="handleDropZoneClick(index)"
          >
            {{ zone }}
          </div>
        </div>
      </div>

      <div class="pieces-area">
        <div 
          v-for="(piece, index) in availablePieces" 
          :key="index"
          class="piece"
          :class="{ 
            'vowel': isVowel(piece.text),
            'dragging': draggingIndex === index,
            'selected': selectedPiece === piece.text && !piece.used,
            'used': piece.used
          }"
          :style="{ display: piece.used ? 'none' : 'flex' }"
          :draggable="!piece.used"
          @dragstart="handleDragStart($event, index)"
          @dragend="handleDragEnd"
          @click="handlePieceClick(piece.text, index)"
        >
          {{ piece.text }}
        </div>
      </div>

      <div class="controls">
        <button class="btn btn-secondary" @click="checkAnswer">🎯 检查答案</button>
        <button class="btn btn-primary" @click="nextLevel">🎉 下一关</button>
        <button class="btn btn-primary" @click="resetGame">🔄 重新开始</button>
      </div>
    </div>

    <!-- 成功动画 -->
    <div v-if="showSuccessAnimation" class="success-animation">
      🎉 太棒了！
    </div>

    <!-- 彩带动画 -->
    <div class="celebration">
      <div 
        v-for="confetti in confettiList" 
        :key="confetti.id"
        class="confetti"
        :style="confetti.style"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinyinGame',
  data() {
    return {
      currentLevel: 1,
      score: 0,
      dropZones: ['', '', '', ''],
      selectedPiece: null,
      draggingIndex: null,
      dragOverIndex: null,
      showSuccessAnimation: false,
      confettiList: [],
      availablePieces: [],
      
      levels: [
        {
          word: "苹果",
          pinyin: "píng guǒ",
          answer: ["p", "íng", "g", "uǒ"],
          emoji: "🍎",
          pieces: ["p", "íng", "uǒ", "g", "b", "ā", "m", "ì"]
        },
        {
          word: "小猫",
          pinyin: "xiǎo māo",
          answer: ["x", "iǎo", "m", "āo"],
          emoji: "🐱",
          pieces: ["x", "iǎo", "āo", "m", "d", "ù", "l", "ǐ"]
        },
        {
          word: "太阳",
          pinyin: "tài yáng",
          answer: ["t", "ài", "y", "áng"],
          emoji: "☀️",
          pieces: ["t", "ài", "áng", "y", "h", "ē", "w", "ú"]
        },
        {
          word: "月亮",
          pinyin: "yuè liàng",
          answer: ["y", "uè", "l", "iàng"],
          emoji: "🌙",
          pieces: ["y", "uè", "iàng", "l", "s", "ǐ", "n", "ǚ"]
        },
        {
          word: "花朵",
          pinyin: "huā duǒ",
          answer: ["h", "uā", "d", "uǒ"],
          emoji: "🌸",
          pieces: ["h", "uā", "uǒ", "d", "k", "ě", "z", "ī"]
        }
      ]
    }
  },
  
  computed: {
    currentLevelData() {
      return this.levels[(this.currentLevel - 1) % this.levels.length];
    }
  },
  
  mounted() {
    this.initGame();
  },
  
  methods: {
    initGame() {
      this.loadLevel();
    },
    
    loadLevel() {
      this.dropZones = ['', '', '', ''];
      this.selectedPiece = null;
      this.generatePieces();
    },
    
    generatePieces() {
      // 打乱拼音块顺序
      const shuffledPieces = [...this.currentLevelData.pieces].sort(() => Math.random() - 0.5);
      this.availablePieces = shuffledPieces.map(piece => ({
        text: piece,
        used: false
      }));
    },
    
    isVowel(piece) {
      const vowels = ['ā', 'á', 'ǎ', 'à', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì', 
                     'ō', 'ó', 'ǒ', 'ò', 'ū', 'ú', 'ǔ', 'ù', 'ǚ', 'ǘ', 'ǜ', 'ǖ',
                     'āi', 'ái', 'ǎi', 'ài', 'ēi', 'éi', 'ěi', 'èi',
                     'āo', 'áo', 'ǎo', 'ào', 'ōu', 'óu', 'ǒu', 'òu',
                     'ān', 'án', 'ǎn', 'àn', 'ēn', 'én', 'ěn', 'èn',
                     'īn', 'ín', 'ǐn', 'ìn', 'ūn', 'ún', 'ǔn', 'ùn',
                     'āng', 'áng', 'ǎng', 'àng', 'ēng', 'éng', 'ěng', 'èng',
                     'īng', 'íng', 'ǐng', 'ìng', 'ōng', 'óng', 'ǒng', 'òng',
                     'uā', 'uá', 'uǎ', 'uà', 'uō', 'uó', 'uǒ', 'uò',
                     'uāi', 'uái', 'uǎi', 'uài', 'uēi', 'uéi', 'uěi', 'uèi',
                     'uān', 'uán', 'uǎn', 'uàn', 'uēn', 'uén', 'uěn', 'uèn',
                     'uāng', 'uáng', 'uǎng', 'uàng', 'uēng', 'uéng', 'uěng', 'uèng',
                     'iā', 'iá', 'iǎ', 'ià', 'iāo', 'iáo', 'iǎo', 'iào',
                     'iōu', 'ióu', 'iǒu', 'iòu', 'iān', 'ián', 'iǎn', 'iàn',
                     'iāng', 'iáng', 'iǎng', 'iàng', 'iōng', 'ióng', 'iǒng', 'iòng'];
      return vowels.some(vowel => piece.includes(vowel.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǚǘǜǖ]/g, match => match)) || 
                                piece.includes(vowel));
    },
    
    handleDragStart(e, index) {
      e.dataTransfer.setData('text/plain', this.availablePieces[index].text);
      this.draggingIndex = index;
    },
    
    handleDragOver(e, index) {
      e.preventDefault();
      this.dragOverIndex = index;
    },
    
    handleDrop(e, zoneIndex) {
      e.preventDefault();
      const piece = e.dataTransfer.getData('text/plain');
      
      if (this.dropZones[zoneIndex] === '') {
        this.dropZones.splice(zoneIndex, 1, piece);
        
        // 标记拼音块为已使用
        const pieceIndex = this.availablePieces.findIndex(p => p.text === piece && !p.used);
        if (pieceIndex !== -1) {
          this.availablePieces[pieceIndex].used = true;
        }
        
        this.playSound('place');
      }
      
      this.dragOverIndex = null;
    },
    
    handleDragEnd() {
      this.draggingIndex = null;
      this.dragOverIndex = null;
    },
    
    handlePieceClick(pieceText, index) {
      if (this.availablePieces[index].used) return;
      
      // 清除之前的选择
      this.selectedPiece = this.selectedPiece === pieceText ? null : pieceText;
    },
    
    handleDropZoneClick(zoneIndex) {
      if (this.selectedPiece && this.dropZones[zoneIndex] === '') {
        this.dropZones.splice(zoneIndex, 1, this.selectedPiece);
        
        // 标记拼音块为已使用
        const pieceIndex = this.availablePieces.findIndex(p => p.text === this.selectedPiece && !p.used);
        if (pieceIndex !== -1) {
          this.availablePieces[pieceIndex].used = true;
        }
        
        this.selectedPiece = null;
        this.playSound('place');
      }
    },
    
    checkAnswer() {
      const isCorrect = JSON.stringify(this.dropZones) === JSON.stringify(this.currentLevelData.answer);
      
      if (isCorrect) {
        this.score += 100;
        this.showSuccess();
        this.playSound('success');
        setTimeout(() => {
          this.nextLevel();
        }, 2000);
      } else {
        alert('再试试看！检查一下拼音是否正确哦 😊');
        this.playSound('error');
      }
    },
    
    nextLevel() {
      this.currentLevel++;
      if (this.currentLevel > this.levels.length) {
        alert(`恭喜你完成了所有关卡！\n总得分: ${this.score}分\n🎉🎉🎉`);
        this.currentLevel = 1;
        this.score = 0;
      }
      this.loadLevel();
    },
    
    resetGame() {
      this.currentLevel = 1;
      this.score = 0;
      this.loadLevel();
    },
    
    showSuccess() {
      this.showSuccessAnimation = true;
      setTimeout(() => {
        this.showSuccessAnimation = false;
      }, 1000);
      
      this.createConfetti();
    },
    
    createConfetti() {
      const colors = ['#4299e1', '#38a169', '#ed8936', '#9f40ba', '#f56565'];
      
      for (let i = 0; i < 50; i++) {
        const confetti = {
          id: Date.now() + i,
          style: {
            left: Math.random() * 100 + '%',
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: Math.random() * 3 + 's',
            animationDuration: (Math.random() * 3 + 2) + 's'
          }
        };
        this.confettiList.push(confetti);
        
        setTimeout(() => {
          const index = this.confettiList.findIndex(c => c.id === confetti.id);
          if (index !== -1) {
            this.confettiList.splice(index, 1);
          }
        }, 5000);
      }
    },
    
    playSound(type) {
      // 这里可以添加音效播放逻辑
      console.log(`Playing ${type} sound`);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.game-container {
  font-family: 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.game-container > div:first-child {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  max-width: 900px;
  width: 95%;
  position: relative;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  color: #4a5568;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.score {
  font-size: 20px;
  color: #38a169;
  font-weight: bold;
}

.game-area {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.target-area {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 3px dashed #e2e8f0;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.target-word {
  font-size: 24px;
  color: #2d3748;
  margin-bottom: 15px;
  font-weight: bold;
}

.target-image {
  width: 80px;
  height: 80px;
  background: #4299e1;
  border-radius: 50%;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
}

.drop-zones {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

.drop-zone {
  width: 80px;
  height: 80px;
  border: 3px dashed #a0aec0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  font-size: 28px;
  font-weight: bold;
  color: #2d3748;
  transition: all 0.3s ease;
  position: relative;
}

.drop-zone.drag-over {
  border-color: #4299e1;
  background: rgba(66, 153, 225, 0.1);
  transform: scale(1.05);
}

.drop-zone.filled {
  border-color: #38a169;
  background: rgba(56, 161, 105, 0.1);
}

.pieces-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background: rgba(237, 242, 247, 0.5);
  border-radius: 15px;
}

.piece {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  cursor: grab;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  user-select: none;
}

.piece:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

.piece:active {
  cursor: grabbing;
  transform: scale(0.95);
}

.piece.vowel {
  background: linear-gradient(135deg, #ed8936, #dd6b20);
}

.piece.dragging {
  opacity: 0.7;
  transform: rotate(5deg);
  z-index: 1000;
}

.piece.selected {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(240, 147, 251, 0.6);
}

.drop-zone.clickable {
  cursor: pointer;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn-primary {
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
}

.btn-secondary {
  background: linear-gradient(135deg, #38a169, #2f855a);
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.success-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: #38a169;
  font-weight: bold;
  opacity: 0;
  animation: successPop 1s ease-out;
}

@keyframes successPop {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
}

.celebration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #4299e1;
  animation: confetti-fall 3s linear infinite;
}

@keyframes confetti-fall {
  to {
    transform: translateY(100vh) rotate(360deg);
  }
}

@media (max-width: 768px) {
  .game-container > div:first-child {
    padding: 20px;
    margin: 10px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .piece {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }
  
  .drop-zone {
    width: 70px;
    height: 70px;
    font-size: 24px;
  }
}
</style>