import React from 'react';
import { motion } from 'framer-motion';
import './MenuPreview.css';

const MenuPreview = () => {
    const menuCategories = [
        {
            title: "Espresso Bar",
            items: [
                { name: "Doppio", price: "$4.00", desc: "Double shot espresso" },
                { name: "Cortado", price: "$4.50", desc: "Equal parts espresso and warm milk" },
                { name: "Flat White", price: "$5.00", desc: "Silky microfoam over espresso" },
                { name: "Mocha Noir", price: "$6.00", desc: "Dark chocolate, espresso, steamed milk" },
            ]
        },
        {
            title: "Pâtisserie",
            items: [
                { name: "Croissant Beurre", price: "$4.50", desc: "AOC butter, 24 layers" },
                { name: "Pain au Chocolat", price: "$5.00", desc: "Dark valrhona chocolate" },
                { name: "Almond Financier", price: "$3.50", desc: "Brown butter cake" },
            ]
        }
    ];

    return (
        <section className="section-padding menu-section">
            <div className="container">
                <div className="menu-header text-center">
                    <span className="overline">SELECTIONS</span>
                    <h2>The Menu</h2>
                </div>

                <div className="menu-columns">
                    {menuCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="menu-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3>{category.title}</h3>
                            <ul className="menu-list">
                                {category.items.map((item, i) => (
                                    <li key={i} className="menu-item">
                                        <div className="menu-item-head">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-line"></span>
                                            <span className="item-price">{item.price}</span>
                                        </div>
                                        <p className="item-desc">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '5rem' }}>
                    <button className="btn-text">View Full Menu</button>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
