const btnMenu = document.querySelector('.abrir-menu');
const menuItens = document.getElementById('menu-itens');

btnMenu.addEventListener('click', function () {
    menuItens.classList.toggle('menu-aberto');
});


btnFechar.addEventListener('click', () => {
  menuItens.classList.remove('menu-aberto');
});