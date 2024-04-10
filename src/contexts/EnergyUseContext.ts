import { createContext } from "react";
import AppSettings from "../interfaces/AppSettings";

interface EnergyUseContextProps {
  usage: number;
  appSettings: AppSettings;
  errorMessage: string;
  isLoading: boolean;
  updateSettings: (settings: AppSettings) => void;
  getEnergyUse: () => void;
}

const EnergyUseContext = createContext<EnergyUseContextProps>({} as EnergyUseContextProps);
EnergyUseContext.displayName = "EnergyUseContext";

export default EnergyUseContext;
