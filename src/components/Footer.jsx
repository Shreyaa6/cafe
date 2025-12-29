import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo">
                        <Coffee className="logo-icon" />
                        <span>Cafe Aura</span>
                    </div>
                    <p>
                        Crafting moments of joy, one cup at a time. Join us for a journey of varied flavors and warm conversations.
                    </p>
                    <div className="social-links">
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Coffee Lane, Brew City</li>
                        <li>+1 (555) 123-4567</li>
                        <li>hello@cafeaura.com</li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Subscribe for seasonal specials.</p>
                    <div className="input-group">
                        <input type="email" placeholder="Your email..." />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Cafe Aura. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
