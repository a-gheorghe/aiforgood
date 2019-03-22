import Dashboard from "views/Dashboard/Dashboard.jsx";
import Security from "views/Security/Security.jsx";
import CameraOne from "views/Security/CameraOne.jsx";
import CameraTwo from "views/Security/CameraTwo.jsx";
import CameraThree from "views/Security/CameraThree.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlertPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import UserPage from "views/Pages/UserPage.jsx";

import pagesRoutes from "./pages.jsx";

var pages = [
  { path: "/user-page", name: "User Page", mini: "UP", component: UserPage }
].concat(pagesRoutes);

var dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/security",
    name: "Security",
    state: "openSecurity",
    icon: "pe-7s-shield",
    views: [
      {
        path: "/security/camera/1",
        name: "Camera 1",
        mini: "C1",
        component: CameraOne
      },
      {
        path: "/security/camera/2",
        name: "Camera 2",
        mini: "C2",
        component: CameraTwo
      },
      {
        path: "/security/camera/3",
        name: "Camera 3",
        mini: "C3",
        component: CameraThree
      }
    ]
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashboardRoutes;
