import {Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
    const chave = sessionStorage.getItem('passetoken')
    if(chave===null){
        return false
    }
    else{
        return true
    }
}

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

export default PrivateRoute;