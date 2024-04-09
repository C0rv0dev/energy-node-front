import React from "react";
import api from "../api";
import { useMemo, useState } from "react";
import EnergyUseContext from "../contexts/EnergyUseContext";

interface EnergyUseProviderProps {
  children: React.ReactNode;
}

const EnergyUseProvider = ({ children }: EnergyUseProviderProps) => {
  const [usage, setUsage] = useState(0);
  const [totalConsumptionRange, setTotalConsumptionRange] = useState(0);

  const updateTotalConsumptionRange = async (totalConsumptionRange: number) => {
    await api.put('/energy/total-consumption-range', {
      totalConsumptionRange,
    })
      .then(() => {
        setTotalConsumptionRange(totalConsumptionRange);
      });
  }

  const getEnergyUse = async () => {
    await api.get('/home-display')
      .then((response) => {
        setUsage(response.data.usage);
        setTotalConsumptionRange(response.data.totalConsumptionRange);
      });
  }

  // values to be exported 
  const value = useMemo(() => ({
    usage,
    totalConsumptionRange,
    updateTotalConsumptionRange,
    getEnergyUse,
  }), [usage, totalConsumptionRange]);

  // effects
  // use a timer to call backend API every 5 seconds
  React.useEffect(() => {
    getEnergyUse();

    const interval = setInterval(() => {
      getEnergyUse();
    }, (10 * 1000));

    return () => clearInterval(interval);
  }, []);

  return (
    <EnergyUseContext.Provider value={value}>
      {children}
    </EnergyUseContext.Provider>
  );
};

export default EnergyUseProvider;
