$(function () {
    // search btn
    $('.search_btn').on('click', function () {
        $('.search').toggle()
    })
    // fixed navigation
    $(window).on('scroll',function(){
        var scrollPosition=$(window).scrollTop()
        if(scrollPosition >400){
            $('#navigation').addClass('fixed')
        }
        else{
            $('#navigation').removeClass('fixed')
        }
    })
    // banner slider
    $('.slider').slick({
        prevArrow: '<i class="icon fas fa-chevron-left"></i>',
        nextArrow: '<i class="icon fas fa-chevron-right"></i>',
        autoplay: true,
        speed: 600,
        fade: true,
    })

    // clock for new offer
    $('.clock').countdown('2022/11/10', function (event) {
        var $this = $(this).html(event.strftime(''
            + '<div class="time"><span>%D</span><span>Days</span></div>'
            + '<div class="time"><span>%H</span><span>Hours</span></div>'
            + '<div class="time"><span>%M</span><span>Min</span></div> '
            + '<div class="time"><span>%S</span><span>Sec</span></div> '
        ));
    });

    // latest Products slider
    $('.latestProducts_slider').slick({
        prevArrow: '<i class="icon fas fa-chevron-left"></i>',
        nextArrow: '<i class="icon fas fa-chevron-right"></i>',
        autoplay: true,
        speed: 600,
        slidesToScroll: 2,
        slidesToShow: 4,
        loop: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll:1,
                    slidesToShow:1,
                }
            }
        ]
    })

    // testimonial slider 
    $('.testimonial_slider').slick({
        prevArrow: '<i class="icon fas fa-chevron-left"></i>',
        nextArrow: '<i class="icon fas fa-chevron-right"></i>',
        autoplay: true,
        speed: 600,
        slidesToScroll: 2,
        slidesToShow: 2,
        loop: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }

            }
        ]
    })

})
new VenoBox();