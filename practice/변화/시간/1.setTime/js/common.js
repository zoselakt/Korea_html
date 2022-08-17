'use strict'
let t = null;
let xMove = 0, yMove = 0, xDirection = 1, yDirection = 1;
let elem = document.getElementById("txt");

function startTime(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    t = setTimeout(startTime, 5);

    if(h == 12 && m > 49 || h == 13 && m <= 59){
        document.body.style.backgroundImage = "url(./img/background_01.gif)"
        document.body.style.backgroundColor = "#f1f1f1"
        document.getElementById("txt").innerHTML = `<img src="./img/zxc.gif"> <br> ${h}:${m}:${s} <p>점심시간 좋아요!</p>`;
    }else if(m >= 1 && m <= 49){
        document.body.style.backgroundImage = "url(./img/background_02.jpg)"
        document.body.style.backgroundColor = "#67c7b2"
        document.getElementById("txt").innerHTML = `<img src="./img/zxc.gif"> <br> ${h}:${m}:${s} <p>수업시간</p>`;
    }else{
        document.body.style.backgroundImage = "url(./img/dog.gif)"
        document.getElementById("txt").innerHTML = `<img src="./img/zxc.gif"> <br> ${h}:${m}:${s} <p>휴식시간 좋아요</p> `;
        document.body.style.backgroundColor = "#fff"
    }

    xMove += 1 * xDirection;
    yMove += 1 * yDirection;
    if(xMove > window.innerWidth -225|| xMove < 0){
        xDirection = xDirection * (-1);
    }
    if(yMove > window.innerHeight -351 || yMove < 0){
        yDirection = yDirection * (-1) ;
    }
    elem.style.left = `${xMove}px`;
    elem.style.top = `${yMove}px`;
}

function checkTime(i){
    if(i<10){
        i= "0" + i;
    }
    return i
}

let on = 0;
function startMove(){
    if(on == 0){
        on = 1;
        xDirection = 1, yDirection = 1;
        elem.style.left = `${xMove}px`;
        elem.style.top = `${yMove}px`;   
    }
}

function stopMove(){
    clearInterval(startTime);
    on = 0;
    xDirection = 0, yDirection = 0;
}

function returnMove(){
    clearInterval(startTime);
    xMove = 0, yMove = 0;
    xDirection = 0, yDirection = 0;
    elem.style.left = `${0}px`;
}

function degree(){
    xDirection++, yDirection++;
}
