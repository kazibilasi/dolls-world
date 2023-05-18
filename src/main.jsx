import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/Errorpage/Errorpage';
import Main from './components/Main/Main';
import AllToys from './components/AllToys/AllToys';
import MyToys from './components/MyToys/MyToys';
import AddAToy from './components/AddAToys/AddAToy';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main> ,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path : "/AllToys",
        element: <AllToys></AllToys>
      },
      {
        path : "/MyToys",
        element : <MyToys></MyToys>
      },
      {
        path: "/AddAToy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "/blogs",
        element : <Blogs></Blogs>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)