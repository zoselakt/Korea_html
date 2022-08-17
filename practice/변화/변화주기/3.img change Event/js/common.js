$(function(){
    // button으로 구현
    $("button").click(function(){
        // if($("img").attr("title") == "mountain01"){
        //     $("img").attr("title", "mountain02");
        // }else{
        //     $("img").attr("title", "mountain01")
        // }
        //이미지를 toggle 형태로 구현하고 첫번째 이미지 alt값: 산이미지1 / 두번쨰 alt: 산이미지2로 변경
        //방법1
        // if($("img").attr("alt") == "산이미지1"){
        //     $("img").attr("src", "./img/mountain_02.png");
        //     $("img").attr("title", "mountain02");
        //     $("img").attr("alt", "산이미지2");
        // }else{
        //     $("img").attr("src", "./img/mountain_01.png");
        //     $("img").attr("title", "mountain01");
        //     $("img").attr("alt", "산이미지1");
        // }
        //방법2
        // if($("img").attr("alt") == "산이미지1"){
        //     $("img").attr("src", "./img/mountain_02.png").attr("title", "mountain02").attr("alt", "산이미지2");
        // }else{
        //     $("img").attr("src", "./img/mountain_01.png").attr("title", "mountain01").attr("alt", "산이미지1");
        // }
        //방법3
        if($("img").attr("alt") == "산이미지1"){
            $("img").attr({"src":"./img/mountain_02.png", "title":"mountain02", "alt":"산이미지2"});
        }else{
            $("img").attr({"src":"./img/mountain_01.png", "title":"mountain01", "alt":"산이미지1"});
        }

    });
    // a태그로 구현
    $("a").click(function(e){
        if($("img").attr("title") == "mountain01"){
            $("img").attr({"src":"./img/mountain_01.png", "title":"mountain02", "alt":"산이미지2"});
        }else{
            $("img").attr({"src":"./img/mountain_02.png", "title":"mountain01", "alt":"산이미지1"});
        }
        e.preventDafault();
        // a태그로 구현시 함수 내 return false 사용, 
        // 하위 버전 브라우저 혹은 특정 브라우저에서 a link 기본속성(주소값)이 작동되어 event가 발생하지 않는 처리
        // function(e) && e.preventDafault();
    });
});