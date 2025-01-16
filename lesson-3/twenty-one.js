let rlSync = require('readline-sync');

const SUITS = ['D', 'S', 'C', 'H'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;

function prompt(msg) {
  console.log("=> " + msg);
}

function joinAnd(arr, punctuation = ", ", word = "and") {
  let outputStr = "";
  if (arr.length === 1) return String(arr[0]);
  if (arr.length === 2) return `${String(arr[0])} ${word} ${String(arr[1])}`;
  arr.forEach((el, idx) => {
    if (idx !== arr.length - 1) {
      outputStr += String(el) + punctuation;
    } else if (idx === arr.length - 1) {
      outputStr += word + " " + String(el);
    }
  });
  return outputStr;
}

function returnSuit(card) {
  switch (card[0]) {
    case 'H': return 'Hearts';
    case 'S': return 'Spades';
    case 'D': return 'Diamonds';
    case 'C': return 'Clubs';
  }
  return undefined;
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
  let readableCards = [];
  for (let card of cards) {
    readableCards.push(returnValue(card) + " of " + returnSuit(card));
  }
  return joinAnd(readableCards);
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
      deck.push([suit, value]);
    }
  }
  return deck;
}

function calculateHand(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  for (let value of values) {
    let faceCards = "KQJ";
    if (faceCards.includes(value)) {
      sum += 10;
    } else if ('A' === value) {
      sum += 11;
    } else {
      sum += Number(value);
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

function display(
  playerHand, dealerHand, playerChips, playerTotal = 0, wager = 0) {
  console.clear();

  console.log("============");
  console.log(`You have ${playerChips} chips.`);
  if (wager) console.log(`Your wager is: ${wager} chips.`);
  console.log("------------");
  console.log(`Dealer is showing: ${listCards(dealerHand.slice(0, 1))}.`);
  console.log(`You have: ${listCards(playerHand)}.`);
  console.log(`Total: ${playerTotal}`);
  console.log("============\n");
}

function exitMessage(initialChips, playerChips) {
  console.log("============");
  prompt(`You started with ${initialChips} chips.`);
  prompt(`You ended with ${playerChips} chips.\n`);

  // Exit message
  if (playerChips === 0) {
    prompt(`You're out of chips! Better luck next time.`);
    prompt(`Call 1-800-GAMBLER if you have a problem.`);
  } else if (initialChips > playerChips) {
    prompt(`That's a bummer - you lost ${initialChips - playerChips} bucks!`);
    prompt(`That's ${((initialChips - playerChips) / initialChips) * 100}% of your money.`);
  } else if (initialChips < playerChips) {
    prompt(`Nice! You won ${playerChips - initialChips} dollars!`);
    prompt(`Maybe you should go pro?`);
  } else {
    prompt(`Not bad - you broke even!`);
  }
  console.log("\nThanks for playing!\n");
}

function getWager(playerChips) {
  let wager = Number(rlSync.question());
  while (isNaN(wager) || wager > playerChips || wager <= 0) {
    if (isNaN(wager)) {
      prompt(`Enter a number.`);
    } else if (wager > playerChips) {
      prompt(`You don't have enough chips for that wager. Try again:`);
    } else if (wager <= 0) {
      prompt("You must wager at least one chip.");
    }
    wager = Number(rlSync.question());
  }
  return wager;
}

function displayWinner(dealerHand, playerTotal, dealerTotal, playerChips) {
  prompt(`Dealer has: ${listCards(dealerHand)}...`);
  prompt("Dealer Stays!\n");
  prompt(`Your total is ${playerTotal}.`);
  prompt(`Dealer total is ${dealerTotal}.`);

  if (playerTotal > dealerTotal) {
    prompt(`You win!\n`);
    //playerChips += wager;
    prompt(`You now have ${playerChips} chips.`);
  } else if (playerTotal < dealerTotal) {
    prompt('You lose!\n');
    //playerChips -= wager;
    prompt(`You now have ${playerChips} chips.`);
  } else {
    prompt("it's a tie!");
  }
}

function updateScore(playerTotal, dealerTotal, playerChips, wager) {
  if (playerTotal > dealerTotal) {
    playerChips += wager;
  } else if (playerTotal < dealerTotal) {
    playerChips -= wager;
  }
  return playerChips;
}

function initializeRound(deck, playerHand, dealerHand) {
  shuffle(deck);
  drawFirstCards(deck, playerHand, dealerHand);
}

// eslint-disable-next-line max-lines-per-function, max-statements
function playRound(playerChips) {
  // Init some control flow variables
  let playerHand = [];
  let dealerHand = [];
  let deck = initializeDeck();

  let playerBust = false;
  let dealerBust = false;
  let playerStay = false;

  // Shuffle deck and draw first cards
  initializeRound(deck, playerHand, dealerHand);
  let playerTotal = calculateHand(playerHand);
  let dealerTotal = calculateHand(dealerHand);
  console.clear();

  // Get wager (with dealer and player hand info displayed to user)
  display(playerHand, dealerHand, playerChips, playerTotal);
  prompt(`What would you like to wager?`);
  let wager = getWager(playerChips);

  // Player Turn
  while (!playerStay) {
    display(playerHand, dealerHand, playerChips, playerTotal, wager);
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
        display(playerHand, dealerHand, playerChips, playerTotal, wager);
        prompt('You busted!');
        playerBust = true;
        playerChips -= wager;
        prompt(`You now have ${playerChips} chips.`);
        break;
      }
    } else {
      playerStay = true;
      display(playerHand, dealerHand, playerChips, playerTotal, wager);
    }
  }

  // Dealer Turn
  while ((dealerTotal < DEALER_LIMIT) && !playerBust) {
    prompt(`Dealer has: ${listCards(dealerHand)}...`);
    // Wish I could implement a pause here? To emulate the dealer thinking.
    prompt("Dealer hits!");
    drawCard(deck, dealerHand);
    dealerTotal = calculateHand(dealerHand);

    if (dealerTotal > TWENTY_ONE) {
      prompt(`Dealer has: ${listCards(dealerHand)}.`);
      prompt('Dealer busts! You win!\n');
      dealerBust = true;
      playerChips += wager;
      prompt(`You now have ${playerChips} chips.`);
      break;
    }
  }

  // Display Winner, updateScore
  if (!dealerBust && !playerBust) {
    playerChips = updateScore(playerTotal, dealerTotal, playerChips, wager);
    displayWinner(dealerHand, playerTotal, dealerTotal, playerChips);
  }

  // End of Round clean-out check
  if (playerChips === 0) {
    console.log("You're out of chips. Game over!");
    return playerChips;
  } else {
    prompt(`play again? y/n`);
    let answer = rlSync.question();
    if (answer.toLowerCase() === 'y') {
      console.clear();
      return playRound(playerChips);
    }
    console.clear();
  }
  return playerChips;
}

function gameLoop() {
  console.clear();

  prompt("Welcome to twenty-one. How many chips will you buy? (Enter $ amount)");
  let playerChips = Math.floor(Number(rlSync.question()));

  while (isNaN(playerChips) || playerChips < 1) {
    prompt(`Please enter a valid number. (Positive Integer)`);
    playerChips = Math.floor(Number(rlSync.question()));
  }

  let initialChips = playerChips;
  playerChips = playRound(playerChips);

  exitMessage(initialChips, playerChips);
}

gameLoop();