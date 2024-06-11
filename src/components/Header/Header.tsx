import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";

interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps){

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <Link to='/'>{title}</Link> 
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <span>Toggle Menu</span>
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shows'>Shows</Link></li>
                        <li><Link to='/genres'>Genres</Link></li>
                    </ul>
                </nav>
            
                <div className="user-actions">
                    <span>Search</span>
                    <span>Login</span>
                    <button>Toggle Theme</button>
                </div>
            </div>
        </header>
    )
}