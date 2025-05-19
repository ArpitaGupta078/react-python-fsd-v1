import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './App.css';
import Schedule from './components/schedule.jsx';
import StudyPlanner from './components/sp.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import First from './components/router/first.jsx'; // ✅ Import added
import AboutUs from './components/about.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { path: "/", element: <App /> },
      { path: "/log-in", element: <Login /> },
      { path: "/sign-up", element: <Signup /> },
      { path: "/studyPlanner", element: <StudyPlanner /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/about-us", element: <AboutUs /> },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
