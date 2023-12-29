import "../content/scss/site.scss";

import "owl.carousel"; // Owl Carousel JavaScript
import "./events";
import VenoBox from "venobox";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ReadMore } from "./readmore";
import { tabs } from "./tabs";
import "./customScroll";
import { accordianInit } from "./accordian";
gsap.registerPlugin(ScrollTrigger);

// smooth scroll
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  {
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    991: {
      margin: 80,
      items: 1,
      dots: false,
    },
    1280: {
      margin: 100,
      dots: false,
      items: 1,
    },
    1536: {
      margin: 200,
      dots: false,
      items: 1,
    },
  },
});

$(".galery_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    991: {
      margin: 80,
      items: 1,
    },
    1280: {
      margin: 100,
      items: 1,
    },
    1536: {
      margin: 200,
      items: 1,
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
  dotsEach: 2,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      nav: false,
      dotsEach: 1,
      margin: 20,
      items: 4,
    },
  },
});

$(".what_we_do").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  onDrag: false,
  dots: true,
  dotsEach: 2,
  onInitialized: function (event) {
    var currentItem = event.item.index;
    var prevItem =
      currentItem - 1 >= 0 ? currentItem - 1 : event.item.count - 1;

    // Remove the class from all items
    $(".what_we_do .owl-item").removeClass("previous-slide");

    // Add the class to the previous slide
    $(".what_we_do .owl-item").eq(prevItem).addClass("previous-slide");
  },
  onTranslate: function (event) {
    var currentItem = event.item.index;
    var prevItem =
      currentItem - 1 >= 0 ? currentItem - 1 : event.item.count - 1;

    // Remove the class from all items
    $(".what_we_do .owl-item").removeClass("previous-slide");

    // Add the class to the previous slide
    $(".what_we_do .owl-item").eq(prevItem).addClass("previous-slide");
  },
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      center: true,
      touchDrag: false,
      mouseDrag: false,
      dots: false,
      margin: 10,
      items: 5,
    },
  },
});

$(".financialPartners").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  dotsEach: 2,
  autoplay: true,
  touchDrag: false,
  mouseDrag: false,

  slideTransition: "linear",
  autoplaySpeed: 5000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

$(".specification_slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  dotsEach: 2,
  autoplay: true,

  slideTransition: "linear",
  autoplaySpeed: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      margin: 20,
      items: 3,
    },
  },
});

$(".owl-prev").html(
  `
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector" d="M13.5 3.11083V3.11161L13.5 15.3884L13.5 15.3892C13.5006 15.7713 13.3848 16.1487 13.1619 16.4779C12.9388 16.8073 12.6164 17.0764 12.228 17.2493C11.7509 17.4583 11.2181 17.5396 10.691 17.482C10.1647 17.4245 9.66971 17.2314 9.26161 16.9285L1.2626 10.7962C1.02045 10.6003 0.828869 10.3608 0.69834 10.0953C0.567108 9.82838 0.5 9.54024 0.5 9.25C0.5 8.95976 0.567108 8.67162 0.69834 8.40471C0.828868 8.13923 1.02045 7.89975 1.2626 7.70382L9.2616 1.57149C9.66971 1.2686 10.1647 1.07552 10.691 1.01801C11.2181 0.960424 11.751 1.04167 12.2281 1.25072C12.6164 1.42364 12.9388 1.69267 13.1619 2.02206C13.3848 2.35133 13.5006 2.72873 13.5 3.11083ZM14 3.11161L14 15.3884C14.0008 15.8731 13.8537 16.348 13.5759 16.7583L14 3.11161Z" stroke="#007A7F"/>
    </svg>
    `
);
$(".owl-next").html(
  `
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector" d="M0.500003 14.8892V14.8884L0.500004 2.61161L0.500002 2.61083C0.499407 2.22873 0.615159 1.85133 0.838146 1.52206C1.06122 1.19265 1.38362 0.923612 1.77199 0.750693C2.24905 0.541662 2.78192 0.460426 3.30901 0.518016C3.8353 0.575518 4.33029 0.768597 4.73839 1.07149L12.7374 7.20382C12.9796 7.39974 13.1711 7.63923 13.3017 7.90471C13.4329 8.17162 13.5 8.45976 13.5 8.75C13.5 9.04024 13.4329 9.32838 13.3017 9.59529C13.1711 9.86077 12.9796 10.1003 12.7374 10.2962L4.7384 16.4285C4.33029 16.7314 3.83531 16.9245 3.30902 16.982C2.7819 17.0396 2.24901 16.9583 1.77192 16.7493C1.38359 16.5764 1.06121 16.3073 0.838146 15.9779C0.615159 15.6487 0.499407 15.2713 0.500003 14.8892ZM2.86102e-06 14.8884L2.86102e-06 2.61161C-0.000752449 2.12694 0.146302 1.65197 0.424147 1.2417L2.86102e-06 14.8884Z" stroke="#007A7F"/>
    </svg>
    `
);
$(".what_we_do .item").click((e) => {
  $(".what_we_do").trigger(
    "to.owl.carousel",
    e.target.closest(".item").dataset.item
  );
});

