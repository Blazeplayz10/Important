console.log("JS FLOW CONTROL")
console.log("----------------------------------")

var isMale = true
var fullName = "Divine Eddy"
var companyName = "Fhenix Africa"
var creditScore = 95
var finalScore = 100

if (isMale){
    console.log("I'm a dude")
}


if(fullName.length == companyName.length){
    console.log("The two strings have the same length")
} else{
    console.log("The two strings are of different lengths")
}

if(finalScore > 50){
    console.log("You passed the exam")
} else{
    console.log("You failed the exam")
}

/*
    * if(condition){
    *     do something
    * } else{
    *   do something else
    * }
    * 
    * Build a JS guessing game

*/

if (finalScore < 10){
    console.log("You are a failure")
}
else if(finalScore >= 10 && finalScore < 20){
    console.log("F9")
}
else if(finalScore >= 20 && finalScore < 30){
    console.log("E8")
}
else if(finalScore >= 30 && finalScore < 50){
    console.log("D7")
}
else if(finalScore >= 50 && finalScore < 99){
    console.log("B2")
}
else{
    console.log("A1")
}

