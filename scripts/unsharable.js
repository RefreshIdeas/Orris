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
  
  // $(".featured_projects").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   autoplayHoverPause: true,
  //   dots: true,
  //   autoplay: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     991: {
  //       margin: 80,
  //       items: 1,
  //       dots: false,
  //     },
  //     1280: {
  //       margin: 100,
  //       dots: false,
  //       items: 1,
  //     },
  //     1536: {
  //       margin: 200,
  //       dots: false,
  //       items: 1,
  //     },
  //   },
  // });
  
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