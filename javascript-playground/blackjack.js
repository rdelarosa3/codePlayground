const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const players = [];
let playerAmount = 0;
let currentPlayer = 0;
class Player {
    constructor(email, name, balance) {
        this.email = email;
        this.name = name;
        this.balance = balance;
        this.cards = [];
        this.score = 0;
        this.canPlay = true;
    }
    stand(){
        this.canPlay = false;
    }
    hit(){
        if(this === players[currentPlayer]) {
            if (this.score <= 21) {
                this.cards.push(randomCard(currentDeck));
                this.score = scoreHand(this.cards);
            }
            if (this.score > 21) this.canPlay = false;
            currentPlayer === (players.length - 1) ? currentPlayer = 0 : currentPlayer += 1;
            setScore();
            console.log(this);
        }
    }
}
players[0] = new Player("casino@casino.com","house",Infinity);
// Set number of players
[...document.getElementById('createPlayerForm').elements].forEach((input,ind)=>{
    if(ind<3) input.addEventListener('click',()=>{
     playerAmount = Number(input.value);
    })})

// Create players
let playerCount = 1;
const createPlayers = (e)=>{
    e.preventDefault();
    if(playerAmount>0 && playerCount<=3){
       players[playerCount] = new Player(
           document.getElementById('email').value,
           document.getElementById('player').value,
           100
       )
       playerCount ++;
       if(playerAmount > 1) document.getElementById('playerNameInput').innerHTML = `Player ${playerCount} Name:`;
       document.getElementById('player').value = "";
       document.getElementById('email').value = "";
       playerAmount--;
    }
}


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
const setScore = ()=>{
    let output = '';
    players.forEach((p,i)=> {
        output += `
            <ul>
                <li>${p.name}</li>
                <li>Current Hand: ${p.cards.map((c)=>{return c.Value}).join(",")}</li>
                <li>Score: ${p.score}</li>
            </ul>
        `
    })
    document.getElementById('scoreBoard').innerHTML = output;
}
// Initial card draw to players
const initializeGame = () => {
    let cardDraw = 0;
    while (cardDraw < 2) {
        players.forEach((p)=>{
            p.hit();
        })
        cardDraw += 1;
    }
    console.log(players);
}
document.getElementById('submitForm').addEventListener('click',createPlayers)
document.getElementById('startGameBtn').addEventListener('click',initializeGame);
document.getElementById('hitMe').addEventListener('click',()=>{
    players[currentPlayer].hit();
});



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