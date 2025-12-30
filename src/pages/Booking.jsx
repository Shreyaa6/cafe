import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Booking.css';

const CustomDropdown = ({ label, value, onChange, options, placeholder, icon: Icon, name, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value) || { label: placeholder };

    return (
        <div className="form-group">
            <label>{Icon && <Icon size={14} />} {label}</label>
            <div className="custom-dropdown" ref={dropdownRef}>
                <input type="hidden" name={name} value={value || ''} required={required} />
                <button
                    type="button"
                    className="custom-dropdown-trigger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={value ? '' : 'placeholder-text'}>{selectedOption.label}</span>
                    <ChevronUp size={14} className={`chevron ${isOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="custom-dropdown-menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    className={`custom-dropdown-option ${value === option.value ? 'selected' : ''}`}
                                    onClick={() => {
                                        onChange({ target: { name, value: option.value } });
                                        setIsOpen(false);
                                    }}
                                >
                                    {option.icon && React.createElement(option.icon, { size: 16 })}
                                    {option.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        requests: ''
    });

    const timeOptions = [
        { value: '08:00', label: '08:00 AM' },
        { value: '09:00', label: '09:00 AM' },
        { value: '10:00', label: '10:00 AM' },
        { value: '11:00', label: '11:00 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '13:00', label: '01:00 PM' },
        { value: '14:00', label: '02:00 PM' },
        { value: '15:00', label: '03:00 PM' },
        { value: '16:00', label: '04:00 PM' },
        { value: '17:00', label: '05:00 PM' },
        { value: '18:00', label: '06:00 PM' }
    ];

    const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8].map(num => ({
        value: num.toString(),
        label: `${num} ${num === 1 ? 'Guest' : 'Guests'}`,
        icon: Users
    }));

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
                            <CustomDropdown
                                label="Time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                options={timeOptions}
                                placeholder="Select Time"
                                icon={Clock}
                                required
                            />
                        </div>

                        <CustomDropdown
                            label="SELECT GUESTS"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            options={guestOptions}
                            placeholder="SELECT GUESTS"
                            icon={Users}
                        />

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
