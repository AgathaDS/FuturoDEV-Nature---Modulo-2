// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Header from './components/Header'; // Inclua o Header

function App() {
  return (
    <Router>
      <Header /> {/* Exibe o Header em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
