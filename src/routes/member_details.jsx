import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";
import "./MemberDetails.css";

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
        <div className="member-details">
            <h2>Utente: {id}</h2>
            {editMode ? (
                <div className="edit-mode">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                    <label htmlFor="membershipType">Membership Type</label>
                    <input type="text" name="membershipType" value={formData.membershipType} onChange={handleChange} />
                    <button className="edit-button" onClick={saveChanges}>Save</button>
                    <button className="back-button" onClick={cancelEdit}>Cancel</button>
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
                <button className="delete-button" onClick={deleteUser}>Delete</button>
                <button className="edit-button" onClick={editUser}>Edit</button>
                <button className="back-button" onClick={() => navigate("/members/")}>Back</button>
            </center>
        </div>
    );
}
