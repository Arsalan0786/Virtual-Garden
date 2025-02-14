import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const PlantDetailPage = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch plant data based on ID
    useEffect(() => {
        axios.get(`https://your-api-url.com/plants/${id}`) // Replace with your actual API URL
            .then(response => {
                setPlant(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to load plant details');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h2>Loading plant details...</h2>
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
                maxWidth: '900px',
                margin: '40px auto',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
            }}>
                <h1 style={{ color: '#4CAF50', fontSize: '36px', marginBottom: '20px' }}>{plant.name}</h1>

                <img 
                    src={plant.image_url} 
                    alt={plant.name} 
                    style={{ 
                        width: '100%', 
                        maxWidth: '500px', 
                        height: 'auto', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
                        marginBottom: '20px' 
                    }} 
                />

                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
                    {plant.description}
                </p>

                <div style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                }}>
                    <strong>Medicinal Uses:</strong>
                    <p>{plant.medicinalUses}</p>
                </div>

                <div>
                    <h3 style={{ color: '#333' }}>Additional Information</h3>
                    <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
                    <p><strong>Family:</strong> {plant.family}</p>
                </div>
            </div>
        </div>
    );
};

export default PlantDetailPage;
