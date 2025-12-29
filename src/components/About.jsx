import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png'; // Reusing the image but styling differently
import './About.css';

const About = () => {
    return (
        <section className="section-padding about-section" id="about">
            <div className="container about-wrapper">
                <motion.div
                    className="about-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="image-frame-outer">
                        <div className="image-frame-inner">
                            <img src={aboutImg} alt="Interior" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-narrative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="overline">EST. 2010</span>
                    <h2>A Symphony of <br /> <i style={{ fontWeight: 300 }}>Dark & Roast</i></h2>
                    <div className="separator"></div>
                    <p>
                        In the heart of the city lies a sanctuary of silence and scent. Cafe Aura is not merely a coffee shop; it is a homage to the timeless tradition of the bean.
                    </p>
                    <p>
                        Our interiors, draped in shadow and mahogany, invite you to lose yourself. Whether you seek the solitude of a dark corner or the intimacy of a shared table, we provide the backdrop for your story.
                    </p>

                    <div className="signature">
                        <p>Thomas & Marie</p>
                        <span className="role">Founders</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
