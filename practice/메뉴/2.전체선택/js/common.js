$(function(){
    $("button").click(function(){
        $("body").on("click", "button", function(){
            $(":checkbox").each(function(){
                if($(this).is(":checked")){
                    $(this).prop("checked", false)//체크해제
                }else{
                    $(this).prop("checked", true)//체크
                }

                // $(this).toggleClass("all");
                // if($(this).hasClass("all")){
                //     $(this).text("전체해제");
                //     $(":checkbox").prop("checked",true);
                // }else{
                //     $(this).text("전체선택");
                //     $(":checkbox").prop("checked", false);
                // }
            })
        })
    });
});
