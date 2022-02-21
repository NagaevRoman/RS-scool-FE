const tablet = document.querySelector('.tablet');
const rest = document.querySelector('.btn');
const cells = document.getElementsByClassName('cell');
const cont = document.querySelector('.content');
const modRes = document.querySelector('.modal-result');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.btn-close');
const steps = document.querySelector('.steps');

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
    console.log(count);
  }
})

function checkStatus() {
  for (let i = 0; i < answer.length; i++) {
    if (cells[answer[i][0]].innerHTML == 'X' && cells[answer[i][1]].innerHTML == 'X' && cells[answer[i][2]].innerHTML == 'X') {
       crossWon++
       console.log(crossWon);
       result = 'cross'
       prResult(result)
    } else if (cells[answer[i][0]].innerHTML == 'O' && cells[answer[i][1]].innerHTML == 'O' && cells[answer[i][2]].innerHTML == 'O') {
      naughtWon++
       result = 'naught'
       prResult(result)
    } 
  }
}


const prResult = winner => {
  steps
  
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

const restartGame = () => {
  location.reload()
}

close.addEventListener('click', closeMod)
rest.addEventListener('click', restartGame)
overlay.addEventListener('click', closeMod)

// console.log(crossWon);
// console.log(naughtWon);
// console.log(count);

