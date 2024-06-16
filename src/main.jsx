import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.module.css';

// Provider per il contesto
import { MyProvider } from './routes/MyContext';
import { MyProviderCourses } from './routes/MyContextCourses';

// Componenti delle rotte
import Root from './routes/Root/root';
import Members from './routes/members';
import MemberDetails from './routes/MemberDetails/member_details';
import AddPeople from './routes/AddPeople/add_people';
import Courses from './routes/courses';
import CourseDetails from './routes/CourseDetails/course_details';

// Creazione del router
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/members" element={<Members />} />
      <Route path="/members/:id" element={<MemberDetails />} />
      <Route path="/addPeople" element={<AddPeople />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
  </Router>
);

// Rendering dell'applicazione
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MyProvider>
      <MyProviderCourses>
        <App />
      </MyProviderCourses>
    </MyProvider>
  </React.StrictMode>
);
