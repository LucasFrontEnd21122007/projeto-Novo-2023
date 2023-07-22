let displayValue = '0';
let currentOperator = null;
let lastValue = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === '0') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = null;
    lastValue = null;
    updateDisplay();
}

function deleteLastChar() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator === null) {
        lastValue = parseFloat(displayValue);
    } else {
        calculateResult();
    }
    currentOperator = operator;
    displayValue = '0';
}

function calculateResult() {
    if (currentOperator !== null) {
        const currentValue = parseFloat(displayValue);
        switch (currentOperator) {
            case '/':
                displayValue = lastValue / currentValue;
                break;
            case '*':
                displayValue = lastValue * currentValue;
                break;
            case '-':
                displayValue = lastValue - currentValue;
                break;
            case '+':
                displayValue = lastValue + currentValue;
                break;
        }
        currentOperator = null;
        lastValue = null;
        updateDisplay();
    }
}

updateDisplay();
