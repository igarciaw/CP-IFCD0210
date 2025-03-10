// Hundir la flota
// Crea un programa en Javascript que dibuje el tablero del juego Guerra de Barcos o Hundir la Flota (matriz de 10x10);

// Debe generar un tablero de 10 x 10.
// Generar 2 barcos grandes (portaviones -3 casillas)
// Generar 2 barcos medios (acorazados -2 casillas)
// Generar 5 barcos pequeños (destructores -1 casillas)
// La posición de los barcos podrá ser horizontal como vertical.
// Los barcos no podrán solaparse, que esté un barco dentro de su misma posición.
// Se deberá generar un menú para generar tablero, los barcos
// pd: Se podrá añadir de forma adicional si se desea la opción de disparar los barcos y hundir el barco.

const BOARD_SIZE = 10;
const SHIPS = [
    { name: 'Portaviones', size: 3, count: 2 },
    { name: 'Acorazado', size: 2, count: 2 },
    { name: 'Destructor', size: 1, count: 5 }
];

function createBoard() {
    return Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));
}

function placeShips(board) {
    SHIPS.forEach(ship => {
        for (let i = 0; i < ship.count; i++) {
            let placed = false;
            while (!placed) {
                const isHorizontal = Math.random() < 0.5;
                const row = Math.floor(Math.random() * BOARD_SIZE);
                const col = Math.floor(Math.random() * BOARD_SIZE);
                if (canPlaceShip(board, row, col, ship.size, isHorizontal)) {
                    placeShip(board, row, col, ship.size, isHorizontal, ship.name);
                    placed = true;
                }
            }
        }
    });
}

function canPlaceShip(board, row, col, size, isHorizontal) {
    if (isHorizontal) {
        if (col + size > BOARD_SIZE) return false;
        for (let i = 0; i < size; i++) {
            if (board[row][col + i] !== null) return false;
        }
    } else {
        if (row + size > BOARD_SIZE) return false;
        for (let i = 0; i < size; i++) {
            if (board[row + i][col] !== null) return false;
        }
    }
    return true;
}

function placeShip(board, row, col, size, isHorizontal, shipName) {
    for (let i = 0; i < size; i++) {
        if (isHorizontal) {
            board[row][col + i] = shipName;
        } else {
            board[row + i][col] = shipName;
        }
    }
}

function displayBoard(board) {
    console.log(board.map(row => row.map(cell => (cell ? cell[0] : '.')).join(' ')).join('\n'));
}

const board = createBoard();
placeShips(board);
displayBoard(board);