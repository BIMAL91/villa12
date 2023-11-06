(function ($) {
	"use strict";
  
	// Page loading animation
	$(window).on('load', function() {
	  $('#js-preloader').addClass('loaded');
	});
  
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();
  
	  if (scroll >= box - header) {
		$("header").addClass("background-header");
	  } else {
		$("header").removeClass("background-header");
	  }
	});
  
	$('.owl-banner').owlCarousel({
	  center: true,
	  items: 1,
	  loop: true,
	  nav: true,
	  dots: true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	  margin: 30,
	  responsive: {
		992: {
		  items: 1
		},
		1200: {
		  items: 1
		}
	  }
	});
  
	var width = $(window).width();
	$(window).resize(function() {
	  if (width > 767 && $(window).width() < 767) {
		location.reload();
	  } else if (width < 767 && $(window).width() > 767) {
		location.reload();
	  }
	});
  
	// Filter amenities when the page loads
	const amenitiesFilter = '.adv';
	const elem = document.querySelector('.properties-box');
	const rdn_events_list = new Isotope(elem, {
	  itemSelector: '.properties-items',
	  layoutMode: 'masonry',
	  filter: amenitiesFilter, // Filter amenities initially
	});
  
	// Event listener for the "Show Specifications" button
	document.getElementById('showSpecifications').addEventListener('click', function () {
	  const specificationsFilter = '.str';
	  rdn_events_list.arrange({
		filter: specificationsFilter, // Filter specifications when the button is clicked
	  });
  
	  // Add or remove the "is_active" class for the buttons
	  document.getElementById('showAmenities').classList.remove('is_active');
	  this.classList.add('is_active');
	});
  
	// Event listener for the "Show Amenities" button
	document.getElementById('showAmenities').addEventListener('click', function () {
	  rdn_events_list.arrange({
		filter: amenitiesFilter, // Filter amenities when the button is clicked
	  });
  
	  // Add or remove the "is_active" class for the buttons
	  document.getElementById('showSpecifications').classList.remove('is_active');
	  this.classList.add('is_active');
	});
  
	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
	  $(".menu-trigger").on('click', function() {    
		$(this).toggleClass('active');
		$('.header-area .nav').slideToggle(200);
	  });
	}
  
	// Menu elevator animation
	$('.scroll-to-section a[href*="#"]:not([href="#"])').on('click', function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  var width = $(window).width();
		  if (width < 991) {
			$('.menu-trigger').removeClass('active');
			$('.header-area .nav').slideUp(200);    
		  }                
		  $('html,body').animate({
			scrollTop: (target.offset().top) - 80
		  }, 700);
		  return false;
		}
	  }
	});
  
	// Page loading animation
	$(window).on('load', function() {
	  if ($('.cover').length){
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
  
  })(window.jQuery);
  