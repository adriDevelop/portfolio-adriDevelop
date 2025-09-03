import '../styles/Header.css';
import { useState } from 'react';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
      <header>
        <div className="encapsulator">
            <div className="containerImage">
                <img src="src/assets/adriDevelop.png"></img>
            </div>

            <div 
                className={`hamburger ${menuOpen ? 'active' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`containerRoutes ${menuOpen ? 'open' : ''}`}>
                <a href="#" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#" onClick={() => setMenuOpen(false)}>Curriculum</a>
                <a href="#" onClick={() => setMenuOpen(false)}>Proyectos</a>
                <a href="#" onClick={() => setMenuOpen(false)}>Contáctame</a>
            </nav>
        </div>
    </header>
  )
}

export default Header
