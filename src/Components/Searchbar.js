// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search plants..."
            value={query}
            onChange={handleSearch}
            style={{ padding: '10px', width: '300px', fontSize: '16px', borderRadius: '5px' }}
        />
    );
};

export default SearchBar;
