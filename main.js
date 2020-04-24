let numeric = document.querySelectorAll(".numeral")
let screen = document.querySelector(".screen")
let operators = document.querySelectorAll(".operator")
let eval_f = document.querySelector(".eval")
let clear = document.querySelector(".clear")
let result = ""
let auto_clear = false

numeric.forEach(element => {
    element.addEventListener("click", ()=>{
        if(auto_clear)
            clear_screen()
        if(element.textContent != "."){
            if(screen.textContent == "0")
                screen.textContent = ""
            screen.textContent = screen.textContent+element.textContent
        }
        else if(screen.textContent.indexOf(".")==-1)
            screen.textContent = screen.textContent+element.textContent
    })
})

operators.forEach(element => {
    element.addEventListener("click", ()=>{
        if(auto_clear)
            clear_screen()
        result += screen.textContent
        result += element.textContent
        screen.textContent = "0"
    })
})

clear.addEventListener("click", clear_screen)
eval_f.addEventListener("click", rezult)

function clear_screen(){
    screen.textContent = "0"
    result = ""
    auto_clear = false
}

function rezult(){
    result += screen.textContent
    screen.textContent = result + "=" + eval(result)
    auto_clear = true
}

clear_screen()