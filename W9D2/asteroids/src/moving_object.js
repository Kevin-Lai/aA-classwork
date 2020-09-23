// moving_object.js
function MovingObject(options) {

    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options["game"];
}

MovingObject.prototype.draw = function(ctx){
    // Draw a circle of the appropriate radius centered at pos.
    // Fill it with the appropriate color.
    ctx.fillStyle = this.color;
    ctx.beginPath();
  
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
}


MovingObject.prototype.move = function(){
    // Increment the pos by the vel.
    //console.log(this);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject){
    //let objectDistance = sqrt( (x2-x1)^2 + (y2-y1)^2 )
    let objectDistance = Math.sqrt( (this.pos[0]-otherObject.pos[0]) ** 2 + (this.pos[1]-otherObject.pos[1]) ** 2 );
    let radiiSum = this.radius + otherObject.radius;
    if (objectDistance < radiiSum){
        return true;
    }
    return false;
}

MovingObject.prototype.collideWith = function(otherObject){
    if (this.isCollidedWith(otherObject)){
        this.game.remove(otherObject);
        // this.game.remove(this);
        return true;
    }
    return false;
}

// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

module.exports = MovingObject;

// const mo = {
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// };