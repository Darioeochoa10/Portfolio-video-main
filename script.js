// Genera puntos (estrellas) de forma aleatoria y los agrega al cuerpo de la página
function generateStars() {
  const body = document.querySelector("body");
  const numStars = window.innerWidth > 768 ? 100 : 50; // Número de estrellas: más en pantallas grandes, menos en pequeñas

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    body.appendChild(star);
  }
}

// Llama a la función para generar estrellas cuando se carga la página
window.onload = generateStars;

// Regenerar estrellas en cambio de tamaño de la ventana
window.onresize = () => {
  document.querySelectorAll(".star").forEach((star) => star.remove());
  generateStars();
};

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
});
