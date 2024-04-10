import React from 'react';
import Router from './routing/Router';
import UserProvider from './providers/UserProvider';
import LayoutProvider from './providers/LayoutProvider';
import EnergyUseProvider from './providers/EnergyUseProvider';

function App() {
  return (
    <UserProvider>
      <LayoutProvider>
        <EnergyUseProvider>
          <Router />
        </EnergyUseProvider>
      </LayoutProvider>
    </UserProvider>
  );
}

export default App;
