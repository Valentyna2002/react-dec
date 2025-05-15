import {createRoot} from 'react-dom/client'
import './index.css'
// import {RouterProvider} from "react-router-dom";
// import {router} from "./router/routes.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersComponent} from "./component/UsersComponent/UsersComponent.tsx";
import {PostsComponent} from "./component/PostComponent/PostsComponent.tsx";
import {CommentsComponent} from "./component/CommentsComponent/CommentsComponent.tsx";
import {ProductsComponent} from "./component/ProductsComponent/ProductsComponent.tsx";
import App from "./App.tsx";




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
