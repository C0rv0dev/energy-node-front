import React from "react";
import RouteList from "../routing/Routes";
import { Routes, Route } from "react-router-dom";
import isInPublics from "../utils/UnauthenticatedRoute";
import UserContext from "../contexts/UserContext";

// views imports
// layouts
import PrivateLayoutOutlet from "../resources/layout/PrivateLayoutOutlet";
import PublicLayoutOulet from "../resources/layout/PublicLayoutOutlet"

// views imports
// privates
import MainPage from "../resources/views/Private/Main";
import EnergyPage from "../resources/views/Private/Energy";
import SettingsPage from "../resources/views/Private/Settings/Settings";
import AboutPage from "../resources/views/Private/About";

// publics
import LoginPage from "../resources/views/Public/Login";
import RegisterPage from "../resources/views/Public/Register/Register";
import ForgotPasswordPage from "../resources/views/Public/ForgotPassword";

function RoutesProvider() {
  const { isUserAuthenticated } = React.useContext(UserContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!isUserAuthenticated && !isInPublics(window.location.pathname)) {
        window.location.href = RouteList.PublicRoutes.Login;
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [isUserAuthenticated]);

  return (
    <Routes>
      {!isUserAuthenticated && (
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
      )}

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
