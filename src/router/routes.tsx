import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../component/UsersComponent/UsersComponent.tsx";
import {PostsComponent} from "../component/PostComponent/PostsComponent.tsx";
import {ProductsComponent} from "../component/ProductsComponent/ProductsComponent.tsx";
import {CommentsComponent} from "../component/CommentsComponent/CommentsComponent.tsx";

export const router = createBrowserRouter([
    {
        path: '/',element:<App/>,
        children:
            [
                {path:'users', element:<UsersComponent/>},
                {path:'posts', element:<PostsComponent/>},
                {path:'comments', element:<CommentsComponent/>},
                {path:'products', element:<ProductsComponent/>},
            ]

    },

])