import DataCity from './dataCity.component.jsx';
import DataComparison from './dataComparison.component.jsx';
import meteoDataByCity from '../data/meteo-data.js';
import SelectCity from './selectCity.component.jsx';
import { useState } from 'react';
import ChartZoneDemo from './chartZoneDemo.component.jsx';
import '../assets/style/chartZone.style.css'

const App = () => {

  const [selectedCity,setSelectedCity] = useState(0);
  const [favoriteCity,setFavoriteCity] = useState("Lille");
  const [bool, setBool] = useState(true);
  
  const convertCityToInt = (s) => {
    switch(s){
        case "Lille":
            return 0;
            break;
        case "Bordeaux":
            return 1;
            break;
        case "Brest":
            return 2;
            break;
        case "Strasbourg":
            return 3;
            break;
        case "Paris":
            return 4;
            break;
        case "Toulouse":
            return 5;
            break;
        case "Nice":
            return 6;
            break;
        case "Clermont-Ferrand":
            return 7;
            break;
        case "Genève":
            return 8;
            break;
    }
  }

  const graph = bool ? <ChartZoneDemo meteoData={meteoDataByCity[selectedCity]}  favoriteMeteoData={meteoDataByCity[convertCityToInt(favoriteCity)]} /> : <div></div> ;
  const handleClick = () => setBool( previousBool => !previousBool );  
  return (
    <div>
    <SelectCity convertCityToInt={convertCityToInt} setFavoriteCity={setFavoriteCity} favoriteCity={favoriteCity} selectedCity={selectedCity} setSelectedCity={setSelectedCity} city = {meteoDataByCity} />
    <DataCity city = {meteoDataByCity[selectedCity]} />
    <DataComparison favoriteCity={meteoDataByCity[convertCityToInt(favoriteCity)]} selectedCity={meteoDataByCity[selectedCity]} />
    <button onClick={handleClick}>Cacher</button>
    {graph}
    </div>

  );

}
export default App;
