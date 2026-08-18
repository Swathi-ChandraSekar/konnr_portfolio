import { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

    document.body.classList.remove(
  "dark-theme",
  "light-theme"
);

document.body.classList.add(
  darkMode
    ? "dark-theme"
    : "light-theme"
);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}