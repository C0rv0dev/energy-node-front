import React from "react";
import RouteList from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views imports
import Main from "../resources/views/Main";

class Router {
  render() {
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

  getCurrentPath() {
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case RouteList.Home:
        return "Home";
      default:
        return null;
    }
  }
}

export default new Router();
