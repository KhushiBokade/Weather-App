

const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind');
const imageElement=document.querySelector('.weather-img');
const name=document.querySelector('.name');
const country=document.querySelector('.country');

async function checkWeather(city) {
    const api_key="63a44e225a0b4d46926152844240808";
    const url=`http://api.weatherapi.com/v1/current.json?key=63a44e225a0b4d46926152844240808&q=${city}&aqi=no`;

    const weather_data=await fetch(`${url}`).then(Response=>
        Response.json());

    temperature.innerHTML=`${weather_data.current.temp_c}°C`;
    description.innerHTML=`${weather_data.current.condition.text}`;
    humidity.innerHTML=`${weather_data.current.humidity}%`;
    wind.innerHTML=`${weather_data.current.wind_kph}Km/H`;
    name.innerHTML=`${weather_data.location.name}`;
    country.innerHTML=`${weather_data.location.country},${weather_data.location.region}`;

    // Assuming `weather_data.current.condition.icon` contains the icon URL
    const iconUrl = weather_data.current.condition.icon;

    // Select the image element and update its source
    const imageElement = document.querySelector('.weather-img');
    imageElement.src = iconUrl;


    console.log(weather_data);

}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});

