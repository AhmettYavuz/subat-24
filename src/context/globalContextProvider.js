import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("tr");

  return (
    <GlobalContext.Provider value={{ theme, setTheme, lang, setLang }}>
      {children}
    </GlobalContext.Provider>
  );
};
