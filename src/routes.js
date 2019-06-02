import Dashboard from "views/Dashboard.js";
import Map from "views/Map.js";
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
    path: "/register",
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
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  //
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
