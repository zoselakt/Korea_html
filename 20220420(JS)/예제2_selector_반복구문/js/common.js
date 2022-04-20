'use strict'

// css속성과 js코드
$(function(){
    // for(var i=1; i< 5; i++){
    //     if(i == 1){
    //         $("li:nth-child("+i+")").css("color", "red");
    //     }else if(i == 2){
    //         $("li:nth-child("+i+")").css("color", "green");
    //     }else if(i == 3){
    //         $("li:nth-child("+i+")").css("color", "blue");
    //     }else{
    //         $("li:nth-child("+i+")").css("color", "yellow");
    //     }
    // }
    // $("li:nth-child(1)").css("color","red");
    // $("li:nth-child(2)").css("color","green");
    // $("li:nth-child(3)").css("color","blue");
    // $("li:nth-child(4)").css("color","yellow");
    
    
    // css 속성셀렉터
    // attribute : $("[속성명]")
    // attribute = "value" : $("[속성명='값']")
    // attribute ^= "value" : $("[속성명='값']"): 특정 속성이 지정한 값으로 시작되는 태그
    // attribute $= "value" : $("[속성명='값']"): 특정 속성이 지정한 값으로 끝나는 태그
    // attribute != "value" : $("[속성명='값']")
    // attribute *= "value" : $("[속성명='값']")
    
    // $("[class] a").css("color", "red"); //해당속성을 갖고 있는 모든 요소 선택
// $("ul il[title != 'fourth'] a").css("color","blue"); // !=: 특정요소제외한 모든요소

// s로 시작하는 title의 a태그 텍스트 색상을 red로 변경
$("[class ^= 's'] a").css("color", "red")
// rd 문자로 끝나는 title의 a태그 텍스트 색상을 blue로 변경
$("[class $= 'rd'] a").css("color", "blue")
// com로 끝나는 href속성을 갖고있는 요소의 텍스트 색상을 yellow로 변경
$("[href $= 'com']").css("color", "yellow")
//net으로 끝나는 href속성을 갖고있는 요소의 텍스트 색상을 green으로 변경
$("[href $= 'net']").css("color", "green")
// th 문자를 포함한 title 속성을 갖고 있는 요소의 텍스트 색상을 purple로 변경
$("[class *= 'th'] a").css("color", "aqua")
})