let gameBoard = ["","",""
                        ,"","",""
                        ,"","",""];

let playerOne = "X";
let playerTwo = "0";

gameBoard[0]= playerOne;
gameBoard[4]= playerOne;
gameBoard[2]= playerOne;

if (gameBoard[0] == "X" && gameBoard[1] == "X" && gameBoard[2] == "X") {
    console.log("Player 1 wins");
}

