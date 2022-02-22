const tablet = document.querySelector('.tablet');
const rest = document.querySelector('.btn');
const cells = document.getElementsByClassName('cell');
const cont = document.querySelector('.content');
const modRes = document.querySelector('.modal-result');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.btn-close');
const steps = document.querySelector('.steps');
const cr = document.querySelector('.cross');
const na = document.querySelector('.naught');
const start = document.querySelector('.btn-start');
const modStart = document.querySelector('.modal-start');

const answer = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


let count = 0;
let result = '';
let crossWon = 0;
let naughtWon = 0;

tablet.addEventListener('click', e => {
  if (e.target.className = 'cell') {
    count++
    count % 2 !== 0 ?  
    e.target.innerHTML = 'X': 
    e.target.innerHTML = 'O'
    checkStatus()
    if (count === 9) {
      cont.innerHTML = "Drawn game"
      modRes.style.display = 'block'
    }
  }
})

function checkStatus() {
  for (let i = 0; i < answer.length; i++) {
    if (cells[answer[i][0]].innerHTML == 'X' && cells[answer[i][1]].innerHTML == 'X' && cells[answer[i][2]].innerHTML == 'X') {
       crossWon++
       cr.innerHTML = `${crossWon}`
       result = 'cross'
       prResult(result)
    } else if (cells[answer[i][0]].innerHTML == 'O' && cells[answer[i][1]].innerHTML == 'O' && cells[answer[i][2]].innerHTML == 'O') {
       naughtWon++
       na.innerHTML = `${naughtWon}`
       result = 'naught'
       prResult(result)
    } 
  }
}


const prResult = winner => {
  cont.innerHTML = `Congratulations! <br>
  ${winner} won!`
  steps.innerHTML = `Steps: ${count}`
  modRes.style.display = 'block'
};

const closeMod = () => {
  count = 0
  modRes.style.display = 'none'
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }
};

const startGame = () => {
  modStart.style.display = 'none'
}

const restartGame = () => {
  location.reload()
}

close.addEventListener('click', closeMod)
rest.addEventListener('click', restartGame)
overlay.addEventListener('click', closeMod)
start.addEventListener('click', startGame)
// -----------------------------------

// Add storage

const addLockStor = () => {
  if ((crossWon + naughtWon) === 3) {
    console.log('ik');
    localStorage.setItem('crossWon', `${crossWon}`);
    localStorage.setItem('naughtWon', `${naughtWon}`);
  }
}
addLockStor()

// BUTTON sound

function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      modulationFrequency: 0.5
    },
    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      release: 0.5,
    }
  }).toMaster();
}

function boopMe() {
  if (!window.synth) {
    setupSynth();
  }
  
  window.synth.triggerAttackRelease(600, '9n');
}

rest.addEventListener('touchstart', function(e) {
  e.stopPropagation();
  e.preventDefault();
  boopMe();
})

rest.addEventListener('mousedown', boopMe)
start.addEventListener('mousedown', boopMe)
close.addEventListener('mousedown', boopMe)