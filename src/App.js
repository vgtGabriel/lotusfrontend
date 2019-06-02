import React,{Component} from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from './layouts/Admin/Admin'
import Login from './components/login/login'

const hist = createBrowserHistory();

class App extends Component{
  render(){
    return(
        <Router history={hist}>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect from="/" to="/login"/>
        </Switch>
      </Router>
    )
  }
}
export default App;