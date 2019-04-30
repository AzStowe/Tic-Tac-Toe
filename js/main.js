/*----- constants -----*/ 
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
    '0': 'white',
};
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]
/*----- app's state (variables) -----*/ 
var board, winner, turn;

 /*----- event listeners -----*/ 
 document.getElementsByClassName('cell').addEventListener('click', handleClick);
 

 // switching turns
 //init();
   
   function handleClick(evt) {
     const marker = evt.target;
     const colIdx = parseInt(marker.id.replace('cell', ''));
     if (isNaN(colIdx) || winner) return;
     const rowIdx = board[colIdx].indexOf(0);
     if (rowIdx === -1) return;
     board[colIdx][rowIdx] = turn;
     winner = getWinner();
     turn *= -1;
     render();
   }

 
/*let table = [];
for ( let r = 0; r < board.length; r++) {
  let col = []
} for (let c = 0; c < board.length; c++) {
    col[c] = 3;
  grid.push(col)
}
*/

// Display the board
board.forEach(function(colArr, colIdx) {
    // Update col markers
    const marker = document.getElementsByClassName('cell');
    marker.style.borderTopColor = colArr.includes(0) ? 'X' : 'O';
    colArr.forEach(function(cell, rowIdx) {
      // Access the correct div in the section
      const div = document.getElementsByClassName('cell');
      div.style.backgroundColor = PLAYERS[cell];
    });
  });


