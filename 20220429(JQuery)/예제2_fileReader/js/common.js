$(function(){
    //chain
    $(":file").mouseover(function(){
        $(this).after("<p>업로드 가능한 파일의 용량은 300kb입니다.")
    }).mouseleave(function(){
        $(this).next().remove();
    });

    //on메서드
    // $(":file").on({
    //     mouseover: function(){

    //     },
    //     mouseout: function(){

    //     }
    // })
    $("#img-input").change(function(){
        console.log(this) // dom요소로 받음
        readURL(this);
    })

    function readURL(input){
        console.log(input.files[0])
        if(input.files && input.files[0]){
            let reader = new FileReader();
            // console.log(reader);
            reader.readAsDataURL(input.files[0])
            reader.onload = function(e){
                // console.log(e.target.result)
                $("#image-section").attr("src", e.target.result)
            }
        }
    }
});
