import { createContext } from "react";

interface EnergyUseContextProps {
  usage: number;
  totalConsumptionRange: number;
  updateTotalConsumptionRange: (totalConsumptionRange: number) => void;
  getEnergyUse: () => void;
}

const EnergyUseContext = createContext<EnergyUseContextProps>({} as EnergyUseContextProps);
EnergyUseContext.displayName = "EnergyUseContext";

export default EnergyUseContext;
