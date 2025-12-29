import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
    {
        id: 1,
        name: "Eleanor P.",
        text: "The espresso is dark, rich, and unapologetically bold. Exactly how I like my mornings.",
        stars: 5,
    },
    {
        id: 2,
        name: "Marcus Chen",
        text: "An atmosphere that whispers luxury. The hazelnut financier was exquisite.",
        stars: 5,
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        text: "Hidden gem of the city. Perfect for quiet reading or intimate conversations.",
        stars: 5,
    }
];

const Reviews = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % reviewsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding reviews-section">
            <div className="container text-center">
                <span className="overline">VOICES</span>
                <h2>Guest Experiences</h2>

                <div className="reviews-carousel">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="review-card"
                        >
                            <div className="stars">
                                {[...Array(reviewsData[active].stars)].map((_, i) => (
                                    <Star key={i} size={20} fill="var(--color-accent)" stroke="none" />
                                ))}
                            </div>
                            <p className="review-text">"{reviewsData[active].text}"</p>
                            <p className="review-author">— {reviewsData[active].name}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="carousel-dots">
                        {reviewsData.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot ${idx === active ? 'active' : ''}`}
                                onClick={() => setActive(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
