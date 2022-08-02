//Grabbing all the buttons to be used during the calculations
const screenDisplay = document.querySelector("#screentext");
const buttons = document.querySelectorAll("#number");
const decimalButton = document.querySelector("#decimal");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const partyButton = document.querySelector("#party");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const powerButton = document.querySelector("#power");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equals");
//Object that will be used to calculate the expressions
let NumList = [], operatorList = [];
let prevOperator = '';
let hasDecimal = false, hasOperated = false, inPartyMode = false;
let TotalNum = 0;
//All Event listeners
//Clears all variables from calculator and clears the screen

function add(num){
    TotalNum += num;
}
function subtract(num){
    if(TotalNum == 0){TotalNum = num}
    else{TotalNum -= num;}
}
function multiply(num){
        if(TotalNum == 0){TotalNum = 1}
        TotalNum *= num;
}
function power(num){
    if(TotalNum == 0){TotalNum = num}
    else{TotalNum = TotalNum ** num;}
}
function divide(num){
    if(TotalNum == 0){TotalNum = num}
    else{TotalNum = TotalNum / num;}
}
function operate(){
    for(let i = 0; i<NumList.length; i++){
        switch(operatorList[i]){
            case"add":add(NumList[i]); break;
            case"subtract":subtract(NumList[i]); break;
            case"multiply":multiply(NumList[i]); break;
            case"divide":divide(NumList[i]);break;
            case"power":power(NumList[i]); break;
        }
    }
    if(TotalNum != Infinity)screenDisplay.textContent = TotalNum;
    else screenDisplay.textContent = 'Nice Try :P';
    console.log(NumList + ' ' + operatorList);
    reset();
    console.log(NumList + ' ' + operatorList);
    hasOperated = true;
}

function reset(){TotalNum = 0; NumList = []; operatorList = []};
function clearScreen(){screenDisplay.textContent = ''};
function sendToLists(operator){
    NumList.push(parseFloat(screenDisplay.textContent));
    operatorList.push(operator);
    if(operatorList.length == 1){operatorList.push(operator)}
    prevOperator = operator;
    hasDecimal = false;
    clearScreen();
}

clearButton.addEventListener('click', function(){
    reset();
    screenDisplay.textContent = ''
})
deleteButton.addEventListener('click', function(){
    screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
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
    if(screenDisplay.textContent.length != 11 && !hasOperated){
        screenDisplay.textContent= screenDisplay.textContent.concat(button.textContent);
    }
    else{
        clearScreen();
        hasOperated = false;
        screenDisplay.textContent= screenDisplay.textContent.concat(button.textContent);
    }
}))
decimalButton.addEventListener('click', function(){
    if(screenDisplay.textContent.length != 11 && !hasDecimal){
        screenDisplay.textContent= screenDisplay.textContent.concat(decimalButton.textContent);
    }
})

addButton.addEventListener('click', function(){
    sendToLists('add');
})

subtractButton.addEventListener('click', function(){
    sendToLists('subtract');
})

multiplyButton.addEventListener('click', function(){
    sendToLists('multiply');
})

powerButton.addEventListener('click', function(){
    sendToLists('power');
})

divideButton.addEventListener('click', function(){
    sendToLists('divide');
})

equalButton.addEventListener('click', function(){
    sendToLists(prevOperator)
    operate();
})