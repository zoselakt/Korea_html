$(function(){
    $(window).scroll(function(){
        // console.log($(this).scrollTop())// 스크롤이 움직였을때의 값 출력
        // let winHeight = $(window).height();
        // console.log(winHeight); // 화면크기

        // let height = winHeight - 70;
        // //if 구문으로 구현하기
        // if($(window).scrollTop() >= height){
        //     $("nav").addClass("fixed")
        // }else{
        //     $("nav").removeClass("fixed")
        // }

        let winHeight = $(window).height() - 70;
        let scTop = $(this).scrollTop();
        let navBar = $("nav");
        if(scTop > winHeight){
            navBar.addClass("fixed")
        }else{
            navBar.removeClass("fixed")
        }
    });

});
