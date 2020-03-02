console.log('Hello')

// In index.js, create a function called `play`. We will be invoking this function any time one of 9 boxes are clicked. 
// - Using the passed in parameter and `getElementById` select the box that was clicked and save it to a new variable.
// - In the `play` function, using 'getElementById', select the span in the html with the id of `player`. 
// - Every time this function runs we will want to toggle the `X` to a `O` or vise versa to signify the next player's turn.
// - At the conclusion of this step you should see that when the board is clicked, it alternates between inserting an X and an O 

let board = []


function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
  
    if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      clickedElement.innerText = 'X';
      board[clickedId] = 'X';
    } else {
      playerSpan.innerText = 'X';
      clickedElement.innerText = 'O';
      board[clickedId] = 0;
    }
  }

let board[0] = topLeft;
let board[1] = topMiddle;
let board[2] = topRight;
let board[3] = middleLeft;
let board[4] = middleMiddle;
let board[5] = middleRight;
let board[6] = bottomLeft;
let board[7] = bottomMiddle;
let board[8] = bottomRight;

if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight)
alert(`${topLeft} is the winner`);
return;

if (topMiddle !== undefined && topMiddle === topLeft && topMiddle === topRight)
alert(`${topMiddle} is the winner`);
return;

if (topRight !== undefined && topRight === topMiddle && topRight === topLeft)
alert(`${topRight} is the winner`);
return;

if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight)
alert(`${middleLeft} is the winner`);
return;

if (middleMiddle !== undefined && middleMiddle === middleLeft && middleMiddle === middleRight)
alert(`${middleMiddle} is the winner`)

if (middleRight !== undefined && middleRight === middleMiddle && middleRight === middleLeft)
alert(`${middleRight} is the winner`);
return;

if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight)
alert(`${bottomLeft} is the winner`);
return;

if (bottomMiddle !== undefined && bottomMiddle === bottomLeft && bottomMiddle === bottomRight)
alert(`${bottomMiddle} is the winner`);
return;

if (bottomRight !== undefined && bottomRight === bottomLeft && bottomRight === bottomMiddle)
alert(`${bottomRight} is the winner`);
return;



