import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return JSON.parse(storedTheme);
    } else {
      return false;
    }
  });

  useEffect(() => {
    const htmlElement = document.getElementById("root");
    if (theme) {
      htmlElement.classList.add("light-mode");
      htmlElement.classList.remove("dark-mode");
    } else {
      htmlElement.classList.add("dark-mode");
      htmlElement.classList.remove("light-mode");
    }

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function handleClick() {
    setTheme((prevTheme) => !prevTheme);
  }

  return (
    <DarkModeContext.Provider value={{ theme, handleClick }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
