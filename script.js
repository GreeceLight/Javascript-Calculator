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
//All Numbers inputted and operators used are stored in these variables
let NumList = [], operatorList = [];
let prevOperator = '';
//Used to determine specific events that can happen like clearing or having 1 decimal
let hasDecimal = false, hasOperated = false, inPartyMode = false;
//A final variable to display to the screen
let TotalNum = undefined;

//All functions calculating the operations
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function power(num1, num2){
    return num1 ** num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//The operate function goes through every number and operation in respective variables
//and does the correct operation according to what the current one is
function operate(){
    for(let i = 0; i<NumList.length; i++){
        switch(operatorList[i]){
            case"add":
                TotalNum = add(NumList[i-1], NumList[i]); 
                if(!isNaN(TotalNum)){NumList[i] = TotalNum};
                break;
            case"subtract":
                TotalNum = subtract(NumList[i-1], NumList[i]);
                if(!isNaN(TotalNum)){NumList[i] = TotalNum}; 
                break;
            case"multiply":
                TotalNum = multiply(NumList[i-1], NumList[i]); 
                if(!isNaN(TotalNum)){NumList[i] = TotalNum};
                break;
            case"divide":
                TotalNum = divide(NumList[i-1], NumList[i]); 
                if(!isNaN(TotalNum)){NumList[i] = TotalNum};
                break;
            case"power":
                TotalNum = power(NumList[i-1], NumList[i]); 
                if(!isNaN(TotalNum)){NumList[i] = TotalNum};
                break;
        }
    }
    //Testing for division by 0(Which gives Infinity)
    if(isNaN(TotalNum)){screenDisplay.textContent = "Bad Syntax"}
    else if(TotalNum == Infinity) screenDisplay.textContent = 'Nice Try :P';
    else screenDisplay.textContent = TotalNum
    //console.log(NumList + ' ' + operatorList);
    reset();
    hasOperated = true;
}
//Extra Functions
function reset(){TotalNum = 0; NumList = []; operatorList = []};
function clearScreen(){screenDisplay.textContent = ''};

//Used to add numbers and operations to respective arrays
function sendToLists(operator){
    NumList.push(parseFloat(screenDisplay.textContent));
    operatorList.push(operator);
    if(operatorList.length == 1){operatorList.push(operator)}
    prevOperator = operator;
    hasDecimal = false;
    clearScreen();
}
//=======================================================================
//All event listeners
clearButton.addEventListener('click', function(){
    reset();
    screenDisplay.textContent = ''
})
deleteButton.addEventListener('click', function(){
    screenDisplay.textContent = screenDisplay.textContent.slice(0, );
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
    //Have to use this to give one final operator and number before it begins calculating
    sendToLists(prevOperator);
    operate();
})