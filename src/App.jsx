import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Catalogo from './pages/store';
import Product from './pages/product';
import Carrito from './pages/carrito';
import Checkout from './pages/checkout';
import Perfil from './pages/perfil';
import Ofertas from './pages/ofertas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/store" element={<Catalogo />} />
      <Route path="/product" element={<Product />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/ofertas" element={<Ofertas />} />
    </Routes>
  );
}

export default App;
