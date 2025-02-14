import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Debounce function to limit the number of times the function is called
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const SearchBar = ({ plants }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms debounce delay

    // Filter the plants based on the debounced search query
    const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search Input */}
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a plant..."
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '300px',
                }}
                aria-label="Search for a plant"
            />

            {/* Display filtered plants */}
            {debouncedSearchQuery && (
                <div style={{ marginTop: '10px' }}>
                    <h3>Results:</h3>
                    <ul>
                        {filteredPlants.length > 0 ? (
                            filteredPlants.map((plant) => (
                                <li key={plant.id}>{plant.name}</li>
                            ))
                        ) : (
                            <li>No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

SearchBar.propTypes = {
    plants: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SearchBar;