$(function(){
    $(window).scroll(function(){
        let winHeight = $(window).height();
        let scTop = $(this).scrollTop();
        let navBar = $("nav");
        $(".slide").each(function(){
            let thisOffset = $(this).offset();
            // console.log($(thisOffset));
            if(thisOffset.top <= scTop && scTop < thisOffset.top + winHeight){
                // console.log($(this).find('h2').text())
                let bodybg = ($(this).data("background"))
                $("body").css("background-color",bodybg), $(this).data("background");
                $(this).addClass("on")
            }
            // console.log(thisOffset.top) // slide구간
            // console.log(scTop) // 스크롤 내릴때의 값
            // console.log(winHeight) //화면의 값
        });

        if(scTop > winHeight -70){
            navBar.addClass("fixed")
        }else{
            navBar.removeClass("fixed")
        }
    });
});

