import React from "react";
import RouteList from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views imports
import MainPage from "../resources/views/Main";
import EnergyPage from "../resources/views/Energy";
import AboutPage from "../resources/views/About";
import SettingsPage from "../resources/views/Settings/Settings";

// layout
import LayoutOutlet from "../resources/layout/LayoutOutlet";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOutlet />}>
          <Route
            path={RouteList.Home}
            element={<MainPage />}
          />

          <Route
            path={RouteList.Energy}
            element={<EnergyPage />}
          />

          <Route
            path={RouteList.Settings}
            element={<SettingsPage />}
          />

          <Route
            path={RouteList.About}
            element={<AboutPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
