import React from 'react';
import mapTheme from '../assets/map-theme.png';
import './LocationMap.css';

const LocationMap = () => {
    return (
        <section className="map-section">
            <div className="map-wrapper">
                <img src={mapTheme} alt="Map Location" className="map-img" />
                <div className="map-overlay">
                    <div className="map-card">
                        <h4>Visit Us</h4>
                        <p>123 Coffee Lane, Brew City</p>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-directions">Get Directions</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
