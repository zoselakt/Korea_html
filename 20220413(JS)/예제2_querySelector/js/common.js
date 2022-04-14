'use sttict'

// function textColorChange(){
//     document.querySelector("p").style.color = "blue";
//     let txtNum = document.querySelectorAll("p");
//     let txtNumLeng = txtNum.txtNum.length
//     txtNum.style.color = "red";
// }

let num = 0;
function textMove(){
    num += 10;
    let txtNum = document.querySelector("li.txt")
    txtNum.style.backgroundColor = "red";
    txtNum.style.position = "absolute";
    txtNum.style.left = `${num} px`
}
