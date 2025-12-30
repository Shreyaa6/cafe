import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import './MenuPage.css';

const MenuPage = () => {
    const menuCategories = [
        {
            title: "Signature Brews",
            items: [
                { name: "Velvet Espresso", desc: "Double shot with a hint of cocoa nibs", price: "$4.50" },
                { name: "Golden Latte", desc: "Turmeric, honey, almond milk, cinnamon", price: "$5.50" },
                { name: "Maple Cortado", desc: "Espresso cut with maple-infused milk", price: "$4.75" },
                { name: "Cold Brew Noir", desc: "24-hour steep, served over crystal ice", price: "$5.00" },
                { name: "Honey Lavender Mocha", desc: "Espresso, dark chocolate, lavender honey, steamed milk", price: "$6.00" },
                { name: "Cinnamon Cardamom Cappuccino", desc: "Spiced espresso with velvety foam", price: "$5.25" },
                { name: "Vanilla Bean Macchiato", desc: "House-made vanilla syrup, caramel drizzle", price: "$5.75" },
                { name: "Iced Matcha Latte", desc: "Ceremonial grade matcha, oat milk, agave", price: "$5.50" }
            ]
        },
        {
            title: "Artisan Pastry",
            items: [
                { name: "Truffle Crossiant", desc: "Savory black truffle butter glaze", price: "$6.00" },
                { name: "Lemon Tart", desc: "Zesty curd, toasted italian meringue", price: "$5.25" },
                { name: "Pistachio Éclair", desc: "Filled with roasted pistachio cream", price: "$5.50" },
                { name: "Sourdough Toast", desc: "Cultured butter, sea salt, preserves", price: "$4.00" },
                { name: "Chocolate Ganache Tart", desc: "Dark Belgian chocolate, sea salt caramel", price: "$6.50" },
                { name: "Almond Croissant", desc: "Buttery layers, almond frangipane filling", price: "$5.75" },
                { name: "Raspberry Financier", desc: "French almond cake, fresh raspberries", price: "$4.75" },
                { name: "Salted Caramel Éclair", desc: "Choux pastry, caramel cream, fleur de sel", price: "$5.75" }
            ]
        },
        {
            title: "Light Bites",
            items: [
                { name: "Avocado Toast", desc: "Sourdough, smashed avocado, poached egg, microgreens", price: "$8.50" },
                { name: "Quiche Lorraine", desc: "Bacon, gruyère, caramelized onions", price: "$7.50" },
                { name: "Mediterranean Bowl", desc: "Hummus, olives, feta, roasted vegetables", price: "$9.00" },
                { name: "Smoked Salmon Bagel", desc: "Everything bagel, cream cheese, capers, red onion", price: "$8.75" },
                { name: "Caprese Panini", desc: "Fresh mozzarella, tomato, basil, balsamic glaze", price: "$8.00" },
                { name: "Greek Yogurt Parfait", desc: "House granola, seasonal berries, honey", price: "$7.25" }
            ]
        },
        {
            title: "Specialty Drinks",
            items: [
                { name: "Chai Latte", desc: "Spiced black tea, steamed milk, honey", price: "$4.75" },
                { name: "Hot Chocolate", desc: "Belgian dark chocolate, whipped cream, shaved chocolate", price: "$5.00" },
                { name: "Turmeric Golden Milk", desc: "Turmeric, ginger, coconut milk, black pepper", price: "$5.50" },
                { name: "Earl Grey London Fog", desc: "Earl grey tea, vanilla, steamed milk", price: "$4.50" },
                { name: "Iced Hibiscus Tea", desc: "Hibiscus, lime, mint, agave", price: "$4.25" },
                { name: "Sparkling Lemonade", desc: "Fresh lemon, elderflower, sparkling water", price: "$4.50" }
            ]
        }
    ];

    return (
        <>
            <Navbar />
            <div className="menu-page-wrapper">
                <motion.div
                    className="menu-page-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="overline">CULINARY ARTS</span>
                    <h1>Our Menu</h1>
                    <p>Discover our carefully curated selection of artisanal beverages and pastries</p>
                </motion.div>

                <motion.section
                    className="full-menu-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container">
                        <div className="full-menu-grid">
                            {menuCategories.map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="full-menu-category"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.15, duration: 0.8 }}
                                >
                                    <h3 className="full-category-title">{cat.title}</h3>
                                    <div className="full-menu-items">
                                        {cat.items.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="full-menu-item"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: (idx * 0.15) + (i * 0.05), duration: 0.5 }}
                                            >
                                                <div className="full-item-info">
                                                    <div className="full-item-name">{item.name}</div>
                                                    <div className="full-item-desc">{item.desc}</div>
                                                </div>
                                                <div className="full-item-price">{item.price}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>
            <Footer />
        </>
    );
};

export default MenuPage;
