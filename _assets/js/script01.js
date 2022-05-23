// メニューモーダル
$(function () {
  var open = $(".menu-open"),
    close = $(".menu-close"),
    link = $(".menu-link"),
    container = $(".menu-modal");

  open.on("click", function () {
    container.show();
    open.addClass("passive");
    document.body.style.overflow = "hidden";
    return false;
  });

  close.on("click", function () {
    container.hide();
    open.removeClass("passive");
    document.body.style.overflow = "auto";
  });

  link.on("click", function () {
    container.hide();
    open.removeClass("passive");
    document.body.style.overflow = "auto";
  });
});

// カルーセル
$(".slide-wrap").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
