import style from './List.module.css';
import { VegyItem } from './VegyItem';

export function List() {
    const data = ['Bulves', 'Morkos', 'Svogunai', 'Kopustas', 'Pomidoras', 'Agurkas'];
    const data2 = [
        {
            name: 'Bulves',
            kaina: 10,
        }, 
        {
            name: 'Morkos',
            kaina: 20,
        }, 
        {
            name: 'Svogunai',
            kaina: 30, 
        }, 
        {
            name: 'Kopustas', 
            kaina: 40,
        }, 
        { 
            name :'Pomidoras',
            kaina: 50,
        },
        {
            name: 'Agurkas',
            kaina: 60,
        }
    ];


    return (
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {data2.map((vegy, index) => <VegyItem key={index} title={vegy.name} kaina={vegy.kaina}/>)}
            
        </ul>
    );
}