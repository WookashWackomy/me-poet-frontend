import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Login from './Login';
import axios from 'axios';
import {
	Link
	} from 'react-router-dom';
	
const Poem = props => (
	<tr>
		<td>{props.poem.author}</td>
		<td>{props.poem.title}</td>
		<td>{props.poem.body}</td>
	</tr>
)

class MainPage extends React.Component{

	static defaultProps = {
		user: {
			login:  "",
			token:  "",
			logged : false,
		  }
	}
	constructor(props){
		super(props);
			this.state = {
				user: {
				login:  "",
				token:  "",
				logged : false,
				},
			poems: []
			}
	}

	componentDidMount() {
		axios.get('http://localhost:4000/poems')
				.then(response => {
						this.setState({poems: response.data});
				})
				.catch(function (error) {
						console.log(error);
				})
}

poemList() {
	return this.state.poems.map(function(currPoem, i) {
			return <Poem poem={currPoem} key={i} />;
	});
}	
	render(){
		const user = this.state.user;

		return(
			<div class="row">
			   <div class="col-3">
            <div class="logged-info">
              {user.logged ? `Jesteś zalogowany jako: ${user.login}` : ""}
            </div>

            <div class="logout">
              {user.logged ? <Link to="/logout">Wyloguj się</Link> : ""}
            </div>

          </div>
				<Container>
					<Row>
						<Col className="Poem feed">
						<table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Author</th>
														<th>Title</th>
														<th>Poem</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.poemList() }
                    </tbody>
                </table>
						</Col>
						<Col className="Features">
							<h3>
									With MePoet you can....
							</h3>
							<ul>
								<li>Write and share poems!</li>
								<li>Make use of thousands other poems when you're stuck!</li>
								<li>View, like and comment other's poems!</li>
							</ul>
						</Col>
						{!user.logged ? <Col className="Utils">
							<Link to="/registration">
							
							<Button >
									Register
									</Button>
							</Link>
							<Link to="/composePoem">
							
							<Button >
									compose now!
									</Button>
							</Link>

							<Login/>
						</Col> : ""}
					</Row>
				</Container>
			</div>
			
		);
	}
}

export default MainPage;