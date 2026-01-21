import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import "./css/layout.css"; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<h2>Projects Page</h2>} />
          <Route path="/Education" element={<h2>Education Page</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;