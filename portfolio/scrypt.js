
let burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
})
let menu__list = document.querySelector('.menu__list');
burger.addEventListener('click', function () {
  menu__list.classList.toggle('active');
})
const menu__link = document.querySelectorAll('.menu__link');
menu__link.forEach(n => n.addEventListener('click', closeMenu));
function closeMenu() {
    burger.classList.remove('active');
    menu__list.classList.remove('active');


}