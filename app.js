document.addEventListener('DOMContentLoaded', () => {

// Cards
const cardArray = [
    {
        name: '01',
        img: 'images/01.png'
    },
    {
        name: '02',
        img: 'images/02.png'
    },
    {
        name: '03',
        img: 'images/03.png'
    },
    {
        name: '04',
        img: 'images/04.png'
    },
    {
        name: '05',
        img: 'images/05.png'
    },
    {
        name: '06',
        img: 'images/06.png'
    },
    {
        name: '07',
        img: 'images/07.png'
    },
    {
        name: '08',
        img: 'images/08.png'
    },
    {
        name: '09',
        img: 'images/09.png'
    },
    {
        name: '10',
        img: 'images/10.png'
    },
    {
        name: '01',
        img: 'images/01.png'
    },
    {
        name: '02',
        img: 'images/02.png'
    },
    {
        name: '03',
        img: 'images/03.png'
    },
    {
        name: '04',
        img: 'images/04.png'
    },
    {
        name: '05',
        img: 'images/05.png'
    },
    {
        name: '06',
        img: 'images/06.png'
    },
    {
        name: '07',
        img: 'images/07.png'
    },
    {
        name: '08',
        img: 'images/08.png'
    },
    {
        name: '09',
        img: 'images/09.png'
    },
    {
        name: '10',
        img: 'images/10.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');

const resultDisplay = document.querySelector('#result'); 

var cardsChosen = [];

var cardsChosenId = [];

var cardsWon = []; 

/* Board: create var card and set attributes */ 
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card); /* append card to div "grid" */
        }
}

/* check for matches */
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1]; 
    
        if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        /* alert('Clickeastes la misma imagen, papanatas!') */
        }

        else if(cardsChosen[0] === cardsChosen[1]) {
        /* alert("Encontrastes dos iguales!"); */
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener("click", flipCard); 
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
   
        } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        /* alert("Le pifiastes!"); */
        }

    cardsChosen = []; 
    cardsChosenId = []; 
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Ganaste!";
    }
}


/* flip your card*/
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500); // miliseconds
    }
}
createBoard();
})
