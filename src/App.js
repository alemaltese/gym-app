import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

class Person {
  constructor(name, surname, email, age, subscription) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.age = age;
    this.subscription = subscription;
  }
}

function App() {
  const [people, setPeople] = useState([
    new Person('Mario', 'Rossi', 'mariorossi@gmail.com', 25, 'Premium'),
    new Person('Giuseppe', 'Verdi', 'giuseppeverdi@gmail.com', 30, 'Basic'),
    new Person('Luigi', 'Bianchi', 'luigibianchi@gmail.com', 35, 'Standard'),
  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const editPerson = (index, field, value) => {
    const updatedPeople = [...people];
    updatedPeople[index] = { ...updatedPeople[index], [field]: value };
    setPeople(updatedPeople);
  };

  const deletePerson = () => {
    const updatedPeople = people.filter((_, index) => !selectedRows.includes(index));
    setPeople(updatedPeople);
    setSelectedRows([]);
  };

  const handleCellClick = (index, field, currentValue) => {
    if (isEditing) {
      const newValue = prompt(`Modifica ${field}:`, currentValue);
      if (newValue) {
        editPerson(index, field, field === 'age' ? parseInt(newValue) : newValue);
      }
      setIsEditing(false);  // Disattivare la modalità di modifica dopo l'alert
    }
  };

  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <h1 className='App'>Lista di persone</h1>
      <PersonList 
        people={people} 
        selectedRows={selectedRows}
        handleCheckboxChange={handleCheckboxChange} 
        handleCellClick={handleCellClick} 
        isEditing={isEditing}
      />
      <div className="actions">
        <button onClick={toggleEditMode}>{isEditing ? 'STOP EDIT' : 'EDIT'}</button>
        <button className="delete" onClick={deletePerson}>DELETE</button>
      </div>
    </>
  );
}

function PersonList({ people, selectedRows, handleCheckboxChange, handleCellClick, isEditing }) {
  return (
    <table className='PersonList'>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Email</th>
          <th>Età</th>
          <th>Abbonamento</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index} className={selectedRows.includes(index) ? 'selected' : ''}>
            <td>
              <input 
                type="checkbox" 
                checked={selectedRows.includes(index)} 
                onChange={() => handleCheckboxChange(index)} 
              />
            </td>
            <td 
              className={isEditing ? 'editable' : ''} 
              onClick={() => handleCellClick(index, 'name', person.name)}
            >
              {person.name}
            </td>
            <td 
              className={isEditing ? 'editable' : ''} 
              onClick={() => handleCellClick(index, 'surname', person.surname)}
            >
              {person.surname}
            </td>
            <td 
              className={isEditing ? 'editable' : ''} 
              onClick={() => handleCellClick(index, 'email', person.email)}
            >
              {person.email}
            </td>
            <td 
              className={isEditing ? 'editable' : ''} 
              onClick={() => handleCellClick(index, 'age', person.age)}
            >
              {person.age}
            </td>
            <td 
              className={isEditing ? 'editable' : ''} 
              onClick={() => handleCellClick(index, 'subscription', person.subscription)}
            >
              {person.subscription}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
