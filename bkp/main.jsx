import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import AppContainer from 'components/AppContainer';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyA9QH69PbC1eOksSBK34JfqEDuGqFipRzw",
	authDomain: "front-jobs-750ed.firebaseapp.com",
	databaseURL: "https://front-jobs-750ed.firebaseio.com",
	storageBucket: "front-jobs-750ed.appspot.com",
	messagingSenderId: "450759883593"
};

Firebase.initializeApp(config);

ReactDOM.render(<AppContainer />, document.getElementById('container'));