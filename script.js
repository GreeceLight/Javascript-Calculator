//Grabbing all the buttons to be used during the calculations
const screenDisplay = document.querySelector("#screentext");
const buttons = document.querySelectorAll("#number");
const clearButton = document.querySelector("#clear");
const partyButton = document.querySelector("#party");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const powerButton = document.querySelector("#power");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equals");
//Object that will be used to calculate the expressions
expression = {
    num1 : 0,
    num2 : 0,
    sign : "add"
}
//To enable Party Mode
let inPartyMode = false;
//All Event listeners
//Clears all variables from calculator and clears the screen
clearButton.addEventListener('click', function(){
    reset();
    screenDisplay.textContent = ''
})

partyButton.addEventListener('click', function(){
    if(inPartyMode){
        document.querySelector('body').classList.remove('animation');
        inPartyMode = false
    }
    else{
        document.querySelector('body').classList.add('animation')
        inPartyMode = true
    } 
})

//Makes pressing all number related buttons to show on screen
buttons.forEach(button => button.addEventListener('click', function(){
    if(screenDisplay.textContent.length != 11){
        screenDisplay.textContent= screenDisplay.textContent.concat(button.textContent);
    }
    else return
}))

addButton.addEventListener('click', function(){
    add(expression.num1, expression.num2);
})

subtractButton.addEventListener('click', function(){
    subtract(expression.num1, expression.num2);
})

multiplyButton.addEventListener('click', function(){
    multiply(expression.num1, expression.num2);
})

powerButton.addEventListener('click', function(){
    power(expression.num1, expression.num2);
})

divideButton.addEventListener('click', function(){
    divide(expression.num1, expression.num2);
})

equalButton.addEventListener('click', function(){
    screenDisplay.textContent = equal(expression.sign);
})


function add(adnum1, adnum2){
    adnum1 = parseInt(screenDisplay.textContent) + adnum2;
    adnum2 = adnum1;
    expression.num1 = adnum1;
    expression.num2 = adnum2;
    expression.sign = "add";
    screenDisplay.textContent = '';
}
function subtract(subnum1, subnum2){
    subnum1 = parseInt(screenDisplay.textContent) - subnum2;
    subnum2 = subnum1;
    expression.num1 = -subnum1;
    expression.num2 = subnum2;
    expression.sign = "subtract"
    screenDisplay.textContent = '';
}
function multiply(mulNum1, mulNum2){
    if(mulNum2 == 0 && mulNum1 != 0) mulNum2 = 1;
    mulNum1 = parseInt(screenDisplay.textContent) * mulNum2;
    mulNum2 = mulNum1;
    expression.num1 = mulNum1;
    expression.num2 = mulNum2;
    expression.sign = "multiply"
    screenDisplay.textContent = '';
}
function power(powNum1, powNum2){
    if(powNum2 == 0) powNum2 = 1
    powNum1 = parseInt(screenDisplay.textContent) ** powNum2;
    powNum2 = powNum1;
    expression.num1 = powNum1;
    expression.num2 = powNum2;
    expression.sign = "power"
    screenDisplay.textContent = '';
}
function divide(divNum1, divNum2){
    if(divNum2 == 0) divNum2 = 1
    divNum1 = parseInt(screenDisplay.textContent) / divNum2;
    divNum2 = divNum1;
    expression.num1 = divNum1;
    expression.num2 = divNum2;
    expression.sign = "divide"
    screenDisplay.textContent = '';
}
function equal(){
    switch(expression.sign){
        case "add":
            add(expression.num1, expression.num2);
            console.log(expression.num1);
            break;
        case "subtract":
            subtract(expression.num1, expression.num2);
            console.log(expression.num1);
            break;
        case "multiply":
            multiply(expression.num1, expression.num2);
            console.log(expression.num1);
            break;
        case "divide":
            divide(expression.num1, expression.num2);
            console.log(expression.num1);
            break;
        case "power":
            power(expression.num1, expression.num2);
            console.log(expression.num1);
            break;
    }
}
function reset(){expression = {num1 : 0,num2 : 0}}