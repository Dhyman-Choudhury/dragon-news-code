import { createBrowserRouter } from "react-router";

import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter(
    [
        {
           path:'/',
            Component: HomeLayout,
            children:[
              {
                path:'',
                Component: Home
              },
              {
                path:'/category/:id',
                Component: CategoryNews,
                hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
                loader: () => fetch('../news.json')
              }
            ]
        },
        {
           path:'/auth',
            Component: AuthLayout,
            children:[
              {
                path:"/auth/login",
                Component:Login
              },
              {
                path:"/auth/register",
                Component:Register
              }
            ]
        },
        {
           path:'/news-details/:id',
            Component:NewsDetails,
            hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
            loader: ()=> fetch('../news.json')
        },
        {
           path:'/*',
            element:<h2>Error404</h2>
        },

    ]
)
export default router;