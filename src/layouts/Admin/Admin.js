import React,{Component} from "react";
import { Route, Switch , Redirect} from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import MainNavbar from "../../components/Navbars/MainNavbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import routes from "routes.js";
import logo from "assets/img/lotus.png";

var ps;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
  async componentDidMount() {
    console.log('Log test 1', this.state.loggedIn)
    if (navigator.platform.indexOf("Win") > -1 && this.state.loggedIn === false) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if(this.state.loggedIn ===false){
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    }
  }
  componentDidUpdate(e) {
    if(!sessionStorage.getItem('@lotus:user')){
      this.setState({loggedIn:true})
    }
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  signOut = async () =>{
    await sessionStorage.removeItem('@lotus:user')
    window.location.reload()
  }
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  render() {

    if(this.state.loggedIn===true){
      console.log('hey:', this.state.loggedIn)
      return (
          <Redirect to={'/'}/>
      )
    }
    else{
      console.log('hey 2:', this.state.loggedIn)
      return (
        <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes} 
            logo={{
              text: "SGD",
              imgSrc: logo
            }}
            bgColor={this.state.backgroundColor}
            toggleSidebar={this.toggleSidebar}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
            >
            <MainNavbar
              {...this.props}
              signOut = {this.signOut}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
            <Switch>{this.getRoutes(routes)}</Switch>
            <Redirect from="/admin" to="/admin/home"/>
            {this.props.location.pathname.indexOf("maps") !== -1 ? null : (
              <Footer fluid />
            )}
          </div>
        </div>
      </>
    );
  }
}
}
export default Admin;
