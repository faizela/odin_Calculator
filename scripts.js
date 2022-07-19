const display = document.getElementById('display');
const col_1_btns = document.getElementsByClassName("col_1-btns");
const col_2_btns = document.getElementsByClassName("col_2-btns");
const col_3_btns = document.getElementsByClassName("col_3-btns");
const col_4_btns = document.getElementsByClassName("col_4-btns");

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply_btn = document.getElementById("multiply")
const divide_btn = document.getElementById("divide")
const equal_btn = document.getElementById("equal")
let operationsArray = [plus, minus, multiply_btn, divide_btn]


let currentText = ''
//let curtarr = currentText.split('+')

const display_val = function (btn) {
  display.innerText += btn.innerText
  currentText = display.textContent
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
 if (operator == '+'){
  return add(a,b)
 }
 else if (operator == '-'){
 return  substract(a,b)
 }
 else if (operator == '*'){
   return multiply(a,b)
 }
 else if (operator == '/'){
  return divide(a,b)
 }

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

function col_4_add_EV() {
  for (let btn of col_4_btns){
    btn.addEventListener('click',() => display_val(btn))
  }
}











function equal_operate () {
  equal_btn.addEventListener('click', () => operate(chosenoperator, first_num, sec_num ))
}



//console.log(fakefunc(operator_Value_add_Ev(), '2'))

col_1_add_EV()
col_2_add_EV()
col_3_add_EV()
col_4_add_EV()
//operator_Add_Ev()


console.log(add(2,3))
console.log(substract(3,2))
console.log(multiply(3,2))
console.log(divide(8,2))
console.log(operate('-',8, 2))
