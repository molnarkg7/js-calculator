const resultElement = document.getElementById("result");
let currentInput = "";
let operator = "";

function updateResult() {
  resultElement.textContent = currentInput;
}

function clearAll() {
  currentInput = "";
  operator = "";
  updateResult();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateResult();
}

function handleNumberClick(number) {
  currentInput += number;
  updateResult();
}

function handleOperatorClick(op) {
  if (currentInput !== "") {
    if (operator !== "") {
      calculateResult();
    }
    operator = op;
    currentInput += ` ${op} `;
    updateResult();
  }
}

function calculateResult() {
  const operands = currentInput.split(operator);
  const num1 = parseFloat(operands[0]);
  const num2 = parseFloat(operands[1]);

  switch (operator) {
    case "+":
      currentInput = (num1 + num2).toString();
      break;
    case "-":
      currentInput = (num1 - num2).toString();
      break;
    case "*":
      currentInput = (num1 * num2).toString();
      break;
    case "/":
      currentInput = (num1 / num2).toString();
      break;
  }

  operator = "";
  updateResult();
}

function handleEqualClick() {
  if (operator !== "") {
    calculateResult();
  }
}

function handleDotClick() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateResult();
  }
}

for (let i = 0; i <= 9; i++) {
  const button = document.getElementById(`${i}`);
  button.addEventListener("click", () => handleNumberClick(`${i}`));
}

const operators = ["plus", "minus", "times", "slash"];
for (const op of operators) {
  const button = document.getElementById(op);
  button.addEventListener("click", () =>
    handleOperatorClick(button.textContent)
  );
}

const dotBtn = document.getElementById("dot");
dotBtn.addEventListener("click", handleDotClick);

const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", handleEqualClick);

const clearBtn = document.getElementById("delete-all");
clearBtn.addEventListener("click", clearAll);

const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", deleteLast);
