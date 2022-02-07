import i18Obj from './translate.js';

  let burger = document.querySelector('.burger');

  let menu__list = document.querySelector('.menu__list');

  const menu__link = document.querySelectorAll('.menu__link');

  const portfolioBtn = document.querySelectorAll('.button__potfolio');

  const switchLng = document.querySelectorAll('.switch-lng__link');

  const switchLngs = document.querySelector('.switch-lng');

  const portfolioImages = document.querySelectorAll('.portfolio__img');

  const portfolioBtns = document.querySelector('.button-switcher');

  const them = document.querySelector('.switch-them');

  const switchTheme = document.querySelector('.sun');



  const vidContainer =document.querySelector('.video__container');

  const vid = document.querySelector('.player__video');

  const controlPlay = vidContainer.querySelector('.player__button');

  const playBar = vidContainer.querySelector('.player__controls');

  const controlVol = vidContainer.querySelector('.player__slider[name="volume"]');

  const controlProgress = vidContainer.querySelector('.progress');

  const progressBar = vidContainer.querySelector('.progress__filled');

  const playVideo = vidContainer.querySelector(".button-play");

  const playBarImg = controlPlay.querySelector('.play-image');

  const mute =  vidContainer.querySelector(".volume-image");

  const timeElapsed = document.getElementById('time-elapsed');

  const duration = document.getElementById('duration');
  
  let drag;
  let grap;

  let lang = "en";

  let theme = "";

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  const section = ["body", ".section__skills", ".section__portfolio", ".section__video", ".section__price",  ".price__container", ".skills__wraper", ".button-switcher", ".section-title", ".button__potfolio"
  ];

  /---------------------------------/ 

  function preloadImages() {
    seasons.forEach(val => {
      
      for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./asset/img/${val}/${i}.jpg`;
      }
  
    })
  }
  preloadImages();

  /---------------------------------/ 

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
  });

  burger.addEventListener('click', function () {
    menu__list.classList.toggle('active');
  });

  menu__link.forEach((n) => n.addEventListener('click', closeMenu));

  function closeMenu() {
    burger.classList.remove('active');
    menu__list.classList.remove('active');
  }

  /---------------------------------/ 

// const theme = document.querySelector('.')


function changeImage(event) {
  if(event.target.classList.contains('button__potfolio')) {
    let action = event.target.dataset.season;
    portfolioImages.forEach((img, index) => img.src = `./asset/img/${action}/${index + 1}.jpg`);
    event.target.classList.add('active__portfolio')
  }
}

portfolioBtns.addEventListener('click', 
  changeImage 
);

portfolioBtns.addEventListener('click', 
  removeActive)

function removeActive () {

  portfolioBtn.forEach((btn => btn.classList.remove('active__portfolio')));
  event.target.classList.add('active__portfolio')

}


switchLngs.addEventListener('click', 
remActive)

function remActive () {

  switchLng.forEach((btn => btn.classList.remove('active')));
  event.target.classList.add('active')

}

function getTranslate(lg) {
  let dataAtrs = document.querySelectorAll('[data-i18]');
  dataAtrs.forEach(
    el => {
      let atr = el.getAttribute('data-i18')
      el.textContent = i18Obj[lg][atr]
  })
}

switchLngs.addEventListener("click", (event) => {
  let lg = event.target.dataset.lng
  getTranslate(lg)
})

them.addEventListener(
  "click", () => {
    section.forEach((el) => {
      document.querySelector(el).classList.toggle("light-theme")
    })
    switchTheme.classList.toggle('act')
  }
)

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
}
window.addEventListener('DOMContentLoaded', getLocalStorage)

//-------------Video-player--------------/


playVideo.addEventListener('click', function () {
  playVideo.classList.add('active');
  playBar.classList.add('active');
  toggleVideo();
});


controlPlay.addEventListener('click', toggleVideo);

controlVol.addEventListener('change', updateVol);

controlProgress.addEventListener('mouseover', function(){drag = true});

controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});

controlProgress.addEventListener('mousedown', function(){grap = drag});

controlProgress.addEventListener('mouseup', function(){grap = false});

controlProgress.addEventListener('click', updateCurrentPos);

controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

mute.addEventListener('click', 
  toggleImgVolume
);

vid.addEventListener('loadedmetadata', initializeVideo);


vid.addEventListener('timeupdate', updateTimeElapsed);


function updateVol(){
  var volume = this.value;
  vid.volume = volume;
}

function toggleVideo() {
  if (vid.paused) {
    vid.play();
    playBarImg.src = "./asset/svg/pause.svg"
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
  } else {
    vid.pause();
    playBarImg.src = "./asset/svg/play.svg"
    clearInterval(progression);
  };
}

function updateCurrentPos(e){
  let newProgress = (e.clientX - vidContainer.offsetLeft) / vidContainer.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  vid.currentTime = newProgress * vid.duration;
}

function updateProgress() {
  let progress = vid.currentTime / vid.duration;
  progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}


  // volume-image


function toggleImgVolume() {
  console.log(vid.muted);
  if (vid.muted) {
    vid.muted = !vid.muted;;
    mute.src = "./asset/svg/volume.svg"
  } else {
    vid.muted = !vid.muted;
    mute.src = "./asset/svg/mute.svg"
  };
}

function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};


function initializeVideo() {
  const videoDuration = Math.round(vid.duration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

function updateTimeElapsed() {
  const time = formatTime(Math.round(vid.currentTime));
  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}



// function setLocalStorage(theme) {
//   localStorage.setItem('theme', theme);
// }
// window.addEventListener('beforeunload', setLocalStorage)

// function getLocalStorage() {
//   if(localStorage.getItem('theme')) {
//     theme = localStorage.getItem('theme');

//   }
// }
// window.addEventListener('DOMContentLoaded', getLocalStorage)

// window.addEventListener('theme', getLocalStorage)


// console.log(theme.remove("sun"));
// console.log(theme.add("moon"));
// console.log(switchTheme);

// switchTheme.addEventListener('click', 
// changeIm
// );

// function changeIm(event) {
//   if(event.target.classList.contains('switchTheme')) {
//     console.log('ok');
//   }
// }

// changeIm()




// /--------------------------/












// function restoreTheme() {
//   const theme = localStorage.getItem('theme');
//   if (!theme) {
//       return;
//   }
//   const imgBtnTheme = document.querySelector('.theme-btn img.hover-logo')
//   const arrTheme = document.querySelectorAll('.change-theme');
//   const formLink = (img)=>`./assets/svg/${img}.svg`;

//   arrTheme.forEach((el)=>{
//       if (theme === 'dark') {
//           el.classList.remove('light-theme');
//       } else {
//           el.classList.add('light-theme');
//       }
//   }
//   );

//   if (theme === 'dark') {
//       imgBtnTheme.src = formLink('sun');
//   } else {
//       imgBtnTheme.src = formLink('dark');
//   }
// }
// ;
// function switchingPhoto() {
//   const allImg = document.querySelectorAll('.portfolio-image');
//   const allBtns = document.querySelector(".buttons-portfolio");
//   const takeEachBtn = document.querySelectorAll('.portfolio-btn');
//   allBtns.addEventListener('click', changeImage);
//   function changeImage(event) {
//       if (event.target.classList.contains('portfolio-btn')) {
//           const btn = event.target;
//           const season = btn.dataset.season;
//           allImg.forEach((img,ind)=>img.src = `./assets/img/${season}/${ind + 1}.jpg`);
//           takeEachBtn.forEach((el)=>{
//               el.classList.remove('button1');
//               el.classList.remove('button2');
//               if (!el.classList.contains('button2') && el != btn) {
//                   el.classList.add('button2');
//               }
//           }
//           )
//           btn.classList.add('button1');
//       }
//   }
//   ;
// }
// ;
// function switchLang(event) {
//   const clickedItem = event.target;
//   const lang = localStorage.getItem('lang');

//   if (clickedItem.classList.contains('ru') && lang != 'ru') {
//       translate('ru');
//   }

//   if (clickedItem.classList.contains('en') && lang != 'en') {
//       translate('en');
//   }

//   event.preventDefault();
//   return;
// }
// ;
// function translate(lang, clickedEl) {
//   const foundGOldColor = document.querySelector('.switch-lng .gold-color');
//   foundGOldColor.classList.remove('gold-color');

//   if (clickedEl) {
//       clickedEl.classList.add('gold-color');
//   } else {
//       const foundLang = document.querySelector('.' + lang);
//       foundLang.classList.add('gold-color');
//   }

//   const allLangElements = document.querySelectorAll('[data-i18n]');

//   allLangElements.forEach((el)=>{
//       const data = el.dataset.i18n;

//       if (data == null) {
//           console.log('Нету перевода в словаре');
//           return;
//       }

//       if (el.placeholder) {
//           el.placeholder = i18Obj[lang][data];
//       }

//       el.textContent = i18Obj[lang][data];
//       setLocalStorage(lang);
//   }
//   );
// }

// function setLocalStorage(lang) {
//   localStorage.setItem('lang', lang);
// }

// function setThemeStorage(theme) {
//   localStorage.setItem('theme', theme);
// }

// function theme() {
//   const arrTheme = document.querySelectorAll('.change-theme');
//   const btnTheme = document.querySelector('.theme-btn');
//   const imgBtnTheme = btnTheme.querySelector('img.hover-logo')
//   const formLink = (img)=>`./assets/svg/${img}.svg`;

//   btnTheme.addEventListener('click', function(event) {
//       arrTheme.forEach((el)=>{
//           el.classList.toggle('light-theme');
//       }
//       );

//       if (imgBtnTheme.src.includes('sun')) {
//           imgBtnTheme.src = formLink('dark');
//           setThemeStorage('sun');
//       } else {
//           imgBtnTheme.src = formLink('sun');
//           setThemeStorage('dark');
//       }
//   })
// }
