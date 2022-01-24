
let burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
})
let list__header = document.querySelector('.list__header');
burger.addEventListener('click', function () {
    list__header.classList.toggle('active');
})
const link__header = document.querySelectorAll('.link__header');
link__header.forEach(n => n.addEventListener('click', closeMenu));
function closeMenu() {
    burger.classList.remove('active');
    list__header.classList.remove('active');


}