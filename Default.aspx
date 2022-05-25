<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Original writing 2008 ++trent wyatt -->
<head>
    <title>JavaScript Chess</title>

    <script type="text/javascript" language="javascript" src="ChessPieces/Game.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Move.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Piece.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Pawn.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Rook.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Knight.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Bishop.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Queen.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/King.js"></script>
    <script type="text/javascript" language="javascript" src="ChessPieces/Board.js"></script>
<!--    <script type="text/javascript" language="javascript" src="intranet.js"></script> -->

</head>
<body onload="onLoad();">
    <br />
    <center>
        <script type="text/javascript" language="javascript">createHtmlBoardTable();</script><br />
        <input type="button" style='width: 150px; height: 30px;' onclick="javascript:board.runTest();" value='Make Move' />
    </center>

</body>
</html>
