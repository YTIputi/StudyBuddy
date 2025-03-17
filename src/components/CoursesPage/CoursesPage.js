import React from "react";
import "/Users/glebovcharov/Desktop/ExamplePage/courses-site/src/components/CoursesPage/CoursesPage.css"; 

const courses = [
  {
    id: 1,
    title: "React с нуля до профи",
    description: "Полный курс по React, включая хуки и Redux.",
    price: "4999 ₽",
    image: "https://source.unsplash.com/300x200/?coding,react"
  },
  {
    id: 2,
    title: "Основы Python",
    description: "Изучите основы программирования на Python.",
    price: "3999 ₽",
    image: "https://source.unsplash.com/300x200/?coding,python"
  },
  {
    id: 3,
    title: "Веб-разработка",
    description: "Создавайте сайты с нуля с помощью HTML, CSS и JavaScript.",
    price: "5999 ₽",
    image: "https://source.unsplash.com/300x200/?coding,web"
  }
];

function CoursesPage() {
  return (
    <div className="courses-page">
      <h1>Наши курсы</h1>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="price">{course.price}</p>
            <button className="enroll-btn">Записаться</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
