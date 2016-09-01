import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import styles from '../styles/App';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';
import Shield from './Shield.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar style={styles.container.appBar} 
                        iconElementLeft={<span/>} 
                        iconElementRight={<Menu/>}/>
                    <Shield />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;