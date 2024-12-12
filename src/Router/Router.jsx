import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<h2>Route not found</h2>,

    children:[
       { 
        path: "/",
        element: <Home/>,  
    },
    { 
      path: "/jobs/:id",
      element: <JobDetails/>, 
      loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`) 
  },
    { 
        path: "register",
        element: <Register/>,  
    },
    { 
      path: "signIn",
      element: <SignIn/>,  
  },
    ]
  },
]);

export default router;