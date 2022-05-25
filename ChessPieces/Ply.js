/* ----------------------------------------------------------------------------
 *
 * Ply.js - Base Class definition for the ply level class.
 *
 * The Ply class represents the state of 'context' of the game engine as it enumerates
 * the various possibles moves and picks the best ones.
 *
 * Writing Ply heuristics and management is usually implemented as a recursive set of
 * methods which 'branch' down the various moves that can be made.  By their recursive
 * nature they are usually hard on the cpu and rely on the 'unwinding' of the recursion
 * to keep their state (each time a recusive function returns from a call to itself it
 * represents a closure of all descending branches, wrapping their analysis up into one
 * or more 'best moves found so far').
 *
 * Long running recursion is hard in javascript because most modern javascript engines
 * contain code to detect possible runaway programs and that can adversely affect recursively
 * written systems.  Instead we are going to 'flatten' out the recursion so that the same
 * branching takes place except we keep track of where we are in a Ply context that can be
 * set aside and returned to to continue analysis.  This allows the ply system to iterate
 * through the available moves as sets, considering each set during a callback trigerred
 * on a timer, so that the system does not consume the cpu in a tight recursive loop.
 * The same amount of work has to be done and without recursion it will take slightly
 * longer but it is more manageable.
 *
 * original writing: August 2008 ++ trent wyatt
 *
 * ----------------------------------------------------------------------------
 */

function Ply(a) {

    this.pieces = a || new Array(); // the pieces that we are examining for moves
    this.moves = new Array();       // array of moves that can be made for the current piece (the top of the pieces array is the current piece)
    this.bestMoves = new Array()    // list of best moves found so far
}

Ply.prototype.examinePly = function() {



}
