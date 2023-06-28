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
  let distance = 0;
  let marked = false;

  return { data, next, marked, distance };
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

  function traverse(startNode, end, N) { //start is node
    let visited = new Set();
    let queue = [[startNode]];
    // startNode.distance = 0;

    while(queue.length > 0) {
      let node = queue.shift();
      if(Array.isArray(node)) { node = node[0] }
      let x = node.data[0]
      let y = node.data[1]
      let dist = node.distance;
      if(x === end[0] && y === end[1]) {
        return dist;
      }
      if(!visited.has(node)) {
        visited.add(node)
        let nextMoves = node.next;
        nextMoves.forEach(move => {
          dist += 1;
          queue.push(move);
        })
      }
    }


  }
  return { move, graph, traverse };
}

let myBoard = buildBoard();
let copyBoard = myBoard;
let myKnight = knight();

//myKnight.move(a, b) => build a graph, and then traverse that graph. and then output the result.
// let testThis = myKnight.graph([0, 0], myBoard, [0, 4]);
// console.log(myKnight.traverse(myBoard[0], [7,7]));
