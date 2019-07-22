import React,{Component} from "react";
import { createBrowserHistory } from "history";
import {Router, Route, Switch, Redirect } from "react-router-dom";
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
      <Redirect to = {{pathname: "/login", state: {from:props.location}}}/>
    )
    }
  />
)
class App extends Component{
  render(){
    return(
      <Router history={hist}>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <PrivateRoute path="/admin" render={props => <Layout {...props} />} />
          <Redirect from="/" to="/login"/>
        </Switch>
      </Router>
    )
  }
}
export default App;