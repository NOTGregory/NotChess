const NORMAL = 0;
const CHECK = 1;
const CHECKMATE = 2;
const STALEMATE = 3;

// Creates a JSON object representing a new board in the Not Chess format
function createBoard() {

    let rows = [];

    for(let i = 0; i < 8; i++) {

        rows[i] = [];

        for(let j = 0; j < 8; j++) {

            if(i >= 2 && i <= 5) {

                rows[i][j] = null;

                continue;
            }

            let type = "pawn";

            if(i == 0 || i == 7) {

                if(j == 0 || j == 7) {
                    type = "rook";
                }

                if(j == 1 || j == 6) {
                    type = "knight";
                }

                if(j == 2 || j == 5) {
                    type = "bishop";
                }

                if(j == 3) {
                    type = "queen";
                }

                if(j == 4) {
                    type = "king";
                }
            }

            rows[i][j] = {
                type,
                color: i > 4,
                moves: 0
            };
        }
    }

    return rows;
}

// Creates a JSON object representing a new game in the Not Chess format
function create() {

    let game = {
        states: [
            createBoard()
        ],
        turn: true,
        time: null
    };

    return game;
}

// Returns a list of moves for a given piece
function getMoves(board, x, y) {

    // Allows the user to pass in either a game object or a single board object
    if(board.states != null)
        board = board.states[board.states.length - 1];

    let moves = [];

    // STUB

    return moves;
}

// Returns the state of the game - See consts at top
function getStatus(game) {
    // STUB
}

// Executes a move
function makeMove(board, move) {

    // Ensures a deep copy
    board = JSON.parse(JSON.stringify(board));

    // Allows the user to pass in either a game object or a single board object

    let game = null;

    if(board.states != null) {
        game = board;
        board = game.states[game.states.length - 1];
    }

    // STUB

    if(game != null) {

        game.states.push(board);
        game.turn = !game.turn;

        return game;
    }

    return board;
}

module.exports = {
    NORMAL,
    CHECK,
    CHECKMATE,
    STALEMATE,
    create,
    createBoard,
    getMoves,
    getStatus,
    makeMove
};

// NOTE: Come up with way of representing moves includes promotion and castling