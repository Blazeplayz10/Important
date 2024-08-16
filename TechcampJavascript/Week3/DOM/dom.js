// const p = document.querySelector("p")
// console.log(p)

// const section = document.querySelector("section")
// console.log(section)

// const anchorTag = document.querySelector("a")
// console.log(anchorTag)

const divTags = document.querySelectorAll("div")

// const li = document.querySelector("li")
// console.log(li)
array = ["Candice, Joe, Ligma, Nigga, Deex"]
window.addEventListener("scroll", () => {
    if(scrollY >= 300){
        divTags.forEach((div) => {
            div.innerText = "Yo"
        })
    }
    else{
        divTags.forEach((element, index) => {
            divTags[index].innerText = array[index]
            console.log(element)
            console.clear()
        })
    }
})
