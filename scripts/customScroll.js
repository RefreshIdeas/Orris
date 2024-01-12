import "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js";

(function ($) {
  $(window).on("load", function () {
    if (screen.width < 769) {
      disabledScrolls();
    }
    $(".content").mCustomScrollbar({});
    $(".content_with_scroll_buttons").mCustomScrollbar({
      scrollButtons: { enable: true },
      scrollInertia: 1,
    });
  });

  function disabledScrolls() {
    let noScrollList = document
      .querySelector(".disabled_scrollMobile")
      ?.querySelectorAll('[data-mcs-theme="dark"]');
    noScrollList?.forEach((val) => {
      val.classList.remove("content");
    });
  }
})(jQuery);
