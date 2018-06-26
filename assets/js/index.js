$(document).ready(function() {
    //sticky navigation
    $('.js--section-about').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px;'
    });

    // scroll buttons***
    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-projects').offset().top
        }, 1000)
    })
    $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top
        }, 1000)
    })

    // navigation
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // animations on scroll

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated rubberBand')
    }, {
        offset: '50%'
    })
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated pulse')
    }, {
        offset: '50%'
    })
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInUpBig')
    }, {
        offset: '50%'
    })
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated swing')
    }, {
        offset: '50%'
    })

    //  mobile navigation
    $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');
            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round')
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
            nav.slideToggle(200);
        })
        // gmaps
    var map = new GMaps({
        div: '.map',
        lat: 39.7393292,
        lng: -104.9,
        zoom: 12
    });
    map.addMarker({
        lat: 39.7393292,
        lng: -104.9869956,
        title: 'Denver, CO',
        infoWindow: {
            content: '<p>Our Denver HQ</p>'
        }
    })

    // gif hover start
    $(".gif").hover(
        function() {
            var src = $(this).attr("src");
            $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        },
        function() {
            var src = $(this).attr("src");
            $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        });

    //end

})