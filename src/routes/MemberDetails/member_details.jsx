import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import styles from './MemberDetails.module.css'; // Import the CSS file


//useMemo

export default function MemberDetails() {
    const { people, setPeople } = useContext(MyContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const pos = people.findIndex(person => person.id == id);
    const person = people[pos];

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({ ...person });

    const deleteUser = () => {
        setPeople(people.filter(p => p.id != id));
        navigate("/members/");
    };

    const editUser = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveChanges = () => {
        setPeople(people.map(p => p.id == id ? formData : p));
        setEditMode(false);
    };

    const cancelEdit = () => {
        setFormData({ ...person });
        setEditMode(false);
    };

    return (
        <div className={styles.member_details}>
            <h2>Utente: {id}</h2>
            {editMode ? (
                <div className={styles.edit_mode}>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="name">Name</h4>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="surname">Surname</h4>
                        <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="email">Email</h4>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="age">Age</h4>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div className={styles.edit_row}>
                        <h4 htmlFor="membershipType">Membership Type</h4>
                        <input type="text" name="membershipType" value={formData.membershipType} onChange={handleChange} />
                    </div>
                    <button className={styles.edit_button} onClick={saveChanges}>Save</button>
                    <button className={styles.back_button} onClick={cancelEdit}>Cancel</button>
                </div>
            
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Membership Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.surname}</td>
                            <td>{person.email}</td>
                            <td>{person.age}</td>
                            <td>{person.membershipType}</td>
                        </tr>
                    </tbody>
                </table>
            )}
            <center>
                <button className={styles.delete_button} onClick={deleteUser}>Delete</button>
                <button className={styles.edit_button} onClick={editUser}>Edit</button>
                <button className={styles.back_button} onClick={() => navigate("/members/")}>Back</button>
            </center>
        </div>
    );
}
