import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from './User.jsx';
import Interests from './Interests.jsx';
import DefaultUser from './DefaultUser.jsx';
import ErrorPage from './ErrorPage.jsx';
import Profile from './Profile.jsx';
import App from './App.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/profile/:name',
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
