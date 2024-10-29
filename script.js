const userInput = document.getElementById('number');
const output = document.getElementById('output');
const outputDiv = document.getElementById('output-div');

function decimalToRoman(num) {
  const roman = ['M', 'CM', 'D', 'CD','C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = '';

  for (let i = 0; i < decimal.length; i++) {
    while (num >= decimal[i]) {
      num -= decimal[i];
      result += roman[i];
    }
  }
  return result;
}

function convert() {
  let num = parseInt(userInput.value);

  if (isNaN(num)) {
    output.innerText = "Please enter a valid number";
    outputDiv.classList.remove('hidden');
} else if (num < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    outputDiv.classList.remove('hidden');
} else if (num > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    outputDiv.classList.remove('hidden');
} else {
    let romanNum = decimalToRoman(num);
    output.innerText = romanNum;
    outputDiv.classList.remove('hidden');
  }
}
