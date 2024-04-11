import { createContext } from "react";
import { RegisterUser, User } from "../interfaces/User";

interface UserContextProps {
  user: User | null;
  isUserAuthenticated: boolean;
  setUser: (user: User) => void;
  registerUser: (user: RegisterUser) => Promise<void>;
  setIsUserAuthenticated: (isUserAuthenticated: boolean) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);
UserContext.displayName = "UserContext";

export default UserContext;
