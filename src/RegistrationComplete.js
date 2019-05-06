import React, { Component} from 'react';
import Login from './Login.js';

class RegistrationComplete extends React.Component{
	render(){
		return(
			<div>
				<h1> Registration finished </h1>
				<h2> Registration succesful. Please use form below to login </h2>
				<Login/>
			</div>
		)
	}
}

export default RegistrationComplete;