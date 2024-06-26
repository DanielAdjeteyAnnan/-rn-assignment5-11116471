 // ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
  };

  const darkTheme = {
    background: '#000',
    text: '#fff',
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
    colors: isDarkTheme ? darkTheme : lightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
