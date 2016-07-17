import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <MuiThemeProvider>
                <div> 
                    <p>Welcome to Front Jobs!</p> 
                    <RaisedButton label="Hello..." />
                </div>                
            </MuiThemeProvider>
        )
    }
}

export default App;