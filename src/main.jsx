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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Account from './components/Account/Account';
import ToyProvider from './ToyProvider/ToyProvider';
import AddToy from './components/Account/ProfileToy/AddToy';
import MyToy from './components/Account/ProfileToy/MyToy';
import AllToyCatagory from './components/Catagory/ShopByCatagory/ShopByCatagory';
import ToyDetails from './components/Catagory/ToyDetails';
import EditToy from './components/Account/ProfileToy/EditToy';
import AllToyDataReceive from './components/Catagory/AllToy/AllToyDataReceive';
import NotFoundPage from './components/NotFoundPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage></NotFoundPage>
      
      },
      {
        path: '/alltoyCard',
        element: <AllToyDataReceive></AllToyDataReceive>,
        
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
        path: 'EditToy/:id',
        element: <PrivateRoute><EditToy></EditToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://next-gen-toy-server.vercel.app/toys/${params.id}`)
      },
      {
        path: 'toysDetails/:toyId',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://next-gen-toy-server.vercel.app/toys/${params.toyId}`)
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToyProvider><RouterProvider router={router} /></ToyProvider>

  </React.StrictMode>,
)
