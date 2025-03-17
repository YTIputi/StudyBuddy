import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import Footer from "./components/Footer/Footer";
import CoursesPage from "./components/CoursesPage/CoursesPage";
import RegisterPage from "./components/RegisterPage/RegisterPage"; // Импортируем страницу регистрации

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <AboutSection />
                        <AdvantagesSection />
                        <ReviewsSection />
                    </>
                } />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/register" element={<RegisterPage />} /> {/* Добавили маршрут */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
