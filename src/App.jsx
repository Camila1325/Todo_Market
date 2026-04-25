import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import Auth from './pages/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
