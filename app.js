document.addEventListener('DOMContentLoaded', () => {
   // card options
   const cardArray = [
      {
         name: 'sad1',
         img: 'img/sad1.jpg'
      },
      {
         name: 'sad1',
         img: 'img/sad1.jpg'
      },
      {
         name: 'sad2',
         img: 'img/sad2.jpg'
      },
      {
         name: 'sad2',
         img: 'img/sad2.jpg'
      },
      {
         name: 'sad3',
         img: 'img/sad3.jpg'
      },
      {
         name: 'sad3',
         img: 'img/sad3.jpg'
      },
      {
         name: 'sad4',
         img: 'img/sad4.jpg'
      },
      {
         name: 'sad4',
         img: 'img/sad4.jpg'
      },
      {
         name: 'sad5',
         img: 'img/sad5.jpg'
      },
      {
         name: 'sad5',
         img: 'img/sad5.jpg'
      },
      {
         name: 'sad6',
         img: 'img/sad6.jpg'
      },   
      {
         name: 'sad6',
         img: 'img/sad6.jpg'
      }   
   ]

   cardArray.sort(() => 0.5 - Math.random())

   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector("#result")
   var cardsChosen = []
   var cardsChosenId = []
   var cardsWon = []

   // create you board
   function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
         var card = document.createElement('img')
         card.setAttribute('src', 'img/rainbow.jpg')
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipCard)
         grid.appendChild(card)
      }
   }

   // check for matches
   function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
         alert("Achou um par!")
         cards[optionOneId].setAttribute('src', 'img/white.jpg')
         cards[optionTwoId].setAttribute('src', 'img/white.jpg')
         cardsWon.push(cardsChosen)
      } else {
         cards[optionOneId].setAttribute('src', 'img/rainbow.jpg')
         cards[optionTwoId].setAttribute('src', 'img/rainbow.jpg')
         alert("Nada feito... Tente de novo.")
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if (cardsWon.length === cardsArray.length / 2) {
         resultDisplay.textContent = "Parabéns! Você achou tudo! "
      }
   }

   // flip your card
   function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
         setTimeout(checkForMatch, 500);
      }
   }
   createBoard()
})