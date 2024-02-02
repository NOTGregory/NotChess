// creates a JSON object representing a new game in the Not Chess format
function create() {
    //try rewriting using for loops - also consider using the map function
    let rows = [];

    for(let i = 0; i < 8; i++){
        rows[i] = [];
        for(let j = 0; j < 8; j++){
            if(i >= 2 && i <= 5){
                rows[i][j] = null;
                continue;
            }
            let type = "pawn";

            if(i == 0 || i == 7){
                if(j == 0 || j == 7){
                    type = "rook";
                }
                if(j == 1 || j == 6){
                    type = "knight";
                }
                if(j == 2 || j == 5){
                    type = "bishop";
                }
                if(j == 3){
                    type = "queen";
                }
                if(j == 4){
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

    let game = {
        rows
    }
    return game;
}

module.exports = {
    create
};