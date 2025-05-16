
import {Outlet} from "react-router";
import {UsersMenu} from "../Menu/UsersMenu.tsx";

export const UsersComponent = () => {
    return (
        <div>
          <UsersMenu/>
                 <hr/>
            <Outlet/>
        </div>
    )
}