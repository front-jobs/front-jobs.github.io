import React from 'react';
import Firebase from 'firebase';
import style from './style.css';

class Content extends React.Component {
    constructor() {
        super();
        this.ref = Firebase.database().ref("greetings");
        this.ref.on("value", (dataSnapshot) => {
            this.greetings = dataSnapshot.val();
            this.setState({
                greetings: this.greetings
            })
        });
    }

    render() {
        return(
            <div className={style.root}>
                {this.greetings}
            </div>
        )
    }
}

export default Content;