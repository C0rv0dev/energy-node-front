import React from "react";
import RouteList from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views imports
import Main from "../resources/views/Main";
import LayoutOutlet from "../resources/layout/LayoutOutlet";

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
            path={RouteList.About}
            element={<div>About</div>}
          />

          <Route 
            path={RouteList.Energy}
            element={<div>Energy</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
