import React from "react";
import api from "../api";
import { useMemo, useState } from "react";
import EnergyUseContext from "../contexts/EnergyUseContext";
import AppSettings from "../interfaces/AppSettings";
import UserContext from "../contexts/UserContext";

interface EnergyUseProviderProps {
  children: React.ReactNode;
}

const EnergyUseProvider = ({ children }: EnergyUseProviderProps) => {
  const { user } = React.useContext(UserContext);
  const [usage, setUsage] = useState(0);
  const [appSettings, setAppSettings] = useState<AppSettings>({} as AppSettings);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const getEnergyUse = React.useCallback(async () => {
    await api.get('/home-display')
      .then((response) => {
        setUsage(response.data.usage);
        setAppSettings(response.data);
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  // values to be exported 
  const exportValues = useMemo(() => ({
    usage,
    appSettings,
    errorMessage,
    isLoading,
    updateSettings,
    getEnergyUse,
  }), [usage, appSettings, errorMessage, isLoading, updateSettings, getEnergyUse]);

  // effects
  // use a timer to call backend API every 5 seconds
  React.useEffect(() => {
    const awaitGetEnergyUse = async () => {
      await getEnergyUse();
    };

    if (!user) return;

    awaitGetEnergyUse();

    const interval = setInterval(() => {
      awaitGetEnergyUse();
    }, (10 * 1000));

    return () => clearInterval(interval);
  }, [user, getEnergyUse]);

  return (
    <EnergyUseContext.Provider value={exportValues}>
      {children}
    </EnergyUseContext.Provider>
  );
};

export default EnergyUseProvider;
