let gameBoard = ["","",""
                        ,"","",""
                        ,"","",""];

let playerOne = "X";
let playerTwo = "O";



gameBoard[1]= playerOne;
gameBoard[6]= playerOne;
gameBoard[8]= playerOne;

if (gameBoard[0] == "X" && gameBoard[1] == "X" && gameBoard[2] == "X"
    || gameBoard[3] == "X" && gameBoard[4] == "X" && gameBoard[5] == "X"
    || gameBoard[6] == "X" && gameBoard[7] == "X" && gameBoard[8] == "X"
    || gameBoard[0] == "X" && gameBoard[3] == "X" && gameBoard[6] == "X"
    || gameBoard[1] == "X" && gameBoard[4] == "X" && gameBoard[7] == "X"
    || gameBoard[2] == "X" && gameBoard[5] == "X" && gameBoard[8] == "X"
    || gameBoard[0] == "X" && gameBoard[4] == "X" && gameBoard[8] == "X"
    || gameBoard[2] == "X" && gameBoard[4] == "X" && gameBoard[6] == "X") {
    console.log("Player 1 wins");
}else{
    console.log("nothing");
}