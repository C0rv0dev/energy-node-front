import React from "react";
import UserContext from "../contexts/UserContext";
import User from "../interfaces/User";

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);

  const exportValues = React.useMemo(() => ({
    user,
    setUser,
  }), [user, setUser]);

  return (
    <UserContext.Provider value={exportValues}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
