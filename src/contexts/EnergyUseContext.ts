import { createContext } from "react";

interface EnergyUseContextProps {
  usage: number;
}

const EnergyUseContext = createContext<EnergyUseContextProps>({} as EnergyUseContextProps);
EnergyUseContext.displayName = "EnergyUseContext";

export default EnergyUseContext;
