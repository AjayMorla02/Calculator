// Store the values
let firstNumber = "";
let secondNumber = "";
let operator = "";

// Get the display
let expression = document.getElementById("expression");
let result = document.getElementById("result");

//
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.onclick = function(){

        let action = button.dataset.action;
        let value = button.dataset.value;

        if(action === "digit"){

            if(operator === ""){
                firstNumber = firstNumber + value;
                result.textContent = firstNumber;
            }
            else{
                secondNumber = secondNumber + value;
                result.textContent = secondNumber;
            }
        }

        else if(action === "operator"){

            operator = value;
            expression.textContent = firstNumber + " " + operator;
        }

        else if(action === "equals"){

            let num1 = parseFloat(firstNumber);
            let num2 = parseFloat(secondNumber);

            let answer;

            if(operator === "+"){
                answer = num1 + num2;
            }

            if(operator === "-"){
                answer = num1 - num2;
            }

            if(operator === "*"){
                answer = num1 * num2;
            }

            if(operator === "/"){
                answer = num1 / num2;
            }

            result.textContent = answer;
        }

        // Clear button
        else if(action === "clear"){

            firstNumber = "";
            secondNumber = "";
            operator = "";

            expression.textContent = "";
            result.textContent = "0";
        }

    };

});