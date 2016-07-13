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
	$('.products__conteiner').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
  speed: 300,
  slidesToShow: 4,
	prevArrow: '.products__prev',
  nextArrow: '.products__next',
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
});
