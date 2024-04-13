import React from 'react';
import Router from './routing/Router';
import UserProvider from './providers/UserProvider';
import LayoutProvider from './providers/LayoutProvider';
import EnergyUseProvider from './providers/EnergyUseProvider';
import SettingsProvider from './providers/SettingsProvider';

// date picker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <UserProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <LayoutProvider>
          <SettingsProvider>
            <EnergyUseProvider>
              <Router />
            </EnergyUseProvider>
          </SettingsProvider>
        </LayoutProvider>
      </LocalizationProvider>
    </UserProvider>
  );
}

export default App;