let scrollEvent_elements = document.querySelectorAll(".scrollEvent");
scrollEvent_elements.forEach((val) => {
  let current_postion = val.getBoundingClientRect().top + val.scrollHeight + 50;
  val.setAttribute("data-currentpostion", current_postion);
});
window.addEventListener("scroll", function (e) {
  scrollEvent_elements.forEach((element) => {
    let scrolly = element.dataset.scrolly;
    let classTobeAdd = element.dataset.addclass;
    let condition =
      scrolly === "selfElement" ? element.dataset.currentpostion : +scrolly;
    if (this.window.scrollY > condition) {
      element.classList.add(classTobeAdd);
    } else {
      element.classList.remove(classTobeAdd);
    }
  });
});

const options = {
  rootMargin: screen.width > 600 ? "0px 0px -80px 0px" : "0px",
  threshold: screen.width > 600 ? 0 : 0.1,
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

// section nav
let section_nav_opt = {
  rootMargin: "0px",
  threshold: screen.width > 600 ? 1 : 0.3,
};

let section_obesever = new IntersectionObserver(
  section_obesever_callBCK,
  section_nav_opt
);
let section_navs = document.querySelector(".section_navs");
let section_nav = document.querySelectorAll(".section_nav");
let section_active_nav = document.querySelector(".section_active_nav");
let section_nav_block = document.querySelectorAll(".section_nav_block");

section_nav_block.forEach((val) => section_obesever.observe(val));

function section_obesever_callBCK(entries) {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      let activeNav = document.querySelector(
        `.${element.target.dataset.section_name}`
      );
      section_nav_active_handler(activeNav);
    }
  });
}

section_nav.forEach((element) => {
  element.addEventListener("click", (e) =>
    section_nav_active_handler(e.target)
  );
});

function section_nav_active_handler(element) {
  section_nav.forEach((val) => val.classList.remove(val.dataset.activeclass));

  let elementDTL = element.getBoundingClientRect();
  element.classList.add(element.dataset.activeclass);
  let parent_postiion = section_navs.getBoundingClientRect().left;

  section_active_nav.style = `left:${Math.abs(
    parent_postiion - elementDTL.left
  )}px;width:${elementDTL.width}px`;
}
const dropdownContainers = document.querySelectorAll(".dropdown-container");

// Initialize each dropdown
dropdownContainers.forEach((container) => {
  setupCustomDropdown(container);
});

function setupCustomDropdown(container) {
  const dropdownBtn = container.querySelector(".dropdown-btn");
  const dropDownTabs = container.querySelectorAll(".dropDown_tab");
  const dropdownContent = container.querySelector(".dropdown-content");

  if (dropdownBtn && dropDownTabs.length > 0) {
    dropDownTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        selectOption(tab.getAttribute("data-dropdown"), container);
      });
    });

    dropdownBtn.addEventListener("click", () => toggleDropdown(container));

    document.addEventListener("click", function (event) {
      if (!container.contains(event.target)) {
        dropdownContent.style.display = "none";
      }
    });
  }

  function toggleDropdown(container) {
    const dropdownContent = container.querySelector(".dropdown-content");
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  }

  function selectOption(option, container) {
    const dropdownBtn = container.querySelector(".dropdown-btn");
    dropdownBtn.textContent = option;
    toggleDropdown(container);
  }
}

