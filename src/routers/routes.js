import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import MyReviews from "../components/MyReviews";
import Services from "../components/Services/Services";
import ServicesDetails from "../components/ServicesDetails";
import Update from "../components/Update";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
             {
                 path: '/',
                 element:<Home></Home>,
                 loader:()=>fetch('https://shathys-kitchen-server-sheuliaktershathy.vercel.app/servicess')
               },
             {
                 path: '/services',
                 element:<Services></Services>,
                //  loader:()=>fetch('https://shathys-kitchen-server-sheuliaktershathy.vercel.app/services')
               },
               {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params})=> fetch(`https://shathys-kitchen-server-sheuliaktershathy.vercel.app/services/${params.id}`)
              },
               {
                path:'/blog',
                element:<Blog></Blog>
               },
               {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
               },
               {
                path:'/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params})=> fetch(`https://shathys-kitchen-server-sheuliaktershathy.vercel.app/review/${params.id}`)
               },
               {
                path:'/addservices',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
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