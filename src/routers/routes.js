import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Services from "../components/Services/Services";
import ServicesDetails from "../components/ServicesDetails";
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
             {
                 path: '/services',
                 element:<Services></Services>,
                 loader:()=>fetch('http://localhost:5000/services')
               },
               {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
              },
               {
                path:'/blog',
                element:<Blog></Blog>
               },
               {
                path:'/login',
                element:<Login></Login>
               },
               {
                path:'/signup',
                element:<SignUp></SignUp>
               }
        ]
    }
])
export default router;