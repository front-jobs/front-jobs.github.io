import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    wrapper: {
        margin: 8
    }
}

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar />
                    <div style={style.wrapper}>
                        <p>Welcome to Front Jobs!</p> 
                        <RaisedButton label="Hello..." />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;