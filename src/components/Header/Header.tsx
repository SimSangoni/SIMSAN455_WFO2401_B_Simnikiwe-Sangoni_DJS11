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
import darkThemeIcon from '../../assets/theme-icons/dark-theme-icon.svg'
import lightThemeIcon from '../../assets/theme-icons/light-theme-icon.svg'


interface HeaderProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
  }


export default function Header({toggleTheme, theme}: HeaderProps){

    const [menuOpen, setMenuOpen] = useState(false);


    function toggleMenu() {
        console.log("Menu Toggled")
        setMenuOpen(!menuOpen)
    }

    function closeMenu() {
        setMenuOpen(false);
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
                        <li><Link to='/' onClick={closeMenu}>
                                <span className="nav-item">
                                    <img src={HomeIcon} alt="Home" className="icon nav-icon" />
                                        Home
                                </span>   
                            </Link>
                        </li>
                        <li>
                            <Link to='/shows' onClick={closeMenu}> 
                                <span className="nav-item">
                                    <img src={ShowsIcon} alt="Shows" className="icon nav-icon" />
                                        Favourites
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/genres' onClick={closeMenu}>
                                <span className="nav-item">
                                    <img src={GenresIcon} alt="Genres" className="icon nav-icon" />
                                    Genres
                                </span>              
                            </Link>
                        </li>
                    </ul>
                </nav>
                    <span className="menu-toggle" onClick={toggleMenu}>
                    <img className= "icon nav-icon" src={MenuIcon} alt="Menu" />
                    Menu
                    </span>
                    
              
                <div className="user-actions">
                    <span className="search-icon">
                        <img src={SearchIcon} alt="Search" className="icon" />
                    </span>
                    <span>
                        <img src={UserIcon} alt="User" className="icon" />
                    </span>
                    <button onClick={toggleTheme}>
                        {
                            theme === 'dark' 
                            ? (<img src={lightThemeIcon} alt="Light Mode" className="icon" />)
                            : (<img src={darkThemeIcon} alt="Dark Mode" className="icon" />)
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}