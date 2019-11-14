import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { addTodo, getIncompleteTodos, getAllTodos } from '../GraphQueries/queries';
import { FormGroup, FormControl, Button, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddTodos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    }
  }

  submitTodo(insertTodo) {
    insertTodo({ variables: {text: this.state.text}, refetchQueries: [{ query: getIncompleteTodos }, { query: getAllTodos }] });
  }

  render() {
    return (
      <Mutation mutation={addTodo}>
        {(insertTodo, { data }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              this.submitTodo(insertTodo);
            }}
          >
            <FormGroup>
              <InputGroup>
                <FormControl
                  type="text"
                  value={this.state.text}
                  placeholder="Achieve something today."
                  onChange={e => this.setState({ text: e.target.value })}
                />
                <Button type="submit" variant="outline-primary"><FontAwesomeIcon icon={faPlus}/></Button>
              </InputGroup>
            </FormGroup>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default AddTodos;