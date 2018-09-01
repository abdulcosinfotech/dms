
$(function() {

    // ------------------------------------------------------- //
    // Navbar Collapse when Click on link 
    // ------------------------------------------------------- //

    $(document).ready(function() {
        $(".navbar-nav li a").click(function(e) {
            $(".navbar-collapse").collapse('hide');
            // $(".navbar-toggler").removeClass('active');
        });        
    });

    // ------------------------------------------------------- //
    // Single Page Nav
    // ------------------------------------------------------- //

    $('#nav').singlePageNav({
        offset: $('#nav').outerHeight()
        , speed: 2000
        , filter: ':not(.external)'
        , updateHash: true
    });

    // ------------------------------------------------------- //
    // Typed Animation
    // ------------------------------------------------------- //

    var typed = new Typed(".u-text-animation.u-text-animation--typing", {
        strings: ["more professional.", "perfect in every way.", "astonishing."],
        typeSpeed: 60,
        loop: true,
        backSpeed: 25,
        backDelay: 1500
    });

    // ------------------------------------------------------- //
    // Scroll Header
    // ------------------------------------------------------- //

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 20) {
            $('.header').addClass('scrollUp');
            /*$('.header').addClass('navbar-light');
            $('.header').removeClass('navbar-dark');*/
        } else {
            $('.header').removeClass('scrollUp');
            
            // $('.header').removeClass('navbar-light');
            // $('.header').addClass('navbar-dark');
        };
        if ($(window).scrollTop() >= 20) {
            $('.header-inner').addClass('scrollUp');
        } else {
            $('.header-inner').removeClass('scrollUp');
        }
    });

    // ------------------------------------------------------- //
    // Navbar Toggler Button
    // ------------------------------------------------------- //
    $('.navbar .navbar-toggler').on('click', function(e) {
        $(this).toggleClass('active');
        // e.preventDefault();
    });

 
    // ------------------------------------------------------- //
    // Loader
    // ------------------------------------------------------- //

    $('body').addClass('overflow-hidden');

    $(document).ready(function() {
        $('.ars-loader-wrap').addClass('is-hidden');
        $('body').removeClass('overflow-hidden');
    });
   


});