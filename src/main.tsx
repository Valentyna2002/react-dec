import {createRoot} from 'react-dom/client'
import './index.css'
// import {RouterProvider} from "react-router-dom";
// import {router} from "./router/routes.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./App.tsx";
import {UsersComponent} from "./components/UsersComponent.tsx";
import {PostsComponent} from "./components/PostsComponent.tsx";
import {CommentsComponent} from "./components/CommentsComponent.tsx";
import {ProductsComponent} from "./components/ProductsComponent.tsx";





// createRoot(document.getElementById('root')!).render(
//     <RouterProvider router={router} />);

createRoot(document.getElementById('root')!).
render(<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<App/>}>
            <Route path={'users'} element={<UsersComponent/>}/>
            <Route path={'posts'} element={<PostsComponent/>}/>
            <Route path={'comments'} element={<CommentsComponent/>}/>
            <Route path={'products'} element={<ProductsComponent/>}/>

        </Route>
    </Routes>
</BrowserRouter>)
// _____________________________________________________________________
