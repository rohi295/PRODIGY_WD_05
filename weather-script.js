async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY_HERE"; // Replace this with your actual OpenWeatherMap API key

  if (city === "") {
    document.getElementById("weatherResult").innerText = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      document.getElementById("weatherResult").innerText = "City not found.";
      return;
    }
    const data = await response.json();
    const result = `
      <strong>City:</strong> ${data.name}<br>
      <strong>Temperature:</strong> ${data.main.temp}°C<br>
      <strong>Weather:</strong> ${data.weather[0].main}<br>
      <strong>Description:</strong> ${data.weather[0].description}
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching weather data.";
  }
}
