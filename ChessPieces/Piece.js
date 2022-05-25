/*\ ----------------------------------------------------------------------------
|*|
|*| Piece.js - Base Class definition for the Piece class.
|*|
|*| The Piece class represents the base class for all game pieces. It
|*| contains properties and methods common to all pieces.
|*|
|*| original writing: August 2008 ++ trent wyatt
|*|
|*| ----------------------------------------------------------------------------
\*/

/* ----------------------------------------------------------------------------
 *
 * Piece Constructor
 *
 * t = piece type
 * n = player number (relative to 0)
 * x,y = board position
 * b reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function Piece(t,n,x,y,b) {
    this.t = t;         // set the piece type
    this.n = n;         // set the player number
    this.x = x || 0;    // set the x position
    this.y = y || 0;    // set the y position
    this.b = b;         // set the board reference (if passed)
    this.moved = false; // set to true when moved
    this.value = 0;     // set the pieces value
}

// Define common properties


// Define common methods

// Piece.toString()
Piece.prototype.toString = function() {
    return 'Type ' + this.t + ' (' + this.x + ',' + this.y + ')';
}

// Piece.getImageName()
Piece.prototype.getImageName = function() {
    return 'blank.gif';
}

Piece.prototype.getImage = function() {
    return 'images/' + ((this.n == PLAYER_1) ? 'w' : 'b') + this.getImageName();
}

// Piece.display()
// The display() method sets the src property for this pieces location to the appropriate image
Piece.prototype.display = function() {
    this.b.setImage(this.x, this.y, this.getImage());
}

// Piece.move()
// move the piece to the specified board location.  If the location
// is already occupied then it is replaced this this piece.
//
Piece.prototype.move = function(newXLoc,newYLoc) {
//    if( newXLoc < 0 || newXLoc >= gridWidth ||
//        newYLoc < 0 || newYLoc >= gridHeight )
//        throw new Error('location out of bounds error in Piece.move()');

//    if( !this.b )
//        throw new Error('Game board reference not set error in Piece.move()');

    this.b.cells[newYLoc][newXLoc] = this;
    this.b.cells[this.y][this.x] = null;
    this.x = newXLoc;
    this.y = newYLoc;
    this.moved = true;
}

Piece.prototype.getAllMoves = function() {
    return new Array();
}

// ------------------------------------------------------------------

//alert("Parsed Piece.js successfully");
