function buildBoard() {
  let gameBoard = [];

  let row = 0;
  while (row != 8) {
    for (let i = 0; i < 8; i++) {
      gameBoard.push(makeNode([row, i]));
    }
    row++;
  }
  return gameBoard;
}

function getSquareNode(position, board) {
  for (let i = 0; i < 64; i++) {
    if (board[i].data[0] === position[0] && board[i].data[1] === position[1]) {
      return board[i];
    }
  }
}

function makeNode(position) {
  let data = position;
  let next = [];
  let marked = false;

  return { data, next, marked };
}

function knight() {
  let move = (currentMove) => {
    let possibleMoves = [];
    let moveCombos = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];

    moveCombos.forEach((move) => {
      let newMove = [currentMove[0] + move[0], currentMove[1] + move[1]];
      if (
        -1 < newMove[0] &&
        newMove[0] < 8 &&
        -1 < newMove[1] &&
        newMove[1] < 8
      ) {
        possibleMoves.push(newMove);
      }
    });
    return possibleMoves;
  };
  return { move };
}
let myBoard = board();
let copyBoard = myBoard;
let myKnight = knight();
console.log(myBoard);
console.log(myBoard.length);
console.log(myKnight.move([0, 0]));
