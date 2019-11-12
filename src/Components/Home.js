import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { GRAPHQL_URL } from '../secret';
import '../App.css'
import GetTodos from "./GetTodos";


var token = localStorage.getItem("auth0:id_token");
export var client = new ApolloClient({
  uri: GRAPHQL_URL,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && (
          <ApolloProvider client={client}>
            <div className="getTodo">
              <GetTodos />
            </div>
          </ApolloProvider>
        )}
      </div>
    );
  }
}

export default Home;