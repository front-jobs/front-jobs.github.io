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
                <h1 className={style.logo}>
                    <img className={style.image} src={src}/>
                    <span className={style.text}>Front Jobs</span>
                </h1>
                <p>Procurando front-end?</p>
            </div>
        )
    }
}

export default Greetings;