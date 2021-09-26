// 四則演算
// alert(10 + 8)
// alert(9 - 10)
// alert(49 * 3)
// alert(67 / 8)
// 四則演算ここまで


// 条件分岐
// let orange = 120;
// let apple = 100;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }
// 条件分岐ここまで



// 繰り返し処理
// ①while文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num*2;
//   count = count+1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// ②do...whle文
// do{
//   最低1回は行われる処理
// }while(条件式);

// ③for文
// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です')
// 繰り返し処理ここまで

// 関数
// let alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// 複数の関数
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);
// じゃんけん
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand +'です。\n結果は' + judge + 'です。');
}else{
  alert('またチャレンジしてね！')
}


function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}