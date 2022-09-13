$(function(){
    // search btn
    $('.search_btn').on('click',function(){
        $('.search').toggle()
    })

    // banner slider
    $('.slider').slick({
        prevArrow:'<i class="icon fas fa-chevron-left"></i>',
        nextArrow:'<i class="icon fas fa-chevron-right"></i>',
        autoplay:true,
        speed:500,
        fade:true,
    })

    // clock for new offer
    $('.clock').countdown('2022/11/10', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="time"><span>%D</span><span>Days</span></div>'
          + '<div class="time"><span>%H</span><span>Hours</span></div>'
          + '<div class="time"><span>%M</span><span>Min</span></div> '
          + '<div class="time"><span>%S</span><span>Sec</span></div> '
        ));
      });

    // latest Products slider
    $('.latestProducts_slider').slick({
        prevArrow:'<i class="icon fas fa-chevron-left"></i>',
        nextArrow:'<i class="icon fas fa-chevron-right"></i>',
        autoplay:true,
        speed:500,
        slidesToScroll:2,
        slidesToShow:4,
        loop:true,
    })

    // testimonial slider 
    $('.testimonial_slider').slick({
        prevArrow:'<i class="icon fas fa-chevron-left"></i>',
        nextArrow:'<i class="icon fas fa-chevron-right"></i>',
        autoplay:true,
        speed:400,
        slidesToScroll:2,
        slidesToShow:2,
        loop:true,
    })
})