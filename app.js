const APIEndpoint = "http://api.quotable.io/random";
let spansFromAPISentence
const sentence = document.querySelector(".sentence-to-write")
const textareaToTest = document.querySelector(".textarea-to-test")

async function getNewSentence(){
    try{

        const responce = await fetch(APIEndpoint)

    if(!responce) throw new Error()

    const {content} = await responce.json()
    sentence.textContent=""

    content.split("").forEach(character=>{
        const spanCharacter = document.createElement("span")
        spanCharacter.textContent=character
        sentence.appendChild(spanCharacter)
        console.log(spanCharacter) 
    })
    spansFromAPISentence = document.querySelectorAll(".sentence-to-write span")
    
    }catch(error){
        console.log(error)
    } 

}
getNewSentence()

const timeDisplay = document.querySelector(".time")
const scoreDisplay = document.querySelector(".score")

window.addEventListener("keydown",handleStart)

let time = 60
let score =0

function handleStart(e){
    if(e.key==="Escape"){

        let time = 60
let score =0

timeDisplay.classList.add("active")
textareaToTest.classList.add("active")

timeDisplay.textContent = `Temps : ${time}`
scoreDisplay.textContent = `Score : ${score}`
textareaToTest.value = ""

spansFromAPISentence.forEach(span =>span.className = "" )
textareaToTest.addEventListener("input",handleTyping)
textareaToTest.focus()
    }
}

function handleTyping(){

    const checkedSpans = checkSpans()
}