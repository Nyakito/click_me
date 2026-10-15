// console.log("Can you see me?")
let main=document.querySelector(".main-btn")
let content=document.querySelector(".div-btn");
let clicks=document.querySelector(".clicks")

let originalText=content.textContent
let clickNumber=0

content.addEventListener('click',()=>{
    content.textContent=("Clicked!")
    clickNumber++
     clicks.textContent=clickNumber;
     updateButton();
});
content.addEventListener('mouseover',()=>{
    content.textContent=("Click Me!")
    updateButton();
})
content.addEventListener('mouseout',()=>{
    content.textContent=originalText
    updateButton();
})

function updateButton(){
    if (clickNumber>=50){
    content.textContent=("YO, GO GET A HOBBY!");
}
}
