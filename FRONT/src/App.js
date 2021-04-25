//aplicaçoes importadas...
import React from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import './index.css';

//paginas importadas...
import Login from './pages/login/login';
import Register from './pages/register/register';
import Main from './pages/main/main'
//import PrivateRoute from './config/privaterouter'
import { UserProvider } from './config/contextuser';
//import reportWebVitals from './reportWebVitals';



function App() {
   return (
     <UserProvider>
      <BrowserRouter>
       <Switch>
         <Route exact={true} path="/login"><Login/></Route>
         <Route exact={true} path="/register" component={Register}/>
         <Route exact={true} path="/main" component={Main}/>
         {/* <PrivateRoute path="/main" component={Main}/> */}
       </Switch>
       </BrowserRouter>
     </UserProvider>  
   );
}

export default App;

