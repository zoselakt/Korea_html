'use strict'

function textFunc(){
    let leng  = document.querySelector("#text").classList;
    // contains 메소드는 classList에 해당클래스가 포함되어있는지 확인하여 불타입으로 반환한다.
    let bulNum = document.querySelector("#text").classList.contains("change-bg");
    console.log(bulNum);
}

function sideMenuSlide(){
    let elem = document.querySelector("#sidemenu");
    let activeNum = elem.classList.contains("on");
    if(activeNum){
        elem.classList.remove("on");
    }else{
        elem.classList.add("on");
    }

}