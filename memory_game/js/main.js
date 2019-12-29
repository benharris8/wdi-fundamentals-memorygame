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

function createBoard(){
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');	
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
function checkForMatch(){
	return cardsInPlay[0] === cardsInPlay[1] ? alert("You found a match!") : alert("Sorry, try again.");
}

function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cards);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);