// Inicializa o Carousel
const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    // Your options go here
});

// Função que oculta e exibe o menu
const exibeMenu = () => {
  // muda a visualização dos itens com a classe .oculta-navbar, mudando de hide(oculto) para show(exibir)
  $('.oculta-navbar').toggle()
}
// Final da função que oculta e exibe o menu


