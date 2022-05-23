$(function(){
    let elem = $(".more-text");
    //스크립트
    // elem = document.body.getElementsByClassName('more-text')
    // for(let i=0; i<elem.length; i++){
    //     let content = elem[i].html();
    // }
    //jquery
    const startText = 0;
    const showText = 100; 
    let moreBtnText = "Show More";
    let lessBtnText = "Show less";
    elem.each(function(i){
        // console.log($(this).text())
        let content = $(this).html(); 
        let contentLeng = content.length;
        let lessText = content.substr(startText , showText);
        let moreText = content.substr(showText, contentLeng); 
        let changeHtml = '';
        if(showText<contentLeng){
            changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"<span>${moreBtnText}</span></a></span>`
            $(this).html(changeHtml)
            if(i == 0){
                $(this).html('1'+changeHtml)
            }else if(i == 1){
                $(this).html('2'+changeHtml)
            }else if(i == 2){
                $(this).html('3'+changeHtml)
            }
        }
        // console.log(changeHtml);
    });

    $(".more-btn").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
            $(this).html(`<span>${lessBtnText}</span>`)
        }else{
            $(this).addClass("active")
            $(this).html(`<span>${moreBtnText}</span>`)
        }
        $(this).prev().toggle();
        return false;
    });
});
