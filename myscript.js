let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
];


let turn ="o";

function press(x,y) {

    if(turn == "o"){
        turn ="x";
    } else{
        turn = "o";
    }
    // Do stuff
    console.log(x,y)

    board[x][y] = turn;
    let boards = document.getElementById(`${x}${y}`);
    boards.innerText = turn;
    
  
       if (board[0][0] == turn && board[0][1] == turn && board[0][2] == turn){
        document.getElementById("winner").innerText = `Good Job ${turn}`;


    }  if(board[0][2] == turn && board[1][2] == turn && board[2][2] == turn){
        document.getElementById("winner_O").innerText = `Good Job ${turn}`;

    }
       if (board[0][0] == turn && board[1][1] == turn && board[2][2] == turn){
        document.getElementById("winner").innerText = `Good Job ${turn}`;

    }
       if (board[0][1] == turn && board[1][1] == turn && board[2][1] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;

    }
        if (board[0][0] == turn && board[1][0] == turn && board[2][0] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;

    }
        if (board[2][0] == turn && board[2][1] == turn && board[2][2] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;
              
    }
        if (board[0][2] == turn && board[1][1] == turn && board[2][0] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;

    }
        if (board[1][0] == turn && board[1][1] == turn && board[1][2] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;
               
    }
        if (board[0][0] == turn && board[0][1] == turn && board[0][2] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;
      
    }
        if (board[0][2] == turn && board[1][1] == turn && board[2][0] == turn){
         document.getElementById("winner").innerText = `Good Job ${turn}`;
    }
            
        
    
 } 
                        