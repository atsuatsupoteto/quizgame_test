const quiz = [
  {
    question:'ゲーム市場、最も売れたゲームは次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレステ2',
      'Switch',
      'DS'
    ],
    correct: 'DS'
  },{
    question:'日本の血液型で一番多いのは何型？',
    answers: [
      'A型',
      'B型',
      'O型',
      'AB型'
    ],
    correct: 'A型'
  },{
    question:'世界の血液型で一番多いのは何型？',
    answers: [
      'A型',
      'B型',
      'O型',
      'AB型'
    ],
    correct: 'O型'
  }
];

const quizLength= quiz.length;
let quizIndex = 0;
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex <buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題がまだある場合
    setupQuiz();
  }else{
    //問題が最後の場合
    window.alert('終了！')
  }

};

for(handlerIndex=0; handlerIndex<buttonLength; handlerIndex++){
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
  });
}
