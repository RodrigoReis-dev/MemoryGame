     //? -------------- //
    //*  Memory Game   //
   //? -------------- //


// Create Array with objects of the items with name and img. 
const cardArray = [
  {
    name: 'fries',
    img: '/images/fries.png',
  },
  {
    name: 'hamburger',
    img: '/images/hamburger.png',
  },
  {
    name: 'hotdog',
    img: '/images/hot-dog.png',
  },
  {
    name: 'icecream',
    img: '/images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: '/images/milkshake.png',
  },
  {
    name: 'pizza',
    img: '/images/pizza.png',
  },
  {
    name: 'fries',
    img: '/images/fries.png',
  },
  {
    name: 'hamburger',
    img: '/images/hamburger.png',
  },
  {
    name: 'hotdog',
    img: '/images/hot-dog.png',
  },
  {
    name: 'icecream',
    img: '/images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: '/images/milkshake.png',
  },
  {
    name: 'pizza',
    img: '/images/pizza.png'
  }
]

// Function to sort items with random values
cardArray.sort(() => 0.5 - Math.random())

// Declare and store variables
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

// Function to create of the card board using loop through Array.length
// Create img into the grid using setAttribute, giving src and seting as default blank card
// Call function flipcard to flip the card when clicked, using addEventListener.
function createBoard() {
  for ( i=0; i < cardArray.length; i++ ){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    gridDisplay.appendChild(card)
  }
}
createBoard()

// Function to check if the card is match
// Alert for match or if not match, flip the card back to blank, and alert 'Sorry try again!'
// Create new array to cardChosen and ChosenId 
// Use cardWon.length to define the points and user .innerHTML to display the result/score
// If cardWon.lenght === cardArray.lenght/2, gameOver
// Alert '!!! Congratulations you found them all !!!'
function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  console.log(cards)
  console.log('check for match!')

  if ( optionOneId == optionTwoId) {
    alert('You have clicked the same card')
  }
    if ( cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/match.png')
    cards[optionTwoId].setAttribute('src', 'images/match.png')
    cards[optionOneId].removeEventListener('click', flipcard)
    cards[optionTwoId].removeEventListener('click', flipcard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }
  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = []
  cardsChosenId = []

  if ( cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = '!!! Congratulations you found them all !!!'
  }

}

// Function to flip the card on click
// Create variable to take id of each card on click
function flipcard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenId)
  this.setAttribute('src', cardArray[cardId].img)
  if ( cardsChosen.length === 2 ) {
    setTimeout( checkMatch, 500)
  }
 }
