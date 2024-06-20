import { useState, useEffect } from 'react';
import { AiFillDownCircle } from "react-icons/ai";
import { SortButtonProps } from '../../utils/Interfaces';
import './SortButton.css'


const SortButton: React.FC<SortButtonProps> = ({ shows, setSortedShows }) => {
    const [sortMenuOpen, setSortMenuOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState('Sort By: A-Z');

    useEffect(() => {
        handleSort('A-Z');
    }, []);

    function handleSort(option: string) {
        setSelectedSortOption(`Sort By: ${option}`);
        setSortMenuOpen(false);
        sortShows(option);
    }

    function sortShows(option: string) {
        let sorted = [...shows];
        switch (option) {
            case 'A-Z':
                sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Z-A':
                sorted = sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'Newest':
                sorted = sorted.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
                break;
            case 'Oldest':
                sorted = sorted.sort((a, b) => new Date(a.updated).getTime() - new Date(b.updated).getTime());
                break;
            default:
                break;
        }
        setSortedShows(sorted);
    }

    function toggleSortMenu() {
        setSortMenuOpen(!sortMenuOpen);
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
