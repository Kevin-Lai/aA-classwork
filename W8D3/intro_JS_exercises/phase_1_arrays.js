//Phase 1

Array.prototype.uniq = function () {

    let uniq = [];
    for (let i = 0; i < this.length; i++) {
        
        if ( !uniq.includes(this[i]) ){
            uniq.push(this[i]);
        }

    }
    return uniq;
}

Array.prototype.twoSum = function() {
    let zeroSum = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            if ( (i !== j) && ((this[i] + this[j]) === 0) ) {
                zeroSum.push([i, j]);
            }
        }
    }
    return zeroSum;
}

Array.prototype.transpose = function(){
    let transposed = [];
    for (let i = 0; i < this[0].length; i++) {
        let newArr = [];
        for (let j = 0; j < this.length; j++) {
            newArr.push(this[j][i]);
        }
        transposed.push(newArr);
    }
    return transposed;
}



// arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// i = 0
// this[i] = [1,2,3]

// this[][]

// [ [1,2,3],
//   [4,5,6] ]

// expect:
// [ [1,4],
//   [2,5],
//   [3,6]  ]


