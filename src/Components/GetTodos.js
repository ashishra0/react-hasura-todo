import React from "react";
import { Query } from "react-apollo";
import { getIncompleteTodos } from "../GraphQueries/queries";
import AddTodos from "./AddTodos";
import '../App.css'
import { Row, Col } from "react-bootstrap";
import FontAwesome from "./FontAwesome";
import TodoTable from "./TodoTable";

const GetTodos = () => (
  <Query query={getIncompleteTodos}>
    {({ loading, error, data }) => {
      if (loading)
        return <FontAwesome />;
      if (error) return `Error. Check console logs`;
      if (data.todos.length === 0)
        return (
          <div>
            <h3 className="caption">Be Productive <span role="img" aria-label={"strong"}>💪🏻</span></h3>
            <AddTodos />
          </div>
        );
      let count = 0;
      return (
        <div className="container">
          <Row>
            <Col sm={12}>
              <TodoTable data={data} count={count}/>
              <AddTodos/>
            </Col>
          </Row>
        </div>
      );
    }}
  </Query>
);

export default GetTodos;