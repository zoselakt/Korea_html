'use strict'

const dates = new Date();
let year = dates.getFullYear();
let month = dates.getMonth();
let date = dates.getDate();
let hours = dates.getHours();
let minutes = dates.getMinutes();
let seconds = dates.getSeconds();
console.log(dates);
console.log(year +" "+ month +" "+ date +" "+ hours +" "+ minutes);

let time = 12; 
if(hours < time){
    alert(year+"년 "+(month+1)+"월 "+date+"일 오전 "+(hours-time)+":"+minutes+" 입니다.");
}else if(hours > time){
    alert(year+"년 "+(month+1)+"월 "+date+"일 오후 "+(hours-time)+":"+minutes+" 입니다.");
} else{
    alert(year+"년"+month+"월 정오입니다.");
}