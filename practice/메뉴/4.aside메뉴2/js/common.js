'use strict'

function sideMenuSlide(){
    let elem = document.querySelector("#sidemenu")
    let check = elem.getAttribute("class");
    elem.classList.toggle("on");
//     if(check == "on"){ // on class가 있을때
//         //on을 삭제하는 코드
//         document.querySelector("#sidemenu").remove("class");
//         console.log(menu);
//         elem.classList.remove("on");
//     }else{
//     //on을 추가하는 코드
//         document.querySelector("#sidemenu").add("class");
//         console.log(menu);
//         elem.classList.add("on");
//     }
}