import React from 'react';
import mapTheme from '../assets/map-theme.png';
import { MapPin } from 'lucide-react';
import './LocationMap.css';

const LocationMap = () => {
    return (
        <section className="map-section">
            <div className="map-wrapper">
                <img src={mapTheme} alt="Map Location" className="map-img" />
                <div className="map-overlay">
                    <div className="map-card">
                        <h4>The Atelier</h4>
                        <div className="address-line">
                            <p>123 Coffee Lane, Brew City</p>
                            <p>Open Daily 07:00 - 20:00</p>
                        </div>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-directions">
                            <MapPin size={16} /> Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
