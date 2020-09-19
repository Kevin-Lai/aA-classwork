
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    //console.log("Got here");
    if (numsLeft > 0){
        reader.question("Please enter a number", function (answer) {
            sum += parseInt(answer, 10);
            console.log(sum);
            addNumbers(sum,numsLeft-1,completionCallback);
        });
    }
    else if (numsLeft == 0){
        completionCallback(sum);
    }
}

addNumbers(0, 3, sum => {console.log(`Total Sum: ${sum}`); reader.close();} );
// reader.close();
//console.log("Last program line");
