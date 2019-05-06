import React, { Component } from 'react';
import './App.css';
import Registration from './Registration.js';
import Login from './Login.js';
import Logout from './Logout.js';
import MainPage from './MainPage';
import ComposePoem from './ComposePoem';
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Router>
      <div class="container-fluid" style={{ background: "#ecf0f1" }}>

        <nav class="navbar navbar-dark bg-dark-green" style={{ marginBottom: "20px" }}>
          <Link to="/"classnName="navbar-brand navbar-left mb-0 h1" style={{ color: "white", width: "100%" }}><img src={logo}></img></Link>
        </nav>


        <div class="row">
          <div class="col-9" >
            <div classnName="container" class="card" style={{ height: "100%" }}>
              <Route exact path="/" component={MainPage} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/composePoem" component={ComposePoem}/>
            </div>
          </div>
        </div>



        <footer class="page-footer font-small pt-4 bg-dark-green" style={{color: "white", marginTop: "20px" }}>
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">Help</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>

              </div>

              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">Your account</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>

              </div>
              <div class="col-md-6 mt-md-0 mt-3">

                <h5 class="text-uppercase">Footer Content</h5>
                <p>Here you can also add some text.</p>

              </div>
            </div>
          </div>


          <div class="footer-copyright text-center py-3 bg-light-green">Created by:
            <a href="#" style={{ color: "white" }}>Łukasz Łakomy</a>
          </div>

        </footer>
      </div >
      </Router>
    );
  }
}

export default App;
