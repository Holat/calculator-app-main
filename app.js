const numBtn = document.querySelectorAll(".num");
const screen = document.querySelector(".screen");
const equal = document.querySelector("#equal");
const deleteBtn = document.querySelector("#del");
const resetBtn = document.querySelector("#reset");
const checkBox = document.querySelectorAll(".check");
const body = document.querySelector("body");
const toggle = document.querySelector(".circle");


// check box toggle
checkBox.forEach((check) =>{
    check.addEventListener("click", event =>{
       let btn = event.currentTarget.classList
        if(btn.contains("two")){
            body.className = "theme2"
            toggle.style.transform = "translateX(120%)"
            
        }else if(btn.contains("three")){
            body.className = "theme3"
            toggle.style.transform = "translateX(260%)"

        }else{
            body.className = ""
            toggle.style.transform = ""
        }
    })
})



numBtn.forEach((btn) =>{
    btn.addEventListener("click", numBtnClick);
})
equal.addEventListener("click", displayOutput)
deleteBtn.addEventListener("click" , deleteBtnClick)
resetBtn.addEventListener("click", resetBtnClick)


let disNum = ''

function numBtnClick(e){
    let currentBtn = e.currentTarget.value
    disNum += currentBtn
    screen.innerText = disNum
}


function displayOutput(){    
    let screenDisplay = eval(screen.innerText)
    screen.innerText = screenDisplay
    disNum = ''
}

function deleteBtnClick(){
    if(screen.innerText){
        screen.innerText = screen.innerText.slice(0, -1)
        disNum = disNum.slice(0, -1)
    }
}

function resetBtnClick(){
    screen.innerText = ' '
    disNum = ''
}


