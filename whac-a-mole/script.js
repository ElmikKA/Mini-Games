const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPositsion
let currentTime = 60

function randomeSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole')
    })

    let randomeSquare = squares[Math.floor(Math.random() * squares.length)]
    randomeSquare.classList.add('mole')
    hitPositsion = randomeSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPositsion) {
            result++
            score.innerHTML = result
            hitPositsion = null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomeSquare, 1000)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime === 0) {
        clearInterval(countDownTimerId)
        alert('Game Over! Your final score is' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)

moveMole()