import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
	withRouter
  } from 'react-router-dom';

class Login extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			login: "",
			password: "",
			areCredentialsInvalid : false
		};
	}

	validateForm(){
		return this.state.login.length > 0 && this.state.password.length > 0;
	}
	
	handleSubmit = event => {
		event.preventDefault();
	}
	
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}
	
	render(){
		const areCredentialsInvalid = this.state.areCredentialsInvalid
		return(
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<Form.Group controlId="login">
						<Form.Label> Login </Form.Label>
						<Form.Control
							type = "text"
							value = {this.state.login}
							onChange = {this.handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label> Password </Form.Label>
						<Form.Control
							type = "password"
							value = {this.state.password}
							onChange = {this.handleChange}
						/>
					</Form.Group>
					<Button
						block
						disabled={!this.validateForm()}
						type="submit"
					>
						Login
					</Button>
					{areCredentialsInvalid ? <p>Given credentials are invalid</p> :""}
				</form>
			</div>
		);
	}
}

export default withRouter(Login);