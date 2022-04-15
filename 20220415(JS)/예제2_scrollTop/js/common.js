'use strict'

let numY = 0;
let numX = 0;
let elem = document.querySelector("#mydiv");
let content = document.querySelector("#mydiv");
function scrollTopFunc(){
    numY -= 10;
    if(numY < 0){
        numY = 0;
    }
    elem.scrollTop = numY;
    // console.log(`scroll height: ${elem.scrollHeight}, offset height: ${elem.offsetHeight} `);
    // console.log(`scroll width: ${elem.scrollWidth}, offset height: ${elem.offsetwidth} `);
}

function scrollBottomFunc(){
    numY += 10
    if(numY < 0){
        numY = 0;
    }
    elem.scrollTop = numY;
}

function scrollLeftFunc(){
    numX -= 10;
    if(numX < 0){
        numX = 0;
    }
    elem.scrollLeft = numX
}

function scrollRightFunc(){
    numX += 10;
    if(numX < 0){
        numX = 0;
    }
    elem.scrollLeft = numX
}
