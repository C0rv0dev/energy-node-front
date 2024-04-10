import { createContext } from "react";
import User from "../interfaces/User";

interface UserContextProps {
  user: User | null;
  setUser: (user: User) => void;
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: (isUserAuthenticated: boolean) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);
UserContext.displayName = "UserContext";

export default UserContext;
