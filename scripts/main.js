console.log('It has loaded!');
var whoseTurnIsIt = 'red';
var connect4 = createArray();

//function to create a nested array for the connect 4 board
function createArray() {
  var board = [];
  for(let i = 0; i<6; i++){
    board[i] = [];
    for(let j = 0; j<7; j++){
      board[j].push('*');
    }
  }
}

//Player function to drop a colored Disc down and check if the row below it is filled
function dropDisc(color, columnIndex) {
  function tryDropDisc(columnIndex, rowIndex) {
    if (board['column'+columnIndex]['row'+rowIndex]['value'] === 'empty') {
      board['column'+columnIndex]['row'+rowIndex]['value'] = color;
      switchTurns(color);
    } else {
      tryDropDisc(columnIndex, rowIndex-1);
    }
  } x6
  tryDropDisc(columnIndex, 5)
}

//checks whose turn it is and displays the color of whose turn it is in the box
function switchTurns(previousColor) {
  if (previousColor === 'red') {
    whoseTurnIsIt = changeBackgroundToBlack();
  } else {
    whoseTurnIsIt = changeBackgroundToRed();
  }
  $('.turnBox').html(whoseTurnIsIt);
}

var $color = $('.spots');
if(whoisTurnIsIt === 'red') {
  changeBackgroundToRed();
} else {
  changeBackgroundToBlack();
}

//functions to change the background of spots on the board
function changeBackgroundToRed() {
  event.target.style.backgroundColor = 'red';
}

function changeBackgroundToBlack() {
  event.target.style.backgroundColor = 'black';
}
