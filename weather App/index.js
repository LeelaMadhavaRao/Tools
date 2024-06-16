async function go() {
    const city = document.getElementById('city').value.trim();
    if (city === "") {
        alert('Enter a valid City');
        return;
    }

    try {
        // Fetch city coordinates
        const locationUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const locationResponse = await fetch(locationUrl);
        if (!locationResponse.ok) {
            throw new Error(`Geocoding API request failed: ${locationResponse.statusText}`);
        }

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            alert('City not found');
            return;
        }

        const { latitude, longitude } = locationData.results[0];

        // Fetch weather data
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            throw new Error(`Weather API request failed: ${weatherResponse.statusText}`);
        }

        const weatherData = await weatherResponse.json();

        const temperature = weatherData.current_weather.temperature;
        
        document.getElementById("weather").innerHTML = temperature + ' °C';
        alert('temperature Updated');

    } catch (error) {
        console.error('Request error:', error);
        alert('Failed to fetch weather data');
    }
}

function reset() {
    document.getElementById('city').value = '';
    document.getElementById('weather').innerHTML = '--';
}
