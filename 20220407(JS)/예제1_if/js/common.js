'use strict'
/*
let num = Number(prompt());
let number = 5;
let number1 = 3;

if(num <number){
    alert(`숫자 ${num}는 ${number}보다 작습니다.`);
    if(num % number1 ==0){
        alert(`숫자 ${num}는 ${number1}의 배수입니다.`); 
    }else if(num != number1){
        alert(`숫자 ${num}는 ${number1}과 같지않습니다.`);
    }
}else{
    alert("오류");
}
//---------------------------------------------------------------------

if (num < 5 && num % 3 === 0 || num != 3){
    alert(`숫자 ${num} 은 5보다 작습니다. 숫자 ${num}은 3의 배수 입니다. 입력한 값은 3과 같지 않습니다.`);
}else {
    alert("결과 오류입니다.");
}

//------------------------------------------------------------------
let score = Number(prompt("학점을 입력해 주세요."));

if(score === "abcdefghijklmnopqrstuvwxyz" || score == "!@#$%^&*()?;'./" || score == "일이삼사오육칠팔구십"){
    alert("영문자, 한글, 특수문자는 사용할수 없습니다. 숫자를 입력해주세요");
}else if(score >= 4.3 && score <= 4.5){
    alert("A+");
}else if(score >= 3.9 && score <= 4.2){
    alert("A0");
}else if(score >= 3.5 && score <= 3.8){
    alert("A-");
}else if(score >= 3.2 && score <= 3.4){
    alert("B+");
}else if(score >= 2.9 && score <= 3.1){
    alert("B0");
}else if(score >= 2.5 && score <= 2.8){
    alert("B-");
}else if(score >= 2.2 && score <= 2.4){
    alert("C+");
}else if(score >= 1.9 && score <= 2.1){
    alert("C0");
}else if(score >= 1.5 && score <= 1.8){
    alert("C-");
}else if(score >= 1.2 && score <= 1.4){
    alert("D+");
}else if(score >= 0.9 && score <= 1.1){
    alert("D0");
}else if(score >= 0.1 && score <= 0.8){
    alert("D-");
}else if(score == 0 && score == 0){
    alert("F");
    alert("재수강 신청하세요.");
}else{
    alert("입력된 숫자가 없습니다.")
} 

//코드업1173

let hour = Number(prompt());
let min = Number(prompt());
if(min-30 < 0){
    console.log((hour-1)+" "+(min+30));
}else{
    console.log("오류");
}

//코드업 1180
let tresh = Number(prompt("휴지통의 용량은?"));

if(tresh){
    alert((tresh / 10) * 2)
    alert("GOOD");
}else if(tresh > 100){
    alert(tresh - 100);
}

//코드업 1201
let int = Number(prompt("정수판별"));

if(int == 0){
    alert("0");
}else if(int % 2 == 1){
    alert("음수");
}else if(int % 2 == 0){
    alert("양수");
}

//코드업 1204
let int = Number(prompt("서수판별"));

if(int == 1){
    alert("1st");
}else if(int == 2){
    alert("2nd");
}else if(int == 3){
    alert("3rd");
}else {
    alert(int+"th");
}
*/
//코드업 1207
let int = prompt("윷놀이 게임", "0또는1로 구분 0 0 0 0으로 입력");

