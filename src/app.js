import { getTemperature, getCityTemperature } from "./api";

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
    sunset_label.innerText=`🌇 Sunset today: ${sunsetTime(temperature_object.sunset)}`;


    
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
            loadMenu();
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

async function loadMenu(){
    const body = document.querySelector("body");
    const cities_div=document.createElement("div");
    const search_bar=document.createElement("input");
    const submit=document.createElement("button");




    let city_info;

    let cities=["Alcochete","Paris","Brasilia"];
    body.innerHTML="";
    submit.innerText="Search";
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
    submit.setAttribute("class","submitB");
    search_bar.setAttribute("class","search");

    //when client clicks on the search button inside the menu
    submit.addEventListener("click", async()=>{
        console.log(search_bar.value,cities, "search bar value");
        search_bar.value!= (null || undefined || "") && isSameCity(cities,search_bar.value)?onSubmit(search_bar,submit,city_info,cities_div,cities):{};
        });
    body.appendChild(search_bar);
    body.appendChild(submit);
    body.appendChild(cities_div);
}

function sunsetTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let formattedTime = hours + ":" + minutes;
    return formattedTime;

}

async function onSubmit(search_bar,submit,city_info,cities_div,cities){
    city_info= await getCityTemperature(search_bar.value);
    const new_city=document.createElement("div");
    const new_city_name=document.createElement("p");
    const new_city_temperature=document.createElement("p");


    new_city_name.innerText=search_bar.value;

    console.log(city_info,search_bar.value);
    new_city_temperature.innerText=`${Math.round(city_info.main.temp-272.15)}°`;

    new_city.setAttribute("class","subcity");
    new_city_temperature.setAttribute("class","temperaturemenu");

    new_city.addEventListener("click", ()=>{
        let city={
            "name":search_bar.value,
            "image":""
        }
        city.image="./images/ryo-yoshitake-city-unsplash.jpg";
        loadMain(city_info,city);
    });
    cities.push(search_bar.value.charAt(0).toUpperCase() + search_bar.value.slice(1).toLowerCase());
    new_city.appendChild(new_city_name);
    console.log(new_city_temperature,new_city_name,new_city);
    new_city.appendChild(new_city_temperature);
    cities_div.appendChild(new_city);
}

function isSameCity(cities,value){
    let condition=true;
    let city_name=value;
    city_name = city_name.charAt(0).toUpperCase() + city_name.slice(1).toLowerCase();
    cities.forEach((item)=>{
        if(item==city_name){
            condition=false;
        }
    })
    return condition;
}