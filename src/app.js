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
    
    const selected_option=document.createElement("p");

    
    

    
    const temperature_object={
        "temperature":`${Math.round(weather_array.main.temp-272.15)}°`,
        "temperatureMin":`${Math.round(weather_array.main.temp_min-272.15)}°`,
        "temperatureMax":`${Math.round(weather_array.main.temp_max-272.15)}°`,
        "feelsLike":`${Math.round(weather_array.main.feels_like-272.15)}°`,
        "windSpeed":Math.round(weather_array.wind.speed),
        "clouds":weather_array.weather[0].description
    }
    body.innerHTML="";
    city_label.innerText=city.name;
    image_city.src=city.image;
    
    background.setAttribute("class","background");
    temperature_label.setAttribute("class","temperatureMain");
    city_label.setAttribute("class","city");
    window.setAttribute("class","window");
    weather_info_label.setAttribute("class","weather");
    feels_like_label.setAttribute("class","feels");
    cloud_label.setAttribute("class","feels");
    
    
    
    weather_info_label.innerText=`Today has ${temperature_object.clouds}, with temperatures reaching up to ${temperature_object.temperatureMax}. Winds will be light and variable. UV levels will be high, so be sure to wear sunscreen when outside.`;
    cloud_label.innerText=`${temperature_object.clouds}`;
    feels_like_label.innerText=`H:${temperature_object.temperatureMax}   L:${temperature_object.temperatureMin}`;
    temperature_label.innerText=temperature_object.temperature;


    window.appendChild(temperature_label);
    window.appendChild(cloud_label);
    window.appendChild(feels_like_label);
    window.appendChild(city_label);

    background.appendChild(weather_info_label);
    //background.appendChild(createChangeCity(background));
    

    body.appendChild(window);
    body.appendChild(image_city);
    body.appendChild(background);
}

function createChangeCity(background){

    
    const cities=["Lisbon","Paris","Alcochete","Brasilia","Faro"];

    var changeCity = document.createElement('select');
    background.appendChild(changeCity);

    for (var i = 0; i < cities.length; ++i) {
        var option = document.createElement('option');

        if (i == 0) {
            option.setAttribute('disabled', 'disabled');
            option.setAttribute('selected', 'selected');
        } // end of if loop

        var oTxt = document.createTextNode(cities[i]);
        option.appendChild(oTxt);

        changeCity.appendChild(option);
    }
    return changeCity;
}