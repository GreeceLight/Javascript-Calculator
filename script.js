const screenDisplay = document.querySelector("#screentext");

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => button.addEventListener('click', function(){
    screenDisplay.textContent = screenDisplay.textContent.concat(button.textContent);
}))






function add(adNum1, adNum2){return adNum1 + adNum2;}
function subtract(subNum1, subNum2){return subNum1 - subNum2;}
function multiply(mulNum1, mulNum2){return mulNum1 * mulNum2;}
function power(powNum1, powNum2){return powNum1 * powNum2;}
function divide(divNum1, divNum2){return divNum1 / divNum2;}