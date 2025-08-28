import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './pages/Start';
import About from './pages/About';
import Projekte from './pages/Projekte';
import Kontakt from './pages/Kontakt';
import Documents from './pages/Documents'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/documents" element={<Documents />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
