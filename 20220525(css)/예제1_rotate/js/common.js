'use strict'
$(function(){
    $(".wrap").each(function(i){
        let thisWrap = $(this);
        let itemsNum = thisWrap.find(".items"); //items의갯수
        let itemsLeng = itemsNum.length;
        itemsNum.mouseenter(function(){
            let thisIndex = $(this).index();
            $(this).addClass("on");
            if(thisIndex == 0){
                thisWrap.css("margin-left", "0px");
            }else if(thisIndex == itemsLeng -1){
                thisWrap.css("margin-left", "-100px");
            }else{
                thisWrap.css("margin-left", "-50px");
            }
        }).mouseleave(function(){
            itemsNum.removeClass("on");
            thisWrap.css("margin-left", "0px");
        });
    });
});