import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchQuery.css';
import { SearchQueryProps } from '../../utils/Interfaces';


const SearchQuery: React.FC<SearchQueryProps> = ({ searchQuery, setSearchQuery }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  function toggleSearch() {
    setSearchOpen(!searchOpen);
  }

  return (
    <div className="search-container">
      {searchOpen && (
        <div className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for podcasts..."
          />
        </div>
      )}
      <span className="search-icon" onClick={toggleSearch}>
        <FaSearch className="icon" />
      </span>
    </div>
  );
};

export default SearchQuery;
