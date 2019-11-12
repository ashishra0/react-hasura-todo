import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Loader from './Components/Loader';
import Auth from './Auth/Auth';
import history from './history';
import GetAllTodos from './Components/GetAllTodos';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/alltodos" render={(props) => <GetAllTodos auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Loader {...props} />
        }} />
      </div>
    </Router>
  );
};

export default Routes;