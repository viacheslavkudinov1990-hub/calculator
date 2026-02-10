console.log("script uploaded");
const numbers = document.querySelector(".numbers");
const input = document.querySelector(".output");
const operators = document.querySelector(".operators");
const buttonpoint = document.querySelector(".point")
input.value = "";
let expression = [];
let allSigns = ["+", "-", "/", "*"];
let inputNumber = '';

function calculateTextExpression(exp) {
    switch(exp[1]) {
        case "+":
            return +exp[0] + +exp[2];
        case "-":
            return +exp[0] - +exp[2];
        case "*":
            return +exp[0] * +exp[2];
        case "/":
            return +exp[0] / +exp[2];
    }
}

function addNoMoreThan3Item(arr, item) {
    if(arr.length == 3) {
        let resultOftotalExpression = calculateTextExpression(arr);
        arr.length = 0;
        arr.push(resultOftotalExpression);
        arr.push(item);
    }else if(arr.length == 2 && allSigns.includes(item)) {
        arr[1] = item;
    }else{
        arr.push(item);
    }
}
numbers.addEventListener("click", (event) => {
    let target = event.target;
    if(target.className === "num") {
        input.value += target.textContent;
        inputNumber += target.textContent;
    };
    
})
operators.addEventListener("click", (event) => {
    let target = event.target;
    if(target.className === "operator") {
        addNoMoreThan3Item(expression, inputNumber);
        addNoMoreThan3Item(expression, target.textContent);
        inputNumber = '';
        input.value = expression.join('');
    }
})

