$(document).ready(function(){

	$('#main_slider').slick({
		dots: true,
		infinite: false
	});

	$('.tab_slider_dots li a').click(function(){
		var winWidth = $(window).width();
		var indexTabBtn = parseInt($(this).attr('data-index'));
		$('.tab_slider_dots li a').removeClass('active');
		$(this).addClass('active');

		$('.tab_slide').each(function(){
			var indexTab = parseInt($(this).attr('data-index'));
			if (indexTab == indexTabBtn && winWidth > 750) {
				$('.tab_slide').fadeOut(500);
				$(this).fadeIn(500);
			}
			else if (indexTab == indexTabBtn && winWidth <= 750) {
				$('.tab_slide').fadeOut(0);
				$(this).fadeIn(0);
			}
		});

		return false;
	});

	$('.question a').click(function(){
		$('#popup').fadeIn(500);
		return false;
	});

	$('.popup_mask, .close_popup').click(function(){
		$('#popup').fadeOut(500);
		return false;
	});

	$('.menu_btn').click(function(){
		$('.left_navigation, .content_side').toggleClass('active');
		return false;
	});

	$(window).resize(function(){
		$('.left_navigation, .content_side').removeClass('active');
	});
	$(window).scroll(function(){
		$('.left_navigation, .content_side').removeClass('active');
	});

	$('.inp_email').blur(function() {
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($(this).val())){
				$(this).css({'border' : '1px solid #7CBE15'});
			}
			else {
				$(this).css({'border' : '1px solid #CC3333'});
			}
		}
	});

	$('.popup_submit').click(function(){
		$('#popup .check').each(function(){
			if($(this).val() != '') {
				$(this).css({'border' : '1px solid #7CBE15'});
			}
			else {
				$(this).css({'border' : '1px solid #CC3333'});
			}
		});
		if($('.inp_email').val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($('.inp_email').val())){
				$('.inp_email').css({'border' : '1px solid #7CBE15'});
			}
			else {
				$('.inp_email').css({'border' : '1px solid #CC3333'});
			}
		}
	});

	$('.inp_phone').inputmask("+7(999)999-99-99");

});