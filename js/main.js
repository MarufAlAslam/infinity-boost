AOS.init()
$('.testimonialSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="btn prevbtn shadow"> <i class="fa fa-angle-left text-white"></i> </button>',
    nextArrow: '<button class="btn nextbtn shadow"> <i class="fa fa-angle-right text-white"></i> </button>'
  });


  $('.section5 .card1').mousemove(function(e){
      var mouseX = -50+(e.pageX/20*1/15)
      var mouseY = 15+(e.pageY/20*-1/15)
      console.log(mouseX)
    $('.card1 .weapon').css({
        transform: "translateX("+mouseX+"%) translateY("+mouseY+"%)",
    })
  })


  $('.section5 .card2').mousemove(function(e){
    var mouseX = -48+(e.pageX/20*-1/15)
    var mouseY = 15+(e.pageY/20*-1/15)
    console.log(mouseX)
  $('.card2 .weapon').css({
      transform: "translateX("+mouseX+"%) translateY("+mouseY+"%)",
  })
})

$('.section5 .card1').mouseleave(function(e){
    // var mouseX = -80+(e.pageX*1/15)
    // var mouseY = 290+(e.pageY*-1/15)
    // console.log(mouseX)
  $('.card1 .weapon').css({
      transform: "translateX(-50%) translateY(0%)",
  })
})

$('.section5 .card2').mouseleave(function(e){
    // var mouseX = -80+(e.pageX*1/15)
    // var mouseY = 290+(e.pageY*-1/15)
    // console.log(mouseX)
  $('.card2 .weapon').css({
      transform: "translateX(-50%) translateY(0%)",
  })
})