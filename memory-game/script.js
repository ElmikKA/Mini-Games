const cardArray = [
    {
        name: 'aston',
        img: 'img/aston.png'
    },
    {
        name: 'bmw',
        img: 'img/bmw.png'
    },
    {
        name: 'ferrari',
        img: 'img/ferrari.png'
    },
    {
        name: 'subaru',
        img: 'img/subaru.png'
    },
    {
        name: 'tesla',
        img: 'img/tesla.png'
    },
    {
        name: 'volkswagen',
        img: 'img/volkswagen.png'
    },
    {
        name: 'aston',
        img: 'img/aston.png'
    },
    {
        name: 'bmw',
        img: 'img/bmw.png'
    },
    {
        name: 'ferrari',
        img: 'img/ferrari.png'
    },
    {
        name: 'subaru',
        img: 'img/subaru.png'
    },
    {
        name: 'tesla',
        img: 'img/tesla.png'
    },
    {
        name: 'volkswagen',
        img: 'img/volkswagen.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('#grid')
const result = document.getElementById('result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/background.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');

    // Prevent matching with the same card
    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', 'img/background.png');
        alert('You clicked the same card!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match");
        cards[cardsChosenIds[0]].setAttribute('src', 'img/Done.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'img/Done.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'img/background.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'img/background.png');
    }

    cardsChosen = [];
    cardsChosenIds = [];

    result.innerHTML = cardsWon.length
    // Updating result display
    if (cardsWon.length === cardArray.length / 2) {
        result.textContent = `Congratulations! You found all matches.`;
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

createBoard();