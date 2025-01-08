let rlSync = require('readline-sync');
const SUITS = ['D', 'S', 'C', 'H'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;

function prompt(msg) {
  console.log("=> " + msg);
}

function returnSuit(card) {
  switch (card[0]) {
    case 'H': return 'Hearts';
    case 'S': return 'Spades';
    case 'D': return 'Diamonds';
    case 'C': return 'Clubs';
  }
}

function returnValue(card) {
  switch (card[1]) {
    case 'K': return 'King';
    case 'Q': return 'Queen';
    case 'J': return 'Jack';
    case 'A': return 'Ace';
    default: return card[1];
  }
}

function listCards(cards) {
  let readableCards = []
  for (let card of cards) {
    readableCards.push(returnValue(card) + " of " + returnSuit(card));
  }
  return readableCards.join(", ")
}

function shuffle(array) {
  for (let idx = array.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[otherIdx]] = [array[otherIdx], array[idx]];
  }
}

function drawCard(deck, user) {
  user.push(deck.pop());
}

function initializeDeck() {
  let deck = [];
  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push([suit, value])
    }
  }
  return deck;
}

function calculateHand(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  for (let value of values) {
    let faceCards = "KQJ"
    if (faceCards.includes(value)) {
      sum += 10;
    } else if ('A' === value) {
      sum += 11;
    } else {
      sum += Number(value)
    }
  }

  values.filter(value => value === "A").forEach(ace => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

while (true) {
  // intro and chips
  console.clear()
  prompt("Welcome to twenty-one. How many chips do you need? (Enter $ amount)");
  let playerChips = Number(rlSync.question());
  while (isNaN(playerChips) || playerChips < 1) {
    prompt(`Please enter a valid number.`);
    playerChips = Number(rlSync.question());
  }

  while (true) {
    let deck = initializeDeck();
    shuffle(deck);
    let playerHand = [];
    let dealerHand = [];
  
    drawCard(deck, playerHand);
    drawCard(deck, dealerHand);
    drawCard(deck, playerHand);
    drawCard(deck, dealerHand);
  
    console.clear();
    // get wager
    prompt(`Your total chips: ${playerChips}`);
    prompt(`What would you like to wager?`);
    let wager = Number(rlSync.question());
    while (isNaN(wager) || wager > playerChips || wager <= 0) {
      prompt(`Enter a valid wager.`);
      wager = Number(rlSync.question());
    }

    // start of game
    prompt(`You have: ${listCards(playerHand)}`);
    prompt(`Dealer is showing: ${listCards(dealerHand.slice(0, 1))}`);
    
    let playerTotal;
    let playerBust = false;
    let dealerBust = false;
    // player turn && bust handling
    while (true) {
      prompt(`Hit or Stay?`);
      let answer = rlSync.question();
      while (answer.toLowerCase() !== "hit" && answer.toLowerCase() !== "stay") {
        prompt("Sorry, what was that?");
        answer = rlSync.question();
      }
      if (answer.toLowerCase() === "hit") {
        drawCard(deck, playerHand);
        playerTotal = calculateHand(playerHand);
        prompt(`You have: ${listCards(playerHand)}`);
        if (playerTotal > 21) {
          prompt('You busted!');
          playerBust = true;
          playerChips -= wager;
          prompt(`You now have ${playerChips} chips`);
        }
      } else {
        prompt(`You have ${calculateHand(playerHand)}`);
        break;
      }
    }
    // dealer turn && bust handling
    if (!playerBust) prompt(`Dealer has: ${listCards(dealerHand)}...`);
    while ((calculateHand(dealerHand) < DEALER_LIMIT) && !playerBust) {
      prompt("Dealer hits!")
      drawCard(deck, dealerHand)
      prompt(`Dealer has: ${listCards(dealerHand)}`)
      if (calculateHand(dealerHand) > TWENTY_ONE) {
        prompt('Dealer busts! You win!')
        dealerBust = true;
        playerChips += wager;
        prompt(`You now have ${playerChips} chips`);
        break;
      }
    }

    // display winner for non-bust
    if (!dealerBust && !playerBust) {
      prompt("Dealer Stays!\n")
      prompt(`Your total is ${calculateHand(playerHand)}`);
      prompt(`Dealer total is ${calculateHand(dealerHand)}`);
      if (calculateHand(playerHand) > calculateHand(dealerHand)) {
        prompt(`You win!`);
        playerChips += wager;
        prompt(`You now have ${playerChips} chips`);
      } else if (calculateHand(playerHand) < calculateHand(dealerHand)) {
        prompt('You lose!')
        playerChips -= wager;
        prompt(`You now have ${playerChips} chips`);
      } else {
        prompt("tie! new game");
      }
    }
    // end round loop: check for clean-out, or ask to play again
    if (playerChips === 0) {
      prompt("You're out of chips. Head to the counter and get more! ;)");
      prompt("Bye for now!");
      break;
    }
    prompt(`play again? y/n`);
    let answer = rlSync.question();
    if (answer.toLowerCase() !== 'y') break;
  }
  break;
}






// Initialize Deck

// Deal Cards to Player and Dealer

// Player turn: hit or stay?
  // repeat until bust or stay

// Player bust? Dealer win

// No Bust? Dealer turn: hit or stay?
  // repeat until total >= 17

// Dealer bust? Player win

// (No busts) compare cards, declare winner


