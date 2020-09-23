const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Ship(options){
    
    options["color"] = "green";
    options["radius"] = 5;
    options["vel"] = 0;

    MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(){

}

module.exports = Ship;
