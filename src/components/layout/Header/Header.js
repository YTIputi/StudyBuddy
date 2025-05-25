import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Header.css';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="header">
            <nav className="header-nav container">
                <Link to="/" className="header-logo">
                    Courses
                </Link>
                <ul className="header-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={handleLogout} className="header-button">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup" className="header-button">Sign Up</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 