'use strict'

// movemove

let elem = document.getElementsByClassName("box")[0];
let elem1 = document.getElementsByClassName("box1")[0];
let xMove = 0, yMove = 0, xDirection = 1, yDirection = 1;
let moveIntervar = setInterval(move, 5);

function move(){
    xMove += 1 * xDirection;
    yMove += 1 * yDirection;
    if(xMove > window.innerWidth - 101 || xMove < 0){
        xDirection = xDirection * (-1);
    }
    if(yMove > window.innerHeight - 101 || yMove < 0){
        yDirection = yDirection * (-1) ;
    }
    elem.style.left = `${xMove}px`;
    elem.style.top = `${yMove}px`;
}