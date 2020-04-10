let winCellIndex = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   //horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   //vertical
    [0, 4, 8], [2, 4, 6]  //diagonal
]
let selectedCells = {
    'x': [],
    'o': []
}

let player = 'x';

$('.wrap').on('click', '.cell:not(".cell-x, .cell-o")', oneStep);

function oneStep(event) {
    let $cell = $(event.currentTarget);
    $cell.addClass('cell-' + player);
    let indexCell = $('.wrap .cell').index($cell);
    let selectedCellsPlayer = selectedCells[player];
    selectedCellsPlayer.push(indexCell);
    checkWinner(selectedCellsPlayer);
    if (player == 'x') {
        player = 'o';
    }
    else {
        player = 'x';
    }
}

function checkWinner(selectedCellsPlayer) {
    for (let i = 0; i < winCellIndex.length; i++) {
        let allWinCells = true;
        for (let j = 0; j < winCellIndex[i].length; j++) {
            if ($.inArray(winCellIndex[i][j], selectedCellsPlayer) === -1) {
                allWinCells = false;
            }
        }
        if (allWinCells) {
            alert(player + ' -win!');
            $('.wrap').off('click');
        }
        if (!allWinCells && $('.cell:not(".cell-x, .cell-o")').length === 0) {
            alert('Ничья!');
            $('.wrap').off('click');
            break;
        }
    }
}
