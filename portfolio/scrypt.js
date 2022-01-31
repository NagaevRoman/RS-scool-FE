let burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
});
let menu__list = document.querySelector('.menu__list');
burger.addEventListener('click', function () {
  menu__list.classList.toggle('active');
});
const menu__link = document.querySelectorAll('.menu__link');
menu__link.forEach((n) => n.addEventListener('click', closeMenu));
function closeMenu() {
  burger.classList.remove('active');
  menu__list.classList.remove('active');
}

const portfolioBtn = document.querySelectorAll('.button__potfolio');

console.log(portfolioBtn);
const portfolioImages = document.querySelectorAll('.portfolio__img');


const portfolioBtns = document.querySelector('.button-switcher');


const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
  seasons.forEach(val => {
    
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./asset/img/${val}/${i}.jpg`;
    }

  })
}
preloadImages();

function changeImage(event) {
  if(event.target.classList.contains('button__potfolio')) {
        let action = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./asset/img/${action}/${index + 1}.jpg`);
    event.target.classList.add('active__portfolio')
  }
}


portfolioBtns.addEventListener('click', 
  changeImage, 
  
  // function (event) {

  //   let action = event.target.dataset.season;
  //   console.log(action);
  //   console.log(event);
  //   console.log(dataset.season);
  //   // console.log(event.target);
  //   event.target.classList.add('active__portfolio')
  // }
  // portfolioBtn.classList.remove('active__portfolio')
  // portfolioBtn.add('active__portfolio')
);

portfolioBtns.addEventListener('click', 
  removeActive )

function removeActive () {

  portfolioBtn.forEach((btn => btn.classList.remove('active__portfolio')));
  event.target.classList.add('active__portfolio')

}



// console.log(
//   `
// 1. Вёрстка соответствует макету. Ширина экрана 768px +48
// - блок <header> +6
// - секция hero +6
// - секция skills +6
// - секция portfolio +6
// - секция video +6
// - секция price +6
// - секция contacts +6
// - блок <footer> +6
// 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15
// - нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5
// - нет полосы прокрутки при ширине страницы от 768рх до 480рх +5
// - нет полосы прокрутки при ширине страницы от 480рх до 320рх +5
// 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22
// - при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
// - при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
// - высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4
// - при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4
// - бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
// - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
// - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, - - - крестик превращается в бургер-иконку +4

// ВСЕ ПУНКТЫ СОБЛЛЮДЕНЫ! 75 баллов
// `
// );
