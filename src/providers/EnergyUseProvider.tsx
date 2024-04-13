import React from "react";
import api from "../api";
import { useMemo, useState } from "react";
import EnergyUseContext from "../contexts/EnergyUseContext";

interface EnergyUseProviderProps {
  children: React.ReactNode;
}

const EnergyUseProvider = ({ children }: EnergyUseProviderProps) => {
  const [usage, setUsage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const getEnergyUse = React.useCallback(async () => {
    await api.get('/energy/my-usage')
      .then((response) => {
        setUsage(response.data.totalUsage);
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  // values to be exported 
  const exportValues = useMemo(() => ({
    usage,
    errorMessage,
    getEnergyUse,
  }), [usage, errorMessage, getEnergyUse]);

  return (
    <EnergyUseContext.Provider value={exportValues}>
      {children}
    </EnergyUseContext.Provider>
  );
};

export default EnergyUseProvider;
