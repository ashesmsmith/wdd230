const temp = parseInt(document.querySelector('#current-temp').innerHTML);
const windSpeed = parseInt(document.querySelector('#wind-speed').innerHTML);
const windChill = document.querySelector('#wind-chill');

if (temp <= 50 && windSpeed > 3) {
    windChill.innerHTML = (35.74 + (.6215 * temp) - (35.75 * windSpeed**.16)).toFixed(2);
}

else {
    windChill.textContent = 'N/A';
}