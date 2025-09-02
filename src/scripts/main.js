'use strict';

// write your code here
const spnPopulation = document.querySelectorAll('span.population');
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');
let sumAll = 0;

for (let i = 0; i < spnPopulation.length; i++) {
  sumAll += parseInt(spnPopulation[i].textContent.replaceAll(',', ''));
}

total.textContent = withComma(sumAll);
avarage.textContent = withComma(Math.floor(sumAll / spnPopulation.length));

function withComma(num) {
  const result = num.toLocaleString('en-US');

  return result;
}
