import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './components/Home';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Account from './components/Account/Account';
import ToyProvider from './ToyProvider/ToyProvider';
import AddToy from './components/Account/ProfileToy/AddToy';
import MyToy from './components/Account/ProfileToy/MyToy';
import AllToyCatagory from './components/Catagory/AllToyCatagory';
import ToyDetails from './components/Catagory/ToyDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch(`https://smfoodshop-server.vercel.app`)
      },

  
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/AllToys',
        element: <AllToyCatagory></AllToyCatagory>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Account></Account></PrivateRoute>
      },
      {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/myToy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path: `/toysDetails/:id`,
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allToys/${params._id}`)
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToyProvider><RouterProvider router={router} /></ToyProvider>
    
  </React.StrictMode>,
)
