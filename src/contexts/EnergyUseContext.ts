import { createContext } from "react";
import { CreateEnergyRecord } from "../interfaces/EnergyUse";
import DateOption from "../types/DateOption";
import { RecordCollection } from "../interfaces/RecordCollection";

interface EnergyUseContextProps {
  usage: number;
  uniqueDates: DateOption[];
  recordsCollection: RecordCollection[];
  getEnergyUse: (month?: string) => Promise<void>;
  filterRecords: (date: string) => void;
  createEnergyRecord: (data: CreateEnergyRecord, month?: string) => Promise<void>;
  clearRecords: () => void;
}

const EnergyUseContext = createContext<EnergyUseContextProps>({} as EnergyUseContextProps);
EnergyUseContext.displayName = "EnergyUseContext";

export default EnergyUseContext;
