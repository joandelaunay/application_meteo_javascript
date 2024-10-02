import MeteoData from './meteoData.component.jsx';
import '../assets/style/dataForCity.style.css';
import '../assets/style/dataCell.style.css';
import '../assets/style/dataComparison.style.css';
import Sum from './sum.component.jsx';
import Moyenne from './moyenne.component.jsx';

const DataComparison = ({ selectedCity,favoriteCity }) => {

    const first = <div className='meteoData'><div className='dataCell'></div><div className='dataCell'>Temp minimale</div><div className='dataCell'>Temp maximale</div>
    <div className='dataCell'>Pluviométrie</div><div className='dataCell'>Ensoleillement</div><div className='dataCell'>jours de gel</div>
    </div>;
    
    const buildData = (city) => {
      return(
        {
          pour : city.city,
          temp_min : <Moyenne attribut='temp_min' data={city.data} />,
          temp_max : <Moyenne attribut='temp_max' data={city.data} />,
          pluviometrie : <Sum attribut='pluviometrie' data={city.data} />,
          ensoleillement : <Sum attribut='ensoleillement' data={city.data} />,
          jours_gel : <Sum attribut='jours_gel' data={city.data} />
        }

      );
    }

    return (
    <div className='dataComparison'>
      {first}
    <MeteoData month={buildData(selectedCity)} />
    <MeteoData month={buildData(favoriteCity)} />
    </div>

    );
  }
  export default DataComparison;
  