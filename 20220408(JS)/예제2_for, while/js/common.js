'use strict'
/*
let travel = ["제주도", "강원도", "거제도", "서울", "가평", "포항"];
let count = 0;
let once = 1;

while(count < travel.length){
        console.log(travel[count]);
        count++;
}

for (var i=count; i<travel.length; i++){
        console.log(travel[i]);
    }
    
travel.forEach(element => {
    for (var i=count; i<travel.length; i++){
             console.log(travel[i]);
         }
});


//다중배열
let array = [["가","나,","다"],"서울",["a", "b", "c", "d"]];
console.log(array[0][0]);
*/

// 리팩토링 적용
let shoppingItems = [["반바지", "슬랙스"],["점퍼","조끼"],
["슬립온","워커","스니커즈"],["크로스백", "백팩", "클러치백"]];
let gtLeng = shoppingItems.length;

for(let i=0; i<gtLeng; i++){
    if(i==0){
        outputItems(i, 0);
    }else if(i==2){
        outputItems(i, 2);
    }else if(i==3){
        outputItems(i, 1);
    }
}

function outputItems(currentArray, checkIndex){
    for (let j=0; j<shoppingItems[currentArray].length; j++){
        if(j == checkIndex){
            console.log(shoppingItems[currentArray][j]);
        }
    }
}