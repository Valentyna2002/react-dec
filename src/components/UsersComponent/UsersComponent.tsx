
import {Outlet} from "react-router";
import {UsersMenu} from "../Pages/UsersMenu.tsx";

export const UsersComponent = () => {
    return (
        <div>
          <UsersMenu/>
                 <hr/>
            <Outlet/>
        </div>
    )
}