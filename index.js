let humanScore = 0;
let compScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let refresh = document.getElementById("refresh");

rock.addEventListener("click", function(){
    gameFunc(rock.value, computerPlay())
});

paper.addEventListener("click", function(){
    gameFunc(paper.value, computerPlay())
});

scissors.addEventListener("click", function(){
    gameFunc(scissors.value, computerPlay())
});

refresh.addEventListener("click", function(){
    document.location.reload();
});


function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    let select = "";

    if(randomNum == 0){
        select = "rock";
    } else if(randomNum == 1){
        select = "paper";
    } else {
        select = "scissors";
    }

    return select;
}


function gameFunc(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            humanScore++;
            document.getElementById("humanScore").innerText = humanScore;
            alert("You won! Rock beats scissors!")
        } else if(computerSelection == "paper"){
            compScore++;
            document.getElementById("compScore").innerText = compScore;
            alert("You lost! Paper beats rock!")
        } else{
            alert("It's a draw!");
        }
    }

    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            humanScore++;
            document.getElementById("humanScore").innerText = humanScore;
            alert("You won! Paper beats rock!")
        } else if(computerSelection == "scissors"){
            compScore++;
            document.getElementById("compScore").innerText = compScore;
            alert("You lost! Scissors beats paper!")
        } else{
            alert("It's a draw!");
        }
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            humanScore++;
            document.getElementById("humanScore").innerText = humanScore;
            alert("You won! Scissors beats paper!")
        } else if(computerSelection == "rock"){
            compScore++;
            document.getElementById("compScore").innerText = compScore;
            alert("You lost! Rock beats scissors!")
        } else{
            alert("It's a draw!");
        }
    }

    if(humanScore == 5){
        alert("You won!");
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("refresh").hidden = false;
    } else if(compScore == 5){
        alert("You lost!");
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("refresh").hidden = false;
    }
}





