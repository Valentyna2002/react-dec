import {PostsMenu} from "../Menu/PostsMenu.tsx";
import {Outlet} from "react-router";

export const PostsComponent = () => {
    return (
        <div>
            <PostsMenu/>
            <hr/>
            <Outlet/>
        </div>
    )
}