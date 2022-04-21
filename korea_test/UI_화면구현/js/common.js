'use strict'
let t = null;
function startTime(){
    /*A blank 영역*/
    let today = new Date;

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    document.body.innerHTML = `${h}:${m}:${s}`;
    /*B blank 영역 */   
    
    h += time(h);
    m += time(m);
    s += time(s);
    
    /*C blank 영역 */
    
    if(h == 16 && m >= 20 || m < 30){
        document.getElementById("txt").innerHTML= `${h}:${m}:${s} 지금은 실습시간입니다`;
    }
    if(h == 17){
        if(h != 18 && m > 50){
            document.getElementById("txt").innerHTML = `${h}:${m}:${s} 오늘하루 수고 하셨습니다`;
        }
    }
    t = setTimeout(startTime, 1000);
}
startTime();
function time(i){
    if(i < 10){
        i = "0"+i;
    }
    return i;
}