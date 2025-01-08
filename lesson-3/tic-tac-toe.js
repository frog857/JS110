let rlSync = require('readline-sync');

const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_WINNING_NUMBER = 3;

let WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]];

function prompt(str) {
  console.log("=> " + str);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);    
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);    
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);    
  console.log('     |     |');
  console.log('');

  console.log(board);

}

function initializeBoard() {
  let board = {};

  for (let sq = 1; sq < 10; sq++) {
    board[String(sq)] = EMPTY_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY_MARKER);
}

function joinOr(arr, punctuation = ", ", word = "or") {
  let outputStr = "";
  if (arr.length === 1) return String(arr[0]);
  if (arr.length === 2) return `${String(arr[0])} ${word} ${String(arr[1])}`;
  arr.forEach((el, idx) => {
   if (idx !== arr.length - 1) {
     outputStr += String(arr[idx]) + punctuation;
   } else if (idx === arr.length - 1) {
     outputStr += word + " " + String(arr[idx]);
   }
  })
  return outputStr;
}

function immedateThreat(line, board, marker) {
  let markersInLine = line.map(square => board[square])

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === EMPTY_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt('Choose a square:' + joinOr(emptySquares(board)));
    square = rlSync.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt('Sorry, that\'s not a valid choice.');
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  if (!square) {
    for (let line of WINNING_LINES) {
      square = immedateThreat(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  for (let line of WINNING_LINES) {
    square = immedateThreat(line, board, HUMAN_MARKER);
    if (square) break;
  }

  if (!square && board['5'] === " ") square = "5";

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let combo of WINNING_LINES) {
    let [sq1, sq2, sq3] = combo;
    
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) return 'Player';
    
    if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER 
    ) return 'Computer';
  }

  return null;
}

function keepScore(str) {
  // input: string which is either Player or Computer or null
  // output: nothing
  if (str === 'Player') playerScore++;
  if (str === 'Computer') computerScore++;
  prompt(`Your score is now: ${playerScore}, and the computer's score is ${computerScore}`);
}

// program loop

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  
  while (playerScore < MATCH_WINNING_NUMBER && computerScore < MATCH_WINNING_NUMBER) {
    let board = initializeBoard();
    while (true) {
      console.log(`Your score is: ${playerScore}\nComputer's score is ${computerScore}`);
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      prompt(`${winner} won!`);
      if (winner === 'Player') playerScore++;
      if (winner === 'Computer') computerScore++;
    } else {
      prompt('It\'s a tie!');
    }

    prompt(`Your score is: ${playerScore}. Computer: ${computerScore}.`)

    if (playerScore === MATCH_WINNING_NUMBER || computerScore === MATCH_WINNING_NUMBER) {
      prompt("That's max score! Resetting board.")
      break;
    }

    prompt('Play again? (y or n)');
    let answer = rlSync.question().toLowerCase()[0];
    if (answer !== 'y') break;
    }
  break;
  // prompt('Play again? (y or n)');
  // let answer = rlSync.question().toLowerCase()[0];
  // if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
