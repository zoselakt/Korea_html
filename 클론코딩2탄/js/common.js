$(function() { 
  const widthNum = 275; 
  const caInner = $("#healthy .goodok .column");
  let liLeng = $("#healthy .column .inner", caInner).length;

  // li의 개수로 ul.column의 너비를 설정
  $("#healthy .goodok .column .inner").css("width", widthNum + liLeng);

  // next button script
  $(".goodoknext").click(function() {
    let caInMarginLeft = parseInt($(caInner).css("margin-left"));
    let isAni = $(caInner).is(":animated");
    if (!isAni) {
      $(caInner).animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function() {
        $("#healthy .goodok .column .inner:first a").appendTo("#healthy .goodok .column .inner");
        $(caInner).css("margin-left", -widthNum);
      })
    };
  });

  $(".goodokprev").click(function() {
    let caInMarginLeft = parseInt($(caInner).css("margin-left"));
    let isAni = $(caInner).is(":animated");
    if (!isAni) {
      $(caInner).animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
        $("#healthy .goodok .column .inner a img:last").prependTo("#healthy .goodok .column .inner");
        $(caInner).css("margin-left", -widthNum);
      })
    };
  });

  let auto = function(){
    timerID = setInterval(function(){
      $(".goodoknext").trigger("click");
    },3000);
    return timerID;
  };

  auto()

  $("#healthy .goodok, .goodokprev, .goodoknext").on({
    mouseenter: function(){
      clearInterval(timerID);
    },
    mouseleave: function(){
      timerID = setInterval(function(){
        $(".goodoknext").trigger("click");
      },3000);
    }
  });

}); // end
