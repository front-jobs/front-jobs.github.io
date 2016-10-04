import React from 'react';
import style from './style.css';
import src from 'images/logo_frontjobs.svg';

class Greetings extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <div className={style.root}>
                <h1 className={style.title}>
                    <img src={src}/>
                    <span>Front Jobs</span>
                </h1>
                <div className={style.advert}>
                    <h2 className={style.text}>Procurando front-end?</h2>
                    <p>Se você ou sua empresa está precisando de um front-end, anuncie sua vaga no Front Jobs.</p>
                    <a className={style.button} href="">Anuncie uma vaga</a>
                </div>
            </div>
        )
    }
}

export default Greetings;