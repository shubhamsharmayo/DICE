document.querySelector(".btn").addEventListener("click",shuffle)
function shuffle(){
    animation()
var randomnumber1 = Math.random()
var randomnumber2 = Math.random()
var d = Math.floor((randomnumber1*100)%6)
//alert(d)

switch(d){
    case 0: document.querySelector(".img1").setAttribute("src","./images/dice1.png")
    break
    case 1: document.querySelector(".img1").setAttribute("src","./images/dice2.png")
    break
    case 2: document.querySelector(".img1").setAttribute("src","./images/dice3.png")
    break
    case 3: document.querySelector(".img1").setAttribute("src","./images/dice4.png")
    break
    case 4: document.querySelector(".img1").setAttribute("src","./images/dice5.png")
    break
    case 5: document.querySelector(".img1").setAttribute("src","./images/dice6.png")
    break
}
var f = Math.floor((randomnumber2*100)%6)
//alert(f)

switch(f){
    case 0: document.querySelector(".img2").setAttribute("src","./images/dice1.png")
    break
    case 1: document.querySelector(".img2").setAttribute("src","./images/dice2.png")
    break
    case 2: document.querySelector(".img2").setAttribute("src","./images/dice3.png")
    break
    case 3: document.querySelector(".img2").setAttribute("src","./images/dice4.png")
    break
    case 4: document.querySelector(".img2").setAttribute("src","./images/dice5.png")
    break
    case 5: document.querySelector(".img2").setAttribute("src","./images/dice6.png")
    break
}

document.querySelector("#btn")
if (d>f){
    document.querySelector("h1").textContent= "Player 1 Won"

}
else if(f>d){
    document.querySelector("h1").textContent= "Player 2 Won"
}
else if (f==d){
    document.querySelector("h1").textContent= "DRAW!!!!😎"
}
}
document.addEventListener("keypress",function(event){
    if (event.key==="Enter"){
        shuffle()
    }
})
function animation(){
    document.querySelector(".btn").classList.add("btn1")
    setTimeout(function(){
        document.querySelector(".btn").classList.remove("btn1")
    },200)
}
