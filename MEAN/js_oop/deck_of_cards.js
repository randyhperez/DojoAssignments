/*
Create a Deck object constructor. A deck should have the following functionality:

The Deck should contain the 52 standard cards
The Deck should be able to shuffle
The Deck should be able to reset
The Deck should be able to deal a random card
Deal should return the card that was dealt and remove it from the deck
*/

class Deck{
  constructor(){
    this.suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']
    this.card_val = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace',]
    this.card_amount = 52;
    this.cards = [];
    this.build()
  }
}

Deck.prototype.build = function () {
  for (var suitsIdx = 0; suitsIdx < this.suits.length; suitsIdx++) {
    for (var cardsIdx = 0; cardsIdx < this.card_val.length; cardsIdx++) {
      this.cards.push(`${this.card_val[cardsIdx]} of ${this.suits[suitsIdx]}`)
    }
  }
}

Deck.prototype.shuffle = function () {
  for (var i = 0; i < this.cards.length; i++) {
    temp = this.cards[i]
    random = Math.floor(Math.random() * this.cards.length - 1)
    this.cards[i] = this.cards[random]
    this.cards[random] = temp
  }
  return this;
}

Deck.prototype.reset = function () {
  this.build()
}

Deck.prototype.dealRandom = function (){
  if (this.cards.length === 0) {
    this.reset();
    this.shuffle();
    console.log('the deck was out of cards resetting and reshuffling the deck');
  }
  this.shuffle()
  return this.cards.pop();
}

/*
Now create a Player object constructor. A Player should have the following functionality:

The Player should have a name
The Player should have a hand
The Player should be able to take a card (use the deck.deal method)
The Player should be able to discard a card

*/

class Player{
  constructor(name) {
    this.name = name;
    this.hand = []
  }
}

Player.prototype.take_card = function (deck) {
  this.hand.push(deck.dealRandom())
  return this;
}

Player.prototype.discard = function (cardIdx) {
  if (this.hand.length > cardIdx) {
    this.hand.splice(cardIdx, 1)
  }
  return this;
}
