$(function(){
    // script영역 prepend(), append() 사용 예
/*
    // prepend
    let elemNum = $("p#first");
    elemNum.prepend("<span>hi</span>")

    //append
    elemNum.append("<span>hi</span>")
*/
//--------------------------------------------------------------------------
/*
    각각의 p태그의 자식요소의 제일 앞쪽에 "<strong>kind:</strong>" 를 for구문을 사용하여추가
    let elemP = $("p").length;
    console.log(elemP)

    let elemNth = $(`p:nth-child(1)`)
    console.log(elemNth)
    for(let i=0; i<elemP; i++){
        $("p:nth-child("+(i+1)+")").prepend("<strong>kind: </strong>")
    }

    각각의 p태그의 자식요소의 제일 뒷쪽에 "<strong>add text</strong>" 를 for구문(초기값1)을 사용하여추가
    let elemP = $("p").length;
    for(let i=1; i<=elemP; i++){
        $("p:nth-child("+i+")").append("<br><strong>add text</strong>")
    }
*/
//-----------------------------------------------------------------------------------
/*
    let elemP = [];
    elemP.push("<img src='./img/bolt.png'>");
    elemP.push("<img src='./img/build.png'>");
    elemP.push("<img src='./img/paid.png'>");
    elemP.push("<img src='./img/watch.png'>");
    console.log(elemP)

    $("ul li:nth-child(1) a").prepend(elemP[0])
    $("ul li:nth-child(2) a").prepend(elemP[1])
    $("ul li:nth-child(3) a").prepend(elemP[2])
    $("ul li:nth-child(4) a").prepend(elemP[3])
    
    for(let i=0; i<=elemP.length; i++){
        let count = i + 1
        $("ul li:nth-child("+count+") a").prepend(elemP[i])
    }
*/
    //------------------------------------------------------------------------
    // eq 명령어를 사용하여 변경 / 메서드 체인
    let elem = $("ul li")
    // console.log(elem.find("a"));

    // $("ul li").eq(0).find("a").prepend(elemP[0])
    // $("ul li").eq(0).find("a").prepend(elemP[1])
    // $("ul li").eq(0).find("a").prepend(elemP[2])
    // $("ul li").eq(0).find("a").prepend(elemP[3])
    let elemP = [];

    for(let i=0; i<=elem.length; i++){
        $("ul li").eq(i).find("a").prepend(elemP[i])
    }
}); 