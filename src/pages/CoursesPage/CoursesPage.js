import React, { useState } from 'react';
import './CoursesPage.css';

const courses = [
    {
        id: 1,
        title: "React с нуля до профи",
        description: "Полный курс по React, включая хуки и Redux.",
        duration: "12 недель",
        level: "Начальный",
        price: "4999 ₽",
        image: "https://source.unsplash.com/300x200/?coding,react"
    },
    {
        id: 2,
        title: "Основы Python",
        description: "Изучите основы программирования на Python.",
        duration: "10 недель",
        level: "Начальный",
        price: "3999 ₽",
        image: "https://source.unsplash.com/300x200/?coding,python"
    },
    {
        id: 3,
        title: "Веб-разработка",
        description: "Создавайте сайты с нуля с помощью HTML, CSS и JavaScript.",
        duration: "16 недель",
        level: "Средний",
        price: "5999 ₽",
        image: "https://source.unsplash.com/300x200/?coding,web"
    },
    {
        id: 4,
        title: "UI/UX Дизайн",
        description: "Создавайте современные и удобные интерфейсы.",
        duration: "8 недель",
        level: "Средний",
        price: "4499 ₽",
        image: "https://source.unsplash.com/300x200/?design,ui"
    }
];

function CoursesPage() {
    const [filter, setFilter] = useState('all');

    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.level.toLowerCase() === filter.toLowerCase());

    return (
        <div className="courses-page">
            <div className="container">
                <h1 className="page-title">Наши курсы</h1>
                
                <div className="courses-filter">
                    <button 
                        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Все курсы
                    </button>
                    <button 
                        className={`filter-button ${filter === 'начальный' ? 'active' : ''}`}
                        onClick={() => setFilter('начальный')}
                    >
                        Начальный уровень
                    </button>
                    <button 
                        className={`filter-button ${filter === 'средний' ? 'active' : ''}`}
                        onClick={() => setFilter('средний')}
                    >
                        Средний уровень
                    </button>
                </div>

                <div className="courses-grid">
                    {filteredCourses.map(course => (
                        <div key={course.id} className="course-card">
                            <div className="course-image">
                                <img src={course.image} alt={course.title} />
                                <span className="course-level">{course.level}</span>
                            </div>
                            <div className="course-content">
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>
                                <div className="course-meta">
                                    <span className="course-duration">⏱ {course.duration}</span>
                                    <span className="course-price">{course.price}</span>
                                </div>
                                <button className="enroll-button">Записаться</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoursesPage; 