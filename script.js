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
    if(TotalNum == 0){powerUp()}
    else{powerTo()}
})

divideButton.addEventListener('click', function(){
    if(TotalNum == 0){divideWith()}
    else {divideBy()}
})

equalButton.addEventListener('click', function(){
    equal();
})


function add(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum + TotalNum;
    sign = "add";
    clearScreen();
}
function subtract(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum =  (TotalNum * (-1)) - inputNum;
    sign = "subtract"
    clearScreen();
}
function multiply(){
    if(TotalNum == 0){
        TotalNum = 1;
    }
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum * TotalNum;
    sign = "multiply";
    clearScreen();
}
function power(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = TotalNum ** inputNum;
    sign = "power"
    clearScreen();
}
function powerUp(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum; 
    clearScreen();
}
function divideBy(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = TotalNum / inputNum;
    sign = 'divide'
    clearScreen();
}
function divideWith(){
    let inputNum = parseInt(screenDisplay.textContent);
    TotalNum = inputNum;
    sign = 'divide'
    clearScreen();
}
function equal(){
    switch(sign){
        case "add":
            add();
            screenDisplay.textContent = TotalNum;
            reset();
            break;
        case "subtract":
            subtract();
            screenDisplay.textContent = TotalNum;
            reset();
            break;
        case "multiply":
            multiply();
            screenDisplay.textContent = TotalNum;
            reset();
            break;
        case "divide":
            divideBy();
            screenDisplay.textContent = TotalNum;
            reset();
            break;
        case "power":
            powerTo();
            screenDisplay.textContent = TotalNum;
            reset();
            break;
    }
}
function reset(){TotalNum = 0; sign = ''};
function clearScreen(){screenDisplay.textContent = ''};