$(function(){
    $("dd:not(:first)").css({"display" : "none", "height" : 0});
    $("dl dt").click(function(){
        // console.log($("+dd", this).next());
        let thisElem = $(this);
            // $("dd").slideUp("slow");
            // $("+dd" , this).slideDown("slow");
        $("dd").each(function(){
            if(parseInt($(this).css("height")) ==300){
                $(this).animate({height : 0}, 300, function (){
                    $(this).css("display", "none");
                });
            };
        });
        $("+dd", thisElem).css("display", "block").animate({height : 300}, 400);
    });
});
