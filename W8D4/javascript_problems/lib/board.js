let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  // Create a new array with length of 8 elements
  let arr = new Array(8);

  // arr = [1,2,3,4,5,6,7,8]
  // arr[0] = 1

  // Then, set each element equal to an array of 8 elements.
  for(let i = 0; i < arr.length; i++){
    // arr[0] = []
    arr[i] = new Array(8);

    // arr = [[],[],[],[],[],[],[],[]]
    
  }

  arr[3][4] = new Piece("black");
  arr[4][3] = new Piece("black");

  arr[3][3] = new Piece("white");
  arr[4][4] = new Piece("white");

  return arr;
};

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {

  let row = pos[0];
  let col = pos[1];

  if ((row < 0 || row > 7) || (col < 0 || col > 7))
    return false;
  
  return true;

};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */

//  def getPiece(pos)

Board.prototype.getPiece = function (pos) {
  let row = pos[0];
  let col = pos[1];
  if ( this.isValidPos(pos) ){
    return this.grid[row][col];
  }
  else {
    throw new Error ("Not valid Pos!");
  }

};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let row = pos[0];
  let col = pos[1];

  // Check if a piece object exists at that pos
  if (this.grid[row][col]){
    if (this.grid[row][col].color === color)
      return true;
    else
      return false;
  }
  else {
    let falsey;
    return falsey;
    // return undefined; // also, works.
    // return this.grid[row][col]; // also, works.
  }

};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let row = pos[0];
  let col = pos[1];

  if (this.grid[row][col])
    return true;
    return false;

};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  let row = pos[0];
  let col = pos[1];

  // returns an array of all pieces between the starting position and ending position.
  let positionsArr = [];

  // 1) returns empty array when pos is not on the board
  // 2) returns empty array when there is a blank space one position away from the current position
  // 3) returns empty array if no pieces of the opposite color are found
  if ( !this.isValidPos(pos) || piecesToFlip === 0 || !this.isOccupied(pos) )
    return [];

    // if (this.grid[row][col].color === color)
    // return [[1,0],[2,0],[3,0]];



  // left: [-1,0]
  // right: [1,0]
  // up: [0,-1]
  // down: [0, 1]
  
  // (-1,-1)   | (1,-1)
  //           |
  //        \  |  /
  // ------- (0,0) -------------
  //        /  |  \
  //           |
  // (-1,1)    | (1,1)

  // diag-left-up: [-1,-1]
  // diag-right-up: [1,-1]

  // diag-left-down: [-1,1]
  // diag-right-down: [1,1]

  // At the end of each iteration, we will have 1 new position added to the positions array.
  positionsArr.push(pos);

  let horizontalDir = dir[0];
  let verticalDir = dir[1];
  
  // Pass the new updated position
  let new_pos = [row+horizontalDir][col+verticalDir];
  
  // Final return statement
  return positionsArr.concat(this._positionsToFlip(new_pos, color, dir, piecesToFlip-1));
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};



module.exports = Board;
