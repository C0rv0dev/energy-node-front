import React from "react";
import api from "../api";

import UserContext from "../contexts/UserContext";
import { LoginUser, RegisterUser, User } from "../interfaces/User";
import Cookies from "js-cookie";

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = React.useState<boolean>(false);

  const registerUser = async (user: RegisterUser): Promise<void> => {
    await api.post("/auth/register", user);
  };

  const loginUser = async (data: LoginUser): Promise<void> => {
    await api.post("/auth/login", data)
      .then((response) => {
        const { user } = response.data;
        setUser(user);
        setIsUserAuthenticated(true);
      });
  };

  React.useEffect(() => {
    const token = Cookies.get("Authorization");

    if (token) {
      setIsUserAuthenticated(true);
    }
  }, [Cookies]);

  const exportValues = React.useMemo(() => ({
    user,
    isUserAuthenticated,
    setUser,
    loginUser,
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
