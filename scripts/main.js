var connect4 = createArray();
function createArray() {
  var board = [];
  for(let i = 0; i<6; i++){
    board[i] = [];
    for(let j = 0; j<7; j++){
      board[j].push('i');
      board[j].click(dropDisk);
    }
  }
  return board;
}

