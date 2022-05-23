$(function(){
    $("button").click(function(){
        let count = 0;
        // 수치 증가 복합 대입연산 사용방법
        // console.log($(".box").css("left", count));
        // $(".box").css("left", count);
        // count++;

        // $(".box").animate(첫번쨰 인자, 두번쨰 인자, 세번쨰 인자, 네번째 인자)
        //첫번쨰 인자: 변화된 값
        //두번째 인자: 경과(지속)시간 / string or number
        //세번쨰 인자: 변화곡선(timmingfunction) string
        //네번째 인자: function(){}
        $(".box:animated").stop();
        $(".box").animate({left: '+=10px', top: '+=10px'});


        // css다중적용
        // $(".box").animate({left: "250px", opacity: "0.5", height: "150px", width: "150px"});

        //toggle사용방법
        // $(".box").animate({Height : "toggle", width:"toggle"});
        // $(".box").animate({top: "toggle", left: "toggle"})

        // animate 다중사용
        let elem = $(".box");
        elem.animate({height: "300px", opacity: "0.4"}, 'slow');
        elem.animate({width: "300px", opacity: "0.8"}, 'slow');
        elem.animate({height: "400px", opacity: "0.4"}, 'slow');
        elem.animate({width: "400px", opacity: "0.8"}, 'slow');
        // slow: 0.6초 / 디폴트: 0.4초 / fast:0.2초
        // 여러번 작동시킬 경우 순서대로 실행되고 종료된다.

    });
});