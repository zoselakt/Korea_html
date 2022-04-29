$(function(){
    let winHref = window.location.href
    let splitNum = winHref.split("/")[7] // 스트링값 출력
    let pageNum = winHref.split("/")[7].split(".");
    let pageText = pageNum[0]

    $("header").load("./header.html .inner", function(){
        // console.log($("footer").load("./footer.html .inner"))
        $("#gnb ul li").each(function(){
            if($(this).text() == pageText){
                $(this).addClass("on")
            }
        })
    });
    
    $("footer").load("./footer.html .inner")
});
