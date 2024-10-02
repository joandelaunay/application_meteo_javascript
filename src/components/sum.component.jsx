

const Sum = ({ data,attribut }) => {

    const res = data.reduce ( ( previous , element )  =>  previous + element[attribut] , 0 ).toFixed(1) ;

    return (
        res
    );


}
export default Sum;