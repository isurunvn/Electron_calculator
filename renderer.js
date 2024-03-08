let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('result').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    displayValue = '';
  }
}
