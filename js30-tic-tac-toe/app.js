const tablet = document.querySelector('.tablet')

const rest = document.querySelector('.btn')

const cells = document.getElementsByClassName('cell')

const cont = document.querySelector('.content')

const modRes = document.querySelector('.modal-result')

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

let result =''

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
  for (let i = 0; i < answer.length; i++) {
    if (cells[answer[i][0]].innerHTML == 'X' && cells[answer[i][1]].innerHTML == 'X' && cells[answer[i][2]].innerHTML == 'X') {
       result = 'cross'
       prResult(result)
    } else if (cells[answer[i][0]].innerHTML == 'O' && cells[answer[i][1]].innerHTML == 'O' && cells[answer[i][2]].innerHTML == 'O') {
       result = 'naught'
       prResult(result)
    }
  }
}

const prResult = (winner) => console.log(winner);