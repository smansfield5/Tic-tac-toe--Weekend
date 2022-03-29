/*----- constants -----*/

const players = {
    '1': 'green',
    '-1': 'red',
    'null': 'blue'
}


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

/*----- app's state (variables) -----*/
let board
let turn
let winner
/*----- cached element references -----*/
const squares = document.querySelector('td div')
const message = document.querySelector('h1')


/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', move);
document.querySelector('button').addEventListener('click', initialize);




/*----- functions -----*/
initialize();

function move(play) {
    const boardIdx = parseInt(play.target.id.replace('sq', ''));

    if (board[boardIdx] || winner) return;
    board[boardIdx] = turn;
    move *= -1;
    winner = getWinner()
    render();
}

function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        if (board[winningCombos[i]] + board[winningCombos[i]] + board[winningCombos[i]] === 3) 
        return 
            if (board.includes(null)) 
            return null;
            return 'Tie Game'

    } 
    
}

function render() {
    board.forEach(function(sq, boardIdx) {
        squares[boardIdx].style.background = players[sq];
    });
    if ( winner === 'Tie Game') {
       message.innerHTML = `Tie Game, Play again?` 
    }  else if (winner) {
        message.innerHTML = `${players[winner]} won!`
    } else {
        message.innerHTML = `${players[turn]}`
    }
}

function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}