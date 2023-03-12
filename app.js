const question = "ゲーム市場、最も売れたゲームは次のうちどれ？";
const answers = [
    'スーパーファミコン',
    'プレステ2',
    'Switch',
    'DS'
  ];
const correct = 'DS';

console.log(document.getElementById('js-question').textContent );
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');


let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex <buttonLength){
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

$button[0].addEventListener('click', ()=> {
  if(correct === $button[0].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});

$button[1].addEventListener('click', ()=> {
  if(correct === $button[1].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});

$button[2].addEventListener('click', ()=> {
  if(correct === $button[2].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});

$button[3].addEventListener('click', ()=> {
  if(correct === $button[3].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});