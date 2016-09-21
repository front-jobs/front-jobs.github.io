import React from 'react';
import Parallax from 'components/Parallax';
import Header from 'components/Header';
import Greetings from 'components/Greetings';
import Content from 'components/Content';
import style from './style.css';

class AppContainer extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <div>
                <Parallax/>
                <div className={style.cover}>
                    <Header/>
                    <Greetings/>
                </div>
                <Content/>
            </div>
        )
    }
}

export default AppContainer;