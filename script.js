function calculate() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var operator = document.getElementById('operator').value;
    var result;

    if (operator === '+') {
      result = n1 + n2;
    } else if (operator === '-') {
      result = n1 - n2;
    } else if (operator === '*') {
      result = n1 * n2;
    } else if (operator === '/') {
      result = n1 / n2;
    }

    document.getElementById('result').value = result;
  }