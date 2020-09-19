
// =>

Function.prototype.myBind = function(context) {

    return () => { this.apply(context)}
}

// function functionName(arg1, arg2, arg3, argN) {
// const functionName = function(arg1, arg2, arg3, argN) {
// const functionName = (arg1, arg2, arg3, argN) => {

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"
