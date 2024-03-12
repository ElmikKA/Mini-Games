const displayComputerChoice = document.getElementById('computer-choice')
const displayMyChoice = document.getElementById('my-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let myChoice
let computerChoice

//For each choice in buttons(rock, paper, scissors)
possibleChoices.forEach((possibleChoice) => {
    //add a evenlistener click(so if the button is cliked, do something)
    possibleChoice.addEventListener('click', (e) => {
        //Saveing my choice to a variable
        myChoice = e.target.id
        //Displaying myChoice in the browser(throw span id)
        displayMyChoice.innerHTML = myChoice
        generrateComputerChoice()
        getResult()
    })
})

function generrateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    switch(randomNumber) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2: 
            computerChoice = 'paper'
            break;
        case 3: 
            computerChoice = 'scissors'
            break;
    }
    displayComputerChoice.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === myChoice) {
        result.innerHTML = 'You both are winners'
    } else if ((computerChoice === 'rock' && myChoice === 'scissors') || (computerChoice === 'paper' && myChoice === 'rock') || (computerChoice === 'scissors' && myChoice === 'paper')) {
        result.innerHTML = 'Computer has won'
    } else {
        result.innerHTML = 'You have won the computer'
    }
}
