import React from 'react';
import style from './style.css';

class Content extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <div className={style.root}>
                Hello World!
            </div>
        )
    }
}

export default Content;