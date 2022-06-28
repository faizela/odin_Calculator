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
let operationsArray = [plus, minus, multiply_btn, divide_btn, equal_btn]


let currentText = ''

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

function col_4_add_EV() {
  for (let btn of col_4_btns){
    btn.addEventListener('click',() => display_val(btn))
  }
}






col_1_add_EV()
col_2_add_EV()
col_3_add_EV()
col_4_add_EV()



function checkOperators() {
  let numstore = [];
  for (let btn of operationsArray){ 
    btn.addEventListener('click', () => {
      let first_num
      let chosenoperator
      first_num = currentText[0]
      first_num_int = parseInt(first_num)
      chosenoperator = btn.textContent
      numstore.push(first_num_int)
      console.log(first_num)
      console.log(numstore)
     

      
     if (btn.id == 'equal'){
       operate(chosenoperator, first_num_int,  )
       
     }
     

      
    })}
  }

  
  
 checkOperators()



console.log(add(2,3))
console.log(substract(3,2))
console.log(multiply(3,2))
console.log(divide(8,2))
console.log(operate('-', 2, 8))

