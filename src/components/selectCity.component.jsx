import { useState,useRef } from "react";
import starOff from '../assets/images/star_off.png';
import starOn from '../assets/images/star_on.png';
import '../assets/style/favorite.style.css'

const SelectCity = ( {selectedCity,setSelectedCity,city,favoriteCity,setFavoriteCity,convertCityToInt} ) => {

    const myRef = useRef(null);
    
    const choix = city.map( elt => <option value ={elt.city}>{elt.city}</option>);

    const srcChange = (c) => {
        if(favoriteCity != c){
            myRef.current.src = starOff;
        }
        else{
            myRef.current.src = starOn;
        }
    }

    const changeCity = event =>{
        setSelectedCity(convertCityToInt(event.target.value));
        srcChange(event.target.value);
    }

    const changeFavoriteCity = () => {
        setFavoriteCity(city[selectedCity].city);
        myRef.current.src = starOn;
    }

    return (
        <div>
            <select onChange={changeCity}>
            {choix}
            </select>
            <img ref={ myRef } src={starOn} onClick={changeFavoriteCity}/>
        </div>
    );


}
export default SelectCity;