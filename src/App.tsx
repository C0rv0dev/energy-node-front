import React from 'react';
import Router from './routing/Router';
import LayoutProvider from './providers/LayoutProvider';
import EnergyUseProvider from './providers/EnergyUseProvider';

function App() {
  return (
    <LayoutProvider>
      <EnergyUseProvider>
        <Router />
      </EnergyUseProvider>
    </LayoutProvider>
  );
}

export default App;
