var sentences = [
  ["私は", "コーヒーを", "飲む。"],
  ["彼は", "本を", "読む。"],
  ["猫は", "魚を", "食べる。"],
  ["彼女は", "音楽を", "聞く。"],
  ["子供は", "遊び場で", "遊ぶ。"],
  ["彼は", "車を", "運転する。"],
  ["私は", "ピアノを", "弾く。"],
  ["彼女は", "レポートを", "書く。"],
  ["犬は", "ボールを", "追いかける。"],
  ["友達は", "パーティーに", "参加する。"],
  ["彼は", "映画を", "見る。"],
  ["私は", "ケーキを", "焼く。"],
  ["彼女は", "花を ", "植える。"],
  ["彼は", "歌を", "歌う。"],
  ["私は", "散歩する。"]
];
var currentSentence = [];
var currentAnswer = [];
var correctCount = 0;
var totalCount = 0;

function newSentence() {
  var sentence = sentences[Math.floor(Math.random() * sentences.length)];
  currentSentence = sentence;
  var shuffledWords = [...sentence];

  var options = document.getElementById('options');
  options.innerHTML = '';
  shuffledWords.forEach((word, index) => {
    var button = document.createElement('button');
    button.textContent = word;
    button.classList = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 max-w-md text-center';
    button.onclick = function() {
      document.getElementById('answer').textContent += ' ' + word;
      currentAnswer.push(index);
      if (currentAnswer.length === 3) {
        checkAnswer();
      }
    };
    options.appendChild(button);
  });
  document.getElementById('answer').textContent = '';
}

function checkAnswer() {
  var correctAnswer = [0, 2, 1];
  totalCount++;
  if (JSON.stringify(currentAnswer) === JSON.stringify(correctAnswer)) {
    document.getElementById('feedback').textContent = '正解！';
    document.getElementById('feedback').classList = 'text-green-500';
    document.getElementById('result').textContent = '〇';
    document.getElementById('result').classList = 'text-green-500 text-9xl';
    correctCount++;
  } else {
    document.getElementById('feedback').textContent = '不正解...';
    document.getElementById('feedback').classList = 'text-red-500';
    document.getElementById('result').textContent = '×';
    document.getElementById('result').classList = 'text-red-500 text-9xl';
  }
  document.getElementById('correct').textContent = `正答数: ${correctCount}`;
  document.getElementById('incorrect').textContent = `誤答数: ${totalCount - correctCount}`;
  document.getElementById('rate').textContent = `正答率: ${(correctCount / totalCount * 100).toFixed(2)}%`;
  setTimeout(function() {
    document.getElementById('feedback').textContent = '';
    document.getElementById('result').textContent = '';
    currentAnswer = [];
    newSentence();
  }, 2000);
}

newSentence();
