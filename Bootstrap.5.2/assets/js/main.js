(function ($) {
	"use strict";

  	 // Preloader

	  (function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#preloader').delay(800).fadeOut('slow');
	    });
	}());



	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		//>=, not <=
		if (scroll >= 100) {
			//clearHeader, not clearheader - caps H
			$(".header-area").addClass("is-stick");
		}else{
			$(".header-area").removeClass("is-stick");
		};
	});
	// slide-start
	$('.slider-items').owlCarousel({
		loop: true,
		margin: 12,
		nav: false,
		dots: true,
		autoplay: false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
		autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 2,
			stagePadding: 50,
			autoWidth:false,
		  },
		  600: {
			items: 5
		  },
		  1000: {
			items: 5
		  }
		}
	  })
	// slide-end

	



	
		
    // Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu, #menu').toggleClass('current');
    });

	// wow/aos-animetion-start
    var wow = new WOW(
        {
            mobile: false,
        }
    )
    wow.init();
	AOS.init();
	// wow/aos-animetion-start
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
})(jQuery);