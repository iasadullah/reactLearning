import { routeName } from "../Constants/RouteName";
import HomeScreen from "../Screens/HomeScreen";
const isLoggedIn = localStorage.getItem("isLoggedIn");
export const RoutingList = [
  {
    route: "*",
    element: <HomeScreen />,
    is_protected: false,
    // allowedRoles: [
    //   "super_admin",
    //   "workspace_admin",
    //   "advisor",
    //   "workspace_member",
    // ],
  },
  {
    route: routeName.home,
    element: <HomeScreen />,
    is_protected: false,
  },
];
