import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";



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
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'myCollege',
                element: <MyCollege></MyCollege>
            }
        ]
    }
  ]);