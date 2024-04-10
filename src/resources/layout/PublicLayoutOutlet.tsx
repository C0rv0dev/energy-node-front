import React from 'react';
import { Outlet } from "react-router-dom";

function PublicLayoutOutlet() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default PublicLayoutOutlet;
