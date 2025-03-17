import React from "react";
import "/Users/glebovcharov/Desktop/ExamplePage/courses-site/src/components/Header/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/courses">Курсы</Link></li>
          <li><Link to="/register">Войти в профиль</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;