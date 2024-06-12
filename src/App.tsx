import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shows from "./pages/Shows/Shows";
import Genres from "./pages/Genres/Genres";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css' // For global styling in future


export default function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const themeLink = document.getElementById('theme-link') as HTMLElement;
    if (theme === 'light') {
      themeLink.setAttribute('href', './src/themes/light-theme.css');
    } else {
      themeLink.setAttribute('href', './src/themes/dark-theme.css');
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

