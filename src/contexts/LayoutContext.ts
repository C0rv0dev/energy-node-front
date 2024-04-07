import { createContext } from "react";

interface LayoutContextProps {
  showSidebar: boolean;
  toogleSidebar: (value: boolean) => void;
}

const LayoutContext = createContext<LayoutContextProps>({} as LayoutContextProps);
LayoutContext.displayName = "LayoutContext";

export default LayoutContext;
