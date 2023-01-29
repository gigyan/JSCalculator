

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
let operator = document.querySelectorAll(".operator");
let equalBtn = document.querySelector("#equalBtn");
let num1= null;
let num2 = null;
let operatorType = null;
let operatorPressed = false;
let count = 0;  // represents how many times an operator has been pressed



operator.forEach(button => button.addEventListener("click" , () =>{

    count++;

    /* If the operator event happens twice the current number in the display becomes 
    num2 and the result of operate() populates the display */
    if (count == 2){ 
        num2 = parseInt(display.textContent);
        display.textContent = operate(num1,num2,operatorType);
        count--;
       
    }
    
    // the result from operate() becomes num1 
    num1 = parseInt(display.textContent);
    operatorType = button.textContent;

   
    


    operatorPressed = true;

}

));

equalBtn.addEventListener("click" , () => {
   
    num2 = parseInt(display.textContent);
    display.textContent = operate(num1,num2,operatorType);

    operatorPressed = false;
    count = 0;
   

});





//attatch click event listener to each button
numberBtn.forEach(button => button.addEventListener("click" , () => {

    if(operatorPressed == true){

        display.textContent = "";
        operatorPressed = false;
    }
   

    display.textContent += ""+ document.getElementById(button.id).textContent;

}));




clearBtn.addEventListener("click" , () => {


    display.innerHTML = "";
});

