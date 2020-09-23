const Game = require("./game.js");

function GameView(ctx){
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    let that = this;

    function startGame(){
        that.game.step();
        that.game.draw(that.ctx);
    }

    setInterval(startGame, 30);
}

module.exports = GameView;