// https://www.omnicalculator.com/conversion/kelvin-to-celsius

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const celsiusRadio = document.getElementById('celsiusRadio');
const kelvinRadio = document.getElementById('kelvinRadio');

let celsius;
let kelvin = v; 

// labels of the inpust
const variable = document.getElementById('variable');

celsiusRadio.addEventListener('click', function() {
  variable.textContent = 'Kelvin';
  kelvin = v;
  result.textContent = '';
});

kelvinRadio.addEventListener('click', function() {
  variable.textContent = 'Celsius';
  celsius = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(celsiusRadio.checked)
    result.textContent = `Celsius = ${computecelsius().toFixed(5)}`;

  else if(kelvinRadio.checked)
    result.textContent = `Kelvin = ${computekelvin().toFixed(5)}`;
})

// calculation

function computecelsius() {
  return Number(kelvin.value) - 273.15;
}

function computekelvin() {
  return Number(celsius.value) + 273.15;
}