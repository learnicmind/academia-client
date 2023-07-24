import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdmissionForm from "../AdmissionForm/AdmissionForm";



export const router = createBrowserRouter([
    {
      path: "*",
      element: <Error404></Error404>,
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'colleges',
                element: <Colleges></Colleges>
            },
            {
                path: '/colleges/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({params}) => fetch(`https://academia-server-eight.vercel.app/colleges/${params.id}`)
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: '/admission/:id',
                element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>,
                loader: ({params}) => fetch(`https://academia-server-eight.vercel.app/admission/${params.id}`)

            },
            {
                path: 'myCollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
  ]);