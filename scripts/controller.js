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

$(".what_we_do").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  onDrag: false,
  dots: true,
  dotsEach: 2,
  autoplay: true,
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

$(".projectFinancialPartners").owlCarousel({
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

$(".projectpossession_slider").owlCarousel({
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

$(".specification_slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  dotsEach: 2,
  // autoHeight: true,
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

$(".relatedPostSlider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  dotsEach: 2,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      dotsEach: 1,
      margin: 50,
      items: 2,
    },
  },
});

$(".owl-prev").html(
  `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 15.3145V15.3138L13.5 2.68623L13.5 2.68547C13.5006 2.28634 13.383 1.89346 13.1582 1.55213C12.9336 1.21087 12.6102 0.93417 12.2232 0.756916C11.7475 0.542546 11.217 0.459507 10.6925 0.518445C10.1689 0.577295 9.67515 0.774991 9.26701 1.08656L1.26797 7.39413C1.02551 7.5959 0.832602 7.84345 0.700752 8.11928C0.568157 8.39666 0.5 8.69694 0.5 9C0.5 9.30306 0.568157 9.60333 0.700752 9.88072C0.8326 10.1565 1.0255 10.4041 1.26796 10.6059L9.26703 16.9135C9.67516 17.225 10.1689 17.4227 10.6925 17.4816C11.2169 17.5405 11.7475 17.4575 12.2231 17.2431C12.6102 17.0659 12.9335 16.7891 13.1582 16.4479C13.383 16.1065 13.5006 15.7137 13.5 15.3145Z" stroke="#007A7F"/>
  </svg>
  
    `
);
$(".owl-next").html(
  `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.500003 15.3145V15.3138L0.500004 2.68623L0.500003 2.68547C0.499397 2.28634 0.617027 1.89346 0.841759 1.55213C1.06644 1.21087 1.38976 0.93417 1.7768 0.756916C2.25248 0.542546 2.78303 0.459507 3.30748 0.518445C3.83115 0.577295 4.32485 0.774991 4.73299 1.08656L12.732 7.39413C12.9745 7.5959 13.1674 7.84345 13.2992 8.11928C13.4318 8.39666 13.5 8.69694 13.5 9C13.5 9.30306 13.4318 9.60333 13.2992 9.88072C13.1674 10.1565 12.9745 10.4041 12.732 10.6059L4.73297 16.9135C4.32484 17.225 3.83114 17.4227 3.30748 17.4816C2.78306 17.5405 2.25253 17.4575 1.77687 17.2431C1.3898 17.0659 1.06646 16.7891 0.841759 16.4479C0.617027 16.1065 0.499397 15.7137 0.500003 15.3145Z" stroke="#007A7F"/>
  </svg> `
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
  selector: ".venobox",
});

window.addEventListener("popstate", function (event) {
  new VenoBox({
    selector: ".venobox_events_gallery",
    numeration: true,
    infinigall: true,
    share: false,
    titlePosition: "top",
    // titleattr:'venotitile',
    titleStyle: "block",
    spinner: "rotating-plane",
  });
  console.log("================================");
});

new VenoBox({
  selector: ".venobox_events_gallery",
  numeration: true,
  infinigall: true,
  share: false,
  titlePosition: "top",
  // titleattr:'venotitile',
  titleStyle: "block",
  spinner: "rotating-plane",
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

if (document.querySelectorAll(".inputFileUpload").length > 0) {
  let inputFile = document.getElementsByClassName("inputFileUpload");
  console.log(inputFile[0]);
  inputFile[0].addEventListener("change", function (param) {
    let filename = param.target.value.split("\\").pop();

    document.getElementById("uploadedFileName").textContent = filename;
    // document.getElementById("uploadedFileNameMessage").textContent = "";
  });
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
tabs(".heroSectionImgTabLink", ".heroSectionImgTabContent");
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
  console.log("resized");
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

document
  .getElementById("addQueryStringButton")
  .addEventListener("click", function () {
    // Get the current URL
    var currentUrl = window.location.href;

    // Add or update the query string parameter
    var updatedUrl =
      currentUrl + (currentUrl.includes("?") ? "&" : "?") + "ashu=123";

    // Use pushState to update the URL without reloading the page
    history.pushState({}, "", updatedUrl);
  });



  window.onpopstate = function(event) {
    // The event.state will contain the state object
    // You can access the updated query string using window.location.search
    console.log("Query string changed:", window.location.search);
};

window.onhashchange = function() {
  // The window.location.hash will contain the new query string
  console.log("Query string changed:", window.location.hash);
};

// You can also use the addEventListener method
// window.addEventListener('popstate', function(event) {
//     console.log("Query string changed:", window.location.search);
// });


//   function handleQueryStringChange() {
//     console.log("Query string changed:", window.location.search);
// }

// // Example of updating the query string using pushState
// // This won't trigger the popstate event, so we call our function manually
// history.pushState({}, '', '/new-path?param=value');
// handleQueryStringChange();

