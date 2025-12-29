import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <img src={heroImg} alt="Coffee Art" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1>Experience the <span className="highlight">Perfect Brew</span></h1>
                    <p>
                        Artisanal coffee, freshly baked pastries, and a cozy atmosphere descending into your soul.
                        Welcome to Cafe Aura.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            View Menu
                        </button>
                        <button className="btn btn-outline">
                            Our Story <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
