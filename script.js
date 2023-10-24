//User input button
let btn = document.querySelector("#choice")

//Tally buttons
let pScore = document.querySelector('#player')
let cScore = document.querySelector('#computer')
let rd = document.querySelector('#rd')

//Store tally values
let playerScore = 0
let computerScore = 0
let round = 0

//Add click event to button
btn.addEventListener("click", game)

//Function for rock paper scissors
function rps (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        let message = "That was a tie!"
        return message
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){  
        let message = `You chose ${playerSelection} and the computer chose
            ${computerSelection}. You lose!`
        return message
        }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        let message = `You chose ${playerSelection} and the computer chose
            ${computerSelection}. You win!`
        return message
        }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        let message = `You chose ${playerSelection} and the computer chose
            ${computerSelection}. You win!`
        return message
        }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        let message =`You chose ${playerSelection} and the computer chose
        ${computerSelection}. You lose!`
        return message
        }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        let message = `You chose ${playerSelection} and the computer chose
            ${computerSelection}. You win!`
        return message
        }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        let message = `You chose ${playerSelection} and the computer chose
            ${computerSelection}. You lose!`
        return message
        }
}

//Function for 5 rounds of rock paper scissors 
function game (e) {

    //Get user input
    let playerSelection = ""
    let target = e.target
    switch (target.id){
        case "rock" :
            playerSelection = "rock"
            break
        case "paper" :
            playerSelection = "paper"
            break
        case "scissors" : 
            playerSelection = "scissors"
            break
    }

    //Randomly generate rock, paper, or scissors
    const weapon = ["rock", "paper", "scissors"]
    function getComputerChoice() {
    return weapon[Math.floor(Math.random() * weapon.length)]
    }
    let computerSelection = getComputerChoice()
    if (!computerSelection){
        console.log(computerSelection)
    }

    //Initialize result
    let msg = document.createElement("div")
    msg.setAttribute("class", "msg")
    msg.textContent = ""

    //Display result on page
    let result = rps(playerSelection, computerSelection)
    msg.textContent = result
    let body = document.querySelector("body")
    body.appendChild(msg)

    //Add points
    if (msg.textContent.includes("win")){
        playerScore += 1
    } else if (msg.textContent.includes("lose")){
        computerScore += 1
    }
    round += 1

    //Initialize tally
    pScore.textContent = "Player:"
    cScore.textContent = "Computer:"
    rd.textContent = "Round:"

    //Display points
    pScore.textContent += " " + playerScore
    cScore.textContent += " " + computerScore
    rd.textContent += " " + round

    //Play 5 rounds
    if (round == 5 && playerScore > computerScore){
        msg.textContent = `${result} You have ${playerScore} points,
        and the computer has ${computerScore} points. You win the game!`
        //remove eventListener
        btn.removeEventListener("click", game)
        //Start Over Button
        let clear = document.createElement("button")
        clear.setAttribute("class", "clear")
        clear.textContent = "Start Over"
        body.appendChild(clear)
        clear.addEventListener("click", (e) =>{
            pScore.textContent = ""
            cScore.textContent = ""
            rd.textContent = ""
            msg.textContent = ""
            round = 0
            playerScore = 0
            computerScore = 0
            msgs = document.querySelectorAll(".msg")
            msgs.forEach((item) => {
                body.removeChild(item)
            })
            clear.remove()
            btn.addEventListener("click", game)
        })

    } else if (round == 5 && playerScore < computerScore){
        msg.textContent = `${result} You have ${playerScore} points,
        and the computer has ${computerScore} points. You lose the game!`
        //remove eventListener
        btn.removeEventListener("click", game)
        //Start Over Button
        let clear = document.createElement("button")
        clear.setAttribute("class", "clear")
        clear.textContent = "Start Over"
        body.appendChild(clear)
        clear.addEventListener("click", (e) =>{
            pScore.textContent = ""
            cScore.textContent = ""
            rd.textContent = ""
            msg.textContent = ""
            round = 0
            playerScore = 0
            computerScore = 0
            msgs = document.querySelectorAll(".msg")
            msgs.forEach((item) => {
                body.removeChild(item)
            })
            clear.remove()
            btn.addEventListener("click", game)
        })

    } else if (round == 5 && playerScore === computerScore){
        msg.textContent = `${result} You have ${playerScore} points,
        and the computer has ${computerScore} points. It's a tie!`
        //remove eventListener
        btn.removeEventListener("click", game)
        //Start Over Button
        let clear = document.createElement("button")
        clear.setAttribute("class", "clear")
        clear.textContent = "Start Over"
        body.appendChild(clear)
        clear.addEventListener("click", (e) =>{
            pScore.textContent = ""
            cScore.textContent = ""
            rd.textContent = ""
            round = 0
            playerScore = 0
            computerScore = 0
            msgs = document.querySelectorAll(".msg")
            msgs.forEach((item) => {
                body.removeChild(item)
            })
            clear.remove()
            btn.addEventListener("click", game)
        })
    }
}