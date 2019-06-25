import Dashboard from "views/Dashboard.js";
import Map from "views/Map";
import Cadastro from './components/cadastro/cadastro'
import Listar from './components/listagem/lista'

var routes = [
  {
    path: "/home",
    name: "Inicio",

    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/cadastrar",
    name: "Cadastrar",
    icon: "tim-icons icon-simple-add",
    component: Cadastro,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "Listar",
    icon: "tim-icons icon-bullet-list-67",
    component: Listar,
    layout: "/admin"
  },
  {
      path: "/map",
      name: "Map",
      icon: "tim-icons icon-square-pin",
      component: Map,
      layout: "/admin"
    },
];
export default routes;
