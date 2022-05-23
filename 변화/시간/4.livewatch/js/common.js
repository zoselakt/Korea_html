'use strict'

// (function(){}()); 변경연습
let t = null;
function startTime(){
    let today = new Date();
    let h= today.getHours(), m= today.getMinutes(), s= today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    function checkTime(i){
        if(i<10){
            i = "0" + i
        };
    return i;
    }

    if(h == 16 && m > 50){
        document.getElementById("txt").innerHTML = `${h}:${m}:${s} 쉬자`;
    }else if(h == 17 && m < 50){
        document.getElementById("txt").innerHTML = `${h}:${m}:${s} 가자`;
    }

    document.getElementById("txt").innerHTML = `${h}:${m}:${s}`;
    t = setTimeout(startTime, 1000);

}

startTime();