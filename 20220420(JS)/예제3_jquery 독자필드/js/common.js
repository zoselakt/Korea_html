'use strict'
$(function(){
    // first, first-child/ last, last-child 비교
    // $("p:first-child").css("color", "red");// first-child : p의 첫번째 자식요소 선택
    // $("p:first").css("color", "blue"); //document전체에서 선택한 첫번째 요소선택
    // $("p:last-child").css("color", "green");// last-child : p의 마지막 자식요소 선택
    // $("p:last").css("color", "aqua"); //document전체에서 마지막 요소선택
//-------------------------------------------------------------------------------------------------
    // even, odd / css는 1부터 시작하고, js는 0부터 시작하여 even이 홀수, odd가 짝수로 바뀟다.
    // even 필터: $(“태그: even”) / 지정한 태그의 짝수 번째 태그
    // odd 필터: $(“태그: odd”) / 지정한 태그의 홀수 번째 태그
    // $("li:even").css('color', "green");
    // $("li:odd").css('color', "aqua");
//-------------------------------------------------------------------------------------------------
    // eq, gt(greater than), lt(Less than)
    //eq 필터: $(“태그: eq”) / 지정한 번호의 태그( 번호는 0부터 시작)
    //gt 필터: $(“태그: gt”) / 지정한 번호보다 뒤의 태그( 번호는 0부터 시작)
    //lt 필터: $(“태그: lt”) / 지정한 번호보다 앞의 태그( 번호는 0부터 시작)
    // $("li:eq(2)").css("color", "red");
    // $("li:gt(2)").css("color", "blue");
    // $("li:lt(2)").css("color", "green");
//-------------------------------------------------------------------------------------------------
    // header, contains,has, parent / 잘쓰지않는다.
    // header 필터: $(“태그: header”) / h1~h6까지의 heading태그
    // contains 필터: 특정 문자열을 포함하고 있는 태그
    // has 필터: 특정 태그가 포함하고 있는 태그
    // parent 필터: 자식태그 혹은 문자열을 포함하고 있는 태그
    // $(":header").css("color", "red")  // $("h1, h6").css("color", "blue")
    // $("p:contains('사과')").css("color", "aqua");
    // $("p:contains('무오')").css("color", "lightgreen");
    // $("p:contains('수박')").css("color", "aquamarine");
    // $("p:has(b)").css("color", "red"); // b태그를 가지고 있는 p태그
    $("p:parent").css("border", "2px solid red") 
    // $("li:not(:parent)").css("border", "2px solid red")
//-------------------------------------------------------------------------------------------------
    //사용 예
    // let elem = $("p:contains('배')");
    // if(elem > 0){
    //     console.log("배배배배배배ㅐ배배")
    // }else{
    //     console.log("asdjflksdf")
    // }
    
//-------------------------------------------------------------------------------------------------
    // $("li:has(p)").css("color", "blue")
    // $("li:has(span)").css("color", "orange")
    // $("li:has(a), li:has(a) a").css("color", "green")
//-------------------------------------------------------------------------------------------------

})
// stop watch, date객체, setTimeout / interval , 실습과제
