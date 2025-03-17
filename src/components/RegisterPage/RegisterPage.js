import React, { useState } from "react";
import "/Users/glebovcharov/Desktop/ExamplePage/courses-site/src/components/RegisterPage/RegisterPage.css";

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User registered:", formData);
    };

    return (
        <div className="register-page">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Имя пользователя" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default RegisterPage;
