

const board = [];

const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];


  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}













// let board = []


// function play(clickedId) {
//     let playerSpan = document.getElementById('player');
//     let clickedElement = document.getElementById(clickedId);
  
//     if (playerSpan.innerText === 'X') {
//       playerSpan.innerText = 'O';
//       clickedElement.innerText = 'X';
//       board[clickedId] = 'X';
//     } else {
//       playerSpan.innerText = 'X';
//       clickedElement.innerText = 'O';
//       board[clickedId] = 0;
//     }
  

//     let topLeft = board[0];
//     let topMiddle = board[1];
//     let topRight = board[2];
//     let middleLeft = board[3];
//     let middleMiddle = board[4];
//     let middleRight = board[5] 
//     let bottomLeft = board[6] 
//     let bottomMiddle = board[7]  
//     let bottomRight = board[8] 

//     if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight)
//     alert(`${topLeft} is the winner`);
//     return;

//     if (topMiddle !== undefined && topMiddle === topLeft && topMiddle === topRight)
//     alert(`${topMiddle} is the winner`);
//     return;

//     if (topRight !== undefined && topRight === topMiddle && topRight === topLeft)
//     alert(`${topRight} is the winner`);
//     return;

//     if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight)
//     alert(`${middleLeft} is the winner`);
//     return;

//     if (middleMiddle !== undefined && middleMiddle === middleLeft && middleMiddle === middleRight)
//     alert(`${middleMiddle} is the winner`)

//     if (middleRight !== undefined && middleRight === middleMiddle && middleRight === middleLeft)
//     alert(`${middleRight} is the winner`);
//     return;

//     if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight)
//     alert(`${bottomLeft} is the winner`);
//     return;

//     if (bottomMiddle !== undefined && bottomMiddle === bottomLeft && bottomMiddle === bottomRight)
//     alert(`${bottomMiddle} is the winner`);
//     return;

//     if (bottomRight !== undefined && bottomRight === bottomLeft && bottomRight === bottomMiddle)
//     alert(`${bottomRight} is the winner`);
//     return;

//     let boardFull = true;
//     for (let i = 0; i <= 8; i++) {
//         if (board[i] === undefined) {
//             boardFull = false
//         } 
//     }
//         if (boardFull === true) {
//             alert(`cat's game`);
//             }
// }
