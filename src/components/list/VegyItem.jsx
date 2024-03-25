/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';

export function VegyItem({ title, kaina}) {
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
    function calculateTotal() {
        return count * kaina;
    }


    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{title}</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count}</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <div className={style.allKaina}>
                <span className={style.kaina}>{kaina}</span>
            </div>
            <div className={style.alltotal}>
                <span className={style.total}>{calculateTotal()}</span>
            </div>
            
        </li>
    );
}