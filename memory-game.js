const cardArray = [
    {
        name:'fries',
        img: 'imagess/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'imagess/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'imagess/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'imagess/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'imagess/milkshake.png',
    },
    {
        name:'pizza',
        img:'imagess/pizza.png',
    },
    {
        name:'fries',
        img: 'imagess/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'imagess/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'imagess/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'imagess/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'imagess/milkshake.png',
    },
    {
        name:'pizza',
        img:'imagess/pizza.png',
    }

];

cardArray.sort(() => 0.5 - Math.random())

const Griddisplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
   const card = document.createElement('img')
   card.setAttribute('src','imagess/blank.png')
   card.setAttribute('data-id',i)
   card.addEventListener('click',flipCard)
   Griddisplay.append(card)
   console.log(card,i);
}}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    console.log('check for match!')
    if (cardChosen[0] == cardsChosen[1])
    {
        alert('You found a match!')
        cards[cardsChosenIds[0].setAttribute]('')
    }
}


function flipCard() {
  let cardID =  this.getAttribute('data-id')

cardsChosen.push(cardArray[cardID].name)
console.log('clicked',cardID)
console.log(cardsChosen)
this.setAttribute('src',cardArray[cardID].img)
if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
}
}