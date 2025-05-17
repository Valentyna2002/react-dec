import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../components/UsersComponent/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent/PostsComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent/CommentsComponent.tsx";
import {CommentsJson} from "../components/CommentsComponent/Jsonplaceholder/CommentsJson.tsx";
import {PostsJson} from "../components/PostsComponent/Jsonplaceholder/PostsJson.tsx";
import {PostsDummy} from "../components/PostsComponent/DummyJson/PostsDummy.tsx";
import {UsersJson} from "../components/UsersComponent/Jsonplaceholder/UsersJson.tsx";
import {UsersDummy} from "../components/UsersComponent/DummyJson/UsersDummy.tsx";
import {CommentsDummy} from "../components/CommentsComponent/DummyJson/CommentsDummy.tsx";
import {CartsDummy} from "../components/CartsComponent/CartsDummy.tsx";

export const router= createBrowserRouter([
    {
        path: '/',element:<App/>,
        children:[
            {path:'users', element:<UsersComponent/>,children:[
                    {path:'jsonplaceholder',element:<UsersJson/>},
                    {path:'dummyjson',element:<UsersDummy/>
                        // ,children:[{path:':id/carts', element:<CartsDummy/>}]
                    },
                    {path:'dummyjson/:id/carts',element:<CartsDummy/>}

                ]},
            { path:'posts', element:<PostsComponent/>,children:[
                    {path:'jsonplaceholder',element:<PostsJson/>},
                    {path:'dummyjson',element:<PostsDummy/>}]},
            {path:'comments', element:<CommentsComponent/>,children:[
                    {path:'jsonplaceholder',element:<CommentsJson/>},
                    {path:'dummyjson',element:<CommentsDummy/>}
                    ]}
        ]
    }
])