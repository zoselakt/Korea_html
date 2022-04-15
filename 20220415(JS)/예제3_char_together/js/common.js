'use strict'

let inputTxt = '';

function inputChat(event){ //키보드 이벤트
    if(window.event.keyCode == 13){ // 13: 엔터키를 사용했을때의 keycode
        if(event.value != ''){  // 입력창이 비어있지 않을 때 실행
            chattingFunc(event, 0);
            clearTxt(inputTxt, event, 0);
        }
    }
}

function sendTxt(e){ // 메세지 보내는 함수
    if(e.previousElementSibling.value != ''){ //입력창이 비어있지 않을 때 실행
        chattingFunc(e, 1);
        clearTxt(inputTxt, e, 1); // 비워주는 메소드
    }
}

function clearTxt(t, e, i){ //보내거나 엔터친후 채팅창비우는 함수 / t: htmltxt, e: event
    t ='';
    // inputTxt = t; //로직추가시
    if(i==1){ //1과같다 == sentTxt / 보내기버튼으로 입력
        e.previousElementSibling.value = '';
    }else{ // 엔터버튼으로 입력
        e.value = '';
    }
    // console.log(`전역변수: ${htmlTxt}, 입력창 초기화: ${}`)
}

function chattingFunc(e, i){ //this
    // console.log(e.previousElementSibling.value);// 채팅창 값 가져오기
    // let elem = document.querySelectorAll('.chat-box');
    if(i==1){ //1과같다 == sentTxt / 보내기버튼으로 입력
        inputTxt = e.previousElementSibling.value;
    }else{ // 엔터버튼으로 입력
        inputTxt = e.value;
    }

    let thisClassName = e.getAttribute("class");
    // console.log(thisClassName); 어디서입력되는지 콘솔출력
    let elem = document.querySelectorAll('.chat-box');
    let elemLeng = elem.length;
    let htmlTxt = []; //채팅창 내용 담기
    let txt = []; //채팅창 입력값 받기

    for (let i=0; i<elemLeng; i++){
        htmlTxt[i] = elem[i].innerHTML;
    }
    // let htmlTxt1 = elem[0].innerHTML; //크리스 채팅목록
    // let htmlTxt2 = elem[1].innerHTML; //제인 채팅목록
    // let htmlTxt3 = elem[2].innerHTML; // 톰 채팅목록

    if(thisClassName == "user-a"){
        txt.push(`<div class = "line char-a right"><div class="txt">${inputTxt}</div></div>`);
        txt.push(`<div class = "line char-a"><div class="txt">${inputTxt}</div></div>`);
        txt.push(`<div class = "line char-a "><div class="txt">${inputTxt}</div></div>`);
    }else if(thisClassName== "user-b"){
        txt.push(`<div class = "line char-b "><div class="txt">${inputTxt}</div></div>`);
        txt.push(`<div class = "line char-b right"><div class="txt">${inputTxt}</div></div>`);
        txt.push(`<div class = "line char-b "><div class="txt">${inputTxt}</div></div>`);
    }else{
        txt.push(`<div class = "line char-c "><div class="txt">${inputTxt}</div></div>`);
        txt.push(`<div class = "line char-c "><div class="txt">${inputTxt}</div></div>`);
        txt.push(`<div class = "line char-c right"><div class="txt">${inputTxt}</div></div>`);
    }

    for(let i=0; i<elemLeng; i++){
        htmlTxt[i] += txt[i];
        elem[i].innerHTML = htmlTxt[i]; // 입력된 값을 대화창출력
        elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight; //스크롤
    }
}
    // elem[0].innerHTML = htmlTxt1;
    // elem[1].innerHTML = htmlTxt2;
    // elem[2].innerHTML = htmlTxt3;
    
    // elem[0].scrollTop = elem[0].scrollHeight - elem[0].offsetHeight;
    // elem[1].scrollTop = elem[1].scrollHeight - elem[1].offsetHeight;
    // elem[2].scrollTop = elem[2].scrollHeight - elem[2].offsetHeight;