import { getTemperature } from "./api";
import { loadMain } from "./app";
import './style.scss';
async function main(){
    let city="Alcochete";
    let weather_array=await getTemperature(city);
    loadMain(weather_array,city)
    console.log("working");
}
main();

