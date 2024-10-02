import { useState,useEffect } from "react"

import Chart   from 'chart.js/auto'
import { Bar } from "react-chartjs-2"
import Buttons from './buttons.component.jsx'

import '../assets/style/chartZone.style.css'

const LABELS = ['Jan','Fev','Mar','Avr','Mai','Jun','Jul','Aou','Sep','Oct','Nov','Dec']

let MIN_VALUE = 0;
let MAX_VALUE = 25;

// @return  entier aléatoire entre min et max
const randomInt = (min, max) => Math.floor( Math.random() * (max-min) + min )  
// @return une liste d'entiers aléatoires de même longueur que LABELS
const randomList = (min, max) => LABELS.map( label => randomInt(min, max))




const ChartZoneDemo = ( { meteoData , favoriteMeteoData } ) => {
  
    const [attribut,setAttribut] = useState('temp_min');
    const [stringAttribut,setStringAttribut] = useState('Température minimale(°C)');
    const [max,setMax] = useState(25);
    const [min,setMin] = useState(-5);

    let listFav = [];
    let listOther = [];

    favoriteMeteoData.data.forEach(element => listFav.push(element[attribut]));
    meteoData.data.forEach(element => listOther.push(element[attribut]));

    useEffect( () => {changeData()},[meteoData,attribut,favoriteMeteoData]);
    useEffect( () => {changeMaxMin()},[attribut]);


    const changeMaxMin = () => {
        setMax(Math.max(listFav.concat(listOther)));
        setMin(Math.min(listFav.concat(listOther)));
    }

    // @return le jeux de données (datasets) du graphique
    const buildData = ()  => {                                             
        return (
            {
                labels: LABELS,                                            // définit les étiquettes en abscisses
                datasets : [
                    {
                        label : favoriteMeteoData.city,                         // légende jeu de données 1 
                        data : listFav,            // valeurs jeu de données 1 (ici aléatoires)
                        backgroundColor: 'rgb(255,128,128)',               // couleur jeu de données 1 
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1
                    },
                    {
                        label : meteoData.city,                         // légende jeu de données 2 
                        data : listOther,            // valeurs jeu de données 1 (ici aléatoires)
                        backgroundColor: 'gold',                           // couleur jeu de données 2
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1
                    },                                                     // etc. si besoin
                ]  
            })
    }

    
    const [chartData, setChartData] = useState(buildData())               // gestion des jeux de données affichées dans une variable d'état


    const chart = <div className="chartZone">                             
                    <Bar                                                  // type de graphiques (ici des barres, d'autres types existent bien sûr)
                        data = { chartData }                              // les jeux de données gérés par la variable d'état
                        options =  { {
                                        scales: {
                                            y: {
                                                min : min,          // valeur minimale axe des ordonnées
                                                max : max,          // valeur maximale axe des ordonnées
                                            }                        
                                        },
                                        animation: {                      // paramètres effets d'animation lors des changements de valeur
                                            duration : 500,
                                            easing : 'easeIn'
                                        },
                                        plugins : {
                                            title: {
                                                display : true,
                                                text : stringAttribut  // titre du graphique
                                            }
                                        },
                                        legend: {
                                            labels: {
                                                fontSize: 14
                                            }
                                        }
                                    }
                        }
                    />
                  </div>

    const changeData = () => {
        setChartData(buildData())     // génère de nouvelles données aléatoires et met à jour la variable d'état
    }

    return (
        <div>      
            <Buttons setAttribut={setAttribut} setStringAttribut={setStringAttribut} />    
            { chart }
        </div>
    )
}
export default ChartZoneDemo