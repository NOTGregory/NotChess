var notChessEngine = require("./notChessEngine.js");

game = notChessEngine.create();

game = notChessEngine.makeMove(game, [6, 3, 4, 3]);

console.log(JSON.stringify(game, null, "\t"));