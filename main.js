function board(row, boardArray = []) {
  if (row === 8) {
    return boardArray;
  }
  for (let i = 0; i < 8; i++) {
    boardArray.push([row, i]);
  }
  return board(row + 1, boardArray);
}

function knight() {

  let move = (currentPos, targetPos) => {
    console.log(targetPos, 'HERE HERE HERE');
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

function makeNode(postion) {
  let data = position;
  let next = null;
  let prev = null;

  return { coord, next, prevVal }
}

let myBoard = board(0)
let myKnight = knight();
console.log(myBoard);
console.log(myBoard.length);