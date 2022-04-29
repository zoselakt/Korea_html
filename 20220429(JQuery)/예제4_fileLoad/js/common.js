$(function(){
    $("#content").load("./load_file.html .section1");
    $("ul li").click(function(){
        // console.log($(this).index());
        // let thisId = $(this).attr("id");
        // if(thisId == "section1"){
        //     $("#content").load("./load_file.html .section1");
        // }else if(thisId == "section2"){
        //     $("#content").load("./load_file.html .section2");
        // }else if(thisId == "section3"){
        //     $("#content").load("./load_file.html .section3");
        // }

        // 위 코드 리팩토링
        let val = $(this).index()
        for(let i=0; i<= val; i++){
            $("#content").load(`./load_file.html .section${i+1}`);
        }
    })
    // $("ul li").click(function(){
    //     let thisIndex = $(this).index();
    //     let thisId = $(this).attr("id");
    //     if(thisId == `section${thisIndex}`){
    //         $("#content").load(`./load_file.html .section${thisIndex}`)
    //     }
    // })
});
