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
let TotalNum = 0;
let sign = "";
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
    add();
})

subtractButton.addEventListener('click', function(){
    subtract();
})

multiplyButton.addEventListener('click', function(){
    multiply();
})

powerButton.addEventListener('click', function(){
    power();
})

divideButton.addEventListener('click', function(){
    divide();
})

equalButton.addEventListener('click', function(){
    screenDisplay.textContent = equal(expression.sign);
})


function add(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum + TotalNum;
    sign = "add";
    clearScreen();
}
function subtract(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum - TotalNum;
    sign = "subtract"
    clearScreen();
}
function multiply(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum - TotalNum;
    sign = "multiply";
    clearScreen();
}
function power(){
    let inputNum = parseInt(screenDisplay.textContent);

}
function divide(){
    let inputNum = parseInt(screenDisplay.textContent);

}
function equal(){
    switch(expression.sign){
        case "add":
            add();
            console.log();
            break;
        case "subtract":
            subtract();
            console.log();
            break;
        case "multiply":
            multiply();
            console.log();
            break;
        case "divide":
            divide();
            console.log();
            break;
        case "power":
            power();
            console.log();
            break;
    }
}
function reset(){expression = {num1 : 0,num2 : 0}};
function clearScreen(){screenDisplay.textContent = ''};