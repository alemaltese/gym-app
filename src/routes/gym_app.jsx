import '../style.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

// Import per ottenere i dati dal context
import { MyContext } from './MyContext';

function App() {
  const { people, setPeople } = useContext(MyContext);

  return (
    <>
      <h1 className='App'>Lista di persone</h1>
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
    <table className='PersonList'>
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
  );
}

export default App;

