$(function(){
    // $("select").change(function(){
    //     let thisVal = $(this).val();
    //     // console.log(thisVal)
    //     // $("input").val(thisVal);
    //     $(this).next().find("input").val(thisVal);

    //     $("input.inputtest").change(function(){
    //         alert(`input text가 ${this.val()}로 변경되었습니다.`)
    //     })
    // });
    $("select").change(function(){
        let thisVal = $(this).val(); //string
        // window.location.href = thisVal;
        // $(location).attr("href", thisVal)
        console.log(thisVal)

        let hasVal = $("select").hasClass("select1"); //bool
        if(hasVal){
            $(location).attr("href", thisVal)
        }else{
            $(this).next().find("input").val(thisVal);
        }
    });
});
