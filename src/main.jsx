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
import AuthProvider from './components/AuthProvider/AuthProvider';
import ToyDetails from './components/ToyDetails/ToyDetails';


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
        element: <AddAToy></AddAToy>,
       

       
       
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
      },
      {
        path: "/toyDetails/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/information/${params.id}`)
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
