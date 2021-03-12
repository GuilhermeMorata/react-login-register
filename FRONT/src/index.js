//aplicaçoes importadas...
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.css';

//paginas importadas...
import Login from './pages/login/login';
import Register from './pages/register/register';
import Main from './pages/main/main'
import Showcase from './pages/showcase/showcase'
import reportWebVitals from './reportWebVitals';
import { isAuthenticated } from "./config/isautheticated";

//local onde injeta os componentes 
/*fazer a rota como base do page...
const [token, setToken] = useState()

if(!token) {
  return <Login setToken={setToken} />
}
*/
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route exact={true} path="/login" component={Login}/>
    <Route exact={true} path="/register" component={Register}/>
    <Route exact={true} path="/showcase" component={Showcase}/>
    <PrivateRoute path="/main" component={Main} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
