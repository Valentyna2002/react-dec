import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../components/UsersPage.tsx";
import {PaginationLayout} from "../layout/PaginationLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",element:<App/>,children:[{
            path: 'list', element: <PaginationLayout/>, children: [
                {path: 'users', element: <UsersPage/>}
            ]
        }]
    }
])