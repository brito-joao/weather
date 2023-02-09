export function loadMain(weather_array,city){
    const body= document.querySelector("body");
    const window =document.createElement("div");

    body.innerHTML="";
    const city_label=document.createElement("p");
    city_label.innerText=city.name;

    var fixed = document.getElementById('fixed');

    
    const image_city=document.createElement("img");
    image_city.src=city.image;
    const temperature_label=document.createElement("p");
    const background= document.createElement("div");
    background.setAttribute("class","background");
    temperature_label.setAttribute("class","temperatureMain");
    city_label.setAttribute("class","city");
    window.setAttribute("class","window");
    const temperature_value= weather_array.main.temp-272.15;
    const temperature_object={
        "temperature":`${Math.round(weather_array.main.temp-272.15)}°`,
        "temperatureMin":`${Math.round(weather_array.main.temp_min-272.15)}°`,
        "temperatureMax":`${Math.round(weather_array.main.temp_max-272.15)}°`,
        "feelsLike":`${Math.round(weather_array.main.feels_like-272.15)}°`,
        "windSpeed":Math.round(weather_array.wind.speed),
        "clouds":Math.round(weather_array.weather.description)
    }
    
    temperature_label.innerText=temperature_object.temperature;
    window.appendChild(temperature_label);
    window.appendChild(city_label);
    body.appendChild(window);
    body.appendChild(image_city);
    body.appendChild(background);
}