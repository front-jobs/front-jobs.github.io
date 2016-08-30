import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import styles from '../styles/App';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.wrapper}>
                    <AppBar style={styles.appBar} />
                    <div style={styles.container}>
                        <p>Welcome to Front Jobs!</p> 
                        <RaisedButton label="Quer anunciar?" />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;