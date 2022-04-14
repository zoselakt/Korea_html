'use sttict'

// let x = document.querySelectorAll("div")[0];

let num = document.querySelector(".container > div").getAttribute("class");

// 로고header속성
let hrefNum = document.querySelector("header h1 a")
hrefNum.setAttribute("href", "http://naver.com");
hrefNum.setAttribute("class","link");
console.log(hrefNum.getAttribute("href"));


// href속성값
alert(`현재 방문하신 사이트는 ${} 입니다.`)
