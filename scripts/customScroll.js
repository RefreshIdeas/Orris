import "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js";

(function ($) {
  $(window).on("load", function () {
    $(".content").mCustomScrollbar({});
    console.log("aaa");
  });
})(jQuery);
