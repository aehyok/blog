<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">🧩 拼音拼装游戏</h1>
      <div class="score">得分: <span>{{ score }}</span> | 关卡: <span>{{ currentLevel }}</span></div>
    </div>

    <div class="game-area">
      <div class="target-area">
        <div class="target-word">拼出下面的拼音:</div>
        <div class="target-image">{{ currentLevelData.emoji }}</div>
        <div class="instruction-tip">提示：拖动拼音块到正确的位置</div>
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
          "word": "水果",
          "pinyin": "shuǐ guǒ",
          "answer": ["sh", "uǐ", "g", "uǒ"],
          "emoji": "🍓",
          "pieces": ["sh", "uǐ", "uǒ", "g", "t", "ián", "m", "ò"]
        },
        {
          "word": "朋友",
          "pinyin": "péng yǒu",
          "answer": ["p", "éng", "y", "ǒu"],
          "emoji": "👫",
          "pieces": ["p", "éng", "ǒu", "y", "l", "ǐ", "x", "īn"]
        },
        {
          "word": "学校",
          "pinyin": "xué xiào",
          "answer": ["x", "ué", "x", "iào"],
          "emoji": "🏫",
          "pieces": ["x", "ué", "iào", "x", "j", "īn", "q", "ì"]
        },
        {
          "word": "家庭",
          "pinyin": "jiā tíng",
          "answer": ["j", "iā", "t", "íng"],
          "emoji": "🏠",
          "pieces": ["j", "iā", "íng", "t", "w", "ài", "r", "én"]
        },
        {
          "word": "时间",
          "pinyin": "shí jiān",
          "answer": ["sh", "í", "j", "iān"],
          "emoji": "⏰",
          "pieces": ["sh", "í", "iān", "j", "k", "ōng", "l", "ì"]
        },
        {
          "word": "电话",
          "pinyin": "diàn huà",
          "answer": ["d", "iàn", "h", "uà"],
          "emoji": "📞",
          "pieces": ["d", "iàn", "uà", "h", "m", "ǎi", "s", "hū"]
        },
        {
          "word": "工作",
          "pinyin": "gōng zuò",
          "answer": ["g", "ōng", "z", "uò"],
          "emoji": "💼",
          "pieces": ["g", "ōng", "uò", "z", "x", "iū", "b", "ān"]
        },
        {
          "word": "医生",
          "pinyin": "yī shēng",
          "answer": ["y", "ī", "sh", "ēng"],
          "emoji": "👨‍⚕️",
          "pieces": ["y", "ī", "ēng", "sh", "c", "huáng", "n", "ǚ"]
        },
        {
          "word": "老师",
          "pinyin": "lǎo shī",
          "answer": ["l", "ǎo", "sh", "ī"],
          "emoji": "👩‍🏫",
          "pieces": ["l", "ǎo", "ī", "sh", "m", "ěi", "q", "īng"]
        },
        {
          "word": "学生",
          "pinyin": "xué shēng",
          "answer": ["x", "ué", "sh", "ēng"],
          "emoji": "🎓",
          "pieces": ["x", "ué", "ēng", "sh", "h", "ǎo", "t", "ài"]
        },
        {
          "word": "汽车",
          "pinyin": "qì chē",
          "answer": ["q", "ì", "ch", "ē"],
          "emoji": "🚗",
          "pieces": ["q", "ì", "ē", "ch", "f", "ēi", "m", "ǎ"]
        },
        {
          "word": "飞机",
          "pinyin": "fēi jī",
          "answer": ["f", "ēi", "j", "ī"],
          "emoji": "✈️",
          "pieces": ["f", "ēi", "ī", "j", "g", "āo", "k", "uài"]
        },
        {
          "word": "火车",
          "pinyin": "huǒ chē",
          "answer": ["h", "uǒ", "ch", "ē"],
          "emoji": "🚂",
          "pieces": ["h", "uǒ", "ē", "ch", "l", "ù", "m", "àn"]
        },
        {
          "word": "手机",
          "pinyin": "shǒu jī",
          "answer": ["sh", "ǒu", "j", "ī"],
          "emoji": "📱",
          "pieces": ["sh", "ǒu", "ī", "j", "d", "iàn", "n", "ǎo"]
        },
        {
          "word": "电脑",
          "pinyin": "diàn nǎo",
          "answer": ["d", "iàn", "n", "ǎo"],
          "emoji": "💻",
          "pieces": ["d", "iàn", "ǎo", "n", "y", "óu", "x", "ì"]
        },
        {
          "word": "书籍",
          "pinyin": "shū jí",
          "answer": ["sh", "ū", "j", "í"],
          "emoji": "📚",
          "pieces": ["sh", "ū", "í", "j", "w", "én", "z", "ì"]
        },
        {
          "word": "音乐",
          "pinyin": "yīn yuè",
          "answer": ["y", "īn", "y", "uè"],
          "emoji": "🎵",
          "pieces": ["y", "īn", "uè", "y", "g", "ē", "q", "ǔ"]
        },
        {
          "word": "电影",
          "pinyin": "diàn yǐng",
          "answer": ["d", "iàn", "y", "ǐng"],
          "emoji": "🎬",
          "pieces": ["d", "iàn", "ǐng", "y", "j", "ù", "ch", "ǎng"]
        },
        {
          "word": "运动",
          "pinyin": "yùn dòng",
          "answer": ["y", "ùn", "d", "òng"],
          "emoji": "⚽",
          "pieces": ["y", "ùn", "òng", "d", "p", "ǎo", "b", "ù"]
        },
        {
          "word": "游戏",
          "pinyin": "yóu xì",
          "answer": ["y", "óu", "x", "ì"],
          "emoji": "🎮",
          "pieces": ["y", "óu", "ì", "x", "w", "án", "l", "è"]
        },
        {
          "word": "美食",
          "pinyin": "měi shí",
          "answer": ["m", "ěi", "sh", "í"],
          "emoji": "🍽️",
          "pieces": ["m", "ěi", "í", "sh", "c", "ài", "f", "àn"]
        },
        {
          "word": "咖啡",
          "pinyin": "kā fēi",
          "answer": ["k", "ā", "f", "ēi"],
          "emoji": "☕",
          "pieces": ["k", "ā", "ēi", "f", "ch", "á", "n", "ǎi"]
        },
        {
          "word": "茶叶",
          "pinyin": "chá yè",
          "answer": ["ch", "á", "y", "è"],
          "emoji": "🍵",
          "pieces": ["ch", "á", "è", "y", "s", "huǐ", "b", "ēi"]
        },
        {
          "word": "衣服",
          "pinyin": "yī fú",
          "answer": ["y", "ī", "f", "ú"],
          "emoji": "👕",
          "pieces": ["y", "ī", "ú", "f", "k", "ù", "z", "i"]
        },
        {
          "word": "鞋子",
          "pinyin": "xié zi",
          "answer": ["x", "ié", "z", "i"],
          "emoji": "👟",
          "pieces": ["x", "ié", "i", "z", "w", "à", "t", "ào"]
        },
        {
          "word": "帽子",
          "pinyin": "mào zi",
          "answer": ["m", "ào", "z", "i"],
          "emoji": "🎩",
          "pieces": ["m", "ào", "i", "z", "t", "óu", "d", "ài"]
        },
        {
          "word": "眼镜",
          "pinyin": "yǎn jìng",
          "answer": ["y", "ǎn", "j", "ìng"],
          "emoji": "👓",
          "pieces": ["y", "ǎn", "ìng", "j", "k", "àn", "q", "īng"]
        },
        {
          "word": "头发",
          "pinyin": "tóu fà",
          "answer": ["t", "óu", "f", "à"],
          "emoji": "💇",
          "pieces": ["t", "óu", "à", "f", "l", "iǎn", "m", "ěi"]
        },
        {
          "word": "身体",
          "pinyin": "shēn tǐ",
          "answer": ["sh", "ēn", "t", "ǐ"],
          "emoji": "🧘",
          "pieces": ["sh", "ēn", "ǐ", "t", "j", "iàn", "k", "āng"]
        },
        {
          "word": "健康",
          "pinyin": "jiàn kāng",
          "answer": ["j", "iàn", "k", "āng"],
          "emoji": "💪",
          "pieces": ["j", "iàn", "āng", "k", "b", "ìng", "y", "ào"]
        },
        {
          "word": "快乐",
          "pinyin": "kuài lè",
          "answer": ["k", "uài", "l", "è"],
          "emoji": "😊",
          "pieces": ["k", "uài", "è", "l", "x", "ìng", "f", "ú"]
        },
        {
          "word": "幸福",
          "pinyin": "xìng fú",
          "answer": ["x", "ìng", "f", "ú"],
          "emoji": "🍀",
          "pieces": ["x", "ìng", "ú", "f", "ài", "q", "íng", "r"]
        },
        {
          "word": "爱情",
          "pinyin": "ài qíng",
          "answer": ["ài", "", "q", "íng"],
          "emoji": "❤️",
          "pieces": ["ài", "", "íng", "q", "h", "ūn", "y", "īn"]
        },
        {
          "word": "婚姻",
          "pinyin": "hūn yīn",
          "answer": ["h", "ūn", "y", "īn"],
          "emoji": "💒",
          "pieces": ["h", "ūn", "īn", "y", "j", "iā", "t", "íng"]
        },
        {
          "word": "孩子",
          "pinyin": "hái zi",
          "answer": ["h", "ái", "z", "i"],
          "emoji": "👶",
          "pieces": ["h", "ái", "i", "z", "x", "iǎo", "b", "ǎo"]
        },
        {
          "word": "父母",
          "pinyin": "fù mǔ",
          "answer": ["f", "ù", "m", "ǔ"],
          "emoji": "👨‍👩‍👧‍👦",
          "pieces": ["f", "ù", "ǔ", "m", "z", "ǔ", "x", "iān"]
        },
        {
          "word": "祖先",
          "pinyin": "zǔ xiān",
          "answer": ["z", "ǔ", "x", "iān"],
          "emoji": "👴",
          "pieces": ["z", "ǔ", "iān", "x", "h", "òu", "d", "ài"]
        },
        {
          "word": "后代",
          "pinyin": "hòu dài",
          "answer": ["h", "òu", "d", "ài"],
          "emoji": "👨‍👩‍👧",
          "pieces": ["h", "òu", "ài", "d", "z", "ǐ", "s", "ūn"]
        },
        {
          "word": "子孙",
          "pinyin": "zǐ sūn",
          "answer": ["z", "ǐ", "s", "ūn"],
          "emoji": "👪",
          "pieces": ["z", "ǐ", "ūn", "s", "sh", "ì", "j", "iè"]
        },
        {
          "word": "世界",
          "pinyin": "shì jiè",
          "answer": ["sh", "ì", "j", "iè"],
          "emoji": "🌍",
          "pieces": ["sh", "ì", "iè", "j", "d", "ì", "q", "iú"]
        },
        {
          "word": "地球",
          "pinyin": "dì qiú",
          "answer": ["d", "ì", "q", "iú"],
          "emoji": "🌎",
          "pieces": ["d", "ì", "iú", "q", "t", "iān", "k", "ōng"]
        },
        {
          "word": "天空",
          "pinyin": "tiān kōng",
          "answer": ["t", "iān", "k", "ōng"],
          "emoji": "☁️",
          "pieces": ["t", "iān", "ōng", "k", "b", "ái", "y", "ún"]
        },
        {
          "word": "白云",
          "pinyin": "bái yún",
          "answer": ["b", "ái", "y", "ún"],
          "emoji": "☁️",
          "pieces": ["b", "ái", "ún", "y", "f", "ēng", "y", "ǔ"]
        },
        {
          "word": "风雨",
          "pinyin": "fēng yǔ",
          "answer": ["f", "ēng", "y", "ǔ"],
          "emoji": "🌧️",
          "pieces": ["f", "ēng", "ǔ", "y", "x", "uě", "h", "uā"]
        },
        {
          "word": "雪花",
          "pinyin": "xuě huā",
          "answer": ["x", "uě", "h", "uā"],
          "emoji": "❄️",
          "pieces": ["x", "uě", "uā", "h", "b", "īng", "l", "ěng"]
        },
        {
          "word": "冰冷",
          "pinyin": "bīng lěng",
          "answer": ["b", "īng", "l", "ěng"],
          "emoji": "🧊",
          "pieces": ["b", "īng", "ěng", "l", "w", "ēn", "n", "uǎn"]
        },
        {
          "word": "温暖",
          "pinyin": "wēn nuǎn",
          "answer": ["w", "ēn", "n", "uǎn"],
          "emoji": "🔥",
          "pieces": ["w", "ēn", "uǎn", "n", "r", "è", "l", "iàng"]
        },
        {
          "word": "热量",
          "pinyin": "rè liàng",
          "answer": ["r", "è", "l", "iàng"],
          "emoji": "🌡️",
          "pieces": ["r", "è", "iàng", "l", "g", "uāng", "m", "íng"]
        },
        {
          "word": "光明",
          "pinyin": "guāng míng",
          "answer": ["g", "uāng", "m", "íng"],
          "emoji": "💡",
          "pieces": ["g", "uāng", "íng", "m", "h", "ēi", "àn", ""]
        },
        {
          "word": "黑暗",
          "pinyin": "hēi àn",
          "answer": ["h", "ēi", "àn", ""],
          "emoji": "🌚",
          "pieces": ["h", "ēi", "àn", "", "y", "è", "w", "ǎn"]
        },
        {
          "word": "夜晚",
          "pinyin": "yè wǎn",
          "answer": ["y", "è", "w", "ǎn"],
          "emoji": "🌃",
          "pieces": ["y", "è", "ǎn", "w", "z", "ǎo", "ch", "én"]
        },
        {
          "word": "早晨",
          "pinyin": "zǎo chén",
          "answer": ["z", "ǎo", "ch", "én"],
          "emoji": "🌅",
          "pieces": ["z", "ǎo", "én", "ch", "zh", "ōng", "w", "ǔ"]
        },
        {
          "word": "中午",
          "pinyin": "zhōng wǔ",
          "answer": ["zh", "ōng", "w", "ǔ"],
          "emoji": "☀️",
          "pieces": ["zh", "ōng", "ǔ", "w", "x", "ià", "t", "iān"]
        },
        {
          "word": "夏天",
          "pinyin": "xià tiān",
          "answer": ["x", "ià", "t", "iān"],
          "emoji": "🌞",
          "pieces": ["x", "ià", "iān", "t", "d", "ōng", "j", "ì"]
        },
        {
          "word": "冬季",
          "pinyin": "dōng jì",
          "answer": ["d", "ōng", "j", "ì"],
          "emoji": "⛄",
          "pieces": ["d", "ōng", "ì", "j", "ch", "ūn", "q", "iū"]
        },
        {
          "word": "春秋",
          "pinyin": "chūn qiū",
          "answer": ["ch", "ūn", "q", "iū"],
          "emoji": "🍂",
          "pieces": ["ch", "ūn", "iū", "q", "n", "ián", "l", "íng"]
        },
        {
          "word": "年龄",
          "pinyin": "nián líng",
          "answer": ["n", "ián", "l", "íng"],
          "emoji": "🎂",
          "pieces": ["n", "ián", "íng", "l", "sh", "ēng", "r", "ì"]
        },
        {
          "word": "生日",
          "pinyin": "shēng rì",
          "answer": ["sh", "ēng", "r", "ì"],
          "emoji": "🎉",
          "pieces": ["sh", "ēng", "ì", "r", "j", "ié", "q", "ìng"]
        },
        {
          "word": "节庆",
          "pinyin": "jié qìng",
          "answer": ["j", "ié", "q", "ìng"],
          "emoji": "🎊",
          "pieces": ["j", "ié", "ìng", "q", "k", "uài", "h", "uó"]
        },
        {
          "word": "快活",
          "pinyin": "kuài huó",
          "answer": ["k", "uài", "h", "uó"],
          "emoji": "😄",
          "pieces": ["k", "uài", "uó", "h", "g", "āo", "x", "ìng"]
        },
        {
          "word": "高兴",
          "pinyin": "gāo xìng",
          "answer": ["g", "āo", "x", "ìng"],
          "emoji": "😃",
          "pieces": ["g", "āo", "ìng", "x", "n", "án", "g", "uò"]
        },
        {
          "word": "难过",
          "pinyin": "nán guò",
          "answer": ["n", "án", "g", "uò"],
          "emoji": "😢",
          "pieces": ["n", "án", "uò", "g", "t", "òng", "k", "ǔ"]
        },
        {
          "word": "痛苦",
          "pinyin": "tòng kǔ",
          "answer": ["t", "òng", "k", "ǔ"],
          "emoji": "😖",
          "pieces": ["t", "òng", "ǔ", "k", "y", "ōu", "ch", "óu"]
        },
        {
          "word": "忧愁",
          "pinyin": "yōu chóu",
          "answer": ["y", "ōu", "ch", "óu"],
          "emoji": "😔",
          "pieces": ["y", "ōu", "óu", "ch", "d", "ān", "x", "īn"]
        },
        {
          "word": "担心",
          "pinyin": "dān xīn",
          "answer": ["d", "ān", "x", "īn"],
          "emoji": "😟",
          "pieces": ["d", "ān", "īn", "x", "f", "àng", "x", "īn"]
        },
        {
          "word": "放心",
          "pinyin": "fàng xīn",
          "answer": ["f", "àng", "x", "īn"],
          "emoji": "😌",
          "pieces": ["f", "àng", "īn", "x", "ān", "q", "uán", ""]
        },
        {
          "word": "安全",
          "pinyin": "ān quán",
          "answer": ["ān", "", "q", "uán"],
          "emoji": "🛡️",
          "pieces": ["ān", "", "uán", "q", "w", "ēi", "x", "iǎn"]
        },
        {
          "word": "危险",
          "pinyin": "wēi xiǎn",
          "answer": ["w", "ēi", "x", "iǎn"],
          "emoji": "⚠️",
          "pieces": ["w", "ēi", "iǎn", "x", "b", "ǎo", "h", "ù"]
        },
        {
          "word": "保护",
          "pinyin": "bǎo hù",
          "answer": ["b", "ǎo", "h", "ù"],
          "emoji": "🛡️",
          "pieces": ["b", "ǎo", "ù", "h", "zh", "ào", "g", "ù"]
        },
        {
          "word": "照顾",
          "pinyin": "zhào gù",
          "answer": ["zh", "ào", "g", "ù"],
          "emoji": "🤗",
          "pieces": ["zh", "ào", "ù", "g", "g", "uān", "x", "īn"]
        },
        {
          "word": "关心",
          "pinyin": "guān xīn",
          "answer": ["g", "uān", "x", "īn"],
          "emoji": "💝",
          "pieces": ["g", "uān", "īn", "x", "t", "ǐ", "t", "iē"]
        },
        {
          "word": "体贴",
          "pinyin": "tǐ tiē",
          "answer": ["t", "ǐ", "t", "iē"],
          "emoji": "🥰",
          "pieces": ["t", "ǐ", "iē", "t", "w", "ēn", "r", "óu"]
        },
        {
          "word": "温柔",
          "pinyin": "wēn róu",
          "answer": ["w", "ēn", "r", "óu"],
          "emoji": "🌸",
          "pieces": ["w", "ēn", "óu", "r", "q", "iáng", "y", "ìng"]
        },
        {
          "word": "强硬",
          "pinyin": "qiáng yìng",
          "answer": ["q", "iáng", "y", "ìng"],
          "emoji": "💪",
          "pieces": ["q", "iáng", "ìng", "y", "r", "uò", "x", "iǎo"]
        },
        {
          "word": "弱小",
          "pinyin": "ruò xiǎo",
          "answer": ["r", "uò", "x", "iǎo"],
          "emoji": "🐣",
          "pieces": ["r", "uò", "iǎo", "x", "d", "à", "q", "iáng"]
        },
        {
          "word": "大强",
          "pinyin": "dà qiáng",
          "answer": ["d", "à", "q", "iáng"],
          "emoji": "🦁",
          "pieces": ["d", "à", "iáng", "q", "x", "iǎo", "r", "uò"]
        },
        {
          "word": "成功",
          "pinyin": "chéng gōng",
          "answer": ["ch", "éng", "g", "ōng"],
          "emoji": "🏆",
          "pieces": ["ch", "éng", "ōng", "g", "sh", "ī", "b", "ài"]
        },
        {
          "word": "失败",
          "pinyin": "shī bài",
          "answer": ["sh", "ī", "b", "ài"],
          "emoji": "❌",
          "pieces": ["sh", "ī", "ài", "b", "n", "ǔ", "l", "ì"]
        },
        {
          "word": "努力",
          "pinyin": "nǔ lì",
          "answer": ["n", "ǔ", "l", "ì"],
          "emoji": "💪",
          "pieces": ["n", "ǔ", "ì", "l", "j", "iān", "ch", "í"]
        },
        {
          "word": "坚持",
          "pinyin": "jiān chí",
          "answer": ["j", "iān", "ch", "í"],
          "emoji": "⚡",
          "pieces": ["j", "iān", "í", "ch", "f", "àng", "q", "ì"]
        },
        {
          "word": "放弃",
          "pinyin": "fàng qì",
          "answer": ["f", "àng", "q", "ì"],
          "emoji": "🏳️",
          "pieces": ["f", "àng", "ì", "q", "x", "īn", "w", "àng"]
        },
        {
          "word": "希望",
          "pinyin": "xī wàng",
          "answer": ["x", "ī", "w", "àng"],
          "emoji": "🌟",
          "pieces": ["x", "ī", "àng", "w", "m", "èng", "x", "iǎng"]
        },
        {
          "word": "梦想",
          "pinyin": "mèng xiǎng",
          "answer": ["m", "èng", "x", "iǎng"],
          "emoji": "💭",
          "pieces": ["m", "èng", "iǎng", "x", "l", "ǐ", "x", "iǎng"]
        },
        {
          "word": "理想",
          "pinyin": "lǐ xiǎng",
          "answer": ["l", "ǐ", "x", "iǎng"],
          "emoji": "🎯",
          "pieces": ["l", "ǐ", "iǎng", "x", "m", "ù", "b", "iāo"]
        },
        {
          "word": "目标",
          "pinyin": "mù biāo",
          "answer": ["m", "ù", "b", "iāo"],
          "emoji": "🎯",
          "pieces": ["m", "ù", "iāo", "b", "j", "ì", "h", "uà"]
        },
        {
          "word": "计划",
          "pinyin": "jì huà",
          "answer": ["j", "ì", "h", "uà"],
          "emoji": "📋",
          "pieces": ["j", "ì", "uà", "h", "zh", "ǔn", "b", "èi"]
        },
        {
          "word": "准备",
          "pinyin": "zhǔn bèi",
          "answer": ["zh", "ǔn", "b", "èi"],
          "emoji": "📦",
          "pieces": ["zh", "ǔn", "èi", "b", "k", "āi", "sh", "ǐ"]
        },
        {
          "word": "开始",
          "pinyin": "kāi shǐ",
          "answer": ["k", "āi", "sh", "ǐ"],
          "emoji": "🚀",
          "pieces": ["k", "āi", "ǐ", "sh", "j", "iē", "sh", "ù"]
        },
        {
          "word": "结束",
          "pinyin": "jié shù",
          "answer": ["j", "ié", "sh", "ù"],
          "emoji": "🏁",
          "pieces": ["j", "ié", "ù", "sh", "w", "án", "ch", "éng"]
        },
        {
          "word": "完成",
          "pinyin": "wán chéng",
          "answer": ["w", "án", "ch", "éng"],
          "emoji": "✅",
          "pieces": ["w", "án", "éng", "ch", "j", "ìn", "b", "ù"]
        },
        {
          "word": "进步",
          "pinyin": "jìn bù",
          "answer": ["j", "ìn", "b", "ù"],
          "emoji": "📈",
          "pieces": ["j", "ìn", "ù", "b", "t", "uì", "h", "òu"]
        },
        {
          "word": "退后",
          "pinyin": "tuì hòu",
          "answer": ["t", "uì", "h", "òu"],
          "emoji": "⬅️",
          "pieces": ["t", "uì", "òu", "h", "q", "ián", "j", "ìn"]
        },
        {
          "word": "前进",
          "pinyin": "qián jìn",
          "answer": ["q", "ián", "j", "ìn"],
          "emoji": "➡️",
          "pieces": ["q", "ián", "ìn", "j", "f", "ǎn", "h", "uí"]
        },
        {
          "word": "返回",
          "pinyin": "fǎn huí",
          "answer": ["f", "ǎn", "h", "uí"],
          "emoji": "🔄",
          "pieces": ["f", "ǎn", "uí", "h", "l", "í", "k", "āi"]
        },
        {
          "word": "离开",
          "pinyin": "lí kāi",
          "answer": ["l", "í", "k", "āi"],
          "emoji": "🚪",
          "pieces": ["l", "í", "āi", "k", "d", "ào", "d", "á"]
        },
        {
          "word": "到达",
          "pinyin": "dào dá",
          "answer": ["d", "ào", "d", "á"],
          "emoji": "🎯",
          "pieces": ["d", "ào", "á", "d", "ch", "ū", "f", "ā"]
        },
        {
          "word": "出发",
          "pinyin": "chū fā",
          "answer": ["ch", "ū", "f", "ā"],
          "emoji": "🏃",
          "pieces": ["ch", "ū", "ā", "f", "l", "ù", "t", "ú"]
        },
        {
          "word": "路途",
          "pinyin": "lù tú",
          "answer": ["l", "ù", "t", "ú"],
          "emoji": "🛤️",
          "pieces": ["l", "ù", "ú", "t", "f", "āng", "x", "iàng"]
        },
        {
          "word": "方向",
          "pinyin": "fāng xiàng",
          "answer": ["f", "āng", "x", "iàng"],
          "emoji": "🧭",
          "pieces": ["f", "āng", "iàng", "x", "z", "uǒ", "y", "òu"]
        },
        {
          "word": "左右",
          "pinyin": "zuǒ yòu",
          "answer": ["z", "uǒ", "y", "òu"],
          "emoji": "↔️",
          "pieces": ["z", "uǒ", "òu", "y", "sh", "àng", "x", "ià"]
        },
        {
          "word": "上下",
          "pinyin": "shàng xià",
          "answer": ["sh", "àng", "x", "ià"],
          "emoji": "↕️",
          "pieces": ["sh", "àng", "ià", "x", "d", "ōng", "x", "ī"]
        },
        {
          "word": "东西",
          "pinyin": "dōng xī",
          "answer": ["d", "ōng", "x", "ī"],
          "emoji": "🧳",
          "pieces": ["d", "ōng", "ī", "x", "n", "án", "b", "ěi"]
        },
        {
          "word": "南北",
          "pinyin": "nán běi",
          "answer": ["n", "án", "b", "ěi"],
          "emoji": "🧭",
          "pieces": ["n", "án", "ěi", "b", "zh", "ōng", "y", "āng"]
        },
        {
          "word": "中央",
          "pinyin": "zhōng yāng",
          "answer": ["zh", "ōng", "y", "āng"],
          "emoji": "🎯",
          "pieces": ["zh", "ōng", "āng", "y", "b", "iān", "y", "uán"]
        },
        {
          "word": "边缘",
          "pinyin": "biān yuán",
          "answer": ["b", "iān", "y", "uán"],
          "emoji": "🔲",
          "pieces": ["b", "iān", "uán", "y", "j", "ìn", "r", "ù"]
        },
        {
          "word": "进入",
          "pinyin": "jìn rù",
          "answer": ["j", "ìn", "r", "ù"],
          "emoji": "🚪",
          "pieces": ["j", "ìn", "ù", "r", "ch", "ū", "q", "ù"]
        },
        {
          "word": "出去",
          "pinyin": "chū qù",
          "answer": ["ch", "ū", "q", "ù"],
          "emoji": "🚪",
          "pieces": ["ch", "ū", "ù", "q", "j", "ìn", "l", "ái"]
        },
        {
          "word": "进来",
          "pinyin": "jìn lái",
          "answer": ["j", "ìn", "l", "ái"],
          "emoji": "👋",
          "pieces": ["j", "ìn", "ái", "l", "h", "uí", "q", "ù"]
        },
        {
          "word": "回去",
          "pinyin": "huí qù",
          "answer": ["h", "uí", "q", "ù"],
          "emoji": "🏠",
          "pieces": ["h", "uí", "ù", "q", "l", "ái", "d", "ào"]
        },
        {
          "word": "来到",
          "pinyin": "lái dào",
          "answer": ["l", "ái", "d", "ào"],
          "emoji": "👋",
          "pieces": ["l", "ái", "ào", "d", "z", "ǒu", "l", "ù"]
        },
        {
          "word": "走路",
          "pinyin": "zǒu lù",
          "answer": ["z", "ǒu", "l", "ù"],
          "emoji": "🚶",
          "pieces": ["z", "ǒu", "ù", "l", "p", "ǎo", "b", "ù"]
        },
        {
          "word": "跑步",
          "pinyin": "pǎo bù",
          "answer": ["p", "ǎo", "b", "ù"],
          "emoji": "🏃",
          "pieces": ["p", "ǎo", "ù", "b", "t", "iào", "w", "ǔ"]
        },
        {
          "word": "跳舞",
          "pinyin": "tiào wǔ",
          "answer": ["t", "iào", "w", "ǔ"],
          "emoji": "💃",
          "pieces": ["t", "iào", "ǔ", "w", "ch", "àng", "g", "ē"]
        },
        {
          "word": "唱歌",
          "pinyin": "chàng gē",
          "answer": ["ch", "àng", "g", "ē"],
          "emoji": "🎤",
          "pieces": ["ch", "àng", "ē", "g", "h", "uà", "h", "uà"]
        },
        {
          "word": "画画",
          "pinyin": "huà huà",
          "answer": ["h", "uà", "h", "uà"],
          "emoji": "🎨",
          "pieces": ["h", "uà", "uà", "h", "x", "iě", "z", "ì"]
        },
        {
          "word": "写字",
          "pinyin": "xiě zì",
          "answer": ["x", "iě", "z", "ì"],
          "emoji": "✍️",
          "pieces": ["x", "iě", "ì", "z", "d", "ú", "sh", "ū"]
        },
        {
          "word": "读书",
          "pinyin": "dú shū",
          "answer": ["d", "ú", "sh", "ū"],
          "emoji": "📖",
          "pieces": ["d", "ú", "ū", "sh", "x", "ué", "x", "í"]
        },
        {
          "word": "学习",
          "pinyin": "xué xí",
          "answer": ["x", "ué", "x", "í"],
          "emoji": "📚",
          "pieces": ["x", "ué", "í", "x", "j", "iāo", "y", "ù"]
        },
        {
          "word": "教育",
          "pinyin": "jiāo yù",
          "answer": ["j", "iāo", "y", "ù"],
          "emoji": "🎓",
          "pieces": ["j", "iāo", "ù", "y", "zh", "ī", "sh", "í"]
        },
        {
          "word": "知识",
          "pinyin": "zhī shí",
          "answer": ["zh", "ī", "sh", "í"],
          "emoji": "🧠",
          "pieces": ["zh", "ī", "í", "sh", "j", "ì", "y", "ì"]
        },
        {
          "word": "记忆",
          "pinyin": "jì yì",
          "answer": ["j", "ì", "y", "ì"],
          "emoji": "🧠",
          "pieces": ["j", "ì", "ì", "y", "w", "àng", "j", "ì"]
        },
        {
          "word": "忘记",
          "pinyin": "wàng jì",
          "answer": ["w", "àng", "j", "ì"],
          "emoji": "🤔",
          "pieces": ["w", "àng", "ì", "j", "s", "ī", "k", "ǎo"]
        },
        {
          "word": "思考",
          "pinyin": "sī kǎo",
          "answer": ["s", "ī", "k", "ǎo"],
          "emoji": "💭",
          "pieces": ["s", "ī", "ǎo", "k", "l", "ǐ", "j", "iě"]
        },
        {
          "word": "理解",
          "pinyin": "lǐ jiě",
          "answer": ["l", "ǐ", "j", "iě"],
          "emoji": "💡",
          "pieces": ["l", "ǐ", "iě", "j", "m", "íng", "b", "ái"]
        },
        {
          "word": "明白",
          "pinyin": "míng bái",
          "answer": ["m", "íng", "b", "ái"],
          "emoji": "💡",
          "pieces": ["m", "íng", "ái", "b", "h", "ú", "t", "ú"]
        },
        {
          "word": "糊涂",
          "pinyin": "hú tú",
          "answer": ["h", "ú", "t", "ú"],
          "emoji": "😵",
          "pieces": ["h", "ú", "ú", "t", "q", "īng", "ch", "ǔ"]
        },
        {
          "word": "清楚",
          "pinyin": "qīng chǔ",
          "answer": ["q", "īng", "ch", "ǔ"],
          "emoji": "🔍",
          "pieces": ["q", "īng", "ǔ", "ch", "m", "ó", "h", "ú"]
        },
        {
          "word": "模糊",
          "pinyin": "mó hú",
          "answer": ["m", "ó", "h", "ú"],
          "emoji": "🌫️",
          "pieces": ["m", "ó", "ú", "h", "q", "īng", "x", "ī"]
        },
        {
          "word": "清晰",
          "pinyin": "qīng xī",
          "answer": ["q", "īng", "x", "ī"],
          "emoji": "🔎",
          "pieces": ["q", "īng", "ī", "x", "z", "ǐ", "x", "ì"]
        },
        {
          "word": "仔细",
          "pinyin": "zǐ xì",
          "answer": ["z", "ǐ", "x", "ì"],
          "emoji": "🔍",
          "pieces": ["z", "ǐ", "ì", "x", "c", "ū", "x", "īn"]
        },
        {
          "word": "粗心",
          "pinyin": "cū xīn",
          "answer": ["c", "ū", "x", "īn"],
          "emoji": "😅",
          "pieces": ["c", "ū", "īn", "x", "x", "iǎo", "x", "īn"]
        },
        {
          "word": "小心",
          "pinyin": "xiǎo xīn",
          "answer": ["x", "iǎo", "x", "īn"],
          "emoji": "⚠️",
          "pieces": ["x", "iǎo", "īn", "x", "d", "ǎn", "d", "à"]
        },
        {
          "word": "胆大",
          "pinyin": "dǎn dà",
          "answer": ["d", "ǎn", "d", "à"],
          "emoji": "😤",
          "pieces": ["d", "ǎn", "à", "d", "y", "ǒng", "g", "ǎn"]
        },
        {
          "word": "勇敢",
          "pinyin": "yǒng gǎn",
          "answer": ["y", "ǒng", "g", "ǎn"],
          "emoji": "🦁",
          "pieces": ["y", "ǒng", "ǎn", "g", "d", "ǎn", "q", "iè"]
        },
        {
          "word": "胆怯",
          "pinyin": "dǎn qiè",
          "answer": ["d", "ǎn", "q", "iè"],
          "emoji": "😰",
          "pieces": ["d", "ǎn", "iè", "q", "h", "ài", "p", "à"]
        },
        {
          "word": "害怕",
          "pinyin": "hài pà",
          "answer": ["h", "ài", "p", "à"],
          "emoji": "😨",
          "pieces": ["h", "ài", "à", "p", "k", "ǒng", "j", "ù"]
        },
        {
          "word": "恐惧",
          "pinyin": "kǒng jù",
          "answer": ["k", "ǒng", "j", "ù"],
          "emoji": "😱",
          "pieces": ["k", "ǒng", "ù", "j", "yī", "y", "uàn", ""]
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
    this.shuffleLevels();
    this.initGame();
  },
  
  methods: {
    shuffleLevels() {
      // 使用Fisher-Yates洗牌算法随机重排关卡顺序
      for (let i = this.levels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.levels[i], this.levels[j]] = [this.levels[j], this.levels[i]];
      }
    },
    
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
                     'ān', 'án', 'ǎn', 'àn', 'ēn', 'én', 'ěn', 'èn', 'īn', 'ín', 'ǐn', 'ìn', 'ūn', 'ún', 'ǔn', 'ùn',
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
      e.stopPropagation(); 
      document.body.style.overflow = 'hidden';
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
      document.body.style.overflow = '';
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
      this.shuffleLevels();
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
  max-width: 900px;
  width: 95%;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.game-area {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.instruction-tip {
  background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%);
  border-left: 4px solid #4fd1c7;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #234e52;
  text-align: center;
  box-shadow: 0 2px 8px rgba(79, 209, 199, 0.1);
}

