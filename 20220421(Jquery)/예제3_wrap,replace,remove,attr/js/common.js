$(function(){
/*
    // wrap, wrapAll, wrapInner
    // wrap(...) 태그를 다른 태그로 묶는다.
    // wrapAll(...) 태그 전체를 모아서 다른 태그로 묶는다.
    // wrapInner(...) 자식 태그/텍스트를 다른 태그로 묶는다.

    //wrap
    $("strong").wrap("<h2></h2>"); //개별로 각각의 h2태그를 생성하여 묶인다.
    //wrapAll
    $("h2").wrapAll("<header></header>"); // 한번에 태그를 묶는다. / 파일 내 모든요소를 끌고와 묶겨질수 있으니 주의
    //WrapInner
    $(".wrap-inner").wrapInner("<div class='inner'></div>");  //지정클래스에 요소를 묶는다.

    //menu클래스 태그의 자신 요소를 span을 선택하고 개별요소를 "<a href='http://naver.com' target='_self'></a> 로 감싸기"
    $(".menu span").wrap("<a href='http://naver.com' target='_self'>")

    // .items의 자식요소들을 wrap 
    $(".wrap-inner .items").wrapInner("<a href='http://daum.net'></a>"); 
*/
//------------------------------------------------------------------------------------

    // replaceWith, remove, attr, removeAttr
    // replaceWith(...) 태그를 다른 태그로 변경한다.
    // remove() 태그를 제거한다.
    // attr(... , ...) 지정한 속성값을 변경한다.
    // attr(...) 지정한 속성값을 가져온다.
    // removeAttr(...) 지정한 속성을 제거한다.

    $("h2").replaceWith('<h2>remove</h2>');
    
    // p태그를 "<span class='box'>test box </span>"으로 변경
    $("p").replaceWith("<span class='box'> textbox </span>")
    console.log($(".box").text())
    $(".box").remove();

    // .items태그를 "<a href='http://naver.com'></a>로 변경
    $(".items").replaceWith("<a href='http://naver.com'></a>");
    // 변경된 a태그를 remove로 삭제
    $("a").remove();
})