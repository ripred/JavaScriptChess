/* ----------------------------------------------------------------------------
 *
 * Pawn.js - Subclass definition for the Pawn class.
 *
 * Inherits from: Piece() in Piece.js
 *
 * The Pawn represents the pawn chess game piece. It contains/replaces
 * properties and methods unique to pawns.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

/* ----------------------------------------------------------------------------
 *
 * Pawn Constructor
 *
 * n = player number (relative to 0)
 * x,y (optional) = board position
 * b (optional) reference to game board
 *
 * ----------------------------------------------------------------------------
 */
function Pawn(n,x,y,b) {
    Piece.call(this, PAWN, n, x, y, b);
    this.value = VPAWN;
}
Pawn.prototype = new Piece();
Pawn.prototype.constructor = Pawn;

// override base class for desired methods
Pawn.prototype.getImageName = function() { return "pawn.gif"; }

Pawn.prototype.getAllMoves = function() {
    var results = new Array();

    // set up the notion of the 'forward' direction based on our side since pawns can only move forward
    var fwdOne = (this.n == PLAYER_1) ? this.y - 1 : this.y + 1;
    var fwdTwo = (this.n == PLAYER_1) ? this.y - 2 : this.y + 2;

    if( fwdOne >= 0 && fwdOne < gridHeight )
    {
        var occupied = this.b.getPiece(this.x, fwdOne);
        if( occupied == null )
            results.push( new Move( this.x, this.y, this.x, fwdOne ) );

        if( this.x - 1 >= 0 )
        {
            occupied = this.b.getPiece(this.x - 1, fwdOne);
            if( occupied != null && occupied.n != this.n )
                results.push( new Move( this.x, this.y, this.x - 1, fwdOne ) );
        }

        if( this.x + 1 < gridWidth )
        {
            occupied = this.b.getPiece(this.x + 1, fwdOne);
            if( occupied != null && occupied.n != this.n )
                results.push( new Move( this.x, this.y, this.x + 1, fwdOne ) );
        }
    }

    if( !this.moved )
    {
        if( null == this.b.getPiece(this.x, fwdOne) ) {    // can't jump over pieces
            var occupied = this.b.getPiece(this.x, fwdTwo);
            if( occupied == null )
                results.push( new Move( this.x, this.y, this.x, fwdTwo ) );
        }
    }

    return results;
}


// delete any inherited properties or methods we want to inherit through our prototype
delete Pawn.prototype.b;
