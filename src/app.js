export function loadMain(weather_array,city){
    const body= document.querySelector("body");
    body.innerHTML="";
    const city_label=document.createElement("p");
    city_label.innerText=city;

    const temperature_label=document.createElement("p");
    const temperature_value= weather_array.main.temp-272.15;
    
    temperature_label.innerText=`${Math.round(temperature_value)}º`;
    body.appendChild(city_label);
    body.appendChild(temperature_label);
}