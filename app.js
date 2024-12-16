let UserScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const UserScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const genCompChoice = () => {
    let option = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return option [randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin) => {
    if( userWin) {
        UserScore++
        UserScorePara.innerText = UserScore;
        msg.innerText = "you win!"
        msg.style.backgroundColor = "green"
    } else {
        console.log( "you lose!")
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = "you lose"
        msg.style.backgroundColor = "red"
        
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice)

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }else if (userChoice === "paper"){
           userWin = compChoice === "scissor" ? false : true
      } else {
          userWin = compChoice === "rock" ? false : true;
      }

      showWinner(userWin);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice)
    });
}); 