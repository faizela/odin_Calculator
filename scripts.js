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

console.log(add(2,3))
console.log(substract(3,2))
console.log(multiply(3,2))
console.log(divide(8,2))
console.log(operate('+', 4, 3))