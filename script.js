const screen = document.querySelector(".calc-screen")

function displayInput(value){
  if(value.toLowerCase() != "clear"){
    screen.textContent += value;
  }
}

function clearScreen(event){
  screen.textContent = "";
}