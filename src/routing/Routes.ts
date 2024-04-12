enum PublicRouteList {
  Login = '/login',
  Register = "/register",
  ForgotPassword = "/forgot-password",
};

enum PrivateRouteList {
  Home = '/dashboard',
  Energy = '/energy',
  Settings = '/settings',
  About = '/about',
  Logout = "/logout",
};

const RouteList = {
  PublicRoutes: PublicRouteList,
  PrivateRoutes: PrivateRouteList,
};

export default RouteList;
