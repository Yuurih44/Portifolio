// Botão de enviar mensagem
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
$(document).ready(function () {
$('.certificates-carousel').slick({
  infinite: true, // O carrossel vai se repetir infinitamente
  slidesToShow: 3, // Quantos certificados mostrar de uma vez
  slidesToScroll: 1, // Quantos certificados vão mover de cada vez
  autoplay: true, // Habilita o autoplay
  autoplaySpeed: 2000, // Velocidade do autoplay (2 segundos)
  arrows: true, // Habilita as setas de navegação
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>', // Personaliza a seta esquerda
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>', // Personaliza a seta direita
  responsive: [
    {
      breakpoint: 768, // Para telas menores que 768px
      settings: {
        slidesToShow: 1, // Exibe 1 certificado por vez em telas pequenas
      }
    }
  ]
});
});