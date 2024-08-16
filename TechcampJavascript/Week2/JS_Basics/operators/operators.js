console.log("JS OPERATORS")
console.log(" ")

var num1 = 20
var num2 = 30
var num3 = 40
var num4 = 20

var sum = num1 + num2 + num3 + num4
console.log(`The sum is ${sum}`)

var product = num1 * num2 * num3 * num4
console.log(`The product is ${product}`)

var average = sum / 4
console.log(average)

var difference = num1 - num3
console.log(`The difference between ${num1} and ${num3} is ${difference}`)

num3 -= num4
console.log(num3)

num2 *= num3
console.log(num2)

num1 /= num2
console.log(num1)


// Square root = x ** 1/n
var exponent = 2 ** 3
console.log(exponent)

let True = true
let False = false

console.log(True && False)
console.log(True || False)
console.log(!True)
console.log(!False)

/*        
    + - = / * && % || ! // += -= /= *=    
    ? https://youtu.be/5fb2aPlgoys
*/


const pi = 22 / 7
let radius = 12
let length = 6

let squareArea = length * length
let cubeVolume = squareArea * length

let circumference = 2 * pi * radius
let sphereVolume = 4/3 * pi * radius ** 3

console.log(`Area of the Square = ${squareArea}cm^2`)
console.log(`Area of the Circle = ${circumference}cm^2`)
console.log("                          ")
console.log(`Volume of the Cube = ${cubeVolume}cm^3`)
console.log(`Volume of the Sphere = ${sphereVolume}cm^3`)

