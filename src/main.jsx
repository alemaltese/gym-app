import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './style.css'

// Provider per il context
import { MyProvider } from './routes/MyContext';

// Routes
import Root from "./routes/root";
import GymApp from "./routes/gym_app";
import MemberDetails from "./routes/member_details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/members",
    element: <GymApp />,
  },
  {
    path: "/members/:id",
    element: <MemberDetails />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  </React.StrictMode>,
)
