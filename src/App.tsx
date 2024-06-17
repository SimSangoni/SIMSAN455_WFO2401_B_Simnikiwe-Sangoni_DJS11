import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import Genres from "./pages/Genres/Genres";
import GenreShows from './pages/Genres/GenreShows';


import './main.css' // For global styling in future
import './styles/themes.css'

import { fetchShowsAndGenres } from './utils/apiRequests';
import { Show, Genre } from './utils/Interfaces';

export default function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [shows, setShows] = useState<Show[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetchShowsAndGenresData();
  }, []);

  async function fetchShowsAndGenresData() {
    try {
      const { shows, genres } = await fetchShowsAndGenres();
      setShows(shows);
      setGenres(genres);
    } catch (error) {
      console.error('Error fetching shows and genres:', error);
    }
  }

  const toggleSortMenu = () => {
    setSortMenuOpen(!sortMenuOpen);
  };

  const handleSortOption = (option: string) => {
    setSortOption(option);
    setSortMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme');
    }
  , [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    
    <Router>
      <Header 
        toggleTheme={toggleTheme} 
        theme={theme}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        sortMenuOpen={sortMenuOpen}
        toggleSortMenu={toggleSortMenu}
        handleSortOption={handleSortOption}
      />
      <div className='body-content'>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} sortOption={sortOption}/>} />
          <Route path="/favourites" element={<Favourites/>} />
          <Route path="/genres/*" element={<Genres />}>
            <Route path=":genreSlug" element={<GenreShows />} />
          </Route>
        </Routes>
      </div>
      
    </Router>  
   
  )
}

