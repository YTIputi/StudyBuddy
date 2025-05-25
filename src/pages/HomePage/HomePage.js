import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Добро пожаловать в мир программирования</h1>
                    <p className="hero-subtitle">Изучайте современные технологии с лучшими преподавателями</p>
                    <Link to="/courses" className="button button-primary">
                        Начать обучение
                    </Link>
                </div>
            </section>
            
            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">О нашей платформе</h2>
                    <p className="section-description">
                        Мы предлагаем качественное образование в сфере IT, помогая студентам освоить востребованные навыки
                        и построить успешную карьеру в технологической индустрии.
                    </p>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="advantages-section">
                <div className="container">
                    <h2 className="section-title">Наши преимущества</h2>
                    <div className="advantages-grid">
                        <div className="advantage-card">
                            <div className="advantage-icon">🎓</div>
                            <h3>Опытные преподаватели</h3>
                            <p>Учитесь у практикующих специалистов с многолетним опытом</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">📚</div>
                            <h3>Актуальные знания</h3>
                            <p>Получайте только современные и востребованные навыки</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">💻</div>
                            <h3>Практические задания</h3>
                            <p>Закрепляйте теорию на реальных проектах</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Почему выбирают нас</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎓</div>
                            <h3>Экспертные преподаватели</h3>
                            <p>Учитесь у профессионалов с многолетним опытом в индустрии</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📚</div>
                            <h3>Качественный контент</h3>
                            <p>Доступ к хорошо структурированным курсам с практическими примерами</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💻</div>
                            <h3>Учитесь везде</h3>
                            <p>Занимайтесь в удобном для вас темпе, в любое время и в любом месте</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Готовность к карьере</h3>
                            <p>Получите навыки, необходимые для развития вашей карьеры</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews-section">
                <div className="container">
                    <h2 className="section-title">Отзывы наших студентов</h2>
                    <p className="section-description">
                        Более 1000 студентов уже успешно прошли обучение и достигли своих целей
                    </p>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="review-content">
                                "Отличная платформа для обучения! Преподаватели всегда готовы помочь, а материал подается доступно и интересно."
                            </div>
                            <div className="review-author">
                                <div className="author-name">Анна Петрова</div>
                                <div className="author-course">Курс: React с нуля до профи</div>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="review-content">
                                "Благодаря курсам я смог найти работу мечты в IT. Практические задания помогли создать портфолио."
                            </div>
                            <div className="review-author">
                                <div className="author-name">Иван Смирнов</div>
                                <div className="author-course">Курс: Веб-разработка</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Готовы начать обучение?</h2>
                    <p>Присоединяйтесь к тысячам студентов, уже обучающихся с нами</p>
                    <Link to="/signup" className="button button-primary">
                        Зарегистрироваться
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage; 