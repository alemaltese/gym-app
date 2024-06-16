import React, { createContext, useState } from 'react';

const MyContextCourses = createContext();

class Course {
  constructor(id, title, description, instructor, schedule) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.instructor = instructor;
      this.schedule = schedule;
  }
}
const MyProviderCourses = ({ children }) => {
  const [courses, setCourses] = useState ([
    new Course(
        1,
        'CrossFit Intenso',
        'Un corso ad alta intensità che combina esercizi di forza e cardio per migliorare la resistenza, la forza e la forma fisica generale.',
        'John Smith',
        [
            'Riscaldamento dinamico',
            'Circuiti di sollevamento pesi (deadlift, squat, clean)',
            'Esercizi a corpo libero (burpees, push-up, pull-up)',
            'Sessioni di interval training ad alta intensità',
            'Stretching e recupero'
        ]
    ),
    new Course(
        2,
        'Yoga Vinyasa Flow',
        'Un corso di yoga dinamico che combina movimenti fluidi con la respirazione consapevole per migliorare la flessibilità, la forza e la pace interiore.',
        'Maria Rossi',
        [
            'Saluti al sole e al mattino',
            'Sequenze di asana fluidi (vinyasa flow)',
            'Focus sulla respirazione profonda (pranayama)',
            'Tecniche di rilassamento e meditazione',
            'Conclusione con rilassamento finale (savasana)'
        ]
    ),
    new Course(
        3,
        'HIIT (High-Intensity Interval Training)',
        'Un corso di allenamento ad alta intensità che alterna brevi esplosioni di esercizio ad alta intensità con periodi di recupero attivo, ideale per bruciare grassi e migliorare la resistenza.',
        'Alex Johnson',
        [
            'Warm-up dinamico',
            'Circuiti di esercizi ad alta intensità (jump squats, mountain climbers, burpees)',
            'Pausa attiva (camminata veloce o jogging leggero)',
            'Ripetizioni di intervalli cronometrati',
            'Cool-down e stretching'
        ]
    ),
    new Course(
        4,
        'Zumba Fitness Party',
        'Un corso divertente che fonde danza latina e fitness cardio per bruciare calorie, migliorare il ritmo e aumentare l\'energia.',
        'Carla Garcia',
        [
            'Riscaldamento con movimenti di salsa e merengue',
            'Coreografie di Zumba ad alta energia',
            'Sessioni di tonificazione muscolare con movimenti di resistenza',
            'Rilassamento finale e stretching'
        ]
    ),
    new Course(
        5,
        'Pilates per il Potenziamento del Core',
        'Un corso che si concentra sul rafforzamento del core, migliorando la stabilità, la postura e la flessibilità attraverso esercizi controllati e respirazione consapevole.',
        'Elena Bianchi',
        [
            'Fondamenti del Pilates (concentrazione, controllo, centro)',
            'Esercizi di matwork per il core (roll-up, hundred, leg circles)',
            'Utilizzo di attrezzi Pilates (fitball, magic circle)',
            'Progressioni avanzate per migliorare la forza e la resistenza',
            'Rilassamento finale e respirazione profonda'
        ]
    )
]);

  const removeCourse = (id) => {
    setCourses(prevCourses => prevCourses.filter(p => p.id != id));
  };

  const updateCourse = (updatedCourse) => {
    setCourses(prevCourses => prevCourses.map(p => p.id == updatedCourse.id ? updatedCourse : p));
  };



  return (
    <MyContextCourses.Provider value={{ courses, setCourses, removeCourse, updateCourse }}>
      {children}
    </MyContextCourses.Provider>
  );
};


export { MyContextCourses, MyProviderCourses };