// - WHAT IS A NESTED LOOP AND GIVE EXAMPLES OF NESTED FOR AND WHILE LOOPS
// A nested loop is a loop within a loop:
    for(let i = 0; i <= 4; i++){
        for(let j = 0; j <= 10; j++){
            console.log(i, j)
        }
    }

    i = 0
    while(i < 11){
        j = 0
        while(j < 11){
            console.log(j)
            j++
        }
        i++
    }



// PROGRAM THAT USES `do_while` LOOP
let userName = ""
do{
    userName = prompt("Enter i, ja username")
    console.log("userName is empty!")
}while(userName == null || userName == undefined || userName == "")


    
// PROGRAM USING `switch_cases`
let switchEval = 0
switch(switchEval){
    case 0:
        console.log("The var is empty")
        break;
    case 1:
        console.log("The var's value is 1")
        break;
    case 2:
        console.log("The var's value is 2")
        break;
    case 3:
        console.log("The var's value is 3")
        break;
    default:
        console.log("No matching cases found")
}

   
    

// WRITE AN EVEN NUMBER CHECKER
var numberToCheck = 3
if(numberToCheck % 2 == 0){
    console.log("The number is even")
}else{
    console.log("The number is odd")
}
// Modify Guessing game(max: 10Tries, new random number should be generated, eac correct guess = +5 pts, wrong guess = 0pts)