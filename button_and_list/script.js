let list_mark = document.querySelector("#ul_1");
let button_a = document.querySelector("button");
let input_a = document.querySelector("input");

button_a.addEventListener("click", ()=>{
    add_list()
    change_back()
});

function add_list(){
    let mark_list = document.createElement('li')
    mark_list.textContent = input_a.value
    input_a.value = ""
    list_mark.append(mark_list)
}

function change_back(){
    document.body.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}