import { createContext } from "react";

interface EnergyUseContextProps {
  energyUse: number;
  setEnergyUse: (value: number) => void;
}

const EnergyUseContext = createContext<EnergyUseContextProps>({} as EnergyUseContextProps);
EnergyUseContext.displayName = "EnergyUseContext";

export default EnergyUseContext;
