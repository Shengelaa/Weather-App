const dayNight = document.querySelector(".day");

const images = document.querySelector(".imgs");
const cel = document.querySelector(".cel");

const Farm = document.querySelector(".f");

const windz = document.querySelector(".wind");

const winds = document.querySelector(".winds");

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

function everything(gradus, wind, isday) {
  const text = document.createElement("p");
  text.textContent = gradus + "°";
  cel.appendChild(text);
  const farm2 = document.createElement("p");
  farm2.textContent = " °F  " + Math.floor(gradus * 1.8 + 32);
  Farm.appendChild(farm2);
  const windd = document.createElement("p");
  windd.textContent = wind + " km/h";
  windd.classList.add("f2");
  windz.appendChild(windd);
  if (isday === 1) {
    const imgz = document.createElement("img");
    imgz.src = "Day.png";
    dayNight.appendChild(imgz);
  } else if (isday === 0) {
    const imgz2 = document.createElement("img");
    imgz2.src = "Night.png";
    dayNight.appendChild(imgz2);
  }
  if (gradus < -19) {
    const snow = document.createElement("img");
    snow.src = "assets/snow.png";
    images.appendChild(snow);
  } else if (gradus > -18 && gradus < 10) {
    const rain = document.createElement("img");
    rain.src = "assets/rain.png";
    images.appendChild(rain);
  } else if (gradus > 10 && gradus < 31) {
    const clouds = document.createElement("img");
    clouds.src = "assets/clouds.png";
    images.appendChild(clouds);
  } else if (gradus > 30) {
    const hot = document.createElement("img");
    hot.src = "assets/hot.png";
    images.appendChild(hot);
  }
}

fetch(url, { method: "GET" })
  .then((response) => response.json())
  .then((info) => {
    const cel1 = info.current.temperature_2m;
    const speed = info.current.wind_speed_10m;
    const time = info.current.is_day;
    console.log(info);
    everything(cel1, speed, time);
  })
  .catch((error) => console.error("Error", error));
