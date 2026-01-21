import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div >
        
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Education" className="nav-link">Education</Link>
      </div>
    </nav>
  );
}