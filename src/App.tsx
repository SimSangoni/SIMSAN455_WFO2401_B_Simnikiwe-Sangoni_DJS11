import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import Genres from "./pages/Genres/Genres";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css' // For global styling in future
import './styles/themes.css'



export default function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [searchQuery, setSearchQuery] = useState('');

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
      />
      <div className='body-content'>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery}/>} />
          <Route path="/shows" element={<Favourites/>} />
          <Route path="/genres" element={<Genres/>} />
        </Routes>
      </div>
      
    </Router>  
   
  )
}

