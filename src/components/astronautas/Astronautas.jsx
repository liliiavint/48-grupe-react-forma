import  style from'./Astronautas.module.css'
import astronautas from './astronautas.png'


function Astronautas(){
    return (
        <main className={style.container}>
        <div className={style.columnLeft}>
            <h1 className={style.mainTitle}><span>404</span>Lost in space</h1>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate a alias omnis pariatur tempore necessitatibus suscipit voluptatem modi! Ipsam.</p>
            <div className={style.btnList}>
                <a className={style.btn} href="/">Go home</a>
                <a className={style.btn +' btnWhite'} href="/">Back</a>
            </div>
        </div>
        <div className={style.columnRight}>
            <img className={style.mainImg} src={astronautas} alt="Astronautas raso zinute namo, nes isskrydo i kosmosa" />
        </div>
    </main>
    )
}

export { Astronautas }