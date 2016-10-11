console.log('It has loaded!');
// variables set globally before they are called upon in functions
var whoseTurnIsIt = 'red';
var board = $('.spot');

/* function to add click event for all the spots on the connect 4 board
 loop checks whole board to match the attribute of the specific spot on
 board. Board is set up into columns and grabs the columns to see the atrribute
 in the spot that is being selected by click. Checks in the column for the next
 available spot that is empty to place a disc in for the player whose turn it is.
 Also gives a player indicator box to let the players know whose turn it is.
*/
$('.spot').on('click', function(event) {
  var element = $(event.target);
    var col = element.attr('data-column');
    var validSelection = false;
    for (var x = 41; x >=0; x--){
      var currentSpot = $(board[x]);
      var currentCol = currentSpot.attr('data-column');
      if (currentSpot.hasClass('empty') && currentCol == col){
        currentSpot.removeClass('empty');
        currentSpot.addClass(whoseTurnIsIt);
        validSelection = true;
        if (whoseTurnIsIt == 'red'){
          whoseTurnIsIt = 'black';
          $('.turnBox').css('background', 'black');
        }else{
          whoseTurnIsIt = 'red';
          $('.turnBox').css('background', 'red');
        }
      }
      if (validSelection){
        return;
      }
    }
});
function checkVertical() {

}

function checkHorizontal() {

}

function checkDiagonal() {

}

//function to create a nested array for the connect 4 board
// function createArray() {
//   var board = [];
//   for(let i = 0; i<6; i++){
//     board[i] = [];
//     for(let j = 0; j<7; j++){
//       // board[j].push('*');
//     }
//   }
// }

