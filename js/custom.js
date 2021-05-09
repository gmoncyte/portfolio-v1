$(window).load(function () {
    var timeout;

    $('.logo-container').click(function (e) {
        if ($('.box-headline').hasClass('on')) {
            $('.box-headline').removeClass('on')
            
            clearTimeout(timeout);

            timeout = setTimeout(function () {
                if (!$('.box-headline').hasClass('on')) {
                    $('.logo-container').trigger('click');
                }
            }, 2500);
        
        } else {
            $('.box-headline').addClass('on');
        }
    });

    timeout = setTimeout(function () {
        if (!$('.box-headline').hasClass('on')) {
            $('.logo-container').trigger('click');
        }
    }, 2500);

    // preloader
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top'),
        $logo = $('.box-logo.index')

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }

        if($(this).scrollTop() > visualViewport.height * 2 / 3) {
            $logo.removeClass('fade-out');
        } else {
            $logo.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
});