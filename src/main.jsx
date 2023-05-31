import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './commponent/Home';
import Login from './commponent/Login';
import Regester from './commponent/Regester';
import AuthProviders from './Providers/AuthProviders';
import PrivetRoutes from './routes/PrivetRoutes';
import Order from './commponent/Order';
import Profile from './commponent/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Regester></Regester>
      },
      {
        path:"/Order",
        element:<PrivetRoutes><Order></Order></PrivetRoutes>
      },
      {
        path:'/profile',
        element:<PrivetRoutes><Profile></Profile></PrivetRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
