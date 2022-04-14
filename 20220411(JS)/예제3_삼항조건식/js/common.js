'use strict'
// let num = -1;
// if(num > 0 ? alert(num+"은 정수입니다.") : alert(num + "은 음수입니다.") ) {
// }

// 짝수 / 홀수 판별
let inputNum = Number(prompt());

if(inputNum % 2 ? 0 : 1){
    alert(`${inputNum}는 짝수입니다.`);
}else{
    alert(`${inputNum}는 홀수입니다.`);
}

