/* ----------------------------------------------------------------------------
 *
 * Game.js - Base Class definition for the Game class.
 *
 * The Game class represents the namespace for the constants,
 * properties, and methods of a given game. All of these together
 * constitute the rules of a given game.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

// The Board position on the display
var boardTop  = 100;
var boardLeft = 100;

// The width and height of the pieces and squares
var squareWidth = 50;
var squareHeight = 50;

// The Player side constants
var PLAYER_1 = 1;
var PLAYER_2 = 2;

// Piece definitions
var KING   = 6;
var QUEEN  = 5;
var ROOK   = 4;
var BISHOP = 3;
var KNIGHT = 2;
var PAWN   = 1;

// The Piece values
var VKING   = 999999;// Arbitrarily large value since the king can never actually be captured
var VQUEEN  = 9;     // Generally accepted piece values according to the world chess community
var VROOK   = 5;     // although in many endgame variations the piece values change as the
var VBISHOP = 3;     // king becomes an offensive piece.
var VKNIGHT = 3;
var VPAWN   = 1;

// The number of columns and rows on the board
var gridWidth  = 8;
var gridHeight = 8;

// ============================================================================

// create the HTML for the table that acts as the grid container for our game board
function createHtmlBoardTable() {

    with( document ) {
        var cellNum = 0;
        write("<table id='gameboard' border='0' cellpadding='0' cellspacing='0'>");
        for( var y=0; y < gridHeight; y++ ) {
            write('<tr>');
            for( var x=0; x < gridWidth; x++ ) {
                var ypos = (y * squareWidth) + boardTop;
                var xpos = (x * squareHeight) + boardLeft;

                write("<td style='position: relative; top:0px; left: 0px; width: " + squareWidth + "px; height: " + squareHeight + "px; z-index: 1;'>");
                var cellBg = ((cellNum + y) & 1) ? 'images/darksquare.gif' : 'images/lightsquare.gif';
                var cellStyle = "style='position: absolute; top:0px; left: 0px; width: " + squareWidth + "px; height: " + squareHeight + "px; z-index: 2'";
                write("<img " + cellStyle + "' src='" + cellBg + "' />");

                var cellPiece = 'images/blank.gif';
                var linedata = "<img " + cellStyle + " id='c" + cellNum + "' src='" + cellPiece + "' />";
                write(linedata);
                write('</td>');

                cellNum++;
            }
            write('</tr>');
        }
        write('</table>');
    }
}

// onLoad() function. Called when the page has finished loading all
// assets and is about to be displayed
function onLoad() {
    board = new Board();
    board.init();
    board.display();
}

//alert("Parsed Game.js successfully");
