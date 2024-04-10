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
};

const RouteList = {
  PublicRoutes: PublicRouteList,
  PrivateRoutes: PrivateRouteList,
};

export default RouteList;
