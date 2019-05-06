import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
	withRouter
  } from 'react-router-dom';

class Register extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			username: "",
			email: "",
			email2: "",
			password: "",
			password2: "",
			passwordsAreNotEq : false,
			emailsAreNotEq : false
		};
	}
	
	validateForm(){
		
		return !this.state.emailsAreNotEq && !this.state.passwordsAreNotEq && this.state.username.length >0 && this.state.surname.length >0 && this.state.username.length > 0 && this.state.password.length > 0 &&  this.state.email.length > 0;
	}
	
	handleSubmit = event => {
		event.preventDefault();

		const user = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			poems: [],
			liked: []
		}
		let url = new URL("http://localhost:4000/addUser");

		axios.post(url,user).then(response => {
			if(response.status === 200){
				this.props.history.push({
					pathname: '/',
					state: {login: this.state.username}
				});
			}
			else{
				throw new Error(response.status)
			}
		})
		.catch((error) => {
			console.log('error ' + error.message);
		});
		
		
	}

	handleChange = event => {
		this.setState({ [event.target.id]: event.target.value}, (event) =>{
			if ((this.state.password === this.state.password2)) {
				this.setState({ passwordsAreNotEq: false })
			}
			else {
				this.setState({ passwordsAreNotEq: true })
			}
			let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (reg.test(this.state.email) === false) {
				this.setState({ emailFormatIsIncorrect: true })
			}
			else {
				this.setState({ emailFormatIsIncorrect: false })
			}

			if ((this.state.email === this.state.email2)) {
				this.setState({ emailsAreNotEq: false })
			}
			else {
				this.setState({ emailsAreNotEq: true })
			}
		});

	}

	validateEmail(){
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(reg.test(this.state.email) === false){
			this.setState({emailFormatIsIncorrect : true})
		}
		else{
			this.setState({emailFormatIsIncorrect : false})
		}

		if((this.state.email === this.state.email2)){
			this.setState({emailsAreNotEq : false})
		}
		else{
			this.setState({emailsAreNotEq : true})
		}
	}
	
	
	render(){
		const passwordsAreNotEq = this.state.passwordsAreNotEq
		const emailsAreNotEq = this.state.emailsAreNotEq
		const emailFormatIsIncorrect = this.state.emailFormatIsIncorrect
		return(
			<div className="Register">
				<form onSubmit={this.handleSubmit}>
					<Form.Group controlId="login">
						<Form.Label> Login </Form.Label>
						<Form.Control
							type = "text"
							value = {this.state.username}
							onChange = {this.handleChange}
							placeholder= "insert login"
						/>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label> Password </Form.Label>
						<Form.Control
							type = "password"
							value = {this.state.password}
							onChange = {this.handleChange}
							placeholder= "insert password"
						/>
					</Form.Group>
					<Form.Group controlId="password2">
						<Form.Label> Repeat password </Form.Label>
						<Form.Control
							type = "password"
							value = {this.state.password2}
							onChange = {this.handleChange}
							placeholder= "repeat password"
						/>
					</Form.Group>
					{passwordsAreNotEq ? <p>Passwords are not equal</p> : ""}
					<Form.Group controlId="email">
						<Form.Label> Email </Form.Label>
						<Form.Control
							type = "email"
							value = {this.state.email}
							onChange = {this.handleChange}
							placeholder= "insert email"
						/>
					</Form.Group>
					<Form.Group controlId="email2">
						<Form.Label> Repeat e-mail </Form.Label>
						<Form.Control
							type = "email"
							value = {this.state.email2}
							onChange = {this.handleChange}
							placeholder= "repeat email"
							autocomplete = "nope"
						/>
					</Form.Group>
					{emailsAreNotEq ? <p>E-mails are not equal.</p> : ""}
					{emailFormatIsIncorrect ? <p>E-mail has incorrect format</p> : ""}
					<Button
						block
						disabled={!this.validateForm()}
						type="submit"
					>
						Register
					</Button>
				</form>
			</div>
			
		);
	}
}

export default withRouter(Register);