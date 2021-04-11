// Hold the current state of the board.
let game = {
  winner: "", // Declare winner
  won: false, // Is this board won yet.
  turn: "x", // Whose turn is it to play
  gameBoard: ["x", "o", "x", "o", "x", "o", "o", "x", "o"], // Current state of our board.
};

// Controls the flow of the board.
function GameFlow() {
  return {};
}

// Player Logic.
function CreatePlayer(name, symbol) {
  return {
    name,
    symbol,
  };
}

// For coordinating with our displayed content.
const boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});

function displayController(gameBoard) {
  for (let i = 0; i < boxes.length; ++i) {
    boxes[i].innerText = game.gameBoard[i];
  }
}

displayController();
