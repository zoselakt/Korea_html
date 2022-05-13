$(function() { // script 영역 slide banner 만들기 예2
  const widthNum = 150; // slide li 개별 너비, ul.column의 너비를 계산할 수 있다.
  const caInner = $("#carousel-inner");

  // li의 개수 가져오기
  let liLeng = $("ul.column li", caInner).length;

  // li의 개수로 ul.column의 너비를 설정
  $("#carousel-inner ul.column").css("width", widthNum * liLeng);

  //슬라이드 포지션 초기화
  //ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동시키시오.
  //ul.column의 초기 슬라이드 위치로 이동하시오.
  // function initialFunc(init){
  //   caInner.css("margin-left", -widthNum)
  //   if(init === "prev"){
  //     $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column")
  //   }else{
  //     $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column")
  //   }
  // }

  // function acitonBtn(el) {
  //   $("#carousel-prev").click(function() {
  //     let caInMarginLeft = parseInt(caInner.css("margin-left"));
  //     let isAni = caInner.is(":animated");
  //     if (!isAni) {
  //       caInner.animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
  //         $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
  //         $("#carousel-inner").css("margin-left", -widthNum);
  //       });
  //     };
  //   });
  // } //actionBtn

  // $(".btn").each(function() {
  //   actionBtn($(this));
  // })

  // prev button script
  // $("#carousel-prev").click(function() {
  //   let caInMarginLeft = parseInt(caInner.css("margin-left"));
  //   let isAni = caInner.is(":animated");
  //   if (!isAni) {
  //     if (el.attr("id") === "carousel-prev") {
  //       caInner.animate({
  //           marginLeft: caInMarginLeft + widthNum
  //         }, "slow", "swing", function() {
  //           $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
  //           $("#carousel-inner").css("margin-left", -widthNum);
  //         });
  //   };
  // } else {
  //   caInner.animate({
  //       marginLeft: caInMarginLeft - widthNum
  //     }, "slow", "swing", function() {
  //       $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column");
  //       $("#carousel-inner").css("margin-left", -widthNum);
  //     }
  //   }
  // });
  // });
  // });
  //
  // initialFunc("prev");


  // next button script
  $("#carousel-next").click(function() {
    let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
    let isAni = $("#carousel-inner").is(":animated");
    if (!isAni) {
      $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function() {
        $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column");
        $("#carousel-inner").css("margin-left", -widthNum);
      })
    };
  });

  $("#carousel-prev").click(function() {
    let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
    let isAni = $("#carousel-inner").is(":animated");
    if (!isAni) {
      $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
        $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
        $("#carousel-inner").css("margin-left", -widthNum);
      })
    };
  });

  //auto slide 영역(setInterval)

  // let timerID = null;
  // function auto(){
  //   timerID = setInterval(function(){
  //     $("#carousel-next").trigger("click");
  //   },5000);
  //  return timerID;
  // };

  let auto = function(){
    timerID = setInterval(function(){
      console.log("test");
      $("#carousel-next").trigger("click");
    },3000);
    return timerID;
  };

  auto()

  $("#carousel, #carousel-prev, #carousel-next").on({
    mouseenter: function(){
      clearInterval(timerID);
    },
    mouseleave: function(){
      timerID = setInterval(function(){
        $("#carousel-next").trigger("click");
      },3000);
    }
  });

}); // end
