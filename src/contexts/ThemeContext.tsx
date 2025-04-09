
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark" | "purple" | "blue" | "green";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    // Check if the user prefers dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    return savedTheme || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove("light", "dark", "theme-purple", "theme-blue", "theme-green");
    
    // Add the current theme class
    if (theme === "light" || theme === "dark") {
      document.documentElement.classList.add(theme);
    } else {
      // For custom themes, we add both a base (light) and the custom theme class
      document.documentElement.classList.add("light", `theme-${theme}`);
    }
    
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
