(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    // Hero Slider
    var swiper = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next-cus',
            prevEl: '.swiper-button-prev-cus'
        }
    });

})(jQuery);

