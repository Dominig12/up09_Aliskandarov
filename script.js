let list_mark = document.querySelector("#ul_1");
let button_a = document.querySelector("button");
let input_a = document.querySelector("input");

button_a.addEventListener("click", add_list);

function add_list(){
    let mark_list = document.createElement('li')
    mark_list.textContent = input_a.value
    input_a.value = ""
    list_mark.append(mark_list)
}