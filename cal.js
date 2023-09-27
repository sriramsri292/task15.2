let currentInput = '';
let operator = '';

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function clearCalculator() {
  currentInput = '';
  operator = '';
  updateDisplay();
}

function calculate() {
  if (operator && currentInput !== '') {
    const num1 = parseFloat(currentInput);
    let num2 = parseFloat(currentInput);
    switch (operator) {
      case '+':
        num2 = parseFloat(result);
        break;
      case '-':
        num2 = parseFloat(result);
        break;
      case '*':
        num2 = parseFloat(result);
        break;
      case '/':
        num2 = parseFloat(result);
        break;
      case '%':
        num2 = parseFloat(result);
        break;
    }

    switch (operator) {
      case '+':
        currentInput = (num1 + num2).toString();
        break;
      case '-':
        currentInput = (num1 - num2).toString();
        break;
      case '*':
        currentInput = (num1 * num2).toString();
        break;
      case '/':
        if (num2 !== 0) {
          currentInput = (num1 / num2).toString();
        } else {
          currentInput = 'Error';
        }
        break;
      case '%':
        currentInput = (num1 % num2).toString();
        break;
    }

    operator = '';
  }
}

let k = document.createElement('div');
k.className = 'kk';
document.body.appendChild(k);

let k1 = document.createElement('div');
k1.className = 'k1';
k.appendChild(k1);

let k2 = document.createElement('div');
k2.className = 'k2';
k1.appendChild(k2);

let display = document.createElement('div');
display.id = 'display';
k2.appendChild(display);


const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '%', '=', 'C'];

for (let buttonText of buttons) {
  let button = document.createElement('button');
  button.className = 'b';
  button.textContent = buttonText;

  button.onclick = () => {
    if (buttonText === '=') {
      calculate();
      updateDisplay();
    } else if (buttonText === 'C') {
      clearCalculator();
    } else {
      currentInput += buttonText;
      updateDisplay();
    }
  };

  k1.appendChild(button);
}

updateDisplay();
