// Slick start

$('.hero-blosk').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
    dots:true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});


// Community list slick

$('.community__list').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    variableWidth: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,

            }
        }
    ]
});


// Brand slick js

$('.brand__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});