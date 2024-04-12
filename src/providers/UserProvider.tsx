import React from "react";
import api from "../api";

import UserContext from "../contexts/UserContext";
import { LoginUser, RegisterUser, User } from "../interfaces/User";
import Cookies from "js-cookie";
import { decrypt } from "../utils/Encryption";

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

  const logoutUser = async () => {
    await api.post("/auth/logout")
      .then(() => {
        setUser(null);
        setIsUserAuthenticated(false);
      });
  }

  React.useEffect(() => {
    const token = Cookies.get("Authorization");

    if (token) {
      const decrypted = JSON.parse(decrypt(token));
      setIsUserAuthenticated(true);
      setUser(decrypted);
    }
  }, [Cookies]);

  const exportValues = React.useMemo(() => ({
    user,
    isUserAuthenticated,
    setUser,
    loginUser,
    logoutUser,
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
