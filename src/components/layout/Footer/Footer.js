import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Courses</h3>
                    <p className="footer-description">
                        Learn new skills with our expert instructors and advance your career.
                    </p>
                </div>
                
                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4 className="footer-subtitle">Contact Us</h4>
                    <ul className="footer-contact">
                        <li>Email: info@courses.com</li>
                        <li>Phone: +1 234 567 890</li>
                        <li>Address: 123 Learning St, Education City</li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Courses. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 