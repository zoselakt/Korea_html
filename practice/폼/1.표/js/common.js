$(function(){
    // table scroll 생성시 스크롤바 수정
    $(window).on("load resize", function(){
        let scrollBarWidth = $(".tbl-content").outerWidth() - $(".tbl-content table").outerWidth();

        // console.log(`table parent width: ${$(".tbl-content").outerWidth()}, 
            // table width: ${$(".tbl-content table").outerWidth()}`);
        // console.log(scrollBarWidth);

        $(".tbl-header").css("padding-right", scrollBarWidth);
    }).resize();
});