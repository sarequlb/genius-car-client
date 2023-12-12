import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                loader: ({params}) => fetch(`https://genius-car-server-osfmg2fdu-kazee-siams-projects.vercel.app/service/${params.id}`),
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/orders',
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
        
    }
]);


export default router;