// external includes 🔴🔴🔴

// scroll to view

let scrollNav = document.querySelectorAll(".scrollToView");
scrollNav.forEach((element) => {
  element.addEventListener("click", function (e) {
    const elements = document.querySelector(
      `[data-section_name= ${e.target.dataset.scrollto}]`
    );
    let elementDimention = elements.getBoundingClientRect();
    let showOnCenter =
      screen.width > 1024 ? (elementDimention.height - screen.height) / 2 : -85;
    window.scrollTo({
      top: window.pageYOffset + elementDimention.top + showOnCenter,
      left: 0,
      behavior: "smooth",
    });
  });
});

// read more
customElements.define("read-more", ReadMore);
// tabs
tabs(".heroSectionTabLink", ".heroSectionTabContent");
tabs(".overviewTabLink", ".overviewTabContent");
tabs(".galleryTabLink", ".galleryTabContent");
tabs(".cunstructionTabLink", ".cunstructionTabContent");
tabs(".partnersTabLink", ".partnersTabContent");
tabs(".yearListTabLink", ".yearListTabContent");
tabs(".monthListTabLink", ".monthListTabContent");

//accordian init
accordianInit(".accordian_tab");

// sccroll gsap
// gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: ".testinbg",
//     start: "center 80%", // when the top of the trigger hits the top of the viewport
//     end: "center 82%", // end after scrolling 500px beyond the start
//     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers: true,
//   },
// });

// tl.to(".testinbg", {
//   x: 100,
// });

const heroSection = document.querySelector(".hero_Section");
const contentSection = document.querySelector(".feature_section");
gsap.utils.toArray(".fadeUp").forEach((element) => {
  gsap.set(element, {
    opacity: 0,
    translateY: 40,
    // Add other initial styles as needed
  });

  gsap.to(element, {
    opacity: 1,
    translateY: 0,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "top 70%",
      scrub: true,
      // markers: true,
    },
  });
});

gsap.utils.toArray(".fadeUp-early").forEach((element) => {
  gsap.set(element, {
    opacity: 0,
    translateY: 40,
    // Add other initial styles as needed
  });

  gsap.to(element, {
    opacity: 1,
    translateY: 0,
    scrollTrigger: {
      trigger: element,
      start: "top 95%",
      end: "top 85%",
      scrub: true,
      // markers: true,
    },
  });
});

gsap.utils.toArray(".scaleUp").forEach((element) => {
  gsap.set(element, {
    opacity: 0,
    rotateX: 40,
    transformOrigin: "top",
    // Add other initial styles as needed
  });

  gsap.to(element, {
    opacity: 1,
    rotateX: 0,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 65%",
      scrub: true,
      // markers: true,
    },
  });
});

gsap.to(".hero_Section video,.hero_Section img", {
  scale: 1.2,
  opacity: 1,
  scrollTrigger: {
    trigger: heroSection,
    start: "center center",
    end: "180% 90%",
    scrub: true,
  },
});

const resizeObserver = new ResizeObserver((entries) => {
  ScrollTrigger.refresh();
});

// Specify the elements to observe
const elementsToObserve = document.querySelectorAll(".resizeDetect");

// Start observing
elementsToObserve.forEach((element) => {
  resizeObserver.observe(element);
});

// gsap.to(".feature_section", {
//   scale: 1.1,
//   background: "white",
//   scrollTrigger: {
//     trigger: contentSection,
//     start: screen.width > 1280 ? "bottom 30%" : "top center",
//     end: "bottom top",
// markers: true,
//     end: "end 0",
//     scrub: true,
//   },
// });
