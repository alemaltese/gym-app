import React, { createContext, useState } from 'react';

const MyContext = createContext();

class Person {
    constructor(id, name, surname, email, age, membershipType) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
        this.membershipType = membershipType;
    }
}


const MyProvider = ({ children }) => {
  const [people, setPeople] = useState([
    new Person(1, 'Mario', 'Rossi', "mario@gmail.com", 40, "Basic"),
    new Person(2, 'Giuseppe', 'Verdi', "giuseppe@gmail.com", 60, "Premium"),
    new Person(3, 'Luigi', 'Bianchi', "luigi@gmail.com", 50, "Basic"),
  ]);

  const removePerson = (id) => {
    setPeople(prevPeople => prevPeople.filter(p => p.id != id));
  };

  const updatePerson = (updatedPerson) => {
    setPeople(prevPeople => prevPeople.map(p => p.id == updatedPerson.id ? updatedPerson : p));
  };

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  return (
    <MyContext.Provider value={{ people, setPeople, removePerson, updatePerson, addPerson }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };