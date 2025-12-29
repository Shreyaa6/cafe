import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuPreview from '../components/MenuPreview';
import Reviews from '../components/Reviews';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        // Basic scroll to top on mount if no hash
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <Navbar />
            <div id="top"></div>
            <Hero />
            <div id="about">
                <About />
            </div>
            <MenuPreview />
            <Reviews />
            <LocationMap />
            <Footer />
        </>
    );
};

export default Home;
