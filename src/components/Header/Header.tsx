import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";


// Import Icons for header page
import { MdOutlineLightMode, MdDarkMode} from "react-icons/md";
import { TbMusicSearch, TbFileLike } from "react-icons/tb";
import { BsMenuUp, BsMenuDown } from "react-icons/bs";
import { ImPodcast } from "react-icons/im";
import { GiDramaMasks } from "react-icons/gi";
import PodcastIcon from '../../../public/favicon.svg'


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
                                    <ImPodcast className="icon nav-icon" />
                                        Shows
                                </span>   
                            </Link>
                        </li>
                        <li>
                            <Link to='/favourites' onClick={closeMenu}> 
                                <span className="nav-item">
                                    <TbFileLike  className="icon nav-icon" />
                                        Favourites
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/genres' onClick={closeMenu}>
                                <span className="nav-item">
                                    <GiDramaMasks className="icon nav-icon" />
                                    Genres
                                </span>              
                            </Link>
                        </li>
                    </ul>
                </nav>
                    <span className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? 
                    <BsMenuUp className="icon nav-icon"/> : 
                    <BsMenuDown className="icon nav-icon"/>}
                    </span>
                    
              
                <div className="user-actions">
                    <button onClick={toggleTheme}>
                        {
                            theme === 'dark' 
                            ? <MdOutlineLightMode className="icon" />
                            : <MdDarkMode className="icon" />
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
                                    <TbMusicSearch className="icon" />
                            </span>
                        </div>    
            
        </header>
    )
}