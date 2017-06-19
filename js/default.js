window.alert('こんにちは世界');
console.log('こんにちは世界');

document.getElementById('choice').textContent=new Date();
var result=window.confirm('準備OK?');
if(result){
  document.getElementById('choice').textContent='Okが押された';
  }else{
  document.getElementById('choice').textContent='キャンセルが押された';
}

var number=Math.floor(Math.random()*3);
var answer=parseInt(window.prompt('数当てゲーム  o~2の数字を入力してください'));

var message;

while(1){
if(answer===number){
    message='あたり';
    document.getElementById('choice').textContent=message;
    break;
  }else if(answer<number){
    message='残念もっと大きいです';
  }else if(number<answer){
    message='残念もっと小さいです';
  }else{
    message='0~3の数字を入力してください';
  }
  document.getElementById('choice').textContent=message;
}
  
