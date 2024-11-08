import './App.css';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
    <h1>Carrito de Compras</h1>
    <ProductList />
    <Cart />
  </CartProvider>
  );
}

export default App;
