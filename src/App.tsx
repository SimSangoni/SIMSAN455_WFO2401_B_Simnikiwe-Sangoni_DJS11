import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";

import Shows from "./pages/Shows/Shows";
import ShowDetail from './pages/ShowDetail/ShowDetail';
import SeasonDetail from './pages/SeasonDetail/SeasonDetail';
import { AudioPlayerProvider } from './components/AudioPlayer/AudioPlayerContext';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

import Favourites from "./pages/Favourites/Favourites";
import Genres from "./pages/Genres/Genres";
import GenreDetail from './pages/GenresDetail/GenreDetail';



import './App.css' // For global styling in future
import './styles/themes.css'



export default function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);




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
  <AudioPlayerProvider> 
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
          <Route path="/" element={<Shows searchQuery={searchQuery} sortOption={sortOption}/>} />
          <Route path="show/:id" element={<ShowDetail />}>
            <Route path="season/:seasonId" element={<SeasonDetail />}>
            </Route>
          </Route>
          <Route path="/favourites" element={<Favourites/>} />
          <Route path="/genres" element={<Genres />}/>
          <Route path="/genre/:genreSlug" element={<GenreDetail />} />
        </Routes>
      </div>
      <AudioPlayer />
    </Router>  
  </AudioPlayerProvider>
  )
}

