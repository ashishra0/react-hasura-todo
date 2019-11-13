import React from 'react';
import { Button } from "react-bootstrap";
import '../App.css'


class LoginPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
          <section className="build">
            <h1 className="title title--medium title--full">{this.props.title}</h1>
            <p className="caption">Achieve more today!</p>
            <div align='center'>
              <Button variant="outline-primary" size="lg" onClick={this.props.btn}>Login to continue</Button>
            </div>
          </section>
      </div>
    );
  }
};

export default LoginPage;