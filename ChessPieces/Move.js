/* ----------------------------------------------------------------------------
 *
 * Move.js - Class definition for the Move class.
 *
 * The Move class represents one possible starting and ending location on the game board.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

function Move(x1,y1,x2,y2) {
    this.x1 = x1 || 0;
    this.y1 = y1 || 0;
    this.x2 = x2 || 0;
    this.y2 = y2 || 0;
    this.value = 0;
}
