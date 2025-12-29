import React from 'react';
import Navbar from '../components/Navbar';
import MenuPreview from '../components/MenuPreview'; // Reusing the list component but maybe expanded
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MenuPage = () => {
    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '8rem', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <span className="overline">CULINARY ARTS</span>
                    <h1 style={{ color: '#fff', fontSize: '3.5rem', fontFamily: 'var(--font-heading)' }}>Full Menu</h1>
                </motion.div>

                {/* Reusing MenuPreview component as it's already a full list style, but usually we'd add more items here */}
                <MenuPreview />
            </div>
            <Footer />
        </>
    );
};

export default MenuPage;
