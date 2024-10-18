$(document).ready(function () {
    const addCenterClass = (event) => {
        const items = $(event.target).find('.owl-item');
        const centerIndex = Math.floor(items.length / 2);
        items.removeClass('center');
        items.eq(event.item.index).addClass('center');
    };

    const config = {
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 },
        },
        onInitialized: addCenterClass,
        onTranslated: addCenterClass,
    };

    const initOwlCarousel = (selector, config) => {
        $(selector).owlCarousel({ ...config });
    };

    initOwlCarousel('.projects-col-list.w-dyn-items', config);
    initOwlCarousel('.projects-col-list-2.w-dyn-items', {
        ...config,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 },
        },
    });

    initOwlCarousel('.recipe-col-list.w-dyn-items', {
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 0,
        nav: false,
        loop: true,
        animateIn: true,
        responsive: {
            0: { items: 10 },
            600: { items: 10 },
            1000: { items: 10 },
            1500: { items: 10 },
        },
        onInitialized: addCenterClass,
        onTranslated: addCenterClass,
    });

    const initSplide = (selector, options) => {
        $(selector).each(function () {
            new Splide(this, options).mount();
        });
    };

    initSplide('.slider1', {
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
            991: { perPage: 5, gap: '3vw' },
            767: { perPage: 5, gap: '3vw' },
            479: { perPage: 5, gap: '3vw' },
        },
    });

    initSplide('.slider2', {
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
    });
});

