// Create an array of 20 books you've come across
booksArray = [
    "Guiness Book of World Records",
    "Demon Slayer Manga",
    "Teevo",
    "Daily Milk",
    "Daily Power",
    "Arise and Build",
    "Macmillan's Mathematics",
    "Lessons you can learn from the Bible",
    "Understanding Mathematics",
    "The Holy Bible",
    "The Young Heir",
    "Chike and the River",
    "The Consequences of Evil",
    "Stories My Mother Told Me",
    "The Rejected Child",
    "Even One Child",
    "The Saint",
    "Ogadinma, The Story of a Housemaid",
    "Tears of Joy",
    "The Lost Dream"
]

// Use 7 array methods to carry out operations on the array
booksArray.push("Notebook") // 1
console.log(booksArray)

booksArray.pop()// 2
console.log(booksArray)

console.log(booksArray.join("-")) // 3

console.log(booksArray.indexOf("Daily Milk")) // 4


booksArray.unshift("Dee's Nuts") // 5
console.log(booksArray)

booksArray.shift() // 6
console.log(booksArray)

booksArray.reverse() // 7
console.log(booksArray)

// Write a simple program that populates an empty ul element with your array elements
const ul = document.getElementById("ul")
booksArray.forEach((book) => {
    // bookName = document.createElement("li")
    // bookName.textContent = book
    // ul.append(bookName)
    ul.innerHTML += `<li>${book}</li>`
})

// Create a webpage showing 3 buttons and three divs(for each). Using JS, change the color of each div when the corresponding button is clicked
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

btn1.addEventListener("click", () => {
    if(div1.style.color === "black"){
        div1.style.color = "green"
    }
    else{
        div1.style.color = "black"
    }
})
btn2.addEventListener("click", () => {
    if(div2.style.color === "black"){
        div2.style.color = "red"
    }
    else{
        div2.style.color = "black"
    }
})
btn3.addEventListener("click", () => {
    if(div3.style.color === "black"){
        div3.style.color = "blue"
    }
    else{
        div3.style.color = "black"
    }
})