import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MenuPreview.css';

const MenuPreview = () => {
    const categories = [
        {
            title: "Signature Brews",
            items: [
                { name: "Velvet Espresso", desc: "Double shot with a hint of cocoa nibs", price: "$4.50" },
                { name: "Golden Latte", desc: "Turmeric, honey, almond milk, cinnamon", price: "$5.50" },
                { name: "Maple Cortado", desc: "Espresso cut with maple-infused milk", price: "$4.75" },
                { name: "Cold Brew Noir", desc: "24-hour steep, served over crystal ice", price: "$5.00" }
            ]
        },
        {
            title: "Artisan Pastry",
            items: [
                { name: "Truffle Crossiant", desc: "Savory black truffle butter glaze", price: "$6.00" },
                { name: "Lemon Tart", desc: "Zesty curd, toasted italian meringue", price: "$5.25" },
                { name: "Pistachio Éclair", desc: "Filled with roasted pistachio cream", price: "$5.50" },
                { name: "Sourdough Toast", desc: "Cultured butter, sea salt, preserves", price: "$4.00" }
            ]
        }
    ];

    return (
        <section className="section-padding menu-section">
            <div className="container">
                <div className="menu-header text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="overline"
                    >
                        DISCOVER TASTE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Curated Menu
                    </motion.h2>
                </div>

                <div className="menu-grid-layout">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="menu-category-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="category-title">{cat.title}</h3>
                            <div className="menu-items-container">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="menu-item-row">
                                        <div className="menu-item-info">
                                            <div className="item-name-fancy">{item.name}</div>
                                            <div className="item-desc-fancy">{item.desc}</div>
                                        </div>
                                        <div className="item-price-fancy">{item.price}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '5rem' }}>
                    <Link to="/menu" className="btn-text">View Complete Menu</Link>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
