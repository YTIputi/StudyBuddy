import React from "react";
import "/Users/glebovcharov/Desktop/ExamplePage/courses-site/src/components/Header/Header.css";
import { NavLink } from "react-router-dom";

// Импортируем логотип
import logo from "/Users/glebovcharov/Desktop/ExamplePage/courses-site/src/assets/logo192.png"; // Укажите путь к логотипу

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Главная</NavLink></li>
          <li><NavLink to="/courses" activeClassName="active">Курсы</NavLink></li>
          <li><NavLink to="/red" activeClassName="active">Редактор</NavLink></li>
        </ul>
      </nav>
      <div className="auth-links">
        <NavLink to="/login" className="auth-link">Login</NavLink>
        <NavLink to="/signup" className="auth-link">Sign Up</NavLink>
      </div>
    </header>
  );
}

export default Header;

