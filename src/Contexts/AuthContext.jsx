import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(false);

export default function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken") ?? null);

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}
