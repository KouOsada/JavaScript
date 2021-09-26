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
let alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}