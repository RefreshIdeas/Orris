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
    `
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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