import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const PlantsListPage = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch plant data from an API or local file
    useEffect(() => {
        axios.get('https://api.example.com/plants')
            .then(response => {
                setPlants(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to load plant list');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h2>Loading plant list...</h2>
                <div className="spinner" style={{ marginTop: '20px' }}></div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h2>{error}</h2>
            </div>
        );
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Navbar />

            <div style={{
                maxWidth: '1200px',
                margin: '40px auto',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
            }}>
                <h1 style={{
                    color: '#4CAF50',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}>
                    Plants List
                </h1>

                <ul style={{
                    listStyleType: 'none',
                    padding: '0',
                    marginTop: '20px',
                    fontSize: '18px',
                    color: '#333',
                }}>
                    {plants.map(plant => (
                        <li key={plant.id} style={{
                            padding: '10px 0',
                            borderBottom: '1px solid #ddd',
                            marginBottom: '10px',
                            fontSize: '20px',
                            fontWeight: '500',
                        }}>
                            <Link
                                to={`/plants/${plant.id}`}
                                style={{
                                    textDecoration: 'none',
                                    color: '#4CAF50',
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    transition: 'color 0.3s',
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#45a049'}
                                onMouseLeave={(e) => e.target.style.color = '#4CAF50'}
                            >
                                {plant.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlantsListPage;
