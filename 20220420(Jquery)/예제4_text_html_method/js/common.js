'use strict'
$(function(){
    /*
    let textNum = '';
    textNum = $("p#first");
    textNum.text('hi jquery');

    //특정요소의 텍스트를 다른요소에 삽입하는 예
    // 방법1
    // $("p#second").text();
    console.log($("p#second").text());
    $("p#first").text($("p#second").text())

    // 방법2
    // a type
    let elem = $("p#first");
    let elemInputText = $("p#second").text();
    elem.text(elemInputText);
*/
    // b type
    // let elem = $("p#first");
    // let elemInput = $("p#second");
    // elem.text(elemInput.text());

    // let numHtml = "";
    // numHtml = $("p#second").html();

    // c type
    let numHtml = "";
   
    numHtml = document.querySelector("#third h2").innerHTML;
    console.log(numHtml)
    document.querySelector("p#first").innerHTML = numHtml;
    
});
