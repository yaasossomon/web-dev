let gameOverDiv = document.getElementById("game-over");
let winnerText = document.querySelector("#game-over P ");
let squareArr =  document.querySelectorAll(".ttt-square");
let currentPlayer = "x";

console.log(squareArr);
for (const elem of squareArr){
  elem.addEventListener("click", ()=> drawSymbol(event))
  
}

function drawSymbol(event){
  let clickedSquare = event.target;
  
if(ClickedSquare.innerText=="") clickedSquare.innertext = "currentPlayer";
 if  (checkForWinner()==false) checkForDraw();
  changedPlayer();

}

function checkForWinner(){
  let isGameOver =false;
  //check for 3 in a column
 for(let i=0;i<3;i++){
   if(squareArr[i].innerText==currentPlayer
     &&squareArr[i+3].innerText==currentPlayer
     &&squareArr[i+6].innerText==currentPlayer)isGameOver=true;
 }
  
  
  //check for 3 in a row
  for(let i=0;i<3;i++){
   if(squareArr[i*3].innerText==currentPlayer
     &&squareArr[i*3+1].innerText==currentPlayer
     &&squareArr[i*3+2].innerText==currentPlayer)isGameOver=true;
  
  
  
  
  //check for 3 in a diagonal
  if(squareArr[0].innerText==currentPlayer
     &&squareArr[4].innerText==currentPlayer
     &&squareArr[8].innerText==currentPlayer)isGameOver=true;
  
  else if(squareArr[2].innerText==currentPlayer
     &&squareArr[4].innerText==currentPlayer
     &&squareArr[6].innerText==currentPlayer)isGameOver=true;
    
    
    
    
    
  if (isGameOver) showWinner();
return isGameOver;
}
  function ShowWinner(){
    gameOverDiv.style.display="block";
    winnerText.innerText = currentPlayer+"player has won!"
  }
  function checkForDraw(){
   let isDraw = true;
    for (const elem of sqaureArr){
     if (elem.innerText=="") isDraw = false;
     
   } 
  if(isDraw) showDraw();
    
      function ShowDraw(){
    gameOverDiv.style.display="block";
    winnerText.innerText = currentPlayer+"Tie Game!"
    
  }
  function changedPlayer(){
currentPlayer=((currentPlayer=="x")?"0":"x");
 }
  function clearBoard(){
    //hide game over div
    gameOverDiv.style.display="none";
    
    // clear symbols off the board
   for (const elem of SquareArr){
     elem.innerText="";
   }
