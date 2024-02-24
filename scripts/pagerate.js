const rangevalue = document.querySelector('#rangevalue');
const range = document.getElementById('rating');

range.addEventListener('change', displayValue);

function displayValue() {
    rangevalue.innerHTML = range.value;
}