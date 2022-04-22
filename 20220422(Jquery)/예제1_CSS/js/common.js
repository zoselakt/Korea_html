$(function(){
    // jquery로 css구현 3가지
    //방법1
    // $(".box").css("width", "300px");
    // $(".box").css("height", "300px");
    // $(".box").css("border", "5px solid yellow");

    //방법2
    // $(".box").css("width","300px").css("height","300px").css("border", "5px solid yellow")

    //방법3
    $(".box").css({"width":"300", "height":"300px", "border":"5px solid yellow"})
//--------------------------------------------------------------------------------

    // prev / toggle
    $("button").click(function(){
        $("#header").toggle();
    });
    console.log($("#header").prev());

    //prev() 선택자의 바로앞요소선택
    //next() 선택자의 바로 뒤 요소 선택
    // parent() 선택자의 부모요소 선택
    // toggle() display:none요소를 나타냄
})