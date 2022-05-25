/* ----------------------------------------------------------------------------
 *
 * Bishop.js - Subclass definition for the Bishop class.
 *
 * Inherits from: Piece() in Piece.js
 *
 * The Bishop represents the bishop chess game piece. It contains/replaces
 * properties and methods unique to bishops.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

/* ----------------------------------------------------------------------------
 *
 * Bishop Constructor
 *
 * n = player number (relative to 0)
 * x,y (optional) = board position
 * b (optional) reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function Bishop(n,x,y,b) {
    Piece.call(this, BISHOP, n, x, y, b);
    this.value = VBISHOP;
}
Bishop.prototype = new Piece();
Bishop.prototype.constructor = Bishop;

// override base class for desired methods
Bishop.prototype.getImageName = function() { return "bishop.gif"; }

Bishop.prototype.getAllMoves = function() {
    var results = new Array();

    // check for moves to the top and to the right
    for( var z=1; (this.x + z) < gridWidth && (this.y - z) >= 0; z++ ) {
        var exist = this.b.getPiece(this.x + z,this.y - z);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x + z, this.y - z ) );
        if( exist != null )
            break;
    }

    // check for moves to the bottom and to the right
    for( var z=1; (this.x + z) < gridWidth && (this.y + z) < gridHeight; z++ ) {
        var exist = this.b.getPiece(this.x + z,this.y + z);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x + z, this.y + z ) );
        if( exist != null )
            break;
    }

    // check for moves to the bottom and to the left
    for( var z=1; (this.x - z) >= 0 && (this.y + z) < gridHeight; z++ ) {
        var exist = this.b.getPiece(this.x - z,this.y + z);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x - z, this.y + z ) );
        if( exist != null )
            break;
    }

    // check for moves to the top and to the left
    for( var z=1; (this.x - z) >= 0 && (this.y - z) >= 0; z++ ) {
        var exist = this.b.getPiece(this.x - z,this.y - z);
        if( exist == null || exist.n != this.n )
            results.push( new Move( this.x, this.y, this.x - z, this.y - z ) );
        if( exist != null )
            break;
    }

    return results;
}


// delete any inherited properties or methods we want to inherit through our prototype
delete Bishop.prototype.b;
