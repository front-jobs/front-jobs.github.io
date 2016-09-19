import React from 'react';
import style from './style.css';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <div className={style.root}>
                <a href="" className={style.link}>Vagas</a>
                <a href="" className={style.link}>Anuncie</a>
            </div>
        )
    }
}

export default Header;