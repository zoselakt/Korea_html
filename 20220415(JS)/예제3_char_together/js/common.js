'use strict'

function chattingFunc(e){ //this
    // console.log(e.previousElementSibling.value);// 채팅창 값 가져오기
    let elem = document.querySelectorAll(".chat-box");
    let inputTxt = e.previousElementSibling.value;
    let htmlTxt = "";
    console.log(elem[0].innerHTML);
    htmlTxt = elem[0].innerHTML;
    htmlTxt += `<div class = "line char-a right"><div class="txt">${inputTxt}</div></div>`
    elem[0].innerHTML = htmlTxt;
}