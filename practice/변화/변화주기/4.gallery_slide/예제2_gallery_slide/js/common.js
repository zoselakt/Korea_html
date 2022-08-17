$(function(){
    // $("#navi a").click(function(){
    //     let imgSrc = $(this).attr("href");
    //     let checkAni = $("#main img:last").is(":animated");
        // console.log(imgSrc)
        //방법1
        // if(checkAni){
        //     //바로 전환
            // $("#main img:last").stop().css("opacity", 0);
            // $("#main img:last").remove();
            // $("#main img").attr("src", imgSrc);
        // }else{
        //     //1초 애니메이트
        //     $("#main img").before(`<img src="${imgSrc}">`)
        //     $("#main img:last").animate({opacity: 0}, {
        //         duration: 1000,
        //         easing: "swing",
        //         complete: function(){
        //             $(this).remove()
        //         }
        //     });
        // }
        //방법2
            // $("#main img:last").animate({opacity: 0}, {
            //     duration: 1000,
            //     easing: "swing",
            //     start: function(){
            //         $("#main img").before(`<img src="${imgSrc}">`)
            //     },
            //     complete: function(){
            //         $(this).remove();
            //     }
            // });

    $("#navi a").click(function(){
            let imgSrc = $(this).attr("href");
            let checkAni = $("#main img:last").is(":animated");
            if(checkAni == true){
                $("#main img").before(`<img src="${imgSrc}">`)
                $("#main img:last").stop().css("opacity", 0);
                $("#main img:last").remove();
                $("#main img").attr("src", imgSrc);  
            }else{
                $("#main img").before(`<img src="${imgSrc}">`)
                $("#main img:last").stop().css("opacity", 1);
                $("#main img:last").remove();
                $("#main img").attr("src", imgSrc);
            }
        return false;
    });

    let marginLeftNum = $("#navi .page-wrap").css("margin-left");
    // console.log(marginLeftNum)
    const marginNumber = 300;

    function pagingBtnFunc(el){
        el.click(function(){
            marginLeftNum = $("#navi .page-wrap").css("margin-left");
            if($(el).hasClass("next")){
                $("#navi .page-wrap").animate({marginLeft: parseInt(marginLeftNum) - marginNumber},"fast");
            }else{
                $("#navi .page-wrap").animate({marginLeft: parseInt(marginLeftNum) + marginNumber},"fast");
            }
        });
    }
    $(".btn").each(function(){
        pagingBtnFunc($(this))
    })


    pagingBtnFunc($("img.next"))
    // $("img.next").click(function(){
    //     marginLeftNum = $("#navi .page-wrap").css("margin-left");
    //     console.log(marginLeftNum)
    //     $("#navi .page-wrap").animate({marginLeft: parseInt(marginLeftNum) - marginNumber},"fast");
    // });
});
