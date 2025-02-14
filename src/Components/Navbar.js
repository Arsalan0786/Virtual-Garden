// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <nav style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white' }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                    <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/plants" style={{ color: 'white', textDecoration: 'none' }}>Plants List</Link></li>
                    <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
                    <li><Link to="/tour" style={{ color: 'white', textDecoration: 'none' }}>Virtual Tour</Link></li>
                    <li><Link to="/social" style={{ color: 'white', textDecoration: 'none' }}>Social</Link></li>
                </ul>
            </nav>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a plant"
            />
        </>
    );
};

export default Navbar;
