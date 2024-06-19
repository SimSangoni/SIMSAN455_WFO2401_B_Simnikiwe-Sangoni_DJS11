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
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    sortOption: string;
    sortMenuOpen: boolean;
    toggleSortMenu: () => void;
    handleSortOption: (option: string) => void;
  }


export default function Header({
    toggleTheme, 
    theme, 
    searchQuery, 
    setSearchQuery,
    sortMenuOpen,
    toggleSortMenu,
    handleSortOption
}: HeaderProps){

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);


    function toggleMenu() {
        console.log("Menu Toggled")
        setMenuOpen(!menuOpen)
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    function toggleSearch() {
        setSearchOpen(!searchOpen);
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
                            <Link to='/favourites' onClick={closeMenu}> 
                                <span className="nav-item">
                                    <img src={ShowsIcon} alt="Favourites" className="icon nav-icon" />
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
                    <button onClick={toggleTheme}>
                        {
                            theme === 'dark' 
                            ? (<img src={lightThemeIcon} alt="Light Mode" className="icon" />)
                            : (<img src={darkThemeIcon} alt="Dark Mode" className="icon" />)
                        }
                    </button>
                </div>
   

        </div>    

        <div className="search-container">
                        <span>
                        <button onClick={toggleSortMenu}>SORT</button>
                            {sortMenuOpen && (
                                <div className="sort-menu">
                                    <button onClick={() => handleSortOption('A-Z')}>A-Z</button>
                                    <button onClick={() => handleSortOption('Z-A')}>Z-A</button>
                                    <button onClick={() => handleSortOption('Newest')}>Newest</button>
                                    <button onClick={() => handleSortOption('Oldest')}>Oldest</button>
                                </div>
                            )}
                        </span>
                            
                            {searchOpen && (
                                <div className="search-form">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search for shows..."
                                /> 
                                </div>
                            )}
                            <span className="search-icon" onClick={toggleSearch}>
                                    <img src={SearchIcon} alt="Search" className="icon" />
                            </span>
                        </div>    
            
        </header>
    )
}