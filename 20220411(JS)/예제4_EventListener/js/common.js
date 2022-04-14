'use strict'

/*
// 이벤트리스너 함수타입
// 함수타입 사용방법
// 1. 선언적 함수
function getElementNum(){
    document.getElementById("box").innerHTML = "test";
};

document.getElementById("btn").addEventListener("click",getElementNum);
//---------------------------------------------------------------------

// 2. 익명함수
// 이벤트 리스너 
// Element.addEventListener(event, function, usecapture)
// event: String타입 이벤트명을 넣어준다.
// function: function타입으로 값을 넣어준다.
// usecapture: boolean 타입 입력(true or false)
// 
//    - document.getElementById("btn").addEventListener("click", function(){
//        document.getElementById("box").innerHTML = "익명함수 타입"
//      });

function clickBtn(btn, elem, text){
    let btnSelect = document.getElementById(btn);
    let elemSelect = document.getElementById(elem);
    btnSelect.addEventListener("click", function(){
        elemSelect.innerHTML = text;
    });
}

clickBtn("btn","box","딱 기다리라~~~");
*/
//---------------------------------------------------------------------
let outPutText = "";

function getText(){
    // outPutText += document.getElementById("fname").value; /input태그에 value값을 가져온다.
    // document.getElementById("textarea").innerHTML = outPutText;
    if(outPutText){
        outPutText += document.getElementById("fname").value;
    }else{
        outPutText += "<br>" + document.getElementById("fname").value;
    }
    document.getElementById("textarea").innerHTML = outPutText
}

let domStyle = document.getElementById("textarea").style;
domStyle.backgroundColor = "green";
domStyle.color = "white";
domStyle.fontSize = "32px";
document.getElementById("btn").addEventListener("click", getText);