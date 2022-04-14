'use strict'
/*
//홀짝별
let output = '';

for(let i=0; i<10; i++){
    if(i % 2 == 0){
        output += "*";
        console.log(output);
    }else if(i % 2 == 1){
        output += "/*";
        console.log(output);
    }
}
*/
//별찍기 세모(절반) / 다이아
let output = "";

for(let i=0; i<15; i++){
    for(let j=15; j>i; j--){
        output += " ";
    }
    for(let k=0; k < 2*i-1 ; k++){
        output += "*"
    }
    output += "\n";
}
for(let l=15; l>=0; l--){
    for(let m=15; m>l; m--){
        output += " ";
    }
    for(let n=0; n < 2*l-1; n++){
        output += "*";
    }
    output += "\n";
}
console.log(output);