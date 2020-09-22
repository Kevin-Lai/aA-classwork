
function sumArgs(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

// console.log(sumArgs(1, 2, 3, 4) === 10);
// console.log(sumArgs(1, 2, 3, 4, 5) === 15);

function sumRest(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

// console.log(sumRest(1, 2, 3, 4) === 10);
// console.log(sumRest(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function (ctx) {
    // this = caller of myBind
    let that = this;
    // this =>  function says
    // markov.says.myBind(pavlov, "meow", "Kush")();
    // slice(1) => ["meow", "Kush"]

    // markov.says.myBind(pavlov, "meow")("Markov");
    // slice(1) => ["meow"]
    // args = ['meow'], args2 = ['Markov"]

    let args = Array.from(arguments).slice(1);
    console.log(args)
    return function () {
        let args2 = Array.from(arguments);
        console.log(args2);
        // Pavlov says meow to Markov!
        // markov.says.myBind(pavlov, "meow")("Markov");
        // inside of this returning function,
        // the arguments = ["Markov"]

        that.apply(ctx, args.concat(args2));
        console.log(that);
        // ctx = pavlov
        // args = ['meow'] + ['markov'] => ['meow', 'markov']
        // our goal is to turn all arguments into 1 array
        // ["pavlov", 'meow', 'markov']

        // End Result - Dog class object borrowing a Cat class method.
        // Pavlov.says("meow", "Markov")
    }
    // [Arguments] { '0': Dog { name: 'Pavlov' }, '1': 'meow', '2': 'Kush' }
    //console.log(arguments);

    // index 0: Dog object, index 1: arg1, index 2: arg2
    // But we want the name from the Dog object.

    // So, slice(1) removes the first element, and returns all of the rest.
    // if we do that, the args to bound would be '1': 'meow', '2': 'Kush', and context the 0

    // Ahhh. That could be it.
    // yeah let's try that
    // Slice could work.
    // Are we slicing to only get the first object?
    // can you kill terminal and reopen?
    
};

Function.prototype.myBindRest = function (ctx, ...args) {
    let that = this;

    // let args = Array.from(arguments).slice(1);
    // console.log(args)
    return function (...args2) {
        // let args2 = Array.from(arguments);
        // console.log(args);
        // console.log(that);
        // console.log(args2);
        that.apply(ctx, args.concat(args2));
        // console.log(that);
    }
};

// Function.prototype.myBind = function (ctx) {
//     return () => this.apply(ctx);
// };

// Function.prototype.myBind = function (ctx, ...bindArgs) {
//     return (...callArgs) => {
//         return this.apply(ctx, bindArgs.concat(callArgs));
//     }
// }

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBindRest(pavlov, "meow", "Kush")();
// markov.says.myBindRest(pavlov)("meow", "a tree");
// markov.says.myBindRest(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBindRest(pavlov);
// notMarkovSays("meow", "me");

// Currying is the process of decomposing a function that takes multiple 
// arguments into one that takes single arguments successively until it has 
// the sufficient number of arguments to run.

function curriedSum(numArgs) {
    const numbers = []

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            let sum = 0;
            // console.log(this); // 'this' is a window
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        } else {
            return _curriedSum; //return function itself.
        }
    }
    return _curriedSum;
}

// sum(5)(30)(20)(1)
//------------------
// sum(5) = _curriedSum, numbers = [5]
// sum(30) = _curriedSum, numbers = [5,30]
// sum(20) = _curriedSum, numbers = [5,30,20]
// sum(1) = 56, numbers = [5,30,20,1]

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
    let numbers = [];
    let that = this;
    // console.log(that);
    function _curriedSum(num) {
        numbers.push(num); 

        if (numbers.length === numArgs) {
            // console.log(that);
            // this = window
            // that = sumThree
            return that.apply("banana", numbers); //"banana-able"
        } else {
            return _curriedSum; //return function itself.
        }
    }
    return _curriedSum;
}

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30

