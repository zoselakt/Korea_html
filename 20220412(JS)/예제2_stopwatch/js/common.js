'use strict'

    let count = 0; //초
    let min = 0; // 분
    let t = null;
    let timerIsOn = 0; // setTimeout
    let domTable = document.getElementsByClassName("stop-watch-wrap")[0];

    // setTimeout실행함수
    function timeCount(){
        if(min > 0){
            document.getElementById("stop-watch").innerHTML = `${min}:${count}`;
        } else{
            document.getElementById("stop-watch").innerHTML = `${count}`;
        }
        count += 1;
        if(count == 60){
            min += 1;
            count = 1;
        }
        t = setTimeout(timeCount, 1000);
    }
    
    // timecount함수
    function startCount(){
        if(timerIsOn == 0){
            timerIsOn = 1;
            timeCount();
        }
    }
    
    // setTimeout정지함수
    function stopCount(){
        clearTimeout(t);
        console.log("타타타타타임워치가 정지됨.");
        timerIsOn = 0;
    }

    function resetCount(){
        document.getElementById("stop-watch").innerHTML = 0;
        clearTimeout(t);
    }