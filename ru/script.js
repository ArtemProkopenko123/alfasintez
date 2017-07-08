$(document).ready(function() {

    /**************************************************************/
    if ($(window).width() > 992) {
        $('.alfasintez-catalog-section > div').on('tap', function() {
            $(this).addClass("catalogActive");
        });
    }

    /*----------------------MOBILE MENU ---------------------------*/
    $("#hamburger").click(function() {
        $(this).toggleClass('open');
        $('.bg-mobile-menu').fadeToggle(400, 'swing').toggleClass('hidden');

        $('.bg-mobile-menu').bind('touchmove', function(e) {
            e.preventDefault()
        });
    });
    $('#mobile-menu li a').on('click', function() {
        $('.bg-mobile-menu').toggleClass('hidden');
        $('#hamburger').toggleClass('open');
    });

    /*************Заказать звонок********************/
    $('nav li.green-border-btn, #mobile-menu li.green-border-btn').on('click', function() {
        $('.bg-mobile-menu').toggleClass('hidden');
        $('#hamburger').toggleClass('open');
        AvBlurScreen("on", "99999");
        $('.av-alert-popup').fadeIn().positionCenter(9999);
    });
    $('[data-close-form]').on('click', function() {
        $('.av-alert-popup, #av-blur-screen').fadeOut(500);
        $('.alfasintez-call-back-form input.inputtext').removeClass("inputError");
    });

    /*********************************************************/
    var section_5_ScrollValue = $('.section-page-5').offset().top,
        $section_2 = $('.section-page-2').offset().top,
        $section_8 = $('.section-page-8').offset().top,
        $van_offsetTop = $('.map-left-text ').offset().top;
    $windowWidth = $(window).width();

    /*---------------------- ЯКОРЯ  ---------------------------*/
    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');

        if (el == "#contacts") {
            // MapOnScroll();
            $('body,html').animate({
                scrollTop: $('#map_canvas').offset().top - 50
            }, 1000)
        } else if (el == "#ourCertificates") {
            $('body,html').animate({
                scrollTop: $('.section-page-7').offset().top - 50
            }, 1000)
        } else if (el == "#production") {
            $('body,html').animate({
                scrollTop: $('.section-page-4').offset().top - 80
            }, 1000)
        } else if (el == "#ourPartners") {
            $('body,html').animate({
                scrollTop: $(".section-page-5").offset().top - 50
            }, 1000)
        }
    });

    /*------------------ ON SCROLL ---------------------------*/
    if ($(window).width() <= 992) {
        $(window).on('scroll', function() {

            var windowBottom = $(window).scrollTop() + $(window).height() / 2;
            $('.catalog-hover, .section-page-3 > div img').each(function() {
                if ($(this).offset().top <= windowBottom) {
                    $(this).addClass("catalogActive");
                } else {
                    $(this).removeClass("catalogActive");
                }
            });

        });
    }

    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 700) {
            $('.nav-fixed').addClass("fixed");
        } else {
            $('.nav-fixed').removeClass("fixed");
        }
        if ($(window).width() >= 1025) {
            /*---------------------------- PARALAX -----------------------------------*/
            var lastScrollTop = 0,
                st = $(this).scrollTop();
            if (st > lastScrollTop) {

                st = -st
                $('.BG-1st-page').css("top", "" + st / 4 + "px");
            } else {
                $('.BG-1st-page').css("top", "" + st + "px");
            }
            lastScrollTop = st;
        }
        if ($(this).scrollTop() >= ($('.section-page-7').offset().top / 2)) {
            $('.BG-7n-page').show();
        } else {
            $('.BG-7n-page').hide();
        }



        /*------------------ eggs placeholder ---------------------------*/

        if ($(this).scrollTop() > $section_2 / 3) {
            $('.section-page-2 .line-style').addClass("setWidth")
        };
        if ($(this).scrollTop() > $section_8 / 1.18) {
            $('.section-page-8 .line-style').addClass("setWidth")
        };


        /*--------------------- VAN ANIMATION BG  ---------------------------*/
        if ($(this).scrollTop() >= $van_offsetTop / 1.3) {

            $('#van_map_img').addClass("van_animation").css("background", "url(/upload/av-alfasintez/Van.png) no-repeat right");
        } else {
            $('#van_map_img').removeClass("van_animation")
        };

    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= $('.section-page-9').offset().top / 1.5) {
            MapOnScroll();
        }

    });
    /*------------------ eggs placeholder ---------------------------*/

    if ($(window).scrollTop() > $section_2 / 3) {
        $('.section-page-2 .line-style').addClass("setWidth")
    };
    if ($(window).scrollTop() > $section_8 / 1.18) {
        $('.section-page-8 .line-style').addClass("setWidth")
    };

    /*************Заказать звонок********************/
    $('nav li.green-border-btn').on('click', function() {

        AvBlurScreen("on", "9999");
        $('.av-alert-popup').fadeIn().positionCenter(9999);
    });
    $('[close-form]').on('click', function() {
        $('.av-alert-popup, #av-blur-screen').fadeOut(500);
        $('.alfasintez-call-back-form input.inputtext').removeClass("inputError");
    });
    /*************Ссылка переключения языка********************/
    $('#lang-toggle li.active > a').removeAttr("href");


    var window_size = $(window).height(),
        $mainTextHeight = $('.main-text-1st-page').height();
    $('.BG-1st-page, .container-1st-page').height(window_size - 3 + "px")
    if (window_size > 700) {
        $('.main-text-1st-page').css("top", "" + (window_size / 5) + "px")
    } else {
        $('.main-text-1st-page').css("top", "" + (window_size / 10) + "px")
    }



    /*--------------------------------- MAP  -----------------------------------*/
    var map, countMap = 1;

    function MapOnScroll() {
        if (countMap <= 1) {
            //google.maps.event.addDomListener(window, 'load', initialize);
            initialize();
        }
    }

    function initialize() {

        var map = new google.maps.Map(document.getElementById("map_canvas"), {
            center: {
                lat: 48.470727,
                lng: 35.027753
            },
            zoom: 15,
            scrollwheel: false,
            zoomControl: false,
            rotateControl: false,
            scaleControl: false,
            mapTypeControl: false,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false
        });

        setMarkers(map);
        if ($(document).width() < 993) {
            var center = {
                lat: 48.469087,
                lng: 35.041350
            };
            map.setCenter(center);
        }
        if ($(document).width() < 769) {
            var center = {
                lat: 48.476087,
                lng: 35.046350
            };
            map.setCenter(center);
        }
        countMap++;
    }



    function setMarkers(map) {
        //  if ($('#map_canvas').is('[markers-seted]')) return;
        ///// координаты точек!!!!!
        var beaches = [
            [' Сичеславская набережная 27<br>(бывшая набережная Ленина Lenina)<br>Днепр, Украина<br>Телефон: <a href="tel:+380562350026" style="color: dodgerblue !important"">+380562350026</a>', 48.470727, 35.047753, 4]
        ];
        var image = {
            url: '/upload/av-alfasintez/marker.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(30, 65),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 22).
            anchor: new google.maps.Point(10, 35)
        };
        for (var i = 0; i < beaches.length; i++) {
            var beach = beaches[i];
            var marker = new google.maps.Marker({
                position: {
                    lat: beach[1],
                    lng: beach[2]
                },
                map: map,
                animation: google.maps.Animation.DROP,
                icon: image,
                content: beach[0],
                zIndex: beach[3]
            });
            var infowindow = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', (function(marker, i, infowindow) {
                return function() {
                    infowindow.setContent(this.content);
                    infowindow.open(map, this);
                };
            })(marker, i, infowindow));
        }
        $('#map_canvas').attr('markers-seted', true);
    };

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }


    /*--------------------------------- END  -----------------------------------*/

    $(window).on("resize", function() {
        var window_size = $(window).height(),
            $mainTextHeight = $('.main-text-1st-page').height(),
            windowHeight2 = window.innerWidth;


        $('.BG-1st-page, .container-1st-page').height(window_size - 3 + "px")
        if (window_size > 700) {
            $('.main-text-1st-page').css("top", "" + (window_size / 7) + "px")
        } else {
            $('.main-text-1st-page').css("top", "" + (window_size / 10) + "px")
        }
        $('.av-alert-popup').positionCenter(9999);

        if ($(window).width() <= 992) {
            $(window).on('scroll', function() {
                var windowBottom = $(window).scrollTop() + $(window).height() / 2;
                $('.catalog-hover').each(function() {
                    if ($(this).offset().top <= windowBottom) {
                        $(this).addClass("catalogActive");
                    } else {
                        $(this).removeClass("catalogActive");
                    }
                });
            });
        }
    });


});

