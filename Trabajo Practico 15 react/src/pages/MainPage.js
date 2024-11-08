import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { ThemeContext } from '../context/ThemeContext.js';

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  const mainPageStyle = {
    backgroundColor: theme === 'dia' ? '#fff' : '#333',
    color: theme === 'dia' ? '#000' : '#fff',
  };

  return (
    <div style={mainPageStyle}>
      <Header />
      <ThemeToggleButton />
      <ProductList />
    </div>
  );
};

export default MainPage;
