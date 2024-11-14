const screen = document.querySelector(".calc-screen")
const operators = ["/", "-", "*", "+"]
let lhs = "";
let rhs = "";
let operator = "";
let result = false;

function operate(operator, lhs, rhs){
  switch(operator){
    case "-":
      return lhs - rhs;
    case "+":
      return lhs + rhs;
    case "*":
      return lhs * rhs;
    case "/":
      if(rhs == 0){
        return "dbz"
      }
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
        if(result){
          lhs = value;
          screen.textContent = value;
        }else{
          lhs += value;
          screen.textContent += value;
        }
      }else if(operators.includes(value)){
        operator = value;
        screen.textContent += value;
      }
    }else if(lhs != "" && operator != ""){
      if(!operators.includes(value)){
        if(rhs == ""){
          rhs = value;
        }else{
          rhs += value;
        }
        screen.textContent += value;
      }
    }
  }
}

function returnEquation(){
  if(lhs != "" && rhs != "" && operator != ""){
    let statement = operate(operator, parseInt(lhs), parseInt(rhs));
    if(statement == "dbz"){
      clearScreen()
      screen.textContent = "Divide by Zero Error!"
      return;
    }
    screen.textContent = statement;
    lhs = statement;
    result = true;
    operator = "";
    rhs = "";
  }
}

function clearScreen(){
  screen.textContent = "";
  lhs = ""
  rhs = ""
  operator = ""
}