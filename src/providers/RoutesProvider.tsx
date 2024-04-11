import React from "react";
import RouteList from "../routing/Routes";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import PrivateLayoutOutlet from "../resources/layout/PrivateLayoutOutlet";
import PublicLayoutOulet from "../resources/layout/PublicLayoutOutlet"

// views imports
// privates
import MainPage from "../resources/views/Private/Main";
import EnergyPage from "../resources/views/Private/Energy";
import SettingsPage from "../resources/views/Private/Settings/Settings";
import AboutPage from "../resources/views/Private/About";
import UserContext from "../contexts/UserContext";

// publics
import LoginPage from "../resources/views/Public/Login";
import RegisterPage from "../resources/views/Public/Register/Register";
import ForgotPasswordPage from "../resources/views/Public/ForgotPassword";

function RoutesProvider() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isUserAuthenticated } = React.useContext(UserContext);

  React.useEffect(() => {
    if (
      location.pathname !== RouteList.PublicRoutes.Login
      && location.pathname !== RouteList.PublicRoutes.Register
      && location.pathname !== RouteList.PublicRoutes.ForgotPassword
      && !isUserAuthenticated
    ) {
      navigate(RouteList.PublicRoutes.Login);
    }

    if (
      (
        location.pathname === RouteList.PublicRoutes.Login
        || location.pathname === RouteList.PublicRoutes.Register
        || location.pathname === RouteList.PublicRoutes.ForgotPassword
      )
      && isUserAuthenticated
    ) {
      navigate(RouteList.PrivateRoutes.Home);
    }
  }, [isUserAuthenticated, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<PublicLayoutOulet />}>
        <Route
          path={RouteList.PublicRoutes.Login}
          element={<LoginPage />}
        />

        <Route
          path={RouteList.PublicRoutes.Register}
          element={<RegisterPage />}
        />

        <Route
          path={RouteList.PublicRoutes.ForgotPassword}
          element={<ForgotPasswordPage />}
        />
      </Route>

      {isUserAuthenticated && (
        <Route path="/" element={<PrivateLayoutOutlet />}>
          <Route
            path={RouteList.PrivateRoutes.Home}
            element={<MainPage />}
          />

          <Route
            path={RouteList.PrivateRoutes.Energy}
            element={<EnergyPage />}
          />

          <Route
            path={RouteList.PrivateRoutes.Settings}
            element={<SettingsPage />}
          />

          <Route
            path={RouteList.PrivateRoutes.About}
            element={<AboutPage />}
          />
        </Route>
      )}
    </Routes>
  )
}

export default RoutesProvider;
