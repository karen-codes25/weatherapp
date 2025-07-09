const apiKey = "d518b46c3ea6afd9744b942640d8ec52"; // 
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = "City not found.";
    } else {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Temp:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data.";
    console.error(error);
  }
}
