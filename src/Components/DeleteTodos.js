import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { deleteTodo, getIncompleteTodos, getAllTodos } from "../GraphQueries/queries";
import { Button } from "react-bootstrap";

class DeleteTodo extends Component {
  render() {
    return (
      <Mutation
        mutation={deleteTodo}
        variables={this.props}
        refetchQueries={[
          { query: getIncompleteTodos },
          { query: getAllTodos }
        ]}
      >
        {(deleteTodo, { data }) => (
          <Button
            variant="outline-danger"
            onClick={e => {
              e.preventDefault();
              deleteTodo();
            }}
          >
            Delete
          </Button>
        )}
      </Mutation>
    );
  }
}

export default DeleteTodo;