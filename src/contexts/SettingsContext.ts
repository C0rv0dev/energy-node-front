import { createContext } from 'react';
import AppSettings from '../interfaces/AppSettings';

interface SettingsContextProps {
  appSettings: AppSettings;
  errorMessage: string;
  isLoading: boolean;
  updateSettings: (settings: AppSettings) => Promise<void>;
  getSettings: () => void;
}

const SettingsContext = createContext<SettingsContextProps>({} as SettingsContextProps);
SettingsContext.displayName = 'SettingsContext';

export default SettingsContext;
