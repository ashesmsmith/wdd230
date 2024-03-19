const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=8591ec27f4328f83ffdc239a5748f25c&units=imperial';
const current = document.querySelector('#current-weather');
const forecast = document.querySelector('#forecast');

async function getWeatherAPI() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    displayWeather(data);
}

function displayWeather(data) {
    // Banner Data
    let bannerDesc = document.querySelector('#banner-desc');
    bannerDesc.setAttribute('class', 'capitalize');
    bannerDesc.innerHTML = data.list[0].weather[0].description;

    let dayHigh = document.querySelector('#high');
    dayHigh.innerHTML = data.list[0].main.temp_max.toFixed(0);

    // Todays Weather
    data.list[0].weather.forEach((item) => {
        let weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${item.icon}@2x.png`);
        weatherIcon.setAttribute('alt', `${item.description} icon`);
        weatherIcon.setAttribute('width', '100');
        weatherIcon.setAttribute('height', '100');

        let currentTemp = document.createElement('p');
        currentTemp.innerHTML = `${data.list[0].main.temp.toFixed(0)}°F`;
        
        let currentDesc = document.createElement('p');
        currentDesc.setAttribute('class', 'capitalize');
        currentDesc.innerHTML = `${item.main}: ${item.description}`;

        let humidity = document.createElement('p');
        humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;

        current.appendChild(weatherIcon);
        current.appendChild(currentTemp);
        current.appendChild(currentDesc);
        current.appendChild(humidity);
    })

    // Tomorrow Forecast
    data.list[8].weather.forEach((item) => {
        let forecastIcon = document.createElement('img');
        forecastIcon.setAttribute('src', `https://openweathermap.org/img/wn/${item.icon}@2x.png`);
        forecastIcon.setAttribute('alt', `${item.description} icon`);
        forecastIcon.setAttribute('width', '100');
        forecastIcon.setAttribute('height', '100');
    
        let forecastTemp = document.createElement('p');
        forecastTemp.innerHTML = `${data.list[8].main.temp.toFixed(0)}°F`;
        
        let forecastDesc = document.createElement('p');
        forecastDesc.setAttribute('class', 'capitalize');
        forecastDesc.innerHTML = `${item.main}: ${item.description}`;
    
        let forecastHumidity = document.createElement('p');
        forecastHumidity.innerHTML = `Humidity: ${data.list[8].main.humidity}%`;
    
        forecast.appendChild(forecastIcon);
        forecast.appendChild(forecastTemp);
        forecast.appendChild(forecastDesc);
        forecast.appendChild(forecastHumidity);
    })
}

getWeatherAPI();