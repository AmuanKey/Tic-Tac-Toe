let gameBoard = ["Y","Y","Y"
                        ,"","",""
                        ,"","",""];

const playerOne = "X";
const playerTwo = "Y";





const winningConditions = [
     [0,1,2], [3,4,5] , [6,7,8],
     [0,3,6], [1,4,7] , [2,5,8],
     [0,4,8], [2,4,6]
];

function checkingWinner(player){
    for(let combo of winningConditions){
        const [a,b,c] = combo;

        if(gameBoard[a]=== player && gameBoard[b] === player && gameBoard[c] === player){

        return true;
        }

    }
    return false;
}


if(checkingWinner(playerOne)){

    console.log("Plyer one wins");
}
else if(checkingWinner(playerTwo)){
    console.log("Plyer two wins");
}
else{
    console.log("nothing yet");
}

