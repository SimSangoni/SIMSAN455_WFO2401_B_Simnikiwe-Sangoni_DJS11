import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shows from "./pages/Shows/Shows";
import Genres from "./pages/Genres/Genres";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css' // For global styling in future
import './styles/themes.css'


export default function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.setAttribute('href', theme === 'light' ? './src/themes/light-theme.css' : './src/themes/dark-theme.css');
    } else {
      console.error("Theme link element not found");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    
    <Router>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </Router>  
   
  )
}

