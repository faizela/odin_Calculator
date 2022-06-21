const display = document.getElementById('display');
const col_1_btns = document.getElementsByClassName("col_1-btns");
const col_2_btns = document.getElementsByClassName("col_2-btns");
const col_3_btns = document.getElementsByClassName("col_3-btns");

let currentOperation = ''

display_val = function (btn) {
  display.innerText += btn.innerText
  currentOperation = display.textContent
}


function add (a, b) {
  return a + b
}

function substract (a, b){
    return a - b
}
 
function multiply (a, b){
 return a * b
}

function divide (a, b){
    return a / b
}

function operate (operator, a, b) {

  operations = {
    "+" : (a,b) => a + b, 
    "-" : (a,b) => a - b,
    "*" : (a,b) => a * b, 
    "/" : (a,b) => a / b,

}

return operations[operator] (a,b)

}

function col_1_add_EV() {
  for (let btn of col_1_btns){
  btn.addEventListener('click', () =>  display_val(btn))
  }
}

function col_2_add_EV () {
  for (let btn of col_2_btns){
    btn.addEventListener('click',() => display_val(btn))
  }
}

function col_3_add_EV() {
  for (let btn of col_3_btns){
    btn.addEventListener('click',() => display_val(btn))
  }
}


col_1_add_EV()
col_2_add_EV()
col_3_add_EV()

console.log(add(2,3))
console.log(substract(3,2))
console.log(multiply(3,2))
console.log(divide(8,2))
console.log(operate('+', 4, 3))
