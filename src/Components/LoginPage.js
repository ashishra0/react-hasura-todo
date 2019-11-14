import React from 'react';
import { Button, Jumbotron } from "react-bootstrap";
import '../App.css'


class LoginPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="build">
          <Jumbotron>
            <h1 className="title title--medium title--full">{this.props.title}</h1>
            <p className="caption">Achieve more today!</p>
            <p>
              <Button variant="outline-primary" size="lg" onClick={this.props.btn}>Login to continue</Button>
            </p>
          </Jumbotron>
        </section>
      </div>
    );
  }
};

export default LoginPage;