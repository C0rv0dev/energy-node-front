import React from "react";
import UserContext from "../contexts/UserContext";
import { User } from "../interfaces/User";
import api from "../api";

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = React.useState<boolean>(false);

  const registerUser = async (user: User): Promise<void> => {
    await api.post("/auth/register", user);
  };

  const exportValues = React.useMemo(() => ({
    user,
    isUserAuthenticated,
    setUser,
    registerUser,
    setIsUserAuthenticated,
  }), [user, setUser, isUserAuthenticated, setIsUserAuthenticated]);

  return (
    <UserContext.Provider value={exportValues}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
