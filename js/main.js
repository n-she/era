$(function () {

    var controller = new ScrollMagic.Controller();

    /* Init object fit polyfill */
    /* To make it work, add 'font-family: 'object-fit: cover;';' to image */
    if (window.objectFitImages) {
        window.objectFitImages();
    }


    $('.scroll-link').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html,body').animate(
            {
                scrollTop: $(href).offset().top
            },
            1000
        );
    });

    $('.intro-slider').slick({
        arrows: false,
        dots: true,
         lazyLoad: 'ondemand'
    });

    var lazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });

    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });

});

$(window).on('load', function () {

});