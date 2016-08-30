import {gray500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	fontFamily: 'Roboto, sans-serif',
	palette: {
	    primary1Color: gray500,
	}
});

export default muiTheme;