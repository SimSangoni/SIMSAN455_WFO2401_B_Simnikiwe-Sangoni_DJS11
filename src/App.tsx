import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shows from "./pages/Shows/Shows";
import Genres from "./pages/Genres/Genres";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {

  return (
    
    <Router>
      <Header title="Podcastly"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </Router>  
   
  )
}

