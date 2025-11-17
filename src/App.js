import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main.jsx';
import Layout from './layout/layout.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productos from './pages/Productos/Productos';
import Producto from './pages/compra/producto.jsx';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeflex/primeflex.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="billeteras" element={<Productos categoria="billeteras" />} />
            <Route path="bolsos" element={<Productos categoria="bolsos" />} />
            <Route path="golosinas" element={<Productos categoria="golosinas" />} />
            <Route path="figuras" element={<Productos categoria="figuras" />} />
            <Route path="tcg" element={<Productos categoria="tcg" />} />
            <Route path="/producto/:nombre" element={<Producto />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
