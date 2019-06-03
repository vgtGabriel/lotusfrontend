import React,{Component} from "react";
import { createBrowserHistory } from "history";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {isAuthenticated} from './services/userServices'

import Layout from './layouts/Admin/Admin'
import Login from './components/login/login'

const hist = createBrowserHistory();

const PrivateRoute = ({ render:Render,...rest}) =>(
  <Route
    {...rest}
    render ={props =>
    isAuthenticated() ? (
      <Render {...props}/>
    ) : (
      <Redirect to = {{pathname: "/", state: {from:props.location}}}/>
    )
    }
  />
)
class App extends Component{
  render(){
    return(
      <BrowserRouter history={hist}>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <PrivateRoute path="/admin" render={props => <Layout {...props} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;