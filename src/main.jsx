import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from './Profile.jsx';
import App from './App.jsx';
import './index.css';
import User from './User.jsx';
import Interests from './Interests.jsx';
import DefaultUser from './DefaultUser.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile/:name',
    element: <Profile />,
    children: [
      { index: true, element: <DefaultUser />, },
      { path: 'user', element: <User />, },
      { path: 'interests', element: <Interests />, },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
