'use strict'
/*
//함수선언 (var오류)

var repeat = function () {
    alert("익명함수");
}
//repeat();

function repeat(){
    alert("함수선언");
}
repeat();

// var는 재선언, 재할당이 가능하기 때문에 다르게 만든 객체의 이름을 공유한다.
// 호이스팅으로 나중에 생성된 것은 아래쪽에 배치된다.
//-------------------------------------------------------------------
// 전역 / 지역 변수
let num = 30;

function testFunc(i, j){
    let sumCalc = i + j;
    return sumCalc + num;
}

console.log(testFunc(10, 20)); 
//-------------------------------------------------------------------
*/
//for 재고확인
let arrayFruits = ["사과", "배", "수박", "포도", "키위", "레몬"];
let inPutText = prompt("과일을 입력해주세요.")
let checkNum = 0;

for (let i = arrayFruits.length-1; i >= 0; i--) {
    if(inPutText == arrayFruits[i]){
        alert(`맛있는 ${arrayFruits[i]}`);
        let num = prompt("몇개사실거에요?")
        if(num >= 1){
            alert("다음에 또오세요.");
        }else{
            alert("감사합니다.")
        }
    }else if(i == 0){
        if(i == arrayFruits[i]){
            alert("ㅋ")
        }
    }
}