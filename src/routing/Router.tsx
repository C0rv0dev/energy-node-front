import React from "react";
import RouteList from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views imports
import Main from "../resources/views/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouteList.Home}
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
