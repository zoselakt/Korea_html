$(function(){
    let pHtml = $("p").html();

    $("button").click(function(){
        let btnNum = $(this);
        if(btnNum.text() == "확인"){
            // console.log("확인");
            let inputVal = $("input").val(); //값 받아오기
            // console.log(`확인 전: ${inputVal}`)
            $("p").text(`${inputVal} 로 전송을 원하시면 전송버튼을 눌러주세요.`);
            // console.log(`${btnNum.text()}`);
            btnNum.text("전송");
            // $("button").each(function(i){
            //     if(i==0){
            //         $(this).text("전송")
            //     }
            // });
        }else if(btnNum.text() == "취소"){
            //방법1: 직접입력
            // $("p").html("E-mail : <input type='email' name='name'>"); 

            // 방법2:초기 로드시 html변수로 담는다.
            $("p").html(pHtml); 

            // 버튼 초기화
            // 방법1: each활용
            // $("button").each(function(i){
            //     if(i==0 && $(this).text() == "전송"){
            //         $(this).text("확인")
            //     }
            // });

            //방법2: prev
            // btnNum.prev().text("확인");
            let btnNumPrev = btnNum.prev();
                if(btnNumPrev.text() == "전송"){
                    btnNumPrev.text("확인")
                }
        }else if(btnNum.text() == "전송"){
            $("p").text("전송되었습니다.");
            // 방법1 :자바스크립트
            // window.location.href = "http://naver.com"; 
            // 방법2: jquery
            $(location).attr("href","http://naver.com"); 
        }
    });
}); 