const num1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator ( either +, -, * or / ): ");
const num2 = parseFloat(prompt("Enter second number: "));

let result;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}

// display the result
alert(`${num1} ${operator} ${num2} = ${result}`);
