import React, { Component } from 'react';
import { markTodo, getIncompleteTodos, getAllTodos } from '../GraphQueries/queries';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bootstrap';

class MarkTodo extends Component {

  markTodoCompleted(updateTodo) {
    updateTodo({ variables: this.props, refetchQueries: [{ query: getIncompleteTodos }, { query: getAllTodos }] })
  }

  render() {
    return (
      <Mutation mutation={markTodo}>
        {(updateTodo) => (
          <Button variant="outline-success" onClick={e => {
            e.preventDefault();
              this.markTodoCompleted(updateTodo);
          }} >Done️</Button>
        )}
      </Mutation>
    );
  }
}

export default MarkTodo;