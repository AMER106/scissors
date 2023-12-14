let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
     const randInd=Math.floor(Math.random()*3);
     return options[randInd];
}
const drawGame=()=>{
  console.log("game was draw");
  msg.innerHTML="Game was Draw Play again.."
  msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
 if(userWin){
  console.log("you win");
  userScore++;
  userScorePara.innerHTML=userScore;
  msg.innerHTML=`you win! your ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor="green";
  
  
 }
 else{
  console.log("you lose");
  compScore++;
  compScorePara.innerHTML=compScore;
  msg.innerHTML= `you lose ${userChoice} beats your ${compChoice}`;
  msg.style.backgroundColor="red";
 }
}
const playGame=(userChoice)=>{
console.log("user choice=",userChoice);
//generate computer choice-->modular way of programming ...for every action we are going to create separate functions to perform the operation
const compChoice=genCompChoice();
console.log("com choice =", compChoice);
if(userChoice===compChoice){
  //draw game
  drawGame();

}
else{
  let userWin=true;
  if(userChoice ==="rock"){
    //scissors,paper
    userWin= compChoice==="paper"? false :true
  }
  else if(userChoice==="paper"){
    //rock,scissors
    userWin=compChoice==="scissors"? false:true;
  }else{
    //rock,paper
     userWin= compChoice==="rock"?false:true
  }
  showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice)=>{
  console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});