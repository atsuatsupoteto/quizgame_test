const question = "ゲーム市場、最も売れたゲームは次のうちどれ？";
const answers = [
    'スーパーファミコン',
    'プレステ2',
    'Switch',
    'DS'
  ];

const correct = 'DS';
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex <buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


//ボタンをクリックしたら正誤判定

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
};

for(handlerIndex=0; handlerIndex<buttonLength; handlerIndex++){
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
  });
}
