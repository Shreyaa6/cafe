import React from 'react';
import { MapPin } from 'lucide-react';
import './LocationMap.css';

const LocationMap = () => {
    return (
        <section className="map-section">
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132684887!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    className="map-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cafe Location Map"
                ></iframe>
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
