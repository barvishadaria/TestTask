$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        touchDrag: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        dots: true,
        nav: true,
        navText: [ '', ' ' ],
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
            },

            768: {
                items: 2,
                touchDrag: true,
            },

            992: {
                items: 3,
                touchDrag: true,
            },

            1200: {
                items: 3,
                center: true,
            }
        }
    });

    let show = true;
    $(window).on('scroll', function () {

        if(!show) return false;

        let w_top = $(window).scrollTop();
        let e_top = $('#counter').offset().top;

        console.log(w_top + " " + e_top);

        if (w_top + 400 >= e_top) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            show = false;
        }
    });

    $(".offset").click(function() {
        let href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });

    $('.trigger_menu').click(function () {
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() > 900) {
            $('nav ul').removeAttr('style');
        }
    });
});

