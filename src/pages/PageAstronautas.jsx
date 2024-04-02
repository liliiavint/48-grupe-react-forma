import { Astronautas } from "../components/astronautas/Astronautas";
import { AstronautasForm } from "../components/astronautasForm/AstronautasForm";
import style from "../components/astronautasForm/AstronautasForm.module.css";

export function PageAstronautas() {
    return (
        <div className={style.column}>
            
            <div>
            <h1>Spice</h1>    
                <Astronautas />
            </div>
            
            <div>
            <h1>Jei norite <br />užsiregistruoti astronautu,<br />
            prasom užpildykite formą.</h1>  
                <AstronautasForm />
            </div>
        </div>
    )
}