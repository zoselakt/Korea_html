'use strict'

let num = "";
// let count = 0;

// function repeat(i, j){ //더하는 로직
//     if(count == 0){
//         num += i;
//     }else if(i > j){
//         return 0;
//     }else{
//         num += "," +i;
//     }
//     i++;
//     count++;
//     repeat(i, j);
// }
// repeat(50, 80);

// console.log(num);
//---------------------------------------------------------------------
let minus = 10;
function repeat(i, j){ //빼는 로직
    if(minus == 10){
        num -= i;
    }else if(i < j){
        return 0;
    }else{
        num += "," +i;
    }
    i--;
    minus--;
    repeat(i, j);
}

repeat(40, 10);

console.log(num);
