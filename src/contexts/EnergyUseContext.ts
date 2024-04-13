import { createContext } from "react";
import { CreateEnergyRecord, EnergyUseRecord } from "../interfaces/EnergyUse";

interface EnergyUseContextProps {
  usage: number;
  uniqueDates: string[];
  records: EnergyUseRecord[];
  getEnergyUse: () => Promise<void>;
  filterRecords: (date: string) => void;
  createEnergyRecord: (data: CreateEnergyRecord) => Promise<void>;
}

const EnergyUseContext = createContext<EnergyUseContextProps>({} as EnergyUseContextProps);
EnergyUseContext.displayName = "EnergyUseContext";

export default EnergyUseContext;
