import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
	withRouter
  } from 'react-router-dom';

class ComposePoem extends React.Component{
    constructor(props){
		super(props);
        
        this.handleChange = this.handleChange.bind(this);

		this.state = {
            author: "",
            title: "",
			poemBody: "",
		};
	}

	validateForm(){
		return this.state.poemBody.length > 0;
	}
	
	handleSubmit = event => {
		event.preventDefault();

        let url = new URL("http://localhost:4000/addPoem");
        
        const poem = {
            author: this.state.author,
            title: this.state.title,
            body: this.state.poemBody
        }
		

		axios.post(url,poem).then(response => {
			if(response.status === 200){
				this.props.history.push({
					pathname: '/',
					state: {login: this.state.login}
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
		this.setState({
			[event.target.id]: event.target.value
		});
	}
	
	render(){
		return(

			<div className="form-group">
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId="author">
						<Form.Label> Author </Form.Label>
						<Form.Control
							type = "text"
							value = {this.state.author}
							onChange = {this.handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="title">
						<Form.Label> Title </Form.Label>
						<Form.Control
							type = "text"
							value = {this.state.title}
							onChange = {this.handleChange}
						/>
					</Form.Group>
                    <Form.Group controlId="c">
						<Form.Label> Compose poem! </Form.Label>
						<Form.Control
                            as="textarea"
                            rows="5"
							value = {this.state.poemBody}
							onChange ={e => this.setState({ poemBody : e.target.value })}
						/>
					</Form.Group>
					<Button
						block
						disabled={!this.validateForm()}
						type="submit"
					>
						Create poem!
					</Button>
				</Form>
			</div>
		);
	}
}

export default withRouter(ComposePoem);