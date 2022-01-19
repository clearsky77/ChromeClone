const API_KEY = "b9738871da6bffe89599626232481eec";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json()) // 모두 끝나면 then을 실행
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = data.weather[0].main + " /";
      temp.innerText = data.main.temp + " /";
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
