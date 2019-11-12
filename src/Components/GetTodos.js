import React from "react";
import { Query } from "react-apollo";
import { getIncompleteTodos } from "../GraphQueries/queries";
import MarkTodo from "./MarkTodo";
import DeleteTodo from "./DeleteTodos";
import AddTodos from "./AddTodos";
import '../App.css'
import {
  Row,
  Col,
  Table
} from "react-bootstrap";
import FontAwesome from "./FontAwesome";

const GetTodos = () => (
  <Query query={getIncompleteTodos}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <FontAwesome />
        );
      if (error) return `Error. Check console logs`;
      if (data.todos.length === 0)
        return (
          <div>
            <h3>Be Productive <span role="img" aria-label={"strong"}>💪🏻</span></h3>
            <AddTodos />
          </div>
        );
      let count = 0;
      return (
        <div className="container">
          <Row>
            <Col sm={12}>
              <Table bordered hover>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Tasks</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.todos.map(todo => (
                  <tr key={todo.id}>
                    <td>{(count += 1)}</td>
                    <td>{todo.text}</td>
                    <td>
                      <span className="mark-todo"><MarkTodo id={todo.id} /></span>
                      <DeleteTodo id={todo.id} />
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
              <AddTodos/>
            </Col>
          </Row>
        </div>
      );
    }}
  </Query>
);

export default GetTodos;