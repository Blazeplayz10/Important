// A function is a block of code that takes input values, processes them and returns an output

function factorial(num){
    if(num <= 1)
        return 1
    return num * factorial(num - 1)
}

const factorial2 = () => {
    if(num <= 1)
        return 1
    return num * factorial(num - 1)
}
console.log(factorial(10))

