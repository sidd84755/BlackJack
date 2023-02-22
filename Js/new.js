let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let firstCard = 10
let secondCard = 11
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let sent = ["hello" ,"my name","is","siddharth"]
let prEl = document.querySelector("#pr-el")

for(i = 0; i < sent.length; i++){
    prEl.textContent += sent[i] + " "
}
function startGame(){
    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] +" "+ cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    console.log("Drawing a new card from the deck!")
    let nCard = 6
    sum += nCard
    cards.push(nCard)
    renderGame()
}

