const check = document.getElementById("check")
check.addEventListener("click", checkAnswer)

function checkAnswer(){
    const result = document.getElementById("result")
    var computerNum = Math.round(Math.random() * 10)
    var userNum = document.getElementById("userNum").value
    

    if (userNum == computerNum){
        result.style.color = "green"
        result.innerText = "You guessed right :)"
    }
    else if(userNum > computerNum){
        result.style.color = "red"
        result.innerText = "Too high :("
    }
    else if(userNum < computerNum){
        result.style.color = "red"
        result.innerText = "Too low :("
    }

    result.innerHTML =`The computer guessed ${computerNum}<br>
    You guessed ${userNum}`
}

/* 
    const number = Number(prompt("Enter a Number: "))
    const guess = Math.round(Math.random() * 10)
    if(number === guess){
        console.log("You got it right")
    }else{
        console.log(`Wrong guess. The correct answer is ${guess}`)
    }
*/