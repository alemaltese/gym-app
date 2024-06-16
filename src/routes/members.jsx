//members
import styles from '../style.module.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

// Import per ottenere i dati dal context
import { MyContext } from './MyContext';

function App() {
  const { people, setPeople } = useContext(MyContext);

  return (
    <>
      <h1 className={styles.App}>Lista di persone</h1>
      <PersonList people={people} />
    </>
  );
}

function PersonList({ people }) {
  const navigate = useNavigate();

  function handleRowClick(index) {
    navigate("/members/" + people[index].id);
  }

  return (
    <div className={styles.container}>
      <table className={styles.List}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index} onClick={() => handleRowClick(index)}>
              <td>{person.name}</td>
              <td>{person.surname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.actions}>
        <button className={styles.back_button} onClick={() => navigate("/")}>Back</button>
        <button className={styles.add_button} onClick={() => navigate("/AddPeople/")}>Add people</button>
      </div>
    </div>
  );
}


export default App;

