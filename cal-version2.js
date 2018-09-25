
var inputVal = '';
var total = '0';
var currentOperation = '+';
refreshDisplay();

function inputDigit(num) {
    inputVal += num;
    var decimalPoint = function (){
        if(num === "decimal") {
        inputVal = inputVal + '.'
        }
    }
    refreshDisplay(); 
}
                                                                            
function inputOperation(operation) {
    if (inputVal.length > 0 && currentOperation !== "") {
        updateTotal();
        clearInput();
        currentOperation = operation;
        refreshDisplay();
    }
}

function updateTotal () {
    switch (currentOperation){
        case '+':
            var temp = parseFloat(total) + parseFloat(inputVal);
            total = temp.toString();
            break;
        case '-':
            var temp = parseFloat(total) - parseFloat(inputVal);
            total = temp.toString();
            break;
        case '*':
            var temp = parseFloat(total) * parseFloat(inputVal);
            total = temp.toString();
            break;
        case '/':
            var temp = parseFloat(total) / parseFloat(inputVal);
            total = temp.toString();
            break;
    } 

}

function equal() {
    if(inputVal.length > 0) {
        updateTotal();
        clearInput();
        currentOperation = '';
        refreshDisplay();
    }

}

function clearInput() {
    inputVal = '';
}

function refreshDisplay() {
    if (inputVal.length > 0) {
        document.getElementById('display').innerHTML = inputVal;    
    } else {
        document.getElementById('display').innerHTML = total;
    }
}

function resetAll() {
    inputVal='';
    total='0';
    currentOperation = '+';
    refreshDisplay();
}
