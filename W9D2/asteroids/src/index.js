// index.js
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;

window.addEventListener("DOMContentLoaded",()=>{
    // created 2 new variables to use on the console for index.
    canvasElement = document.getElementById("canvas")
    ctx = canvasElement.getContext("2d")
})