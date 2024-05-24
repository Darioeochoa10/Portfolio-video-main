$(document).ready(function () {
  // Inicializa el primer carrusel
  $(".video-carousel-1").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });

  // Botones de navegación para el primer carrusel
  $(".prev-button-1").click(function () {
    $(".video-carousel-1").slick("slickPrev");
  });

  $(".next-button-1").click(function () {
    $(".video-carousel-1").slick("slickNext");
  });

  // Inicializa el segundo carrusel
  $(".video-carousel-2").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });

  // Botones de navegación para el segundo carrusel
  $(".prev-button-2").click(function () {
    $(".video-carousel-2").slick("slickPrev");
  });

  $(".next-button-2").click(function () {
    $(".video-carousel-2").slick("slickNext");
  });

  // Inicializa el tercer carrusel
  $(".video-carousel-3").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });

  // Botones de navegación para el tercer carrusel
  $(".prev-button-3").click(function () {
    $(".video-carousel-3").slick("slickPrev");
  });

  $(".next-button-3").click(function () {
    $(".video-carousel-3").slick("slickNext");
  });
});

// Inicializa el tercer carrusel
$(".video-carousel-3").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
});

// Botones de navegación para el tercer carrusel
$(".prev-button-3").click(function () {
  $(".video-carousel-3").slick("slickPrev");
});

$(".next-button-3").click(function () {
  $(".video-carousel-3").slick("slickNext");
});
