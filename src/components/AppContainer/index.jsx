import React from 'react';
import Header from 'components/Header';
import Greetings from 'components/Greetings';
import style from './style.css';

class AppContainer extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <div className={style.root}>
                <Header/>
                <Greetings/>
            </div>
        )
    }
}

export default AppContainer;