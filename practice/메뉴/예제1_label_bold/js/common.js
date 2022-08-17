$(function(){
    //방법1
    // let inputElem = $("input[type=radio]");
    // console.log(inputElem)

    // 방법2
    // let inputElem = $(":radio");
    // console.log(inputElem)

    $(":radio").change(function(){
        let genderNum = $(this).attr("id");
        // console.log($("label[for='"+genderNum+"']").text());
        $("label").css("font-weight", "normal"); //label 모든 요소의 font-weight초기화
        $("label[for='"+genderNum+"']").css("font-weight", "bold");
    });
    $(":checkbox, :radio").change(function(){
        let hobby = $(this).attr("id");
        // checked 확인방법
        // // 방법1
        // if($("input[type=checkbox]:checked").length > 0){
    
        // }
        // // 방법2
        // if($("input[type=checkbox]").prop("checked") == true){
            
        // }
        // // 방법3
        // if($("input[type=checkbox]").is("checked") == true){
            
        // }
        // console.log($(this).attr("type"))
        if($(this).attr("type")=="radio") {
            $("input[type=radio] + label").css("font-weight", "normal");
            $("label[for='"+hobby+"']").css("font-weight", "bold");
        }else{
            if($(this).prop("checked")==true){
                $("input[for='"+hobby+"']").css("font-weight", "bold");
            }else{
                $("input[for='"+hobby+"']").css("font-weight", "normal");
            }
        }
    });
});

