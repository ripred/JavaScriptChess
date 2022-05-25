/* ----------------------------------------------------------------------------
 *
 * Queen.js - Subclass definition for the Queen class.
 *
 * Inherits from: Piece() in Piece.js
 *
 * The Queen represents the queen chess game piece. It contains/replaces
 * properties and methods unique to queens.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

/* ----------------------------------------------------------------------------
 *
 * Queen Constructor
 *
 * n = player number (relative to 0)
 * x,y (optional) = board position
 * b (optional) reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function Queen(n,x,y,b) {
    Piece.call(this, QUEEN, n, x, y, b);
    this.value = VQUEEN;
}
Queen.prototype = new Piece();
Queen.prototype.constructor = Queen;

// override base class for desired methods
Queen.prototype.getImageName = function() { return "queen.gif"; }

Queen.prototype.getAllMoves = function() {
    // We can just do this since the queens moves are the
    // same as the sum of the legal bishop and rook moves.
    return (Rook.prototype.getAllMoves.call(this) || []).concat( Bishop.prototype.getAllMoves.call(this) );
}


// delete any inherited properties or methods we want to inherit through our prototype
delete Queen.prototype.b;
