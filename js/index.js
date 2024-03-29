// Preloader Js

$(window).on("load", function () {
    $('.pre-main').delay(2000).fadeOut();
    $('.pre-main .preloader').delay(2000).fadeOut();
    $('.pre-main span:first-of-type').css({
        'left': '-50%'
    })
    $('.pre-main span:last-of-type').css({
        'right': '-50%'

    })

})

// Sticky Menu Js

$(window).scroll(function () {
    var scrooling = $(this).scrollTop();
    if (scrooling > 400) {
        $('.scrollTop').slideDown();
    } else {
        $('.scrollTop').slideUp()
    };

    if (scrooling > 300) {
        $('.navbar').addClass('bg');
    } else {
        $('.navbar').removeClass('bg');
    };

    if (scrooling > 300) {
        $('.small-menu').addClass('off-bg');
    } else {
        $('.small-menu').removeClass('off-bg');
    };

});

$('.scrollTop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 2000)
});

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500, );
            return false;
        }
    }
});


// Fixed Nav




// Banner SLider
$('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: '<i class="fa fa-angle-left banner-prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right banner-next" aria-hidden="true"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
        }
    }]
});


// Testimonial SLider

$('.testimonial-slider').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});

// Wow Js

new WOW().init();

// init Isotope

var mixer = mixitup('.gallery-image');

// Fillter Button Actice Class

$('.gallery-menu ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// Venobox Js

$('.venobox').venobox();




// Countdown Timer

// var flipdown = new FlipDown(2022, 1, 1);
// flipdown.start();
document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date('December 01, 2023').getTime() / 1000);

    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

    // Show version number
    // var ver = document.getElementById('ver');
    // ver.innerHTML = flipdown.version;
});