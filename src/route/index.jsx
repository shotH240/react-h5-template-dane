import React from 'react';
import { Navigate, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Manage from '../views/Manage';
const GetRoutes = () => {
  const router = useRoutes(
    [
      {
        path: '/home',
        element: <Home />,
        children: [
          {
            path: 'manage',
            element: <Manage />
          }
        ]
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Navigate to='/home'/>
      }
    ]
  );
  return router;
};

const ConstantRoute = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
};
export default ConstantRoute;
