'use strict'
let pos = 0;
let id = null;
let elem = document.getElementsByClassName("box")[0];
let on = 0;

function startMove(){
    if(on == 0){
        on = 1;
        id = setInterval(moveFunc, 20);
        function moveFunc(){
            pos ++;
            elem.style.left = `${pos}px`;
        }
    }
}

function stopMove(){
    clearInterval(id);
    on = 0;
}

function returnMove(){
    clearInterval(id);
    on = 0;
    pos = 0;
    elem.style.left = `${0}px`;
}