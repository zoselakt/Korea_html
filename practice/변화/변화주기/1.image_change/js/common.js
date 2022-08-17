$(function(){
    $("a").click(function(){
        // console.log($(this));
        $("a").removeClass("on") //기존 모든 요소에 추가된 클래스를 
        $(this).addClass("on")
        $("img").attr("src", this)
        console.log(this);
        return false; // a태그속성(사진파일로 이동)삭제
    });
});

// 한번만 작동되게끔 : one()
// $("a").one("click", function(){
//     $("a").removeClass("on");
//     $(this).addClass("on")
//     $("img").attr("src", $(this).attr("href"))
//     return false;
// });
