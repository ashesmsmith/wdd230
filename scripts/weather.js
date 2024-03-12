const weather = document.querySelector('#weather');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=8591ec27f4328f83ffdc239a5748f25c&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            displayResults(data);
        }

        else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('id', 'weather-icon');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description} image`);

    let currentTemp = document.createElement('p');
    currentTemp.setAttribute('id', 'current-temp');
    currentTemp.textContent = `${data.main.temp.toFixed(0)}°`;

    let weatherDesc = document.createElement('p');
    weatherDesc.setAttribute('id', 'weather-desc');
    weatherDesc.textContent = `${data.weather[0].description}`;

    weather.appendChild(weatherIcon);
    weather.appendChild(currentTemp);
    weather.appendChild(weatherDesc);
}

apiFetch();