import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (props) => {
  const error = props.error;
  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>
        Oh snap! You got an error!
        Check console for logs
      </Alert.Heading>
      <p>
        {console.error(error)}
      </p>
    </Alert>
  )
};

export default Error;