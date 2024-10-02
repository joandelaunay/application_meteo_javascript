

const Moyenne = ({attribut,data}) => {

    const res = (data.reduce ( ( previous , element )  =>  previous + element[attribut] , 0 ) / 12).toFixed(1);

    return (
        res
    );

}
export default Moyenne;