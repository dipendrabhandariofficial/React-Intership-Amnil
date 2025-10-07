import { createContext,useContext,useEffect,useState } from "react";

// crate the context
export const ThemeContext = createContext();

// create the provider component

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    }, []);

    //save theme when changed
    useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  //toggle theme
    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};
// custom hook to use the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};