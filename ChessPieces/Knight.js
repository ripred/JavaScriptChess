/* ----------------------------------------------------------------------------
 *
 * Knight.js - Subclass definition for the Knight class.
 *
 * Inherits from: Piece() in Piece.js
 *
 * The Knight represents the knight chess game piece. It contains/replaces
 * properties and methods unique to knights.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

/* ----------------------------------------------------------------------------
 *
 * Knight Constructor
 *
 * n = player number (relative to 0)
 * x,y (optional) = board position
 * b (optional) reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function Knight(n,x,y,b) {
    Piece.call(this, KNIGHT, n, x, y, b);
    this.value = VKNIGHT;
}
Knight.prototype = new Piece();
Knight.prototype.constructor = Knight;

// override base class for desired methods
Knight.prototype.getImageName = function() { return "knight.gif"; }

Knight.prototype.getAllMoves = function() {
    var results = new Array();

    var deltas = [
        { dx:-1, dy:-2 },
        { dx: 1, dy:-2 },
        { dx:-1, dy: 2 },
        { dx: 1, dy: 2 },
        { dx:-2, dy:-1 },
        { dx: 2, dy:-1 },
        { dx:-2, dy: 1 },
        { dx: 2, dy: 1 }
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
delete Knight.prototype.b;
