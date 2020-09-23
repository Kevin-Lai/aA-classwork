// Banana == MovingObject
const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

// Asteroid({pos: [0,0]})

function Asteroid(options){
    // this.COLOR = "orange";
    // this.RADIUS = 15;

    // Surrogate has all of the ParentClass's functions

    // this.prototype = Surrogate
    // Surrogate.pos == ParentClass.pos

    // this.prototype.prototype = Surrogate.prototype = Parent's Prototype
    // this.pos = this.prototype.pos;

    let newOptions = {
        color: "orange",
        radius: 15,
        pos: options["pos"],
        vel: Util.randomVec(10),
        game: options["game"]
    };

    MovingObject.call(this, newOptions)
    // Obj.func.call(context, args)
    // new MovingObject(newOptions)
}


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;