import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtandCraftItems from "../Pages/AllArtandCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtandCraftList from "../Pages/MyArtandCraftList";

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
            }
        ]
    },
]);