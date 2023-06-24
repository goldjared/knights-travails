function board(row = 0, boardArray = []) {
  if (row === 8) {
    return boardArray;
  }
  for (let i = 0; i < 8; i++) {
    boardArray.push([row, i]);
  }
  return board(row + 1, boardArray);
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
