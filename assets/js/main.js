(function ($) {
  var $window = $(window),
    $header = $("#header"),
    $banner = $("#banner"),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    default: ["1681px", null],
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Scrolly.
  $(".scrolly").scrolly({
    offset: function () {
      return $header.height() - 5;
    },
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function () {
      $window.trigger("scroll");
    });

    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function () {
        $header.removeClass("alt");
      },
      enter: function () {
        $header.addClass("alt");
      },
      leave: function () {
        $header.removeClass("alt");
        $header.addClass("reveal");
      },
    });
  }

  // Dropdowns.
  $("#nav > ul").dropotron({
    alignment: "right",
    hideDelay: 350,
    baseZIndex: 100000,
  });

  // Menu.
  $(
    '<a href="#navPanel" class="navPanelToggle"><span>Menu</span></a>'
  ).appendTo($header);

  $(
    '<div id="navPanel">' +
      "<nav>" +
      $("#nav").navList() +
      "</nav>" +
      '<a href="#navPanel" class="close"></a>' +
      "</div>"
  )
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      target: $body,
      visibleClass: "is-navPanel-visible",
      side: "right",
    });
})(jQuery);

const jsConfetti = new JSConfetti();
const container = document.querySelector(".viewd");
const observer = new IntersectionObserver(callback, {
  root: null, // intersect with viewport
  rootMargin: "0px", // no margin when computing intersections
  threshold: 0.3, // execute callback when every pixel is visible
});
// Code for hearts
let timesFired = 0;
function callback(entries) {
  if (timesFired > 1) {
    return;
  }
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log("i am also fired on load");
      jsConfetti.addConfetti({
        emojis: ["💗"],
      });
    }
  }
  timesFired++;
}
observer.observe(container);
