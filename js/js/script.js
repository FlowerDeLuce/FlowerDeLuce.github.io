$(document).ready(function() {
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		$('.home__heading').css({
			'transform' :'translate(0%,' + st/4 +'%)'
		})
	});
		
	
    $(".header-container").sticky({topSpacing:0});

  	$('.main-menu--mobile').click( function(){
		$(this).toggleClass('active');
		$('.main-menu__list').toggleClass('active');
	});

	
	$('.main-menu__list').localScroll();


	$('a.scroll-down').click(function(){

var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});


});