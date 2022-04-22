$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");

        }


    });
    // slide-up script

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });




    //toggle menu/navbar sript
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Know about your body", "Care your health", "Be Healthy"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Why is it important?", "All you need to know..", "Know before you eat!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                itmes: 1,
                nav: false
            },
            600: {
                itmes: 2,
                nav: false
            },
            1000: {
                itmes: 3,
                nav: false
            }
        }

    });

});

