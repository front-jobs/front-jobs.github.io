import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles/Shield'

class Shield extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div style={styles.container}>
					<h1 style={styles.container.logo}>
						<img style={styles.container.logo.image} src="src/images/logo_frontjobs.svg" alt="Front Jobs"/>
						<p style={styles.container.logo.textName}>FRONT JOBS</p>
					</h1>
					<p>Procurando um Front-end?</p> 
					<RaisedButton label="anunciar" />
				</div>
			)
	}
}

export default Shield;