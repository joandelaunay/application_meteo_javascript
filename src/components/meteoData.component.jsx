import '../assets/style/dataCell.style.css'

const MeteoData = ( {month} ) => {
  
  return (
    <div className="meteoData">
      <div className="dataCell text">{month.pour}</div><div className='dataCell temperature'>{month.temp_min}</div><div className='dataCell temperature'>{month.temp_max}</div>
      <div className="dataCell mm">{month.pluviometrie}</div><div className='dataCell h'>{month.ensoleillement}</div><div className='dataCell jour'>{month.jours_gel}</div>
    </div>
    );
}
export default MeteoData;
  