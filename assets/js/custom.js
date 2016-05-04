
$(document).ready(function() {

	smoothScroll.init();
	var s = skrollr.init({forceHeight: false});
	
	$('a.home').hover(function() {
		$('.line').css('margin-left', '0px');
	});

	$('a.countdown').hover(function() {
		$('.line').css('margin-left', '90px');
	});

	$('a.archive').hover(function() {
		$('.line').css('margin-left', '180px');
	});

	$('a.portfolio').hover(function() {
		$('.line').css('margin-left', '270px');
	});

	var wHeight = $(window).height();
	$('.home').css('height', wHeight);

	$(window).resize(function(){
		wHeight = $(window).height();
		$('.home').css('height', wHeight);
	});

	$('.clock').countdown('2016/05/04 18:00:00', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<span>%w</span>'
		+ '<span>%d</span>'
		+ '<span>%H</span>'
		+ '<span>%M</span>'
		+ '<span>%S</span>'));
	});

	$(".art").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		draggable: true,
		arrows: false
		// prevArrow: '<img src="assets/img/chevron-left.png" class="slick-prev" />',
		// nextArrow: '<img src="assets/img/chevron-right.png" class="slick-next" />'
	});

	setTimeout(function(){
		$('.logo *').animate({'opacity': 1}, 1000)
	}, 200);
	setTimeout(function(){
		$('.copy p').animate({'opacity': 1}, 1000)
	}, 1000);

});

