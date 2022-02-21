const tablet = document.querySelector('.tablet');
const rest = document.querySelector('.btn');
const cells = document.getElementsByClassName('cell');
const cont = document.querySelector('.content');
const modRes = document.querySelector('.modal-result');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.btn-close');

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
    count % 2 !== 0 ?  
    e.target.innerHTML = 'X': 
    e.target.innerHTML = 'O'
    count++
    checkStatus()
  }
})

function checkStatus() {
  let val = 0
  for (let i = 0; i < answer.length; i++) {
    
    if (cells[answer[i][0]].innerHTML == 'X' && cells[answer[i][1]].innerHTML == 'X' && cells[answer[i][2]].innerHTML == 'X') {
       result = 'cross'
       val++
       crossWon += 1
       prResult(result)
       
    } else if (cells[answer[i][0]].innerHTML == 'O' && cells[answer[i][1]].innerHTML == 'O' && cells[answer[i][2]].innerHTML == 'O') {
       result = 'naught'
       val++
       naughtWon += 1
       prResult(result)
    } 
  }
  
}

const prResult = winner => {
  cont.innerHTML = `Congratulations! <br>
  ${winner} won!`
  modRes.style.display = 'block'
};

const closeMod = () => {
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

console.log(crossWon);
console.log(naughtWon);


// else if (i == answer.length) {
//   result = "drawn game"
//   prResult(result)
// }