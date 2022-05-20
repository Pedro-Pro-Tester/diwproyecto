document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false
  });
});
$(document).ready(function () {
  $("#toTop").css("display", "none");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $("#toTop").fadeIn("slow");
    }
    else {
      $("#toTop").fadeOut("slow");
    }
  });
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow")
  });
});   