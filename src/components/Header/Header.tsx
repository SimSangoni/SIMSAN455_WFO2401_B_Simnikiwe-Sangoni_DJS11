import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";

interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps){

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        console.log('Menu toggled')
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <Link to='/'>{title}</Link> 
                </div>
                <nav className="nav">
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shows'>Shows</Link></li>
                        <li><Link to='/genres'>Genres</Link></li>
                    </ul>
                </nav>
                <div onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>
        </header>
    )
}