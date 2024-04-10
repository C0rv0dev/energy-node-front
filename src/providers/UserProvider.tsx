import React from "react";
import UserContext from "../contexts/UserContext";
import User from "../interfaces/User";

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = React.useState<boolean>(false);

  const exportValues = React.useMemo(() => ({
    user,
    setUser,
    isUserAuthenticated,
    setIsUserAuthenticated,
  }), [user, setUser, isUserAuthenticated, setIsUserAuthenticated]);

  return (
    <UserContext.Provider value={exportValues}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
