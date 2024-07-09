var operand1 = null;
var operand2 = null;
var operator = null;
var result = null;

function setoperand(value) {
    if (operand1 === null) {
        operand1 = value;
        alert("Operand value is " + value);
    } else if (operator !== null && operand2 === null) {
        operand2 = value;
        alert("Operand value is " + value);
        calculateResult();
    } else {
        alert("Please set the operator first.");
    }
}

function setoperator(op) {
    if (operand1 !== null && operator === null) {
        operator = op;
    } else {
        alert("Please set the operands first.");
    }
    alert("Operator is : " + op);
}

function calculateresult() {
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "x":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            alert("Operator invalid");
    }
    document.getElementById("view").innerHTML = result;
}

