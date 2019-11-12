import gql from 'graphql-tag';

const getAllTodos = gql`
    query {
        todos(order_by: [{completed: asc,id: desc}]){
            id
            text
            completed
            user
        }
    }`;

const getIncompleteTodos = gql`
    query {
        todos(
            where: {completed: {_eq:false}}
        ){
            id
            text
            completed
            user
        }
    }
`;

const getCompleteTodos = gql`
    query {
        todos(
            where: {completed: {_eq:true}}
        ){
            id
            text
            completed
            user
        }
    }`;

const addTodo = gql`
    mutation($text: String!) {
        insert_todos(objects: [{text: $text}]){
            affected_rows
        }
    }
`;

const markTodo = gql`
    mutation($id: Int!) {
        update_todos(
            where: {id: {_eq: $id}}
            _set: {completed: true}
        ){
            affected_rows
        }
    }
`;

const deleteTodo = gql`
    mutation($id: Int!) {
        delete_todos(
            where: {id: {_eq:$id}}
        ){
            affected_rows
        }
    }
`;

export {
  getAllTodos,
  getIncompleteTodos,
  getCompleteTodos,
  markTodo,
  addTodo,
  deleteTodo
}