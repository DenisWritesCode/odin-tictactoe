// Hold the current state of the board.
let game = {
  winner: "", // Declare winner
  won: false, // Is this board won yet.
  turn: "x", // Whose turn is it to play
  gameBoard: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], // Current state of our board.
};

// For coordinating with our displayed content.
const buttons = Array.from(document.querySelectorAll(".box"));
const turnDisplay = document.querySelector(".state .turn");
const turnParagraph = document.querySelector(".state");
const reset = document.querySelector(".reset");
const gameState = document.querySelector(".gameWon");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentSquare = GameFlow(e.target); // Get a flow.
    currentSquare.mark(); // Mark the square & Check whether it was won.
  });
});

// Reset
reset.addEventListener("click", (e) => {
  game.gameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let board = game.gameBoard;
  game.turn = "x";

  turnDisplay.innerText = game.turn;
  gameState.classList.add("hidden");
  turnParagraph.classList.remove("hidden");

  for (let i = 0; i < board.length; ++i) {
    buttons[i].innerText = board[i];
  }
});

// Controls the flow of the board.
function GameFlow(square) {
  // Check whether the currentSquare has being played or not.
  const isOccupied = (square) => {
    if (Number(square.innerText)) {
      // If it is a number, it hasn't being played yet.
      return false;
    }
    return true;
  };

  const checkWin = () => {
    const board = game.gameBoard;
    if (board[0] === board[1] && board[1] === board[2]) return true;
    else if (board[3] === board[4] && board[4] === board[5]) return true;
    else if (board[6] === board[7] && board[7] === board[8]) return true;
    else if (board[0] === board[3] && board[3] === board[6]) return true;
    else if (board[1] === board[4] && board[4] === board[7]) return true;
    else if (board[2] === board[5] && board[5] === board[8]) return true;
    else if (board[0] === board[4] && board[4] === board[8]) return true;
    else if (board[2] === board[4] && board[4] === board[6]) return true;
    else return false;
  };

  function updateTurn(turn) {
    turnDisplay.innerText = game.turn;
  }

  const gameWon = (turn) => {
    if (checkWin()) {
      gameState.classList.remove("hidden");
      turnParagraph.classList.add("hidden");
      gameState.innerText = `${turn} won the game`;
    }
  };

  // Update state of gameBoard.
  const updateBoard = (playedTurn) => {
    game.gameBoard[square.id - 1] = playedTurn;
    square.innerText = game.turn; // Change display.
    gameWon(playedTurn); // After playing, check whether any player has won.
  };

  // Mark clicked square.
  const mark = () => {
    if (!isOccupied(square)) {
      let turn = game.turn;
      updateBoard(turn); // Change display.
      game.turn = game.turn === "x" ? "o" : "x"; // Flip turn upon successful play.
      updateTurn(game.turn);
    }
  };
  return { mark };
}

// Player Logic.
function CreatePlayer(name, symbol) {
  return {
    name,
    symbol,
  };
}
