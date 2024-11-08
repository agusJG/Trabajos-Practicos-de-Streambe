import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      cambiar a modo {theme === 'dia' ? 'noche' : 'dia'} 
    </button>
  );
};

export default ThemeToggleButton;
