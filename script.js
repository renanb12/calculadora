var display = document.querySelector('#display');

let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

function insertToDisplay(data) {
  if (waitingForSecondNumber) {
    display.value = data;
    waitingForSecondNumber = false;
  } else {
    if (display.value === '0' || display.value === '') {
      display.value = data;
    } else {
      display.value += data;
    }
  }
}

function clean() {
  display.value = '0';
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
}

function back() {
  if (!waitingForSecondNumber) {
    display.value = display.value.slice(0, -1);
  }
}

function setOperator(op) {
  firstNumber = Number(display.value);
  operator = op;
  waitingForSecondNumber = true;
}

function result() {
  let secondNumber = Number(display.value);
  let total;

  switch (operator) {
    case '+':
      total = firstNumber + secondNumber;
      break;
    case '-':
      total = firstNumber - secondNumber;
      break;
    case 'x':
      total = firstNumber * secondNumber;
      break;
    case '/':
      total = firstNumber / secondNumber;
      break;
    case '%':
      total = firstNumber % secondNumber;
      break;
    default:
      return;
  }

  display.value = total;
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
}