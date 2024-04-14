import React from "react";
import api from "../api";
import { useMemo, useState } from "react";
import EnergyUseContext from "../contexts/EnergyUseContext";
import { CreateEnergyRecord } from "../interfaces/EnergyUse";
import UserContext from "../contexts/UserContext";
import DateOption from "../types/DateOption";
import { RecordCollection } from "../interfaces/RecordCollection";

interface EnergyUseProviderProps {
  children: React.ReactNode;
}

const EnergyUseProvider = ({ children }: EnergyUseProviderProps) => {
  const { loginUser } = React.useContext(UserContext);
  const [usage, setUsage] = useState(0);
  const [recordsCollection, setRecordsCollection] = useState<RecordCollection[]>([]);
  const [uniqueDates, setUniqueDates] = useState<DateOption[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getEnergyUse = React.useCallback(async (month?: string) => {
    await api.get('/energy/my-usage')
      .then((response) => {
        const { records, dateOptions, totalUsage } = response.data;
        const uniques = dateOptions.map((date: number) => new DateOption(date));

        setUniqueDates(uniques);
        setUsage(totalUsage);

        if (month) {
          filterRecords(month);
          return;
        }

        setRecordsCollection(records);
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  const createEnergyRecord = React.useCallback(async (data: CreateEnergyRecord, month?: string) => {
    await api.post('/energy/my-usage/create', data)
      .then(() => {
        setRecordsCollection([]);
        getEnergyUse(month);
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, [getEnergyUse]);

  const filterRecords = React.useCallback(async (date: string) => {
    const postDate = (date === 'none' || date === 'all') ? null : date;

    await api.post('/energy/my-usage', { month: postDate })
      .then((response) => {
        const { records } = response.data;
        setRecordsCollection(records);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, [recordsCollection]);

  const clearRecords = React.useCallback(async () => {
    await api.delete('/energy/clear-records')
      .then(() => {
        setRecordsCollection([]);
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  // values to be exported 
  const exportValues = useMemo(() => ({
    usage,
    uniqueDates,
    errorMessage,
    getEnergyUse,
    filterRecords,
    createEnergyRecord,
    clearRecords,
  }), [usage, errorMessage, uniqueDates, getEnergyUse, filterRecords, createEnergyRecord, clearRecords]);

  // effects
  React.useEffect(() => {
    getEnergyUse();
  }, [loginUser, getEnergyUse]);

  return (
    <EnergyUseContext.Provider value={{ ...exportValues, recordsCollection }}>
      {children}
    </EnergyUseContext.Provider>
  );
};

export default EnergyUseProvider;
