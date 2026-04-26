import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Catalogo from './pages/store';
import Product from './pages/product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/store" element={<Catalogo />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
