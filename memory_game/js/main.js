let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cards: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cards: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cards: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cards: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

function checkForMatch(){
	return cardsInPlay[0] === cardsInPlay[1] ? console.log("You found a match!") : console.log("Sorry, try again.");
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);