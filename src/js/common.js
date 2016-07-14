$(document).ready(function() {
// слайдер для headline
	$('.headline__carusel').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
  speed: 300,
  slidesToShow: 1,
	prevArrow: '.headline__prev',
  nextArrow: '.headline__next',
	});

// слайдер для decor
	$('.decor__carusel').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
  speed: 300,
  slidesToShow: 1,
	prevArrow: '.decor__prev',
  nextArrow: '.decor__next',
	});

// слайдер для products
	$('.products__container').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
  speed: 300,
  slidesToShow: 4,
	prevArrow: '.products__prev',
  nextArrow: '.products__next',
	responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
      }
    },
		{
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
	});

// слайд-шоу блоков с разными background
	$('.style__slides').slick({
  dots: false,
  infinite: true,
	arrows: false,
	autoplay: true,
	speed: 500,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear'
	});

	$('.js-btn-nav').on('click', function(){
		var menu = $('.header__menu');
		menu.toggleClass('open-menu')
	});
});
