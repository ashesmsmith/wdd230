const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=8591ec27f4328f83ffdc239a5748f25c&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch (url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

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
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}°`;

    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);

    captionDesc.textContent = `${data.weather[0].description}`;
}

apiFetch();