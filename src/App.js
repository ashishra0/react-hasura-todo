import React, { Component, Fragment } from "react";
import {
  Navbar,
  Button,
  Nav
} from "react-bootstrap";
import "./App.css";

class App extends Component {
  goTo = (route) => {
    this.props.history.replace(`/${route}`);
  };

  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="appHeader">React-Todo-Hasura</Navbar.Brand>
          <Nav className="mr-auto">
            {
              isAuthenticated() && (
                <Fragment>
                  <Nav.Link onClick={this.goTo.bind(this, 'home')}>Dashboard</Nav.Link>
                  <Nav.Link onClick={this.goTo.bind(this, 'alltodos')}>All Todos</Nav.Link>
                  <Button variant="outline-info" onClick={this.logout}>Logout</Button>
                </Fragment>
              )
            }
            {
              !isAuthenticated() && (
                <Button variant="outline-info" onClick={this.login}>Login</Button>
              )
            }
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
