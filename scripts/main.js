console.log('It has loaded!');
// variables set globally before they are called upon in functions
var whoseTurnIsIt = 'red';
var board = $('.spot');

// function to add click event for all the spots on the connect 4 board
//
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
          whoseTurnIsIt = 'blue';
          $('.turnBox').css('background', 'blue');
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

//function to create a nested array for the connect 4 board
function createArray() {
  var board = [];
  for(let i = 0; i<6; i++){
    board[i] = [];
    for(let j = 0; j<7; j++){
      // board[j].push('*');
    }
  }
}

