import { createContext } from "react";
import { LoginUser, RegisterUser, User } from "../interfaces/User";

interface UserContextProps {
  user: User | null;
  isUserAuthenticated: boolean;
  logoutUser: () => Promise<void>;
  setUser: (user: User) => void;
  loginUser: (data: LoginUser) => Promise<void>;
  registerUser: (user: RegisterUser) => Promise<void>;
  setIsUserAuthenticated: (isUserAuthenticated: boolean) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);
UserContext.displayName = "UserContext";

export default UserContext;
