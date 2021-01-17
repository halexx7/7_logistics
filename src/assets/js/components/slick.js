/* https://kenwheeler.github.io/slick/ */

let introSlider = $('#introSlider');
let rewiewsSlider = $('#rewiewsSlider');


/* Intro Slider */
introSlider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 2500,
  rows: 0
});


$('#introSliderPrev').on('click', function() {
    introSlider.slick('slickPrev');
});

$('#introSliderNext').on('click', function() {
    introSlider.slick('slickNext');
});


/* Rewiews Slider */
rewiewsSlider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 4000,
  rows: 0
});



