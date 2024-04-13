import React from "react";
import AppSettings from "../interfaces/AppSettings";
import api from "../api";
import SettingsContext from "../contexts/SettingsContext";
import UserContext from "../contexts/UserContext";

interface SettingsProviderProps {
  children: React.ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { loginUser } = React.useContext(UserContext);
  const [appSettings, setAppSettings] = React.useState<AppSettings>({} as AppSettings);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const updateSettings = React.useCallback(async (settings: AppSettings) => {
    setIsLoading(true);

    await api.put('/energy/settings', settings)
      .then((response) => {
        setAppSettings(response.data);
      }).catch((error) => {
        setErrorMessage(error.response.data.error.message);
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getSettings = React.useCallback(async () => {
    setIsLoading(true);

    await api.get('/home-display')
      .then((response) => {
        setAppSettings(response.data);
      }).catch((error) => {
        setErrorMessage(error.response.data.error);
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  const exportValues = React.useMemo(() => ({
    isLoading,
    appSettings,
    errorMessage,
    updateSettings,
    getSettings
  }), [appSettings, errorMessage, isLoading, updateSettings]);

  React.useEffect(() => {
    getSettings();
  }, [getSettings, loginUser]);

  return (
    <SettingsContext.Provider value={exportValues}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
