const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&appid=8591ec27f4328f83ffdc239a5748f25c&units=imperial';
const weatherToday = document.querySelector('.weather-today');

async function getWeatherAPI() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayWeather(data);
}

function displayWeather(data) {
    // Current Weather  
    const iconContainer = document.querySelector('.weather-icon');
    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `${data.list[0].weather[0].description} icon`);
    weatherIcon.setAttribute('width', '100');
    weatherIcon.setAttribute('height', '100');
    iconContainer.appendChild(weatherIcon);

    let currentTemp = document.querySelector('.current-temp');
    currentTemp.innerHTML = parseInt(data.list[0].main.temp.toFixed(0));

    let weatherDesc = document.querySelector('.weather-desc');
    weatherDesc.textContent = `${data.list[0].weather[0].description}`;

    let windSpeed = document.querySelector('.wind-speed');
    windSpeed.innerHTML = data.list[0].wind.speed.toFixed();

    let windChill = document.querySelector('.wind-chill');
    if (currentTemp.innerHTML <= 50 && windSpeed.innerHTML > 3) {
        windChill.innerHTML = (35.74 + (.6215 * currentTemp.innerHTML) - (35.75 * 
            windSpeed.innerHTML**.16)).toFixed(2);
    }
    
    else {
        windChill.textContent = 'N/A';
    }

    // Tomorrow Forecast
    const iconContainer1 = document.querySelector('.forecast-icon-1');
    let dayOneIcon = document.createElement('img');
    dayOneIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`)
    dayOneIcon.setAttribute('alt', `${data.list[5].weather[0].description} icon`);
    dayOneIcon.setAttribute('width', '50');
    dayOneIcon.setAttribute('height', '50');
    iconContainer1.appendChild(dayOneIcon);

    let forecastTemp1 = document.querySelector('.forecast-temp-1');
    forecastTemp1.innerHTML = parseInt(data.list[5].main.temp.toFixed(0));

    let forecastDesc1 = document.querySelector('.forecast-desc-1');
    forecastDesc1.innerHTML = data.list[5].weather[0].description;

    // 2nd Day Forecast
    const iconContainer2 = document.querySelector('.forecast-icon-2');
    let dayTwoIcon = document.createElement('img');
    dayTwoIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}.png`)
    dayTwoIcon.setAttribute('alt', `${data.list[13].weather[0].description} icon`);
    dayTwoIcon.setAttribute('width', '50');
    dayTwoIcon.setAttribute('height', '50');
    iconContainer2.appendChild(dayTwoIcon);

    let forecastTemp2 = document.querySelector('.forecast-temp-2');
    forecastTemp2.innerHTML = parseInt(data.list[13].main.temp.toFixed(0));

    let forecastDesc2 = document.querySelector('.forecast-desc-2');
    forecastDesc2.innerHTML = data.list[13].weather[0].description;

    // 3rd Day Forecast
    const iconContainer3 = document.querySelector('.forecast-icon-3');
    let dayThreeIcon = document.createElement('img');
    dayThreeIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}.png`)
    dayThreeIcon.setAttribute('alt', `${data.list[21].weather[0].description} icon`);
    dayThreeIcon.setAttribute('width', '50');
    dayThreeIcon.setAttribute('height', '50');
    iconContainer3.appendChild(dayThreeIcon);

    let forecastTemp3 = document.querySelector('.forecast-temp-3');
    forecastTemp3.innerHTML = parseInt(data.list[21].main.temp.toFixed(0));

    let forecastDesc3 = document.querySelector('.forecast-desc-3');
    forecastDesc3.innerHTML = data.list[21].weather[0].description;
}

getWeatherAPI();