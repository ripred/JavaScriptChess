/* ----------------------------------------------------------------------------
 *
 * Board.js - Base Class definition for the game Board class.
 *
 * The Board class represents a state of the game and is a container
 * for all valid pieces in a given game state.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

function Board() {
    this.init();
}

Board.prototype.init = function() {
    this.cells = new Array(gridHeight);
    for( var y=0; y < gridHeight; y++ ) {
        this.cells[y] = new Array(gridWidth);
    }

    // now populate the cells array(s) with the initial game pieces

    // first the pawns for boths sides..
    for( var x=0; x < gridWidth; x++ ) {
        // white pieces - default to player 1, near side
        this.cells[gridHeight - 2][x] = new Pawn(PLAYER_1, x, gridHeight - 2, this);

        // black pieces - default to player 2, far side
        this.cells[1][x] = new Pawn(PLAYER_2, x, 1, this);
    }

    // the rest of the white pieces - default to player 1, near side
    var pieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
    for( var index=0; index < pieces.length; index++ ) {
        this.cells[gridHeight - 1][index] = new pieces[index](PLAYER_1, index, gridHeight - 1, this);
        this.cells[0][index] = new pieces[index](PLAYER_2, index, 0, this);
    }
}

// set the image src for the specified board location
Board.prototype.setImage = function(x,y,img) {
    var loc = (y * gridWidth) + x;
    var e = document.getElementById('c' + loc);
    if( !e ) {
        throw new Error("Unable to locate my cell image in the table in method Board.setImage()");
        return;
    }
    e['src'] = (arguments.length > 2) ? img : 'images/blank.gif';
}

// run through all valid pieces on this board and have them set their src property, which updates the display
Board.prototype.display = function() {
    for( var y=0; y < gridHeight; y++ ) {
        for( var x=0; x < gridWidth; x++ )
        {
            if( this.cells[y][x] != null )
                this.cells[y][x].display();
            else
            {
                // empty spot. place a blank on it
                var myLoc = (y * gridWidth) + x;
                var e = document.getElementById('c' + myLoc);
                if( !e )
                {
                    throw new Error("Unable to locate my cell image in the table in method Board.display()");
                    return;
                }
                e['src'] = 'images/blank.gif';
            }
        }
    }
}

// get the piece located at the specified value
Board.prototype.getPiece = function(x,y) {
    if( x < 0 || x >= gridWidth ||
        y < 0 || y >= gridHeight )
        throw new Error('location out of bounds error in Board.getPiece()');

    return this.cells[y][x];
}

// get all available moves for a given player (side)
Board.prototype.getAllMoves = function(n) {
    var results = new Array();

    for( var y=0; y < gridHeight; y++ ) {
        for( var x=0; x < gridWidth; x++ ) {
            var p = this.getPiece(x,y);
            if( p != null && p.n == n )
                results = results.concat(p.getAllMoves());
        }
    }

    return results;
}

// move a piece from one location to anoher
Board.prototype.move = function(x1,y1,x2,y2) {
    var p = this.getPiece(x1,y1);
    p.move(x2,y2);
}

Board.prototype.evaluate = function(n,d) {
    var bestValue = -99999;
    var bestMove = null;
    var otherSide = (n == PLAYER_1) ? PLAYER_2 : PLAYER_1;

    var moves = this.getAllMoves(n);
    for( var moveNum=0; moveNum < moves.length; moveNum++ ) {
        var m = moves[moveNum];

        if( d > 0 )
        {
            var p = this.getPiece(m.x1,m.y1);
            var p2 = this.getPiece(m.x2,m.y2);
            var moved = p.moved;
            if( p2 != null )
                m.value = p2.value;

            p.move(m.x2,m.y2);
            var bestOtherSide = this.evaluate(otherSide, d - 1);
            if( bestOtherSide != null && bestMove != null )
                bestMove.value -= bestOtherSide.value;

            p.move(m.x1,m.y1);
            p.moved = moved;

            this.cells[m.y2][m.x2] = p2;
//            if( p2 != null )
//                p2.display();
        }

        if( bestMove == null || bestMove.value < m.value )
            bestMove = m;
    }

    return bestMove;
}

var curPlayer = PLAYER_1;

Board.prototype.runTest = function() {
    if( 0 ) {
        var plyDepth = 2;
        var bestMove = this.evaluate(curPlayer, plyDepth);
        if( bestMove )
            this.move(bestMove.x1, bestMove.y1, bestMove.x2, bestMove.y2);
        curPlayer = (curPlayer == PLAYER_1) ? PLAYER_2 : PLAYER_1;
        this.display();
    }
    else {
        vegas();
    }
}

function vegas() {
    var x1 = Math.floor((Math.random() * 100) % gridWidth);
    var y1 = Math.floor((Math.random() * 100) % gridHeight);

    var p1 = board.getPiece(x1,y1);
    if( p1 != null ) {
        var moves = p1.getAllMoves();
        if( moves && moves.length > 0 ) {
            var r = Math.floor((Math.random() * 100) % moves.length);
            if( r != Math.NaN ) {
                var p2 = board.getPiece(moves[r].x2, moves[r].y2);
                if( !p2 ) {
                    board.setImage(p1.x, p1.y)
                    p1.move(moves[r].x2, moves[r].y2);
                    p1.display();
                }
            }
        }
    }
    setTimeout(vegas, 0);
}


// The one and only game board
var board = null;

//alert("Parsed Board.js successfully");
