const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js")

function Game(){
    this.DIM_X = 400;
    this.DIM_Y = 400;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship({pos: this.randomPosition(), game: this});
}

Game.prototype.randomPosition = function(){
    // .random() => between 0 and 1
    let x = Math.floor((Math.random() * this.DIM_X))
    let y = Math.floor((Math.random() * this.DIM_Y))

    return [x,y];
}

Game.prototype.addAsteroids = function(){
    for(let i=0; i<this.NUM_ASTEROIDS;i++){
        this.asteroids.push( new Asteroid( {pos: this.randomPosition(), game: this} ) )
    }
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    for (let i = 0; i < this.allObjects.length; i++) {
        this.allObjects[i].draw(ctx);        
    }
    // this.ship.draw(ctx);
    // this.asteroids.forEach(ele => ele.draw(ctx));
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat(this.ship)
}

Game.prototype.moveObjects = function(){
    for (let i = 0; i < this.allObjects.length; i++) {
        this.allObjects[i].move();        
    }
    // this.asteroids.forEach(ele => ele.move());
}

Game.prototype.wrap = function(pos){
    //if pos hits negative...
    let wrappedPosX = pos[0];
    let wrappedPosY = pos[1];

    if (pos[0] < 0) {
        wrappedPosX = 400;
    }

    if (pos[1] < 0) {
        wrappedPosY = 400;
    }

    if (pos[0] > 400) {
        wrappedPosX = 0;
    }

    if (pos[1] > 400) {
        wrappedPosY = 0;
    }

    // let wrappedPosX = Math.abs(pos[0] % 400);
    // let wrappedPosY = Math.abs(pos[1] % 400);
    return [wrappedPosX, wrappedPosY]
}

Game.prototype.checkCollisions = function(){
    // let ship = this.allObjects[this.allObjects.length -1 ]

    for (let i = 0; i < this.allObjects.length - 1; i++) {
        if(this.allObjects[i].collideWith(this.ship)){

            break;
        }
    }

}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid){
    let removeIndex = this.allObjects.indexOf(asteroid);
    // splice(startIndex,numberOfItemsToRemove)
    // howmany	Optional. The number of items to be removed. If set to 0, no items will be removed
    this.asteroids.splice(removeIndex, 1);

}
module.exports = Game;