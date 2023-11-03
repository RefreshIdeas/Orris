import "owl.carousel"; // Owl Carousel JavaScript
import "./events";
import VenoBox from "venobox";

$(".white_Arrow_Vcenter").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
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

$(".featured_projects").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  dots: true,
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
      margin: 30,
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

  autoplayHoverPause: true,
  dots: true,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      touchDrag: true,
    },
    600: {
      items: 1,
      mouseDrag: true,
      touchDrag: true,
    },
    1000: {
      items: 1,
      mouseDrag: false,
      touchDrag: false,
    },
  },
});

$(".testimonial_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
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
      items: 2,
    },
  },
});

$(".owl-prev").html(
  `<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.6367 0.474155L0.496906 18.7939C0.178308 19.1156 0 19.5472 0 19.9966C0 20.4459 0.178308 20.8775 0.496906 21.1993L18.6367 39.5258C18.7851 39.6759 18.9626 39.7952 19.1586 39.8766C19.3546 39.958 19.5652 40 19.7779 40C19.9907 40 20.2012 39.958 20.3972 39.8766C20.5932 39.7952 20.7707 39.6759 20.9191 39.5258C21.2244 39.2181 21.3953 38.805 21.3953 38.3748C21.3953 37.9447 21.2244 37.5316 20.9191 37.2238L3.86093 19.9966L20.9191 2.77273C21.2234 2.46516 21.3936 2.05278 21.3936 1.62344C21.3936 1.1941 21.2234 0.78173 20.9191 0.474155C20.7707 0.324098 20.5932 0.204831 20.3972 0.123394C20.2012 0.0419568 19.9907 0 19.7779 0C19.5652 0 19.3546 0.0419568 19.1586 0.123394C18.9626 0.204831 18.7851 0.324098 18.6367 0.474155Z" fill="#3A3947"/>
  </svg>`
);
$(".owl-next").html(
  `<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.36327 0.474155L21.5031 18.7939C21.8217 19.1156 22 19.5472 22 19.9966C22 20.4459 21.8217 20.8775 21.5031 21.1993L3.36327 39.5258C3.21486 39.6759 3.03742 39.7952 2.84142 39.8766C2.64542 39.958 2.43483 40 2.22209 40C2.00935 40 1.79876 39.958 1.60276 39.8766C1.40676 39.7952 1.22932 39.6759 1.08091 39.5258C0.775585 39.2181 0.60465 38.805 0.60465 38.3748C0.60465 37.9447 0.775585 37.5316 1.08091 37.2238L18.1391 19.9966L1.08091 2.77273C0.776632 2.46516 0.606359 2.05278 0.606359 1.62344C0.606359 1.1941 0.776632 0.78173 1.08091 0.474155C1.22932 0.324098 1.40676 0.204831 1.60276 0.123394C1.79876 0.0419568 2.00935 0 2.22209 0C2.43483 0 2.64542 0.0419568 2.84142 0.123394C3.03742 0.204831 3.21486 0.324098 3.36327 0.474155Z" fill="#3A3947"/>
    </svg>`
);

const options = {
  rootMargin: screen.width > 600 ? "-10px" : "0px",
  threshold:screen.width > 600 ? 0.7 : 0.1,
};

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // FOR ANIMATED
      entry.target.classList.add("active");

      // FOR COUNTER
      if (entry.target.classList.contains("counterSection")) counterInit();
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, options);

document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll(".animate");
  targetElements.forEach((element) => observer.observe(element));
});

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
        if (value < 10) {
          setTimeout(animate, 400);
        } else if (value <= 50 && value >= 10) {
          setTimeout(animate, 200);
        } else {
          setTimeout(animate, 50);
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
  let click = document.querySelectorAll(".clickEvent");
  click.forEach((val) => {
    val.addEventListener("click", toggleFunc);
  });
}

function toggleFunc(e) {
  let nameof_class_tobe_toggle =
    e.target.closest(".clickEvent").dataset.toggleto;
  if (!nameof_class_tobe_toggle) return;
  let classes_tobe_toggle = document.querySelectorAll(
    `.${nameof_class_tobe_toggle}`
  );
  console.log(classes_tobe_toggle);

  Array.from(classes_tobe_toggle).forEach((element) => {
    if (element.classList.contains("navigationSection"))
      document.querySelector("html").classList.toggle("navActive");
    element.classList.toggle("active");
  });
}
addToogleEvent();

/// nav events
let mainNav = document.querySelectorAll(".nav");
let parentDiv_subnav = document.querySelector(".subNav_block");
let allSubNavs = document.querySelectorAll(".subNavs_list");

mainNav.forEach((element) => {
  element.addEventListener("click", function (e) {
    let target = e.target.closest(".nav");
    let SubNavName = target.dataset.main_nav_of;
    let subnav = document.querySelector(`.${SubNavName}`);
    allSubNavs.forEach((element) => element.classList.remove("active"));
    mainNav.forEach(
      (element) => element !== target && element.classList.remove("active")
    );

    if (!parentDiv_subnav.classList.contains("active")) {
      parentDiv_subnav.classList.add("active");
    }
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      parentDiv_subnav.classList.remove("active");
    } else {
      target.classList.add("active");
    }

    let targetPostionTop = target.getBoundingClientRect().top;
    if (screen.width > 640) {
      parentDiv_subnav.style = `margin-top: ${targetPostionTop}px`;
    }
    subnav.classList.toggle("active");

    if (!SubNavName) return;
  });
});

let subNavBlock = document.querySelectorAll(".subNav_block");
subNavBlock.forEach((element) => {
  element.addEventListener("click", function (e) {
    mainNav.forEach((element) => element.classList.remove("active"));
  });
});

// veno box for pop image and video
new VenoBox({
  selctor: ".venobox",
});

// mouse move event
// document.body.addEventListener("mousemove", function (e) {
//   console.log(
//     `${e.clientX}
//     ${e.clientY}`
//   );
// });

// /trash
