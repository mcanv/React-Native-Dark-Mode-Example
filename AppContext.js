import { createContext, useState, useContext } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const data = {
    darkMode,
    setDarkMode,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider, useContext };
