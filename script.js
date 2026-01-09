
//variables


let gameBoard = ["","",""
                        ,"","",""
                        ,"","",""];

const playerOne = "X";
const playerTwo = "Y";


const winningConditions = [
     [0,1,2], [3,4,5] , [6,7,8],
     [0,3,6], [1,4,7] , [2,5,8],
     [0,4,8], [2,4,6]
];




//The functionalities

function checkingWinner(player){
    for(let combo of winningConditions){
        const [a,b,c] = combo;

        if(gameBoard[a]=== player && gameBoard[b] === player && gameBoard[c] === player){

        return true;
        }

    }
    return false;
}




//selecting the boxes
let selectedBox = "";
let currentPlayer = playerOne;
for (let i = 1; i<= 9; i++){
    let selectedBox = document.getElementById(`${i}`);
    selectedBox.addEventListener('click',()=>{

        if (gameBoard[i-1] !== "") return;

        gameBoard[i-1] = currentPlayer;
        selectedBox.innerHTML = currentPlayer;



        //check the winner
        if(checkingWinner(currentPlayer)){

            console.log(currentPlayer + " wins");
        }
        else{
            console.log("nothing yet");
        }

        //switching the player
        if(currentPlayer === playerOne){
            currentPlayer = playerTwo;
        }
        else{
            currentPlayer = playerOne;
        }

    })
}



