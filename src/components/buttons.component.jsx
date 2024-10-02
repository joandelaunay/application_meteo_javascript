import '../assets/style/chartZone.style.css'

const Buttons = ({setAttribut,setStringAttribut}) => {

    const essai = event => {
        setAttribut(event.target.value);
        setStringAttribut(event.target.innerText);
    }

    return(
        <div className="buttons">
            <button onClick={essai} value="temp_min">Température minimale(°C)</button><button onClick={essai} value="temp_max">Température maximale(°C)</button>
            <button onClick={essai} value="pluviometrie">Pluviométrie(mm)</button><button onClick={essai} value="ensoleillement">Ensoleillement(jours)</button><button onClick={essai} value="jours_gel">jours de gel(jours)</button>
        </div>
    );



}
export default Buttons