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

    // console.log(marginLeftNum)
    const marginNumber = 600;
    const pwElem = $("#navi .page-wrap");
    const pageLeng = $("#navi .page-wrap .page").length; //페이지 개수로 범위지정
    $(pwElem).width(marginNumber * pageLeng) //.page의 length값을 가져와서 .page-wrap 초기 너비
    function pagingBtnFunc(el){
        el.click(function(){
            let marginLeftNum = parseInt(pwElem.css("margin-left"));
            let isAni = pwElem.is(":animated");
            if(isAni == false){
                if($(el).hasClass("next") && marginLeftNum > -(marginNumber * pageLeng -1)){
                    pwElem.animate({marginLeft: marginLeftNum - marginNumber},"fast");
                }else if($(el).hasClass("prev") && marginLeftNum < 0){
                    pwElem.animate({marginLeft: marginLeftNum + marginNumber},"fast");
                }else if(marginLeftNum == -(marginNumber * (pageLeng -1)) || marginLeftNum == 0){
                    alert("이미지없음")
                }
            }
        });
    }
    $(".btn").each(function(){
        pagingBtnFunc($(this))
    })

    pagingBtnFunc($("img.next"))
});
