import React from "react";
import { BrowserRouter } from "react-router-dom";

// layout
import RoutesProvider from "../providers/RoutesProvider";

function Router() {
  return (
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  );
}

export default Router;
