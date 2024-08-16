let numberOfTries = 10
let numberOfPoints = 0

while(numberOfTries > 0){
    var userNum = prompt("Enter a number between 1 and 10: ")
    var computerNum = Math.round(Math.random() * 10)

    if(computerNum == userNum){
        console.log("You win!")
        numberOfPoints += 5
    }
    else{
        console.log("That's not it, Try again ")
    }
    numberOfTries--
}

console.log(`You have ${numberOfPoints}pts`)
console.log(`You took ${numberOfTries} tries`)
