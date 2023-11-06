import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./components/Home/Home";
import Addblogs from "./components/Navber/Addblogs/Addblogs";
import Allblogs from "./components/Navber/Allblogs/Allblogs";
import Featuredblogs from "./components/Navber/Featuredblogs/Featuredblogs";
import Wishlist from "./components/Navber/Wishlist/Wishlist";
import Login from "./components/Authentication/Login";
import Resister from "./components/Authentication/Resister";
import Authprovider from "./components/Authentication/Authprovider";
import Details from "./components/Navber/Allblogs/Details";
import Comment from "./components/Navber/Allblogs/Comment";
import Update from "./components/Navber/Allblogs/Update";
import Error from "./components/Home/Error";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addblog',
        element:<Addblogs></Addblogs>
      },
      {
        path:'/allblogs',
        element:<Allblogs></Allblogs>,
        loader:()=>fetch(`http://localhost:5000/blogs`)
      },
      {
        path:'/featuredblogs',
        element:<Featuredblogs></Featuredblogs>
      },
      {
        path:'/wishlist',
        element:<Wishlist></Wishlist>,
        loader:()=>fetch('http://localhost:5000/wishlist')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path:'/comments',
        element:<Comment></Comment>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    <ToastContainer/>
  </React.StrictMode>
);