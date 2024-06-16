import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { MyContext } from '../MyContext'; // Make sure the path is correct
import styles from './AddPeople.module.css'; // Import the CSS file

function AddPerson() {
  const { people, setPeople } = useContext(MyContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Math.max(...people.map(p => p.id)) + 1, // Start from the highest ID + 1
    name: '',
    surname: '',
    email: '',
    age: '',
    membershipType: ''
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
    setPeople([...people, formData]);
    navigate("/members"); // Redirect appropriately
  };

  return (
    <div className={styles.container}>
      <h1>Add New Person</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>ID</label>
          <input type="number" name="id" value={formData.id} readOnly />
        </div>
        <div className={styles.form_group}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Surname</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className={styles.form_group}>
          <label>Membership Type</label>
          <input type="text" name="membershipType" value={formData.membershipType} onChange={handleChange} required />
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.add_button}>Add Person</button>
          <button type="button" className={styles.back_button} onClick={() => navigate("/")}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default AddPerson;