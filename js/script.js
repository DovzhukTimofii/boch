$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    arrows:false,
                } 
            },
        ]
    });
    
    $('.characteristics__slider').slick({
        slidesToShow: 4,
        arrows:true,
        responsive:[
            {
                breakpoint:  768,
                settings: {
                    slidesToShow: 1,
                    arrows:true,
                } 
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows:true,
                } 
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $('.characteristics__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const characteristicsNumber =  document.querySelector('.characteristics__number');
        characteristicsNumber.innerHTML = `
            <span class="characteristics__number">${currentSlide}/5</span>
        `
        
    })
});