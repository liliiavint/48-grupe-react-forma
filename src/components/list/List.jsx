
import style from './List.module.css';
import { VegyItem } from './VegyItem';
// import {data} from './Data'
const data = [
    { title: 'Bulvės', price: 1, unit: 'kg.', href: 'bulves' },
    { title: 'Morkos', price: 0.3, unit: 'kg.', href: 'morkos' },
    { title: 'Svogūnai', price: 0.4, unit: 'kg.', href: 'svogunai' },
    { title: 'Kopūstas', price: 0.7, unit: 'vnt.', href: 'kopustas' },
    { title: 'Pomidoras', price: 2.5, unit: 'kg.', href: 'pomidoras' },
    { title: 'Agurkas', price: 1.7, unit: 'vnt.', href: 'agurkas' },
];

 
export function List() {
    return (
        <ul className={style.vegetables}>
            {data.map((vegy, index) => <VegyItem key={index} data={vegy} />)}
        </ul>
    );
}


// export function Data(x) {
//     for(const key of data){
//         if(key.href === x){
// return { title: key.title, 
//          price: key.price, 
//          unit: key.unit 
//         }
//         }
//     }
// }
// export function correctPolishLetters (string){
//     let newName = string;
//     if(newName = string    
//     .replace('ą', 'a')
//     .replace('ą', 'a')
//     .replace('ć', 'c')
//     .replace('ę', 'e')
//     .replace('ł', 'l')
//     .replace('ł', 'l')
//     .replace('ń', 'n')
//     .replace('ó', 'o')
//     .replace('ś', 's')
//     .replace('ź', 'z')
//     .replace('ż', 'z')){
//     return newName;
//    }
// }