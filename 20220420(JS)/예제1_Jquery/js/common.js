'use strict'

    // jquery - css셀렉터
        // 태그: $("태그명")
        // id셀렉터: $("#id명")
        // 클래스: $(" .클래스네임")
        // 자손: $("태그1 #태그2(id선택) .태그3(class선택) >태그4(태그선택)")
        // 유니버셜(전체선택자): $("*")
        // 그룹: $("셀렉터1, 셀렉터2")


$(function(){
    //jquery 실행구문
    // document.querySelector("li").style.color = 'blue';

    // $("태그").css('css속성','css속성값')
    $("li").css('color','red');
    $("#first").css("color", "blue");
    $("li.fourth").css("background-color", "green");


    // 세번째 li의 span요소에 배경색을 blue로 변경
    $("li.third span").css("background-color", "blue");
    // 두번째 li > p요소의 font-size를 10px로 변경
    $("li.second p").css("font-size", "10px");

    let num = 30;
    $(".first, .third, .fourth").css("left", num+"px");

    //첫번째 li의 자식요소span에 텍스트 색상을 red로 변경 (자손)
    $("li.first > span").css("color", "red");
    //유니버셜
    $("*").css("color", "blue");
    // ul의 세번째 li요소를 인접 선택자를 활용하여 텍스트색상을 blue로 변경
    $("ul li.second + li".css("color","blue"));
    
});