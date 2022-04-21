$(function(){
    // attr(... , ...) 지정한 속성값을 변경한다.
    // attr(...) 지정한 속성값을 가져온다.
    // removeAttr(...) 지정한 속성을 제거한다.
    let attrNum = document.querySelector("#wrap-id").getAttribute('class');
    let num = $("#wrap-id").attr('class');

    console.log(attrNum)
    console.log(num) // attr을 사용하여 짦은 명령어로 가져올수 있다.

    //.wrap-inner클래스로 선택하여 id값을 가져오기
    let wrapIn = $(".wrap-inner").attr('id');
    console.log(wrapIn)
})