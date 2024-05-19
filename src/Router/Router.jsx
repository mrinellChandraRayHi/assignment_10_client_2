import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtandCraftItems from "../Pages/AllArtandCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtandCraftList from "../Pages/MyArtandCraftList";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

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
                element:<AllArtandCraftItems/>
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