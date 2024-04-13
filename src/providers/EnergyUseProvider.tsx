import React from "react";
import api from "../api";
import { useMemo, useState } from "react";
import EnergyUseContext from "../contexts/EnergyUseContext";
import { CreateEnergyRecord } from "../interfaces/EnergyUse";
import UserContext from "../contexts/UserContext";

interface EnergyUseProviderProps {
  children: React.ReactNode;
}

const EnergyUseProvider = ({ children }: EnergyUseProviderProps) => {
  const { loginUser } = React.useContext(UserContext);
  const [usage, setUsage] = useState(0);
  const [records, setRecords] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getEnergyUse = React.useCallback(async () => {
    await api.get('/energy/my-usage')
      .then((response) => {
        const { records, totalUsage } = response.data;

        const dates = records.map((record: any) => record.date);
        const uniqueDates = dates.filter((date: any, index: any) => dates.indexOf(date) === index);

        setUniqueDates(uniqueDates);
        setRecords(records);
        setUsage(totalUsage);
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  const createEnergyRecord = React.useCallback(async (data: CreateEnergyRecord) => {
    await api.post('/energy/my-usage/create', data)
      .then(() => {
        getEnergyUse();
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, [getEnergyUse]);

  const filterRecords = React.useCallback(async (date: string) => {
    const postDate = (date === 'none' || date === 'all') ? null : date;

    await api.post('/energy/my-usage', { postDate })
      .then((response) => {
        let recordsCollection = [];
        const { records } = response.data;

        if (date === 'none' || date === 'all') {
          recordsCollection = records;
        } else {
          recordsCollection = records.filter((record: any) => record.date === date);
        }

        setRecords(recordsCollection);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, [records]);

  // values to be exported 
  const exportValues = useMemo(() => ({
    usage,
    uniqueDates,
    errorMessage,
    getEnergyUse,
    filterRecords,
    createEnergyRecord
  }), [usage, errorMessage, getEnergyUse, createEnergyRecord]);

  // effects
  React.useEffect(() => {
    getEnergyUse();
  }, [loginUser, getEnergyUse]);

  return (
    <EnergyUseContext.Provider value={{ ...exportValues, records }}>
      {children}
    </EnergyUseContext.Provider>
  );
};

export default EnergyUseProvider;
