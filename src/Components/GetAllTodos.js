import React, { Component } from "react";
import { Query } from "react-apollo";
import { getAllTodos } from "../GraphQueries/queries";
import MarkTodo from "./MarkTodo";
import DeleteTodo from "./DeleteTodos";
import {
  Badge,
  Container,
  Row,
  Col, Table
} from "react-bootstrap";
import { client } from "./Home";
import { ApolloProvider } from "react-apollo";
import FontAwesome from "./FontAwesome";

class GetAllTodos extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      isAuthenticated() && (
        <ApolloProvider client={client}>
          <div className="container">
            <h2 style={{ textAlign: "center" }}>All Todos</h2>
            <h3 style={{ textAlign: "center" }}>

            </h3>
            <Container>
              <Row>
                <Col sm={12}>
                  <Query query={getAllTodos}>
                    {({ loading, error, data }) => {
                      if (loading)
                        return (
                          <FontAwesome/>
                        );
                      if (error) return <div>{""}</div>;
                      let count = 0;
                      return (
                        <div>
                          <Table bordered hover>
                            <thead>
                            <tr className="table-primary">
                              <th>#</th>
                              <th>Tasks</th>
                              <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.todos.map(todo => (
                              <tr key={todo.id}>
                                <td>{(count += 1)}</td>
                                <td>{todo.text}<Badge>{todo.completed && (`✅`)}</Badge></td>
                                <td>
                                  { !todo.completed &&
                                  (<span className="mark-todo"><MarkTodo id={todo.id} /></span>)
                                  }
                                  <DeleteTodo id={todo.id} />
                                </td>
                              </tr>
                            ))}
                            </tbody>
                          </Table>
                        </div>
                      );
                    }}
                  </Query>
                </Col>
              </Row>
            </Container>
          </div>
        </ApolloProvider>
      )
    );
  }
}

export default GetAllTodos;