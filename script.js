const screen = document.querySelector(".calc-screen")
const operators = ["/", "-", "*", "+"]
let lhs = "";
let rhs = "";
let operator = "";

function operate(operator, lhs, rhs){
  switch(operator){
    case "-":
      return lhs - rhs;
    case "+":
      return lhs + rhs;
    case "*":
      return lhs * rhs;
    case "/":
      return lhs / rhs;
  }
}

function displayInput(value){
  if(value.toLowerCase() != "clear" && value != "="){
    if(lhs == ""){
      if(!operators.includes(value)){
        lhs = value;
        screen.textContent += value;
      }
    }else if(lhs != "" && operator == ""){
      if(!operators.includes(value)){
        lhs += value;
        screen.textContent += value;
      }else if(operators.includes(value)){
        operator = value;
        screen.textContent += value;
      }
    }else if(lhs != "" && operator != ""){
      if(!operators.includes(value)){
        rhs = value;
        screen.textContent += value;
      }
    }else if(lhs != "" && operator != "" && rhs != ""){
      if(!operators.includes(value)){
        rhs += value;
        screen.textContent += value;
      }
    }
  }
}

function returnEquation(){
  if(lhs != "" && rhs != "" && operator != ""){
    let statement = operate(operator, parseInt(lhs), parseInt(rhs));
    screen.textContent = statement;
    lhs = statement;
    operator = "";
    rhs = "";
  }
}

function clearScreen(event){
  screen.textContent = "";
  lhs = ""
  rhs = ""
  operator = ""
}