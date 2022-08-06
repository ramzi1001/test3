(function ($) {
	
	"use strict";

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();

	 // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });
	
	 // Owl Carousel
    $('.slider .owl-carousel').owlCarousel({
      items:1,
      loop:true,
      autoplay:true, 
      animateOut: 'fadeOut',
      nav : true,
      navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	  ],
    })

     $('.cl-slider .owl-carousel').owlCarousel({
    items:8,
    loop:true,
    margin:80,
    dots:false,
   	autoplay:true,
   	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
            loop:true,
        }
    }
    })

     $('.sv1-slider .owl-carousel').owlCarousel({
      items:1,
      loop:true,
      autoplay:true, 
      animateOut: 'fadeOut',
    })

     $('.sv2-slider .owl-carousel').owlCarousel({
      items:1,
      loop:true,
      autoplay:true, 
      animateOut: 'fadeOut'
    })

     $('.pr-slider .owl-carousel').owlCarousel({
      items:3,
      loop:true,
      margin:20,
      autoplay:true, 
      animateOut: 'fadeOut',
      dots:false,
      nav : true,
      navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	  ],
	  responsiveClass:true,
      responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:4,
	            loop:true,
	        }
    	}
    })

    
    /*$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.slider').height();
		var header = $('#nb').height();

		if (scroll >= box - header) {
			$("#nb").addClass("background-header");
		} else {
			$("#nb").removeClass("background-header");
		}
	});*/

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			$(".header-area").addClass("background-header");
		} else {
			$(".header-area").removeClass("background-header");
		}
	});


	 // Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 130
				}, 700);
				return false;
			}
		}
	});

	/*$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 130
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}*/

		// Text Slider
		var title = ['<p>Leading World-Class Total Facilities Management Services and Engineering Solution Provider</p>','<p>To deliver highest standards of performance in Facilities Management services and Engineering solutions to our clients by providing quality and efficient services</p>','<p>Over the years, we has embarked on many project management and installation projects</p>'];
		var index = 0;

		function change_title() {
		    var x = title[index];
		    $('.main').html(x);
		    index++;
		    if (index >= title.length) { index = 0; }
		};


		function change_right() {
		    $('div').removeClass('slide-left').addClass('slide-right');
		    change_title();
		}


		function to_right() {
		    setInterval(change_right, 20000);
		};

		to_right();

	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 3000
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
    });
});
   


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);