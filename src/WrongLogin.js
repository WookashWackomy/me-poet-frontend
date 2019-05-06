import React, { Component} from 'react';
import Login from './Login';

class WrongLogin extends React.Component{
	render(){
		return(
			<div className="WrongLogin">
				<h1>
					You entered incorrect login or password. Please try again.
				</h1>
				<Login/>
			</div>
		);
	}
}

export default WrongLogin;