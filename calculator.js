

const add = function (num1 , num2) {
    return num1 + num2;
};
const subtract = function (num1 , num2){
    return num1 - num2;
};
const multiply = function (num1 , num2){
    return num1 * num2;
};
const divide = function (num1 , num2){
    return num1 / num2;
};

const operate = function(num1 , num2 , operator){
let result = 0;
    switch(operator){
        case "+": 
            result = add(num1, num2);
        break;

        case "-": 
            result = subtract(num1, num2);
        break;

        case "*": 
             result = multiply(num1, num2);
        break;

        case "/": 
             result = divide(num1, num2);
        break;
    }

    return result;
}

const numberBtn = document.querySelectorAll(".number");
let display = document.querySelector("#display > div");
let clearBtn = document.querySelector("#clear");



//attatch click event listener to each button
numberBtn.forEach(button => button.addEventListener("click" , () => {

    let currentDisplay = display.textContent;

    display.textContent = currentDisplay +""+ document.getElementById(button.id).textContent;

}));

clearBtn.addEventListener("click" , () => {
    display.innerHTML = "";
});

