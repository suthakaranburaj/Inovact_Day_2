import React, { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>{children}</ThemeContext.Provider>
  );
};
