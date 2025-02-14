import React from 'react';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/Searchbar';
import Garden3D from '../Components/Garden3d';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Welcome to the Virtual Herbal Garden</h1>
                <SearchBar />
            </div>
            <Garden3D />
        </div>
    );
};

export default HomePage;
