/* ----------------------------------------------------------------------------
 *
 * Rook.js - Subclass definition for the Rook class.
 *
 * Inherits from: Piece() in Piece.js
 *
 * The Rook represents the rook chess game piece. It contains/replaces
 * properties and methods unique to rooks.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

/* ----------------------------------------------------------------------------
 *
 * Rook Constructor
 *
 * n = player number (relative to 0)
 * x,y (optional) = board position
 * b (optional) reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function Rook(n,x,y,b) {
    Piece.call(this, ROOK, n, x, y, b);
    this.value = VROOK;
}
Rook.prototype = new Piece();
Rook.prototype.constructor = Rook;

// override base class for desired methods
Rook.prototype.getImageName = function() { return "rook.gif"; }

Rook.prototype.getAllMoves = function() {
    var results = new Array();

    // check for moves to the top
    for( var z=1; (this.y - z) >= 0; z++ ) {
        var exist = this.b.getPiece(this.x,this.y - z);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x, this.y - z ) );
        if( exist != null )
            break;
    }

    // check for moves to the right
    for( var z=1; (this.x + z) < gridWidth; z++ ) {
        var exist = this.b.getPiece(this.x + z,this.y);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x + z, this.y ) );
        if( exist != null )
            break;
    }

    // check for moves to the bottom
    for( var z=1; (this.y + z) < gridHeight; z++ ) {
        var exist = this.b.getPiece(this.x,this.y + z);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x, this.y + z ) );
        if( exist != null )
            break;
    }

    // check for moves to the left
    for( var z=1; (this.x - z) >= 0; z++ ) {
        var exist = this.b.getPiece(this.x - z,this.y);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x - z, this.y ) );
        if( exist != null )
            break;
    }

    return results;
}


// delete any inherited properties or methods we want to inherit through our prototype
delete Rook.prototype.b;
