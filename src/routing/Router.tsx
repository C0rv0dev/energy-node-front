import React from "react";
import RouteList from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views imports
import MainPage from "../resources/views/Private/Main";
import EnergyPage from "../resources/views/Private/Energy";
import SettingsPage from "../resources/views/Private/Settings/Settings";
import AboutPage from "../resources/views/Private/About";

// layout
import PrivateLayoutOutlet from "../resources/layout/PrivateLayoutOutlet";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
