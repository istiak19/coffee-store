import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import Home from "../components/Home";
import CardDetails from "../components/CardDetails";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import User from "../components/User";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://coffee-store-server-nu-sooty.vercel.app/coffee'),
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/coffee/:id',
                loader: ({ params }) => fetch(`https://coffee-store-server-nu-sooty.vercel.app/coffee/${params.id}`),
                element: <CardDetails></CardDetails>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://coffee-store-server-nu-sooty.vercel.app/coffee/${params.id}`),
                element: <UpdateCoffee></UpdateCoffee>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                loader: () => fetch('https://coffee-store-server-nu-sooty.vercel.app/users'),
                element: <User></User>
            }
        ]
    }
])

export default routers;