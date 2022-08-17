$(function(){
    let thisIndex = 0;
    $("td").mouseover(function(){
        thisIndex = $(this).index() + 1;
        // console.log(thisIndex)
        $("td:nth-child("+thisIndex+")").addClass("hover");
    }).mouseout(function(){
        thisIndex = $(this).index() + 1;
        $("td:nth-child("+thisIndex+")").removeClass("hover");
    })

    
});
