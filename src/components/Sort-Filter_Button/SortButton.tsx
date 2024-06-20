import { useState } from 'react';
import { AiFillDownCircle } from "react-icons/ai";
import { SortButtonProps } from '../../utils/Interfaces';

import './SortButton.css'

const SortButton: React.FC<SortButtonProps> = ({ sortMenuOpen, toggleSortMenu, handleSortOption }) => {
    const [selectedSortOption, setSelectedSortOption] = useState('Sort By: A-Z');

    function handleSort(option: string) {
        setSelectedSortOption(`Sort By: ${option}`);
        handleSortOption(option);
        toggleSortMenu();
    }

    return (
        <div className="sort-button-container">
            <button onClick={toggleSortMenu} className="sort-button">
                {selectedSortOption} <AiFillDownCircle className="icon" />
            </button>
            {sortMenuOpen && (
                <div className="sort-menu">
                    <button onClick={() => handleSort('A-Z')}>A-Z</button>
                    <button onClick={() => handleSort('Z-A')}>Z-A</button>
                    <button onClick={() => handleSort('Newest')}>Newest</button>
                    <button onClick={() => handleSort('Oldest')}>Oldest</button>
                </div>
            )}
        </div>
    );
};

export default SortButton;
