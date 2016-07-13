$(document).ready(function() {

	$('.carusel').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
  speed: 300,
  slidesToShow: 1,
	prevArrow: '.prev',
  nextArrow: '.next',
	});
	$('.products__conteiner').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
  speed: 300,
  slidesToShow: 4,
	prevArrow: '.products__prev',
  nextArrow: '.products__next',
	});
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
