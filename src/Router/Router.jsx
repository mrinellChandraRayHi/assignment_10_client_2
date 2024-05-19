import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtandCraftItems from "../Pages/AllArtandCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtandCraftList from "../Pages/MyArtandCraftList";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UpdateArtAndCraft from "../Pages/UpdateArtAndCraft";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allArtAndCraftItems',
                element:<AllArtandCraftItems/>,
                loader:()=>fetch('http://localhost:5000/crafts')
            },
            {
                path:'/addCraftItem',
                element:<AddCraftItem/>
            },
            {
                path:"/myArtAndCraftList",
                element:<MyArtandCraftList/>
            },
            {
                path:"/updateArtAndCraft/:id",
                element:<UpdateArtAndCraft/>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Details/>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path:'/signIn',
                element:<SignIn/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            }
        ]
    },
]);