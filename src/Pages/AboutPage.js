import React from 'react';
import Navbar from '../Components/Navbar';

const AboutPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Navbar />
            <div style={{
                padding: '40px',
                maxWidth: '800px',
                margin: '0 auto',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}>
                <h1 style={{ color: '#4CAF50', fontSize: '32px', textAlign: 'center' }}>About the Virtual Herbal Garden</h1>
                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: '#333',
                    textAlign: 'center',
                    marginBottom: '30px',
                }}>
                    Welcome to the Virtual Herbal Garden, where you can explore the world of medicinal plants, their
                    uses, and the natural healing power they hold. Whether you're a herbal enthusiast, a student, or just
                    curious about plants, our garden provides an interactive and educational experience.
                </p>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#333' }}>Our Mission</h2>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
                        The mission of the Virtual Herbal Garden is to promote awareness and knowledge of herbal medicine
                        by showcasing a wide variety of medicinal plants. We aim to make learning about herbs engaging,
                        interactive, and accessible to everyone.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', color: '#333' }}>The Importance of Medicinal Plants</h2>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
                        Medicinal plants have been used for thousands of years for their healing properties. These plants
                        offer an alternative to conventional medicine and are an essential part of traditional healing
                        systems around the world. Our garden is here to honor their role in health and wellness.
                    </p>
                </section>
            </div>

            {/* Footer Section */}
            <footer style={{
                marginTop: '40px',
                padding: '20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                textAlign: 'center',
                fontSize: '16px',
            }}>
                <p>&copy; 2025 Virtual Herbal Garden. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
