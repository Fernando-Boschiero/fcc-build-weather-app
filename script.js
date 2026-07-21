const selectCity = document.getElementById("select-city");
const getWeatherBtn = document.getElementById("get-weather-btn");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const locationOfWeather = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const weatherMain = document.getElementById("weather-main");
const feelsLike = document.getElementById("feels-like");
const rightSide = document.getElementsByClassName("right-side")[0];

// getWeather fetches the weather information from the API, based on the city selected from the HTML list, and returns it:
async function getWeather(city) {
  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong, please try again later");
  }
}

async function showWeather() {
  try {
    let chosenCity = selectCity.value;
    const weatherInfo = await getWeather(chosenCity);
    console.log(weatherInfo);

    if (!weatherInfo || weatherInfo.error) {
      alert("Something went wrong, please try again later");
      return;
    }

    humidity.innerHTML =
      weatherInfo.main.humidity !== undefined
        ? `<span>Humidity</span><span class="bold">${weatherInfo.main.humidity}%</span>`
        : `<span>Humidity</span><span class="bold">N/A</span>`;

    wind.innerHTML =
      weatherInfo.wind.speed !== undefined
        ? `<span>Wind</span><span class="bold">${weatherInfo.wind.speed} m/s</span>`
        : `<span>Wind</span><span class="bold">N/A</span>`;

    windGust.innerHTML =
      weatherInfo.wind.gust !== undefined
        ? `<span>Wind gust</span><span class="bold">${weatherInfo.wind.gust} m/s</span>`
        : `<span>Wind gust</span><span class="bold">N/A</span>`;

    locationOfWeather.innerText =
      weatherInfo.name !== undefined ? `${weatherInfo.name}` : `N/A`;

    weatherIcon.src =
      weatherInfo.weather[0].icon !== undefined
        ? `${weatherInfo.weather[0].icon}`
        : `N/A`;

    weatherMain.innerText =
      weatherInfo.weather[0].main !== undefined
        ? `${weatherInfo.weather[0].main}`
        : "N/A";

    mainTemperature.innerText =
      weatherInfo.main.temp !== undefined
        ? `${weatherInfo.main.temp}° C`
        : "N/A";

    feelsLike.innerText =
      weatherInfo.main.feels_like !== undefined
        ? `Feels like ${weatherInfo.main.feels_like}° C`
        : "N/A";
    console.log(rightSide);
    rightSide.classList.add("visible");
  } catch (error) {
    console.log(error);
  }
}

getWeatherBtn.addEventListener("click", showWeather);
