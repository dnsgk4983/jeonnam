


// 메인 메뉴 

(function () {
  $('body').progressTracker({
    linking: true,
    tooltip: "constant",
    negativeTolerance: 0,
    positiveTolerance: 0,
    displayWhenActive: true,
    disableBelow: 1200
  });

})();

$(function () {
  $('.section02-slick').slick({
    slide: 'div',
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    vertical: false,
    prevArrow: "<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
    dotsClass: "slick-dots",
    draggable: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {

          slidesToShow: 1
        }
      }

    ]

  });

  var owl = $('#section05-bg .owl-carousel');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: false
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2500]);
    $('.stop').css('display', 'block');
    $('.play').css('display', 'none');
  });
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay');
    $('.stop').css('display', 'none');
    $('.play').css('display', 'block');
  });
  $('.prevBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  $('.nextBtn').click(function () {
    owl.trigger('next.owl.carousel', [300]);
  });



  $(".open-menu-icon").on("click", function () {
    $(".main-nav-outer").addClass("open-menu");
    $(".main-nav-aside").addClass("open");
  });


  $(".main-nav-aside").on("click", function () {
    $(".main-nav-outer").removeClass("open-menu");
    $(".main-nav-aside").removeClass("open");
  });


  $(".close-menu-icon").on("click", function () {
    $(".main-nav-outer").removeClass("open-menu");
  });

});








// program slick
