const weatherTemp = document.querySelector(".weatherTemp");
const weatherCity = document.querySelector(".weatherCity");
const humidity = document.querySelector(".humidityPercentage");
const wind = document.querySelector(".windSpeed");
const inputBox = document.getElementById("searchInput");
const submitBtn = document.querySelector(".searchBtn");
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "079fb4f519af62fbf1e41f1f24ba53f4";

async function weather(city) {
  try {
    const response = await fetch(api + city + `&appid=${apiKey}`);
    const data = await response.json();

    // Hide the "Please enter some data" message and show weather data
    document.querySelector(".fistShow").style.display = "none";
    document.querySelector(".weatherMainBox").style.display = "block";
    document.querySelector(".humidityAndWind").style.display = "flex";

    weatherTemp.textContent = Math.round(data.main.temp) + "°C";
    weatherCity.textContent = data.name;
    humidity.textContent = data.main.humidity + "%";
    wind.textContent = data.wind.speed + " m/s"; // Wind speed fix

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Event listener for the search button click
submitBtn.addEventListener("click", () => {
  const city = inputBox.value;
  if (city) {
    weather(city);
  }
});

// Event listener for pressing Enter key in the input field
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = inputBox.value;
    if (city) {
      weather(city);
    }
  }
});
