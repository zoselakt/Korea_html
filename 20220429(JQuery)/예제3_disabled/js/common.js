$(function(){
    $("select").change(function(){
        // console.log($(this)[0][$(this)[0].length -1]);
        // console.log($(this)[0][0] == );

        // $(":seleced").attr("value")
        if( $(":selected").attr("value") === "10대" ){
            $("input").attr("disabled", true);
        }else{
            $("input").removeAttr("disabled");
        }
    });
});
