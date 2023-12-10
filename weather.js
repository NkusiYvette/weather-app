function getWeather() {
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Get your API key from OpenWeatherMap

    if (!cityInput.value) {
        alert('Please enter a city.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const city = data.name;

            const weatherText = `Current weather in ${city}: ${temperature}°C, ${description}.`;

            weatherInfo.textContent = weatherText;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Error fetching weather data. Please try again.';
        });
}
