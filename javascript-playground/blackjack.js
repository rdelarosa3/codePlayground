const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let players = [
    {
        name: "House",
        cards: [],
        score: 0,
        canPlay: true
    },
    {
        name: "Player1",
        cards: [],
        score: 0,
        canPlay: true
    },
    {
        name: "Player2",
        cards: [],
        score: 0,
        canPlay: true
    }
];

// Shuffle a new deck
const getDeck = ()=> {
    let deck = [];
    suits.forEach((s)=>{
        values.forEach((v)=>{
            let card = {
                Value: v,
                Suit: s
            }
            deck.push(card);
        })
    })
    return deck;
}
let currentDeck = getDeck();

// Dealer random card from current deck
const randomCard = (deck) => {
    let deckIndex = deck.length * Math.random() << 0;
    let currCard = deck[deckIndex];
    currentDeck.splice(deckIndex,1);
    return currCard;
}

// Get score from current hand
const scoreHand = (cards) => {

    let aces = cards.filter((card) => card.Value === "A").length;
    let score = cards.map((card) => {
        if(isNaN(card.Value)) return card === "A" ? 11:10;
        return Number(card.Value);
    }).reduce((score,card)=>{
        return score + card;
    })
    while (aces > 0){
        score -= 10;
        aces -= 1;
    }
    return score;
}

const hit = (p) => {
    if(p.score <= 21) {
        p.cards.push(randomCard(currentDeck));
        p.score = scoreHand(p.cards);
    }
    if(p.score > 21) p.canPlay = false;
    console.log(`${p.name}: ${p.score}`)
}
const stand = (p) => {
    p.canPlay = false;
}

// Initial card draw to players
const initializeGame = () => {
    let cardDraw = 0;
    while (cardDraw < 2) {
        players.forEach((p) => {
            hit(p);
        })
        cardDraw += 1;
    }
}
initializeGame();

console.log(players);



// const winner = (players) =>{
//     if(Math.max(...players) <= 21){
//         return Math.max(...players);
//     }else{
//         return players.filter(function(num){
//             return num > 21;
//         }).sort().shift();
//     }
// }


// class player {
//     constructor(name, cards, score, canPlay) {
//         this.name = name,
//             this.cards = cards,
//             this.score = score,
//             this.canPlay = canPlay
//     }
// }