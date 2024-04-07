import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function LayoutOutlet() {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  )
}

export default LayoutOutlet;
