import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Containers
import Full from './containers/Full/'

// Views
import Login from './pages/Pages/Login/'
import Register from './pages/Pages/Register/'
import Page404 from './pages/Pages/Page404/'
import Page500 from './pages/Pages/Page500/'

// Load css

const render = Component => {
  ReactDOM.render((
    <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Route exact path="/register" name="Register Page" component={Register}/>
        <Route exact path="/404" name="Page 404" component={Page404}/>
        <Route exact path="/500" name="Page 500" component={Page500}/>
        <Route path="/" name="Home" component={Full}/>
      </Switch>
    </HashRouter>
  ), document.getElementById('root'));
}

render(Full)

if (module.hot) {
  module.hot.dispose(function () {
    render(Full)
  });

  module.hot.accept(function () {
    render(Full)
  });
}
