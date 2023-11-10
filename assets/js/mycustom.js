(function ($) {
    "use strict";
  
    // Page loading animation
    $(window).on('load', function() {
      $('#js-preloader').addClass('loaded');
    });
  
    // Header background change on scroll
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
  
    // Owl Carousel initialization
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
  
    // Handle window resize
    var width = $(window).width();
    $(window).resize(function() {
      if (width > 767 && $(window).width() < 767) {
        location.reload();
      } else if (width < 767 && $(window).width() > 767) {
        location.reload();
      }
    });
  
    document.addEventListener('DOMContentLoaded', function () {
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
            document.getElementById('showPenthouse').classList.remove('is_active');
            this.classList.add('is_active');
        });
    
        // Event listener for the "Show Amenities" button
        document.getElementById('showAmenities').addEventListener('click', function () {
            rdn_events_list.arrange({
                filter: amenitiesFilter, // Filter amenities when the button is clicked
            });
    
            // Add or remove the "is_active" class for the buttons
            document.getElementById('showSpecifications').classList.remove('is_active');
            document.getElementById('showPenthouse').classList.remove('is_active');
            this.classList.add('is_active');
        });
    
        // Event listener for the "Show Penthouse" button
        document.getElementById('showPenthouse').addEventListener('click', function () {
            console.log('Penthouse button clicked');
            const penthouseFilter = '.rac';
            console.log('Filter:', penthouseFilter);
            rdn_events_list.arrange({
                filter: penthouseFilter,
            });
    
            // Add or remove the "is_active" class for the buttons
            document.getElementById('showSpecifications').classList.remove('is_active');
            document.getElementById('showAmenities').classList.remove('is_active');
            this.classList.add('is_active');
        });
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
      // ... your existing code for menu elevator animation
    });
  
    // Page loading animation
    $(window).on('load', function() {
      if ($('.cover').length){
        // ... your existing code for page loading animation
      }
    });
  
  })(window.jQuery);
  