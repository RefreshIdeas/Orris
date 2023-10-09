import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel CSS
import "owl.carousel"; // Owl Carousel JavaScript
import "./events";
import VenoBox from "venobox";
import "venobox/dist/venobox.min.css";



$(".white_Arrow_Vcenter").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: false,
  dots: false,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".black_Arrow_Vcenter").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  dots: true,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      dotsEach: 2,
    },
    600: {
      items: 1,
      dotsEach: 1,
    },
    1000: {
      items: 1,
      dotsEach: 1,
    },
  },
});

$(".two_col_black_Arrow_Vcenter").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  dots: false,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      dotsEach: 2,
    },
    600: {
      items: 2,
      dotsEach: 2,
    },
    1000: {
      items: 2,
      dotsEach: 2,
    },
  },
});

$(".theme_dot_Hleft").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  mouseDrag: false,
  touchDrag: false,
  autoplayHoverPause: true,
  dots: true,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      dotsEach: 2,
      // mouseDrag: true,
      // touchDrag: true,
    },
    600: {
      items: 1,
      mouseDrag: true,
      touchDrag: true,
      dotsEach: 1,
    },
    1000: {
      items: 1,

      dotsEach: 1,
    },
  },
});

$(".owl-prev").html(
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>'
);
$(".owl-next").html(
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>'
);

const intserSectingElement = document.querySelectorAll('section');
let observer = new IntersectionObserver(
  (val) => {
    if (val[0].isIntersecting) {
      if (val[0].target.classList.contains("counterSection")) counterInit();
    }
  },
  { threshold: screen.width > 600 ? 0.1 : 1 }
);
intserSectingElement.forEach((val) => observer.observe(val));
// counter initfunction
function counterInit(param) {
const speed = 200;
  const counters = document.querySelectorAll(".counterUP");

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("counterNumber");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        if (value > 500) {
          setTimeout(animate, 1);
        } else {
          setTimeout(animate, 100);
        }
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
}



// toggle function globally
function addToogleEvent() {
let click = document.querySelectorAll('.clickEvent')
click.forEach((val) => {val.addEventListener('click',toggleFunc)})
};

function toggleFunc(e) {

let nameof_class_tobe_toggle = e.target.closest('.clickEvent').dataset.toggleto;
if(!nameof_class_tobe_toggle) return;
let classes_tobe_toggle = document.querySelectorAll(`.${nameof_class_tobe_toggle}`);
console.log(classes_tobe_toggle)

Array.from(classes_tobe_toggle).forEach(element =>{
  if(element.classList.contains('navigationSection')) document.querySelector('html').classList.toggle('navActive')
   element.classList.toggle('active');
  });
}
addToogleEvent();


/// nav events
let mainNav = document.querySelectorAll('.nav');
let parentDiv_subnav = document.querySelector('.subNav_block');
let allSubNavs = document.querySelectorAll('.subNavs_list');

mainNav.forEach(element =>{
  element.addEventListener('click', function(e){
    let target = e.target.closest('.nav');
    let SubNavName = target.dataset.main_nav_of;
    let subnav = document.querySelector(`.${SubNavName}`);
    allSubNavs.forEach(element => element.classList.remove('active'));
    mainNav.forEach(element => element !== target && element.classList.remove('active'));
    
    if(!parentDiv_subnav.classList.contains('active')){
      parentDiv_subnav.classList.add('active')
    }
       if(target.classList.contains('active')){
        target.classList.remove('active');
        parentDiv_subnav.classList.remove('active')

       }
       else{
        target.classList.add('active');

       }
  
    let targetPostionTop = target.getBoundingClientRect().top;
    if(screen.width > 640){
      parentDiv_subnav.style=`margin-top: ${targetPostionTop}px`;

    }
    subnav.classList.toggle('active');

    if(!SubNavName) return;
  })
})


let subNavBlock = document.querySelectorAll('.subNav_block');
subNavBlock.forEach(element=>{
  element.addEventListener('click', function(e){
    mainNav.forEach(element => element.classList.remove('active'));

  })

  
})













// veno box for pop image and video
new VenoBox({
  selctor: ".venobox",
});





// /trash

