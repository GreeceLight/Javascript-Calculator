//Grabbing all the buttons to be used during the calculations
const screenDisplay = document.querySelector("#screentext");
const buttons = document.querySelectorAll("#number");
const clearButton = document.querySelector("#clear");
//Object that will be used to calculate the expressions
expression = {
    num1 : 0,
    num2 : 0
}
//All Event listeners
//Clears all variables from calculator and clears the screen
clearButton.addEventListener('click', function(){
    reset();
    screenDisplay.textContent = ''
})

//Makes pressing all number related buttons to show on screen
buttons.forEach(button => button.addEventListener('click', function(){
    if(screenDisplay.textContent.length != 11){
        screenDisplay.textContent= screenDisplay.textContent.concat(button.textContent);
    }
    else return
}))






function add(adNum1, adNum2){return adNum1 + adNum2;}
function subtract(subNum1, subNum2){return subNum1 - subNum2;}
function multiply(mulNum1, mulNum2){return mulNum1 * mulNum2;}
function power(powNum1, powNum2){return powNum1 * powNum2;}
function divide(divNum1, divNum2){return divNum1 / divNum2;}
function reset(){expression = {num1 : 0,num2 : 0}}