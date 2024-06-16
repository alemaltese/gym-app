//couses
import styles from '../style.module.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

// Import per ottenere i dati dal context
import { MyContextCourses } from './MyContextCourses';

function App() {
  const { courses, setCourses } = useContext(MyContextCourses);

  return (
    <>
      <h1 className={styles.App}>Lista dei corsi</h1>
      <CourseList courses={courses} />
    </>
  );
}

function CourseList({ courses }) {
  const navigate = useNavigate();

  function handleRowClick(index) {
    navigate("/courses/" + courses[index].id);
  }

  return (
    <div className={styles.container}>
      <table className={styles.List}>
        <thead>
          <tr>
            <th>Titolo</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} onClick={() => handleRowClick(index)}>
              <td>{course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.actions}>
        <button className={styles.back_button} onClick={() => navigate("/")}>Back</button>
        {/*<button className={styles.add_button} onClick={() => navigate("/AddPeople/")}>Add people</button>*/}
      </div>
    </div>
  );
}


export default App;

