import {CommentsMenu} from "../Pages/CommentsMenu.tsx";
import {Outlet} from "react-router";

export const CommentsComponent = () => {
    return (
        <div>
            <CommentsMenu/>
            <hr/>
            <Outlet/>
        </div>
    )
}