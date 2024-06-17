import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { MyContextCourses } from '../MyContextCourses'; 
import styles from './AddCourses.module.css'; 

function AddCourses() {
  const { courses, setCourses } = useContext(MyContextCourses);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Math.max(...courses.map(p => p.id)) + 1,
    title: '',
    description: '',
    instructor: '',
    schedule: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, formData]);
    navigate("/courses");
  };

  return (
    <div className={styles.container}>
      <h1>Add New Course</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>ID</label>
          <input type="number" name="id" value={formData.id} readOnly />
        </div>
        <div className={styles.form_group}>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Instructor</label>
          <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Schedule</label>
          <input type="text" name="schedule" value={formData.schedule} onChange={handleChange} required />
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.add_button}>Add Course</button>
          <button type="button" className={styles.back_button} onClick={() => navigate("/")}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default AddCourses;