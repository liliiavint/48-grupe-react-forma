/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';

export function VegyItem({ data }) {
    const { title, price, unit, href } = data;
    const minVegetablesAmount = 0;
    const maxVegetablesAmount = 10;
    const [count, setCount] = useState(1);

    function handleCountMinus() {
        if (count > minVegetablesAmount) {
            setCount(count - 1);
        }
    }

    function handleCountPlus() {
        if (count < maxVegetablesAmount) {
            setCount(count + 1);
        }
    }
     
    // function  total (){
    //      count * price
    // };   
    return (
        <li className={style.vegy}>
            <a className={style.vegyTitle} ><Link to={'/vegetables/' + href}>{title}</Link> ({price}&euro;/{unit})</a>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count} {unit}</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            {/* <Link to={'/vegetables/' + href}>{title}</Link> */}
        </li>
    );
}
