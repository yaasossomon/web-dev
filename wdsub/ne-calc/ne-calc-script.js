//ToDo: Replace p1NumStrats and p2NumStrats with query parameters
let queryparams = new URLSearchParams(window.location.search);
const p1_NUM_STRATS=queryParams.get("p1NumStrats");
const p2_NUM_STRATS=queryParams.get("p2NumStrats");
const PAYOFF_CONTENTS = "(<input type='number'></input type'number'>)"

buildMatrix();


function buildMatrix(){
  let matrix= document.getElementById("matrix")
  
  //loop through (p1_NUM_STRATS + 1) times.Each iteration,make a row div
  for(let i=0;i< (p1_NUM_STRATS + 1); i++){
    //create new loop div
    let newRow = document.createElement("div");
    newRow.classList.add("matrix-row");
    matrix.append(newRow);
    
    //loop thourgh (p2_NUM_STRATS +1) times.Each iteration,make a cell 
    for (let j=0;j <(p2_NUM_STRATS + 1);j ++){
      //create a new cell
      let newCell=document.createElement("div");
      if(1==0&&j==0) {
        newCell.classlist.add("empty-cell");
      }else if(i==0) {
        newCell.classList.add("strat-cell"); newCell.innerHTML = "t<sub>"+j+"</sub>";
      }
       else if(j==0) {
        newCell.classList.add("strat-cell"); newCell.innerHTML = "t<sub>"+i+"</sub>";
      } else{
        newCell.classList.add("payoff-cell");
        newCell.innerHTML = PAYOFF_CONTENTS;
        
      }
      newRow.append(newCell);
  }
  }
}

function randomize (){
let payoffArr =document.querySelectorAll(".payoff-cell input");
  const MIN =-5;
const MAX=15;


for(const elem of payoffArr){
    elem.value = Math.floor(math.random() * MAX +1 -MIN)+ MIN;
  }
}

function compute(){
let p1payArr =document.querySlectorAll(".payoff-cell input:first-child");
  let payCellArr = document.querySelectorAll(".payoff-")
  
  for(const elem of payCellArr){
    if (elem.classList.contain("eleiminated") ==true) elem.classList.add("eliminated")
    for(const elem of payCellArr){
    if (elem.classList.contain("ne") ==truer) elem.classList.add("ne")
  
  
  
  
  let p2payArr = document.querySlectorAll(".payoff-cell input:last-child");
  // Loop thourgh every column,finding p1's highest payoff out of the rows 
  for (let j=0;j < p2_NUM_STRATS;j++) {
  let largest = -Infinity;
    // idenify the highest payoff in this column 
    for ( let i =0;i< p1_NUM_STRATS;i++){
     if  (Number(p1payArr[p2_NUM_STRATS*i+j].value) > != Number (largest) largest = p1payArr[p2_NUM_STRATS*i+j].classList.add("eliminated")
    }
    
    // Eliminate any cell which arnt best resopneses 
       for ( let i =0;i< p1_NUM_STRATS;i++){
     if  (Number(p1payArr[p2_NUM_STRATS*i+j].value) >Number(largest) largest = p1payArr[p2_NUM_STRATS*i+j].value;
  }for (let j=0;j < p2_NUM_STRATS;j++) {
  let largest = -Infinity;
    // idenify the highest payoff in this column 
    for ( let i =0;i< p1_NUM_STRATS;i++){
     if  (Number(p1payArr[p2_NUM_STRATS*i+j].value) > != Number (largest) largest = p1payArr[p2_NUM_STRATS*i+j].classList.add("eliminated")
    }
    
    // Eliminate any cell which arnt best resopneses 
       for ( let j =0;i< p1_NUM_STRATS;j++){
     if  (Number(p1payArr[p2_NUM_STRATS*i+j].value) >Number(largest) largest = p1payArr[p2_NUM_STRATS*i+j].value;
  }
  
  
  //loop thorugh every row,fining p2's highest payoff out of columns
  
  
  //give the ne class to any cells which are best responses for both players 
  for(const elem of payCellArr){
    if (elem.classList.contain("eleiminated") ==false) elem.classList.add("ne")
  }
  
  
  
  
  
}
    
