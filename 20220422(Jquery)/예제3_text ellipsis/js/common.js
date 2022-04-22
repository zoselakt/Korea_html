$(function(){
    let elem = $(".more-text");
    // console.log(elem.text());

    const startText = 0;
    const showText = 100; //보여줄 글자수
    let moreBtnText = "Show More";
    let lessBtnText = "Show less";
    let content = elem.html(); // 글자 가져오기
    let contentLeng = content.length; // 총 글자수
    // console.log(content);
    // console.log(contentLeng);

    let lessText = content.substr(startText , showText); // 0~99자 까지
    let moreText = content.substr(showText, contentLeng); // 100~끝까지
    // console.log(lessText)
    // console.log(moreText)

    let changeHtml = '';
    if(showText<contentLeng){
        changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"<span>${moreBtnText}</span></a></span>`
        elem.html(changeHtml)
    }
    console.log(changeHtml);
    
    //버튼실행영역
    
    $(".more-btn").click(function(){
        // console.log($(this).hasClass('active')) //if조건문 되는지 확인
        // $(this).toggleClass("active")
        if($(this).hasClass("active")){
            $(this).removeClass("active")
            $(this).html(`<span>${lessBtnText}</span>`)
        }else{
            $(this).addClass("active")
            $(this).html(`<span>${moreBtnText}</span>`)
        }
        // prev, parant, toggle 3개의 메소드를 사용하여 줄임말 포함된 span, 잘려진 텍스트를 담은 span을 선택하여 토글형태로 구현
        $(this).prev().toggle();
        // $(this).parant().prev().toggle();
        // e.preventDafault();
        return false;
    });
});
