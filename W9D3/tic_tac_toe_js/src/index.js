const View = require("./ttt-view.js");
const Game = require("./game.js");

  $(() => {
    // Without any let/const/var, the variable will be global.
    // The variables must be global in order to be accessed within the browser console.
    game = new Game();
    view = new View(game,$(".ttt"));
  });
