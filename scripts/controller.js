
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl Carousel CSS
import 'owl.carousel'; // Owl Carousel JavaScript
import './events'

$('.white_Arrow_Vcenter').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplayHoverPause:false,
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
    autoplayHoverPause:true,
    dots:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            dotsEach: 2,
            
        },
        600:{
            items:1,
            dotsEach: 1,
        },
        1000:{
            items:1,
            dotsEach: 1,
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



let navs = document.querySelector('nav');
navs.addEventListener('click',function(e){
let nav = e.target.closest('.nav')
if(!nav) return;
let navIndicator = nav.querySelector('.navIndicator');
let subnav = nav.querySelector('.subNavs');
document.querySelectorAll('.subNavs').forEach(val=>val.style="height:0");
document.querySelectorAll('.navIndicator').forEach(val=>val.innerText="+");


if(subnav.classList.contains('active')){
    document.querySelectorAll('.subNavs').forEach(val=>val.style="height:0");
document.querySelectorAll('.navIndicator').forEach(val=>val.innerText="+");
subnav.classList.remove('active');
}else{
    subnav.style="height:auto";
    subnav.classList.add('active')
    navIndicator.innerText="-";
}



}) 






// /trash













