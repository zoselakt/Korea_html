$(function(){
    let boxNum = $(".flex-box .count");
    boxNum.each(function(){
        // console.log($(this));
        //0부터 본인의 값까지 증가 4초까지,
        $(this).prop('Counter', 0).animate({Counter: $(this).text()}, {
        duration: 4000,
        easing: "swing",
        step: function(t){
            // console.log(t);
            console.log(Math.ceil(t));
            $(this).text(Math.ceil(t));
        },
        complete: function(){
            console.log("완료");
        }
        });
    });
});