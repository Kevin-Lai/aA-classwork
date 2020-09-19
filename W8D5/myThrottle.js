// func.throttle(interval)

// func

// rewritten func
    // lastExecutedTime
    // is currenttime - lastexecutedtime > interval
    // if so, then run the original func, and reset lastexecuted
    // if not, don't do anything

// rewritten func
    // tooSoon variable : true -> do nothing
    // false : make tooSoon true, set up process A, then do original function
    // process A : reset tooSoon varibale in interval ms



// In short, with arrow functions there are no binding of this.

Function.prototype.myThrottle = function(interval){
    let tooSoon = true;
    let reset_func = () => {this.tooSoon=false;}

        if(!tooSoon){
            tooSoon = true;

            // The setTimeout() method calls a function
            // or evaluates an expression after a specified number of milliseconds.
            setTimeout(reset_func, interval);            
        }
        return this;
    }



// class Neuron {
//     fire() {
//       console.log("Firing!");
//     }
//   }


// from below
class Neuron {
    constructor() {
      this.fire = this.fire.myThrottle(500);
    }
    fire() {
        console.log("Firing!");
      }
}


  const neuron = new Neuron();
  // When we create a new Neuron,
  // we can call #fire as frequently as we want
  
// The following code will try to #fire the neuron every 10ms. Try it in the console:
//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);
  
//   // You can use clearInterval to stop the firing:
//   clearInterval(interval);
  
//   // Using Function#myThrottle, we should be able to throttle
//   // the #fire function of our neuron so that it can only fire
//   // once every 500ms:
  
//   neuron.fire = neuron.fire.myThrottle(500);
  


  const interval = setInterval(() => {
    neuron.fire();
  }, 10);
  
  // This time, if our Function#myThrottle worked correctly,
  // the Neuron#fire function should only be able to execute
  // every 500ms, even though we're still trying to invoke it
  // every 10ms!
  
  // If we want this behavior for ALL neurons, we can do the same logic in the constructor:
  
  
