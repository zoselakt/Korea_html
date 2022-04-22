$(function(){
    $("img").mousemove(function(e){
        // console.log($(this)) // 이미지값
        // console.log($(e.clientX)) // X, Y축 값

        // span태그 내부에 x좌표:*** y좌표: *** 추가하고 
        //span 위치를 e.clientX, e.clientY 값을 사용하여 커서를 따라다니는 이벤트를 만들어라.
        $("span").html(`X좌표:${e.clientX}, Y좌표${e.clientY}`);
        $("span").css({"left" : e.clientX, "top" : e.clientY});

        // jquery요소를 추가하는 method를 사용하여 span태그를 추가하고 
        // tooltip 클래스를 갖고있는 span태그를 body에 추가

        $("span").addClass({"tooltip":"body"}).append("<body></body>")
        // $("body").append("<span class='tooltip'></span>")
    });
});