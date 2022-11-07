import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
             {
                 path: '/',
                 element:<Home></Home>,
                 loader:()=>fetch('http://localhost:5000/')
               },
        ]
    }
])
export default router;