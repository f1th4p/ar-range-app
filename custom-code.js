document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href*="arwall.ar-range.app"]').forEach(function (link) {
        link.setAttribute('target', '_blank');
    });
});


//<script src="https://cdn.jsdelivr.net/gh/f1th4p/ar-range-app@refs/heads/main/arwalltarget.min.js"></script>

//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

$('.projects-col-list.w-dyn-items').owlCarousel({
    autoplaySpeed: 2000,
    slideTransition: 'ease',
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    /*navText: [" < div class = 'nav-btn prev-slide' >< /div>", " < div class = 'nav-btn next-slide' >< /div>"],*/
    items: 1,
    responsive: {
        0: {
            autoplay: false,
            items: 1
        },
        768: {
            autoplay: true,
            items: 2
        },
        1000: {
            autoplay: true,
            items: 3
        }
    },
    onInitialized: addCenterClass,
    onTranslated: addCenterClass
});
$('.projects-col-list-2.w-dyn-items').owlCarousel({
    autoplaySpeed: 2000,
    slideTransition: 'ease',
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    /*navText: [" < div class = 'nav-btn prev-slide' >< /div>", " < div class = 'nav-btn next-slide' >< /div>"],*/
    /*navText: [""],*/
    items: 1,
    responsive: {
        0: {
            autoplay: false,
            items: 1
        },
        600: {
            autoplay: true,
            items: 2
        },
        1000: {
            autoplay: true,
            items: 4
        }
    },
    onInitialized: addCenterClass,
    onTranslated: addCenterClass
});
$('.recipe-col-list.w-dyn-items').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 0,
    nav: false,
    loop: true,
    animateIn: true,
    /*navText: [" < div class = 'nav-btn prev-slide' >< /div>", " < div class = 'nav-btn next-slide' >< /div>"],*/
    navText: [""],
    responsive: {
        0: {
            items: 10
        },
        600: {
            items: 10
        },
        1000: {
            items: 10
        },
        1500: {
            items: 10
        }
    },
    onInitialized: addCenterClass,
    onTranslated: addCenterClass
});

function addCenterClass(event) {
    var items = $(event.target).find('.owl-item');
    var centerIndex = Math.floor(items.length / 2);
    items.removeClass('center');
    //items.eq(centerIndex).addClass('center');
    items.eq(event.item.index).addClass('center');
}

//<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js"></script>
function slider1() {
    let splides = $('.slider1');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            autoplay: true,
            perPage: 3,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: false, // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 60, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: false, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 5,
                    gap: '3vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 5,
                    gap: '3vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 5,
                    gap: '3vw',
                }
            }
        }).mount();
    }
}
slider1();

function slider2() {
    let splides = $('.slider2');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            easing: 'ease',
            pauseOnFocus: false,
            autoplay: true,
            interval: 1500,
            perPage: 6,
            perMove: 1,
            focus: 'center', // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '1em', // space between slides
            arrows: false, // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 1000, // transition speed in miliseconds
            dragAngleThreshold: 80, // default is 30
            autoWidth: true, // for cards with differing widths
            rewind: false, // go back to beginning when reach end
            rewindSpeed: 0,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false,

            /*breakpoints: {
                991: {
                    // Tablet
                    perPage: 5,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 5,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 5,
                    gap: '4vw',
                }
            }*/

        }).mount();
    }
}
slider2();
//<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>