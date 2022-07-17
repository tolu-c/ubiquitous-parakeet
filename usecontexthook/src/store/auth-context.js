import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const loginHandler = () => {
    setUserLoggedIn(true);
  };

  const logoutHandler = () => {
    setUserLoggedIn(false);
  };

  const authContextValue = {
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
