import {
    ThemeProvider,
    createTheme,
  } from "@mui/material";
  import React, { createContext, useState, ReactNode } from "react";
  
  export type ContextType = {
    darkMode: boolean;
    setDarkMode: (value: React.SetStateAction<boolean>) => void;
  };
  
  export const AppContext = createContext({} as ContextType);
  
  export default function ContextProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(true);
  
 
  
    const AppTheme = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    });
  
    return (
      <AppContext.Provider
        value={{
          darkMode,
          setDarkMode
        }}
      >
        <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
      </AppContext.Provider>
    );
  }