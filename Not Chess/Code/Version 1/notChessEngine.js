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
            rows[i][j] = {
                color: i > 4
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