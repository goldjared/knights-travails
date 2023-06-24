/*
i have a chess board, a knight

i wanted to calculate the shortest path of the knight from point a to point b.

eg knightmove(pointA, pointB) -> [a] . . . [b]
*/

function board(row, boardArray = []) {
  if (row === 8) {
    return boardArray;
  }
  for (let i = 0; i < 8; i++) {
    boardArray.push(makeNode([row, i]));
  }
  return board(row + 1, boardArray);
}

function knight() {
  let move = (currentPos, targetPos) => {
    // console.log(targetPos, 'HERE HERE HERE');
    const screenArray = currentPos.concat(targetPos);
    let screenArrayResult;
    screenArray.forEach((pos) => {
      if (pos < 1 || pos > 8) {
        screenArrayResult = false;
      }
    });
    if (screenArrayResult === false) return false;

    let colValue = 0;
    let rowValue = 0;
    if (currentPos[0] < targetPos[0]) {
      colValue = targetPos[0] - currentPos[0];
    } else {
      colValue = currentPos[0] - targetPos[0];
    }
    if (currentPos[1] < targetPos[1]) {
      rowValue = targetPos[1] - currentPos[1];
    } else {
      rowValue = currentPos[1] - targetPos[1];
    }
    // console.log(colValue, rowValue, "col, row");
    if (
      colValue < 1 ||
      colValue > 2 ||
      rowValue < 1 ||
      rowValue > 2 ||
      colValue === rowValue
    ) {
      return false;
    } else {
      currentPos = targetPos;
      return true;
    }
  };

  return { move };
}

function makeNode(position) {
  let data = position;
  let next = [];

  return { data, next };
}

function graph(currentPos, node) {
  let root = buildGraph(currentPos, node);

  function buildGraph(currentPos, node) {
    if (visitedNodes.length === 64) {
      console.log("base met.");
      return;
    }

    if (visitedNodes.length === 0) {
      node = makeNode(currentPos);

      visitedNodes.push(node.data);
    }
    let possibleMoves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];

    possibleMoves.forEach((moves) => {
      let currentPossibleMove = [
        node.data[0] + moves[0],
        node.data[1] + moves[1],
      ];

      if (myKnight.move(node.data, currentPossibleMove) != false) {
        //checking if node (just made, can go there)
        //check visitedNodes for currentPoss, if it's there, return.
        // if its not there, node.next.push(makeNode(currentPoss))
        // and visitedNodes.push(currentPost)
        if (
          visitedNodes.find((element) => element === currentPossibleMove) ===
          currentPossibleMove
        ) {
          return;
        } else {
          let newNode = makeNode(currentPossibleMove);
          node.next.push(newNode);
          visitedNodes.push(currentPossibleMove);
          // buildGraph(currentPossibleMove, newNode)
        }
      }
    });
    return node;
  }
  return root;
}

let myBoard = board(0);
let visitedNodes = [];
let myKnight = knight();
// console.log(myBoard[0])
// console.log(myBoard.length);
let fuckThis = graph([4, 4]);

console.log(fuckThis, "HERE HERE HERE");
console.log(fuckThis.next[2]);
console.log(fuckThis.next[3]);
console.log(visitedNodes);
