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