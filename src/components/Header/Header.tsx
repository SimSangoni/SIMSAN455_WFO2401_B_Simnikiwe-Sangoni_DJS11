import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";

// Import Icons for header page

import HomeIcon from './header-icons/home-icon.svg'

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

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to='/'>
                                <img src={HomeIcon} alt="Home" className="nav-icon" />
                                Home
                            </Link>
                        </li>
                        <li><Link to='/shows'>Shows</Link></li>
                        <li><Link to='/genres'>Genres</Link></li>
                    </ul>
                </nav>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <span>Home</span>
                </div>
            
                <div className="user-actions">
                    <span className="search-icon">Search</span>
                    <span>Login</span>
                    <button>Toggle Theme</button>
                </div>
            </div>
        </header>
    )
}