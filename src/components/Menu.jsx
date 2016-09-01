import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Shield extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div>
					<FlatButton  label="Vagas" primary={true}/>
					<FlatButton  label="Anuncie" primary={true} />
				</div>
			)
	}
}

export default Shield;