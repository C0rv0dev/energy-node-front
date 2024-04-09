import React from "react";
import RouteList from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views imports
import Main from "../resources/views/Main";
import LayoutOutlet from "../resources/layout/LayoutOutlet";
import Energy from "../resources/views/Energy";
import About from "../resources/views/About";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOutlet />}>
          <Route
            path={RouteList.Home}
            element={<Main />}
          />

          <Route
            path={RouteList.Energy}
            element={<Energy />}
          />

          <Route
            path={RouteList.Settings}
            element={<div>Settings</div>}
          />

          <Route
            path={RouteList.About}
            element={<About />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
