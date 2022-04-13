'use strict'
window.onload = function(){
let infoText = "javascript, html, css, photoshop, xd";
let aHtml = "<h1>My Skill</h1>";
let list = "";

let skill = infoText.substring(0,10);
let skill1 = infoText.substring(12,16);
let skill2 = infoText.substring(18,21);
let skill3 = infoText.substring(23,32);
let skill4 = infoText.substring(34,36);

let array = [skill, skill1, skill2, skill3, skill4];
console.log(array);

// console.log(typeof(infoText));
list += aHtml
list += "<ul>"
list += "<li>"+skill+"</li>"
list += "<li>"+skill1+"</li>"
// for(let i=list; i<array.length; i++){
//     list += "<li>"+(i+1)+". "+skill[i]+"</li>"
// }
list += "<li>"+skill2+"</li>"
list += "<li>"+skill3+"</li>"
list += "<li>"+skill4+"</li>"
list += "</ul>"

document.body.innerHTML = list;

console.log(list);

}


//----------------------------------------------------------------
let num = "1,2,3,4,5";
let array = num.split(",");

let chatText_1 = "how ate you doing today?";
let chatText_2 = "let's go lunch";
let chatText_3 = "i am a boy";
let chatText_4 = "good luck man!!";

let str = chatText_1.split("a", 1)

// let ctStr = [];
// ctStr.push(chatText_1.split(""))
// ctStr.push(chatText_2.split(""))
// ctStr.push(chatText_3.split(""))
// ctStr.push(chatText_4.split(""))

let ctStr_1 = chatText_1.split(" ");
let ctStr_2 = chatText_2.split(" ");
let ctStr_3 = chatText_3.split(" ");
let ctStr_4 = chatText_4.split(" ");

console.log(ctStr_1);
console.log(ctStr_2);
console.log(ctStr_3);
console.log(ctStr_4);