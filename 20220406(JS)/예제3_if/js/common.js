'use strict'
/*
let inputText = confirm("로그인");
if(inputText){
    alert("로그인성공!");
}else{
    alert("로그인실패!");
}
//------------------------------------------------------------
var id = prompt("아이디를 입력해주세요");

if(id ==="koreait"){
    var password = prompt("비밀번호를 입력해주세요");
    if(password == "1q2w3e4r"){
        alert("로그인성공!");
    } else{
        alert("비밀번호가 일치하지 않습니다.");
    }
} else if(id !== "koreait"){
    alert("아이디가 일치하지 않습니다.");
} else{
    alert("잘못입력하셨습니다.");
}

console.log(id);
console.log(password);
//-----------------------------------------------------------------
var x, y;
x = Number(prompt());
y = Number(prompt());


alert("입력값이 입력되었습니다. x값은: "+ x +"이고, y값은 "+ y +"입니다.");

if(x == y){
    alert("x는 y와 같습니다.");
} else if(x > y){
    alert("x는 y보다 큽니다.");
} else{
    alert("x는 y보다 작습니다.");
}
console.log(x+y);*/
//-----------------------------------------------------------------
let fruitX = Number(prompt("사과"));
let fruitY = Number(prompt("배"));
let total = fruitX + fruitY;
let money = 10000;

alert("사과의 가격은: "+ fruitX +"원 이고, 배의 가격은 "+ fruitY +"입니다. 총 지불금액은: "+total+"입니다.");
if(money > total){
    let fruitbuy = prompt("무엇을 구매하세요?");
    if(fruitbuy == "사과"){
        alert("사과 구매완료! 현재금액은: "+(money-total)+ "입니다.");
    } else if(fruitbuy == "배"){
        alert("배 구매완료! 현재금액은: "+(money-total)+ "입니다.");
    }
    else if(fruitbuy == "모두"){
        alert("모두 구매완료! 현재금액은: " +(money-total)+ "입니다.");
    }
} else if(money < total){
    alert("돈 좀 빌려주세요");
} else{
    alert("당근이세요?");
}

