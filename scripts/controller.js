
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl Carousel CSS
import 'owl.carousel'; // Owl Carousel JavaScript
import './events'

$('.white_Arrow_Vcenter').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$( ".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>');
$( ".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>');


$('.black_Arrow_Vcenter').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$( ".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>');
$( ".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>');



const counters = document.querySelectorAll('.counterUP');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('counterNumber');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          if(value > 500){
            setTimeout(animate, 1);
          }else{
            setTimeout(animate, 100);
          }
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});





var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    dots:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
   
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$('.our_customer_speak').owlCarousel({
    loop:true,
    items:2,
    margin:10,
    nav:true,
    dots:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$( ".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>');
$( ".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>');