.target-area {
  text-align: center;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 15px;
  padding: 20px;
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
  touch-action: manipulation;
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
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
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
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.7); }
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
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
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

/* 平板设备适配 */
@media (min-width: 769px) and (max-width: 1024px) {
  .game-container > div:first-child {
    padding: 25px;
  }
  
  .title {
    font-size: 28px;
  }
  
  .score {
    font-size: 18px;
  }
  
  .piece {
    width: 65px;
    height: 65px;
    font-size: 20px;
  }
  
  .drop-zone {
    width: 70px;
    height: 70px;
    font-size: 24px;
  }
}

/* 中等平板设备 */
@media (min-width: 481px) and (max-width: 768px) {
  .game-container {
    padding: 15px;
  }
  
  .game-container > div:first-child {
    padding: 25px;
  }
  
  .title {
    font-size: 26px;
  }
  
  .score {
    font-size: 18px;
  }
  
  .instruction-tip {
    font-size: 15px;
  }
  
  .target-word {
    font-size: 20px;
  }
  
  .target-image {
    width: 70px;
    height: 70px;
    font-size: 32px;
  }
  
  .drop-zones {
    gap: 15px;
  }
  
  .drop-zone {
    width: 70px;
    height: 70px;
    font-size: 24px;
  }
  
  .piece {
    width: 60px;
    height: 60px;
    font-size: 18px;
  }
  
  .controls {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .btn {
    min-width: 120px;
  }
}

/* 移动端优化 */
@media (max-width: 480px) {
  .game-container {
    padding: 5px;
  }
  
  .game-container > div:first-child {
    padding: 15px;
    border-radius: 10px;
  }
  
  .header {
    margin-bottom: 15px;
  }
  
  .title {
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  .score {
    font-size: 14px;
  }
  
  .game-area {
    gap: 15px;
  }
  
  .instruction-tip {
    font-size: 12px;
    padding: 8px 10px;
  }
  
  .target-area {
    padding: 12px;
    border-radius: 10px;
  }
  
  .target-word {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .target-image {
    width: 50px;
    height: 50px;
    font-size: 24px;
    margin-bottom: 8px;
  }
  
  .drop-zones {
    gap: 6px;
    margin-top: 10px;
  }
  
  .drop-zone {
    width: 50px;
    height: 50px;
    font-size: 16px;
    border-width: 2px;
  }
  
  .pieces-area {
    padding: 10px;
    gap: 6px;
  }
  
  .piece {
    width: 45px;
    height: 45px;
    font-size: 14px;
  }
  
  .controls {
    flex-direction: column;
    gap: 8px;
    margin-top: 15px;
    align-items: center;
  }
  
  .btn {
    padding: 10px 16px;
    font-size: 12px;
    width: 100%;
    max-width: 180px;
  }
  
  .success-animation {
    font-size: 28px;
  }
  
  .confetti {
    width: 6px;
    height: 6px;
  }
}

/* 超小屏幕设备 */
@media (max-width: 360px) {
  .title {
    font-size: 18px;
  }
  
  .drop-zone {
    width: 45px;
    height: 45px;
    font-size: 14px;
  }
  
  .piece {
    width: 40px;
    height: 40px;
    font-size: 12px;
  }
  
  .target-image {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
  
  .drop-zones {
    gap: 4px;
  }
  
  .pieces-area {
    gap: 4px;
  }
}

/* 横屏模式优化 */
@media (orientation: landscape) and (max-height: 600px) {
  .game-container {
    padding: 5px;
  }
  
  .game-area {
    gap: 10px;
  }
  
  .header {
    margin-bottom: 10px;
  }
  
  .target-area {
    padding: 10px;
  }
  
  .pieces-area {
    padding: 10px;
  }
  
  .controls {
    margin-top: 10px;
  }
}
</style>