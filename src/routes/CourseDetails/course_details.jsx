import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContextCourses } from "../MyContextCourses";
import styles from './CourseDetails.module.css';

export default function CourseDetails() {
    const { courses, setCourses } = useContext(MyContextCourses);
    const { id } = useParams();
    const navigate = useNavigate();
    const pos = courses.findIndex(course => course.id == id);
    const course = courses[pos];

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({ ...course });

    const deleteCourse = () => {
        setCourses(courses.filter(c => c.id != id));
        navigate("/courses/");
    };

    const editCourse = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveChanges = () => {
        setCourses(courses.map(c => c.id == id ? formData : c));
        setEditMode(false);
    };

    const cancelEdit = () => {
        setFormData({ ...course });
        setEditMode(false);
    };

    return (
        <div className={styles.course_details}>
            <h2>Corso: {id}</h2>
            {editMode ? (
                <div className={styles.edit_mode}>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="title">Title</h4>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="description">Description</h4>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="instructor">Instructor</h4>
                        <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="schedule">Schedule</h4>
                        <input type="text" name="schedule" value={formData.schedule} onChange={handleChange} />
                    </div>
                    <button className={styles.edit_button} onClick={saveChanges}>Save</button>
                    <button className={styles.back_button} onClick={cancelEdit}>Cancel</button>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Instructor</th>
                            <th>Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.instructor}</td>
                            <td>
                                    <ul>
                                        {course.schedule.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                        </tr>
                    </tbody>
                </table>
            )}
            <center>
                <button className={styles.delete_button} onClick={deleteCourse}>Delete</button>
                <button className={styles.edit_button} onClick={editCourse}>Edit</button>
                <button className={styles.back_button} onClick={() => navigate("/courses/")}>Back</button>
            </center>
        </div>
    );
}
