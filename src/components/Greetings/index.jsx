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
                <h1>
                    <img className={style.image} src={src}/>
                    <span className={style.text}>Front Jobs</span>
                </h1>
                <div>
                    <h2>Procurando front-end?</h2>
                    <p>Se você ou sua empresa está precisando de um front-end, anuncie sua vaga no Front Jobs.</p>
                    <a className={style.button} href="">Anuncie uma vaga</a>
                </div>
            </div>
        )
    }
}

export default Greetings;