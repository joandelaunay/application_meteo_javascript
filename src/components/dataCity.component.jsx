import MeteoData from './meteoData.component.jsx';
import '../assets/style/dataForCity.style.css';
import '../assets/style/dataCell.style.css'

const DataCity = ({ city }) => {

    const tab = city.data.map( el => <MeteoData month={el} />);

    return (
    <div>
        <div>Data for {city.city}</div>
        <div className="dataForCity">

        <div className="meteoData">
        <div className="dataCell"></div><div className="dataCell">Temp minimale</div><div className="dataCell">Temp maximale</div><div className="dataCell">Pluviométrie</div><div className="dataCell">Ensoleillement</div><div className="dataCell">Jours de gel</div>
        </div>
        {tab}

        </div>
    </div>
    );
  }
  export default DataCity;
  