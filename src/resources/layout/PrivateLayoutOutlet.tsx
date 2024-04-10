import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function PrivateLayoutOutlet() {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  )
}

export default PrivateLayoutOutlet;
