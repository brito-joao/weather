import { getTemperature } from "./api";

export function loadMain(weather_array,city){
    const body= document.querySelector("body");
    const window =document.createElement("div");
    const image_city=document.createElement("img");
    const temperature_label=document.createElement("p");
    const background= document.createElement("div");
    const weather_info_label=document.createElement("p");
    const city_label=document.createElement("p");
    const feels_like_label=document.createElement("p");
    const cloud_label=document.createElement("p");
    const menu_button=document.createElement("button");
    const github_button=document.createElement("a");
    const sunset_label=document.createElement("p");

    
    

    
    const temperature_object={
        "temperature":`${Math.round(weather_array.main.temp-272.15)}°`,
        "temperatureMin":`${Math.round(weather_array.main.temp_min-272.15)}°`,
        "temperatureMax":`${Math.round(weather_array.main.temp_max-272.15)}°`,
        "feelsLike":`${Math.round(weather_array.main.feels_like-272.15)}°`,
        "windSpeed":Math.round(weather_array.wind.speed),
        "clouds":weather_array.weather[0].description,
        "sunset":new Date(weather_array.sys.sunset*1000)
    }
    body.innerHTML="";
    city_label.innerText=city.name;
    image_city.src=city.image;
    menu_button.innerText="☰";
    sunset_label.innerText=`Sunset today: 🌇${sunsetTime(temperature_object.sunset)}`;


    
    menu_button.setAttribute("class","menubutton");
    background.setAttribute("class","background");
    temperature_label.setAttribute("class","temperatureMain");
    city_label.setAttribute("class","city");
    window.setAttribute("class","window");
    weather_info_label.setAttribute("class","weather");
    sunset_label.setAttribute("class","weather");
    feels_like_label.setAttribute("class","feels");
    cloud_label.setAttribute("class","feels");
    
    
    menu_button.addEventListener("click",()=>{
        //body.style.transition = "height 3s ease-in";
        
        setTimeout(function(){
            loadMenu(city);
        },100);
    })
    
    let wind_condition;
    temperature_object.windSpeed<5?wind_condition="Light":"Strong";
    console.log(temperature_object.windSpeed);
    weather_info_label.innerText=`Today has ${temperature_object.clouds}, with temperatures reaching up to ${temperature_object.temperatureMax}. Winds will be ${wind_condition}. `;
    cloud_label.innerText=`${temperature_object.clouds}`;
    feels_like_label.innerText=`H:${temperature_object.temperatureMax}   L:${temperature_object.temperatureMin}`;
    temperature_label.innerText=temperature_object.temperature;

    window.appendChild(menu_button);
    window.appendChild(temperature_label);
    window.appendChild(cloud_label);
    window.appendChild(feels_like_label);
    window.appendChild(city_label);

    background.appendChild(weather_info_label);
    background.appendChild(sunset_label);
    

    body.appendChild(window);
    body.appendChild(image_city);
    body.appendChild(background);
}

async function loadMenu(city){
    const body = document.querySelector("body");
    const cities_div=document.createElement("div");
    
    
    let cities=["Lisbon","Alcochete","Paris","Brasilia","Faro"];
    body.innerHTML="";

    cities.forEach(async city_name => {
        console.log(city_name, "hello ");
        const city_label=document.createElement("div");
        const city_name_label=document.createElement("p");
        const city_temperature_label=document.createElement("p");
        const background=document.createElement("img");


        let city={
            "name":city_name,
            "image":""
        }
        city_name_label.innerText=city_name;
        let weather_array=await getTemperature(city);
        city_temperature_label.innerText=`${Math.round(weather_array.main.temp-272.15)}°`;
        city_label.addEventListener("click", ()=>{
            loadMain(weather_array,city);
        })

        city_label.setAttribute("class","subcity");
        city_temperature_label.setAttribute("class","temperaturemenu");
        city_label.appendChild(city_name_label);
        city_label.appendChild(city_temperature_label);
        cities_div.appendChild(city_label)
    });
    cities_div.setAttribute("class","citymenudiv");
    
    body.appendChild(cities_div);
}

function sunsetTime(date){
    let hours=date.getHours();
    let minutes="0"+date.getMinutes();
    let formattedTime= hours + ":"+ minutes.substring(-2);
    return formattedTime;

}