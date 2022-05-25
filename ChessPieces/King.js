/* ----------------------------------------------------------------------------
 *
 * King.js - Subclass definition for the King class.
 *
 * Inherits from: Piece() in Piece.js
 *
 * The King represents the king chess game piece. It contains/replaces
 * properties and methods unique to kings.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

/* ----------------------------------------------------------------------------
 *
 * King Constructor
 *
 * n = player number (relative to 0)
 * x,y (optional) = board position
 * b (optional) reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function King(n,x,y,b) {
    Piece.call(this, KING, n, x, y, b);
    this.value = VKING;
}
King.prototype = new Piece();
King.prototype.constructor = King;

// override base class for desired methods
King.prototype.getImageName = function() { return "king.gif"; }

King.prototype.getAllMoves = function() {
    var results = new Array();

    var deltas = [
        { dx: 0, dy:-1 },
        { dx: 1, dy:-1 },
        { dx: 1, dy: 0 },
        { dx: 1, dy: 1 },
        { dx: 0, dy: 1 },
        { dx:-1, dy: 1 },
        { dx:-1, dy: 0 },
        { dx:-1, dy:-1 }
    ];

    for( var index=0; index < deltas.length; index++ ) {
        var newXLoc = this.x + deltas[index].dx;
        var newYLoc = this.y + deltas[index].dy;

        if( newXLoc < 0 || newXLoc >= gridWidth ||
            newYLoc < 0 || newYLoc >= gridHeight )
            continue;

        var exist = this.b.getPiece(newXLoc,newYLoc);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, newXLoc, newYLoc ) );
    }

    return results;
}

// delete any inherited properties or methods we want to inherit through our prototype
delete King.prototype.b;
