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
  function graph(currentMove, board, target) {
    function buildGraph(currentMove, board, target) {
      let node = getSquareNode(currentMove, board);
      node.marked = true;

      let possibleMoves = move(currentMove);

      for (let i = 0; i < possibleMoves.length; i++) {
        let workingNode = getSquareNode(possibleMoves[i], board);

        node.next.push(workingNode);
        if (workingNode.marked === false) {
          if (workingNode === target) return;
          buildGraph(workingNode.data, board, target);
        }
      }
      return node;
    }
    let root = buildGraph(currentMove, board, target);
    return root;
  }
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
  return { move, graph };
}
let myBoard = buildBoard();
let copyBoard = myBoard;
let myKnight = knight();
// console.log(typeof myBoard);
// console.log(typeof fuck);
// console.log(getSquareNode([3, 0], myBoard));
// console.log(myBoard.getSquareNode([4,4]));
// console.log(myBoard.length);
let testThis = myKnight.graph([0, 1], myBoard, [0, 4]);
// console.log(testThis);
console.log(myBoard);
// setTimeout(() => {
//   console.log(myBoard[0], '1');
// }, "300");
// setTimeout(() => {
//   console.log(myBoard[1].next, '2');
// }, "300");
// setTimeout(() => {
//   console.log(myBoard[0].next.next, 'here');
// }, "300");
