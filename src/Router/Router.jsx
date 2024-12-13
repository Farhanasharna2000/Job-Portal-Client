import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route not found</h2>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute>
          <JobDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute>
          <JobApply />
        </PrivateRoute>,
      },
      {
        path: "/myApplications",
        element: <PrivateRoute>
          <MyApplications />
        </PrivateRoute>,
      },
      {
        path: "/addJob",
        element: <PrivateRoute>
          <AddJob />
        </PrivateRoute>,
      },
      {
        path: "/myPostedJobs",
        element: <PrivateRoute>
          <MyPostedJobs />
        </PrivateRoute>,
      },
      {
      path: "/viewApplications/:job_id",
      element: <PrivateRoute>
        <ViewApplications />
      </PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
    },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ]
  },
]);

export default router;