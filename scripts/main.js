console.log('It has loaded!');
// var connect4 = createArray();
// function createArray() {
//   var board = [];
//   for(let i = 0; i<6; i++){
//     board[i] = [];
//     for(let j = 0; j<7; j++){
//       board[j].push('*');
          var $discspots = $('.spots');
          $discspots.click();

//     }
//   }
//   return board;
// }
function switchTurns(previousColor) {
  if (previousColor === 'red') {
    whoisTurnIsIt = 'black'
  } else {
    whoisTurnIsIt = 'red';
  }
  document.getElementsByClassName('turnBox')[0].innerHTML = whoisTurnIsIt;
}

var $color = $('.spots');
if(whoisTurnIsIt === 'red') {
  changeBackgroundToRed();
} else {
  changeBackgroundToBlack();
}

function changeBackgroundToRed() {
  event.target.style.backgroundColor = 'red';
}

function changeBackgroundToBlack() {
  event.target.style.backgroundColor = 'black';
}
