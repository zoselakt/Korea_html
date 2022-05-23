$(function(){
    $(".box").each(function(){
        // $("body").prepend("<div class='box'></div>");
        // console.log($(this))
        let transSize = "+"; // 크기
        let leftDir = "+"; // x축방향
        let topDir = "+"; // y축방향
        let speedNum = 3;
        let thisElem = $(this);

        $(window).resize(function(){
            let thisOffset = thisElem.offset();
            // console.log(thisOffset) // 객체타입 / 화면 크기불러오기

            // size 변화 조건식
            if(thisElem.width() >= 200){
                transSize = "-"
            }else if(thisElem.width() < 50){
                transSize = "+"
            }
            // x축 변화 조건식
            if(thisOffset.left > $(window).width() - thisElem.width()){
                leftDir = "-";
                thisElem.css("left", $(window).width() - thisElem.width())
            }else if(thisOffset.left < 0){
                leftDir = "+";
            }
            
            // y축 변화 조건식
            if(thisOffset.top > $(window).height() - thisElem.height()){
                topDir = "-";
                thisElem.css("top", $(window).height() - thisElem.height())
            }else if(thisOffset.left < 0){
                topDir = "+";
            }
            // thisElem 최종적용
            thisElem.css({"width": transSize + `=1px`, "height":transSize + `=1px`})
            thisElem.css({"left": leftDir +  `=${speedNum}px`, "top":topDir + `=${speedNum}px`})
        });
    });
});

