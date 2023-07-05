$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{ 
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})

    ScrollReveal().reveal('.headline', { delay: 500 },  { easing: 'ease-in' }) ;

    