// blur screen
function AvBlurScreen(value, zIndex) {
    var $blurScreen = $('#av-blur-screen');
    if (!zIndex) zIndex = '100';

    if (value == 'on') {
        $blurScreen.remove();
        $('<div id="av-blur-screen"></div>')
            .css({
                "z-index": zIndex
            })
            .appendTo('body')
            .fadeTo(500, 0.7)
            .click(function() {
                $('.av-alert-popup').fadeOut(500);
                $(this).fadeTo(500, 0, function() {
                    $(this).remove();
                    $('#av-blur-screen').remove();
                });
            });
    } else if (value == 'off')
        $blurScreen.fadeTo(500, 0, function() {
            $blurScreen.remove();
        });
}
/* ------------------------------------------- */
/* --------- object position center ---------- */
/* ------------------------------------------- */
jQuery.fn.positionCenter = function(zIndex) {
    if (this.css("position") != 'absolute') this.css({
        "position": 'absolute'
    });

    var
        screenWidth = $(window).width(),
        screenHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        scrollLeft = $(window).scrollLeft(),
        formWidth = this.outerWidth(),
        formHeight = this.outerHeight(),
        appliedZindex = parseInt(this.css("z-index")),
        cordinateX, cordinateY;

    if (!appliedZindex || appliedZindex < 1) appliedZindex = parseInt(zIndex);
    if (!appliedZindex || appliedZindex < 1) appliedZindex = 100;

    if (screenWidth <= formWidth + 5) cordinateX = 0;
    else cordinateX = scrollLeft + (screenWidth - formWidth) / 2;
    if (formHeight < screenHeight) cordinateY = scrollTop + (screenHeight - formHeight) / 2;
    else cordinateY = scrollTop + 50;

    return this
        .css({
            "z-index": appliedZindex
        })
        .offset({
            left: cordinateX,
            top: cordinateY
        });
};