let parentElement = document.querySelector("body")
let newButton = document.createElement("button")
let newMain = document.createElement("main")

parentElement.append(newButton)
parentElement.append(newMain)

let newImg = document.createElement("img")
let newLink = document.createElement("a")
newImg.src = "tokyovisite-img1.jpg"
newLink.href = "https://www.facebook.com/tokyovisite"
newLink.textContent = "https://www.facebook.com/tokyovisite"


newMain.append(newImg)
newMain.append(newLink)

newImg.className = "image"
newLink.className = "link"

newButton.addEventListener("click", function(){
newMain.remove()
})

