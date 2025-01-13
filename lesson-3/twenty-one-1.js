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

function drawFirstCards(deck, playerHand, dealerHand) {
  drawCard(deck, playerHand);
  drawCard(deck, dealerHand);
  drawCard(deck, playerHand);
  drawCard(deck, dealerHand);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateDelay() {
  await delay(2000);
}

function topOfScreenDisplay(playerHand, dealerHand, playerChips, wager, playerTotal) {
  console.clear();

  console.log("============");
  console.log(`You have ${playerChips} chips.`);
  console.log(`Your wager is: ${wager} chips.`);
  console.log("------------");
  console.log(`Dealer is showing: ${listCards(dealerHand.slice(0, 1))}.`);
  console.log(`You have: ${listCards(playerHand)}.`);
  console.log(`Total: ${playerTotal}.`);
  console.log("============\n");
}

while (true) {
  // intro and chips
  console.clear()
  prompt("Welcome to twenty-one. How many chips will you buy? (Enter $ amount)");
  let playerChips = Math.floor(Number(rlSync.question()));
  while (isNaN(playerChips) || playerChips < 1) {
    prompt(`Please enter a valid number. (Positive Integer)`);
    playerChips = Math.floor(Number(rlSync.question()));
  }
  let initialChips = playerChips;

  while (true) {
    // init deck and draw first cards
    let deck = initializeDeck();
    shuffle(deck);

    let playerHand = [];
    let dealerHand = [];
  
    drawFirstCards(deck, playerHand, dealerHand);
    console.clear();

    // get wager
    prompt(`You have ${playerChips} chips.`);
    prompt(`What would you like to wager?`);
    let wager = Number(rlSync.question());
    while (isNaN(wager) || wager > playerChips || wager <= 0) {
      if (isNaN(wager)) {
        prompt(`Enter a number.`)
      } else if (wager > playerChips) {
        prompt(`You don't have enough chips for that wager. Try again:`)
      } else if (wager <= 0) {
        prompt("You must wager at least one chip.") 
      }
      wager = Number(rlSync.question());
    }

    // start of game
    
    let playerTotal = calculateHand(playerHand);
    let dealerTotal = calculateHand(dealerHand);
    let playerBust = false;
    let dealerBust = false;
    // player turn && bust handling
    while (true) {
      topOfScreenDisplay(playerHand, dealerHand, playerChips, wager, playerTotal);
      prompt(`Hit or Stay?`);
      let answer = rlSync.question();
      while (answer.toLowerCase() !== "hit" && answer.toLowerCase() !== "stay") {
        prompt("Sorry, what was that?");
        answer = rlSync.question();
      }
      if (answer.toLowerCase() === "hit") {
        drawCard(deck, playerHand);
        playerTotal = calculateHand(playerHand);
    
        if (playerTotal > 21) {
          topOfScreenDisplay(playerHand, dealerHand, playerChips, wager, playerTotal);
          prompt('You busted!');
          playerBust = true;
          playerChips -= wager;
          prompt(`You now have ${playerChips} chips.`);
          break;
        }
      } else {
        topOfScreenDisplay(playerHand, dealerHand, playerChips, wager, playerTotal);
        break;
      }
    }
    // dealer turn && bust handling

    while ((dealerTotal < DEALER_LIMIT) && !playerBust) {
      prompt(`Dealer has: ${listCards(dealerHand)}...`);
      simulateDelay();
      prompt("Dealer hits!");
      drawCard(deck, dealerHand)
      dealerTotal = calculateHand(dealerHand);

      prompt(`Dealer has: ${listCards(dealerHand)}.`)
      if (dealerTotal > TWENTY_ONE) {
        prompt('Dealer busts! You win!\n')
        dealerBust = true;
        playerChips += wager;
        prompt(`You now have ${playerChips} chips.`);
        break;
      }
    }

    // display winner for non-bust
    if (!dealerBust && !playerBust) {
      prompt(`Dealer has: ${listCards(dealerHand)}...`);
      simulateDelay();
      prompt("Dealer Stays!\n")
      prompt(`Your total is ${playerTotal}.`);
      prompt(`Dealer total is ${dealerTotal}.`);

      if (playerTotal > dealerTotal) {
        prompt(`You win!\n`);
        playerChips += wager;
        prompt(`You now have ${playerChips} chips.`);
      } else if (playerTotal < dealerTotal) {
        prompt('You lose!\n')
        playerChips -= wager;
        prompt(`You now have ${playerChips} chips.`);
      } else {
        prompt("it's a tie!");
      }
    }
    // end round loop: check for clean-out, or ask to play again
    if (playerChips === 0) {
      console.log('')
      break;
    }

    prompt(`play again? y/n`);
    let answer = rlSync.question();
    if (answer.toLowerCase() !== 'y') {
      console.clear();
      break;
    }
  }

  prompt(`You started with ${initialChips} chips.`);
  prompt(`You ended with ${playerChips} chips.\n`);

  if (playerChips === 0) {
    prompt(`You're out of chips! Better luck next time.`);
    prompt(`Call 1-800-GAMBLER if you have a problem.`);
  } else if (initialChips > playerChips) {
    prompt(`That's a bummer - you lost ${initialChips - playerChips} bucks!`);
    prompt(`That's ${((initialChips - playerChips)/initialChips) * 100}% of your money :o`);

  } else if (initialChips < playerChips) {
    prompt(`Nice! You won ${playerChips - initialChips} dollars!`);
  } else {
    prompt(`Not bad - you broke even!`);
  }
  break;
}
