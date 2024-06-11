import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";

// Import Icons for header page
import HomeIcon from './header-icons/home-icon.svg'
import ShowsIcon from './header-icons/show-icon.svg'
import GenresIcon from './header-icons/genre-icon.svg'
import SearchIcon from './header-icons/search-icon.svg'
import UserIcon from './header-icons/user-icon.svg'
import MenuIcon from './header-icons/menu-icon.svg'
import PodcastIcon from '../../../public/favicon.svg'


export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        console.log("Menu Toggled")
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <Link to='/'>
                    <span className="nav-item"> 
                        <img src={PodcastIcon} alt="Podcast Icon" className="icon" />
                        <h1 className="nav-title"> Podcastly </h1> 
                    </span>
                        
                    </Link> 
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to='/'>
                                <span className="nav-item">
                                    <img src={HomeIcon} alt="Home" className="icon nav-icon" />
                                        Home
                                </span>   
                            </Link>
                        </li>
                        <li>
                            <Link to='/shows'> 
                                <span className="nav-item">
                                    <img src={ShowsIcon} alt="Shows" className="icon nav-icon" />
                                        Shows
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/genres'>
                                <span className="nav-item">
                                    <img src={GenresIcon} alt="Genres" className="icon nav-icon" />
                                    Genres
                                </span>              
                            </Link>
                        </li>
                        {/* <li>
                            <span className="nav-item">
                                Theme
                            </span>
                        </li> */}
                    </ul>
                </nav>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <span>
                        <img src={MenuIcon} alt="Menu" className="icon nav-icon" />
                    </span>
                </div>
            
                <div className="user-actions">
                    <span className="search-icon">
                        <img src={SearchIcon} alt="Search" className="icon" />
                    </span>
                    <span>
                        <img src={UserIcon} alt="User" className="icon" />
                    </span>
                </div>
            </div>
        </header>
    )
}