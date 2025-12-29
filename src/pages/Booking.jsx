import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        requests: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table request received! We will confirm shortly via email.");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar />
            <div className="page-wrapper booking-page">
                <div className="container booking-container">
                    <motion.div
                        className="booking-header text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="overline">RESERVATIONS</span>
                        <h1>Secure Your Table</h1>
                        <p>Experience the ambiance details of Cafe Aura.</p>
                    </motion.div>

                    <motion.form
                        className="booking-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label><Calendar size={14} /> Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label><Clock size={14} /> Time</label>
                                <select name="time" value={formData.time} onChange={handleChange} required>
                                    <option value="">Select Time</option>
                                    <option value="08:00">08:00 AM</option>
                                    <option value="09:00">09:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="13:00">01:00 PM</option>
                                    <option value="14:00">02:00 PM</option>
                                    <option value="15:00">03:00 PM</option>
                                    <option value="16:00">04:00 PM</option>
                                    <option value="17:00">05:00 PM</option>
                                    <option value="18:00">06:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label><Users size={14} /> Guests</label>
                            <select name="guests" value={formData.guests} onChange={handleChange}>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label><MessageSquare size={14} /> Special Requests</label>
                            <textarea
                                name="requests"
                                rows="3"
                                placeholder="Allergies, special occasions..."
                                value={formData.requests}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-submit">Confirm Reservation</button>
                    </motion.form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
