export async  function getTemperature(city){
    
    
    let lat_long_array=getLatLongApi(city);

    let weather_array=[];
    weather_array=await getTempApi(lat_long_array[0],lat_long_array[1]);
    console.log("hlo",weather_array.current_weather);

    return weather_array;
}

async function getTempApi(lat, long){
    const current_weather=true;
    const untitled ="363097f69ad994cd0202332bce224c0a";
    //I know that it it exposed, but there is nothing I can do with my current knowladge
    
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${untitled}`,{mode: 'cors'});
    const data= await response.json();
    console.log(data);
    return data;
}
function getLatLongApi(city){
    const city_latlong={
        "Lisbon":[38.722252,-9.139337],
        "Alcochete":[38.756031,-8.961030],
        "Faro":[40.707428,-73.922844],
        "Paris":[48.856613,2.352222],
        "Brasilia":[-15.826691,-47.921822],
        "New York":[40.730610,-73.935242]
    }

    return city_latlong[city];
    
}