import { useParams } from 'react-router-dom';
import { Data } from '../components/list/List';


export function PageVegetablesInner() {
    const data = useParams();
    const productData = Data(data.id); 

    return (
        <>
            <h3>Apie produktą: {data.id.toUpperCase()}</h3>
            <p>Dominuojantis produkto yra:<br/> 
             pavadinimas : {productData.title};<br/>
             kaina : {productData.price} &euro; uz {productData.unit} </p>
        </>
    );
}

