import React from 'react';
import { ThemeProvider } from './context/ThemeContext.js';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
