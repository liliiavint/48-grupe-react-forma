import { useParams } from 'react-router-dom';


const data = [
    { title: 'Bulvės', price: 1, unit: 'kg.', href: 'bulves' },
    { title: 'Morkos', price: 0.3, unit: 'kg.', href: 'morkos' },
    { title: 'Svogūnai', price: 0.4, unit: 'kg.', href: 'svogunai' },
    { title: 'Kopūstas', price: 0.7, unit: 'vnt.', href: 'kopustas' },
    { title: 'Pomidoras', price: 2.5, unit: 'kg.', href: 'pomidoras' },
    { title: 'Agurkas', price: 1.7, unit: 'vnt.', href: 'agurkas' },
];



  

export function PageVegetablesInner() {
   
    const data2 = useParams();
    const productData = data2.id; 
    for(const key of data){
         

        if(key.href === productData){
    
    return (
        
        <>
            <h3>Apie produktą: {data2.id.toUpperCase()}</h3>
            <p>Dominuojantis produkto yra:<br/> 
             pavadinimas : {key.title};<br/>
             kaina : {key.price} &euro; uz {key.unit} </p>
             
        {/* <div >
            <span >Total: {data.map((vegy, index) => <VegyItem key={index} data={vegy} />)}</span>
        </div> */}
    </>    );
        }
    }
}



    
