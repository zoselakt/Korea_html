'use strict'

let korean = [85, 75, 88, 90, 95, 97, 77, 80, 100, 88];
let math = [85, 75, 88, 90, 95, 97, 77, 80, 90, 88];
let english = [85, 75, 88, 87, 90, 95, 77, 85, 100, 88];

function avgFunc(arrayNum){
    let total = 0;
    let scoreLeng = arrayNum.length; // 인덱스 갯수: 학생별점수
    let scoreAvg;

    for(let i=0; i<arrayNum.length; i++){
        total += arrayNum[i];
    }
    return scoreAvg = total / scoreLeng;
}

 console.log(avgFunc(korean));
 console.log(avgFunc(math));
 console.log(avgFunc(english));