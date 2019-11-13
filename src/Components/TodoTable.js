import React from "react";
import MarkTodo from "./MarkTodo";
import DeleteTodo from "./DeleteTodos";
import {Table} from "react-bootstrap";


class TodoTable extends React.Component {
  render() {
    const data = this.props.data.todos;
    let count = this.props.count;
    return (
      <Table bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map(todo => (
          <tr key={todo.id}>
            <td>{count += 1}</td>
            <td>{todo.text}</td>
            <td>
              <span className="mark-todo"><MarkTodo id={todo.id} /></span>
              <DeleteTodo id={todo.id} />
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    )
  }
}

export default TodoTable;