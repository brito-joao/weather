export async  function getTemperature(city){
    
    
    let lat_long_array=getCoordinate(city);
    
    let weather_array=[];
    weather_array=await getTempApi(lat_long_array[0],lat_long_array[1]);
    console.log("hlo",);
    
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
function getCoordinate(city){

    //create the city object property for every item in that array that you know that is

    const city_latlong={
        "Lisbon":[38.722252,-9.139337,"./images/aayush-gupta-lisbon.jpg"],
        "Alcochete":[38.756031,-8.961030,"./images/alcochete-clear.png"],
        "Faro":[40.707428,-73.922844,"./images/kobu-agency-faro.jpg"],
        "Paris":[48.856613,2.352222,"./images/earth-Paris.jpg"],
        "Brasilia":[-15.826691,-47.921822,"./images/ckturistando-Brasilia.jpg"],
        "New York":[40.730610,-73.935242,"./images/earth-Paris.jpg"]
    }

    city.image=city_latlong[city.name][2];
    console.log(getCityTemperature("London"));
    return city_latlong[city.name];
    
}

export async function getCityTemperature(name){
    let untitled="363097f69ad994cd0202332bce224c0a";
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${1}&appid=${untitled}`);
    const data= await response.json();
    const city_info={
        "name":data[0].name,
        "lat":data[0].lat,
        "lon":data[0].lon
    }

    
    const temperatures=await getSubTemperatur(city_info);
    console.log("afda",temperatures,"dadfafdfds");
    return await temperatures;
}
async function getSubTemperatur(city_object){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city_object.lat}&lon=${city_object.lon}&appid=${"363097f69ad994cd0202332bce224c0a"}`);
    const data= await response.json();
    
    return data;

}

