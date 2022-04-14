'use strict'
/*
let setTimeNum;
let num = Number(prompt("숫자를 입력해 주세요,", "숫자"));
let milsecond = Number(prompt("실행할 밀리초를 입력하세요"));

setTimeNum = setTimeout(function(){
    alert("setTimeOutStart");
}, milsecond);  //실행구문없이도 실행

if(num > 10){
    clearTimeout(setTimeNum); // 실행시키지 않도록 처리
    alert("setTimeout 정지");
}else{
    alert(`setTimeout 실행 ${milsecond}밀리초만 기다려 주세요`);
}
*/
//-----------------------------------------------------------------------

function timeText(){
    let x = document.getElementById("txt");
    setTimeout(function(){x.value = "2초"}, 2000);
    setTimeout(function(){x.value = "5초"}, 52000);
    setTimeout(function(){x.value = "7초"}, 7000);
    setTimeout(function(){x.value = "10초"}, 10000);
    setTimeout(function(){x.value = "12초"}, 12000);
};